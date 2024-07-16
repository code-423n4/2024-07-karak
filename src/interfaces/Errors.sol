// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

// Vault
error VaultNotAChildVault();
error InvalidVaultAdminFunction();
error UndefinedVaultType();
error NotEnoughShares();
error NotImplemented();
error RedeemMoreThanMax();
error DepositMoreThanMax();

// Staker
error WithdrawalNotFound();
error WithdrawAlreadyCompleted();

// Operator
error OperatorAlreadyRegisteredToDSS();
error OperatorNotRegistered();
error InvalidOperatorInput();
error OperatorStakeUpdateDelayNotPassed();
error InvalidQueuedStakeUpdateInput();
error InvalidStakePercentage();
error OperatorNotValidatingForDSS();
error PendingStakeUpdateRequest();
error MaxVaultCapacityReached();
error AllVaultsNotUnstakedFromDSS();
error MaxDSSCapacityReached();

// Core
error VaultAlreadyDeployed();
error VaultImplNotAllowlisted();
error VaultNotStakedToDSS();
error StakesNotZero();
error AssetNotAllowlisted();
error DSSHookCallReverted(bytes32 revertReason);
error VaultCreationFailedAddrMismatch(address expected, address actual);
error InvalidLeverageComputation();

// Slashing
error InvalidSlashingParams();
error MinWithdrawDelayNotPassed();
error MinSlashingDelayNotPassed();
error SlashingHandlerNotAllowlisted();
error UnsupportedAsset();
error MaxSlashableVaultsPerRequestBreached();
error SlashingCooldownNotPassed();
error ZeroSlashPercentageWad();
error MaxSlashPercentageWadBreached();
error InvalidSlashingPercentageWad();
error DuplicateSlashingVaults();

// DSS
error DSSNotRegistered();
error DSSAlreadyRegistered();

// Generic
error ZeroAddress();
error ZeroAmount();
error ZeroShares();
error ReservedAddress();
error NotEnoughGas();

// TODO: cleanup
// NativeRestakerNode
error NotEnoughETH();
error InactiveValidator();
error ValidatorAlreadyProved();
error NotVaultSlasher();
error NotNodeOwner();
error DirectDepositToNode();
error PendingIncompleteSnapshot();
error NoBalanceUpdateToSnapshot();
error NoActiveSnapshot();
error AmountExceedsWithdrawableETH();
error BeaconTimestampTooOld();
error BeaconTimestampIsCurrent();
error BeaconRootFetchError();
error ValidatorAlreadyActive();
error ValidatorNotActive();
error ValidatorExiting();
error WithdrawalCredentialsMismatchWithNode();
error InvalidValidatorFieldsLength();
error InvalidValidatorFieldsProofLength();
error InvalidValidatorFieldsProofInclusion();
error InvalidBeaconStateProof();
error InvalidBalanceRootProof();
error InvalidBalanceProof();
error SnapshotNotExpired();
error SnapshotExpired();
error NodeCreationFailedAddressMismatch(address expected, address actual);
error DepositTokenNotAccepted();

// NativeRestakerNodeManager
error NodeAlreadyExists();
error NodeCreationFailedAddrMismatch(address expected, address actual);
error NotNativeRestakerNode();
error NotChildNode();
error LengthsDontMatch();
error EmptyArray();
error NotSmartContract();
error NotSlashStore();
