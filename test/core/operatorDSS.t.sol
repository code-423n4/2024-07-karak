// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../helpers/OperatorHelper.sol";

contract OperatorDSS is OperatorHelper {
    function test_register_operator_to_DSS() public {
        vm.startPrank(operator);
        core.registerOperatorToDSS(dss, "");
        vm.stopPrank();
        assertTrue(core.isOperatorRegisteredToDSS(operator, dss));
    }

    function test_register_operator_contract_to_DSS() public {
        operator = address(operatorSC);
        test_register_operator_to_DSS();
    }

    function test_fail_register_EOA_DSS() public {
        vm.expectRevert(NotSmartContract.selector);
        IDSS dssTest = IDSS(address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266));
        vm.startPrank(address(dssTest));
        core.registerDSS(Constants.ONE_WAD);
        vm.stopPrank();
    }

    function test_fail_register_operator_to_unregistered_dss(address dssTest) public {
        vm.assume(dssTest != address(dss) || dssTest != address(dss2));
        vm.expectRevert(DSSNotRegistered.selector);
        vm.prank(operator);
        core.registerOperatorToDSS(IDSS(dssTest), "");
    }

    function test_request_stake_update_request(uint256 time) public {
        deposit_into_vaults();
        vm.assume(time > Constants.MIN_STAKE_UPDATE_DELAY);
        vm.assume(time < type(uint256).max / 10);
        address requestedVault = address(vaults[0]);
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: false});
        vm.startPrank(operator);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate = core.requestUpdateVaultStakeInDSS(stakeUpdate);

        vm.warp(block.timestamp + time);
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate);
        assertEq(core.fetchVaultsStakedInDSS(operator, dss).length, 0);
        assertEq(core.getLeverage(requestedVault), 0);

        stakeUpdate.toStake = true; //no delay req.
        stakeUpdate.vault = address(vaults[0]);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate2 = core.requestUpdateVaultStakeInDSS(stakeUpdate);

        vm.warp(block.timestamp + time);

        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate2);
        assertEq(core.fetchVaultsStakedInDSS(operator, dss)[0], address(vaults[0]));
        assertEq(core.getLeverage(requestedVault), Constants.HUNDRED_PERCENT_WAD);
    }

    function test_request_stake_update_request_operator_contract(uint256 time) public {
        operator = address(operatorSC);
        test_request_stake_update_request(time);
    }

    function test_request_stake_update_to_unregistered_dss(address dssTest) public {
        deposit_into_vaults();
        vm.assume(dssTest != address(dss) || dssTest != address(dss2));
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: address(vaults[0]), dss: IDSS(dssTest), toStake: true});

        vm.expectRevert(DSSNotRegistered.selector);
        vm.prank(operator);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);
    }

    function test_request_stake_update_invalid_vault(address requestedVault) public {
        deposit_into_vaults();
        vm.assume(notDeployedVault(requestedVault));

        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: true});

        vm.prank(operator);
        vm.expectRevert(VaultNotAChildVault.selector);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);
    }

    function test_request_stake_update_pending(uint256 time) public {
        deposit_into_vaults();

        address requestedVault = address(vaults[0]);
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: true});

        vm.startPrank(operator);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);

        vm.warp(time);
        stakeUpdate = Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: false});
        vm.expectRevert(PendingStakeUpdateRequest.selector);
        core.requestUpdateVaultStakeInDSS(stakeUpdate);
    }

    function test_request_multiple_stake_update_request() public {
        deposit_into_vaults();
        address requestedVault = address(vaults[0]);
        address requestedVault1 = address(vaults[1]);
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: true});
        Operator.StakeUpdateRequest memory stakeUpdate1 =
            Operator.StakeUpdateRequest({vault: requestedVault1, dss: dss, toStake: true});
        vm.startPrank(operator);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate = core.requestUpdateVaultStakeInDSS(stakeUpdate);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate1 = core.requestUpdateVaultStakeInDSS(stakeUpdate1);

        vm.warp(block.timestamp + Constants.MIN_STAKE_UPDATE_DELAY);
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate);
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate1);

        //validating change for changed vault
        assertEq(core.fetchVaultsStakedInDSS(operator, dss)[0], address(vaults[0]));
        assertEq(core.fetchVaultsStakedInDSS(operator, dss)[1], address(vaults[1]));
    }

    function test_request_multiple_stake_update_request_operator_contract() public {
        operator = address(operatorSC);
        test_request_multiple_stake_update_request();
    }

    function test_dss_max_slashable_percentageWAD(uint256 percentageWad) public {
        bool reverted = false;
        address dssTest = address(new MockDSS());
        if (percentageWad > Constants.HUNDRED_PERCENT_WAD) {
            vm.expectRevert(MaxSlashPercentageWadBreached.selector);
            reverted = true;
        }
        if (percentageWad == 0) {
            vm.expectRevert(ZeroSlashPercentageWad.selector);
            reverted = true;
        }
        vm.prank(address(dssTest));
        core.registerDSS(percentageWad);

        if (reverted) return;
        assertEq(core.getDssMaxSlashablePercentageWad(IDSS(dssTest)), percentageWad);

        // Fail for multiple registration
        vm.expectRevert(DSSAlreadyRegistered.selector);
        vm.prank(address(dssTest));
        core.registerDSS(percentageWad);
    }

    function test_isDSSRegistered(address dssTest) public view {
        vm.assume(dssTest != address(dss) && dssTest != address(dss2));
        assertFalse(core.isDSSRegistered(IDSS(dssTest)));
        assertTrue(core.isDSSRegistered(dss));
        assertTrue(core.isDSSRegistered(dss2));
    }

    function test_unregister_operator_from_dss() public {
        registerIntoDSS();
        assertTrue(core.isOperatorRegisteredToDSS(operator, dss));

        vm.prank(operator);
        core.unregisterOperatorFromDSS(dss, "");
        assertFalse(core.isOperatorRegisteredToDSS(operator, dss));

        vm.prank(operator);
        core.registerOperatorToDSS(dss, "");
        assertTrue(core.isOperatorRegisteredToDSS(operator, dss));
    }

    function test_fail_unregister_operator_to_unregistered_dss(address dssTest) public {
        vm.assume(dssTest != address(dss) || dssTest != address(dss2));
        vm.expectRevert(DSSNotRegistered.selector);
        core.unregisterOperatorFromDSS(IDSS(dssTest), "");
    }

    function test_fail_unregister_operator_not_validating_for_dss() public {
        vm.expectRevert(OperatorNotValidatingForDSS.selector);
        core.unregisterOperatorFromDSS(IDSS(dss), "");
    }

    function test_fail_unregister_operator_staked_vaults() public {
        stake_vaults_to_dss();
        vm.expectRevert(AllVaultsNotUnstakedFromDSS.selector);
        vm.prank(operator);
        core.unregisterOperatorFromDSS(IDSS(dss), "");
    }
}
