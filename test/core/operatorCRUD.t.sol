// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";

import "../helpers/OperatorHelper.sol";

contract OperatorCRUD is OperatorHelper {
    function test_deploy_vault() public {
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault",
            symbol: "TV",
            extraData: bytes("")
        });
        vm.prank(operator);
        IKarakBaseVault[] memory currVaults = core.deployVaults(vaultConfigs, address(0));
        assertEq(currVaults.length, core.getOperatorVaults(operator).length);
        Vault vault = Vault(address(currVaults[0]));
        assertEq(core.implementation(address(vault)), vaultImpl);
        assertEq(vault.name(), "TestVault");
        assertEq(vault.symbol(), "TV");
        assertEq(vault.asset(), address(depositToken));
        assertEq(vault.getNextWithdrawNonce(address(this)), 0);
    }

    function test_deploy_vault_operatorSC() public {
        operator = address(operatorSC);
        test_deploy_vault();
    }

    function test_deploy_vault_invalid_config(address token) public {
        vm.assume(token != address(depositToken));
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault",
            symbol: "TV",
            extraData: bytes("")
        });

        vaultConfigs[0].asset = token;
        vm.expectRevert(AssetNotAllowlisted.selector);
        vm.prank(operator);
        core.deployVaults(vaultConfigs, vaultImpl);
    }

    function test_deploy_vault_invalid_impl(address testVaultImpl) public {
        vm.assume(testVaultImpl != address(vaultImpl) && testVaultImpl != address(0));
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault",
            symbol: "TV",
            extraData: bytes("")
        });

        vm.expectRevert(VaultImplNotAllowlisted.selector);
        vm.prank(operator);
        core.deployVaults(vaultConfigs, testVaultImpl);
    }

    function test_pause() public {
        assertFalse(core.paused());

        uint256 map = core.pausedMap();
        vm.startPrank(manager);
        map |= (1 << Constants.PAUSE_CORE_REGISTER_TO_DSS);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_REGISTER_TO_DSS)
        );
        core.registerOperatorToDSS(dss, "");

        map |= (1 << Constants.PAUSE_CORE_UNREGISTER_FROM_DSS);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_UNREGISTER_FROM_DSS)
        );
        core.unregisterOperatorFromDSS(dss, "");

        map |= (1 << Constants.PAUSE_CORE_REQUEST_STAKE_UPDATE);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_REQUEST_STAKE_UPDATE)
        );
        Operator.StakeUpdateRequest memory stakeUpdateRequest;
        core.requestUpdateVaultStakeInDSS(stakeUpdateRequest);

        map |= (1 << Constants.PAUSE_CORE_FINALIZE_STAKE_UPDATE);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_FINALIZE_STAKE_UPDATE)
        );
        Operator.QueuedStakeUpdate memory queuedStakeUpdate;
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate);

        map |= (1 << Constants.PAUSE_CORE_DEPLOY_VAULTS);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_DEPLOY_VAULTS)
        );
        core.deployVaults(new VaultLib.Config[](1), vaultImpl);

        map |= (1 << Constants.PAUSE_CORE_REQUEST_SLASHING);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_REQUEST_SLASHING)
        );
        SlasherLib.SlashRequest memory requestSlashing;
        core.requestSlashing(requestSlashing);

        map |= (1 << Constants.PAUSE_CORE_CANCEL_SLASHING);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_CANCEL_SLASHING)
        );
        SlasherLib.QueuedSlashing memory queuedSlashing;
        core.cancelSlashing(queuedSlashing);

        map |= (1 << Constants.PAUSE_CORE_FINALIZE_SLASHING);
        core.pause(map);
        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_CORE_FINALIZE_SLASHING)
        );
        core.finalizeSlashing(queuedSlashing);

        map = 0;
        core.unpause(map);
        assertFalse(core.paused());
    }
}
