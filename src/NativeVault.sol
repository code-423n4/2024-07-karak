// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {ERC4626, ERC20} from "solady/src/tokens/ERC4626.sol";
import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";
import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";
import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

import {Pauser} from "./entities/Pauser.sol";
import {VaultLib} from "./entities/VaultLib.sol";
import {INativeNode} from "./interfaces/INativeNode.sol";
import {INativeVault} from "./interfaces/INativeVault.sol";
import {BeaconProofs} from "./entities/BeaconProofsLib.sol";
import {NativeVaultLib} from "./entities/NativeVaultLib.sol";
import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";

import "./interfaces/Errors.sol";
import "./interfaces/Events.sol";
import "./interfaces/Constants.sol";

contract NativeVault is ERC4626, IBeacon, Pauser, INativeVault, OwnableRoles, ReentrancyGuard {
    using NativeVaultLib for NativeVaultLib.Storage;

    // keccak256(abi.encode(uint256(keccak256("native-vault.state")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant STATE_SLOT = 0x0e977c4f52771ae90b9a885786536a06e14de7815be95b6ed56cdea86f6fc300;

    // keccak256(abi.encode(uint256(keccak256("native-vault.config")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant CONFIG_SLOT = 0xb6497276931248fe2cc1dc985a2850cccba81036959c83b89ec93582a1e00900;

    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the vault
    /// @param _owner The owner of the NativeVault, which should be Core in most cases.
    /// @param _operator The operator of the vault (usually the caller of the deployVault function on Core which triggers this).
    /// @param _depositToken Disregarded for NativeVault. Can be address(0).
    /// @param _name The name of the vault
    /// @param _symbol The symbol of the vault
    /// @param _extraData Serialized bytes consisting {address slashStore, address nodeImplementation}
    function initialize(
        address _owner,
        address _operator,
        address _depositToken,
        string memory _name,
        string memory _symbol,
        bytes memory _extraData
    ) external initializer {
        _initializeOwner(_owner);
        __Pauser_init();

        if (_depositToken != Constants.DEAD_BEEF) revert DepositTokenNotAccepted();

        (address manager, address slashStore, address nodeImplementation) =
            abi.decode(_extraData, (address, address, address));

        if (manager == address(0) || slashStore == address(0) || nodeImplementation == address(0)) revert ZeroAddress();
        _grantRoles(manager, Constants.MANAGER_ROLE);

        NativeVaultLib.Storage storage self = _state();
        VaultLib.Config storage config = _config();

        config.asset = _depositToken;
        config.name = _name;
        config.symbol = _symbol;
        config.decimals = 18;
        config.operator = _operator;
        config.extraData = _extraData;

        self.slashStore = slashStore;
        self.nodeImpl = nodeImplementation;

        emit NativeVaultInitialized(_owner, manager, _operator, slashStore);
    }

    /// @notice Allows the owner to change the NativeNode implementation and upgrade all NativeNodes
    /// @param newNodeImplementation: The address of the new node implementation
    function changeNodeImplementation(address newNodeImplementation)
        external
        onlyOwnerOrRoles(Constants.MANAGER_ROLE)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_NODE_IMPLEMENTATION)
    {
        if (newNodeImplementation == address(0)) revert ZeroAddress();

        _state().nodeImpl = newNodeImplementation;
        emit UpgradedAllNodes(newNodeImplementation);
    }

    /// @notice Deploys a new NativeNode for the caller
    function createNode()
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_CREATE_NODE)
        returns (address)
    {
        NativeVaultLib.Storage storage self = _state();
        address newNodeAddr = self.deployNode(_config(), msg.sender);
        self.ownerToNode[msg.sender].nodeAddress = newNodeAddr;
        self.nodeToOwner[newNodeAddr] = msg.sender;
        return newNodeAddr;
    }

    /// @notice Lets the owner start a snapshot for their NativeNode which is completed
    /// only when balance proofs are submitted for all active validators of the node.
    /// Reverts if there is a pending snapshot in progress or if there is no balance change
    /// from the last snapshot.
    function startSnapshot(bool revertIfNoBalanceChange)
        external
        nonReentrant
        nodeExists(msg.sender)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_SNAPSHOT)
    {
        _startSnapshot(_state().ownerToNode[msg.sender], revertIfNoBalanceChange, msg.sender);
    }

    /// @notice Validates snapshot proofs that can be submitted by anyone for active
    /// validators in the NativeNode and awards or burns shares for balance changes.
    /// @param nodeOwner: address of the owner whose NativeNode the proof is submitted for
    /// @param balanceProofs: proofs for validators balance validated against the balance container root
    /// @param balanceContainer: balance container proof validated against the snapshot's beacon block root
    function validateSnapshotProofs(
        address nodeOwner,
        BeaconProofs.BalanceProof[] calldata balanceProofs,
        BeaconProofs.BalanceContainer calldata balanceContainer
    )
        external
        nonReentrant
        nodeExists(nodeOwner)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_SNAPSHOT)
    {
        NativeVaultLib.Storage storage self = _state();
        NativeVaultLib.NativeNode storage node = self.ownerToNode[nodeOwner];
        NativeVaultLib.Snapshot memory snapshot = node.currentSnapshot;

        if (node.currentSnapshotTimestamp == 0) revert NoActiveSnapshot();

        BeaconProofs.validateBalanceContainer(snapshot.parentBeaconBlockRoot, balanceContainer);

        for (uint256 i = 0; i < balanceProofs.length; i++) {
            NativeVaultLib.ValidatorDetails memory validatorDetails =
                node.validatorPubkeyHashToDetails[balanceProofs[i].pubkeyHash];

            if (validatorDetails.status != NativeVaultLib.ValidatorStatus.ACTIVE) revert InactiveValidator();
            if (validatorDetails.lastBalanceUpdateTimestamp >= node.currentSnapshotTimestamp) {
                revert ValidatorAlreadyProved();
            }

            int256 balanceDeltaWei = self.validateSnapshotProof(
                nodeOwner, validatorDetails, balanceContainer.containerRoot, balanceProofs[i]
            );

            snapshot.remainingProofs--;
            snapshot.balanceDeltaWei += balanceDeltaWei;
        }

        _updateSnapshot(node, snapshot, nodeOwner);
    }

    /// @notice Validates that a validator's withdrawal credentials are pointed to the an owner's NativeNode.
    /// @param nodeOwner: address of the owner whose NativeNode the proof is submitted for
    /// @param beaconStateRootProof: proof of a beacon state root against the beacon block root
    /// @param validatorFieldsProofs: validator fields proofs validated against the beacon state root
    function validateWithdrawalCredentials(
        address nodeOwner,
        BeaconProofs.BeaconStateRootProof calldata beaconStateRootProof,
        BeaconProofs.ValidatorFieldsProof[] calldata validatorFieldsProofs
    )
        external
        nonReentrant
        nodeExists(nodeOwner)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_WITHDRAW_CREDS)
    {
        NativeVaultLib.Storage storage self = _state();
        NativeVaultLib.NativeNode storage node = self.ownerToNode[nodeOwner];

        if (beaconStateRootProof.timestamp == block.timestamp) {
            revert BeaconTimestampIsCurrent();
        }
        if (
            beaconStateRootProof.timestamp < node.lastSnapshotTimestamp
                || beaconStateRootProof.timestamp < node.currentSnapshotTimestamp
        ) revert BeaconTimestampTooOld();

        uint256 totalRestakedWei;
        BeaconProofs.validateBeaconStateRootProof(
            _getParentBlockRoot(beaconStateRootProof.timestamp), beaconStateRootProof
        );

        for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {
            totalRestakedWei += self.validateWithdrawalCredentials(
                nodeOwner,
                beaconStateRootProof.timestamp,
                beaconStateRootProof.beaconStateRoot,
                validatorFieldsProofs[i]
            );
        }

        _increaseBalance(nodeOwner, totalRestakedWei);
    }

    /// @notice Allows anyone to start a new snapshot if the last snapshot has expired,
    /// i.e. older than `Constants.SNAPSHOT_EXPIRY since the last completed timestamp.
    /// Does not revert if there is no change in balance.
    /// @param nodeOwner: address of the owner whose NativeNode has expired snapshot
    function validateExpiredSnapshot(address nodeOwner)
        external
        nonReentrant
        nodeExists(nodeOwner)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_EXPIRED_SNAPSHOT)
    {
        NativeVaultLib.NativeNode storage node = _state().ownerToNode[nodeOwner];
        // Only check if the last snapshot has expired or not
        if (node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY > block.timestamp) {
            revert SnapshotNotExpired();
        }

        _startSnapshot(node, false, nodeOwner);
    }

    /// @notice Allows caller to start a withdrawal to withdraw ETH accrued on their NativeNode
    /// @param to: address to withdraw the funds to
    /// @param weiAmount: amount to be withdrawn in wei
    function startWithdrawal(address to, uint256 weiAmount)
        external
        nonReentrant
        nodeExists(msg.sender)
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_WITHDRAWAL)
        returns (bytes32 withdrawalKey)
    {
        // TODO: make more recent snapshot compulsory
        NativeVaultLib.Storage storage self = _state();
        NativeVaultLib.NativeNode storage node = self.ownerToNode[msg.sender];
        if (weiAmount > withdrawableWei(msg.sender) - self.nodeOwnerToWithdrawAmount[msg.sender]) {
            revert WithdrawMoreThanMax();
        }
        self.nodeOwnerToWithdrawAmount[msg.sender] += weiAmount;

        if (block.timestamp >= node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY) {
            revert SnapshotExpired();
        }

        withdrawalKey = NativeVaultLib.calculateWithdrawKey(msg.sender, self.nodeOwnerToWithdrawNonce[msg.sender]++);
        address nodeOwner = msg.sender;

        self.withdrawalMap[withdrawalKey].to = to;
        self.withdrawalMap[withdrawalKey].assets = weiAmount;
        self.withdrawalMap[withdrawalKey].nodeOwner = nodeOwner;
        self.withdrawalMap[withdrawalKey].start = uint96(block.timestamp);

        emit StartedWithdraw(nodeOwner, _config().operator, withdrawalKey, weiAmount, to);

        return withdrawalKey;
    }

    /// @notice Allows caller to finish a pending withdrawal
    /// @param withdrawalKey: The ID of the withdrawal request returned by startWithdrawal
    function finishWithdrawal(bytes32 withdrawalKey)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_FINISH_WITHDRAWAL)
    {
        NativeVaultLib.Storage storage self = _state();
        NativeVaultLib.QueuedWithdrawal memory startedWithdrawal = self.withdrawalMap[withdrawalKey];
        NativeVaultLib.NativeNode storage node = self.ownerToNode[startedWithdrawal.nodeOwner];

        if (startedWithdrawal.start == 0) revert WithdrawalNotFound();
        if (startedWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {
            revert MinWithdrawDelayNotPassed();
        }
        self.nodeOwnerToWithdrawAmount[startedWithdrawal.nodeOwner] -= startedWithdrawal.assets;

        uint256 withdrawableAssets = withdrawableWei(startedWithdrawal.nodeOwner);
        if (startedWithdrawal.assets > withdrawableAssets) {
            startedWithdrawal.assets = withdrawableAssets;
        }
        _decreaseBalance(startedWithdrawal.nodeOwner, startedWithdrawal.assets);
        INativeNode(node.nodeAddress).withdraw(startedWithdrawal.to, startedWithdrawal.assets);
        node.withdrawableCreditedNodeETH -= startedWithdrawal.assets;

        delete self.withdrawalMap[withdrawalKey];

        emit FinishedWithdraw(
            startedWithdrawal.nodeOwner,
            startedWithdrawal.to,
            _config().operator,
            startedWithdrawal.assets,
            withdrawalKey
        );
    }

    /// @notice Allows the owner to slash the vault with given amount
    /// @param totalAssetsToSlash: amount to slash in wei
    /// @param slashingHandler: address of the slash store
    function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
        external
        onlyOwner
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_SLASHER)
        returns (uint256 transferAmount)
    {
        NativeVaultLib.Storage storage self = _state();

        if (slashingHandler != self.slashStore) revert NotSlashStore();

        // avoid negative totalAssets if slashing amount is greater than totalAssets
        if (totalAssetsToSlash > self.totalAssets) {
            totalAssetsToSlash = self.totalAssets;
        }

        self.totalAssets -= totalAssetsToSlash;
        emit Slashed(totalAssetsToSlash);
        return totalAssetsToSlash;
    }

    /// @notice Lets the owner pause NativeVault functions
    /// @param map: 256 bitmap for paused and unpaused functions, type(uint256).max to pause all functions
    function pause(uint256 map) external onlyOwner {
        _pause(map);
    }

    /// @notice Lets the owner unpause NativeVault functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpause(uint256 map) external onlyOwner {
        _unpause(map);
    }

    /// @notice Lets the owner or manager of the NativeVault pause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function pauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        node.pause(map);
    }

    /// @notice Lets the owner or manager of the NativeVault unpause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        node.unpause(map);
    }
    /* ======================================== */

    /* ============ VIEW FUNCTIONS ============ */
    function withdrawableWei(address nodeOwner) public view nodeExists(nodeOwner) returns (uint256) {
        return
            Math.min(convertToAssets(balanceOf(nodeOwner)), _state().ownerToNode[nodeOwner].withdrawableCreditedNodeETH);
    }

    function activeValidatorCount(address nodeOwner) public view nodeExists(nodeOwner) returns (uint256) {
        return _state().ownerToNode[nodeOwner].activeValidatorCount;
    }

    function getNextWithdrawNonce(address nodeOwner) public view returns (uint256) {
        return _state().nodeOwnerToWithdrawNonce[nodeOwner];
    }

    function isWithdrawalPending(address nodeOwner, uint256 withdrawNonce) public view returns (bool) {
        return _state().withdrawalMap[NativeVaultLib.calculateWithdrawKey(nodeOwner, withdrawNonce)].start > 0;
    }

    function getQueuedWithdrawal(address nodeOwner, uint256 withdrawNonce)
        public
        view
        returns (NativeVaultLib.QueuedWithdrawal memory)
    {
        return _state().withdrawalMap[NativeVaultLib.calculateWithdrawKey(nodeOwner, withdrawNonce)];
    }

    function getNodeOwner(address node) external view returns (address) {
        return _state().nodeToOwner[node];
    }

    function getValidatorDetails(bytes32 pubKey, address nodeOwner)
        external
        view
        nodeExists(nodeOwner)
        returns (NativeVaultLib.ValidatorDetails memory)
    {
        return _state().ownerToNode[nodeOwner].validatorPubkeyHashToDetails[pubKey];
    }

    function lastSnapshotTimestamp(address nodeOwner) external view nodeExists(nodeOwner) returns (uint64) {
        return _state().ownerToNode[nodeOwner].lastSnapshotTimestamp;
    }

    function currentSnapshotTimestamp(address nodeOwner) external view nodeExists(nodeOwner) returns (uint64) {
        return _state().ownerToNode[nodeOwner].currentSnapshotTimestamp;
    }

    function currentSnapshot(address nodeOwner)
        external
        view
        nodeExists(nodeOwner)
        returns (NativeVaultLib.Snapshot memory)
    {
        return _state().ownerToNode[nodeOwner].currentSnapshot;
    }
    /* ======================================== */

    /* ========== INTERNAL FUNCTIONS ========== */
    function _state() internal pure returns (NativeVaultLib.Storage storage $) {
        assembly {
            $.slot := STATE_SLOT
        }
    }

    function _config() internal pure returns (VaultLib.Config storage $) {
        assembly {
            $.slot := CONFIG_SLOT
        }
    }

    function _getParentBlockRoot(uint64 timestamp) internal view returns (bytes32) {
        (bool success, bytes memory result) = Constants.BEACON_ROOTS_ADDRESS.staticcall(abi.encode(timestamp));

        if (success && result.length > 0) {
            return abi.decode(result, (bytes32));
        } else {
            revert BeaconRootFetchError();
        }
    }

    function _transferToSlashStore(address nodeOwner) internal {
        NativeVaultLib.Storage storage self = _state();
        NativeVaultLib.NativeNode storage node = self.ownerToNode[nodeOwner];

        // slashed ETH = total restaked ETH (node + beacon) - share price equivalent ETH
        uint256 slashedAssets = node.totalRestakedETH - convertToAssets(balanceOf(nodeOwner));

        // sweepable ETH = min(ETH available on node address, total slashed ETH)
        uint256 slashedWithdrawable = Math.min(node.nodeAddress.balance, slashedAssets);

        // withdraw sweepable ETH to slashStore
        INativeNode(node.nodeAddress).withdraw(self.slashStore, slashedWithdrawable);

        // update total restaked ETH available (node + beacon)
        node.totalRestakedETH -= slashedWithdrawable;

        // update withdrawable credited ETH available on the node only when node balance
        // decreases to less than that of the credited node ETH
        if (node.nodeAddress.balance < node.withdrawableCreditedNodeETH) {
            node.withdrawableCreditedNodeETH = node.nodeAddress.balance;
        }
    }

    function _startSnapshot(NativeVaultLib.NativeNode storage node, bool revertIfNoBalanceChange, address nodeOwner)
        internal
    {
        if (node.currentSnapshotTimestamp != 0) revert PendingIncompleteSnapshot();

        // Sweep slashed ETH from node balance before locking in snapshot node balance.
        // This allows all the ETH that was theoritically slashed in `slashAssets` function call can be moved to a slash store,
        // which can decide what to do with this slashed ETH.
        _transferToSlashStore(nodeOwner);

        // Calculate unattributed node balance
        uint256 nodeBalanceWei = node.nodeAddress.balance - node.withdrawableCreditedNodeETH;

        if (revertIfNoBalanceChange && nodeBalanceWei == 0) revert NoBalanceUpdateToSnapshot();

        NativeVaultLib.Snapshot memory snapshot = NativeVaultLib.Snapshot({
            parentBeaconBlockRoot: _getParentBlockRoot(uint64(block.timestamp)),
            nodeBalanceWei: nodeBalanceWei,
            balanceDeltaWei: 0,
            remainingProofs: node.activeValidatorCount
        });

        node.currentSnapshotTimestamp = uint64(block.timestamp);
        _updateSnapshot(node, snapshot, nodeOwner);

        emit SnapshotCreated(nodeOwner, node.nodeAddress, uint64(block.timestamp), snapshot.parentBeaconBlockRoot);
    }

    function _updateSnapshot(
        NativeVaultLib.NativeNode storage node,
        NativeVaultLib.Snapshot memory snapshot,
        address nodeOwner
    ) internal {
        if (snapshot.remainingProofs == 0) {
            int256 totalDeltaWei = int256(snapshot.nodeBalanceWei) + snapshot.balanceDeltaWei;

            node.withdrawableCreditedNodeETH += snapshot.nodeBalanceWei;

            node.lastSnapshotTimestamp = node.currentSnapshotTimestamp;
            delete node.currentSnapshotTimestamp;
            delete node.currentSnapshot;

            _updateBalance(nodeOwner, totalDeltaWei);
            emit SnapshotFinished(nodeOwner, node.nodeAddress, node.lastSnapshotTimestamp, totalDeltaWei);
        } else {
            node.currentSnapshot = snapshot;
        }
    }

    function _increaseBalance(address _of, uint256 assets) internal {
        NativeVaultLib.Storage storage self = _state();
        if (assets + self.totalAssets > maxDeposit(_of)) revert DepositMoreThanMax();
        uint256 shares = convertToShares(assets);
        _mint(_of, shares);
        self.totalAssets += assets;
        self.ownerToNode[_of].totalRestakedETH += assets;
        emit IncreasedBalance(self.ownerToNode[_of].totalRestakedETH);
    }

    function _decreaseBalance(address _of, uint256 assets) internal {
        NativeVaultLib.Storage storage self = _state();
        uint256 shares = previewWithdraw(assets);
        _beforeWithdraw(assets, shares);
        _burn(_of, shares);
        self.totalAssets -= assets;
        self.ownerToNode[_of].totalRestakedETH -= assets;
        emit DecreasedBalance(self.ownerToNode[_of].totalRestakedETH);
    }

    function _updateBalance(address _of, int256 assets) internal {
        if (assets > 0) {
            _increaseBalance(_of, uint256(assets));
        } else if (assets < 0) {
            _decreaseBalance(_of, uint256(-assets));
        } else {
            return;
        }
    }
    /* ======================================== */

    /* ============== MODIFIERS =============== */
    modifier nodeExists(address owner) {
        if (_state().ownerToNode[owner].nodeAddress == address(0)) revert NotNodeOwner();
        _;
    }
    /* ======================================== */

    /* ============== OVERRIDES =============== */
    function transfer(address to, uint256 amount) public pure override returns (bool) {
        // To suppress warnings
        to = to;
        amount = amount;

        revert NotImplemented();
    }

    function transferFrom(address from, address to, uint256 amount) public pure override returns (bool) {
        // To suppress warnings
        from = from;
        to = to;
        amount = amount;

        revert NotImplemented();
    }

    function deposit(uint256 assets, address to) public pure override returns (uint256 shares) {
        // To suppress warnings
        assets = assets;
        to = to;
        shares = shares;

        revert NotImplemented();
    }

    function mint(uint256 shares, address to) public pure override returns (uint256 assets) {
        // To suppress warnings
        shares = shares;
        to = to;
        assets = assets;

        revert NotImplemented();
    }

    function withdraw(uint256 assets, address to, address owner) public pure override returns (uint256 shares) {
        // To suppress warnings
        owner = owner;
        assets = assets;
        to = to;
        shares = shares;

        revert NotImplemented();
    }

    function redeem(uint256 shares, address to, address owner) public pure override returns (uint256 assets) {
        // To suppress warnings
        owner = owner;
        to = to;
        shares = shares;
        assets = assets;

        revert NotImplemented();
    }

    function previewDeposit(uint256 assets) public pure override returns (uint256 shares) {
        // To suppress warnings
        assets = assets;
        shares = shares;

        revert NotImplemented();
    }

    function previewRedeem(uint256 shares) public pure override returns (uint256 assets) {
        // To suppress warnings
        shares = shares;
        assets = assets;

        revert NotImplemented();
    }

    function totalAssets() public view override(ERC4626, IKarakBaseVault) returns (uint256) {
        return _state().totalAssets;
    }

    function decimals() public view override(ERC4626, IKarakBaseVault) returns (uint8) {
        return _config().decimals;
    }

    function asset() public view override(ERC4626, IKarakBaseVault) returns (address) {
        return _config().asset;
    }

    function name() public view override(ERC20, IKarakBaseVault) returns (string memory) {
        return _config().name;
    }

    function symbol() public view override(ERC20, IKarakBaseVault) returns (string memory) {
        return _config().symbol;
    }

    function implementation() external view override returns (address) {
        return _state().nodeImpl;
    }

    function vaultConfig() public pure returns (VaultLib.Config memory) {
        return _config();
    }
    /* ======================================== */
}
