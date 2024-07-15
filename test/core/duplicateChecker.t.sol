// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import {DuplicateChecker} from "../helpers/contracts/DuplicateChecker.sol";

contract AddressDuplicateCheckerTests is Test {
    DuplicateChecker dupChecker;

    function setUp() public {
        dupChecker = new DuplicateChecker();
    }

    function test_empty_array() public view {
        assertEq(dupChecker.hasDuplicates(new address[](0)), false, "expected no dupes");
    }

    function test_no_dupes() public view {
        address[] memory arr = new address[](3);
        arr[0] = address(1);
        arr[1] = address(2);
        arr[2] = address(3);

        assertEq(dupChecker.hasDuplicates(arr), false, "expected no dupes");

        arr[0] = address(4);
        arr[1] = address(5);
        arr[2] = address(6);

        assertEq(dupChecker.hasDuplicates(arr), false, "expected no dupes");
    }

    function test_dupes() public view {
        address[] memory arr = new address[](3);
        arr[0] = address(1);
        arr[1] = address(2);
        arr[2] = address(1);

        assertEq(dupChecker.hasDuplicates(arr), true, "expected dupes");

        arr[0] = address(1);
        arr[1] = address(1);
        arr[2] = address(1);

        assertEq(dupChecker.hasDuplicates(arr), true, "expected dupes");

        arr[0] = address(1);
        arr[1] = address(1);
        arr[2] = address(2);

        assertEq(dupChecker.hasDuplicates(arr), true, "expected dupes");
    }
}
