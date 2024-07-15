# Report

- [Report](#report)
  - [Gas Optimizations](#gas-optimizations)
    - [\[GAS-1\] Don't use `_msgSender()` if not supporting EIP-2771](#gas-1-dont-use-_msgsender-if-not-supporting-eip-2771)
    - [\[GAS-2\] `a = a + b` is more gas effective than `a += b` for state variables (excluding arrays and mappings)](#gas-2-a--a--b-is-more-gas-effective-than-a--b-for-state-variables-excluding-arrays-and-mappings)
    - [\[GAS-3\] Use assembly to check for `address(0)`](#gas-3-use-assembly-to-check-for-address0)
    - [\[GAS-4\] Using bools for storage incurs overhead](#gas-4-using-bools-for-storage-incurs-overhead)
    - [\[GAS-5\] Cache array length outside of loop](#gas-5-cache-array-length-outside-of-loop)
    - [\[GAS-6\] Use calldata instead of memory for function arguments that do not get mutated](#gas-6-use-calldata-instead-of-memory-for-function-arguments-that-do-not-get-mutated)
    - [\[GAS-7\] For Operations that will not overflow, you could use unchecked](#gas-7-for-operations-that-will-not-overflow-you-could-use-unchecked)
    - [\[GAS-8\] Use Custom Errors instead of Revert Strings to save Gas](#gas-8-use-custom-errors-instead-of-revert-strings-to-save-gas)
    - [\[GAS-9\] State variables only set in the constructor should be declared `immutable`](#gas-9-state-variables-only-set-in-the-constructor-should-be-declared-immutable)
    - [\[GAS-10\] Functions guaranteed to revert when called by normal users can be marked `payable`](#gas-10-functions-guaranteed-to-revert-when-called-by-normal-users-can-be-marked-payable)
    - [\[GAS-11\] `++i` costs less gas compared to `i++` or `i += 1` (same for `--i` vs `i--` or `i -= 1`)](#gas-11-i-costs-less-gas-compared-to-i-or-i--1-same-for---i-vs-i---or-i---1)
    - [\[GAS-12\] Using `private` rather than `public` for constants, saves gas](#gas-12-using-private-rather-than-public-for-constants-saves-gas)
    - [\[GAS-13\] Use shift right/left instead of division/multiplication if possible](#gas-13-use-shift-rightleft-instead-of-divisionmultiplication-if-possible)
    - [\[GAS-14\] Superfluous event fields](#gas-14-superfluous-event-fields)
    - [\[GAS-15\] Use of `this` instead of marking as `public` an `external` function](#gas-15-use-of-this-instead-of-marking-as-public-an-external-function)
    - [\[GAS-16\] Increments/decrements can be unchecked in for-loops](#gas-16-incrementsdecrements-can-be-unchecked-in-for-loops)
    - [\[GAS-17\] Use != 0 instead of \> 0 for unsigned integer comparison](#gas-17-use--0-instead-of--0-for-unsigned-integer-comparison)
    - [\[GAS-18\] `internal` functions not called by the contract should be removed](#gas-18-internal-functions-not-called-by-the-contract-should-be-removed)
  - [Non Critical Issues](#non-critical-issues)
    - [\[NC-1\] Replace `abi.encodeWithSignature` and `abi.encodeWithSelector` with `abi.encodeCall` which keeps the code typo/type safe](#nc-1-replace-abiencodewithsignature-and-abiencodewithselector-with-abiencodecall-which-keeps-the-code-typotype-safe)
    - [\[NC-2\] Missing checks for `address(0)` when assigning values to address state variables](#nc-2-missing-checks-for-address0-when-assigning-values-to-address-state-variables)
    - [\[NC-3\] Array indices should be referenced via `enum`s rather than via numeric literals](#nc-3-array-indices-should-be-referenced-via-enums-rather-than-via-numeric-literals)
    - [\[NC-4\] Use `string.concat()` or `bytes.concat()` instead of `abi.encodePacked`](#nc-4-use-stringconcat-or-bytesconcat-instead-of-abiencodepacked)
    - [\[NC-5\] `constant`s should be defined rather than using magic numbers](#nc-5-constants-should-be-defined-rather-than-using-magic-numbers)
    - [\[NC-6\] Control structures do not follow the Solidity Style Guide](#nc-6-control-structures-do-not-follow-the-solidity-style-guide)
    - [\[NC-7\] Default Visibility for constants](#nc-7-default-visibility-for-constants)
    - [\[NC-8\] Consider disabling `renounceOwnership()`](#nc-8-consider-disabling-renounceownership)
    - [\[NC-9\] Events should use parameters to convey information](#nc-9-events-should-use-parameters-to-convey-information)
    - [\[NC-10\] Event missing indexed field](#nc-10-event-missing-indexed-field)
    - [\[NC-11\] Function ordering does not follow the Solidity style guide](#nc-11-function-ordering-does-not-follow-the-solidity-style-guide)
    - [\[NC-12\] Functions should not be longer than 50 lines](#nc-12-functions-should-not-be-longer-than-50-lines)
    - [\[NC-13\] Change int to int256](#nc-13-change-int-to-int256)
    - [\[NC-14\] Lack of checks in setters](#nc-14-lack-of-checks-in-setters)
    - [\[NC-15\] Missing Event for critical parameters change](#nc-15-missing-event-for-critical-parameters-change)
    - [\[NC-16\] NatSpec is completely non-existent on functions that should have them](#nc-16-natspec-is-completely-non-existent-on-functions-that-should-have-them)
    - [\[NC-17\] Incomplete NatSpec: `@param` is missing on actually documented functions](#nc-17-incomplete-natspec-param-is-missing-on-actually-documented-functions)
    - [\[NC-18\] Incomplete NatSpec: `@return` is missing on actually documented functions](#nc-18-incomplete-natspec-return-is-missing-on-actually-documented-functions)
    - [\[NC-19\] Use a `modifier` instead of a `require/if` statement for a special `msg.sender` actor](#nc-19-use-a-modifier-instead-of-a-requireif-statement-for-a-special-msgsender-actor)
    - [\[NC-20\] Constant state variables defined more than once](#nc-20-constant-state-variables-defined-more-than-once)
    - [\[NC-21\] Consider using named mappings](#nc-21-consider-using-named-mappings)
    - [\[NC-22\] `address`s shouldn't be hard-coded](#nc-22-addresss-shouldnt-be-hard-coded)
    - [\[NC-23\] Numeric values having to do with time should use time units for readability](#nc-23-numeric-values-having-to-do-with-time-should-use-time-units-for-readability)
    - [\[NC-24\] Owner can renounce while system is paused](#nc-24-owner-can-renounce-while-system-is-paused)
    - [\[NC-25\] Adding a `return` statement when the function defines a named return variable, is redundant](#nc-25-adding-a-return-statement-when-the-function-defines-a-named-return-variable-is-redundant)
    - [\[NC-26\] Take advantage of Custom Error's return value property](#nc-26-take-advantage-of-custom-errors-return-value-property)
    - [\[NC-27\] Contract does not follow the Solidity style guide's suggested layout ordering](#nc-27-contract-does-not-follow-the-solidity-style-guides-suggested-layout-ordering)
    - [\[NC-28\] Use Underscores for Number Literals (add an underscore every 3 digits)](#nc-28-use-underscores-for-number-literals-add-an-underscore-every-3-digits)
    - [\[NC-29\] Internal and private variables and functions names should begin with an underscore](#nc-29-internal-and-private-variables-and-functions-names-should-begin-with-an-underscore)
    - [\[NC-30\] Event is missing `indexed` fields](#nc-30-event-is-missing-indexed-fields)
    - [\[NC-31\] `public` functions not called by the contract should be declared `external` instead](#nc-31-public-functions-not-called-by-the-contract-should-be-declared-external-instead)
    - [\[NC-32\] Variables need not be initialized to zero](#nc-32-variables-need-not-be-initialized-to-zero)
  - [Low Issues](#low-issues)
    - [\[L-1\] Use a 2-step ownership transfer pattern](#l-1-use-a-2-step-ownership-transfer-pattern)
    - [\[L-2\] Some tokens may revert when zero value transfers are made](#l-2-some-tokens-may-revert-when-zero-value-transfers-are-made)
    - [\[L-3\] Missing checks for `address(0)` when assigning values to address state variables](#l-3-missing-checks-for-address0-when-assigning-values-to-address-state-variables)
    - [\[L-4\] Duplicate import statements](#l-4-duplicate-import-statements)
    - [\[L-5\] External calls in an un-bounded `for-`loop may result in a DOS](#l-5-external-calls-in-an-un-bounded-for-loop-may-result-in-a-dos)
    - [\[L-6\] External call recipient may consume all transaction gas](#l-6-external-call-recipient-may-consume-all-transaction-gas)
    - [\[L-7\] Initializers could be front-run](#l-7-initializers-could-be-front-run)
    - [\[L-8\] Signature use at deadlines should be allowed](#l-8-signature-use-at-deadlines-should-be-allowed)
    - [\[L-9\] Prevent accidentally burning tokens](#l-9-prevent-accidentally-burning-tokens)
    - [\[L-10\] Owner can renounce while system is paused](#l-10-owner-can-renounce-while-system-is-paused)
    - [\[L-11\] Solidity version 0.8.20+ may not work on other chains due to `PUSH0`](#l-11-solidity-version-0820-may-not-work-on-other-chains-due-to-push0)
    - [\[L-12\] Use `Ownable2Step.transferOwnership` instead of `Ownable.transferOwnership`](#l-12-use-ownable2steptransferownership-instead-of-ownabletransferownership)
    - [\[L-13\] File allows a version of solidity that is susceptible to an assembly optimizer bug](#l-13-file-allows-a-version-of-solidity-that-is-susceptible-to-an-assembly-optimizer-bug)
    - [\[L-14\] Unsafe ERC20 operation(s)](#l-14-unsafe-erc20-operations)
    - [\[L-15\] Upgradeable contract is missing a `__gap[50]` storage variable to allow for new storage variables in later versions](#l-15-upgradeable-contract-is-missing-a-__gap50-storage-variable-to-allow-for-new-storage-variables-in-later-versions)
    - [\[L-16\] Upgradeable contract not initialized](#l-16-upgradeable-contract-not-initialized)
  - [Medium Issues](#medium-issues)
    - [\[M-1\] Contracts are vulnerable to fee-on-transfer accounting-related issues](#m-1-contracts-are-vulnerable-to-fee-on-transfer-accounting-related-issues)
    - [\[M-2\] Centralization Risk for trusted owners](#m-2-centralization-risk-for-trusted-owners)
      - [Impact](#impact)
    - [\[M-3\] Lack of EIP-712 compliance: using `keccak256()` directly on an array or struct variable](#m-3-lack-of-eip-712-compliance-using-keccak256-directly-on-an-array-or-struct-variable)
    - [\[M-4\] Library function isn't `internal` or `private`](#m-4-library-function-isnt-internal-or-private)

## Gas Optimizations

| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Don't use `_msgSender()` if not supporting EIP-2771 | 2 |
| [GAS-2](#GAS-2) | `a = a + b` is more gas effective than `a += b` for state variables (excluding arrays and mappings) | 8 |
| [GAS-3](#GAS-3) | Use assembly to check for `address(0)` | 17 |
| [GAS-4](#GAS-4) | Using bools for storage incurs overhead | 3 |
| [GAS-5](#GAS-5) | Cache array length outside of loop | 16 |
| [GAS-6](#GAS-6) | Use calldata instead of memory for function arguments that do not get mutated | 36 |
| [GAS-7](#GAS-7) | For Operations that will not overflow, you could use unchecked | 232 |
| [GAS-8](#GAS-8) | Use Custom Errors instead of Revert Strings to save Gas | 1 |
| [GAS-9](#GAS-9) | State variables only set in the constructor should be declared `immutable` | 1 |
| [GAS-10](#GAS-10) | Functions guaranteed to revert when called by normal users can be marked `payable` | 19 |
| [GAS-11](#GAS-11) | `++i` costs less gas compared to `i++` or `i += 1` (same for `--i` vs `i--` or `i -= 1`) | 21 |
| [GAS-12](#GAS-12) | Using `private` rather than `public` for constants, saves gas | 20 |
| [GAS-13](#GAS-13) | Use shift right/left instead of division/multiplication if possible | 5 |
| [GAS-14](#GAS-14) | Superfluous event fields | 5 |
| [GAS-15](#GAS-15) | Use of `this` instead of marking as `public` an `external` function | 1 |
| [GAS-16](#GAS-16) | Increments/decrements can be unchecked in for-loops | 17 |
| [GAS-17](#GAS-17) | Use != 0 instead of > 0 for unsigned integer comparison | 5 |
| [GAS-18](#GAS-18) | `internal` functions not called by the contract should be removed | 23 |

### <a name="GAS-1"></a>[GAS-1] Don't use `_msgSender()` if not supporting EIP-2771

Use `msg.sender` if the code does not implement [EIP-2771 trusted forwarder](https://eips.ethereum.org/EIPS/eip-2771) support

*Instances (2)*:

```solidity
File: src/entities/Pauser.sol

71:         emit Paused(_msgSender(), map);

78:         emit Unpaused(_msgSender(), map);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

### <a name="GAS-2"></a>[GAS-2] `a = a + b` is more gas effective than `a += b` for state variables (excluding arrays and mappings)

This saves **16 gas per instance.**

*Instances (8)*:

```solidity
File: src/NativeVault.sol

158:             snapshot.balanceDeltaWei += balanceDeltaWei;

195:             totalRestakedWei += self.validateWithdrawalCredentials(

241:         self.nodeOwnerToWithdrawAmount[msg.sender] += weiAmount;

480:             node.withdrawableCreditedNodeETH += snapshot.nodeBalanceWei;

498:         self.totalAssets += assets;

499:         self.ownerToNode[_of].totalRestakedETH += assets;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/entities/MerkleProofs.sol

55:         for (uint256 i = 32; i <= proof.length; i += 32) {

113:         for (uint256 i = 32; i <= proof.length; i += 32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

### <a name="GAS-3"></a>[GAS-3] Use assembly to check for `address(0)`

*Saves 6 gas per instance*

*Instances (17)*:

```solidity
File: src/Core.sol

174:         if (newVaultImpl == address(0)) revert ZeroAddress();

188:         if (self.vaultToImplMap[vault] == address(0)) revert VaultNotAChildVault();

212:         if (vaultImpl == address(0)) revert ZeroAddress();

289:         return _self().assetSlashingHandlers[asset] != address(0);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

62:         if (manager == address(0) || slashStore == address(0) || nodeImplementation == address(0)) revert ZeroAddress();

88:         if (newNodeImplementation == address(0)) revert ZeroAddress();

526:         if (_state().ownerToNode[owner].nodeAddress == address(0)) revert NotNodeOwner();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

35:             if (results[i] != bytes32(0)) count++;

40:             if (results[i] != bytes32(0)) vaults[latestIndex++] = stakedVaults[i];

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/Vault.sol

132:         if (beneficiary == address(0)) revert ZeroAddress();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

48:         if (_vaultImpl == address(0) || _vetoCommittee == address(0)) {

72:             if (slashingHandlers[i] == address(0) || assets[i] == address(0)) revert ZeroAddress();

81:         if (!(implementation == address(0) || isVaultImplAllowlisted(self, implementation))) {

85:             if (self.assetSlashingHandlers[vaultConfigs[i].asset] == address(0)) revert AssetNotAllowlisted();

127:         if (implementation == address(0)) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/HookLib.sol

97:         if (!success || result == bytes32(0)) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/Operator.sol

57:         if (operatorState.pendingStakeUpdates[stakeUpdate.vault] != bytes32(0)) revert PendingStakeUpdateRequest();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

### <a name="GAS-4"></a>[GAS-4] Using bools for storage incurs overhead

Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (3)*:

```solidity
File: src/SlashingHandler.sol

23:         mapping(IERC20 asset => bool) supportedAssets;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/entities/CoreLib.sol

25:         mapping(address implementation => bool) allowlistedVaultImpl;

29:         mapping(bytes32 slashRoot => bool) slashingRequests;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

### <a name="GAS-5"></a>[GAS-5] Cache array length outside of loop

If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (16)*:

```solidity
File: src/NativeVault.sol

144:         for (uint256 i = 0; i < balanceProofs.length; i++) {

194:         for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

29:         for (uint256 i = 0; i < stakedVaults.length; i++) {

34:         for (uint256 i = 0; i < results.length; i++) {

39:         for (uint256 i = 0; i < results.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

33:         for (uint256 i = 0; i < _supportedAssets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/entities/CoreLib.sol

71:         for (uint256 i = 0; i < assets.length; i++) {

84:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

132:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

55:         for (uint256 i = 32; i <= proof.length; i += 32) {

113:         for (uint256 i = 32; i <= proof.length; i += 32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/Operator.sol

232:         for (uint256 i = 0; i < dssAddresses.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

50:         for (uint256 i = 0; i < slashingRequest.vaults.length; i++) {

85:         for (uint256 i = 0; i < slashingMetadata.vaults.length; ++i) {

134:         for (uint256 i = 0; i < queuedSlashing.vaults.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

42:         for (uint256 i = 0; i < arr.length - 1; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="GAS-6"></a>[GAS-6] Use calldata instead of memory for function arguments that do not get mutated

When a function with a `memory` array is called externally, the `abi.decode()` step has to use a for-loop to copy each index of the `calldata` to the `memory` index. Each iteration of this for-loop costs at least 60 gas (i.e. `60 * <mem_array>.length`). Using `calldata` directly bypasses this loop.

If the array is passed to an `internal` function which passes the array to another internal function where the array is modified and therefore `memory` is used in the `external` call, it's still more gas-efficient to use `calldata` when the `external` function uses modifiers, since the modifiers may prevent the internal functions from being called. Structs have the same overhead as an array of length one.

 *Saves 60 gas per instance*

*Instances (36)*:

```solidity
File: src/Core.sol

85:     function allowlistAssets(address[] memory assets, address[] memory slashingHandlers)

97:     function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData)

113:     function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistrationHookData)

130:     function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory vaultStakeUpdateRequest)

146:     function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory queuedStake)

235:     function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)

248:     function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

50:         string memory _name,

51:         string memory _symbol,

52:         bytes memory _extraData

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

55:         string memory _name,

56:         string memory _symbol,

57:         bytes memory _extraData

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

67:     function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/Operator.sol

63:         StakeUpdateRequest memory requestStakeUpdate,

111:     function validateAndUpdateVaultStakeInDSS(CoreLib.Storage storage self, QueuedStakeUpdate memory queuedStakeUpdate)

154:         bytes memory registrationHookData

185:         bytes memory unregistrationHookData

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

97:         SlashRequest memory slashingMetadata,

126:     function finalizeSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

153:     function cancelSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/interfaces/ICore.sol

25:     function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData) external;

26:     function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistationHookData) external;

27:     function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory newStake)

30:     function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory newQueuedStake) external;

34:     function requestSlashing(SlasherLib.SlashRequest memory requestSlashing)

37:     function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;

38:     function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ICore.sol)

```solidity
File: src/interfaces/IDSS.sol

10:     function registrationHook(address operator, bytes memory extraData) external;

11:     function unregistrationHook(address operator, bytes memory extraData) external;

13:     function requestUpdateStakeHook(address operator, Operator.StakeUpdateRequest memory newStake) external;

16:     function requestSlashingHook(address operator, uint256[] memory slashingPercentagesWad) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IDSS.sol)

```solidity
File: src/interfaces/IKarakBaseVault.sol

12:         string memory _name,

13:         string memory _symbol,

14:         bytes memory _extraData

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IKarakBaseVault.sol)

```solidity
File: src/utils/CommonUtils.sol

39:     function hasDuplicates(address[] memory arr) external pure returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="GAS-7"></a>[GAS-7] For Operations that will not overflow, you could use unchecked

*Instances (232)*:

```solidity
File: src/Core.sol

4: import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";

5: import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

7: import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

10: import {Pauser} from "./entities/Pauser.sol";

11: import {CoreLib} from "./entities/CoreLib.sol";

12: import {VaultLib} from "./entities/VaultLib.sol";

13: import {Operator} from "./entities/Operator.sol";

14: import {ExtSloads} from "./utils/ExtSloads.sol";

15: import {CommonUtils} from "./utils/CommonUtils.sol";

17: import {ICore, SlasherLib} from "./interfaces/ICore.sol";

18: import {Constants} from "./interfaces/Constants.sol";

19: import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";

20: import {IDSS} from "./interfaces/IDSS.sol";

22: import "./interfaces/Errors.sol";

23: import "./interfaces/Events.sol";

24: import "./interfaces/Constants.sol";

139:         updatedStake = self.requestUpdateVaultStakeInDSS(vaultStakeUpdateRequest, self.nonce++, operator);

229:         queuedSlashing = self.requestSlashing(dss, slashingRequest, self.nonce++);

349:         leverage *= Constants.HUNDRED_PERCENT_WAD;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

5: import {Address} from "@openzeppelin/contracts/utils/Address.sol";

6: import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

10: import {Pauser} from "./entities/Pauser.sol";

11: import {INativeNode} from "./interfaces/INativeNode.sol";

13: import "./interfaces/Errors.sol";

14: import "./interfaces/Events.sol";

15: import "./interfaces/Constants.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

4: import {ERC4626, ERC20} from "solady/src/tokens/ERC4626.sol";

5: import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";

6: import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

7: import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";

9: import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

10: import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

13: import {Pauser} from "./entities/Pauser.sol";

14: import {VaultLib} from "./entities/VaultLib.sol";

15: import {INativeNode} from "./interfaces/INativeNode.sol";

16: import {INativeVault} from "./interfaces/INativeVault.sol";

17: import {BeaconProofs} from "./entities/BeaconProofsLib.sol";

18: import {NativeVaultLib} from "./entities/NativeVaultLib.sol";

19: import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";

21: import "./interfaces/Errors.sol";

22: import "./interfaces/Events.sol";

23: import "./interfaces/Constants.sol";

144:         for (uint256 i = 0; i < balanceProofs.length; i++) {

157:             snapshot.remainingProofs--;

158:             snapshot.balanceDeltaWei += balanceDeltaWei;

194:         for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {

195:             totalRestakedWei += self.validateWithdrawalCredentials(

218:         if (node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY > block.timestamp) {

238:         if (weiAmount > withdrawableWei(msg.sender) - self.nodeOwnerToWithdrawAmount[msg.sender]) {

241:         self.nodeOwnerToWithdrawAmount[msg.sender] += weiAmount;

243:         if (block.timestamp >= node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY) {

247:         withdrawalKey = NativeVaultLib.calculateWithdrawKey(msg.sender, self.nodeOwnerToWithdrawNonce[msg.sender]++);

272:         if (startedWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {

275:         self.nodeOwnerToWithdrawAmount[startedWithdrawal.nodeOwner] -= startedWithdrawal.assets;

283:         node.withdrawableCreditedNodeETH -= startedWithdrawal.assets;

315:         self.totalAssets -= totalAssetsToSlash;

426:         uint256 slashedAssets = node.totalRestakedETH - convertToAssets(balanceOf(nodeOwner));

435:         node.totalRestakedETH -= slashedWithdrawable;

455:         uint256 nodeBalanceWei = node.nodeAddress.balance - node.withdrawableCreditedNodeETH;

478:             int256 totalDeltaWei = int256(snapshot.nodeBalanceWei) + snapshot.balanceDeltaWei;

480:             node.withdrawableCreditedNodeETH += snapshot.nodeBalanceWei;

495:         if (assets + self.totalAssets > maxDeposit(_of)) revert DepositMoreThanMax();

498:         self.totalAssets += assets;

499:         self.ownerToNode[_of].totalRestakedETH += assets;

508:         self.totalAssets -= assets;

509:         self.ownerToNode[_of].totalRestakedETH -= assets;

517:             _decreaseBalance(_of, uint256(-assets));

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

6: import "./entities/CoreStorageSlots.sol";

7: import "./Core.sol";

29:         for (uint256 i = 0; i < stakedVaults.length; i++) {

34:         for (uint256 i = 0; i < results.length; i++) {

35:             if (results[i] != bytes32(0)) count++;

39:         for (uint256 i = 0; i < results.length; i++) {

40:             if (results[i] != bytes32(0)) vaults[latestIndex++] = stakedVaults[i];

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashStore.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

5: import {Address} from "@openzeppelin/contracts/utils/Address.sol";

6: import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

10: import "./interfaces/Events.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

5: import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";

6: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

7: import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

9: import "./interfaces/ISlashingHandler.sol";

10: import "./interfaces/Errors.sol";

33:         for (uint256 i = 0; i < _supportedAssets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

5: import {ERC4626, ERC20} from "solady/src/tokens/ERC4626.sol";

6: import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

7: import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";

9: import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

10: import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

13: import {Pauser} from "./entities/Pauser.sol";

14: import {VaultLib} from "./entities/VaultLib.sol";

15: import {WithdrawLib} from "./entities/Withdraw.sol";

17: import {ExtSloads} from "./utils/ExtSloads.sol";

19: import {Constants} from "./interfaces/Constants.sol";

20: import {IVault} from "./interfaces/IVault.sol";

21: import {IKarakBaseVault} from "./interfaces/IKarakBaseVault.sol";

22: import {ISlashingHandler} from "./interfaces/ISlashingHandler.sol";

23: import "./interfaces/Errors.sol";

24: import "./interfaces/Events.sol";

139:         withdrawalKey = WithdrawLib.calculateWithdrawKey(staker, state.stakerToWithdrawNonce[staker]++);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

4: import "../interfaces/Errors.sol";

5: import {Merkle} from "./MerkleProofs.sol";

65:         if (beaconStateRootProof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT)) revert InvalidBeaconStateProof();

82:         uint256 index = (CONTAINER_IDX << (VALIDATOR_HEIGHT + 1)) | uint256(validatorIndex);

85:             validatorProof.length != 32 * ((VALIDATOR_HEIGHT + 1) + BEACON_STATE_HEIGHT)

93:         if (proof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT + BEACON_STATE_HEIGHT)) {

114:         if (proof.proof.length != 32 * (BALANCE_HEIGHT + 1)) revert InvalidBalanceProof();

116:         uint256 balanceIndex = uint256(validatorIndex / 4);

128:         uint256 bitShiftAmount = (validatorIndex % 4) * 64;

129:         return fromLittleEndianUint64(bytes32((uint256(proof.balanceRoot) << bitShiftAmount))) * 1 gwei;

133:         return fromLittleEndianUint64(validatorFields[BALANCE_IDX]) * 1 gwei;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

4: import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

5: import {LibClone} from "solady/src/utils/LibClone.sol";

7: import {Operator} from "./Operator.sol";

8: import {VaultLib} from "./VaultLib.sol";

10: import {IKarakBaseVault} from "../interfaces/IKarakBaseVault.sol";

11: import {IDSS} from "../interfaces/IDSS.sol";

12: import "../interfaces/Constants.sol";

13: import "../interfaces/Errors.sol";

14: import "../interfaces/Events.sol";

71:         for (uint256 i = 0; i < assets.length; i++) {

84:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

99:         bytes32 salt = keccak256(abi.encodePacked(operator, depositToken, self.vaultNonce++));

132:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

16:         return bytes32(CORE_STORAGE_SLOT + OPERATOR_STATE_MAPPING_OFFSET);

24:         return bytes32(uint256(operatorStateSlot(operator)) + PENDING_STAKE_UPDATE_MAPPING_OFFSET);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/HookLib.sol

4: import {Constants} from "../interfaces/Constants.sol";

5: import "@openzeppelin/contracts/interfaces/IERC165.sol";

6: import "../interfaces/Errors.sol";

7: import "../interfaces/Events.sol";

29:                     gasLimit, // gas available to the inner call

30:                     target, // address of contract being called

31:                     0, // ETH (denominated in WEI) being transferred in this call

32:                     add(data, 0x20), // Pointer to actual data (i.e. 32 bytes offset from `data`)

33:                     mload(data), // Size of actual data (i.e. the value stored in the first 32 bytes at `data`)

34:                     returnData, // Free pointer as a buffer for the inner call to write the return value

35:                     32 // 32 bytes size limit for the return value

55:         if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

87:         if (gasleft() < (supportsInterfaceGasLimit * 64 / 63 + hookGasBuffer)) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

55:         for (uint256 i = 32; i <= proof.length; i += 32) {

110:             "Merkle.processInclusionProofSha256: proof length should be a non-zero multiple of 32"

113:         for (uint256 i = 32; i <= proof.length; i += 32) {

143:         uint256 numNodesInLayer = leaves.length / 2;

147:         for (uint256 i = 0; i < numNodesInLayer; i++) {

148:             layer[i] = sha256(abi.encodePacked(leaves[2 * i], leaves[2 * i + 1]));

151:         numNodesInLayer /= 2;

155:             for (uint256 i = 0; i < numNodesInLayer; i++) {

156:                 layer[i] = sha256(abi.encodePacked(layer[2 * i], layer[2 * i + 1]));

159:             numNodesInLayer /= 2;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

4: import {LibClone} from "solady/src/utils/LibClone.sol";

6: import "./VaultLib.sol";

7: import "../interfaces/Errors.sol";

8: import "../interfaces/Events.sol";

9: import "../interfaces/Constants.sol";

10: import "../interfaces/INativeNode.sol";

12: import "../entities/BeaconProofsLib.sol";

128:             self.ownerToNode[nodeOwner].activeValidatorCount--;

140:             balanceDeltaWei = int256(newBalanceWei) - int256(prevBalanceWei);

182:         self.ownerToNode[nodeOwner].activeValidatorCount++;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

4: import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

6: import {CoreLib} from "./CoreLib.sol";

7: import {IKarakBaseVault} from "../interfaces/IKarakBaseVault.sol";

8: import {HookLib} from "./HookLib.sol";

10: import "../interfaces/Errors.sol";

11: import "../interfaces/Constants.sol";

12: import "../interfaces/IDSS.sol";

22:         mapping(IDSS dss => uint256 timestamp) nextSlashableTimestamp; // When this operator can be slashed again by a DSS

23:         mapping(address vault => bytes32 updateHash) pendingStakeUpdates; //Supporting only 1 update per vault at a time

29:         bool toStake; // true for stake, false for unstake

93:         if (queuedStakeUpdate.startTimestamp + Constants.MIN_STAKE_UPDATE_DELAY > block.timestamp) {

198:             ignoreFailure: true, // So it can't prevent the operator from unregistering

232:         for (uint256 i = 0; i < dssAddresses.length; i++) {

233:             if (isVaultStakeToDSS(operatorState, IDSS(dssAddresses[i]), address(vault))) count++;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

5: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

6: import {ContextUpgradeable} from "@openzeppelin-upgradeable/utils/ContextUpgradeable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

4: import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

5: import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

7: import {CoreLib} from "./CoreLib.sol";

8: import {HookLib} from "./HookLib.sol";

9: import {Operator} from "./Operator.sol";

10: import {CommonUtils} from "../utils/CommonUtils.sol";

12: import "../interfaces/Errors.sol";

13: import "../interfaces/Constants.sol";

14: import "../interfaces/IDSS.sol";

15: import "../interfaces/IKarakBaseVault.sol";

16: import "../interfaces/Events.sol";

50:         for (uint256 i = 0; i < slashingRequest.vaults.length; i++) {

85:         for (uint256 i = 0; i < slashingMetadata.vaults.length; ++i) {

112:             block.timestamp + Constants.SLASHING_COOLDOWN;

129:         if (queuedSlashing.timestamp + Constants.SLASHING_VETO_WINDOW > block.timestamp) {

134:         for (uint256 i = 0; i < queuedSlashing.vaults.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

4: import {Constants} from "../interfaces/Constants.sol";

5: import "./Withdraw.sol";

6: import "../interfaces/Errors.sol";

35:         if (qdWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

```solidity
File: src/interfaces/Constants.sol

15:     uint256 public constant MIN_STAKE_UPDATE_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;

16:     uint256 public constant MIN_WITHDRAWAL_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

```solidity
File: src/interfaces/Events.sol

4: import "../entities/Operator.sol";

5: import {SlasherLib} from "../entities/SlasherLib.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

```solidity
File: src/interfaces/ICore.sol

4: import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

6: import {IKarakBaseVault} from "./IKarakBaseVault.sol";

7: import {IDSS} from "./IDSS.sol";

8: import {VaultLib} from "../entities/VaultLib.sol";

9: import {Operator} from "../entities/Operator.sol";

10: import {SlasherLib} from "../entities/SlasherLib.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ICore.sol)

```solidity
File: src/interfaces/IDSS.sol

4: import "@openzeppelin/contracts/interfaces/IERC165.sol";

5: import {Operator} from "../entities/Operator.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IDSS.sol)

```solidity
File: src/interfaces/IKarakBaseVault.sol

4: import {VaultLib} from "../entities/VaultLib.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IKarakBaseVault.sol)

```solidity
File: src/interfaces/INativeVault.sol

4: import {INativeNode} from "./INativeNode.sol";

5: import {IKarakBaseVault} from "./IKarakBaseVault.sol";

6: import {BeaconProofs} from "../entities/BeaconProofsLib.sol";

7: import {NativeVaultLib} from "../entities/NativeVaultLib.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeVault.sol)

```solidity
File: src/interfaces/ISlashingHandler.sol

4: import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ISlashingHandler.sol)

```solidity
File: src/interfaces/IVault.sol

4: import {IKarakBaseVault} from "./IKarakBaseVault.sol";

5: import {WithdrawLib} from "../entities/Withdraw.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IVault.sol)

```solidity
File: src/utils/CommonUtils.sol

9:         sort(arr, 0, arr.length - 1);

16:         for (uint256 i = left; i < right; i++) {

19:                 lastUnsortedInd++;

24:             sort(arr, left, lastUnsortedInd - 1);

42:         for (uint256 i = 0; i < arr.length - 1; i++) {

43:             if (arr[i] == arr[i + 1]) return true;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

```solidity
File: src/utils/ExtSloads.sol

15:             bytes32 slot = slots[i++];

17:             assembly ("memory-safe") {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/ExtSloads.sol)

### <a name="GAS-8"></a>[GAS-8] Use Custom Errors instead of Revert Strings to save Gas

Custom errors are available from solidity version 0.8.4. Custom errors save [**~50 gas**](https://gist.github.com/IllIllI000/ad1bd0d29a0101b25e57c293b4b0c746) each time they're hit by [avoiding having to allocate and store the revert string](https://blog.soliditylang.org/2021/04/21/custom-errors/#errors-in-depth). Not defining the strings also save deployment gas

Additionally, custom errors can be used inside and outside of contracts (including interfaces and libraries).

Source: <https://blog.soliditylang.org/2021/04/21/custom-errors/>:

> Starting from [Solidity v0.8.4](https://github.com/ethereum/solidity/releases/tag/v0.8.4), there is a convenient and gas-efficient way to explain to users why an operation failed through the use of custom errors. Until now, you could already use strings to give more information about failures (e.g., `revert("Insufficient funds.");`), but they are rather expensive, especially when it comes to deploy cost, and it is difficult to use dynamic information in them.

Consider replacing **all revert strings** with custom errors in the solution, and particularly those that have multiple occurrences:

*Instances (1)*:

```solidity
File: src/entities/MerkleProofs.sol

53:         require(proof.length % 32 == 0, "Merkle.processInclusionProofKeccak: proof length should be a multiple of 32");

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

### <a name="GAS-9"></a>[GAS-9] State variables only set in the constructor should be declared `immutable`

Variables only set in the constructor and never edited afterwards should be marked as immutable, as it would avoid the expensive storage-writing operation in the constructor (around **20 000 gas** per variable) and replace the expensive storage-reading operations (around **2100 gas** per reading) to a less expensive value reading (**3 gas**)

*Instances (1)*:

```solidity
File: src/Querier.sol

15:         core = ICore(coreAddress);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

### <a name="GAS-10"></a>[GAS-10] Functions guaranteed to revert when called by normal users can be marked `payable`

If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (19)*:

```solidity
File: src/Core.sol

72:     function pause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

78:     function unpause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

173:     function changeStandardImplementation(address newVaultImpl) external onlyOwner {

183:     function changeImplementationForVault(address vault, address newVaultImpl) external onlyOwner {

197:     function pauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

204:     function unpauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

211:     function allowlistVaultImpl(address vaultImpl) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

51:     function pause(uint256 map) external onlyOwner {

57:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

322:     function pause(uint256 map) external onlyOwner {

328:     function unpause(uint256 map) external onlyOwner {

334:     function pauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

340:     function unpauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

32:     function withdraw(address to, uint256 weiAmount) external nonReentrant onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

38:     function addSlashableToken(IERC20 token) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

209:     function pause(uint256 map) external onlyCore {

215:     function unpause(uint256 map) external onlyCore {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/Pauser.sol

36:     function __Pauser_init() internal onlyInitializing {

40:     function __Pauser_init_unchained() internal onlyInitializing {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

### <a name="GAS-11"></a>[GAS-11] `++i` costs less gas compared to `i++` or `i += 1` (same for `--i` vs `i--` or `i -= 1`)

Pre-increments and pre-decrements are cheaper.

For a `uint256 i` variable, the following is true with the Optimizer enabled at 10k:

**Increment:**

- `i += 1` is the most expensive form
- `i++` costs 6 gas less than `i += 1`
- `++i` costs 5 gas less than `i++` (11 gas less than `i += 1`)

**Decrement:**

- `i -= 1` is the most expensive form
- `i--` costs 11 gas less than `i -= 1`
- `--i` costs 5 gas less than `i--` (16 gas less than `i -= 1`)

Note that post-increments (or post-decrements) return the old value before incrementing or decrementing, hence the name *post-increment*:

```solidity
uint i = 1;  
uint j = 2;
require(j == i++, "This will be false as i is incremented after the comparison");
```
  
However, pre-increments (or pre-decrements) return the new value:
  
```solidity
uint i = 1;  
uint j = 2;
require(j == ++i, "This will be true as i is incremented before the comparison");
```

In the pre-increment case, the compiler has to create a temporary variable (when used) for returning `1` instead of `2`.

Consider using pre-increments and pre-decrements where they are relevant (meaning: not where post-increments/decrements logic are relevant).

*Saves 5 gas per instance*

*Instances (21)*:

```solidity
File: src/Core.sol

139:         updatedStake = self.requestUpdateVaultStakeInDSS(vaultStakeUpdateRequest, self.nonce++, operator);

229:         queuedSlashing = self.requestSlashing(dss, slashingRequest, self.nonce++);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

144:         for (uint256 i = 0; i < balanceProofs.length; i++) {

157:             snapshot.remainingProofs--;

194:         for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

29:         for (uint256 i = 0; i < stakedVaults.length; i++) {

34:         for (uint256 i = 0; i < results.length; i++) {

39:         for (uint256 i = 0; i < results.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

33:         for (uint256 i = 0; i < _supportedAssets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/entities/CoreLib.sol

71:         for (uint256 i = 0; i < assets.length; i++) {

84:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

99:         bytes32 salt = keccak256(abi.encodePacked(operator, depositToken, self.vaultNonce++));

132:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

147:         for (uint256 i = 0; i < numNodesInLayer; i++) {

155:             for (uint256 i = 0; i < numNodesInLayer; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/Operator.sol

232:         for (uint256 i = 0; i < dssAddresses.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

50:         for (uint256 i = 0; i < slashingRequest.vaults.length; i++) {

134:         for (uint256 i = 0; i < queuedSlashing.vaults.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

16:         for (uint256 i = left; i < right; i++) {

19:                 lastUnsortedInd++;

42:         for (uint256 i = 0; i < arr.length - 1; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="GAS-12"></a>[GAS-12] Using `private` rather than `public` for constants, saves gas

If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (20)*:

```solidity
File: src/Core.sol

36:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/Querier.sol

10:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

17:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

32:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/interfaces/Constants.sol

5:     address public constant DEFAULT_NODE_IMPLEMENTATION_FLAG = address(1);

6:     address public constant DEFAULT_VAULT_IMPLEMENTATION_FLAG = address(1);

9:     uint256 public constant MANAGER_ROLE = 1 << 0;

10:     uint256 public constant VETO_COMMITTEE_ROLE = 1 << 1;

12:     uint256 public constant SNAPSHOT_EXPIRY = 7 days;

13:     uint256 public constant SLASHING_WINDOW = 7 days;

14:     uint256 public constant SLASHING_VETO_WINDOW = 2 days;

15:     uint256 public constant MIN_STAKE_UPDATE_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;

16:     uint256 public constant MIN_WITHDRAWAL_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;

18:     uint256 public constant ONE_WAD = 1e18;

20:     uint256 public constant HUNDRED_PERCENT_WAD = 100e18;

21:     uint256 public constant MAX_SLASHING_PERCENT_WAD = HUNDRED_PERCENT_WAD;

23:     uint256 public constant MAX_VAULTS_PER_OPERATOR = 32;

24:     uint256 public constant MAX_SLASHABLE_VAULTS_PER_REQUEST = MAX_VAULTS_PER_OPERATOR;

25:     uint256 public constant MAX_DSS_PER_OPERATOR = 32;

31:     uint256 public constant SLASHING_COOLDOWN = 2 days;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

### <a name="GAS-13"></a>[GAS-13] Use shift right/left instead of division/multiplication if possible

While the `DIV` / `MUL` opcode uses 5 gas, the `SHR` / `SHL` opcode only uses 3 gas. Furthermore, beware that Solidity's division operation also includes a division-by-0 prevention which is bypassed using shifting. Eventually, overflow checks are never performed for shift operations as they are done for arithmetic operations. Instead, the result is always truncated, so the calculation can be unchecked in Solidity version `0.8+`

- Use `>> 1` instead of `/ 2`
- Use `>> 2` instead of `/ 4`
- Use `<< 3` instead of `* 8`
- ...
- Use `>> 5` instead of `/ 2^5 == / 32`
- Use `<< 6` instead of `* 2^6 == * 64`

TL;DR:

- Shifting left by N is like multiplying by 2^N (Each bits to the left is an increased power of 2)
- Shifting right by N is like dividing by 2^N (Each bits to the right is a decreased power of 2)

*Saves around 2 gas + 20 for unchecked per instance*

*Instances (5)*:

```solidity
File: src/entities/BeaconProofsLib.sol

116:         uint256 balanceIndex = uint256(validatorIndex / 4);

128:         uint256 bitShiftAmount = (validatorIndex % 4) * 64;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/HookLib.sol

55:         if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

87:         if (gasleft() < (supportsInterfaceGasLimit * 64 / 63 + hookGasBuffer)) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

143:         uint256 numNodesInLayer = leaves.length / 2;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

### <a name="GAS-14"></a>[GAS-14] Superfluous event fields

`block.timestamp` and `block.number` are added to event information by default so adding them manually wastes gas

*Instances (5)*:

```solidity
File: src/interfaces/Events.sol

61: event SnapshotCreated(address nodeOwner, address node, uint64 timestamp, bytes32 parentBeaconBlockRoot);

63: event SnapshotFinished(address nodeOwner, address node, uint64 snapshotTimestamp, int256 totalSharesWei);

69: event RestakedValidator(address nodeOwner, address node, uint256 validatorIndex, uint64 timestamp, uint256 amountWei);

71: event ValidatorWithdrawn(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

77: event SnapshotValidator(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

### <a name="GAS-15"></a>[GAS-15] Use of `this` instead of marking as `public` an `external` function

Using `this.` is like making an expensive external call. Consider marking the called function as public

*Saves around 2000 gas per instance*

*Instances (1)*:

```solidity
File: src/Vault.sol

146:         this.transferFrom(msg.sender, address(this), shares);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="GAS-16"></a>[GAS-16] Increments/decrements can be unchecked in for-loops

In Solidity 0.8+, there's a default overflow check on unsigned integers. It's possible to uncheck this in for-loops and save some gas at each iteration, but at the cost of some code readability, as this uncheck cannot be made inline.

[ethereum/solidity#10695](https://github.com/ethereum/solidity/issues/10695)

The change would be:

```diff
- for (uint256 i; i < numIterations; i++) {
+ for (uint256 i; i < numIterations;) {
 // ...  
+   unchecked { ++i; }
}  
```

These save around **25 gas saved** per instance.

The same can be applied with decrements (which should use `break` when `i == 0`).

The risk of overflow is non-existent for `uint256`.

*Instances (17)*:

```solidity
File: src/NativeVault.sol

144:         for (uint256 i = 0; i < balanceProofs.length; i++) {

194:         for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

29:         for (uint256 i = 0; i < stakedVaults.length; i++) {

34:         for (uint256 i = 0; i < results.length; i++) {

39:         for (uint256 i = 0; i < results.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

33:         for (uint256 i = 0; i < _supportedAssets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/entities/CoreLib.sol

71:         for (uint256 i = 0; i < assets.length; i++) {

84:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

132:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

147:         for (uint256 i = 0; i < numNodesInLayer; i++) {

155:             for (uint256 i = 0; i < numNodesInLayer; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/Operator.sol

232:         for (uint256 i = 0; i < dssAddresses.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

50:         for (uint256 i = 0; i < slashingRequest.vaults.length; i++) {

85:         for (uint256 i = 0; i < slashingMetadata.vaults.length; ++i) {

134:         for (uint256 i = 0; i < queuedSlashing.vaults.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

16:         for (uint256 i = left; i < right; i++) {

42:         for (uint256 i = 0; i < arr.length - 1; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="GAS-17"></a>[GAS-17] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (5)*:

```solidity
File: src/NativeVault.sol

356:         return _state().withdrawalMap[NativeVaultLib.calculateWithdrawKey(nodeOwner, withdrawNonce)].start > 0;

414:         if (success && result.length > 0) {

514:         if (assets > 0) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

242:         return _state().withdrawalMap[WithdrawLib.calculateWithdrawKey(staker, _withdrawNonce)].start > 0;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/utils/CommonUtils.sol

53:         return size > 0;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="GAS-18"></a>[GAS-18] `internal` functions not called by the contract should be removed

If the functions are required by an interface, the contract should inherit from that interface and use the `override` keyword

*Instances (23)*:

```solidity
File: src/entities/BeaconProofsLib.sol

61:     function validateBeaconStateRootProof(bytes32 beaconBlockRoot, BeaconStateRootProof calldata beaconStateRootProof)

73:     function validateValidatorProof(

92:     function validateBalanceContainer(bytes32 beaconBlockRoot, BalanceContainer calldata proof) internal view {

109:     function validateBalance(bytes32 balanceRoot, uint40 validatorIndex, BalanceProof calldata proof)

132:     function getEffectiveBalanceWei(bytes32[] memory validatorFields) internal pure returns (uint256) {

140:     function getExitEpoch(bytes32[] memory validatorFields) internal pure returns (uint64) {

144:     function getWithdrawalCredentials(bytes32[] memory validatorFields) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

40:     function init(

153:     function allowlistVaultImpl(Storage storage self, address implementation) internal {

161:     function isDSSRegistered(Storage storage self, IDSS dss) internal view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/HookLib.sol

78:     function callHookIfInterfaceImplemented(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

29:     function verifyInclusionKeccak(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

85:     function verifyInclusionSha256(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

141:     function merkleizeSha256(bytes32[] memory leaves) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

93:     function deployNode(Storage storage self, VaultLib.Config storage config, address owner)

106:     function calculateWithdrawKey(address nodeOwner, uint256 nodeOwnerNonce) internal pure returns (bytes32) {

110:     function validateSnapshotProof(

146:     function validateWithdrawalCredentials(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

39:     function getVaults(State storage operatorState) internal view returns (address[] memory) {

43:     function addVault(State storage operatorState, IKarakBaseVault vault) internal {

143:     function checkIfOperatorIsRegInRegDSS(CoreLib.Storage storage self, address operator, IDSS dss) internal view {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/VaultLib.sol

24:     function validateQueuedWithdrawal(State storage self, bytes32 withdrawalKey)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

```solidity
File: src/entities/Withdraw.sol

12:     function calculateWithdrawKey(address staker, uint256 stakerNonce) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Withdraw.sol)

## Non Critical Issues

| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Replace `abi.encodeWithSignature` and `abi.encodeWithSelector` with `abi.encodeCall` which keeps the code typo/type safe | 8 |
| [NC-2](#NC-2) | Missing checks for `address(0)` when assigning values to address state variables | 1 |
| [NC-3](#NC-3) | Array indices should be referenced via `enum`s rather than via numeric literals | 3 |
| [NC-4](#NC-4) | Use `string.concat()` or `bytes.concat()` instead of `abi.encodePacked` | 5 |
| [NC-5](#NC-5) | `constant`s should be defined rather than using magic numbers | 31 |
| [NC-6](#NC-6) | Control structures do not follow the Solidity Style Guide | 91 |
| [NC-7](#NC-7) | Default Visibility for constants | 3 |
| [NC-8](#NC-8) | Consider disabling `renounceOwnership()` | 6 |
| [NC-9](#NC-9) | Events should use parameters to convey information | 1 |
| [NC-10](#NC-10) | Event missing indexed field | 39 |
| [NC-11](#NC-11) | Function ordering does not follow the Solidity style guide | 10 |
| [NC-12](#NC-12) | Functions should not be longer than 50 lines | 231 |
| [NC-13](#NC-13) | Change int to int256 | 1 |
| [NC-14](#NC-14) | Lack of checks in setters | 4 |
| [NC-15](#NC-15) | Missing Event for critical parameters change | 3 |
| [NC-16](#NC-16) | NatSpec is completely non-existent on functions that should have them | 15 |
| [NC-17](#NC-17) | Incomplete NatSpec: `@param` is missing on actually documented functions | 6 |
| [NC-18](#NC-18) | Incomplete NatSpec: `@return` is missing on actually documented functions | 8 |
| [NC-19](#NC-19) | Use a `modifier` instead of a `require/if` statement for a special `msg.sender` actor | 2 |
| [NC-20](#NC-20) | Constant state variables defined more than once | 9 |
| [NC-21](#NC-21) | Consider using named mappings | 3 |
| [NC-22](#NC-22) | `address`s shouldn't be hard-coded | 2 |
| [NC-23](#NC-23) | Numeric values having to do with time should use time units for readability | 1 |
| [NC-24](#NC-24) | Owner can renounce while system is paused | 4 |
| [NC-25](#NC-25) | Adding a `return` statement when the function defines a named return variable, is redundant | 7 |
| [NC-26](#NC-26) | Take advantage of Custom Error's return value property | 95 |
| [NC-27](#NC-27) | Contract does not follow the Solidity style guide's suggested layout ordering | 3 |
| [NC-28](#NC-28) | Use Underscores for Number Literals (add an underscore every 3 digits) | 3 |
| [NC-29](#NC-29) | Internal and private variables and functions names should begin with an underscore | 50 |
| [NC-30](#NC-30) | Event is missing `indexed` fields | 39 |
| [NC-31](#NC-31) | `public` functions not called by the contract should be declared `external` instead | 15 |
| [NC-32](#NC-32) | Variables need not be initialized to zero | 18 |

### <a name="NC-1"></a>[NC-1] Replace `abi.encodeWithSignature` and `abi.encodeWithSelector` with `abi.encodeCall` which keeps the code typo/type safe

When using `abi.encodeWithSignature`, it is possible to include a typo for the correct function signature.
When using `abi.encodeWithSignature` or `abi.encodeWithSelector`, it is also possible to provide parameters that are not of the correct type for the function.

To avoid these pitfalls, it would be best to use [`abi.encodeCall`](https://solidity-by-example.org/abi-encode/) instead.

*Instances (8)*:

```solidity
File: src/entities/HookLib.sol

93:             abi.encodeWithSelector(IERC165.supportsInterface.selector, interfaceId),

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/Operator.sol

80:             data: abi.encodeWithSelector(dss.requestUpdateStakeHook.selector, operator, requestStakeUpdate),

126:             data: abi.encodeWithSelector(dss.finishUpdateStakeHook.selector, msg.sender),

164:             data: abi.encodeWithSelector(dss.registrationHook.selector, operator, registrationHookData),

196:             data: abi.encodeWithSelector(dss.unregistrationHook.selector, operator, unregistrationHookData),

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

115:             data: abi.encodeWithSelector(

144:             data: abi.encodeWithSelector(dss.finishSlashingHook.selector, queuedSlashing.operator),

161:             data: abi.encodeWithSelector(dss.cancelSlashingHook.selector, queuedSlashing.operator),

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="NC-2"></a>[NC-2] Missing checks for `address(0)` when assigning values to address state variables

*Instances (1)*:

```solidity
File: src/NativeNode.sol

32:         nodeOwner = _nodeOwner;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

### <a name="NC-3"></a>[NC-3] Array indices should be referenced via `enum`s rather than via numeric literals

*Instances (3)*:

```solidity
File: src/entities/HookLib.sol

38:         returnVal = returnData[0];

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

132:         return computedHash[0];

162:         return layer[0];

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

### <a name="NC-4"></a>[NC-4] Use `string.concat()` or `bytes.concat()` instead of `abi.encodePacked`

Solidity version 0.8.4 introduces `bytes.concat()` (vs `abi.encodePacked(<bytes>,<bytes>)`)

Solidity version 0.8.12 introduces `string.concat()` (vs `abi.encodePacked(<str>,<str>), which catches concatenation errors (in the event of a`bytes`data mixed in the concatenation)`)

*Instances (5)*:

```solidity
File: src/entities/CoreLib.sol

99:         bytes32 salt = keccak256(abi.encodePacked(operator, depositToken, self.vaultNonce++));

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

148:             layer[i] = sha256(abi.encodePacked(leaves[2 * i], leaves[2 * i + 1]));

156:                 layer[i] = sha256(abi.encodePacked(layer[2 * i], layer[2 * i + 1]));

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

97:         bytes32 salt = keccak256(abi.encodePacked(config.operator, owner));

164:                 != bytes32(abi.encodePacked(bytes1(uint8(1)), bytes11(0), address(self.ownerToNode[nodeOwner].nodeAddress)))

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

### <a name="NC-5"></a>[NC-5] `constant`s should be defined rather than using magic numbers

Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (31)*:

```solidity
File: src/NativeVault.sol

71:         config.decimals = 18;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

55:         n = uint64(uint256(lenum >> 192));

56:         return (n >> 56) | ((0x00FF000000000000 & n) >> 40) | ((0x0000FF0000000000 & n) >> 24)

57:             | ((0x000000FF00000000 & n) >> 8) | ((0x00000000FF000000 & n) << 8) | ((0x0000000000FF0000 & n) << 24)

58:             | ((0x000000000000FF00 & n) << 40) | ((0x00000000000000FF & n) << 56);

65:         if (beaconStateRootProof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT)) revert InvalidBeaconStateProof();

85:             validatorProof.length != 32 * ((VALIDATOR_HEIGHT + 1) + BEACON_STATE_HEIGHT)

93:         if (proof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT + BEACON_STATE_HEIGHT)) {

114:         if (proof.proof.length != 32 * (BALANCE_HEIGHT + 1)) revert InvalidBalanceProof();

116:         uint256 balanceIndex = uint256(validatorIndex / 4);

128:         uint256 bitShiftAmount = (validatorIndex % 4) * 64;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/HookLib.sol

35:                     32 // 32 bytes size limit for the return value

55:         if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

87:         if (gasleft() < (supportsInterfaceGasLimit * 64 / 63 + hookGasBuffer)) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

53:         require(proof.length % 32 == 0, "Merkle.processInclusionProofKeccak: proof length should be a multiple of 32");

55:         for (uint256 i = 32; i <= proof.length; i += 32) {

56:             if (index % 2 == 0) {

62:                     index := div(index, 2)

70:                     index := div(index, 2)

109:             proof.length != 0 && proof.length % 32 == 0,

110:             "Merkle.processInclusionProofSha256: proof length should be a non-zero multiple of 32"

113:         for (uint256 i = 32; i <= proof.length; i += 32) {

114:             if (index % 2 == 0) {

119:                     if iszero(staticcall(sub(gas(), 2000), 2, 0x00, 0x40, computedHash, 0x20)) { revert(0, 0) }

120:                     index := div(index, 2)

127:                     if iszero(staticcall(sub(gas(), 2000), 2, 0x00, 0x40, computedHash, 0x20)) { revert(0, 0) }

128:                     index := div(index, 2)

143:         uint256 numNodesInLayer = leaves.length / 2;

151:         numNodesInLayer /= 2;

159:             numNodesInLayer /= 2;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/utils/ExtSloads.sol

18:                 mstore(add(res, mul(i, 32)), sload(slot))

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/ExtSloads.sol)

### <a name="NC-6"></a>[NC-6] Control structures do not follow the Solidity Style Guide

See the [control structures](https://docs.soliditylang.org/en/latest/style-guide.html#control-structures) section of the Solidity Style Guide

*Instances (91)*:

```solidity
File: src/Core.sol

104:         if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();

120:         self.checkIfOperatorIsRegInRegDSS(operator, dss);

138:         self.checkIfOperatorIsRegInRegDSS(operator, vaultStakeUpdateRequest.dss);

174:         if (newVaultImpl == address(0)) revert ZeroAddress();

175:         if (newVaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();

185:         if (!self.isVaultImplAllowlisted(newVaultImpl)) revert VaultImplNotAllowlisted();

188:         if (self.vaultToImplMap[vault] == address(0)) revert VaultNotAChildVault();

212:         if (vaultImpl == address(0)) revert ZeroAddress();

213:         if (vaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();

228:         self.checkIfOperatorIsRegInRegDSS(slashingRequest.operator, dss);

264:         if (!address(dss).isSmartContract()) revert NotSmartContract();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

57:         if (_depositToken != Constants.DEAD_BEEF) revert DepositTokenNotAccepted();

62:         if (manager == address(0) || slashStore == address(0) || nodeImplementation == address(0)) revert ZeroAddress();

88:         if (newNodeImplementation == address(0)) revert ZeroAddress();

112:     function startSnapshot(bool revertIfNoBalanceChange)

118:         _startSnapshot(_state().ownerToNode[msg.sender], revertIfNoBalanceChange, msg.sender);

140:         if (node.currentSnapshotTimestamp == 0) revert NoActiveSnapshot();

148:             if (validatorDetails.status != NativeVaultLib.ValidatorStatus.ACTIVE) revert InactiveValidator();

184:         if (

271:         if (startedWithdrawal.start == 0) revert WithdrawalNotFound();

308:         if (slashingHandler != self.slashStore) revert NotSlashStore();

444:     function _startSnapshot(NativeVaultLib.NativeNode storage node, bool revertIfNoBalanceChange, address nodeOwner)

447:         if (node.currentSnapshotTimestamp != 0) revert PendingIncompleteSnapshot();

457:         if (revertIfNoBalanceChange && nodeBalanceWei == 0) revert NoBalanceUpdateToSnapshot();

495:         if (assets + self.totalAssets > maxDeposit(_of)) revert DepositMoreThanMax();

526:         if (_state().ownerToNode[owner].nodeAddress == address(0)) revert NotNodeOwner();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

35:             if (results[i] != bytes32(0)) count++;

40:             if (results[i] != bytes32(0)) vaults[latestIndex++] = stakedVaults[i];

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

43:         if (amount == 0) revert ZeroAmount();

44:         if (!_config().supportedAssets[token]) revert UnsupportedAsset();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

85:         if (assets == 0) revert ZeroAmount();

100:         if (assets == 0) revert ZeroAmount();

102:         if (shares < minSharesOut) revert NotEnoughShares();

117:         if (shares == 0) revert ZeroShares();

131:         if (shares == 0) revert ZeroShares();

132:         if (beneficiary == address(0)) revert ZeroAddress();

167:         if (shares > maxRedeem(address(this))) revert RedeemMoreThanMax();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

65:         if (beaconStateRootProof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT)) revert InvalidBeaconStateProof();

66:         if (

67:             !Merkle.verifyInclusionSha256(

79:         if (validatorFields.length != NUM_FIELDS) revert InvalidValidatorFields();

84:         if (

86:                 || !Merkle.verifyInclusionSha256(validatorProof, beaconStateRoot, validatorRoot, index)

99:         if (

114:         if (proof.proof.length != 32 * (BALANCE_HEIGHT + 1)) revert InvalidBalanceProof();

118:         if (

128:         uint256 bitShiftAmount = (validatorIndex % 4) * 64;

129:         return fromLittleEndianUint64(bytes32((uint256(proof.balanceRoot) << bitShiftAmount))) * 1 gwei;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

70:         if (assets.length != slashingHandlers.length) revert LengthsDontMatch();

72:             if (slashingHandlers[i] == address(0) || assets[i] == address(0)) revert ZeroAddress();

85:             if (self.assetSlashingHandlers[vaultConfigs[i].asset] == address(0)) revert AssetNotAllowlisted();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/HookLib.sol

55:         if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

59:         if (!ignoreFailure && !success) revert DSSHookCallReverted(returnData);

61:         if (success) emit HookCallSucceeded(returnData);

78:     function callHookIfInterfaceImplemented(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

29:     function verifyInclusionKeccak(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

85:     function verifyInclusionSha256(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

157:         if (validatorDetails.status != NativeVaultLib.ValidatorStatus.INACTIVE) revert ValidatorAlreadyActive();

162:         if (

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

44:         if (vault == IKarakBaseVault(address(0))) revert ZeroAddress();

45:         if (operatorState.vaults.length() == Constants.MAX_VAULTS_PER_OPERATOR) revert MaxVaultCapacityReached();

57:         if (operatorState.pendingStakeUpdates[stakeUpdate.vault] != bytes32(0)) revert PendingStakeUpdateRequest();

58:         if (!operatorState.vaults.contains(stakeUpdate.vault)) revert VaultNotAChildVault();

96:         if (

144:         if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();

157:         if (isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorAlreadyRegisteredToDSS();

158:         if (operatorState.dssMap.length() == Constants.MAX_DSS_PER_OPERATOR) revert MaxDSSCapacityReached();

190:         if (vaults.length != 0) revert AllVaultsNotUnstakedFromDSS();

191:         if (!isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorNotValidatingForDSS();

233:             if (isVaultStakeToDSS(operatorState, IDSS(dssAddresses[i]), address(vault))) count++;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

45:         if (paused()) revert EnforcedPause();

50:         if (paused(index)) revert EnforcedPauseFunction(index);

69:         if ((self._paused & map) != self._paused) revert AttemptedUnpauseWhilePausing();

76:         if (self._paused & map != map) revert AttemptedPauseWhileUnpausing();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

47:         if (slashingRequest.vaults.hasDuplicates()) revert DuplicateSlashingVaults();

54:             if (slashingRequest.slashPercentagesWad[i] == 0) revert ZeroSlashPercentageWad();

55:             if (slashingRequest.slashPercentagesWad[i] > maxSlashPercentageWad) revert MaxSlashPercentageWadBreached();

68:         if (slashingRequest.slashPercentagesWad.length != slashingRequest.vaults.length) revert LengthsDontMatch();

74:         if (slashingRequest.vaults.length == 0) revert EmptyArray();

128:         if (!self.slashingRequests[slashRoot]) revert InvalidSlashingParams();

155:         if (!self.slashingRequests[slashRoot]) revert InvalidSlashingParams();

180:         if (currentSlashablePercentageWad != 0) revert DSSAlreadyRegistered();

181:         if (dssMaxSlashablePercentageWad == 0) revert ZeroSlashPercentageWad();

182:         if (dssMaxSlashablePercentageWad > Constants.MAX_SLASHING_PERCENT_WAD) revert MaxSlashPercentageWadBreached();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/interfaces/Constants.sol

44:     uint8 internal constant PAUSE_CORE_MODIFY_OPERATOR = 1;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

```solidity
File: src/interfaces/INativeVault.sol

23:     function startSnapshot(bool revertIfNoBalanceChange) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeVault.sol)

```solidity
File: src/utils/CommonUtils.sol

8:         if (arr.length == 0) return;

13:         if (left >= right) return;

18:                 if (i != lastUnsortedInd) swap(arr, i, lastUnsortedInd);

41:         if (arr.length == 0) return false;

43:             if (arr[i] == arr[i + 1]) return true;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="NC-7"></a>[NC-7] Default Visibility for constants

Some constants are using the default visibility. For readability, consider explicitly declaring them as `internal`.

*Instances (3)*:

```solidity
File: src/entities/CoreStorageSlots.sol

5: uint256 constant CORE_STORAGE_SLOT = 0x13c729cff436dc8ac22d145f2c778f6a709d225083f39538cc5e2674f2f10700;

8: uint256 constant OPERATOR_STATE_MAPPING_OFFSET = 0;

11: uint256 constant PENDING_STAKE_UPDATE_MAPPING_OFFSET = 6;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

### <a name="NC-8"></a>[NC-8] Consider disabling `renounceOwnership()`

If the plan for your project does not include eventually giving up all ownership control, consider overwriting OpenZeppelin's `Ownable`'s `renounceOwnership()` function in order to disable it.

*Instances (6)*:

```solidity
File: src/Core.sol

26: contract Core is IBeacon, ICore, OwnableRoles, Initializable, ReentrancyGuard, Pauser, ExtSloads {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

17: contract NativeNode is Pauser, Ownable, INativeNode, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

25: contract NativeVault is ERC4626, IBeacon, Pauser, INativeVault, OwnableRoles, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

12: contract SlashStore is Initializable, Ownable, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

16: contract SlashingHandler is Initializable, Ownable, ISlashingHandler {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

29: contract Vault is ERC4626, Initializable, Ownable, Pauser, ReentrancyGuard, ExtSloads, IVault {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="NC-9"></a>[NC-9] Events should use parameters to convey information

For example, rather than using `event Paused()` and `event Unpaused()`, use `event PauseState(address indexed whoChangedIt, bool wasPaused, bool isNowPaused)`

*Instances (1)*:

```solidity
File: src/interfaces/Events.sol

49: event InterfaceNotSupported();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

### <a name="NC-10"></a>[NC-10] Event missing indexed field

Index event fields make the field more quickly accessible [to off-chain tools](https://ethereum.stackexchange.com/questions/40396/can-somebody-please-explain-the-concept-of-event-indexing) that parse events. This is especially useful when it comes to filtering based on an address. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Where applicable, each `event` should use three `indexed` fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three applicable fields, all of the applicable fields should be indexed.

*Instances (39)*:

```solidity
File: src/entities/Pauser.sol

24:     event Paused(address account, uint256 map);

26:     event Unpaused(address account, uint256 map);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/interfaces/Events.sol

7: event StartedRedeem(address staker, address operator, uint256 shares, bytes32 withdrawKey, uint256 assets);

9: event FinishedRedeem(

13: event CanceledRedeem(address staker, address operator, uint256 shares, bytes32 withdrawRoot);

15: event NewVault(address vault, address implementation);

17: event DeployedVault(address operator, address vault, address asset);

19: event AddedVault(address operator, address vault, address vaultImplementation);

21: event UpgradedVault(address implementation, address vault);

23: event UpgradedAllVaults(address implementation);

25: event AllowlistedAssets(address[] assets);

27: event RegisteredOperatorToDSS(address operator, address dss);

29: event UnregisteredOperatorToDSS(address operator, address dss);

31: event RequestedSlashing(address dss, SlasherLib.SlashRequest requestSlashing);

33: event CancelledSlashing(address canceller, SlasherLib.QueuedSlashing queuedSlashing);

35: event Slashed(uint256 assets);

37: event FinalizedSlashing(address finisher, SlasherLib.QueuedSlashing queuedSlashing);

39: event RequestedStakeUpdate(address operator, Operator.StakeUpdateRequest updateRequest);

41: event CanceledStakeUpdate(address operator, bytes32 stakeHash);

43: event FinishedStakeUpdate(Operator.QueuedStakeUpdate updateRequest);

45: event HookCallFailed(bytes32 returnData);

47: event HookCallSucceeded(bytes32 returnData);

53: event StartedWithdraw(address nodeOwner, address operator, bytes32 withdrawKey, uint256 assets, address recipient);

55: event FinishedWithdraw(address nodeOwner, address recipient, address operator, uint256 assets, bytes32 withdrawKey);

57: event NodeDeployed(address owner, address node, address nodeImplementation);

59: event NativeVaultInitialized(address owner, address manager, address operator, address slashStore);

61: event SnapshotCreated(address nodeOwner, address node, uint64 timestamp, bytes32 parentBeaconBlockRoot);

63: event SnapshotFinished(address nodeOwner, address node, uint64 snapshotTimestamp, int256 totalSharesWei);

65: event NodeETHWithdrawn(address node, address to, uint256 weiAmount);

67: event NativeRestakerNodeDeployed(address node, address implementation);

69: event RestakedValidator(address nodeOwner, address node, uint256 validatorIndex, uint64 timestamp, uint256 amountWei);

71: event ValidatorWithdrawn(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

73: event ValidatorBalanceChanged(

77: event SnapshotValidator(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

79: event UpgradedAllNodes(address implementation);

81: event DepositedSlashedAssets(address nativeNode, uint256 amount);

83: event IncreasedBalance(uint256 totalRestakedETH);

85: event DecreasedBalance(uint256 totalRestakedETH);

87: event DSSRegistered(address dss, uint256 maxSlashablePercentageWad);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

### <a name="NC-11"></a>[NC-11] Function ordering does not follow the Solidity style guide

According to the [Solidity style guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html#order-of-functions), functions should be laid out in the following order :`constructor()`, `receive()`, `fallback()`, `external`, `public`, `internal`, `private`, but the cases below do not follow this pattern

*Instances (10)*:

```solidity
File: src/Core.sol

1: 
   Current order:
   external initialize
   external pause
   external unpause
   external allowlistAssets
   external registerOperatorToDSS
   external unregisterOperatorFromDSS
   external requestUpdateVaultStakeInDSS
   external finalizeUpdateVaultStakeInDSS
   external deployVaults
   external changeStandardImplementation
   external changeImplementationForVault
   external pauseVault
   external unpauseVault
   external allowlistVaultImpl
   external requestSlashing
   external cancelSlashing
   external finalizeSlashing
   external registerDSS
   external setGasValues
   public isAssetAllowlisted
   public isVaultImplAllowListed
   public isOperatorRegisteredToDSS
   external implementation
   public implementation
   external getOperatorVaults
   external fetchVaultsStakedInDSS
   external getLeverage
   public getDssMaxSlashablePercentageWad
   public isDSSRegistered
   public extSloads
   internal _self
   
   Suggested order:
   external initialize
   external pause
   external unpause
   external allowlistAssets
   external registerOperatorToDSS
   external unregisterOperatorFromDSS
   external requestUpdateVaultStakeInDSS
   external finalizeUpdateVaultStakeInDSS
   external deployVaults
   external changeStandardImplementation
   external changeImplementationForVault
   external pauseVault
   external unpauseVault
   external allowlistVaultImpl
   external requestSlashing
   external cancelSlashing
   external finalizeSlashing
   external registerDSS
   external setGasValues
   external implementation
   external getOperatorVaults
   external fetchVaultsStakedInDSS
   external getLeverage
   public isAssetAllowlisted
   public isVaultImplAllowListed
   public isOperatorRegisteredToDSS
   public implementation
   public getDssMaxSlashablePercentageWad
   public isDSSRegistered
   public extSloads
   internal _self

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

1: 
   Current order:
   external initialize
   external changeNodeImplementation
   external createNode
   external startSnapshot
   external validateSnapshotProofs
   external validateWithdrawalCredentials
   external validateExpiredSnapshot
   external startWithdrawal
   external finishWithdrawal
   external slashAssets
   external pause
   external unpause
   external pauseNode
   external unpauseNode
   public withdrawableWei
   public getNextWithdrawNonce
   public isWithdrawalPending
   public getQueuedWithdrawal
   external getNodeOwner
   external getValidatorDetails
   external lastSnapshotTimestamp
   external currentSnapshotTimestamp
   external currentSnapshot
   internal _state
   internal _config
   internal _getParentBlockRoot
   internal _transferToSlashStore
   internal _startSnapshot
   internal _updateSnapshot
   internal _increaseBalance
   internal _decreaseBalance
   internal _updateBalance
   public transfer
   public transferFrom
   public deposit
   public mint
   public withdraw
   public redeem
   public previewDeposit
   public previewRedeem
   public totalAssets
   public decimals
   public asset
   public name
   public symbol
   external implementation
   public vaultConfig
   
   Suggested order:
   external initialize
   external changeNodeImplementation
   external createNode
   external startSnapshot
   external validateSnapshotProofs
   external validateWithdrawalCredentials
   external validateExpiredSnapshot
   external startWithdrawal
   external finishWithdrawal
   external slashAssets
   external pause
   external unpause
   external pauseNode
   external unpauseNode
   external getNodeOwner
   external getValidatorDetails
   external lastSnapshotTimestamp
   external currentSnapshotTimestamp
   external currentSnapshot
   external implementation
   public withdrawableWei
   public getNextWithdrawNonce
   public isWithdrawalPending
   public getQueuedWithdrawal
   public transfer
   public transferFrom
   public deposit
   public mint
   public withdraw
   public redeem
   public previewDeposit
   public previewRedeem
   public totalAssets
   public decimals
   public asset
   public name
   public symbol
   public vaultConfig
   internal _state
   internal _config
   internal _getParentBlockRoot
   internal _transferToSlashStore
   internal _startSnapshot
   internal _updateSnapshot
   internal _increaseBalance
   internal _decreaseBalance
   internal _updateBalance

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

1: 
   Current order:
   external initialize
   public deposit
   external deposit
   public mint
   external startRedeem
   external finishRedeem
   external slashAssets
   external pause
   external unpause
   public name
   public symbol
   public asset
   public vaultConfig
   public getNextWithdrawNonce
   public isWithdrawalPending
   public getQueuedWithdrawal
   public totalAssets
   public owner
   public decimals
   public extSloads
   internal _state
   internal _config
   internal _storage
   internal _underlyingDecimals
   public withdraw
   public redeem
   
   Suggested order:
   external initialize
   external deposit
   external startRedeem
   external finishRedeem
   external slashAssets
   external pause
   external unpause
   public deposit
   public mint
   public name
   public symbol
   public asset
   public vaultConfig
   public getNextWithdrawNonce
   public isWithdrawalPending
   public getQueuedWithdrawal
   public totalAssets
   public owner
   public decimals
   public extSloads
   public withdraw
   public redeem
   internal _state
   internal _config
   internal _storage
   internal _underlyingDecimals

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

1: 
   Current order:
   internal fromLittleEndianUint64
   internal validateBeaconStateRootProof
   internal validateValidatorProof
   internal validateBalanceContainer
   internal validateBalance
   internal getEffectiveBalanceWei
   external getPubkeyHash
   internal getExitEpoch
   internal getWithdrawalCredentials
   
   Suggested order:
   external getPubkeyHash
   internal fromLittleEndianUint64
   internal validateBeaconStateRootProof
   internal validateValidatorProof
   internal validateBalanceContainer
   internal validateBalance
   internal getEffectiveBalanceWei
   internal getExitEpoch
   internal getWithdrawalCredentials

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

1: 
   Current order:
   internal init
   internal updateGasValues
   external allowlistAssets
   public validateVaultConfigs
   internal createVault
   external deployVaults
   internal cloneVault
   internal allowlistVaultImpl
   internal isVaultImplAllowlisted
   internal isDSSRegistered
   
   Suggested order:
   external allowlistAssets
   external deployVaults
   public validateVaultConfigs
   internal init
   internal updateGasValues
   internal createVault
   internal cloneVault
   internal allowlistVaultImpl
   internal isVaultImplAllowlisted
   internal isDSSRegistered

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

1: 
   Current order:
   internal operatorStateMappingSlot
   internal operatorStateSlot
   internal pendingStakeUpdateMappingSlot
   public vaultPendingStakeUpdateSlot
   
   Suggested order:
   public vaultPendingStakeUpdateSlot
   internal operatorStateMappingSlot
   internal operatorStateSlot
   internal pendingStakeUpdateMappingSlot

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/Operator.sol

1: 
   Current order:
   internal getVaults
   internal addVault
   internal calculateRoot
   internal validateStakeUpdateRequest
   external requestUpdateVaultStakeInDSS
   internal validateQueuedStakeUpdate
   internal updateVaultStakeInDSS
   external validateAndUpdateVaultStakeInDSS
   internal isOperatorRegisteredToDSS
   internal checkIfOperatorIsRegInRegDSS
   external registerOperatorToDSS
   public getVaultsStakedToDSS
   external unregisterOperatorFromDSS
   internal getDSSsOperatorIsRegisteredTo
   internal isVaultStakeToDSS
   external getDSSCountVaultStakedTo
   
   Suggested order:
   external requestUpdateVaultStakeInDSS
   external validateAndUpdateVaultStakeInDSS
   external registerOperatorToDSS
   external unregisterOperatorFromDSS
   external getDSSCountVaultStakedTo
   public getVaultsStakedToDSS
   internal getVaults
   internal addVault
   internal calculateRoot
   internal validateStakeUpdateRequest
   internal validateQueuedStakeUpdate
   internal updateVaultStakeInDSS
   internal isOperatorRegisteredToDSS
   internal checkIfOperatorIsRegInRegDSS
   internal getDSSsOperatorIsRegisteredTo
   internal isVaultStakeToDSS

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

1: 
   Current order:
   private _getPauserStorage
   internal __Pauser_init
   internal __Pauser_init_unchained
   public paused
   public paused
   public pausedMap
   internal _pause
   internal _unpause
   
   Suggested order:
   public paused
   public paused
   public pausedMap
   internal __Pauser_init
   internal __Pauser_init_unchained
   internal _pause
   internal _unpause
   private _getPauserStorage

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

1: 
   Current order:
   internal calculateRoot
   internal validateVaultsAndSlashPercentages
   internal validateRequestSlashingParams
   internal fetchEarmarkedStakes
   external requestSlashing
   external finalizeSlashing
   external cancelSlashing
   public getDSSMaxSlashablePercentageWad
   public setDSSMaxSlashablePercentageWad
   
   Suggested order:
   external requestSlashing
   external finalizeSlashing
   external cancelSlashing
   public getDSSMaxSlashablePercentageWad
   public setDSSMaxSlashablePercentageWad
   internal calculateRoot
   internal validateVaultsAndSlashPercentages
   internal validateRequestSlashingParams
   internal fetchEarmarkedStakes

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

1: 
   Current order:
   private sortArr
   private sort
   private swap
   external hasDuplicates
   external isSmartContract
   
   Suggested order:
   external hasDuplicates
   external isSmartContract
   private sortArr
   private sort
   private swap

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="NC-12"></a>[NC-12] Functions should not be longer than 50 lines

Overly complex code can make understanding functionality more difficult, try to further modularize your code to ensure readability

*Instances (231)*:

```solidity
File: src/Core.sol

72:     function pause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

78:     function unpause(uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

85:     function allowlistAssets(address[] memory assets, address[] memory slashingHandlers)

97:     function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData)

99:         whenFunctionNotPaused(Constants.PAUSE_CORE_REGISTER_TO_DSS)

113:     function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistrationHookData)

116:         whenFunctionNotPaused(Constants.PAUSE_CORE_UNREGISTER_FROM_DSS)

130:     function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory vaultStakeUpdateRequest)

133:         whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_STAKE_UPDATE)

146:     function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory queuedStake)

149:         whenFunctionNotPaused(Constants.PAUSE_CORE_FINALIZE_STAKE_UPDATE)

161:     function deployVaults(VaultLib.Config[] calldata vaultConfigs, address vaultImpl)

163:         whenFunctionNotPaused(Constants.PAUSE_CORE_DEPLOY_VAULTS)

173:     function changeStandardImplementation(address newVaultImpl) external onlyOwner {

183:     function changeImplementationForVault(address vault, address newVaultImpl) external onlyOwner {

197:     function pauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

204:     function unpauseVault(IKarakBaseVault vault, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

211:     function allowlistVaultImpl(address vaultImpl) external onlyOwner {

220:     function requestSlashing(SlasherLib.SlashRequest calldata slashingRequest)

222:         whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_SLASHING)

235:     function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)

237:         whenFunctionNotPaused(Constants.PAUSE_CORE_CANCEL_SLASHING)

248:     function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing)

251:         whenFunctionNotPaused(Constants.PAUSE_CORE_FINALIZE_SLASHING)

262:     function registerDSS(uint256 maxSlashablePercentageWad) external {

274:     function setGasValues(uint32 _hookCallGasLimit, uint32 _hookGasBuffer, uint32 _supportsInterfaceGasLimit)

288:     function isAssetAllowlisted(address asset) public view returns (bool) {

292:     function isVaultImplAllowListed(address vaultImpl) public view returns (bool) {

300:     function isOperatorRegisteredToDSS(address operator, IDSS dss) public view returns (bool) {

306:     function implementation() external view override returns (address) {

316:     function implementation(address vault) public view returns (address) {

329:     function getOperatorVaults(address operator) external view returns (address[] memory vaults) {

337:     function fetchVaultsStakedInDSS(address operator, IDSS dss) external view returns (address[] memory vaults) {

347:     function getLeverage(address vault) external view returns (uint256 leverage) {

356:     function getDssMaxSlashablePercentageWad(IDSS dss) public view returns (uint256 slashablePercentageWad) {

363:     function isDSSRegistered(IDSS dss) public view returns (bool) {

383:     function _self() internal pure returns (CoreLib.Storage storage $) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

28:     function initialize(address _owner, address _nodeOwner) external initializer {

57:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

83:     function changeNodeImplementation(address newNodeImplementation)

86:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_NODE_IMPLEMENTATION)

98:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_CREATE_NODE)

112:     function startSnapshot(bool revertIfNoBalanceChange)

116:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_SNAPSHOT)

134:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_SNAPSHOT)

176:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_WITHDRAW_CREDS)

210:     function validateExpiredSnapshot(address nodeOwner)

214:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_VALIDATE_EXPIRED_SNAPSHOT)

228:     function startWithdrawal(address to, uint256 weiAmount)

232:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_WITHDRAWAL)

265:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_FINISH_WITHDRAWAL)

299:     function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)

303:         whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_SLASHER)

328:     function unpause(uint256 map) external onlyOwner {

334:     function pauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

340:     function unpauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

346:     function withdrawableWei(address nodeOwner) public view nodeExists(nodeOwner) returns (uint256) {

351:     function getNextWithdrawNonce(address nodeOwner) public view returns (uint256) {

355:     function isWithdrawalPending(address nodeOwner, uint256 withdrawNonce) public view returns (bool) {

359:     function getQueuedWithdrawal(address nodeOwner, uint256 withdrawNonce)

367:     function getNodeOwner(address node) external view returns (address) {

371:     function getValidatorDetails(bytes32 pubKey, address nodeOwner)

380:     function lastSnapshotTimestamp(address nodeOwner) external view nodeExists(nodeOwner) returns (uint64) {

384:     function currentSnapshotTimestamp(address nodeOwner) external view nodeExists(nodeOwner) returns (uint64) {

399:     function _state() internal pure returns (NativeVaultLib.Storage storage $) {

405:     function _config() internal pure returns (VaultLib.Config storage $) {

411:     function _getParentBlockRoot(uint64 timestamp) internal view returns (bytes32) {

421:     function _transferToSlashStore(address nodeOwner) internal {

444:     function _startSnapshot(NativeVaultLib.NativeNode storage node, bool revertIfNoBalanceChange, address nodeOwner)

493:     function _increaseBalance(address _of, uint256 assets) internal {

503:     function _decreaseBalance(address _of, uint256 assets) internal {

513:     function _updateBalance(address _of, int256 assets) internal {

532:     function transfer(address to, uint256 amount) public pure override returns (bool) {

540:     function transferFrom(address from, address to, uint256 amount) public pure override returns (bool) {

549:     function deposit(uint256 assets, address to) public pure override returns (uint256 shares) {

558:     function mint(uint256 shares, address to) public pure override returns (uint256 assets) {

567:     function withdraw(uint256 assets, address to, address owner) public pure override returns (uint256 shares) {

577:     function redeem(uint256 shares, address to, address owner) public pure override returns (uint256 assets) {

587:     function previewDeposit(uint256 assets) public pure override returns (uint256 shares) {

595:     function previewRedeem(uint256 shares) public pure override returns (uint256 assets) {

603:     function totalAssets() public view override(ERC4626, IKarakBaseVault) returns (uint256) {

607:     function decimals() public view override(ERC4626, IKarakBaseVault) returns (uint8) {

611:     function asset() public view override(ERC4626, IKarakBaseVault) returns (address) {

615:     function name() public view override(ERC20, IKarakBaseVault) returns (string memory) {

619:     function symbol() public view override(ERC20, IKarakBaseVault) returns (string memory) {

623:     function implementation() external view override returns (address) {

627:     function vaultConfig() public pure returns (VaultLib.Config memory) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

26:     function fetchVaultsQueuedForExit(address operator, IDSS dss) external view returns (address[] memory vaults) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashStore.sol

20:     function initialize(address _owner) external initializer {

32:     function withdraw(address to, uint256 weiAmount) external nonReentrant onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

30:     function initialize(address owner, IERC20[] calldata _supportedAssets) external initializer {

38:     function addSlashableToken(IERC20 token) external onlyOwner {

42:     function handleSlashing(IERC20 token, uint256 amount) external {

51:     function _config() internal pure returns (Config storage $) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

94:     function deposit(uint256 assets, address to, uint256 minSharesOut)

97:         whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT_SLIPPAGE)

125:     function startRedeem(uint256 shares, address beneficiary)

127:         whenFunctionNotPaused(Constants.PAUSE_VAULT_START_REDEEM)

160:         whenFunctionNotPaused(Constants.PAUSE_VAULT_FINISH_REDEEM)

193:     function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)

221:     function name() public view override(ERC20, IKarakBaseVault) returns (string memory) {

225:     function symbol() public view override(ERC20, IKarakBaseVault) returns (string memory) {

229:     function asset() public view override(ERC4626, IKarakBaseVault) returns (address) {

233:     function vaultConfig() public pure returns (VaultLib.Config memory) {

237:     function getNextWithdrawNonce(address staker) public view returns (uint256) {

241:     function isWithdrawalPending(address staker, uint256 _withdrawNonce) public view returns (bool) {

245:     function getQueuedWithdrawal(address staker, uint256 _withdrawNonce)

253:     function totalAssets() public view override(ERC4626, IKarakBaseVault) returns (uint256) {

257:     function owner() public view override(Ownable, IVault) returns (address) {

261:     function decimals() public view override(ERC4626, IKarakBaseVault) returns (uint8) {

281:     function _state() internal pure returns (VaultLib.State storage $) {

287:     function _config() internal pure returns (VaultLib.Config storage $) {

293:     function _storage() internal pure returns (VaultLib.State storage $, VaultLib.Config storage $$) {

300:     function _underlyingDecimals() internal view override returns (uint8) {

314:     function withdraw(uint256 assets, address to, address owner)

330:     function redeem(uint256 shares, address to, address owner)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

54:     function fromLittleEndianUint64(bytes32 lenum) internal pure returns (uint64 n) {

61:     function validateBeaconStateRootProof(bytes32 beaconBlockRoot, BeaconStateRootProof calldata beaconStateRootProof)

92:     function validateBalanceContainer(bytes32 beaconBlockRoot, BalanceContainer calldata proof) internal view {

109:     function validateBalance(bytes32 balanceRoot, uint40 validatorIndex, BalanceProof calldata proof)

132:     function getEffectiveBalanceWei(bytes32[] memory validatorFields) internal pure returns (uint256) {

136:     function getPubkeyHash(bytes32[] calldata validatorFields) external pure returns (bytes32) {

140:     function getExitEpoch(bytes32[] memory validatorFields) internal pure returns (uint64) {

144:     function getWithdrawalCredentials(bytes32[] memory validatorFields) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

67:     function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)

77:     function validateVaultConfigs(Storage storage self, VaultLib.Config[] calldata vaultConfigs, address implementation)

149:     function cloneVault(bytes32 salt) internal returns (IKarakBaseVault) {

153:     function allowlistVaultImpl(Storage storage self, address implementation) internal {

157:     function isVaultImplAllowlisted(Storage storage self, address implementation) internal view returns (bool) {

161:     function isDSSRegistered(Storage storage self, IDSS dss) internal view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

15:     function operatorStateMappingSlot() internal pure returns (bytes32) {

19:     function operatorStateSlot(address operator) internal pure returns (bytes32) {

23:     function pendingStakeUpdateMappingSlot(address operator) internal pure returns (bytes32) {

27:     function vaultPendingStakeUpdateSlot(address operator, address vault) public pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/HookLib.sol

16:     function performLowLevelCallAndLimitReturnData(address target, bytes memory data, uint256 gasLimit)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

29:     function verifyInclusionKeccak(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

48:     function processInclusionProofKeccak(bytes memory proof, bytes32 leaf, uint256 index)

85:     function verifyInclusionSha256(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

103:     function processInclusionProofSha256(bytes memory proof, bytes32 leaf, uint256 index)

141:     function merkleizeSha256(bytes32[] memory leaves) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

93:     function deployNode(Storage storage self, VaultLib.Config storage config, address owner)

106:     function calculateWithdrawKey(address nodeOwner, uint256 nodeOwnerNonce) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

39:     function getVaults(State storage operatorState) internal view returns (address[] memory) {

43:     function addVault(State storage operatorState, IKarakBaseVault vault) internal {

49:     function calculateRoot(QueuedStakeUpdate memory newStake) internal pure returns (bytes32) {

53:     function validateStakeUpdateRequest(State storage operatorState, StakeUpdateRequest memory stakeUpdate)

89:     function validateQueuedStakeUpdate(State storage operatorState, QueuedStakeUpdate memory queuedStakeUpdate)

103:     function updateVaultStakeInDSS(State storage operatorState, address vault, IDSS dss, bool toStake) internal {

111:     function validateAndUpdateVaultStakeInDSS(CoreLib.Storage storage self, QueuedStakeUpdate memory queuedStakeUpdate)

135:     function isOperatorRegisteredToDSS(CoreLib.Storage storage self, address operator, IDSS dss)

143:     function checkIfOperatorIsRegInRegDSS(CoreLib.Storage storage self, address operator, IDSS dss) internal view {

173:     function getVaultsStakedToDSS(State storage operatorState, IDSS dss)

209:     function getDSSsOperatorIsRegisteredTo(CoreLib.Storage storage self, address operator)

217:     function isVaultStakeToDSS(State storage operatorState, IDSS dss, address vault) internal view returns (bool) {

224:     function getDSSCountVaultStakedTo(CoreLib.Storage storage self, IKarakBaseVault vault)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

18:     function _getPauserStorage() private pure returns (PauserStorage storage $) {

36:     function __Pauser_init() internal onlyInitializing {

40:     function __Pauser_init_unchained() internal onlyInitializing {

54:     function paused() public view virtual returns (bool) {

58:     function paused(uint8 index) public view virtual returns (bool) {

63:     function pausedMap() public view virtual returns (uint256) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

38:     function calculateRoot(QueuedSlashing memory queuedSlashing) internal pure returns (bytes32 root) {

59:     function validateRequestSlashingParams(CoreLib.Storage storage self, SlashRequest memory slashingRequest, IDSS dss)

79:     function fetchEarmarkedStakes(SlashRequest memory slashingMetadata)

126:     function finalizeSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

153:     function cancelSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

170:     function getDSSMaxSlashablePercentageWad(CoreLib.Storage storage self, IDSS dss) public view returns (uint256) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

24:     function validateQueuedWithdrawal(State storage self, bytes32 withdrawalKey)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

```solidity
File: src/entities/Withdraw.sol

12:     function calculateWithdrawKey(address staker, uint256 stakerNonce) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Withdraw.sol)

```solidity
File: src/interfaces/ICore.sol

24:     function allowlistAssets(address[] calldata assets, address[] calldata slashingHandlers) external;

25:     function registerOperatorToDSS(IDSS dss, bytes memory registrationHookData) external;

26:     function unregisterOperatorFromDSS(IDSS dss, bytes memory unregistationHookData) external;

27:     function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory newStake)

30:     function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory newQueuedStake) external;

31:     function deployVaults(VaultLib.Config[] calldata vaultConfigs, address implementation)

34:     function requestSlashing(SlasherLib.SlashRequest memory requestSlashing)

37:     function cancelSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;

38:     function finalizeSlashing(SlasherLib.QueuedSlashing memory queuedSlashing) external;

39:     function allowlistVaultImpl(address vaultImpl) external;

44:     function getOperatorVaults(address operator) external view returns (address[] memory vaults);

45:     function fetchVaultsStakedInDSS(address operator, IDSS dss) external view returns (address[] memory vaults);

46:     function extSloads(bytes32[] calldata slots) external view returns (bytes32[] memory res);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ICore.sol)

```solidity
File: src/interfaces/IDSS.sol

10:     function registrationHook(address operator, bytes memory extraData) external;

11:     function unregistrationHook(address operator, bytes memory extraData) external;

13:     function requestUpdateStakeHook(address operator, Operator.StakeUpdateRequest memory newStake) external;

14:     function cancelUpdateStakeHook(address operator, address vault) external;

15:     function finishUpdateStakeHook(address operator) external;

16:     function requestSlashingHook(address operator, uint256[] memory slashingPercentagesWad) external;

17:     function cancelSlashingHook(address operator) external;

18:     function finishSlashingHook(address operator) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IDSS.sol)

```solidity
File: src/interfaces/IKarakBaseVault.sol

17:     function slashAssets(uint256 slashPercentageWad, address slashingHandler)

27:     function totalAssets() external view returns (uint256);

29:     function name() external view returns (string memory);

31:     function symbol() external view returns (string memory);

33:     function decimals() external view returns (uint8);

35:     function vaultConfig() external pure returns (VaultLib.Config memory);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IKarakBaseVault.sol)

```solidity
File: src/interfaces/INativeNode.sol

9:     function initialize(address owner, address nodeOwner) external;

15:     function withdraw(address to, uint256 weiAmount) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeNode.sol)

```solidity
File: src/interfaces/INativeVault.sol

14:     function changeNodeImplementation(address newNodeImplementation) external;

23:     function startSnapshot(bool revertIfNoBalanceChange) external;

49:     function validateExpiredSnapshot(address nodeOwner) external;

54:     function startWithdrawal(address to, uint256 weiAmount) external returns (bytes32 withdrawalKey);

58:     function finishWithdrawal(bytes32 withdrawalKey) external;

62:     function pauseNode(INativeNode node, uint256 map) external;

66:     function unpauseNode(INativeNode node, uint256 map) external;

70:     function withdrawableWei(address nodeOwner) external view returns (uint256);

72:     function getNextWithdrawNonce(address nodeOwner) external view returns (uint256);

74:     function isWithdrawalPending(address nodeOwner, uint256 withdrawNonce) external view returns (bool);

76:     function getQueuedWithdrawal(address nodeOwner, uint256 withdrawNonce)

81:     function getNodeOwner(address node) external view returns (address);

83:     function getValidatorDetails(bytes32 pubKey, address nodeOwner)

88:     function lastSnapshotTimestamp(address nodeOwner) external view returns (uint64);

90:     function currentSnapshotTimestamp(address nodeOwner) external view returns (uint64);

92:     function currentSnapshot(address nodeOwner) external view returns (NativeVaultLib.Snapshot memory);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeVault.sol)

```solidity
File: src/interfaces/ISlashingHandler.sol

7:     function initialize(address owner, IERC20[] calldata _supportedAssets) external;

8:     function handleSlashing(IERC20 token, uint256 amount) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ISlashingHandler.sol)

```solidity
File: src/interfaces/IVault.sol

9:     function deposit(uint256 assets, address to) external returns (uint256 shares);

10:     function deposit(uint256 assets, address to, uint256 minSharesOut) external returns (uint256 shares);

11:     function mint(uint256 shares, address to) external returns (uint256 assets);

12:     function startRedeem(uint256 shares, address withdrawer) external returns (bytes32 withdrawalKey);

13:     function finishRedeem(bytes32 withdrawalKey) external;

18:     function getNextWithdrawNonce(address staker) external view returns (uint256);

19:     function isWithdrawalPending(address staker, uint256 _withdrawNonce) external view returns (bool);

20:     function getQueuedWithdrawal(address staker, uint256 _withdrawNonce)

24:     function extSloads(bytes32[] calldata slots) external view returns (bytes32[] memory res);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IVault.sol)

```solidity
File: src/utils/CommonUtils.sol

7:     function sortArr(address[] memory arr) private pure {

12:     function sort(address[] memory arr, uint256 left, uint256 right) private pure {

29:     function swap(address[] memory arr, uint256 left, uint256 right) private pure {

39:     function hasDuplicates(address[] memory arr) external pure returns (bool) {

48:     function isSmartContract(address addr) external view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

```solidity
File: src/utils/ExtSloads.sol

9:     function extSloads(bytes32[] calldata slots) public view virtual returns (bytes32[] memory res) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/ExtSloads.sol)

### <a name="NC-13"></a>[NC-13] Change int to int256

Throughout the code base, some variables are declared as `int`. To favor explicitness, consider changing all instances of `int` to `int256`

*Instances (1)*:

```solidity
File: src/interfaces/Constants.sol

36:     uint8 internal constant PAUSE_VAULT_MINT = 2;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

### <a name="NC-14"></a>[NC-14] Lack of checks in setters

Be it sanity checks (like checks against `0`-values) or initial setting checks: it's best for Setter functions to have them

*Instances (4)*:

```solidity
File: src/Core.sol

85:     function allowlistAssets(address[] memory assets, address[] memory slashingHandlers)
            external
            onlyRolesOrOwner(Constants.MANAGER_ROLE)
        {
            _self().allowlistAssets(assets, slashingHandlers);
            emit AllowlistedAssets(assets);

274:     function setGasValues(uint32 _hookCallGasLimit, uint32 _hookGasBuffer, uint32 _supportsInterfaceGasLimit)
             external
             onlyRolesOrOwner(Constants.MANAGER_ROLE)
         {
             _self().updateGasValues(_hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/Vault.sol

193:     function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
             external
             onlyCore
             returns (uint256 transferAmount)
         {
             transferAmount = Math.min(totalAssets(), totalAssetsToSlash);
     
             // Approve to the handler and then call the handler which will draw the funds
             SafeTransferLib.safeApproveWithRetry(asset(), slashingHandler, transferAmount);
             ISlashingHandler(slashingHandler).handleSlashing(IERC20(asset()), transferAmount);
     
             emit Slashed(transferAmount);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

56:     function updateGasValues(
            Storage storage self,
            uint32 _hookCallGasLimit,
            uint32 _supportsInterfaceGasLimit,
            uint32 _hookGasBuffer
        ) internal {
            self.hookCallGasLimit = _hookCallGasLimit;
            self.hookGasBuffer = _hookGasBuffer;
            self.supportsInterfaceGasLimit = _supportsInterfaceGasLimit;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

### <a name="NC-15"></a>[NC-15] Missing Event for critical parameters change

Events help non-contract tools to track changes, and events prevent users from being surprised by changes.

*Instances (3)*:

```solidity
File: src/Core.sol

274:     function setGasValues(uint32 _hookCallGasLimit, uint32 _hookGasBuffer, uint32 _supportsInterfaceGasLimit)
             external
             onlyRolesOrOwner(Constants.MANAGER_ROLE)
         {
             _self().updateGasValues(_hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/entities/CoreLib.sol

67:     function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)
            external
        {
            if (assets.length != slashingHandlers.length) revert LengthsDontMatch();
            for (uint256 i = 0; i < assets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/SlasherLib.sol

174:     function setDSSMaxSlashablePercentageWad(
             CoreLib.Storage storage self,
             IDSS dss,
             uint256 dssMaxSlashablePercentageWad
         ) public {
             uint256 currentSlashablePercentageWad = self.dssMaxSlashablePercentageWad[dss];
             if (currentSlashablePercentageWad != 0) revert DSSAlreadyRegistered();
             if (dssMaxSlashablePercentageWad == 0) revert ZeroSlashPercentageWad();
             if (dssMaxSlashablePercentageWad > Constants.MAX_SLASHING_PERCENT_WAD) revert MaxSlashPercentageWadBreached();
             self.dssMaxSlashablePercentageWad[dss] = dssMaxSlashablePercentageWad;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="NC-16"></a>[NC-16] NatSpec is completely non-existent on functions that should have them

Public and external functions that aren't view or pure should have NatSpec comments

*Instances (15)*:

```solidity
File: src/SlashingHandler.sol

30:     function initialize(address owner, IERC20[] calldata _supportedAssets) external initializer {

38:     function addSlashableToken(IERC20 token) external onlyOwner {

42:     function handleSlashing(IERC20 token, uint256 amount) external {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

314:     function withdraw(uint256 assets, address to, address owner)

330:     function redeem(uint256 shares, address to, address owner)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

67:     function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)

118:     function deployVaults(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/Operator.sol

61:     function requestUpdateVaultStakeInDSS(

111:     function validateAndUpdateVaultStakeInDSS(CoreLib.Storage storage self, QueuedStakeUpdate memory queuedStakeUpdate)

150:     function registerOperatorToDSS(

181:     function unregisterOperatorFromDSS(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

94:     function requestSlashing(

126:     function finalizeSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

153:     function cancelSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

174:     function setDSSMaxSlashablePercentageWad(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="NC-17"></a>[NC-17] Incomplete NatSpec: `@param` is missing on actually documented functions

The following functions are missing `@param` NatSpec comments.

*Instances (6)*:

```solidity
File: src/Core.sol

82:     /// @notice Allows the manager to allowlist assets that then vaults can be created for with the asset as the underlying token.
        /// @dev If an asset that is already allowlisted is passed, it will be be set to allowlisted again.
        /// @param assets: The list of assets to allowlist
        function allowlistAssets(address[] memory assets, address[] memory slashingHandlers)

143:     /// @notice Allows anyone to finish the queued request for an operator to update assets delegated to a DSS
         /// @dev Only operator can finish their queued request valid only after a
         /// minimum delay of `Constants.MIN_STAKE_UPDATE_DELAY` after starting the request
         function finalizeUpdateVaultStakeInDSS(Operator.QueuedStakeUpdate memory queuedStake)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

108:     /// @notice Lets the owner start a snapshot for their NativeNode which is completed
         /// only when balance proofs are submitted for all active validators of the node.
         /// Reverts if there is a pending snapshot in progress or if there is no balance change
         /// from the last snapshot.
         function startSnapshot(bool revertIfNoBalanceChange)

332:     /// @notice Lets the owner or manager of the NativeVault pause NativeNode functions
         /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
         function pauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

338:     /// @notice Lets the owner or manager of the NativeVault unpause NativeNode functions
         /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
         function unpauseNode(INativeNode node, uint256 map) external onlyRolesOrOwner(Constants.MANAGER_ROLE) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

121:     /// @notice Starts a redeem process for a given amount of shares
         /// and transfers those shares from the user to the vault
         /// @param shares The amount of shares to redeem
         /// @return withdrawalKey The ID of the withdrawl. This is variable is shared across everyone's withdrawal request in the vault
         function startRedeem(uint256 shares, address beneficiary)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="NC-18"></a>[NC-18] Incomplete NatSpec: `@return` is missing on actually documented functions

The following functions are missing `@return` NatSpec comments.

*Instances (8)*:

```solidity
File: src/Core.sol

126:     /// @notice Allows operator to stake/unstake vault to a DSS
         /// @dev Only operator can update the stake of their vaults and
         /// logically, only 1 update request is allowed per vault until its completed or canceled
         /// @param vaultStakeUpdateRequest: stake update request with to stake/unstake, address of dss and address of vault
         function requestUpdateVaultStakeInDSS(Operator.StakeUpdateRequest memory vaultStakeUpdateRequest)
             external
             nonReentrant
             whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_STAKE_UPDATE)
             returns (Operator.QueuedStakeUpdate memory updatedStake)

218:     /// @notice Allows a slashing to be requested for a given operator+vault by a DSS
         /// @param slashingRequest: The request to slash the operator
         function requestSlashing(SlasherLib.SlashRequest calldata slashingRequest)
             external
             whenFunctionNotPaused(Constants.PAUSE_CORE_REQUEST_SLASHING)
             nonReentrant
             returns (SlasherLib.QueuedSlashing memory queuedSlashing)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

94:     /// @notice Deploys a new NativeNode for the caller
        function createNode()
            external
            nonReentrant
            whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_CREATE_NODE)
            returns (address)

225:     /// @notice Allows caller to start a withdrawal to withdraw ETH accrued on their NativeNode
         /// @param to: address to withdraw the funds to
         /// @param weiAmount: amount to be withdrawn in wei
         function startWithdrawal(address to, uint256 weiAmount)
             external
             nonReentrant
             nodeExists(msg.sender)
             whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_WITHDRAWAL)
             returns (bytes32 withdrawalKey)

296:     /// @notice Allows the owner to slash the vault with given amount
         /// @param totalAssetsToSlash: amount to slash in wei
         /// @param slashingHandler: address of the slash store
         function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
             external
             onlyOwner
             nonReentrant
             whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_SLASHER)
             returns (uint256 transferAmount)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

73:     /// @notice Deposits assets into the vault
        /// @dev checks if the amount is not 0 then passes to Solady's implementation
        /// @dev if you want slippage protection use the overload of this function with minSharesOut
        /// @param assets The amount of assets to deposit
        /// @param to The address to mint the shares to
        function deposit(uint256 assets, address to)
            public
            override(ERC4626, IVault)
            whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT)
            nonReentrant
            returns (uint256 shares)

89:     /// @notice Deposits assets into the vault with a minimum amount of shares to mint
        /// @dev This is to prevent any malicious frontrunning in ERC4626
        /// @param assets The amount of assets to deposit
        /// @param to The address to mint the shares to
        /// @param minSharesOut The minimum amount of shares to mint else revert
        function deposit(uint256 assets, address to, uint256 minSharesOut)
            external
            nonReentrant
            whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT_SLIPPAGE)
            returns (uint256 shares)

190:     /// @notice Slash the assets in the vault by a certain amount portion to a slashing handler contract
         /// @param totalAssetsToSlash The amount of assets to slash in absolute amounts
         /// @param slashingHandler The address of the slashing handler
         function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
             external
             onlyCore
             returns (uint256 transferAmount)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="NC-19"></a>[NC-19] Use a `modifier` instead of a `require/if` statement for a special `msg.sender` actor

If a function is supposed to be access-controlled, a `modifier` should be used instead of a `require/if` statement for more readability.

*Instances (2)*:

```solidity
File: src/NativeVault.sol

118:         _startSnapshot(_state().ownerToNode[msg.sender], revertIfNoBalanceChange, msg.sender);

238:         if (weiAmount > withdrawableWei(msg.sender) - self.nodeOwnerToWithdrawAmount[msg.sender]) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

### <a name="NC-20"></a>[NC-20] Constant state variables defined more than once

Rather than redefining state variable constant, consider using a library to store all constants as this will prevent data redundancy

*Instances (9)*:

```solidity
File: src/Core.sol

36:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

29:     bytes32 internal constant STATE_SLOT = 0x0e977c4f52771ae90b9a885786536a06e14de7815be95b6ed56cdea86f6fc300;

32:     bytes32 internal constant CONFIG_SLOT = 0xb6497276931248fe2cc1dc985a2850cccba81036959c83b89ec93582a1e00900;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

10:     string public constant VERSION = "2.0.0";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

17:     string public constant VERSION = "2.0.0";

20:     bytes32 internal constant CONFIG_SLOT = 0x661dfff6e6cdad10b44554a6ab58129a188fa46a74caae866b07c414cb424500;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

32:     string public constant VERSION = "2.0.0";

35:     bytes32 internal constant STATE_SLOT = 0x5d654853f9da5c5c659891e7f7fc564033f2724663c32c175f373318f8e1e700;

37:     bytes32 internal constant CONFIG_SLOT = 0x22a8eb0cbcfbbbc874f794ecd9efdfeeecb09fe60d66cf9327db2eac8a1ff000;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="NC-21"></a>[NC-21] Consider using named mappings

Consider moving to solidity version 0.8.18 or later, and using [named mappings](https://ethereum.stackexchange.com/questions/51629/how-to-name-the-arguments-in-mapping/145555#145555) to make it easier to understand the purpose of each mapping

*Instances (3)*:

```solidity
File: src/entities/NativeVaultLib.sol

59:         mapping(bytes32 => ValidatorDetails) validatorPubkeyHashToDetails;

82:         mapping(address => address) nodeToOwner;

84:         mapping(address => NativeNode) ownerToNode;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

### <a name="NC-22"></a>[NC-22] `address`s shouldn't be hard-coded

It is often better to declare `address`es as `immutable`, and assign them via constructor arguments. This allows the code to remain the same across deployments on different networks, and avoids recompilation when addresses need to change.

*Instances (2)*:

```solidity
File: src/interfaces/Constants.sol

29:     address internal constant BEACON_ROOTS_ADDRESS = 0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02;

68:     address internal constant DEAD_BEEF = 0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

### <a name="NC-23"></a>[NC-23] Numeric values having to do with time should use time units for readability

There are [units](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#time-units) for seconds, minutes, hours, days, and weeks, and since they're defined, they should be used

*Instances (1)*:

```solidity
File: src/entities/BeaconProofsLib.sol

18:     uint256 internal constant EXIT_EPOCH_IDX = 6;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

### <a name="NC-24"></a>[NC-24] Owner can renounce while system is paused

The contract owner or single user with a role is not prevented from renouncing the role/ownership while the contract is paused, which would cause any user assets stored in the protocol, to be locked indefinitely.

*Instances (4)*:

```solidity
File: src/NativeNode.sol

51:     function pause(uint256 map) external onlyOwner {

57:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

322:     function pause(uint256 map) external onlyOwner {

328:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

### <a name="NC-25"></a>[NC-25] Adding a `return` statement when the function defines a named return variable, is redundant

*Instances (7)*:

```solidity
File: src/Core.sol

326:     /// @notice Returns the vaults for a given operator
         /// @param operator: The address of the operator to get the vaults for
         /// @return vaults {address[]} The addresses of the vaults attached to the operator
         function getOperatorVaults(address operator) external view returns (address[] memory vaults) {
             return _self().operatorState[operator].getVaults();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

225:     /// @notice Allows caller to start a withdrawal to withdraw ETH accrued on their NativeNode
         /// @param to: address to withdraw the funds to
         /// @param weiAmount: amount to be withdrawn in wei
         function startWithdrawal(address to, uint256 weiAmount)
             external
             nonReentrant
             nodeExists(msg.sender)
             whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_START_WITHDRAWAL)
             returns (bytes32 withdrawalKey)
         {
             // TODO: make more recent snapshot compulsory
             NativeVaultLib.Storage storage self = _state();
             NativeVaultLib.NativeNode storage node = self.ownerToNode[msg.sender];
             if (weiAmount > withdrawableWei(msg.sender) - self.nodeOwnerToWithdrawAmount[msg.sender]) {
                 revert WithdrawMoreThanMax();
             }
             self.nodeOwnerToWithdrawAmount[msg.sender] += weiAmount;
     
             if (block.timestamp >= node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY) {
                 revert SnapshotExpired();
             }
     
             withdrawalKey = NativeVaultLib.calculateWithdrawKey(msg.sender, self.nodeOwnerToWithdrawNonce[msg.sender]++);
             address nodeOwner = msg.sender;
     
             self.withdrawalMap[withdrawalKey].to = to;
             self.withdrawalMap[withdrawalKey].assets = weiAmount;
             self.withdrawalMap[withdrawalKey].nodeOwner = nodeOwner;
             self.withdrawalMap[withdrawalKey].start = uint96(block.timestamp);
     
             emit StartedWithdraw(nodeOwner, _config().operator, withdrawalKey, weiAmount, to);
     
             return withdrawalKey;

296:     /// @notice Allows the owner to slash the vault with given amount
         /// @param totalAssetsToSlash: amount to slash in wei
         /// @param slashingHandler: address of the slash store
         function slashAssets(uint256 totalAssetsToSlash, address slashingHandler)
             external
             onlyOwner
             nonReentrant
             whenFunctionNotPaused(Constants.PAUSE_NATIVEVAULT_SLASHER)
             returns (uint256 transferAmount)
         {
             NativeVaultLib.Storage storage self = _state();
     
             if (slashingHandler != self.slashStore) revert NotSlashStore();
     
             // avoid negative totalAssets if slashing amount is greater than totalAssets
             if (totalAssetsToSlash > self.totalAssets) {
                 totalAssetsToSlash = self.totalAssets;
             }
     
             self.totalAssets -= totalAssetsToSlash;
             emit Slashed(totalAssetsToSlash);
             return totalAssetsToSlash;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

73:     /// @notice Deposits assets into the vault
        /// @dev checks if the amount is not 0 then passes to Solady's implementation
        /// @dev if you want slippage protection use the overload of this function with minSharesOut
        /// @param assets The amount of assets to deposit
        /// @param to The address to mint the shares to
        function deposit(uint256 assets, address to)
            public
            override(ERC4626, IVault)
            whenFunctionNotPaused(Constants.PAUSE_VAULT_DEPOSIT)
            nonReentrant
            returns (uint256 shares)
        {
            if (assets == 0) revert ZeroAmount();
            return super.deposit(assets, to);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

54:     function fromLittleEndianUint64(bytes32 lenum) internal pure returns (uint64 n) {
            n = uint64(uint256(lenum >> 192));
            return (n >> 56) | ((0x00FF000000000000 & n) >> 40) | ((0x0000FF0000000000 & n) >> 24)

109:     function validateBalance(bytes32 balanceRoot, uint40 validatorIndex, BalanceProof calldata proof)
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
             return fromLittleEndianUint64(bytes32((uint256(proof.balanceRoot) << bitShiftAmount))) * 1 gwei;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/NativeVaultLib.sol

110:     function validateSnapshotProof(
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

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

### <a name="NC-26"></a>[NC-26] Take advantage of Custom Error's return value property

An important feature of Custom Error is that values such as address, tokenID, msg.value can be written inside the () sign, this kind of approach provides a serious advantage in debugging and examining the revert details of dapps such as tenderly.

*Instances (95)*:

```solidity
File: src/Core.sol

104:         if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();

174:         if (newVaultImpl == address(0)) revert ZeroAddress();

175:         if (newVaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();

185:         if (!self.isVaultImplAllowlisted(newVaultImpl)) revert VaultImplNotAllowlisted();

188:         if (self.vaultToImplMap[vault] == address(0)) revert VaultNotAChildVault();

212:         if (vaultImpl == address(0)) revert ZeroAddress();

213:         if (vaultImpl == Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG) revert ReservedAddress();

264:         if (!address(dss).isSmartContract()) revert NotSmartContract();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

57:         if (_depositToken != Constants.DEAD_BEEF) revert DepositTokenNotAccepted();

62:         if (manager == address(0) || slashStore == address(0) || nodeImplementation == address(0)) revert ZeroAddress();

88:         if (newNodeImplementation == address(0)) revert ZeroAddress();

140:         if (node.currentSnapshotTimestamp == 0) revert NoActiveSnapshot();

148:             if (validatorDetails.status != NativeVaultLib.ValidatorStatus.ACTIVE) revert InactiveValidator();

150:                 revert ValidatorAlreadyProved();

182:             revert BeaconTimestampIsCurrent();

187:         ) revert BeaconTimestampTooOld();

219:             revert SnapshotNotExpired();

239:             revert WithdrawMoreThanMax();

244:             revert SnapshotExpired();

271:         if (startedWithdrawal.start == 0) revert WithdrawalNotFound();

273:             revert MinWithdrawDelayNotPassed();

308:         if (slashingHandler != self.slashStore) revert NotSlashStore();

417:             revert BeaconRootFetchError();

447:         if (node.currentSnapshotTimestamp != 0) revert PendingIncompleteSnapshot();

457:         if (revertIfNoBalanceChange && nodeBalanceWei == 0) revert NoBalanceUpdateToSnapshot();

495:         if (assets + self.totalAssets > maxDeposit(_of)) revert DepositMoreThanMax();

526:         if (_state().ownerToNode[owner].nodeAddress == address(0)) revert NotNodeOwner();

537:         revert NotImplemented();

546:         revert NotImplemented();

555:         revert NotImplemented();

564:         revert NotImplemented();

574:         revert NotImplemented();

584:         revert NotImplemented();

592:         revert NotImplemented();

600:         revert NotImplemented();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashingHandler.sol

43:         if (amount == 0) revert ZeroAmount();

44:         if (!_config().supportedAssets[token]) revert UnsupportedAsset();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

85:         if (assets == 0) revert ZeroAmount();

100:         if (assets == 0) revert ZeroAmount();

102:         if (shares < minSharesOut) revert NotEnoughShares();

117:         if (shares == 0) revert ZeroShares();

131:         if (shares == 0) revert ZeroShares();

132:         if (beneficiary == address(0)) revert ZeroAddress();

167:         if (shares > maxRedeem(address(this))) revert RedeemMoreThanMax();

327:         revert NotImplemented();

343:         revert NotImplemented();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

65:         if (beaconStateRootProof.proof.length != 32 * (BEACON_BLOCK_HEADER_HEIGHT)) revert InvalidBeaconStateProof();

70:         ) revert InvalidBeaconStateProof();

79:         if (validatorFields.length != NUM_FIELDS) revert InvalidValidatorFields();

88:             revert InvalidValidatorFieldsProof();

94:             revert InvalidBalanceRootProof();

106:         ) revert InvalidBalanceRootProof();

114:         if (proof.proof.length != 32 * (BALANCE_HEIGHT + 1)) revert InvalidBalanceProof();

125:         ) revert InvalidBalanceProof();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

49:             revert ZeroAddress();

70:         if (assets.length != slashingHandlers.length) revert LengthsDontMatch();

72:             if (slashingHandlers[i] == address(0) || assets[i] == address(0)) revert ZeroAddress();

82:             revert VaultImplNotAllowlisted();

85:             if (self.assetSlashingHandlers[vaultConfigs[i].asset] == address(0)) revert AssetNotAllowlisted();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/HookLib.sol

55:         if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

88:             revert NotEnoughGas();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/NativeVaultLib.sol

157:         if (validatorDetails.status != NativeVaultLib.ValidatorStatus.INACTIVE) revert ValidatorAlreadyActive();

159:             revert ValidatorExiting();

166:             revert WithdrawalCredentialsMismatchWithNode();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

44:         if (vault == IKarakBaseVault(address(0))) revert ZeroAddress();

45:         if (operatorState.vaults.length() == Constants.MAX_VAULTS_PER_OPERATOR) revert MaxVaultCapacityReached();

57:         if (operatorState.pendingStakeUpdates[stakeUpdate.vault] != bytes32(0)) revert PendingStakeUpdateRequest();

58:         if (!operatorState.vaults.contains(stakeUpdate.vault)) revert VaultNotAChildVault();

94:             revert OperatorStakeUpdateDelayNotPassed();

99:             revert InvalidQueuedStakeUpdateInput();

144:         if (!self.isDSSRegistered(dss)) revert DSSNotRegistered();

146:             revert OperatorNotValidatingForDSS();

157:         if (isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorAlreadyRegisteredToDSS();

158:         if (operatorState.dssMap.length() == Constants.MAX_DSS_PER_OPERATOR) revert MaxDSSCapacityReached();

190:         if (vaults.length != 0) revert AllVaultsNotUnstakedFromDSS();

191:         if (!isOperatorRegisteredToDSS(self, operator, dss)) revert OperatorNotValidatingForDSS();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

45:         if (paused()) revert EnforcedPause();

69:         if ((self._paused & map) != self._paused) revert AttemptedUnpauseWhilePausing();

76:         if (self._paused & map != map) revert AttemptedPauseWhileUnpausing();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

47:         if (slashingRequest.vaults.hasDuplicates()) revert DuplicateSlashingVaults();

52:                 revert VaultNotStakedToDSS();

54:             if (slashingRequest.slashPercentagesWad[i] == 0) revert ZeroSlashPercentageWad();

55:             if (slashingRequest.slashPercentagesWad[i] > maxSlashPercentageWad) revert MaxSlashPercentageWadBreached();

65:             revert SlashingCooldownNotPassed();

68:         if (slashingRequest.slashPercentagesWad.length != slashingRequest.vaults.length) revert LengthsDontMatch();

71:             revert MaxSlashableVaultsPerRequestBreached();

74:         if (slashingRequest.vaults.length == 0) revert EmptyArray();

128:         if (!self.slashingRequests[slashRoot]) revert InvalidSlashingParams();

130:             revert MinSlashingDelayNotPassed();

155:         if (!self.slashingRequests[slashRoot]) revert InvalidSlashingParams();

180:         if (currentSlashablePercentageWad != 0) revert DSSAlreadyRegistered();

181:         if (dssMaxSlashablePercentageWad == 0) revert ZeroSlashPercentageWad();

182:         if (dssMaxSlashablePercentageWad > Constants.MAX_SLASHING_PERCENT_WAD) revert MaxSlashPercentageWadBreached();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

32:             revert WithdrawalNotFound();

36:             revert MinWithdrawDelayNotPassed();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

### <a name="NC-27"></a>[NC-27] Contract does not follow the Solidity style guide's suggested layout ordering

The [style guide](https://docs.soliditylang.org/en/v0.8.16/style-guide.html#order-of-layout) says that, within a contract, the ordering should be:

1) Type declarations
2) State variables
3) Events
4) Modifiers
5) Functions

However, the contract(s) below do not follow this ordering

*Instances (3)*:

```solidity
File: src/NativeVault.sol

1: 
   Current order:
   UsingForDirective.NativeVaultLib.Storage
   VariableDeclaration.STATE_SLOT
   VariableDeclaration.CONFIG_SLOT
   FunctionDefinition.constructor
   FunctionDefinition.initialize
   FunctionDefinition.changeNodeImplementation
   FunctionDefinition.createNode
   FunctionDefinition.startSnapshot
   FunctionDefinition.validateSnapshotProofs
   FunctionDefinition.validateWithdrawalCredentials
   FunctionDefinition.validateExpiredSnapshot
   FunctionDefinition.startWithdrawal
   FunctionDefinition.finishWithdrawal
   FunctionDefinition.slashAssets
   FunctionDefinition.pause
   FunctionDefinition.unpause
   FunctionDefinition.pauseNode
   FunctionDefinition.unpauseNode
   FunctionDefinition.withdrawableWei
   FunctionDefinition.getNextWithdrawNonce
   FunctionDefinition.isWithdrawalPending
   FunctionDefinition.getQueuedWithdrawal
   FunctionDefinition.getNodeOwner
   FunctionDefinition.getValidatorDetails
   FunctionDefinition.lastSnapshotTimestamp
   FunctionDefinition.currentSnapshotTimestamp
   FunctionDefinition.currentSnapshot
   FunctionDefinition._state
   FunctionDefinition._config
   FunctionDefinition._getParentBlockRoot
   FunctionDefinition._transferToSlashStore
   FunctionDefinition._startSnapshot
   FunctionDefinition._updateSnapshot
   FunctionDefinition._increaseBalance
   FunctionDefinition._decreaseBalance
   FunctionDefinition._updateBalance
   ModifierDefinition.nodeExists
   FunctionDefinition.transfer
   FunctionDefinition.transferFrom
   FunctionDefinition.deposit
   FunctionDefinition.mint
   FunctionDefinition.withdraw
   FunctionDefinition.redeem
   FunctionDefinition.previewDeposit
   FunctionDefinition.previewRedeem
   FunctionDefinition.totalAssets
   FunctionDefinition.decimals
   FunctionDefinition.asset
   FunctionDefinition.name
   FunctionDefinition.symbol
   FunctionDefinition.implementation
   FunctionDefinition.vaultConfig
   
   Suggested order:
   UsingForDirective.NativeVaultLib.Storage
   VariableDeclaration.STATE_SLOT
   VariableDeclaration.CONFIG_SLOT
   ModifierDefinition.nodeExists
   FunctionDefinition.constructor
   FunctionDefinition.initialize
   FunctionDefinition.changeNodeImplementation
   FunctionDefinition.createNode
   FunctionDefinition.startSnapshot
   FunctionDefinition.validateSnapshotProofs
   FunctionDefinition.validateWithdrawalCredentials
   FunctionDefinition.validateExpiredSnapshot
   FunctionDefinition.startWithdrawal
   FunctionDefinition.finishWithdrawal
   FunctionDefinition.slashAssets
   FunctionDefinition.pause
   FunctionDefinition.unpause
   FunctionDefinition.pauseNode
   FunctionDefinition.unpauseNode
   FunctionDefinition.withdrawableWei
   FunctionDefinition.getNextWithdrawNonce
   FunctionDefinition.isWithdrawalPending
   FunctionDefinition.getQueuedWithdrawal
   FunctionDefinition.getNodeOwner
   FunctionDefinition.getValidatorDetails
   FunctionDefinition.lastSnapshotTimestamp
   FunctionDefinition.currentSnapshotTimestamp
   FunctionDefinition.currentSnapshot
   FunctionDefinition._state
   FunctionDefinition._config
   FunctionDefinition._getParentBlockRoot
   FunctionDefinition._transferToSlashStore
   FunctionDefinition._startSnapshot
   FunctionDefinition._updateSnapshot
   FunctionDefinition._increaseBalance
   FunctionDefinition._decreaseBalance
   FunctionDefinition._updateBalance
   FunctionDefinition.transfer
   FunctionDefinition.transferFrom
   FunctionDefinition.deposit
   FunctionDefinition.mint
   FunctionDefinition.withdraw
   FunctionDefinition.redeem
   FunctionDefinition.previewDeposit
   FunctionDefinition.previewRedeem
   FunctionDefinition.totalAssets
   FunctionDefinition.decimals
   FunctionDefinition.asset
   FunctionDefinition.name
   FunctionDefinition.symbol
   FunctionDefinition.implementation
   FunctionDefinition.vaultConfig

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

1: 
   Current order:
   UsingForDirective.VaultLib.State
   VariableDeclaration.VERSION
   VariableDeclaration.STATE_SLOT
   VariableDeclaration.CONFIG_SLOT
   FunctionDefinition.constructor
   FunctionDefinition.initialize
   FunctionDefinition.deposit
   FunctionDefinition.deposit
   FunctionDefinition.mint
   FunctionDefinition.startRedeem
   FunctionDefinition.finishRedeem
   FunctionDefinition.slashAssets
   FunctionDefinition.pause
   FunctionDefinition.unpause
   FunctionDefinition.name
   FunctionDefinition.symbol
   FunctionDefinition.asset
   FunctionDefinition.vaultConfig
   FunctionDefinition.getNextWithdrawNonce
   FunctionDefinition.isWithdrawalPending
   FunctionDefinition.getQueuedWithdrawal
   FunctionDefinition.totalAssets
   FunctionDefinition.owner
   FunctionDefinition.decimals
   FunctionDefinition.extSloads
   FunctionDefinition._state
   FunctionDefinition._config
   FunctionDefinition._storage
   FunctionDefinition._underlyingDecimals
   ModifierDefinition.onlyCore
   FunctionDefinition.withdraw
   FunctionDefinition.redeem
   
   Suggested order:
   UsingForDirective.VaultLib.State
   VariableDeclaration.VERSION
   VariableDeclaration.STATE_SLOT
   VariableDeclaration.CONFIG_SLOT
   ModifierDefinition.onlyCore
   FunctionDefinition.constructor
   FunctionDefinition.initialize
   FunctionDefinition.deposit
   FunctionDefinition.deposit
   FunctionDefinition.mint
   FunctionDefinition.startRedeem
   FunctionDefinition.finishRedeem
   FunctionDefinition.slashAssets
   FunctionDefinition.pause
   FunctionDefinition.unpause
   FunctionDefinition.name
   FunctionDefinition.symbol
   FunctionDefinition.asset
   FunctionDefinition.vaultConfig
   FunctionDefinition.getNextWithdrawNonce
   FunctionDefinition.isWithdrawalPending
   FunctionDefinition.getQueuedWithdrawal
   FunctionDefinition.totalAssets
   FunctionDefinition.owner
   FunctionDefinition.decimals
   FunctionDefinition.extSloads
   FunctionDefinition._state
   FunctionDefinition._config
   FunctionDefinition._storage
   FunctionDefinition._underlyingDecimals
   FunctionDefinition.withdraw
   FunctionDefinition.redeem

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/Pauser.sol

1: 
   Current order:
   StructDefinition.PauserStorage
   VariableDeclaration.PAUSER_STORAGE_SLOT
   FunctionDefinition._getPauserStorage
   EventDefinition.Paused
   EventDefinition.Unpaused
   ErrorDefinition.EnforcedPause
   ErrorDefinition.EnforcedPauseFunction
   ErrorDefinition.AttemptedUnpauseWhilePausing
   ErrorDefinition.AttemptedPauseWhileUnpausing
   FunctionDefinition.__Pauser_init
   FunctionDefinition.__Pauser_init_unchained
   ModifierDefinition.whenNotPaused
   ModifierDefinition.whenFunctionNotPaused
   FunctionDefinition.paused
   FunctionDefinition.paused
   FunctionDefinition.pausedMap
   FunctionDefinition._pause
   FunctionDefinition._unpause
   
   Suggested order:
   VariableDeclaration.PAUSER_STORAGE_SLOT
   StructDefinition.PauserStorage
   ErrorDefinition.EnforcedPause
   ErrorDefinition.EnforcedPauseFunction
   ErrorDefinition.AttemptedUnpauseWhilePausing
   ErrorDefinition.AttemptedPauseWhileUnpausing
   EventDefinition.Paused
   EventDefinition.Unpaused
   ModifierDefinition.whenNotPaused
   ModifierDefinition.whenFunctionNotPaused
   FunctionDefinition._getPauserStorage
   FunctionDefinition.__Pauser_init
   FunctionDefinition.__Pauser_init_unchained
   FunctionDefinition.paused
   FunctionDefinition.paused
   FunctionDefinition.pausedMap
   FunctionDefinition._pause
   FunctionDefinition._unpause

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

### <a name="NC-28"></a>[NC-28] Use Underscores for Number Literals (add an underscore every 3 digits)

*Instances (3)*:

```solidity
File: src/entities/MerkleProofs.sol

119:                     if iszero(staticcall(sub(gas(), 2000), 2, 0x00, 0x40, computedHash, 0x20)) { revert(0, 0) }

127:                     if iszero(staticcall(sub(gas(), 2000), 2, 0x00, 0x40, computedHash, 0x20)) { revert(0, 0) }

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/interfaces/Constants.sol

27:     uint256 internal constant BEACON_ROOTS_RING_BUFFER = 8191;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

### <a name="NC-29"></a>[NC-29] Internal and private variables and functions names should begin with an underscore

According to the Solidity Style Guide, Non-`external` variable and function names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (50)*:

```solidity
File: src/NativeNode.sol

18:     address nodeOwner;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

54:     function fromLittleEndianUint64(bytes32 lenum) internal pure returns (uint64 n) {

61:     function validateBeaconStateRootProof(bytes32 beaconBlockRoot, BeaconStateRootProof calldata beaconStateRootProof)

73:     function validateValidatorProof(

92:     function validateBalanceContainer(bytes32 beaconBlockRoot, BalanceContainer calldata proof) internal view {

109:     function validateBalance(bytes32 balanceRoot, uint40 validatorIndex, BalanceProof calldata proof)

132:     function getEffectiveBalanceWei(bytes32[] memory validatorFields) internal pure returns (uint256) {

140:     function getExitEpoch(bytes32[] memory validatorFields) internal pure returns (uint64) {

144:     function getWithdrawalCredentials(bytes32[] memory validatorFields) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

40:     function init(

56:     function updateGasValues(

89:     function createVault(

149:     function cloneVault(bytes32 salt) internal returns (IKarakBaseVault) {

153:     function allowlistVaultImpl(Storage storage self, address implementation) internal {

157:     function isVaultImplAllowlisted(Storage storage self, address implementation) internal view returns (bool) {

161:     function isDSSRegistered(Storage storage self, IDSS dss) internal view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

15:     function operatorStateMappingSlot() internal pure returns (bytes32) {

19:     function operatorStateSlot(address operator) internal pure returns (bytes32) {

23:     function pendingStakeUpdateMappingSlot(address operator) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/HookLib.sol

16:     function performLowLevelCallAndLimitReturnData(address target, bytes memory data, uint256 gasLimit)

48:     function callHook(

78:     function callHookIfInterfaceImplemented(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

29:     function verifyInclusionKeccak(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

48:     function processInclusionProofKeccak(bytes memory proof, bytes32 leaf, uint256 index)

85:     function verifyInclusionSha256(bytes memory proof, bytes32 root, bytes32 leaf, uint256 index)

103:     function processInclusionProofSha256(bytes memory proof, bytes32 leaf, uint256 index)

141:     function merkleizeSha256(bytes32[] memory leaves) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

93:     function deployNode(Storage storage self, VaultLib.Config storage config, address owner)

106:     function calculateWithdrawKey(address nodeOwner, uint256 nodeOwnerNonce) internal pure returns (bytes32) {

110:     function validateSnapshotProof(

146:     function validateWithdrawalCredentials(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

39:     function getVaults(State storage operatorState) internal view returns (address[] memory) {

43:     function addVault(State storage operatorState, IKarakBaseVault vault) internal {

49:     function calculateRoot(QueuedStakeUpdate memory newStake) internal pure returns (bytes32) {

53:     function validateStakeUpdateRequest(State storage operatorState, StakeUpdateRequest memory stakeUpdate)

89:     function validateQueuedStakeUpdate(State storage operatorState, QueuedStakeUpdate memory queuedStakeUpdate)

103:     function updateVaultStakeInDSS(State storage operatorState, address vault, IDSS dss, bool toStake) internal {

135:     function isOperatorRegisteredToDSS(CoreLib.Storage storage self, address operator, IDSS dss)

143:     function checkIfOperatorIsRegInRegDSS(CoreLib.Storage storage self, address operator, IDSS dss) internal view {

209:     function getDSSsOperatorIsRegisteredTo(CoreLib.Storage storage self, address operator)

217:     function isVaultStakeToDSS(State storage operatorState, IDSS dss, address vault) internal view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

38:     function calculateRoot(QueuedSlashing memory queuedSlashing) internal pure returns (bytes32 root) {

42:     function validateVaultsAndSlashPercentages(

59:     function validateRequestSlashingParams(CoreLib.Storage storage self, SlashRequest memory slashingRequest, IDSS dss)

79:     function fetchEarmarkedStakes(SlashRequest memory slashingMetadata)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

24:     function validateQueuedWithdrawal(State storage self, bytes32 withdrawalKey)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

```solidity
File: src/entities/Withdraw.sol

12:     function calculateWithdrawKey(address staker, uint256 stakerNonce) internal pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Withdraw.sol)

```solidity
File: src/utils/CommonUtils.sol

7:     function sortArr(address[] memory arr) private pure {

12:     function sort(address[] memory arr, uint256 left, uint256 right) private pure {

29:     function swap(address[] memory arr, uint256 left, uint256 right) private pure {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="NC-30"></a>[NC-30] Event is missing `indexed` fields

Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (39)*:

```solidity
File: src/entities/Pauser.sol

24:     event Paused(address account, uint256 map);

26:     event Unpaused(address account, uint256 map);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/interfaces/Events.sol

7: event StartedRedeem(address staker, address operator, uint256 shares, bytes32 withdrawKey, uint256 assets);

9: event FinishedRedeem(

13: event CanceledRedeem(address staker, address operator, uint256 shares, bytes32 withdrawRoot);

15: event NewVault(address vault, address implementation);

17: event DeployedVault(address operator, address vault, address asset);

19: event AddedVault(address operator, address vault, address vaultImplementation);

21: event UpgradedVault(address implementation, address vault);

23: event UpgradedAllVaults(address implementation);

25: event AllowlistedAssets(address[] assets);

27: event RegisteredOperatorToDSS(address operator, address dss);

29: event UnregisteredOperatorToDSS(address operator, address dss);

31: event RequestedSlashing(address dss, SlasherLib.SlashRequest requestSlashing);

33: event CancelledSlashing(address canceller, SlasherLib.QueuedSlashing queuedSlashing);

35: event Slashed(uint256 assets);

37: event FinalizedSlashing(address finisher, SlasherLib.QueuedSlashing queuedSlashing);

39: event RequestedStakeUpdate(address operator, Operator.StakeUpdateRequest updateRequest);

41: event CanceledStakeUpdate(address operator, bytes32 stakeHash);

43: event FinishedStakeUpdate(Operator.QueuedStakeUpdate updateRequest);

45: event HookCallFailed(bytes32 returnData);

47: event HookCallSucceeded(bytes32 returnData);

53: event StartedWithdraw(address nodeOwner, address operator, bytes32 withdrawKey, uint256 assets, address recipient);

55: event FinishedWithdraw(address nodeOwner, address recipient, address operator, uint256 assets, bytes32 withdrawKey);

57: event NodeDeployed(address owner, address node, address nodeImplementation);

59: event NativeVaultInitialized(address owner, address manager, address operator, address slashStore);

61: event SnapshotCreated(address nodeOwner, address node, uint64 timestamp, bytes32 parentBeaconBlockRoot);

63: event SnapshotFinished(address nodeOwner, address node, uint64 snapshotTimestamp, int256 totalSharesWei);

65: event NodeETHWithdrawn(address node, address to, uint256 weiAmount);

67: event NativeRestakerNodeDeployed(address node, address implementation);

69: event RestakedValidator(address nodeOwner, address node, uint256 validatorIndex, uint64 timestamp, uint256 amountWei);

71: event ValidatorWithdrawn(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

73: event ValidatorBalanceChanged(

77: event SnapshotValidator(address nodeOwner, address node, uint64 timestamp, uint40 validatorIndex);

79: event UpgradedAllNodes(address implementation);

81: event DepositedSlashedAssets(address nativeNode, uint256 amount);

83: event IncreasedBalance(uint256 totalRestakedETH);

85: event DecreasedBalance(uint256 totalRestakedETH);

87: event DSSRegistered(address dss, uint256 maxSlashablePercentageWad);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

### <a name="NC-31"></a>[NC-31] `public` functions not called by the contract should be declared `external` instead

*Instances (15)*:

```solidity
File: src/Core.sol

288:     function isAssetAllowlisted(address asset) public view returns (bool) {

292:     function isVaultImplAllowListed(address vaultImpl) public view returns (bool) {

300:     function isOperatorRegisteredToDSS(address operator, IDSS dss) public view returns (bool) {

356:     function getDssMaxSlashablePercentageWad(IDSS dss) public view returns (uint256 slashablePercentageWad) {

363:     function isDSSRegistered(IDSS dss) public view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeVault.sol

351:     function getNextWithdrawNonce(address nodeOwner) public view returns (uint256) {

355:     function isWithdrawalPending(address nodeOwner, uint256 withdrawNonce) public view returns (bool) {

359:     function getQueuedWithdrawal(address nodeOwner, uint256 withdrawNonce)

627:     function vaultConfig() public pure returns (VaultLib.Config memory) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Vault.sol

233:     function vaultConfig() public pure returns (VaultLib.Config memory) {

237:     function getNextWithdrawNonce(address staker) public view returns (uint256) {

241:     function isWithdrawalPending(address staker, uint256 _withdrawNonce) public view returns (bool) {

245:     function getQueuedWithdrawal(address staker, uint256 _withdrawNonce)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

27:     function vaultPendingStakeUpdateSlot(address operator, address vault) public pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/SlasherLib.sol

174:     function setDSSMaxSlashablePercentageWad(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="NC-32"></a>[NC-32] Variables need not be initialized to zero

The default value for variables is zero, so initializing them to zero is superfluous.

*Instances (18)*:

```solidity
File: src/NativeVault.sol

144:         for (uint256 i = 0; i < balanceProofs.length; i++) {

194:         for (uint256 i = 0; i < validatorFieldsProofs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

29:         for (uint256 i = 0; i < stakedVaults.length; i++) {

33:         uint256 count = 0;

34:         for (uint256 i = 0; i < results.length; i++) {

38:         uint256 latestIndex = 0;

39:         for (uint256 i = 0; i < results.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashingHandler.sol

33:         for (uint256 i = 0; i < _supportedAssets.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/entities/CoreLib.sol

71:         for (uint256 i = 0; i < assets.length; i++) {

84:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

132:         for (uint256 i = 0; i < vaultConfigs.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

147:         for (uint256 i = 0; i < numNodesInLayer; i++) {

155:             for (uint256 i = 0; i < numNodesInLayer; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/Operator.sol

232:         for (uint256 i = 0; i < dssAddresses.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

50:         for (uint256 i = 0; i < slashingRequest.vaults.length; i++) {

85:         for (uint256 i = 0; i < slashingMetadata.vaults.length; ++i) {

134:         for (uint256 i = 0; i < queuedSlashing.vaults.length; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

42:         for (uint256 i = 0; i < arr.length - 1; i++) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

## Low Issues

| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | Use a 2-step ownership transfer pattern | 6 |
| [L-2](#L-2) | Some tokens may revert when zero value transfers are made | 2 |
| [L-3](#L-3) | Missing checks for `address(0)` when assigning values to address state variables | 1 |
| [L-4](#L-4) | Duplicate import statements | 2 |
| [L-5](#L-5) | External calls in an un-bounded `for-`loop may result in a DOS | 2 |
| [L-6](#L-6) | External call recipient may consume all transaction gas | 7 |
| [L-7](#L-7) | Initializers could be front-run | 22 |
| [L-8](#L-8) | Signature use at deadlines should be allowed | 5 |
| [L-9](#L-9) | Prevent accidentally burning tokens | 2 |
| [L-10](#L-10) | Owner can renounce while system is paused | 4 |
| [L-11](#L-11) | Solidity version 0.8.20+ may not work on other chains due to `PUSH0` | 22 |
| [L-12](#L-12) | Use `Ownable2Step.transferOwnership` instead of `Ownable.transferOwnership` | 7 |
| [L-13](#L-13) | File allows a version of solidity that is susceptible to an assembly optimizer bug | 1 |
| [L-14](#L-14) | Unsafe ERC20 operation(s) | 1 |
| [L-15](#L-15) | Upgradeable contract is missing a `__gap[50]` storage variable to allow for new storage variables in later versions | 9 |
| [L-16](#L-16) | Upgradeable contract not initialized | 43 |

### <a name="L-1"></a>[L-1] Use a 2-step ownership transfer pattern

Recommend considering implementing a two step process where the owner or admin nominates an account and the nominated account needs to call an `acceptOwnership()` function for the transfer of ownership to fully succeed. This ensures the nominated EOA account is a valid and active account. Lack of two-step procedure for critical operations leaves them error-prone. Consider adding two step procedure on the critical functions.

*Instances (6)*:

```solidity
File: src/Core.sol

26: contract Core is IBeacon, ICore, OwnableRoles, Initializable, ReentrancyGuard, Pauser, ExtSloads {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

17: contract NativeNode is Pauser, Ownable, INativeNode, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

25: contract NativeVault is ERC4626, IBeacon, Pauser, INativeVault, OwnableRoles, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

12: contract SlashStore is Initializable, Ownable, ReentrancyGuard {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

16: contract SlashingHandler is Initializable, Ownable, ISlashingHandler {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

29: contract Vault is ERC4626, Initializable, Ownable, Pauser, ReentrancyGuard, ExtSloads, IVault {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="L-2"></a>[L-2] Some tokens may revert when zero value transfers are made

Example: <https://github.com/d-xo/weird-erc20#revert-on-zero-value-transfers>.

In spite of the fact that EIP-20 [states](https://github.com/ethereum/EIPs/blob/46b9b698815abbfa628cd1097311deee77dd45c5/EIPS/eip-20.md?plain=1#L116) that zero-valued transfers must be accepted, some tokens, such as LEND will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (2)*:

```solidity
File: src/SlashingHandler.sol

46:         SafeTransferLib.safeTransferFrom(address(token), msg.sender, address(this), amount);

48:         SafeTransferLib.safeTransfer(address(token), address(0), amount);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

### <a name="L-3"></a>[L-3] Missing checks for `address(0)` when assigning values to address state variables

*Instances (1)*:

```solidity
File: src/NativeNode.sol

32:         nodeOwner = _nodeOwner;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

### <a name="L-4"></a>[L-4] Duplicate import statements

*Instances (2)*:

```solidity
File: src/Core.sol

18: import {Constants} from "./interfaces/Constants.sol";

24: import "./interfaces/Constants.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

### <a name="L-5"></a>[L-5] External calls in an un-bounded `for-`loop may result in a DOS

Consider limiting the number of iterations in for-loops that make external calls

*Instances (2)*:

```solidity
File: src/entities/CoreLib.sol

143:             self.operatorState[operator].addVault(vault);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/SlasherLib.sol

51:             if (!self.operatorState[slashingRequest.operator].isVaultStakeToDSS(dss, slashingRequest.vaults[i])) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="L-6"></a>[L-6] External call recipient may consume all transaction gas

There is no limit specified on the amount of gas used, so the recipient can use up all of the transaction's gas, causing it to revert. Use `addr.call{gas: <amount>}("")` or [this](https://github.com/nomad-xyz/ExcessivelySafeCall) library instead.

*Instances (7)*:

```solidity
File: src/entities/Operator.sol

78:         HookLib.callHookIfInterfaceImplemented({

124:         HookLib.callHookIfInterfaceImplemented({

162:         HookLib.callHookIfInterfaceImplemented({

194:         HookLib.callHookIfInterfaceImplemented({

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

113:         HookLib.callHookIfInterfaceImplemented({

142:         HookLib.callHookIfInterfaceImplemented({

159:         HookLib.callHookIfInterfaceImplemented({

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="L-7"></a>[L-7] Initializers could be front-run

Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (22)*:

```solidity
File: src/Core.sol

53:     function initialize(

60:     ) external initializer {

62:         __Pauser_init();

67:         _self().init(_vaultImpl, _vetoCommittee, _hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

28:     function initialize(address _owner, address _nodeOwner) external initializer {

30:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

46:     function initialize(

53:     ) external initializer {

55:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

20:     function initialize(address _owner) external initializer {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

30:     function initialize(address owner, IERC20[] calldata _supportedAssets) external initializer {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

51:     function initialize(

58:     ) external initializer {

60:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

40:     function init(

107:         vault.initialize(address(this), operator, depositToken, name, symbol, extraData);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/NativeVaultLib.sol

100:         newNode.initialize(address(this), owner);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Pauser.sol

36:     function __Pauser_init() internal onlyInitializing {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/interfaces/ICore.sol

14:     function initialize(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ICore.sol)

```solidity
File: src/interfaces/IKarakBaseVault.sol

8:     function initialize(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IKarakBaseVault.sol)

```solidity
File: src/interfaces/INativeNode.sol

9:     function initialize(address owner, address nodeOwner) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeNode.sol)

```solidity
File: src/interfaces/ISlashingHandler.sol

7:     function initialize(address owner, IERC20[] calldata _supportedAssets) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ISlashingHandler.sol)

### <a name="L-8"></a>[L-8] Signature use at deadlines should be allowed

According to [EIP-2612](https://github.com/ethereum/EIPs/blob/71dc97318013bf2ac572ab63fab530ac9ef419ca/EIPS/eip-2612.md?plain=1#L58), signatures used on exactly the deadline timestamp are supposed to be allowed. While the signature may or may not be used for the exact EIP-2612 use case (transfer approvals), for consistency's sake, all deadlines should follow this semantic. If the timestamp is an expiration rather than a deadline, consider whether it makes more sense to include the expiration timestamp as a valid timestamp, as is done for deadlines.

*Instances (5)*:

```solidity
File: src/NativeVault.sol

218:         if (node.lastSnapshotTimestamp + Constants.SNAPSHOT_EXPIRY > block.timestamp) {

272:         if (startedWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/entities/Operator.sol

93:         if (queuedStakeUpdate.startTimestamp + Constants.MIN_STAKE_UPDATE_DELAY > block.timestamp) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

129:         if (queuedSlashing.timestamp + Constants.SLASHING_VETO_WINDOW > block.timestamp) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

35:         if (qdWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

### <a name="L-9"></a>[L-9] Prevent accidentally burning tokens

Minting and burning tokens to address(0) prevention

*Instances (2)*:

```solidity
File: src/NativeVault.sol

497:         _mint(_of, shares);

507:         _burn(_of, shares);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

### <a name="L-10"></a>[L-10] Owner can renounce while system is paused

The contract owner or single user with a role is not prevented from renouncing the role/ownership while the contract is paused, which would cause any user assets stored in the protocol, to be locked indefinitely.

*Instances (4)*:

```solidity
File: src/NativeNode.sol

51:     function pause(uint256 map) external onlyOwner {

57:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

322:     function pause(uint256 map) external onlyOwner {

328:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

### <a name="L-11"></a>[L-11] Solidity version 0.8.20+ may not work on other chains due to `PUSH0`

The compiler for Solidity 0.8.20 switches the default target EVM version to [Shanghai](https://blog.soliditylang.org/2023/05/10/solidity-0.8.20-release-announcement/#important-note), which includes the new `PUSH0` op code. This op code may not yet be implemented on all L2s, so deployment on these chains will fail. To work around this issue, use an earlier [EVM](https://docs.soliditylang.org/en/v0.8.20/using-the-compiler.html?ref=zaryabs.com#setting-the-evm-version-to-target) [version](https://book.getfoundry.sh/reference/config/solidity-compiler#evm_version). While the project itself may or may not compile with 0.8.20, other projects with which it integrates, or which extend this project may, and those projects will have problems deploying these contracts/libraries.

*Instances (22)*:

```solidity
File: src/Core.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashStore.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/BeaconProofsLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/HookLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/HookLib.sol)

```solidity
File: src/entities/MerkleProofs.sol

4: pragma solidity ^0.8.0;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

```solidity
File: src/entities/NativeVaultLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Operator.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/Pauser.sol

3: pragma solidity ^0.8.21;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/entities/SlasherLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/entities/VaultLib.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/VaultLib.sol)

```solidity
File: src/entities/Withdraw.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Withdraw.sol)

```solidity
File: src/interfaces/Constants.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Constants.sol)

```solidity
File: src/interfaces/Errors.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Errors.sol)

```solidity
File: src/interfaces/Events.sol

2: pragma solidity ^0.8.25;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

```solidity
File: src/utils/CommonUtils.sol

2: pragma solidity ^0.8.21;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)

### <a name="L-12"></a>[L-12] Use `Ownable2Step.transferOwnership` instead of `Ownable.transferOwnership`

Use [Ownable2Step.transferOwnership](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol) which is safer. Use it as it is more secure due to 2-stage ownership transfer.

**Recommended Mitigation Steps**

Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol">Ownable2Step.sol</a>
  
  ```solidity
      function acceptOwnership() external {
          address sender = _msgSender();
          require(pendingOwner() == sender, "Ownable2Step: caller is not the new owner");
          _transferOwnership(sender);
      }
```

*Instances (7)*:

```solidity
File: src/Core.sol

4: import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

5: import {OwnableRoles} from "solady/src/auth/OwnableRoles.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/Querier.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Querier.sol)

```solidity
File: src/SlashStore.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

4: import {Ownable} from "solady/src/auth/Ownable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="L-13"></a>[L-13] File allows a version of solidity that is susceptible to an assembly optimizer bug

In solidity versions 0.8.13 and 0.8.14, there is an [optimizer bug](https://github.com/ethereum/solidity-blog/blob/499ab8abc19391be7b7b34f88953a067029a5b45/_posts/2022-06-15-inline-assembly-memory-side-effects-bug.md) where, if the use of a variable is in a separate `assembly` block from the block in which it was stored, the `mstore` operation is optimized out, leading to uninitialized memory. The code currently does not have such a pattern of execution, but it does use `mstore`s in `assembly` blocks, so it is a risk for future changes. The affected solidity versions should be avoided if at all possible.

*Instances (1)*:

```solidity
File: src/entities/MerkleProofs.sol

4: pragma solidity ^0.8.0;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/MerkleProofs.sol)

### <a name="L-14"></a>[L-14] Unsafe ERC20 operation(s)

*Instances (1)*:

```solidity
File: src/Vault.sol

146:         this.transferFrom(msg.sender, address(this), shares);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="L-15"></a>[L-15] Upgradeable contract is missing a `__gap[50]` storage variable to allow for new storage variables in later versions

See [this](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps) link for a description of this storage variable. While some contracts may not currently be sub-classed, adding the variable now protects against forgetting to add it in the future.

*Instances (9)*:

```solidity
File: src/Core.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

6: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/Pauser.sol

5: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

6: import {ContextUpgradeable} from "@openzeppelin-upgradeable/utils/ContextUpgradeable.sol";

10: contract Pauser is Initializable, ContextUpgradeable {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

### <a name="L-16"></a>[L-16] Upgradeable contract not initialized

Upgradeable contracts are initialized via an initializer function rather than by a constructor. Leaving such a contract uninitialized may lead to it being taken over by a malicious user

*Instances (43)*:

```solidity
File: src/Core.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

43:         _disableInitializers();

53:     function initialize(

60:     ) external initializer {

61:         _initializeOwner(msg.sender);

62:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

22:         _disableInitializers();

28:     function initialize(address _owner, address _nodeOwner) external initializer {

29:         _initializeOwner(_owner);

30:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

36:         _disableInitializers();

46:     function initialize(

53:     ) external initializer {

54:         _initializeOwner(_owner);

55:         __Pauser_init();

78:         emit NativeVaultInitialized(_owner, manager, _operator, slashStore);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

8: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

15:         _disableInitializers();

20:     function initialize(address _owner) external initializer {

21:         _initializeOwner(_owner);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

6: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

27:         _disableInitializers();

30:     function initialize(address owner, IERC20[] calldata _supportedAssets) external initializer {

31:         _initializeOwner(owner);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

11: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

41:         _disableInitializers();

51:     function initialize(

58:     ) external initializer {

59:         _initializeOwner(_owner);

60:         __Pauser_init();

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

```solidity
File: src/entities/CoreLib.sol

107:         vault.initialize(address(this), operator, depositToken, name, symbol, extraData);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/NativeVaultLib.sol

100:         newNode.initialize(address(this), owner);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/NativeVaultLib.sol)

```solidity
File: src/entities/Pauser.sol

5: import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

6: import {ContextUpgradeable} from "@openzeppelin-upgradeable/utils/ContextUpgradeable.sol";

10: contract Pauser is Initializable, ContextUpgradeable {

36:     function __Pauser_init() internal onlyInitializing {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Pauser.sol)

```solidity
File: src/interfaces/Events.sol

59: event NativeVaultInitialized(address owner, address manager, address operator, address slashStore);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/Events.sol)

```solidity
File: src/interfaces/ICore.sol

14:     function initialize(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ICore.sol)

```solidity
File: src/interfaces/IKarakBaseVault.sol

8:     function initialize(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/IKarakBaseVault.sol)

```solidity
File: src/interfaces/INativeNode.sol

9:     function initialize(address owner, address nodeOwner) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/INativeNode.sol)

```solidity
File: src/interfaces/ISlashingHandler.sol

7:     function initialize(address owner, IERC20[] calldata _supportedAssets) external;

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/interfaces/ISlashingHandler.sol)

## Medium Issues

| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Contracts are vulnerable to fee-on-transfer accounting-related issues | 1 |
| [M-2](#M-2) | Centralization Risk for trusted owners | 14 |
| [M-3](#M-3) | Lack of EIP-712 compliance: using `keccak256()` directly on an array or struct variable | 2 |
| [M-4](#M-4) | Library function isn't `internal` or `private` | 18 |

### <a name="M-1"></a>[M-1] Contracts are vulnerable to fee-on-transfer accounting-related issues

Consistently check account balance before and after transfers for Fee-On-Transfer discrepancies. As arbitrary ERC20 tokens can be used, the amount here should be calculated every time to take into consideration a possible fee-on-transfer or deflation.
Also, it's a good practice for the future of the solution.

Use the balance before and after the transfer to calculate the received amount instead of assuming that it would be equal to the amount passed as a parameter. Or explicitly document that such tokens shouldn't be used and won't be supported

*Instances (1)*:

```solidity
File: src/SlashingHandler.sol

46:         SafeTransferLib.safeTransferFrom(address(token), msg.sender, address(this), amount);

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

### <a name="M-2"></a>[M-2] Centralization Risk for trusted owners

#### Impact

Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (14)*:

```solidity
File: src/Core.sol

173:     function changeStandardImplementation(address newVaultImpl) external onlyOwner {

183:     function changeImplementationForVault(address vault, address newVaultImpl) external onlyOwner {

211:     function allowlistVaultImpl(address vaultImpl) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Core.sol)

```solidity
File: src/NativeNode.sol

17: contract NativeNode is Pauser, Ownable, INativeNode, ReentrancyGuard {

51:     function pause(uint256 map) external onlyOwner {

57:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeNode.sol)

```solidity
File: src/NativeVault.sol

322:     function pause(uint256 map) external onlyOwner {

328:     function unpause(uint256 map) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/NativeVault.sol)

```solidity
File: src/SlashStore.sol

12: contract SlashStore is Initializable, Ownable, ReentrancyGuard {

32:     function withdraw(address to, uint256 weiAmount) external nonReentrant onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashStore.sol)

```solidity
File: src/SlashingHandler.sol

16: contract SlashingHandler is Initializable, Ownable, ISlashingHandler {

38:     function addSlashableToken(IERC20 token) external onlyOwner {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/SlashingHandler.sol)

```solidity
File: src/Vault.sol

29: contract Vault is ERC4626, Initializable, Ownable, Pauser, ReentrancyGuard, ExtSloads, IVault {

257:     function owner() public view override(Ownable, IVault) returns (address) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/Vault.sol)

### <a name="M-3"></a>[M-3] Lack of EIP-712 compliance: using `keccak256()` directly on an array or struct variable

Directly using the actual variable instead of encoding the array values goes against the EIP-712 specification <https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#definition-of-encodedata>.
**Note**: OpenSea's [Seaport's example with offerHashes and considerationHashes](https://github.com/ProjectOpenSea/seaport/blob/a62c2f8f484784735025d7b03ccb37865bc39e5a/reference/lib/ReferenceGettersAndDerivers.sol#L130-L131) can be used as a reference to understand how array of structs should be encoded.

*Instances (2)*:

```solidity
File: src/entities/Operator.sol

50:         return keccak256(abi.encode(newStake));

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

39:         root = keccak256(abi.encode(queuedSlashing));

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

### <a name="M-4"></a>[M-4] Library function isn't `internal` or `private`

In a library, using an external or public visibility means that we won't be going through the library with a DELEGATECALL but with a CALL. This changes the context and should be done carefully.

*Instances (18)*:

```solidity
File: src/entities/BeaconProofsLib.sol

136:     function getPubkeyHash(bytes32[] calldata validatorFields) external pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/BeaconProofsLib.sol)

```solidity
File: src/entities/CoreLib.sol

67:     function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)

77:     function validateVaultConfigs(Storage storage self, VaultLib.Config[] calldata vaultConfigs, address implementation)

118:     function deployVaults(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreLib.sol)

```solidity
File: src/entities/CoreStorageSlots.sol

27:     function vaultPendingStakeUpdateSlot(address operator, address vault) public pure returns (bytes32) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/CoreStorageSlots.sol)

```solidity
File: src/entities/Operator.sol

61:     function requestUpdateVaultStakeInDSS(

111:     function validateAndUpdateVaultStakeInDSS(CoreLib.Storage storage self, QueuedStakeUpdate memory queuedStakeUpdate)

150:     function registerOperatorToDSS(

173:     function getVaultsStakedToDSS(State storage operatorState, IDSS dss)

181:     function unregisterOperatorFromDSS(

224:     function getDSSCountVaultStakedTo(CoreLib.Storage storage self, IKarakBaseVault vault)

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/Operator.sol)

```solidity
File: src/entities/SlasherLib.sol

94:     function requestSlashing(

126:     function finalizeSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

153:     function cancelSlashing(CoreLib.Storage storage self, QueuedSlashing memory queuedSlashing) external {

170:     function getDSSMaxSlashablePercentageWad(CoreLib.Storage storage self, IDSS dss) public view returns (uint256) {

174:     function setDSSMaxSlashablePercentageWad(

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/entities/SlasherLib.sol)

```solidity
File: src/utils/CommonUtils.sol

39:     function hasDuplicates(address[] memory arr) external pure returns (bool) {

48:     function isSmartContract(address addr) external view returns (bool) {

```

[Link to code](https://github.com/code-423n4/2024-07-karak/blob/main/src/utils/CommonUtils.sol)
