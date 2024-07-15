// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

/* SLOTS */
uint256 constant CORE_STORAGE_SLOT = 0x13c729cff436dc8ac22d145f2c778f6a709d225083f39538cc5e2674f2f10700;

/* CORE_STORAGE_OFFSETS */
uint256 constant OPERATOR_STATE_MAPPING_OFFSET = 0;

/* OPERATOR_STORAGE_OFFSETS */
uint256 constant PENDING_STAKE_UPDATE_MAPPING_OFFSET = 6;

library CoreStorageSlots {
    /* GETTERS */
    function operatorStateMappingSlot() internal pure returns (bytes32) {
        return bytes32(CORE_STORAGE_SLOT + OPERATOR_STATE_MAPPING_OFFSET);
    }

    function operatorStateSlot(address operator) internal pure returns (bytes32) {
        return keccak256(abi.encode(operator, operatorStateMappingSlot()));
    }

    function pendingStakeUpdateMappingSlot(address operator) internal pure returns (bytes32) {
        return bytes32(uint256(operatorStateSlot(operator)) + PENDING_STAKE_UPDATE_MAPPING_OFFSET);
    }

    function vaultPendingStakeUpdateSlot(address operator, address vault) public pure returns (bytes32) {
        return keccak256(abi.encode(vault, pendingStakeUpdateMappingSlot(operator)));
    }
}
