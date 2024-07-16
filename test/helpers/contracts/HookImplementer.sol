// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {IHook} from "./IHook.sol";

contract HookImplementer is IHook {
    mapping(bytes4 => bool) supportedInterface;
    uint256 public callCount = 0;

    constructor() {
        supportedInterface[IHook.hook.selector] = true;
        supportedInterface[IHook.hookHighGasUsage.selector] = true;
    }

    function hook(address arbitraryAddress, bool shouldSucceed, bytes memory arbitraryData) external {
        callCount += 1;

        if (!shouldSucceed) {
            revert ForcedFailure(420);
        }
    }

    /// @notice function with infinte gas usage
    function hookHighGasUsage() external {
        callCount++;
        uint256 j = 0;
        while (true) {
            j++;
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) {
        return supportedInterface[interfaceId];
    }

    error ForcedFailure(uint256 arbitraryNumber);
}

contract HookHighGasSupportsInterfaceImpl is HookImplementer {
    function supportsInterface(bytes4) public pure override returns (bool) {
        uint256 j = 0;
        while (true) {
            j++;
        }
        return true;
    }
}
