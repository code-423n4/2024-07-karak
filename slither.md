
INFO:Detectors:
Vault.startRedeem(uint256,address) (src/Vault.sol#125-149) ignores return value by this.transferFrom(msg.sender,address(this),shares) (src/Vault.sol#146)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unchecked-transfer

INFO:Detectors:
NativeVault._startSnapshot(NativeVaultLib.NativeNode,bool,address) (src/NativeVault.sol#444-470) uses a dangerous strict equality:
	- revertIfNoBalanceChange && nodeBalanceWei == 0 (src/NativeVault.sol#457)
NativeVault._updateSnapshot(NativeVaultLib.NativeNode,NativeVaultLib.Snapshot,address) (src/NativeVault.sol#472-491) uses a dangerous strict equality:
	- snapshot.remainingProofs == 0 (src/NativeVault.sol#477)
NativeVault.validateWithdrawalCredentials(address,BeaconProofs.BeaconStateRootProof,BeaconProofs.ValidatorFieldsProof[]) (src/NativeVault.sol#168-204) uses a dangerous strict equality:
	- beaconStateRootProof.timestamp == block.timestamp (src/NativeVault.sol#181)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-strict-equalities

INFO:Detectors:
Operator.addVault(Operator.State,IKarakBaseVault) (src/entities/Operator.sol#43-47) ignores return value by operatorState.vaults.add(address(vault)) (src/entities/Operator.sol#46)
Operator.requestUpdateVaultStakeInDSS(CoreLib.Storage,Operator.StakeUpdateRequest,uint128,address) (src/entities/Operator.sol#61-87) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.requestUpdateStakeHook.selector,operator,requestStakeUpdate),interfaceId:dss.requestUpdateStakeHook.selector,ignoreFailure:! requestStakeUpdate.toStake,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/Operator.sol#78-86)
Operator.updateVaultStakeInDSS(Operator.State,address,IDSS,bool) (src/entities/Operator.sol#103-109) ignores return value by operatorState.vaultStakedInDssMap[dss].add(vault) (src/entities/Operator.sol#105)
Operator.updateVaultStakeInDSS(Operator.State,address,IDSS,bool) (src/entities/Operator.sol#103-109) ignores return value by operatorState.vaultStakedInDssMap[dss].remove(vault) (src/entities/Operator.sol#107)
Operator.validateAndUpdateVaultStakeInDSS(CoreLib.Storage,Operator.QueuedStakeUpdate) (src/entities/Operator.sol#111-133) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.finishUpdateStakeHook.selector,msg.sender),interfaceId:dss.finishUpdateStakeHook.selector,ignoreFailure:true,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/Operator.sol#124-132)
Operator.registerOperatorToDSS(CoreLib.Storage,IDSS,address,bytes) (src/entities/Operator.sol#150-171) ignores return value by operatorState.dssMap.add(address(dss)) (src/entities/Operator.sol#160)
Operator.registerOperatorToDSS(CoreLib.Storage,IDSS,address,bytes) (src/entities/Operator.sol#150-171) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.registrationHook.selector,operator,registrationHookData),interfaceId:dss.registrationHook.selector,ignoreFailure:false,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/Operator.sol#162-170)
Operator.unregisterOperatorFromDSS(CoreLib.Storage,IDSS,address,bytes) (src/entities/Operator.sol#181-203) ignores return value by self.operatorState[operator].dssMap.remove(address(dss)) (src/entities/Operator.sol#193)
Operator.unregisterOperatorFromDSS(CoreLib.Storage,IDSS,address,bytes) (src/entities/Operator.sol#181-203) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.unregistrationHook.selector,operator,unregistrationHookData),interfaceId:dss.unregistrationHook.selector,ignoreFailure:true,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/Operator.sol#194-202)
SlasherLib.requestSlashing(CoreLib.Storage,IDSS,SlasherLib.SlashRequest,uint256) (src/entities/SlasherLib.sol#94-124) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.requestSlashingHook.selector,slashingMetadata.operator,slashingMetadata.slashPercentagesWad),interfaceId:dss.requestSlashingHook.selector,ignoreFailure:true,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/SlasherLib.sol#113-123)
SlasherLib.finalizeSlashing(CoreLib.Storage,SlasherLib.QueuedSlashing) (src/entities/SlasherLib.sol#126-151) ignores return value by IKarakBaseVault(queuedSlashing.vaults[i]).slashAssets(queuedSlashing.earmarkedStakes[i],self.assetSlashingHandlers[IKarakBaseVault(queuedSlashing.vaults[i]).asset()]) (src/entities/SlasherLib.sol#135-138)
SlasherLib.finalizeSlashing(CoreLib.Storage,SlasherLib.QueuedSlashing) (src/entities/SlasherLib.sol#126-151) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.finishSlashingHook.selector,queuedSlashing.operator),interfaceId:dss.finishSlashingHook.selector,ignoreFailure:true,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/SlasherLib.sol#142-150)
SlasherLib.cancelSlashing(CoreLib.Storage,SlasherLib.QueuedSlashing) (src/entities/SlasherLib.sol#153-168) ignores return value by HookLib.callHookIfInterfaceImplemented({dss:dss,data:abi.encodeWithSelector(dss.cancelSlashingHook.selector,queuedSlashing.operator),interfaceId:dss.cancelSlashingHook.selector,ignoreFailure:true,hookCallGasLimit:self.hookCallGasLimit,supportsInterfaceGasLimit:self.supportsInterfaceGasLimit,hookGasBuffer:self.hookGasBuffer}) (src/entities/SlasherLib.sol#159-167)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return

INFO:Detectors:
ICore.requestSlashing(SlasherLib.SlashRequest).requestSlashing (src/interfaces/ICore.sol#34) shadows:
	- ICore.requestSlashing(SlasherLib.SlashRequest) (src/interfaces/ICore.sol#34-36) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing

INFO:Detectors:
NativeNode.initialize(address,address)._nodeOwner (src/NativeNode.sol#28) lacks a zero-check on :
		- nodeOwner = _nodeOwner (src/NativeNode.sol#32)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation

INFO:Detectors:
CoreLib.createVault(CoreLib.Storage,address,address,string,string,bytes,address) (src/entities/CoreLib.sol#89-116) has external calls inside a loop: vault.initialize(address(this),operator,depositToken,name,symbol,extraData) (src/entities/CoreLib.sol#107)
SlasherLib.finalizeSlashing(CoreLib.Storage,SlasherLib.QueuedSlashing) (src/entities/SlasherLib.sol#126-151) has external calls inside a loop: IKarakBaseVault(queuedSlashing.vaults[i]).slashAssets(queuedSlashing.earmarkedStakes[i],self.assetSlashingHandlers[IKarakBaseVault(queuedSlashing.vaults[i]).asset()]) (src/entities/SlasherLib.sol#135-138)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation/#calls-inside-a-loop

INFO:Detectors:
Reentrancy in CoreLib.createVault(CoreLib.Storage,address,address,string,string,bytes,address) (src/entities/CoreLib.sol#89-116):
	External calls:
	- vault.initialize(address(this),operator,depositToken,name,symbol,extraData) (src/entities/CoreLib.sol#107)
	Event emitted after the call(s):
	- NewVault(address(vault),implementation) (src/entities/CoreLib.sol#114)
Reentrancy in NativeVaultLib.deployNode(NativeVaultLib.Storage,VaultLib.Config,address) (src/entities/NativeVaultLib.sol#93-104):
	External calls:
	- newNode.initialize(address(this),owner) (src/entities/NativeVaultLib.sol#100)
	Event emitted after the call(s):
	- NodeDeployed(msg.sender,address(newNode),self.nodeImpl) (src/entities/NativeVaultLib.sol#102)
Reentrancy in CoreLib.deployVaults(CoreLib.Storage,address,address,VaultLib.Config[]) (src/entities/CoreLib.sol#118-147):
	External calls:
	- vault = createVault(self,operator,vaultConfigs[i].asset,vaultConfigs[i].name,vaultConfigs[i].symbol,vaultConfigs[i].extraData,implementation) (src/entities/CoreLib.sol#133-141)
		- vault.initialize(address(this),operator,depositToken,name,symbol,extraData) (src/entities/CoreLib.sol#107)
	Event emitted after the call(s):
	- DeployedVault(operator,address(vault),vaultConfigs[i].asset) (src/entities/CoreLib.sol#144)
Reentrancy in Vault.slashAssets(uint256,address) (src/Vault.sol#193-205):
	External calls:
	- ISlashingHandler(slashingHandler).handleSlashing(IERC20(asset()),transferAmount) (src/Vault.sol#202)
	Event emitted after the call(s):
	- Slashed(transferAmount) (src/Vault.sol#204)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3

INFO:Detectors:
NativeVault.validateWithdrawalCredentials(address,BeaconProofs.BeaconStateRootProof,BeaconProofs.ValidatorFieldsProof[]) (src/NativeVault.sol#168-204) uses timestamp for comparisons
	Dangerous comparisons:
	- beaconStateRootProof.timestamp == block.timestamp (src/NativeVault.sol#181)
NativeVault.validateExpiredSnapshot(address) (src/NativeVault.sol#210-223) uses timestamp for comparisons
	Dangerous comparisons:
	- node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY > block.timestamp (src/NativeVault.sol#218)
NativeVault.startWithdrawal(address,uint256) (src/NativeVault.sol#228-258) uses timestamp for comparisons
	Dangerous comparisons:
	- block.timestamp >= node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY (src/NativeVault.sol#243)
NativeVault.finishWithdrawal(bytes32) (src/NativeVault.sol#262-294) uses timestamp for comparisons
	Dangerous comparisons:
	- startedWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp (src/NativeVault.sol#272)
NativeVault._getParentBlockRoot(uint64) (src/NativeVault.sol#411-419) uses timestamp for comparisons
	Dangerous comparisons:
	- success && result.length > 0 (src/NativeVault.sol#414)
NativeVault._updateSnapshot(NativeVaultLib.NativeNode,NativeVaultLib.Snapshot,address) (src/NativeVault.sol#472-491) uses timestamp for comparisons
	Dangerous comparisons:
	- snapshot.remainingProofs == 0 (src/NativeVault.sol#477)
NativeVault._increaseBalance(address,uint256) (src/NativeVault.sol#493-501) uses timestamp for comparisons
	Dangerous comparisons:
	- assets + self.totalAssets > maxDeposit(_of) (src/NativeVault.sol#495)
NativeVault._updateBalance(address,int256) (src/NativeVault.sol#513-521) uses timestamp for comparisons
	Dangerous comparisons:
	- assets > 0 (src/NativeVault.sol#514)
	- assets < 0 (src/NativeVault.sol#516)
Operator.validateQueuedStakeUpdate(Operator.State,Operator.QueuedStakeUpdate) (src/entities/Operator.sol#89-101) uses timestamp for comparisons
	Dangerous comparisons:
	- queuedStakeUpdate.startTimestamp + Constants.MIN_STAKE_UPDATE_DELAY > block.timestamp (src/entities/Operator.sol#93)
	- calculateRoot(queuedStakeUpdate) != operatorState.pendingStakeUpdates[queuedStakeUpdate.updateRequest.vault] (src/entities/Operator.sol#97)
SlasherLib.validateRequestSlashingParams(CoreLib.Storage,SlasherLib.SlashRequest,IDSS) (src/entities/SlasherLib.sol#59-77) uses timestamp for comparisons
	Dangerous comparisons:
	- block.timestamp < self.operatorState[slashingRequest.operator].nextSlashableTimestamp[dss] (src/entities/SlasherLib.sol#64)
SlasherLib.finalizeSlashing(CoreLib.Storage,SlasherLib.QueuedSlashing) (src/entities/SlasherLib.sol#126-151) uses timestamp for comparisons
	Dangerous comparisons:
	- queuedSlashing.timestamp + Constants.SLASHING_VETO_WINDOW > block.timestamp (src/entities/SlasherLib.sol#129)
VaultLib.validateQueuedWithdrawal(VaultLib.State,bytes32) (src/entities/VaultLib.sol#24-38) uses timestamp for comparisons
	Dangerous comparisons:
	- qdWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp (src/entities/VaultLib.sol#35)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp

INFO:Detectors:
Core._self() (src/Core.sol#383-387) uses assembly
	- INLINE ASM (src/Core.sol#384-386)
NativeVault._state() (src/NativeVault.sol#399-403) uses assembly
	- INLINE ASM (src/NativeVault.sol#400-402)
NativeVault._config() (src/NativeVault.sol#405-409) uses assembly
	- INLINE ASM (src/NativeVault.sol#406-408)
SlashingHandler._config() (src/SlashingHandler.sol#51-55) uses assembly
	- INLINE ASM (src/SlashingHandler.sol#52-54)
Vault._state() (src/Vault.sol#281-285) uses assembly
	- INLINE ASM (src/Vault.sol#282-284)
Vault._config() (src/Vault.sol#287-291) uses assembly
	- INLINE ASM (src/Vault.sol#288-290)
Vault._storage() (src/Vault.sol#293-298) uses assembly
	- INLINE ASM (src/Vault.sol#294-297)
HookLib.performLowLevelCallAndLimitReturnData(address,bytes,uint256) (src/entities/HookLib.sol#16-39) uses assembly
	- INLINE ASM (src/entities/HookLib.sol#22-37)
Merkle.processInclusionProofKeccak(bytes,bytes32,uint256) (src/entities/MerkleProofs.sol#48-75) uses assembly
	- INLINE ASM (src/entities/MerkleProofs.sol#58-63)
	- INLINE ASM (src/entities/MerkleProofs.sol#66-71)
Merkle.processInclusionProofSha256(bytes,bytes32,uint256) (src/entities/MerkleProofs.sol#103-133) uses assembly
	- INLINE ASM (src/entities/MerkleProofs.sol#116-121)
	- INLINE ASM (src/entities/MerkleProofs.sol#124-129)
Pauser._getPauserStorage() (src/entities/Pauser.sol#18-22) uses assembly
	- INLINE ASM (src/entities/Pauser.sol#19-21)
CommonUtils.isSmartContract(address) (src/utils/CommonUtils.sol#48-54) uses assembly
	- INLINE ASM (src/utils/CommonUtils.sol#50-52)
ExtSloads.extSloads(bytes32[]) (src/utils/ExtSloads.sol#9-21) uses assembly
	- INLINE ASM (src/utils/ExtSloads.sol#17-19)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage

INFO:Detectors:
Vault._underlyingDecimals() (src/Vault.sol#300-302) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code

INFO:Detectors:
Version constraint ^0.8.25 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
.
It is used by:
	- ^0.8.25 (src/Core.sol#2)
	- ^0.8.25 (src/NativeNode.sol#2)
	- ^0.8.25 (src/NativeVault.sol#2)
	- ^0.8.25 (src/Querier.sol#2)
	- ^0.8.25 (src/SlashStore.sol#2)
	- ^0.8.25 (src/SlashingHandler.sol#2)
	- ^0.8.25 (src/Vault.sol#2)
	- ^0.8.25 (src/entities/BeaconProofsLib.sol#2)
	- ^0.8.25 (src/entities/CoreLib.sol#2)
	- ^0.8.25 (src/entities/CoreStorageSlots.sol#2)
	- ^0.8.25 (src/entities/HookLib.sol#2)
	- ^0.8.25 (src/entities/NativeVaultLib.sol#2)
	- ^0.8.25 (src/entities/Operator.sol#2)
	- ^0.8.25 (src/entities/SlasherLib.sol#2)
	- ^0.8.25 (src/entities/VaultLib.sol#2)
	- ^0.8.25 (src/entities/Withdraw.sol#2)
	- ^0.8.25 (src/interfaces/Constants.sol#2)
	- ^0.8.25 (src/interfaces/Errors.sol#2)
	- ^0.8.25 (src/interfaces/Events.sol#2)
	- ^0.8.25 (src/interfaces/ICore.sol#2)
	- ^0.8.25 (src/interfaces/IDSS.sol#2)
	- ^0.8.25 (src/interfaces/IKarakBaseVault.sol#2)
	- ^0.8.25 (src/interfaces/INativeNode.sol#2)
	- ^0.8.25 (src/interfaces/INativeVault.sol#2)
	- ^0.8.25 (src/interfaces/ISlashingHandler.sol#2)
	- ^0.8.25 (src/interfaces/IVault.sol#2)
	- ^0.8.25 (src/utils/ExtSloads.sol#2)
Version constraint ^0.8.0 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- DataLocationChangeInInternalOverride
	- NestedCalldataArrayAbiReencodingSizeValidation
	- SignedImmutables
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching.
It is used by:
	- ^0.8.0 (src/entities/MerkleProofs.sol#4)
Version constraint ^0.8.21 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication.
It is used by:
	- ^0.8.21 (src/entities/Pauser.sol#3)
	- ^0.8.21 (src/utils/CommonUtils.sol#2)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity

INFO:Detectors:
Low level call in NativeVault._getParentBlockRoot(uint64) (src/NativeVault.sol#411-419):
	- (success,result) = Constants.BEACON_ROOTS_ADDRESS.staticcall(abi.encode(timestamp)) (src/NativeVault.sol#412)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls

INFO:Detectors:
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._vaultImpl (src/Core.sol#54) is not in mixedCase
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._manager (src/Core.sol#55) is not in mixedCase
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._vetoCommittee (src/Core.sol#56) is not in mixedCase
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._hookCallGasLimit (src/Core.sol#57) is not in mixedCase
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._supportsInterfaceGasLimit (src/Core.sol#58) is not in mixedCase
Parameter Core.initialize(address,address,address,uint32,uint32,uint32)._hookGasBuffer (src/Core.sol#59) is not in mixedCase
Parameter Core.setGasValues(uint32,uint32,uint32)._hookCallGasLimit (src/Core.sol#274) is not in mixedCase
Parameter Core.setGasValues(uint32,uint32,uint32)._hookGasBuffer (src/Core.sol#274) is not in mixedCase
Parameter Core.setGasValues(uint32,uint32,uint32)._supportsInterfaceGasLimit (src/Core.sol#274) is not in mixedCase
Parameter NativeNode.initialize(address,address)._owner (src/NativeNode.sol#28) is not in mixedCase
Parameter NativeNode.initialize(address,address)._nodeOwner (src/NativeNode.sol#28) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._owner (src/NativeVault.sol#47) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._operator (src/NativeVault.sol#48) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._depositToken (src/NativeVault.sol#49) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._name (src/NativeVault.sol#50) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._symbol (src/NativeVault.sol#51) is not in mixedCase
Parameter NativeVault.initialize(address,address,address,string,string,bytes)._extraData (src/NativeVault.sol#52) is not in mixedCase
Parameter SlashStore.initialize(address)._owner (src/SlashStore.sol#20) is not in mixedCase
Parameter SlashingHandler.initialize(address,IERC20[])._supportedAssets (src/SlashingHandler.sol#30) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._owner (src/Vault.sol#52) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._operator (src/Vault.sol#53) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._depositToken (src/Vault.sol#54) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._name (src/Vault.sol#55) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._symbol (src/Vault.sol#56) is not in mixedCase
Parameter Vault.initialize(address,address,address,string,string,bytes)._extraData (src/Vault.sol#57) is not in mixedCase
Parameter Vault.isWithdrawalPending(address,uint256)._withdrawNonce (src/Vault.sol#241) is not in mixedCase
Parameter Vault.getQueuedWithdrawal(address,uint256)._withdrawNonce (src/Vault.sol#245) is not in mixedCase
Parameter CoreLib.init(CoreLib.Storage,address,address,uint32,uint32,uint32)._vaultImpl (src/entities/CoreLib.sol#42) is not in mixedCase
Parameter CoreLib.init(CoreLib.Storage,address,address,uint32,uint32,uint32)._vetoCommittee (src/entities/CoreLib.sol#43) is not in mixedCase
Parameter CoreLib.init(CoreLib.Storage,address,address,uint32,uint32,uint32)._hookCallGasLimit (src/entities/CoreLib.sol#44) is not in mixedCase
Parameter CoreLib.init(CoreLib.Storage,address,address,uint32,uint32,uint32)._supportsInterfaceGasLimit (src/entities/CoreLib.sol#45) is not in mixedCase
Parameter CoreLib.init(CoreLib.Storage,address,address,uint32,uint32,uint32)._hookGasBuffer (src/entities/CoreLib.sol#46) is not in mixedCase
Parameter CoreLib.updateGasValues(CoreLib.Storage,uint32,uint32,uint32)._hookCallGasLimit (src/entities/CoreLib.sol#58) is not in mixedCase
Parameter CoreLib.updateGasValues(CoreLib.Storage,uint32,uint32,uint32)._supportsInterfaceGasLimit (src/entities/CoreLib.sol#59) is not in mixedCase
Parameter CoreLib.updateGasValues(CoreLib.Storage,uint32,uint32,uint32)._hookGasBuffer (src/entities/CoreLib.sol#60) is not in mixedCase
Function Pauser.__Pauser_init() (src/entities/Pauser.sol#36-38) is not in mixedCase
Function Pauser.__Pauser_init_unchained() (src/entities/Pauser.sol#40-42) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions

INFO:Detectors:
BeaconProofs.fromLittleEndianUint64(bytes32) (src/entities/BeaconProofsLib.sol#54-59) uses literals with too many digits:
	- (n >> 56) | ((0x00FF000000000000 & n) >> 40) | ((0x0000FF0000000000 & n) >> 24) | ((0x000000FF00000000 & n) >> 8) | ((0x00000000FF000000 & n) << 8) | ((0x0000000000FF0000 & n) << 24) | ((0x000000000000FF00 & n) << 40) | ((0x00000000000000FF & n) << 56) (src/entities/BeaconProofsLib.sol#56-58)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#too-many-digits

INFO:Detectors:
Vault (src/Vault.sol#29-346) does not implement functions:
	- IVault.deposit(uint256,address) (src/interfaces/IVault.sol#9)
	- IVault.extSloads(bytes32[]) (src/interfaces/IVault.sol#24)
	- IVault.mint(uint256,address) (src/interfaces/IVault.sol#11)
	- IVault.owner() (src/interfaces/IVault.sol#17)
	- IKarakBaseVault.totalAssets() (src/interfaces/IKarakBaseVault.sol#27)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unimplemented-functions

INFO:Detectors:
The following unused import(s) in src/entities/CoreLib.sol should be removed:
	-import {Create2} from "@openzeppelin/contracts/utils/Create2.sol"; (src/entities/CoreLib.sol#4)
The following unused import(s) in src/interfaces/ICore.sol should be removed:
	-import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol"; (src/interfaces/ICore.sol#4)
The following unused import(s) in src/NativeNode.sol should be removed:
	-import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol"; (src/NativeNode.sol#8)

	-import "./interfaces/Errors.sol"; (src/NativeNode.sol#13)
The following unused import(s) in src/NativeVault.sol should be removed:
	-import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol"; (src/NativeVault.sol#11)

	-import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol"; (src/NativeVault.sol#7)
The following unused import(s) in src/entities/NativeVaultLib.sol should be removed:
	-import "../interfaces/Constants.sol"; (src/entities/NativeVaultLib.sol#9)
The following unused import(s) in src/Querier.sol should be removed:
	-import {Ownable} from "solady/src/auth/Ownable.sol"; (src/Querier.sol#4)
The following unused import(s) in src/entities/HookLib.sol should be removed:
	-import {Constants} from "../interfaces/Constants.sol"; (src/entities/HookLib.sol#4)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-imports

INFO:Detectors:
Querier.core (src/Querier.sol#11) should be immutable 
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#state-variables-that-could-be-declared-immutable
INFO:Slither:. analyzed (46 contracts with 94 detectors), 102 result(s) found
