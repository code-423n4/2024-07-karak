// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Vm.sol";
import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../../src/Core.sol";
import "../../src/SlashStore.sol";
import "../../src/NativeNode.sol";
import "../../src/NativeVault.sol";
import "../helpers/ProxyDeployment.sol";
import "../../src/entities/VaultLib.sol";
import "../../src/interfaces/IKarakBaseVault.sol";

// import {ICore} from "../../src/interfaces/ICore.sol";
// import {INativeNode} from "../../src/interfaces/INativeNode.sol";
// import {INativeVault} from "../../src/interfaces/INativeVault.sol";

contract NativeVaultTest is Test {
    Core core;
    NativeNode nativeNode;
    NativeVault nativeVault;

    address manager = address(11);
    address operator = address(12);
    address slashStore = address(13);
    address proxyAdmin = address(14);
    address slashingVetoCommittee = address(15);

    function setUp() public {
        // Setup core
        uint32 hookCallGasLimit = 500_000;
        uint32 hookGasBuffer = 40_000;
        uint32 supportsInterfaceGasLimit = 20_000;
        address nativeVaultImpl = address(new NativeVault());
        core = Core(ProxyDeployment.factoryDeploy(address(new Core()), proxyAdmin));
        core.initialize(
            nativeVaultImpl, manager, slashingVetoCommittee, hookCallGasLimit, supportsInterfaceGasLimit, hookGasBuffer
        );
        address[] memory assets = new address[](1);
        assets[0] = Constants.DEAD_BEEF;
        address[] memory slashingHandlers = new address[](1);
        slashingHandlers[0] = slashStore;
        core.allowlistAssets(assets, slashingHandlers);

        // Setup NativeNode implementation
        address nativeNodeImpl = address(new NativeNode());

        // Deploy Vaults
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: Constants.DEAD_BEEF,
            decimals: 18,
            operator: operator,
            name: "NativeTestVault",
            symbol: "NTV",
            extraData: abi.encode(address(manager), slashStore, address(nativeNodeImpl))
        });

        vm.startPrank(operator);
        IKarakBaseVault[] memory vaults = core.deployVaults(vaultConfigs, address(0));
        nativeVault = NativeVault(address(vaults[0]));
        vm.stopPrank();
    }

    function test_initialize_fail_reinitialize() public {
        vm.expectRevert(Initializable.InvalidInitialization.selector);
        nativeVault.initialize(address(core), operator, address(0), "ABCDE", "EFG", bytes(""));
    }

    function test_initialize() public view {
        assertEq(nativeVault.owner(), address(core));
        assertEq(nativeVault.asset(), Constants.DEAD_BEEF);
        assertEq(nativeVault.name(), "NativeTestVault");
        assertEq(nativeVault.symbol(), "NTV");
        assertEq(nativeVault.decimals(), 18);
    }
}
