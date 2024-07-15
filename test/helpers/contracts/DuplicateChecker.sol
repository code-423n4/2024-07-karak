// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {CommonUtils} from "../../../src/utils/CommonUtils.sol";

contract DuplicateChecker {
    using CommonUtils for address[];

    function hasDuplicates(address[] memory arr) public pure returns (bool) {
        return arr.hasDuplicates();
    }
}
