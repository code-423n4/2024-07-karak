// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

contract OperatorContract {
    function executeCall(address target, bytes memory callData) public returns (bytes memory) {
        (bool success, bytes memory data) = target.call(callData);
        require(success, "Call from operator reverted");
        return data;
    }
}
