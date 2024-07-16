// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../entities/Operator.sol";
import {SlasherLib} from "../entities/SlasherLib.sol";

event StartedRedeem(address staker, address operator, uint256 shares, bytes32 withdrawKey, uint256 assets);

event FinishedRedeem(
    address staker, address beneficiary, address operator, uint256 shares, uint256 assetsClaimed, bytes32 withdrawRoot
);

event CanceledRedeem(address staker, address operator, uint256 shares, bytes32 withdrawRoot);

event NewVault(address vault, address implementation);

event DeployedVault(address operator, address vault, address asset);

event AddedVault(address operator, address vault, address vaultImplementation);

event UpgradedVault(address implementation, address vault);

event UpgradedAllVaults(address implementation);

event AllowlistedAssets(address[] assets);

event RegisteredOperatorToDSS(address operator, address dss);

event UnregisteredOperatorToDSS(address operator, address dss);

event RequestedSlashing(address dss, SlasherLib.SlashRequest requestSlashing);

event CancelledSlashing(address canceller, SlasherLib.QueuedSlashing queuedSlashing);

event Slashed(uint256 assets);

event FinalizedSlashing(address finisher, SlasherLib.QueuedSlashing queuedSlashing);

event RequestedStakeUpdate(Operator.QueuedStakeUpdate updateRequest);

event CanceledStakeUpdate(address operator, bytes32 stakeHash);

event FinishedStakeUpdate(Operator.QueuedStakeUpdate updateRequest);

event HookCallFailed(bytes32 returnData);

event HookCallSucceeded(bytes32 returnData);

event InterfaceNotSupported();

// TODO: reorganize and cleanup
// Native Restaking Events
event StartedWithdraw(address nodeOwner, address operator, bytes32 withdrawKey, uint256 assets, address recipient);

event FinishedWithdraw(address nodeOwner, address recipient, address operator, uint256 assets, bytes32 withdrawKey);

event NodeDeployed(address owner, address node, address nodeImplementation);

event NativeVaultInitialized(address owner, address manager, address operator, address slashStore);

event SnapshotCreated(address nodeOwner, address node, uint64 timestamp, bytes32 parentBeaconBlockRoot);

event SnapshotFinished(address nodeOwner, address node, uint64 snapshotTimestamp, int256 totalSharesWei);

event NodeETHWithdrawn(address node, address to, uint256 weiAmount);

event NativeRestakerNodeDeployed(address node, address implementation);

event RestakedValidator(address nodeOwner, address node, uint256 validatorIndex, uint64 timestamp, uint256 amountWei);

event ValidatorWithdrawn(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

event ValidatorBalanceChanged(
    address nodeOwner, address node, uint40 validatorIndex, uint64 timestamp, uint256 newBalanceWei
);

event SnapshotValidator(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

event UpgradedAllNodes(address implementation);

event DepositedSlashedAssets(address nativeNode, uint256 amount);

event IncreasedBalance(uint256 totalRestakedETH);

event DecreasedBalance(uint256 totalRestakedETH);

event DSSRegistered(address dss, uint256 maxSlashablePercentageWad);
