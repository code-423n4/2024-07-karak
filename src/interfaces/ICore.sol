// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {IKarakBaseVault} from "./IKarakBaseVault.sol";
import {IDSS} from "./IDSS.sol";
import {VaultLib} from "../entities/VaultLib.sol";
import {Operator} from "../entities/Operator.sol";
import {SlasherLib} from "../entities/SlasherLib.sol";

interface ICore {
    /* ========== MUTATIVE FUNCTIONS ========== */
    function initialize(
        address _vaultImpl,
        address _manager,
        address _vetoCommittee,
        uint32 _hookCallGasLimit,
        uint32 _supportsInterfaceGasLimit,
        uint32 _hookGasBuffer
    ) external;
    function pause(uint256 map) external;
    function unpause(uint256 map) external;
    function allowlistAssets(address[] calldata assets, address[] calldata slashingHandlers) external;
    function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData) external;
    function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistationHookData) external;
    function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory newStake)
        external
        returns (Operator.QueuedStakeUpdate memory);
    function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory newQueuedStake) external;
    function deployVaults(VaultLib.Config[] calldata vaultConfigs, address implementation)
        external
        returns (IKarakBaseVault[] memory vaults);
    function requestSlashing(SlasherLib.SlashRequest memory requestSlashing)
        external
        returns (SlasherLib.QueuedSlashing memory queuedSlashing);
    function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;
    function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;
    function allowlistVaultImpl(address vaultImpl) external;
    function registerDSS(uint256 maxSlashablePercentageWad) external;
    function setGasValues(uint32 _hookCallGasLimit, uint32 _hookGasBuffer, uint32 _supportsInterfaceGasLimit)
        external;

    /* ======================================== */

    /* ============ VIEW FUNCTIONS ============ */
    function getOperatorVaults(address operator) external view returns (address[] memory vaults);
    function fetchVaultsStakedInDSS(address operator, IDSS dss) external view returns (address[] memory vaults);
    function extSloads(bytes32[] calldata slots) external view returns (bytes32[] memory res);
    /* ======================================== */
}
