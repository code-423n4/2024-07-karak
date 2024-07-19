# Karak audit details

- Total Prize Pool: $55,500 in USDC
  - HM awards: $37,800 in USDC
  - QA awards: $1,500 in USDC
  - Judge awards: $6,500 in USDC
  - Validator awards: $3,200 in USDC
  - Scout awards: $500 in USDC
  - Mitigation Review: $6,000 in USDC (*Opportunity goes to top 3 backstage wardens based on placement in this audit who RSVP.*)
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2024-07-karak/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts July 16, 2024 20:00 UTC
- Ends July 30, 2024 20:00 UTC

## Automated Findings / Publicly Known Issues

The 4naly3er report can be found [here](https://github.com/code-423n4/2024-07-karak/blob/main/4naly3er-report.md).
The Slither report can be found [here](https://github.com/code-423n4/2024-07-karak/blob/main/slither.md).

_Note for C4 wardens: Anything included in this `Automated Findings / Publicly Known Issues` section is considered a publicly known issue and is ineligible for awards._

- Vaults are not meant to handle rewards distribution since rewards are non-linear, can be frontrun if sent to the vault, and not always in the same underlying token. Instead an off-chain indexer should compute the distribution and the DSS can use a Merkle drop to distribute rewards.
- If an operator initiates unstaking of a Vault or NativeVault from a DSS, DSS should stop immediately considering the corresponding vault’s stake for off-chain rewards compute. The withdrawal delay is meant to ensure that the DSS has enough time to slash the vault before it can be withdrawn. Sitting on a queued withdraw doesn't provide a operator any edge.
- Similarly if a staker starts withdrawal from a Vault or NativeVault, the DSS should stop considering those assets for voting weight and rewards
- Vault implementations and slashing handlers are allowlisted by the owner so the burden of auditing and having processes in place to make sure those two are audited and secure falls on the `OWNER`
- Leveraging is allowed, an operator can stake a vault in multiple DSSs, so leveraging is allowed. A DSS can choose to ignore an overleveraged vault and jail them if they choose. There’s is still a hard limit on the no. of DSS an operator can register with for gas limitation purposes.
- Vaults are loosely compliant with ERC4626
- Adding a validator to NativeVault checks the _effective balance_ of the validator and mints shares according to that hence disregarding any excess balance in the balance container which is not considered as restaked. The excess balance can be restaked only in the next snapshot.

# Overview

Karak Restaking is a protocol that allows users to restake their assets by directly depositing them into the vaults of operators. Operators can then register with Distributed Secure Services (DSS) to provide economic security. Operators perform tasks for the DSS in exchange for rewards, and the DSS has the ability to slash the funds that operators have delegated.

## Links

- **Previous audits:**
  - [Renascence Labs (Core)](https://github.com/code-423n4/2024-07-karak/blob/main/audits/core/Renascence%20-%20Karak%20Core%20Audit%20Report.pdf)
  - [Code4rena Pro League (Core)](https://code4rena.com/reports/2024-06-karak-pro-league)
  - [Renascence Labs (Native Restaking)](https://github.com/code-423n4/2024-07-karak/blob/main/audits/eth-native-restaking/Renascence%20-%20Karak%20Native%20Restaking%20Audit%20Report.pdf)
  - [Pashov Audit Group (Native Restaking)](https://github.com/code-423n4/2024-07-karak/blob/main/audits/eth-native-restaking/june-Pashov.pdf)
- **Documentation:** <https://docs.karak.network/>
- **Website:** <https://karak.network/>
- **X/Twitter:** <https://twitter.com/Karak_Network>
- **Discord:** <https://discord.gg/7nJEVrw4Fh>

# Karak Restaking

## Entities

### Stakers

Stakers are the end users providing liquidity for restaked assets.

- **Asset Deposit**: Stakers choose an operator to deposit their assets with.
  - Each accepted asset by an operator has a separate vault for deposits.
  - Stakers receive shares in each vault based on their deposited amount relative to the total assets in the vault.
- **Shares**: Shares represent ownership and can be issued as ERC20 tokens, which can be transferred.
  - The owner of the share tokens owns the corresponding assets.
- **Withdrawal**:
  - Stakers can initiate a withdrawal, subject to a `MIN_WITHDRAW_DELAY` of 9 days (`WITHDRAW_WINDOW + VETO_WINDOW`) to prevent front-running a slashing event.
  - DSS can slash any malicious behavior occurring before the withdrawal initiation for up to 7 days.

### Operators

Operators manage the assets deposited by stakers.

- **Asset Management**: Operators select the assets they accept from stakers.
  - Each accepted asset has a dedicated vault, implemented based on ERC4626.
  - Custom ERC4626 vaults can be built to enable things like native restaking or even custodied restaking. These implementations have to be approved by the `owner` and allowlisted.
  - The vault includes a `slashAssets` function, enabling the core contract to transfer specified asset amounts to the `slashingHandler`.
  - Each `slashingHandler` can have a different implementation, as different assets may require different burning or slashing methods such as `burn`, swapping for ETH then burning, or even distributing out to affected parties.
- **DSS Allocation**: Operators choose DSSs to allocate their funds to.
  - For each DSS, operators can choose a list of vaults to stake (leveraging is possible).
  - The vaults chosen by the operator are fully staked to the DSS.
- **DSS Unallocation**:
  - The Operator is subject to a `MIN_STAKE_UPDATE_DELAY` of 9 days to prevent front-running a slashing event.  
  - DSS can slash any malicious behavior occurring before the withdrawal initiation for up to 7 days.
  - An operator can fully unregister from a DSS after all the vaults are unstaked from the DSS.
- **Jailing**: Operators can be jailed by the DSS arbitrarily usually valid reasons like if they are too overleveraged for a DSS' liking
  - The effects of jailing are also arbitrary and can be decided by the DSS. This can range from no rewards to not allowing the operator to perform any tasks and forcing them to unallocate from the DSS. Jailing is optional and is implemented inside the DSS contract and not the core contract.

### DSS (Distributed Secure Services)

DSSs coordinate the tasks and rewards for operators.

- **Task Management**: Operators registered with a DSS must perform assigned tasks.
  - Rewards are distributed by the DSS (recommended to use a merkle drop for O(1) complexity). _Rewards distribution is not a part of core contracts_
- **Slashing Rights**:
  - DSSs have the right to slash vaults if it feels that an operator had failed to perform its tasks adequately.
  - If the slashing commitee feels that the slashing was unfair then they posses the right to veto a slashing event.
  - DSSs needs to set the max slashable percentage `dssSlashablePercentageWad`, which can be done only once.
  - DSSs is eligible to slash vaults which are staked into them by the operator.
  - DSSs is subjected to a cooldown of 2 days(represented by `SLASHING_COOLDOWN`) after each slashing request per operator.
- **Hooks**:
  - The DSS has the option to have hooks for a few functions like allocation and unallocation from an operator. So whenever these functions are called in core they would further call the DSS functions.
  - The allocation hooks can be reverted by the DSS, which in turn would revert the entire transaction. _This is expected behaviour as the DSS would be able to choose which operator it would like to accept_.
  - The unallocation hooks cannot revert the entire transaction, as the revert case would be handled. _This is to prevent a DSS from holding the funds of an operator hostage_

`SlashingHandler`: contract manages the burning of assets. Each asset has a linked slashing handler, as different assets may require different burning methods.

# Scope

See [scope.txt](https://github.com/code-423n4/2024-07-karak/blob/main/scope.txt)

### Files in scope

| File                              | Lines | nLines | nSLOC |
|-----------------------------------|-------|--------|-------|
| src/SlashingHandler.sol           | 56    | 56     | 38    |
| src/SlashStore.sol                | 37    | 37     | 21    |
| src/Vault.sol                     | 346   | 288    | 171   |
| src/Core.sol                      | 389   | 335    | 170   |
| src/Querier.sol                   | 43    | 43     | 28    |
| src/NativeVault.sol               | 631   | 551    | 363   |
| src/NativeNode.sol                | 61    | 56     | 31    |
| src/utils/CommonUtils.sol         | 55    | 55     | 43    |
| src/entities/Pauser.sol           | 80    | 80     | 56    |
| src/entities/Operator.sol         | 236   | 197    | 161   |
| src/entities/BeaconProofsLib.sol  | 147   | 135    | 105   |
| src/entities/HookLib.sol          | 104   | 87     | 46    |
| src/entities/CoreStorageSlots.sol | 30    | 30     | 18    |
| src/entities/Withdraw.sol         | 15    | 15     | 12    |
| src/entities/VaultLib.sol         | 39    | 35     | 27    |
| src/entities/CoreLib.sol          | 164   | 134    | 103   |
| src/entities/SlasherLib.sol       | 185   | 165    | 140   |
| src/entities/MerkleProofs.sol     | 164   | 148    | 71    |
| src/entities/NativeVaultLib.sol   | 193   | 178    | 120   |
| src/utils/ExtSloads.sol           | 22    | 22     | 13    |
| Totals                            | 2997  | 2647   | 1737  |


## Scoping Q &amp; A

### General questions

| Question                                | Answer                       |
| --------------------------------------- | ---------------------------- |
| ERC20 used by the protocol              |       Any (all possible ERC20s)            |
| Test coverage                           | 57.1%                    |
| ERC721 used  by the protocol            |           None             |
| ERC777 used by the protocol             |          None              |
| ERC1155 used by the protocol            |              None          |
| Chains the protocol will be deployed on | Ethereum,Arbitrum,Base,BSC,Optimism,OtherBlast, Mantle, K2(karaks l2 based on op stack)  |

### ERC20 token behaviors in scope

| Question                                                                                                                                                   | Answer |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [Missing return values](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#missing-return-values)                                                      |   In scope  |
| [Fee on transfer](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#fee-on-transfer)                                                                  |  In scope  |
| [Balance changes outside of transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#balance-modifications-outside-of-transfers-rebasingairdrops) | In scope    |
| [Upgradeability](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#upgradable-tokens)                                                                 |   In scope  |
| [Flash minting](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#flash-mintable-tokens)                                                              | In scope    |
| [Pausability](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#pausable-tokens)                                                                      | In scope    |
| [Approval race protections](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#approval-race-protections)                                              | In scope    |
| [Revert on approval to zero address](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-approval-to-zero-address)                            | Out of scope    |
| [Revert on zero value approvals](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-approvals)                                    | Out of scope    |
| [Revert on zero value transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-transfers)                                    | Out of scope    |
| [Revert on transfer to the zero address](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-transfer-to-the-zero-address)                    | In scope    |
| [Revert on large approvals and/or transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-large-approvals--transfers)                  | Out of scope    |
| [Doesn't revert on failure](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#no-revert-on-failure)                                                   |  In scope   |
| [Multiple token addresses](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-transfers)                                          | Out of scope    |
| [Low decimals ( < 6)](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#low-decimals)                                                                 |   In scope  |
| [High decimals ( > 18)](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#high-decimals)                                                              | In scope    |
| [Blocklists](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#tokens-with-blocklists)                                                                | Out of scope    |

### External integrations (e.g., Uniswap) behavior in scope

| Question                                                  | Answer |
| --------------------------------------------------------- | ------ |
| Enabling/disabling fees (e.g. Blur disables/enables fees) | No   |
| Pausability (e.g. Uniswap pool gets paused)               |  Yes   |
| Upgradeability (e.g. Uniswap gets upgraded)               |   Yes  |

### EIP compliance checklist

- DSS contract should comply with ERC-165.
- Vault is loosely meant to comply with ERC4626 BUT it is async and the async EIP really hasn't been defined as well. Also some vaults, like native restaking, stray away a bit more.

# Additional context

## Main invariants

- A vault can be leverage exactly N where N is the number of DSSes that the vault is delegated to.
- Only the vetoCommittee should be able to cancel a slashing
- A DSS should be able to slash up to the set percentage per slashing request. Afterwards, they have to wait a cooldown period before a subsequent request.
- Only DSSs an operator is registered with can slash said operator

## Attack ideas (where to focus for bugs)

**Upgradability** of Core and vaults.

**PAUSABILITY:**

- Can contracts be paused by non owner or non manger addresses.
- Each pausing map pauses only the intended functionalities.

**STAKING/UNSTAKING:**

- Operator/Staker shouldn’t be blocked by the protocol for withdrawal beyond the withdrawal period.
- Operator/Staker must wait the withdrawal period after initiating the withdrawal.
- Only the operator should be able to initiate a stake or unstake operation for its vaults connected to a DSS.
- Only a vault’s shareholder can initiate a redemption from it

**SLASHING:**

- DSS should be able to slash up to the original set percentage per slashing request.
- An operator or staker shouldn’t be able to frontrun a slashing aside from an already queued operation that meant they stopped being rewarded.
- Only the vetoCommittee should be able to cancel a slashing.
- Only DSSs the operator is registered with can slash the operator.
- The max slashing percentageWad can be set once by the DSS.
- A DSS must wait the cooldown period before being able to slash again

## All trusted roles in the protocol

- OWNER - meant to be a timelock that's owned by a multisig.
- MANAGER - mostly day to day operations, could be multisig or EOA
- SLASHING VETO COMMITTEE - can overturn/cancel a slashing for any reason, supposed to be a multisig

## Describe any novel or unique curve logic or mathematical models implemented in the contracts

N/A

## Running tests

```bash
git clone --recurse https://github.com/code-423n4/2024-07-karak.git
cd 2024-07-karak
npm i
forge build
forge test
```

To run code coverage

```bash
forge coverage --ir-minimum
```

![](https://github.com/code-423n4/2024-07-karak/blob/main/assets/348840226-cb54f722-4684-4858-9a18-3bf9cbca244e.png?raw=true)

![](https://github.com/code-423n4/2024-07-karak/blob/main/assets/348840347-eaefe6bb-93b4-4599-83d8-93b5879f1bac.png?raw=true)

![](https://github.com/code-423n4/2024-07-karak/blob/main/assets/348840426-72d0ac90-da12-424b-8928-2b00d9baaff0.png?raw=true)

![](https://github.com/code-423n4/2024-07-karak/blob/main/assets/348840470-f1253148-6127-4f6b-a130-8646c21e9f7b.png?raw=true)



## Miscellaneous

Employees of Karak and employees' family members are ineligible to participate in this audit.
