// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Ownable} from "solady/src/auth/Ownable.sol";

import "./entities/CoreStorageSlots.sol";
import "./Core.sol";

contract Querier {
    string public constant VERSION = "2.0.0";
    ICore public core;

    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor(address coreAddress) {
        core = ICore(coreAddress);
    }

    /* ============ VIEW FUNCTIONS ============ */

    /**
     * @notice Fetches vaults queued for withdrawal.
     * @param operator address of operator
     * @param dss address of DSS contract
     * @return vaults addresses of vaults queued for withdrawal
     */
    function fetchVaultsQueuedForExit(address operator, IDSS dss) external view returns (address[] memory vaults) {
        address[] memory stakedVaults = core.fetchVaultsStakedInDSS(operator, dss);
        bytes32[] memory slots = new bytes32[](stakedVaults.length);
        for (uint256 i = 0; i < stakedVaults.length; i++) {
            slots[i] = CoreStorageSlots.vaultPendingStakeUpdateSlot(operator, stakedVaults[i]);
        }
        bytes32[] memory results = core.extSloads(slots);
        uint256 count = 0;
        for (uint256 i = 0; i < results.length; i++) {
            if (results[i] != bytes32(0)) count++;
        }
        vaults = new address[](count);
        uint256 latestIndex = 0;
        for (uint256 i = 0; i < results.length; i++) {
            if (results[i] != bytes32(0)) vaults[latestIndex++] = stakedVaults[i];
        }
    }
}
