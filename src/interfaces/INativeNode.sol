// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

interface INativeNode {
    /* ========== MUTATIVE FUNCTIONS ========== */
    /// @notice Initializes the NativeNode
    /// @param owner: The owner of the node, which should be the NativeVault in most cases
    /// @param nodeOwner: The logical owner of the node whom the funds belong to
    function initialize(address owner, address nodeOwner) external;

    /// @notice Lets the NativeVault withdraw funds to the given address.
    /// In case of slashed assets the NativeVault withdraws those funds to the slashStore
    /// @param to: address of receivers of the funds
    /// @param weiAmount: amount to be withdrawn in wei
    function withdraw(address to, uint256 weiAmount) external;

    /// @notice Lets the owner pause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, type(uint256).max to pause all functions
    function pause(uint256 map) external;

    /// @notice Lets the owner unpause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpause(uint256 map) external;
    /* ======================================== */
}
