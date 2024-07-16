// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";

import {HookCaller, HookLib, IERC165, IHook} from "../helpers/contracts/HookCaller.sol";
import {HookImplementer, HookHighGasSupportsInterfaceImpl} from "../helpers/contracts/HookImplementer.sol";
import {DSSHookCallReverted, NotEnoughGas} from "../../src/interfaces/Errors.sol";
import "../../src/interfaces/Events.sol";

contract HookTest is Test {
    address hookImpl;
    address hookHighGasSupportsInterfaceImpl;
    address hookCaller;
    uint32 hookCallGasLimit = 500_000;
    uint32 supportsInterfaceGasLimit = 20_000;
    uint32 hookGasBuffer = 40_000;

    function setUp() public {
        hookImpl = address(new HookImplementer());
        hookHighGasSupportsInterfaceImpl = address(new HookHighGasSupportsInterfaceImpl());
        hookCaller = address(new HookCaller(hookImpl, hookHighGasSupportsInterfaceImpl));
    }

    function test_successful_hook() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);
        bool success = HookCaller(hookCaller).callHookSuccessfully(address(this), new bytes(0x32));
        assertTrue(success);
        assertEq(HookImplementer(hookImpl).callCount(), 1);
    }

    function test_failed_hook() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);
        vm.expectRevert(
            abi.encodeWithSelector(
                DSSHookCallReverted.selector,
                bytes32(abi.encodeWithSelector(HookImplementer.ForcedFailure.selector, 420))
            )
        );
        bool success = HookCaller(hookCaller).callHookWithForcedFailure(address(this), new bytes(0x32));
        assertFalse(success);
        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }

    function test_ignored_failed_hook() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);
        bool success = HookCaller(hookCaller).callHookWithIgnoredForcedFailure(address(this), new bytes(0x32));
        assertFalse(success);
        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }

    function test_supportsInterface_not_implemented() public {
        IERC165 dss = IERC165(address(this));
        assertFalse(
            HookLib.callHookIfInterfaceImplemented(
                dss, "", IHook.hook.selector, false, hookCallGasLimit, supportsInterfaceGasLimit, hookGasBuffer
            )
        );
    }

    function test_not_enough_gas() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);
        vm.expectRevert(NotEnoughGas.selector);
        // Fail before supportsInterface call due to low gas
        HookCaller(hookCaller).callHookSuccessfully{gas: supportsInterfaceGasLimit}(address(this), new bytes(0x32));

        vm.expectRevert(NotEnoughGas.selector);
        bytes memory data = abi.encodeWithSelector(IERC165.supportsInterface.selector, IHook.hook.selector);
        Vm(VM_ADDRESS).expectCall(hookImpl, data); // expect a call to be made to `supportsInterface`

        // Fail at hook call due to low gas
        HookCaller(hookCaller).callHookSuccessfully{gas: (supportsInterfaceGasLimit + hookCallGasLimit)}(
            address(this), new bytes(0x32)
        );
        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }

    function test_supports_interface_exceeds_gas_limit() public {
        assertEq(HookImplementer(hookHighGasSupportsInterfaceImpl).callCount(), 0);

        bytes memory data = abi.encodeWithSelector(IERC165.supportsInterface.selector, IHook.hook.selector);
        Vm(VM_ADDRESS).expectCall(hookHighGasSupportsInterfaceImpl, data); // expect a call to be made to `supportsInterface`
        vm.expectEmit();
        emit InterfaceNotSupported();
        // Fails at the supportsInterface call due overshooting gas usage
        assertFalse(HookCaller(hookCaller).callHookWithSuportsInterfaceHighGasUsage(address(this), new bytes(0x32)));

        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }

    function test_hook_call_exceeds_gas_limit() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);
        vm.expectRevert(abi.encodeWithSelector(DSSHookCallReverted.selector, bytes32(0)));
        bytes memory data = abi.encodeWithSelector(IERC165.supportsInterface.selector, IHook.hookHighGasUsage.selector);
        Vm(VM_ADDRESS).expectCall(hookImpl, data); // expect a call to be made to `hookHighGasUsage`

        HookCaller(hookCaller).callHookWithHookHighGasUsage(address(this), new bytes(0x32));

        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }

    function test_ignore_failure_hook_call_exceeds_gas_limit() public {
        assertEq(HookImplementer(hookImpl).callCount(), 0);

        bytes memory data = abi.encodeWithSelector(IERC165.supportsInterface.selector, IHook.hookHighGasUsage.selector);
        Vm(VM_ADDRESS).expectCall(hookImpl, data); // expect a call to be made to `hookHighGasUsage`
        vm.expectEmit();
        emit HookCallFailed(bytes32(0));

        assertFalse(HookCaller(hookCaller).callHookWithHookHighGasUsageAndIgnoreFailure(address(this), new bytes(0x32)));

        assertEq(HookImplementer(hookImpl).callCount(), 0);
    }
}
