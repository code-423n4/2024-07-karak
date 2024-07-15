// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "../helpers/OperatorHelper.sol";

contract QuerierTest is OperatorHelper {
    function test_fetch_queued_vaults_for_withdrawal() public {
        stake_vaults_to_dss();
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: address(vaults[0]), dss: dss, toStake: false});
        vm.startPrank(operator);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);

        address[] memory withdrawalOneVault = querier.fetchVaultsQueuedForExit(operator, dss);
        assertEq(withdrawalOneVault.length, 1);
        assertEq(withdrawalOneVault[0], address(vaults[0]));

        // Queue Withdraw for 2nd vault too
        stakeUpdate.vault = address(vaults[1]);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);

        address[] memory withdrawal2Vaults = querier.fetchVaultsQueuedForExit(operator, dss);
        assertEq(withdrawal2Vaults.length, 2);
        assertEq(withdrawal2Vaults[0], address(vaults[0]));
        assertEq(withdrawal2Vaults[1], address(vaults[1]));
    }
}
