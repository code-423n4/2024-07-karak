// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

abstract contract ExtSloads {
    /// @notice Allows reading of arbitrary storage slots. Useful for reading inside embedded structs
    /// @dev Originally from Morpho Blue: https://github.com/morpho-org/morpho-blue/blob/d36719dcd2f37068478889782deac96e296719f0/src/Morpho.sol#L544-L557
    /// @param slots The storage slots to read
    /// @return res The values stored in the given storage slots
    function extSloads(bytes32[] calldata slots) public view virtual returns (bytes32[] memory res) {
        uint256 nSlots = slots.length;

        res = new bytes32[](nSlots);

        for (uint256 i; i < nSlots;) {
            bytes32 slot = slots[i++];

            assembly ("memory-safe") {
                mstore(add(res, mul(i, 32)), sload(slot))
            }
        }
    }
}
