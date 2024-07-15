// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ISlashingHandler {
    function initialize(address owner, IERC20[] calldata _supportedAssets) external;
    function handleSlashing(IERC20 token, uint256 amount) external;
}
