// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../interfaces/Errors.sol";
import {Merkle} from "./MerkleProofs.sol";

library BeaconProofs {
    /// @notice Beacon block constants
    uint256 internal constant BEACON_STATE_HEIGHT = 5;
    uint256 internal constant BEACON_STATE_ROOT_IDX = 3;
    uint256 internal constant BEACON_BLOCK_HEADER_HEIGHT = 3;

    /// @notice Validator proof constants
    uint256 internal constant PUBKEY_IDX = 0;
    uint256 internal constant NUM_FIELDS = 8;
    uint256 internal constant BALANCE_IDX = 2;
    uint256 internal constant CONTAINER_IDX = 11;
    uint256 internal constant EXIT_EPOCH_IDX = 6;
    uint256 internal constant VALIDATOR_HEIGHT = 40;
    uint256 internal constant WITHDRAWAL_CREDENTIALS_IDX = 1;

    /// @notice Balance proof constants
    uint256 internal constant BALANCE_CONTAINER_IDX = 12;
    uint256 internal constant BALANCE_HEIGHT = 38;

    struct BeaconStateRootProof {
        uint64 timestamp;
        bytes32 beaconStateRoot;
        bytes proof;
    }

    struct ValidatorProof {
        uint40 validatorIndex;
        bytes32 validatorRoot;
        bytes proof;
    }

    struct ValidatorFieldsProof {
        ValidatorProof validatorProof;
        bytes32[] validatorFields;
    }

    struct BalanceContainer {
        bytes32 containerRoot;
        bytes proof;
    }

    struct BalanceProof {
        bytes32 pubkeyHash;
        bytes32 balanceRoot;
        bytes proof;
    }

    function fromLittleEndianUint64(bytes32 lenum) internal pure returns (uint64 n) {
        n = uint64(uint256(lenum >> 192));
        return (n >> 56) | ((0x00FF000000000000 & n) >> 40) | ((0x0000FF0000000000 & n) >> 24)
            | ((0x000000FF00000000 & n) >> 8) | ((0x00000000FF000000 & n) << 8) | ((0x0000000000FF0000 & n) << 24)
            | ((0x000000000000FF00 & n) << 40) | ((0x00000000000000FF & n) << 56);
    }

    function validateBeaconStateRootProof(bytes32 beaconBlockRoot, BeaconStateRootProof calldata beaconStateRootProof)
        internal
        view
    {
        if (beaconStateRootProof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT)) revert InvalidBeaconStateProof();
        if (
            !Merkle.verifyInclusionSha256(
                beaconStateRootProof.proof, beaconBlockRoot, beaconStateRootProof.beaconStateRoot, BEACON_STATE_ROOT_IDX
            )
        ) revert InvalidBeaconStateProof();
    }

    function validateValidatorProof(
        uint40 validatorIndex,
        bytes32[] calldata validatorFields,
        bytes calldata validatorProof,
        bytes32 beaconStateRoot
    ) internal view {
        if (validatorFields.length != NUM_FIELDS) revert InvalidValidatorFieldsLength();

        bytes32 validatorRoot = Merkle.merkleizeSha256(validatorFields);

        // Calculate the index for validator proof verification
        // Shift the container index left by the sum of validator height and one, then combine with the validator index
        uint256 index = (CONTAINER_IDX << (VALIDATOR_HEIGHT + 1)) | uint256(validatorIndex);

        // Validate the length of the validator proof
        if (validatorProof.length != 32 * ((VALIDATOR_HEIGHT + 1) + BEACON_STATE_HEIGHT)) {
            revert InvalidValidatorFieldsProofLength();
        }
        // Validate the inclusion of the validator root in the beacon state root
        if (!Merkle.verifyInclusionSha256(validatorProof, beaconStateRoot, validatorRoot, index)) {
            revert InvalidValidatorFieldsProofInclusion();
        }
    }

    function validateBalanceContainer(bytes32 beaconBlockRoot, BalanceContainer calldata proof) internal view {
        if (proof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT + BEACON_STATE_HEIGHT)) {
            revert InvalidBalanceRootProof();
        }

        uint256 index = (BEACON_STATE_ROOT_IDX << (BEACON_STATE_HEIGHT)) | BALANCE_CONTAINER_IDX;

        if (
            !Merkle.verifyInclusionSha256({
                proof: proof.proof,
                root: beaconBlockRoot,
                leaf: proof.containerRoot,
                index: index
            })
        ) revert InvalidBalanceRootProof();
    }

    function validateBalance(bytes32 balanceRoot, uint40 validatorIndex, BalanceProof calldata proof)
        internal
        view
        returns (uint256 validatorBalanceWei)
    {
        if (proof.proof.length != 32 * (BALANCE_HEIGHT + 1)) revert InvalidBalanceProof();

        uint256 balanceIndex = uint256(validatorIndex / 4);

        if (
            !Merkle.verifyInclusionSha256({
                proof: proof.proof,
                root: balanceRoot,
                leaf: proof.balanceRoot,
                index: balanceIndex
            })
        ) revert InvalidBalanceProof();

        /// Extract the individual validator's balance from the `balanceRoot`
        uint256 bitShiftAmount = (validatorIndex % 4) * 64;
        return uint256(fromLittleEndianUint64(bytes32((uint256(proof.balanceRoot) << bitShiftAmount)))) * 1 gwei;
    }

    function getEffectiveBalanceWei(bytes32[] memory validatorFields) internal pure returns (uint256) {
        return uint256(fromLittleEndianUint64(validatorFields[BALANCE_IDX])) * 1 gwei;
    }

    function getPubkeyHash(bytes32[] calldata validatorFields) external pure returns (bytes32) {
        return validatorFields[PUBKEY_IDX];
    }

    function getExitEpoch(bytes32[] memory validatorFields) internal pure returns (uint64) {
        return fromLittleEndianUint64(validatorFields[EXIT_EPOCH_IDX]);
    }

    function getWithdrawalCredentials(bytes32[] memory validatorFields) internal pure returns (bytes32) {
        return validatorFields[WITHDRAWAL_CREDENTIALS_IDX];
    }
}
