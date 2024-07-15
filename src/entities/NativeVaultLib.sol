// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.25;

import {LibClone} from "solady/src/utils/LibClone.sol";

import "./VaultLib.sol";
import "../interfaces/Errors.sol";
import "../interfaces/Events.sol";
import "../interfaces/Constants.sol";
import "../interfaces/INativeNode.sol";

import "../entities/BeaconProofsLib.sol";

library NativeVaultLib {
    enum ValidatorStatus {
        INACTIVE,
        ACTIVE,
        WITHDRAWN
    }

    struct ValidatorDetails {
        // index of the validator
        uint40 validatorIndex;
        // status is set to ACTIVE when withdraw credential proof is submitted
        ValidatorStatus status;
        // amount of ETH restaked from beacon chain
        uint256 restakedBalanceWei;
        // timestamp of validator's last balance update
        uint64 lastBalanceUpdateTimestamp;
    }

    struct Snapshot {
        // node balance without awarded shares
        uint256 nodeBalanceWei;
        // change in balance for all validators
        int256 balanceDeltaWei;
        // number of proofs to submit for finalizing the snapshot
        uint256 remainingProofs;
        // beacon block root corresponding to block.number - 1
        bytes32 parentBeaconBlockRoot;
    }

    struct NativeNode {
        // CREATE2 address of the node
        address nodeAddress;
        // total restaked ETH (beacon + node balance)
        uint256 totalRestakedETH;
        // withdrawable ETH with shares awarded
        uint256 withdrawableCreditedNodeETH;
        // current snapshot details
        Snapshot currentSnapshot;
        // timestamp of last finalized snapshot
        uint64 lastSnapshotTimestamp;
        // total validators with withdrawal credentials pointed to this node
        uint256 activeValidatorCount;
        // timestamp of ongoing snapshot, 0 if no ongoing snapshot
        uint64 currentSnapshotTimestamp;
        // validator details keyed from its public key hash
        mapping(bytes32 => ValidatorDetails) validatorPubkeyHashToDetails;
    }

    struct QueuedWithdrawal {
        // receiver's address
        address to;
        // timestamp when withdraw was started
        uint96 start;
        // assets (ETH) to be withdrawn
        uint256 assets;
        // owner of the NativeNode being withdrawn from
        address nodeOwner;
    }

    /// @custom:storage-location erc7201:native-vault.storage
    struct Storage {
        // node implementation address
        address nodeImpl;
        // virtual assets for 4626 vault
        uint256 totalAssets;
        // store for sending slashed assets to
        address slashStore;
        // mapping of native node to its owner
        mapping(address => address) nodeToOwner;
        // mapping of owners to details of their native node
        mapping(address => NativeNode) ownerToNode;
        // mapping of node owner to their withdraw nonce
        mapping(address nodeOwner => uint256 withdrawNonce) nodeOwnerToWithdrawNonce;
        // mapping of node owner to their total pending withdrawal amount
        mapping(address nodeOwner => uint256 withdrawAmount) nodeOwnerToWithdrawAmount;
        // mapping of owners' withdraw nonce to pending withdrawals
        mapping(bytes32 ownerWithdrawNonce => QueuedWithdrawal withdrawal) withdrawalMap;
    }

    function deployNode(Storage storage self, VaultLib.Config storage config, address owner)
        internal
        returns (address)
    {
        bytes32 salt = keccak256(abi.encodePacked(config.operator, owner));

        INativeNode newNode = INativeNode(address(LibClone.deployDeterministicERC1967BeaconProxy(address(this), salt)));
        newNode.initialize(address(this), owner);

        emit NodeDeployed(msg.sender, address(newNode), self.nodeImpl);
        return address(newNode);
    }

    function calculateWithdrawKey(address nodeOwner, uint256 nodeOwnerNonce) internal pure returns (bytes32) {
        return keccak256(abi.encode(nodeOwner, nodeOwnerNonce));
    }

    function validateSnapshotProof(
        Storage storage self,
        address nodeOwner,
        ValidatorDetails memory validatorDetails,
        bytes32 balanceRoot,
        BeaconProofs.BalanceProof calldata proof
    ) internal returns (int256 balanceDeltaWei) {
        address nodeAddress = self.ownerToNode[nodeOwner].nodeAddress;
        uint64 timestamp = self.ownerToNode[nodeOwner].currentSnapshotTimestamp;

        uint40 validatorIndex = validatorDetails.validatorIndex;
        uint256 prevBalanceWei = validatorDetails.restakedBalanceWei;
        uint256 newBalanceWei = BeaconProofs.validateBalance(balanceRoot, validatorIndex, proof);

        validatorDetails.restakedBalanceWei = newBalanceWei;
        validatorDetails.lastBalanceUpdateTimestamp = timestamp;

        if (newBalanceWei == 0) {
            self.ownerToNode[nodeOwner].activeValidatorCount--;
            validatorDetails.status = ValidatorStatus.WITHDRAWN;

            emit ValidatorWithdrawn(nodeOwner, nodeAddress, timestamp, validatorIndex);
        }
        self.ownerToNode[nodeOwner].validatorPubkeyHashToDetails[proof.pubkeyHash] = validatorDetails;

        emit SnapshotValidator(nodeOwner, nodeAddress, timestamp, validatorIndex);

        if (newBalanceWei != prevBalanceWei) {
            emit ValidatorBalanceChanged(nodeOwner, nodeAddress, validatorIndex, timestamp, newBalanceWei);

            balanceDeltaWei = int256(newBalanceWei) - int256(prevBalanceWei);
        }

        return balanceDeltaWei;
    }

    function validateWithdrawalCredentials(
        Storage storage self,
        address nodeOwner,
        uint64 updateTimestamp,
        bytes32 beaconStateRoot,
        BeaconProofs.ValidatorFieldsProof calldata validatorFieldsProof
    ) internal returns (uint256) {
        bytes32 validatorPubkeyHash = BeaconProofs.getPubkeyHash(validatorFieldsProof.validatorFields);
        NativeVaultLib.ValidatorDetails memory validatorDetails =
            self.ownerToNode[nodeOwner].validatorPubkeyHashToDetails[validatorPubkeyHash];

        if (validatorDetails.status != NativeVaultLib.ValidatorStatus.INACTIVE) revert ValidatorAlreadyActive();
        if (BeaconProofs.getExitEpoch(validatorFieldsProof.validatorFields) != type(uint64).max) {
            revert ValidatorExiting();
        }
        // Construct beacon chain withdraw address with current node's payable address
        if (
            BeaconProofs.getWithdrawalCredentials(validatorFieldsProof.validatorFields)
                != bytes32(abi.encodePacked(bytes1(uint8(1)), bytes11(0), address(self.ownerToNode[nodeOwner].nodeAddress)))
        ) {
            revert WithdrawalCredentialsMismatchWithNode();
        }

        uint256 restakedBalanceWei = BeaconProofs.getEffectiveBalanceWei(validatorFieldsProof.validatorFields);
        BeaconProofs.validateValidatorProof(
            validatorFieldsProof.validatorProof.validatorIndex,
            validatorFieldsProof.validatorFields,
            validatorFieldsProof.validatorProof.proof,
            beaconStateRoot
        );

        validatorDetails.status = NativeVaultLib.ValidatorStatus.ACTIVE;
        validatorDetails.validatorIndex = validatorFieldsProof.validatorProof.validatorIndex;
        validatorDetails.lastBalanceUpdateTimestamp = updateTimestamp;
        validatorDetails.restakedBalanceWei = restakedBalanceWei;
        self.ownerToNode[nodeOwner].validatorPubkeyHashToDetails[validatorPubkeyHash] = validatorDetails;
        self.ownerToNode[nodeOwner].activeValidatorCount++;

        emit RestakedValidator(
            nodeOwner,
            self.ownerToNode[nodeOwner].nodeAddress,
            validatorFieldsProof.validatorProof.validatorIndex,
            updateTimestamp,
            restakedBalanceWei
        );
        return restakedBalanceWei;
    }
}
