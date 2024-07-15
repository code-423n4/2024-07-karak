// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/interfaces/IERC165.sol";
import {Operator} from "../entities/Operator.sol";

interface IDSS is IERC165 {
    // HOOKS

    function registrationHook(address operator, bytes memory extraData) external;
    function unregistrationHook(address operator, bytes memory extraData) external;

    function requestUpdateStakeHook(address operator, Operator.StakeUpdateRequest memory newStake) external;
    function cancelUpdateStakeHook(address operator, address vault) external;
    function finishUpdateStakeHook(address operator) external;
    function requestSlashingHook(address operator, uint256[] memory slashingPercentagesWad) external;
    function cancelSlashingHook(address operator) external;
    function finishSlashingHook(address operator) external;
}
