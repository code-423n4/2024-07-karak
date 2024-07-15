// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../../../src/interfaces/IDSS.sol";
import "../../../src/entities/HookLib.sol";

contract MockDSS is IDSS {
    mapping(bytes4 => bool) supportedInterface;
    mapping(address operator => bool jail) isJailed;

    function storeInterfaces() public {
        supportedInterface[IDSS.registrationHook.selector] = true;
        supportedInterface[IDSS.unregistrationHook.selector] = true;
        supportedInterface[IDSS.requestUpdateStakeHook.selector] = true;
        supportedInterface[IDSS.cancelUpdateStakeHook.selector] = true;
        supportedInterface[IDSS.finishUpdateStakeHook.selector] = true;
        supportedInterface[IDSS.requestSlashingHook.selector] = true;
        supportedInterface[IDSS.cancelSlashingHook.selector] = true;
        supportedInterface[IDSS.finishSlashingHook.selector] = true;
    }

    // HOOKS

    function registrationHook(address operator, bytes memory extraData) external {}
    function unregistrationHook(address operator, bytes memory extraData) external {}

    function requestUpdateStakeHook(address operator, Operator.StakeUpdateRequest memory newStake) external {}
    function cancelUpdateStakeHook(address operator, address vault) external {}
    function finishUpdateStakeHook(address operator) external {}
    function requestSlashingHook(address operator, uint256[] memory slashingPercentageWads) external {}
    function cancelSlashingHook(address operator) external {}
    function finishSlashingHook(address operator) external {}

    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
        return supportedInterface[interfaceId];
    }

    // Example functionality to add an operator to jail
    // Jail state implies, operator is not being considered by the DSS for rewards but is still slashable by it
    function toggleJail(address operator, bool toJail) public {
        isJailed[operator] = toJail;
    }
}
