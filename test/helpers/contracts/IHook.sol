// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/interfaces/IERC165.sol";

interface IHook is IERC165 {
    function hook(address arbitraryAddress, bool shouldSucceed, bytes memory arbitraryData) external;
    function hookHighGasUsage() external;
}
