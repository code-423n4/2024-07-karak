// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {INativeNode} from "./INativeNode.sol";
import {IKarakBaseVault} from "./IKarakBaseVault.sol";
import {BeaconProofs} from "../entities/BeaconProofsLib.sol";
import {NativeVaultLib} from "../entities/NativeVaultLib.sol";

interface INativeVault is IKarakBaseVault {
    /* ========== MUTATIVE FUNCTIONS ========== */

    /// @notice Allows the owner to change the NativeNode implementation and upgrade all NativeNodes
    /// @param newNodeImplementation: The address of the new node implementation
    function changeNodeImplementation(address newNodeImplementation) external;

    /// @notice Deploys a new NativeNode for the caller
    function createNode() external returns (address);

    /// @notice Lets the owner start a snapshot for their NativeNode which is completed
    /// only when balance proofs are submitted for all active validators of the node.
    /// Reverts if there is a pending snapshot in progress or if there is no balance change
    /// from the last snapshot.
    function startSnapshot(bool revertIfNoBalanceChange) external;

    /// @notice Validates snapshot proofs that can be submitted by anyone for active
    /// validators in the NativeNode and awards or burns shares for balance changes.
    /// @param nodeOwner: address of the owner whose NativeNode the proof is submitted for
    /// @param balanceProofs: proofs for validators balance validated against the balance container root
    function validateSnapshotProofs(
        address nodeOwner,
        BeaconProofs.BalanceProof[] calldata balanceProofs,
        BeaconProofs.BalanceContainer calldata balanceContainer
    ) external;

    /// @notice Validates that a validator's withdrawal credentials are pointed to the an owner's NativeNode.
    /// @param nodeOwner: address of the owner whose NativeNode the proof is submitted for
    /// @param beaconStateRootProof: proof of a beacon state root against the beacon block root
    /// @param validatorFieldsProofs: validator fields proofs validated against the beacon state root
    function validateWithdrawalCredentials(
        address nodeOwner,
        BeaconProofs.BeaconStateRootProof calldata beaconStateRootProof,
        BeaconProofs.ValidatorFieldsProof[] calldata validatorFieldsProofs
    ) external;

    /// @notice Allows anyone to start a new snapshot if the last snapshot has expired,
    /// i.e. older than `Constants.SNAPSHOT_EXPIRY since the last completed timestamp.
    /// Does not revert if there is no change in balance.
    /// @param nodeOwner: address of the owner whose NativeNode has expired snapshot
    function validateExpiredSnapshot(address nodeOwner) external;

    /// @notice Allows caller to start a withdrawal to withdraw ETH accrued on their NativeNode
    /// @param to: address to withdraw the funds to
    /// @param weiAmount: amount to be withdrawn in wei
    function startWithdrawal(address to, uint256 weiAmount) external returns (bytes32 withdrawalKey);

    /// @notice Allows caller to finish a pending withdrawal
    /// @param withdrawalKey: The ID of the withdrawal request returned by startWithdrawal
    function finishWithdrawal(bytes32 withdrawalKey) external;

    /// @notice Lets the owner or manager of the NativeVault pause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function pauseNode(INativeNode node, uint256 map) external;

    /// @notice Lets the owner or manager of the NativeVault unpause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpauseNode(INativeNode node, uint256 map) external;
    /* ======================================== */

    /* ============ VIEW FUNCTIONS ============ */
    function withdrawableWei(address nodeOwner) external view returns (uint256);

    function activeValidatorCount(address nodeOwner) external view returns (uint256);

    function getNextWithdrawNonce(address nodeOwner) external view returns (uint256);

    function isWithdrawalPending(address nodeOwner, uint256 withdrawNonce) external view returns (bool);

    function getQueuedWithdrawal(address nodeOwner, uint256 withdrawNonce)
        external
        view
        returns (NativeVaultLib.QueuedWithdrawal memory);

    function getNodeOwner(address node) external view returns (address);

    function getValidatorDetails(bytes32 pubKey, address nodeOwner)
        external
        view
        returns (NativeVaultLib.ValidatorDetails memory);

    function lastSnapshotTimestamp(address nodeOwner) external view returns (uint64);

    function currentSnapshotTimestamp(address nodeOwner) external view returns (uint64);

    function currentSnapshot(address nodeOwner) external view returns (NativeVaultLib.Snapshot memory);
    /* ======================================== */
}
