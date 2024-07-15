// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {HookLib} from "../../../src/entities/HookLib.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import {Constants} from "../../../src/interfaces/Constants.sol";
import {IHook} from "./IHook.sol";

contract HookCaller {
    address hookImpl;
    uint32 hookCallGasLimit = 500_000;
    uint32 supportsInterfaceGasLimit = 20_000;
    uint32 hookGasBuffer = 40_000;

    constructor(address _hookImpl) {
        hookImpl = _hookImpl;
    }

    function callHookSuccessfully(address arbitraryAddress, bytes memory arbitraryData) external returns (bool) {
        return HookLib.callHookIfInterfaceImplemented(
            IERC165(hookImpl),
            abi.encodeWithSelector(IHook.hook.selector, arbitraryAddress, true, arbitraryData),
            IHook.hook.selector,
            true, // ignoreFailure
            hookCallGasLimit,
            supportsInterfaceGasLimit,
            hookGasBuffer
        );
    }

    function callHookWithForcedFailure(address arbitraryAddress, bytes memory arbitraryData) external returns (bool) {
        return HookLib.callHookIfInterfaceImplemented(
            IERC165(hookImpl),
            abi.encodeWithSelector(IHook.hook.selector, arbitraryAddress, false, arbitraryData),
            IHook.hook.selector,
            false, // ignoreFailure
            hookCallGasLimit,
            supportsInterfaceGasLimit,
            hookGasBuffer
        );
    }

    function callHookWithIgnoredForcedFailure(address arbitraryAddress, bytes memory arbitraryData)
        external
        returns (bool)
    {
        return HookLib.callHookIfInterfaceImplemented(
            IERC165(hookImpl),
            abi.encodeWithSelector(IHook.hook.selector, arbitraryAddress, false, arbitraryData),
            IHook.hook.selector,
            true, // ignoreFailure
            hookCallGasLimit,
            supportsInterfaceGasLimit,
            hookGasBuffer
        );
    }
}