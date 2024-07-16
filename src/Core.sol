// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";
import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

import {Pauser} from "./entities/Pauser.sol";
import {CoreLib} from "./entities/CoreLib.sol";
import {VaultLib} from "./entities/VaultLib.sol";
import {Operator} from "./entities/Operator.sol";
import {ExtSloads} from "./utils/ExtSloads.sol";
import {CommonUtils} from "./utils/CommonUtils.sol";

import {ICore, SlasherLib} from "./interfaces/ICore.sol";
import {Constants} from "./interfaces/Constants.sol";
import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";
import {IDSS} from "./interfaces/IDSS.sol";

import "./interfaces/Errors.sol";
import "./interfaces/Events.sol";
import "./interfaces/Constants.sol";

contract Core is IBeacon, ICore, OwnableRoles, Initializable, ReentrancyGuard, Pauser, ExtSloads {
    using CoreLib for CoreLib.Storage;
    using Operator for CoreLib.Storage;
    using Operator for Operator.State;
    using SlasherLib for SlasherLib.QueuedSlashing;
    using SlasherLib for SlasherLib.SlashRequest;
    using SlasherLib for CoreLib.Storage;
    using VaultLib for VaultLib.Config;
    using CommonUtils for address;

    string public constant VERSION = "2.0.0";

    // keccak256(abi.encode(uint256(keccak256("core.storage")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant STORAGE_SLOT = 0x13c729cff436dc8ac22d145f2c778f6a709d225083f39538cc5e2674f2f10700;

    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the Core contracts: sets owner, grants roles, and sets default values
    /// @param _vaultImpl: The address of the default vault implementation. Usually the standard ERC20 vault impl.
    /// @param _manager: The address of the manager who can do operations that don't put funds at risk.
    /// @param _vetoCommittee: The address of the veto committee who can cancel/veto slashing requests. Should be a multisig.
    /// @param _hookCallGasLimit: Max gas that can be used by hook calls to a DSS
    /// @param _supportsInterfaceGasLimit: Max gas that can be used by `supportsInterface` call to a DSS
    /// @param _hookGasBuffer: Minimum gas buffer to run the remaining logic after a DSS hook is called
    function initialize(
        address _vaultImpl,
        address _manager,
        address _vetoCommittee,
        uint32 _hookCallGasLimit,
        uint32 _supportsInterfaceGasLimit,
        uint32 _hookGasBuffer
    ) external initializer {
        _initializeOwner(msg.sender);
        __Pauser_init();

        _grantRoles(_manager, Constants.MANAGER_ROLE);
        _grantRoles(_vetoCommittee, Constants.VETO_COMMITTEE_ROLE);

        _self().init(_vaultImpl, _vetoCommittee, _hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);
    }

    /// @notice Pauses the contract functions in an idemptotent way
    /// @param map: 256 bitmap for paused and unpaused functions, type(uint256).max to pause all functions
    function pause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        _pause(map);
    }

    /// @notice Unpauses the contract functions in an idemptotent way
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        _unpause(map);
    }

    /// @notice Allows the manager to allowlist assets that then vaults can be created for with the asset as the underlying token.
    /// @dev If an asset that is already allowlisted is passed, it will be be set to allowlisted again.
    /// @param assets: The list of assets to allowlist
    function allowlistAssets(address[] memory assets, address[] memory slashingHandlers)
        external
        onlyRolesOrOwner(Constants.MANAGER_ROLE)
    {
        _self().allowlistAssets(assets, slashingHandlers);
        emit AllowlistedAssets(assets);
    }

    /// @notice Allows a operator to register with a DSS. This then allows them to allocate a portion of the assets
    /// delegated to them by stakers.
    /// @param dss: The address of the DSS to register with
    /// @param registrationHookData: The data to pass to the DSS's beforeRegistrationHook
    function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData)
        external
        whenFunctionNotPaused(Constants.PAUSE_CORE_REGISTER_TO_DSS)
        nonReentrant
    {
        address operator = msg.sender;
        CoreLib.Storage storage self = _self();
        if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();
        self.registerOperatorToDSS(dss, operator, registrationHookData);
        emit RegisteredOperatorToDSS(operator, address(dss));
    }

    /// @notice Allows a operator to unregister from a DSS
    /// @dev All asset delegations to the DSS must be 0 before the operator can unregister
    /// @param dss: The address of the DSS to unregister from
    /// @param unregistrationHookData: The data to pass to the DSS's beforeUnregistrationHook
    function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistrationHookData)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_CORE_UNREGISTER_FROM_DSS)
    {
        address operator = msg.sender;
        CoreLib.Storage storage self = _self();
        self.checkIfOperatorIsRegInRegDSS(operator, dss);
        self.unregisterOperatorFromDSS(dss, operator, unregistrationHookData);

        emit UnregisteredOperatorToDSS(operator, address(dss));
    }

    /// @notice Allows operator to stake/unstake vault to a DSS
    /// @dev Only operator can update the stake of their vaults and
    /// logically, only 1 update request is allowed per vault until its completed or canceled
    /// @param vaultStakeUpdateRequest: stake update request with to stake/unstake, address of dss and address of vault
    function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory vaultStakeUpdateRequest)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_STAKE_UPDATE)
        returns (Operator.QueuedStakeUpdate memory updatedStake)
    {
        address operator = msg.sender;
        CoreLib.Storage storage self = _self();
        self.checkIfOperatorIsRegInRegDSS(operator, vaultStakeUpdateRequest.dss);
        updatedStake = self.requestUpdateVaultStakeInDSS(vaultStakeUpdateRequest, self.nonce++, operator);
        emit RequestedStakeUpdate(updatedStake);
    }

    /// @notice Allows anyone to finish the queued request for an operator to update assets delegated to a DSS
    /// @dev Only operator can finish their queued request valid only after a
    /// minimum delay of `Constants.MIN_STAKE_UPDATE_DELAY` after starting the request
    function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory queuedStake)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_CORE_FINALIZE_STAKE_UPDATE)
    {
        _self().validateAndUpdateVaultStakeInDSS(queuedStake);
        emit FinishedStakeUpdate(queuedStake);
    }

    /// @notice Deploys a new restaking vault with the given configuration to an operator
    /// @dev Emits a DeployedVault event for each vault deployed
    /// @dev It is meant to be permissionless since the setting of the standard vault implementation is permissioned
    /// @param vaultConfigs: The configurations of the vaults to deploy
    /// @param vaultImpl: The address of the vault implementation to use
    /// @return vaults {IKarakBaseVault[]} The addresses of the deployed vaults
    function deployVaults(VaultLib.Config[] calldata vaultConfigs, address vaultImpl)
        external
        whenFunctionNotPaused(Constants.PAUSE_CORE_DEPLOY_VAULTS)
        nonReentrant
        returns (IKarakBaseVault[] memory vaults)
    {
        vaults = _self().deployVaults(msg.sender, vaultImpl, vaultConfigs);
    }

    /// @notice Allows the owner to change the standard vault implementation and upgrade all vaults using
    /// the default implementation to the new implementation.
    /// @param newVaultImpl: The address of the new vault implementation
    function changeStandardImplementation(address newVaultImpl) external onlyOwner {
        if (newVaultImpl == address(0)) revert ZeroAddress();
        if (newVaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();
        _self().vaultImpl = newVaultImpl;
        emit UpgradedAllVaults(newVaultImpl);
    }

    /// @notice Allows the owner to change the implementation of a specific vault
    /// @param vault: The address of the vault to change the implementation of
    /// @param newVaultImpl: The address of the new vault implementation. Must be a allowlisted implementation
    function changeImplementationForVault(address vault, address newVaultImpl) external onlyOwner {
        CoreLib.Storage storage self = _self();
        if (!self.isVaultImplAllowlisted(newVaultImpl)) revert VaultImplNotAllowlisted();
        // Don't let the admin change the implementation from address(0) to something else
        // bypassing the deployVault flow
        if (self.vaultToImplMap[vault] == address(0)) revert VaultNotAChildVault();

        self.vaultToImplMap[vault] = newVaultImpl;
        emit UpgradedVault(newVaultImpl, vault);
    }

    /// @notice Allows the owner or manager to pause functions of a vault
    /// @param vault: The address of the vault to pause
    /// @param map: 256 bitmap for vault paused and unpaused functions, type(uint256).max to pause all functions
    function pauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        vault.pause(map);
    }

    /// @notice Allows the owner or manager to unpause functions of a vault
    /// @param vault: The address of the vault to unpause
    /// @param map: 256 bitmap for vault paused and unpaused functions, 0 to unpause all functions
    function unpauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {
        vault.unpause(map);
    }

    /// @notice Allows the owner to allowlist a new vault implementation
    /// This is meant for custom 4626 vaults like native restaking vaults
    /// @param vaultImpl {address}: The address of the vault implementation to allowlist
    function allowlistVaultImpl(address vaultImpl) external onlyOwner {
        if (vaultImpl == address(0)) revert ZeroAddress();
        if (vaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();

        _self().allowlistVaultImpl(vaultImpl);
    }

    /// @notice Allows a slashing to be requested for a given operator+vault by a DSS
    /// @param slashingRequest: The request to slash the operator
    function requestSlashing(SlasherLib.SlashRequest calldata slashingRequest)
        external
        whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_SLASHING)
        nonReentrant
        returns (SlasherLib.QueuedSlashing memory queuedSlashing)
    {
        IDSS dss = IDSS(msg.sender);
        CoreLib.Storage storage self = _self();
        self.checkIfOperatorIsRegInRegDSS(slashingRequest.operator, dss);
        queuedSlashing = self.requestSlashing(dss, slashingRequest, self.nonce++);
        emit RequestedSlashing(address(dss), slashingRequest);
    }

    /// @notice Allows the veto committee to cancel a queued slashing
    /// @param queuedSlashing: The slashing to cancel
    function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)
        external
        whenFunctionNotPaused(Constants.PAUSE_CORE_CANCEL_SLASHING)
        nonReentrant
        onlyRoles(Constants.VETO_COMMITTEE_ROLE)
    {
        _self().cancelSlashing(queuedSlashing);
        emit CancelledSlashing(msg.sender, queuedSlashing);
    }

    /// @notice Allows anyone to finalize a queued slashing and send the slashed assets
    /// @notice to the slashing handler
    /// @param queuedSlashing: The slashing to finish
    function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)
        external
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_CORE_FINALIZE_SLASHING)
    {
        _self().finalizeSlashing(queuedSlashing);

        emit FinalizedSlashing(msg.sender, queuedSlashing);
    }

    /// @notice Allows the caller to register as a DSS and set the max slashable percentage
    /// @dev If you want to have 0% slashing, set `maxSlashablePercentageWad` to `1` since 0 is used as a default flag for not set
    /// If a operator is set, it will have a non-zero slashable percentage. Hence we can just check for that to see if a DSS is registered
    /// @param maxSlashablePercentageWad The max slashable percent, in the form of wad, that the DSS can slash per cooldown period
    function registerDSS(uint256 maxSlashablePercentageWad) external {
        IDSS dss = IDSS(msg.sender);
        if (!address(dss).isSmartContract()) revert NotSmartContract();
        _self().setDSSMaxSlashablePercentageWad(dss, maxSlashablePercentageWad);
        emit DSSRegistered(msg.sender, maxSlashablePercentageWad);
    }

    /// @notice Sets gas limits for DSS hook calls
    /// @dev Set to prevent DOS vector as malicious DSS can block calls by using infinite gas
    /// @param _hookCallGasLimit: Gas limit to perform call to DSS for corresponding hook call
    /// @param _hookGasBuffer: Buffer gas to perform the rest of hook call
    /// @param _supportsInterfaceGasLimit: Gas limit for `supportsInterface` call to DSS
    function setGasValues(uint32 _hookCallGasLimit, uint32 _hookGasBuffer, uint32 _supportsInterfaceGasLimit)
        external
        onlyRolesOrOwner(Constants.MANAGER_ROLE)
    {
        _self().updateGasValues(_hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);
    }

    /* ======================================== */

    /* ============ VIEW FUNCTIONS ============ */
    /// @notice Returns if a given asset is allowlisted
    /// @dev Only matters for the `deployVault` flow. Allowlisting is not required for custom vaults.
    /// @param asset: The address of the ERC20 asset to check
    /// @return bool if the asset is allowlisted, false otherwise
    function isAssetAllowlisted(address asset) public view returns (bool) {
        return _self().assetSlashingHandlers[asset] != address(0);
    }

    /// @notice checks whether the given `vaultImplementation` is allowlisted or not
    /// @param vaultImpl address of the implementaion
    function isVaultImplAllowListed(address vaultImpl) public view returns (bool) {
        return _self().isVaultImplAllowlisted(vaultImpl);
    }

    /// @notice Returns true if a given operator is registered to a DSS
    /// @param operator: The address of the operator to check
    /// @param dss: The address of the DSS to check
    /// @return {bool} True if the operator is registered to the DSS, false otherwise
    function isOperatorRegisteredToDSS(address operator, IDSS dss) public view returns (bool) {
        return _self().isOperatorRegisteredToDSS(operator, dss);
    }

    /// @notice Returns the implementation of the vault for the given operator
    /// @return {address} The address of the vault implementation
    function implementation() external view override returns (address) {
        return implementation(msg.sender);
    }

    /// @notice Returns the implementation for a given vault
    /// @dev Doesn't revert if the vault is not set yet because during `deployVault`
    /// theres a period before we set it to the default flag where the vault
    /// needs an impl to be initialized against
    /// @param vault: The address of the vault to get the implementation for
    /// @return {address} The address of the given vault's implementation
    function implementation(address vault) public view returns (address) {
        CoreLib.Storage storage self = _self();
        address vaultImplOverride = self.vaultToImplMap[vault];

        if (vaultImplOverride == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) {
            return self.vaultImpl;
        }
        return vaultImplOverride;
    }

    /// @notice Returns the vaults for a given operator
    /// @param operator: The address of the operator to get the vaults for
    /// @return vaults {address[]} The addresses of the vaults attached to the operator
    function getOperatorVaults(address operator) external view returns (address[] memory vaults) {
        return _self().operatorState[operator].getVaults();
    }

    /// @notice Returns the vaults staked for a given operator in a DSS
    /// @param operator: The address of the operator to get the stakes for
    /// @param dss: The address of the DSS that the operator is validating for
    /// @return vaults {address[]} The addresses of the vaults that the operator is validating for attached to this DSS
    function fetchVaultsStakedInDSS(address operator, IDSS dss) external view returns (address[] memory vaults) {
        vaults = _self().operatorState[operator].getVaultsStakedToDSS(dss);
    }

    /// @notice Returns the leverage of a given vault
    /// @dev Leverage is done in whole numbers 1x, 2x, Nx, where n is the number of DSS the vault is delegated to
    /// this is because a vault allocates its entire balance to every vault. Hence why this function just takes
    /// the number of DSSs a vault is allocated to and multiplies it by 100e18 (100%)
    /// @param vault Address of the vault
    /// @return leverage {uint256} Leverage of vault in percentageWad
    function getLeverage(address vault) external view returns (uint256 leverage) {
        leverage = _self().getDSSCountVaultStakedTo(IKarakBaseVault(vault));
        leverage *= Constants.HUNDRED_PERCENT_WAD;
    }

    /// @notice Returns the max slashable percentageWad by DSS per slashing request.
    /// @dev A DSS has to wait a `SLASHING_COOLDOWN` before it can slash again
    /// @param dss The address of dss.
    /// @return slashablePercentageWad {uint256} The maximum slashable percentageWad per slashing event by DSS.
    function getDssMaxSlashablePercentageWad(IDSS dss) public view returns (uint256 slashablePercentageWad) {
        slashablePercentageWad = _self().getDSSMaxSlashablePercentageWad(dss);
    }

    /// @notice Returns true if dss is registered in the protocol.
    /// @param dss address of the dss.
    /// @return boolean indicating dss is registered or not.
    function isDSSRegistered(IDSS dss) public view returns (bool) {
        return _self().isDSSRegistered(dss);
    }

    /// @notice Allows reading of arbitrary storage slots. Useful for reading inside embedded structs
    /// @dev Originally from Morpho Blue: https://github.com/morpho-org/morpho-blue/blob/d36719dcd2f37068478889782deac96e296719f0/src/Morpho.sol#L544-L557
    /// @param slots The storage slots to read
    /// @return res {bytes32 memory} The values stored in the given storage slots
    function extSloads(bytes32[] calldata slots)
        public
        view
        override(ExtSloads, ICore)
        returns (bytes32[] memory res)
    {
        res = super.extSloads(slots);
    }

    /* ======================================== */

    /* ========== INTERNAL FUNCTIONS ========== */
    function _self() internal pure returns (CoreLib.Storage storage $) {
        assembly {
            $.slot := STORAGE_SLOT
        }
    }
    /* ======================================== */
}
