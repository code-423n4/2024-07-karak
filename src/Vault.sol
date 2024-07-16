// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Ownable} from "solady/src/auth/Ownable.sol";
import {ERC4626, ERC20} from "solady/src/tokens/ERC4626.sol";
import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";
import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

import {Pauser} from "./entities/Pauser.sol";
import {VaultLib} from "./entities/VaultLib.sol";
import {WithdrawLib} from "./entities/Withdraw.sol";

import {ExtSloads} from "./utils/ExtSloads.sol";

import {Constants} from "./interfaces/Constants.sol";
import {IVault} from "./interfaces/IVault.sol";
import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";
import {ISlashingHandler} from "./interfaces/ISlashingHandler.sol";
import "./interfaces/Errors.sol";
import "./interfaces/Events.sol";

/// @title Restaking vault that can take in assets and delegate to an operator.
/// @dev The current supported token types: standard ERC20
/// @dev DO NOT SEND REWARDS TO THIS CONTRACT OR THEY MAY BE FRONTRUN. USE MERKLE DISTRIBUTIONS TO HANDLE REWARDS.
contract Vault is ERC4626, Initializable, Ownable, Pauser, ReentrancyGuard, ExtSloads, IVault {
    using VaultLib for VaultLib.State;

    string public constant VERSION = "2.0.0";

    // keccak256(abi.encode(uint256(keccak256("vault.state")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant STATE_SLOT = 0x5d654853f9da5c5c659891e7f7fc564033f2724663c32c175f373318f8e1e700;
    // keccak256(abi.encode(uint256(keccak256("vault.config")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant CONFIG_SLOT = 0x22a8eb0cbcfbbbc874f794ecd9efdfeeecb09fe60d66cf9327db2eac8a1ff000;

    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the vault
    /// @param _owner The owner of the vault (usually the Core contract which is the caller in most cases)
    /// @param _operator The operator of the vault (usually the caller of the deployVault function on Core which triggers this)
    /// @param _depositToken The underlying token of the vault
    /// @param _name The name of the vault
    /// @param _symbol The symbol of the vault
    /// @param _extraData Serialized bytes of extra data that different implemetations can use for their own purposes
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

        (bool decimalsSuccess, uint8 result) = _tryGetAssetDecimals(address(_depositToken));
        VaultLib.Config storage config = _config();

        config.asset = _depositToken;
        config.name = _name;
        config.symbol = _symbol;
        config.decimals = decimalsSuccess ? result : _DEFAULT_UNDERLYING_DECIMALS;
        config.operator = _operator;
        config.extraData = _extraData;
    }

    /// @notice Deposits assets into the vault
    /// @dev checks if the amount is not 0 then passes to Solady's implementation
    /// @dev if you want slippage protection use the overload of this function with minSharesOut
    /// @param assets The amount of assets to deposit
    /// @param to The address to mint the shares to
    function deposit(uint256 assets, address to)
        public
        override(ERC4626, IVault)
        whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT)
        nonReentrant
        returns (uint256 shares)
    {
        if (assets == 0) revert ZeroAmount();
        return super.deposit(assets, to);
    }

    /// @notice Deposits assets into the vault with a minimum amount of shares to mint
    /// @dev This is to prevent any malicious frontrunning in ERC4626
    /// @param assets The amount of assets to deposit
    /// @param to The address to mint the shares to
    /// @param minSharesOut The minimum amount of shares to mint else revert
    function deposit(uint256 assets, address to, uint256 minSharesOut)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT_SLIPPAGE)
        returns (uint256 shares)
    {
        if (assets == 0) revert ZeroAmount();
        shares = super.deposit(assets, to);
        if (shares < minSharesOut) revert NotEnoughShares();
    }

    /// @notice Mints shares for a given amount of assets
    /// @dev Included to better comply with ERC4626
    /// @param shares The amount of shares to mint
    /// @param to The address to mint the shares to
    /// @return assets The amount of assets used to mint the shares
    function mint(uint256 shares, address to)
        public
        override(ERC4626, IVault)
        whenFunctionNotPaused(Constants.PAUSE_VAULT_MINT)
        nonReentrant
        returns (uint256 assets)
    {
        if (shares == 0) revert ZeroShares();
        assets = super.mint(shares, to);
    }

    /// @notice Starts a redeem process for a given amount of shares
    /// and transfers those shares from the user to the vault
    /// @param shares The amount of shares to redeem
    /// @return withdrawalKey The ID of the withdrawl. This is variable is shared across everyone's withdrawal request in the vault
    function startRedeem(uint256 shares, address beneficiary)
        external
        whenFunctionNotPaused(Constants.PAUSE_VAULT_START_REDEEM)
        nonReentrant
        returns (bytes32 withdrawalKey)
    {
        if (shares == 0) revert ZeroShares();
        if (beneficiary == address(0)) revert ZeroAddress();

        (VaultLib.State storage state, VaultLib.Config storage config) = _storage();
        address staker = msg.sender;

        uint256 assets = convertToAssets(shares);

        withdrawalKey = WithdrawLib.calculateWithdrawKey(staker, state.stakerToWithdrawNonce[staker]++);

        state.withdrawalMap[withdrawalKey].staker = staker;
        state.withdrawalMap[withdrawalKey].start = uint96(block.timestamp);
        state.withdrawalMap[withdrawalKey].shares = shares;
        state.withdrawalMap[withdrawalKey].beneficiary = beneficiary;

        this.transferFrom(msg.sender, address(this), shares);

        emit StartedRedeem(staker, config.operator, shares, withdrawalKey, assets);
    }

    /// @notice Finishes a redeem process after waiting the required delay
    /// @notice Can be called by anyone on anyone's behalf
    /// @dev Most of this logic is copied from the underlying Solady 4626 implementation's redeem function
    /// @dev To prevent someone from sitting on queuedWithdrawals to front-run a slashing, DSS shouldn't consider stakes queued in withdrawals
    /// @dev Moreover, rewards are meant to be computed off-chain and shouldn't use vault to distribute em as ERC4626 isn't designed for that.
    /// @param withdrawalKey The ID of the withdrawal request given by startRedeem tx
    function finishRedeem(bytes32 withdrawalKey)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_VAULT_FINISH_REDEEM)
    {
        (VaultLib.State storage state, VaultLib.Config storage config) = _storage();

        WithdrawLib.QueuedWithdrawal memory startedWithdrawal = state.validateQueuedWithdrawal(withdrawalKey);

        uint256 shares = startedWithdrawal.shares;
        if (shares > maxRedeem(address(this))) revert RedeemMoreThanMax();
        uint256 redeemableAssets = convertToAssets(shares);

        delete state.withdrawalMap[withdrawalKey];

        _withdraw({
            by: address(this),
            to: startedWithdrawal.beneficiary,
            owner: address(this),
            assets: redeemableAssets,
            shares: shares
        });

        emit FinishedRedeem(
            startedWithdrawal.staker,
            startedWithdrawal.beneficiary,
            config.operator,
            startedWithdrawal.shares,
            redeemableAssets,
            withdrawalKey
        );
    }

    /// @notice Slash the assets in the vault by a certain amount portion to a slashing handler contract
    /// @param totalAssetsToSlash The amount of assets to slash in absolute amounts
    /// @param slashingHandler The address of the slashing handler
    function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
        external
        onlyCore
        returns (uint256 transferAmount)
    {
        transferAmount = Math.min(totalAssets(), totalAssetsToSlash);

        // Approve to the handler and then call the handler which will draw the funds
        SafeTransferLib.safeApproveWithRetry(asset(), slashingHandler, transferAmount);
        ISlashingHandler(slashingHandler).handleSlashing(IERC20(asset()), transferAmount);

        emit Slashed(transferAmount);
    }

    /// @notice Lets the Core contract pause the vault functions
    /// @param map: 256 bitmap for paused and unpaused functions, type(uint256).max to pause all functions
    function pause(uint256 map) external onlyCore {
        _pause(map);
    }

    /// @notice Lets the Core contract unpause the vault functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpause(uint256 map) external onlyCore {
        _unpause(map);
    }
    /* ======================================== */

    /* ============ VIEW FUNCTIONS ============ */
    /// @notice Fetches name of the vault token
    function name() public view override(ERC20, IKarakBaseVault) returns (string memory) {
        return _config().name;
    }

    /// @notice Fetches symbol of the vault token
    function symbol() public view override(ERC20, IKarakBaseVault) returns (string memory) {
        return _config().symbol;
    }

    /// @notice Fetches underlying asset of the vault
    function asset() public view override(ERC4626, IKarakBaseVault) returns (address) {
        return _config().asset;
    }

    /// @notice Fetches vault config
    function vaultConfig() public pure returns (VaultLib.Config memory) {
        return _config();
    }

    /// @notice Fetches the next withdrawal nonce of the staker
    /// @param staker the address of the staker
    function getNextWithdrawNonce(address staker) public view returns (uint256) {
        return _state().stakerToWithdrawNonce[staker];
    }

    /// @notice Checks if the withdrawal is pending for given nonce
    /// @param staker address of the staker
    /// @param _withdrawNonce withdrawal nonce of the staker at the time of withdrawal
    function isWithdrawalPending(address staker, uint256 _withdrawNonce) public view returns (bool) {
        return _state().withdrawalMap[WithdrawLib.calculateWithdrawKey(staker, _withdrawNonce)].start > 0;
    }

    /// @notice Fetches queued withdrawal metadata for given nonce
    /// @param staker address of the staker
    /// @param _withdrawNonce withdrawal nonce of the staker at the time of withdrawal
    /// @return QueuedWithdrawal params
    function getQueuedWithdrawal(address staker, uint256 _withdrawNonce)
        public
        view
        returns (WithdrawLib.QueuedWithdrawal memory)
    {
        return _state().withdrawalMap[WithdrawLib.calculateWithdrawKey(staker, _withdrawNonce)];
    }

    /// @notice Total underlying assets deposited in vault
    function totalAssets() public view override(ERC4626, IKarakBaseVault) returns (uint256) {
        return super.totalAssets();
    }

    /// @notice owner of the vault
    function owner() public view override(Ownable, IVault) returns (address) {
        return super.owner();
    }

    /// @notice decimals of the vault tokens
    function decimals() public view override(ERC4626, IKarakBaseVault) returns (uint8) {
        return _config().decimals;
    }

    /// @notice Allows reading of arbitrary storage slots. Useful for reading inside embedded structs
    /// @dev Originally from Morpho Blue: https://github.com/morpho-org/morpho-blue/blob/d36719dcd2f37068478889782deac96e296719f0/src/Morpho.sol#L544-L557
    /// @param slots The storage slots to read
    /// @return res The values stored in the given storage slots
    function extSloads(bytes32[] calldata slots)
        public
        view
        override(ExtSloads, IVault)
        returns (bytes32[] memory res)
    {
        res = super.extSloads(slots);
    }

    /* ======================================== */

    /* ========== INTERNAL FUNCTIONS ========== */
    function _state() internal pure returns (VaultLib.State storage $) {
        assembly {
            $.slot := STATE_SLOT
        }
    }

    function _config() internal pure returns (VaultLib.Config storage $) {
        assembly {
            $.slot := CONFIG_SLOT
        }
    }

    function _storage() internal pure returns (VaultLib.State storage $, VaultLib.Config storage $$) {
        assembly {
            $.slot := STATE_SLOT
            $$.slot := CONFIG_SLOT
        }
    }

    function _underlyingDecimals() internal view override returns (uint8) {
        return _config().decimals;
    }
    /* ======================================== */

    /* ============== MODIFIERS =============== */
    modifier onlyCore() {
        _checkOwner();
        _;
    }
    /* ======================================== */

    /* ============== OVERRIDES =============== */

    /// @notice will revert
    function withdraw(uint256 assets, address to, address owner)
        public
        override
        whenFunctionNotPaused(Constants.PAUSE_VAULT_WITHDRAW)
        nonReentrant
        returns (uint256 shares)
    {
        // To suppress warnings
        owner = owner;
        assets = assets;
        to = to;
        shares = shares;

        revert NotImplemented();
    }

    /// @notice will revert
    function redeem(uint256 shares, address to, address owner)
        public
        override
        whenFunctionNotPaused(Constants.PAUSE_VAULT_REDEEM)
        nonReentrant
        returns (uint256 assets)
    {
        // To suppress warnings
        owner = owner;
        to = to;
        shares = shares;
        assets = assets;

        revert NotImplemented();
    }
    /* ======================================== */
}
