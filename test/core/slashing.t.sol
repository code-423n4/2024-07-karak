// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../helpers/OperatorHelper.sol";

contract SlashingTests is OperatorHelper {
    function test_slash_operator(uint96 slashPercentageWad) public {
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        stake_vaults_to_dss();

        vm.prank(operator);
        core.registerOperatorToDSS(dss2, "");
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        vm.startPrank(address(dss));
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });

        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);

        vm.warp(block.timestamp + Constants.SLASHING_VETO_WINDOW);

        uint256[] memory postSlashedAssets = new uint256[](operatorVaults.length);
        for (uint256 i = 0; i < operatorVaults.length; i++) {
            postSlashedAssets[i] = compute_post_slashed_assets_in_vault(operatorVaults[i], slashPercentagesWad[i]);
        }

        core.finalizeSlashing(queuedSlashing);
        for (uint256 i = 0; i < operatorVaults.length; i++) {
            assertEq(IVault(operatorVaults[i]).totalAssets(), postSlashedAssets[i]);
        }
        vm.stopPrank();
    }

    function test_slash_operator_operator_contract(uint96 slashPercentageWad) public {
        operator = address(operatorSC);
        test_slash_operator(slashPercentageWad);
    }

    function test_slash_operator_min_delay_not_passed(uint96 slashPercentageWad, uint256 delay) public {
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        if (delay >= Constants.SLASHING_VETO_WINDOW) return;
        stake_vaults_to_dss();
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        vm.startPrank(address(dss));
        (address[] memory operatorVaults) = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });

        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);

        vm.warp(block.timestamp + delay);

        vm.expectRevert(MinSlashingDelayNotPassed.selector);
        core.finalizeSlashing(queuedSlashing);
        vm.stopPrank();
    }

    function test_finalize_slash_operator_invalid_params(uint96 slashPercentageWad, uint256 delay) public {
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        vm.assume(delay > Constants.SLASHING_VETO_WINDOW && delay < UINT256_MAX / 2);
        stake_vaults_to_dss();
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        vm.startPrank(address(dss));
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });

        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);
        queuedSlashing.operator = address(10);
        vm.warp(block.timestamp + delay);

        vm.expectRevert(InvalidSlashingParams.selector);
        core.finalizeSlashing(queuedSlashing);
        vm.stopPrank();
    }

    function test_cancel_slashing_operator(uint96 slashPercentageWad, uint256 elapsedTime) public {
        if (elapsedTime >= Constants.SLASHING_VETO_WINDOW) return;
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        stake_vaults_to_dss();
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        vm.startPrank(address(dss));
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });
        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);
        vm.stopPrank();

        vm.warp(block.timestamp + elapsedTime);
        vm.prank(vetoCommittee);
        core.cancelSlashing(queuedSlashing);
    }

    function test_fail_cancel_slashing_operator(uint96 slashPercentageWad, address caller, address newOperator)
        public
    {
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        stake_vaults_to_dss();
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        vm.startPrank(address(dss));
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });
        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);
        vm.stopPrank();

        // not veto committee
        vm.expectRevert(Ownable.Unauthorized.selector);
        vm.prank(caller);
        core.cancelSlashing(queuedSlashing);

        // changed operator
        queuedSlashing.operator = newOperator;
        vm.expectRevert(InvalidSlashingParams.selector);
        vm.prank(vetoCommittee);
        core.cancelSlashing(queuedSlashing);
    }

    function test_slash_subset_of_operator_vaults(uint96 slashPercentageWad) public {
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        stake_vaults_to_dss();
        uint96[] memory slashPercentagesWad = new uint96[](1);
        slashPercentagesWad[0] = uint96(slashPercentageWad);

        vm.startPrank(address(dss));
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        address[] memory slashedVaults = new address[](1);
        slashedVaults[0] = operatorVaults[0];

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: slashedVaults
        });

        SlasherLib.QueuedSlashing memory queuedSlashing = core.requestSlashing(slashingReq);

        vm.warp(block.timestamp + Constants.SLASHING_VETO_WINDOW);

        uint256[] memory postSlashedAssetsInVault = new uint256[](slashedVaults.length);
        for (uint256 i = 0; i < slashedVaults.length; i++) {
            postSlashedAssetsInVault[i] = compute_post_slashed_assets_in_vault(slashedVaults[i], slashPercentagesWad[i]);
        }

        core.finalizeSlashing(queuedSlashing);

        for (uint256 i = 0; i < slashedVaults.length; i++) {
            assertEq(IVault(operatorVaults[i]).totalAssets(), postSlashedAssetsInVault[i]);
        }

        vm.stopPrank();
    }

    function test_slash_subset_of_operator_vaults_operator_contract(uint96 slashPercentageWad) public {
        operator = address(operatorSC);
        test_slash_subset_of_operator_vaults(slashPercentageWad);
    }

    function test_invalid_slashing_request(uint96 slashPercentageWad) public {
        stake_vaults_to_dss();
        vm.assume(
            slashPercentageWad > Constants.ONE_WAD && slashPercentageWad <= core.getDssMaxSlashablePercentageWad(dss)
        );
        uint96[] memory slashPercentagesWad = new uint96[](vaults.length);
        slashPercentagesWad[0] = slashPercentageWad;
        // Generate nonequal percentages
        uint96 slashPercentageWad1 =
            (slashPercentageWad + uint96(10 * Constants.ONE_WAD)) % uint96(core.getDssMaxSlashablePercentageWad(dss));
        // Make sure zero is not passed
        slashPercentageWad1 = slashPercentageWad1 == 0 ? slashPercentageWad1 : uint96(Constants.ONE_WAD);
        slashPercentagesWad[1] = slashPercentageWad1;

        // Vault not staked in DSS
        address[] memory operatorVaults = core.fetchVaultsStakedInDSS(operator, dss);

        SlasherLib.SlashRequest memory slashingReq = SlasherLib.SlashRequest({
            operator: operator,
            slashPercentagesWad: slashPercentagesWad,
            vaults: operatorVaults
        });

        // not registered with core
        vm.expectRevert(DSSNotRegistered.selector);
        core.requestSlashing(slashingReq);

        // not registered with dss
        slashingReq.operator = operator;
        vm.expectRevert(OperatorNotValidatingForDSS.selector);
        vm.prank(address(dss2));
        core.requestSlashing(slashingReq);

        // request slashing before cooldown period
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.expectRevert(SlashingCooldownNotPassed.selector);
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        vm.warp(block.timestamp + Constants.SLASHING_COOLDOWN);

        slashingReq.slashPercentagesWad[0] = uint96(Constants.MAX_SLASHING_PERCENT_WAD) + 100;
        vm.expectRevert(MaxSlashPercentageWadBreached.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        slashingReq.slashPercentagesWad[0] = slashPercentageWad;

        // Vault not staked by operator to DSS
        update_vault_stake_to_dss(operatorVaults[0], false, dss);
        vm.expectRevert(VaultNotStakedToDSS.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        // check for duplicate vaults
        slashingReq.vaults[1] = slashingReq.vaults[0];
        vm.expectRevert(DuplicateSlashingVaults.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        // slashingRequest.vaults.length == 0
        slashingReq.vaults = new address[](0);
        slashingReq.slashPercentagesWad = new uint96[](0);
        vm.expectRevert(EmptyArray.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        // slashingRequest.slashPercentagesWad.length != slashingRequest.vaults.length
        slashingReq.vaults = new address[](10);
        slashingReq.slashPercentagesWad = new uint96[](9);
        vm.expectRevert(LengthsDontMatch.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();

        // slashingRequest.vaults.length > Constants.MAX_SLASHABLE_VAULTS_PER_REQUEST
        slashingReq.vaults = new address[](Constants.MAX_SLASHABLE_VAULTS_PER_REQUEST + 1);
        slashingReq.slashPercentagesWad = new uint96[](Constants.MAX_SLASHABLE_VAULTS_PER_REQUEST + 1);
        vm.expectRevert(MaxSlashableVaultsPerRequestBreached.selector);
        vm.startPrank(address(dss));
        core.requestSlashing(slashingReq);
        vm.stopPrank();
    }
}
