// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import {CoreLib} from "./CoreLib.sol";
import {IKarakBaseVault} from "../interfaces/IKarakBaseVault.sol";
import {HookLib} from "./HookLib.sol";

import "../interfaces/Errors.sol";
import "../interfaces/Constants.sol";
import "../interfaces/IDSS.sol";

library Operator {
    using EnumerableSet for EnumerableSet.AddressSet;
    using CoreLib for CoreLib.Storage;

    struct State {
        EnumerableSet.AddressSet vaults;
        EnumerableSet.AddressSet dssMap;
        mapping(IDSS dss => EnumerableSet.AddressSet vaultStakeInDss) vaultStakedInDssMap;
        mapping(IDSS dss => uint256 timestamp) nextSlashableTimestamp; // When this operator can be slashed again by a DSS
        mapping(address vault => bytes32 updateHash) pendingStakeUpdates; //Supporting only 1 update per vault at a time
    }

    struct StakeUpdateRequest {
        address vault;
        IDSS dss;
        bool toStake; // true for stake, false for unstake
    }

    struct QueuedStakeUpdate {
        uint48 nonce;
        uint48 startTimestamp;
        address operator;
        StakeUpdateRequest updateRequest;
    }

    function getVaults(State storage operatorState) internal view returns (address[] memory) {
        return operatorState.vaults.values();
    }

    function addVault(State storage operatorState, IKarakBaseVault vault) internal {
        if (vault == IKarakBaseVault(address(0))) revert ZeroAddress();
        if (operatorState.vaults.length() == Constants.MAX_VAULTS_PER_OPERATOR) revert MaxVaultCapacityReached();
        operatorState.vaults.add(address(vault));
    }

    function calculateRoot(QueuedStakeUpdate memory newStake) internal pure returns (bytes32) {
        return keccak256(abi.encode(newStake));
    }

    function validateStakeUpdateRequest(State storage operatorState, StakeUpdateRequest memory stakeUpdate)
        internal
        view
    {
        if (operatorState.pendingStakeUpdates[stakeUpdate.vault] != bytes32(0)) revert PendingStakeUpdateRequest();
        if (!operatorState.vaults.contains(stakeUpdate.vault)) revert VaultNotAChildVault();
    }

    function requestUpdateVaultStakeInDSS(
        CoreLib.Storage storage self,
        StakeUpdateRequest memory requestStakeUpdate,
        uint128 nonce,
        address operator
    ) external returns (QueuedStakeUpdate memory queuedStake) {
        State storage operatorState = self.operatorState[operator];
        validateStakeUpdateRequest(operatorState, requestStakeUpdate);
        queuedStake = QueuedStakeUpdate({
            nonce: uint48(nonce),
            startTimestamp: uint48(block.timestamp),
            operator: operator,
            updateRequest: requestStakeUpdate
        });
        operatorState.pendingStakeUpdates[requestStakeUpdate.vault] = calculateRoot(queuedStake);
        IDSS dss = requestStakeUpdate.dss;

        HookLib.callHookIfInterfaceImplemented({
            dss: dss,
            data: abi.encodeWithSelector(dss.requestUpdateStakeHook.selector, operator, requestStakeUpdate),
            interfaceId: dss.requestUpdateStakeHook.selector,
            ignoreFailure: !requestStakeUpdate.toStake,
            hookCallGasLimit: self.hookCallGasLimit,
            supportsInterfaceGasLimit: self.supportsInterfaceGasLimit,
            hookGasBuffer: self.hookGasBuffer
        });
    }

    function validateQueuedStakeUpdate(State storage operatorState, QueuedStakeUpdate memory queuedStakeUpdate)
        internal
        view
    {
        if (queuedStakeUpdate.startTimestamp + Constants.MIN_STAKE_UPDATE_DELAY > block.timestamp) {
            revert OperatorStakeUpdateDelayNotPassed();
        }
        if (
            calculateRoot(queuedStakeUpdate) != operatorState.pendingStakeUpdates[queuedStakeUpdate.updateRequest.vault]
        ) {
            revert InvalidQueuedStakeUpdateInput();
        }
    }

    function updateVaultStakeInDSS(State storage operatorState, address vault, IDSS dss, bool toStake) internal {
        if (toStake) {
            operatorState.vaultStakedInDssMap[dss].add(vault);
        } else {
            operatorState.vaultStakedInDssMap[dss].remove(vault);
        }
    }

    function validateAndUpdateVaultStakeInDSS(CoreLib.Storage storage self, QueuedStakeUpdate memory queuedStakeUpdate)
        external
    {
        State storage operatorState = self.operatorState[queuedStakeUpdate.operator];
        validateQueuedStakeUpdate(operatorState, queuedStakeUpdate);
        updateVaultStakeInDSS(
            operatorState,
            queuedStakeUpdate.updateRequest.vault,
            queuedStakeUpdate.updateRequest.dss,
            queuedStakeUpdate.updateRequest.toStake
        );
        delete operatorState.pendingStakeUpdates[queuedStakeUpdate.updateRequest.vault];
        IDSS dss = queuedStakeUpdate.updateRequest.dss;
        HookLib.callHookIfInterfaceImplemented({
            dss: dss,
            data: abi.encodeWithSelector(dss.finishUpdateStakeHook.selector, msg.sender),
            interfaceId: dss.finishUpdateStakeHook.selector,
            ignoreFailure: true,
            hookCallGasLimit: self.hookCallGasLimit,
            supportsInterfaceGasLimit: self.supportsInterfaceGasLimit,
            hookGasBuffer: self.hookGasBuffer
        });
    }

    function isOperatorRegisteredToDSS(CoreLib.Storage storage self, address operator, IDSS dss)
        internal
        view
        returns (bool)
    {
        return self.operatorState[operator].dssMap.contains(address(dss));
    }

    function checkIfOperatorIsRegInRegDSS(CoreLib.Storage storage self, address operator, IDSS dss) internal view {
        if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();
        if (!isOperatorRegisteredToDSS(self, operator, dss)) {
            revert OperatorNotValidatingForDSS();
        }
    }

    function registerOperatorToDSS(
        CoreLib.Storage storage self,
        IDSS dss,
        address operator,
        bytes memory registrationHookData
    ) external {
        State storage operatorState = self.operatorState[operator];
        if (isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorAlreadyRegisteredToDSS();
        if (operatorState.dssMap.length() == Constants.MAX_DSS_PER_OPERATOR) revert MaxDSSCapacityReached();

        operatorState.dssMap.add(address(dss));

        HookLib.callHookIfInterfaceImplemented({
            dss: dss,
            data: abi.encodeWithSelector(dss.registrationHook.selector, operator, registrationHookData),
            interfaceId: dss.registrationHook.selector,
            ignoreFailure: false,
            hookCallGasLimit: self.hookCallGasLimit,
            supportsInterfaceGasLimit: self.supportsInterfaceGasLimit,
            hookGasBuffer: self.hookGasBuffer
        });
    }

    function getVaultsStakedToDSS(State storage operatorState, IDSS dss)
        public
        view
        returns (address[] memory vaults)
    {
        vaults = operatorState.vaultStakedInDssMap[dss].values();
    }

    function unregisterOperatorFromDSS(
        CoreLib.Storage storage self,
        IDSS dss,
        address operator,
        bytes memory unregistrationHookData
    ) external {
        State storage operatorState = self.operatorState[operator];
        // Checks if all operator delegations are zero
        address[] memory vaults = getVaultsStakedToDSS(operatorState, dss);
        if (vaults.length != 0) revert AllVaultsNotUnstakedFromDSS();
        if (!isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorNotValidatingForDSS();

        self.operatorState[operator].dssMap.remove(address(dss));
        HookLib.callHookIfInterfaceImplemented({
            dss: dss,
            data: abi.encodeWithSelector(dss.unregistrationHook.selector, operator, unregistrationHookData),
            interfaceId: dss.unregistrationHook.selector,
            ignoreFailure: true, // So it can't prevent the operator from unregistering
            hookCallGasLimit: self.hookCallGasLimit,
            supportsInterfaceGasLimit: self.supportsInterfaceGasLimit,
            hookGasBuffer: self.hookGasBuffer
        });
    }

    /// Fetches the DSSs the operator is registered in
    /// @param self Reference to the Core's storage
    /// @param operator address of the operator
    /// @return dssAddresses List of DSSs
    function getDSSsOperatorIsRegisteredTo(CoreLib.Storage storage self, address operator)
        internal
        view
        returns (address[] memory dssAddresses)
    {
        dssAddresses = self.operatorState[operator].dssMap.values();
    }

    function isVaultStakeToDSS(State storage operatorState, IDSS dss, address vault) internal view returns (bool) {
        return operatorState.vaultStakedInDssMap[dss].contains(vault);
    }

    /// Fetches the list of DSSs an operator's vault is staked to
    /// @param self Reference to the Core's storage
    /// @return count Count of the DSSs the operator's vault is staked to
    function getDSSCountVaultStakedTo(CoreLib.Storage storage self, IKarakBaseVault vault)
        external
        view
        returns (uint256 count)
    {
        address operator = vault.vaultConfig().operator;
        address[] memory dssAddresses = getDSSsOperatorIsRegisteredTo(self, operator);
        State storage operatorState = self.operatorState[operator];
        for (uint256 i = 0; i < dssAddresses.length; i++) {
            if (isVaultStakeToDSS(operatorState, IDSS(dssAddresses[i]), address(vault))) count++;
        }
    }
}
