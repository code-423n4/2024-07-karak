# Karak Restaking

Karak Restaking is a protocol that allows users to restake their assets by directly depositing them into the vaults of operators. Operators can then register with Distributed Secure Services (DSS) to provide economic security. Operators perform tasks for the DSS in exchange for rewards, and the DSS has the ability to slash the funds that operators have delegated.

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
