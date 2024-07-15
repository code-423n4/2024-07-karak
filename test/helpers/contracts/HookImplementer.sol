// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {IHook} from "./IHook.sol";

contract HookImplementer is IHook {
    mapping(bytes4 => bool) supportedInterface;
    uint256 public callCount = 0;

    constructor() {
        supportedInterface[IHook.hook.selector] = true;
    }

    function hook(address arbitraryAddress, bool shouldSucceed, bytes memory arbitraryData) external {
        callCount += 1;

        if (!shouldSucceed) {
            revert ForcedFailure(420);
        }
    }

    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
        return supportedInterface[interfaceId];
    }

    error ForcedFailure(uint256 arbitraryNumber);
}
