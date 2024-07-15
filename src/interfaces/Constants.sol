// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

library Constants {
    address public constant DEFAULT_NODE_IMPLEMENTATION_FLAG = address(1);
    address public constant DEFAULT_VAULT_IMPLEMENTATION_FLAG = address(1);

    // Bit from solady/src/auth/OwnableRoles.sol
    uint256 public constant MANAGER_ROLE = 1 << 0;
    uint256 public constant VETO_COMMITTEE_ROLE = 1 << 1;

    uint256 public constant SNAPSHOT_EXPIRY = 7 days;
    uint256 public constant SLASHING_WINDOW = 7 days;
    uint256 public constant SLASHING_VETO_WINDOW = 2 days;
    uint256 public constant MIN_STAKE_UPDATE_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;
    uint256 public constant MIN_WITHDRAWAL_DELAY = SLASHING_WINDOW + SLASHING_VETO_WINDOW;

    uint256 public constant ONE_WAD = 1e18;

    uint256 public constant HUNDRED_PERCENT_WAD = 100e18;
    uint256 public constant MAX_SLASHING_PERCENT_WAD = HUNDRED_PERCENT_WAD;

    uint256 public constant MAX_VAULTS_PER_OPERATOR = 32;
    uint256 public constant MAX_SLASHABLE_VAULTS_PER_REQUEST = MAX_VAULTS_PER_OPERATOR;
    uint256 public constant MAX_DSS_PER_OPERATOR = 32;

    uint256 internal constant BEACON_ROOTS_RING_BUFFER = 8191;
    /// (https://eips.ethereum.org/EIPS/eip-4788)
    address internal constant BEACON_ROOTS_ADDRESS = 0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02;

    uint256 public constant SLASHING_COOLDOWN = 2 days;

    // Vault function pausing index
    uint8 internal constant PAUSE_VAULT_DEPOSIT = 0;
    uint8 internal constant PAUSE_VAULT_DEPOSIT_SLIPPAGE = 1;
    uint8 internal constant PAUSE_VAULT_MINT = 2;
    uint8 internal constant PAUSE_VAULT_START_REDEEM = 3;
    uint8 internal constant PAUSE_VAULT_FINISH_REDEEM = 4;
    uint8 internal constant PAUSE_VAULT_WITHDRAW = 5;
    uint8 internal constant PAUSE_VAULT_REDEEM = 6;

    // Core function pausing index
    uint8 internal constant PAUSE_CORE_REGISTER_OPERATOR = 0;
    uint8 internal constant PAUSE_CORE_MODIFY_OPERATOR = 1;
    uint8 internal constant PAUSE_CORE_REGISTER_TO_DSS = 2;
    uint8 internal constant PAUSE_CORE_UNREGISTER_FROM_DSS = 3;
    uint8 internal constant PAUSE_CORE_REQUEST_STAKE_UPDATE = 4;
    uint8 internal constant PAUSE_CORE_FINALIZE_STAKE_UPDATE = 5;
    uint8 internal constant PAUSE_CORE_DEPLOY_VAULTS = 6;
    uint8 internal constant PAUSE_CORE_REQUEST_SLASHING = 7;
    uint8 internal constant PAUSE_CORE_CANCEL_SLASHING = 8;
    uint8 internal constant PAUSE_CORE_FINALIZE_SLASHING = 9;

    // NativeNode function pausing index
    uint8 internal constant PAUSE_NODE_WITHDRAW = 0;

    // NativeVault function pausing index
    uint8 internal constant PAUSE_NATIVEVAULT_SLASHER = 0;
    uint8 internal constant PAUSE_NATIVEVAULT_CREATE_NODE = 1;
    uint8 internal constant PAUSE_NATIVEVAULT_START_SNAPSHOT = 2;
    uint8 internal constant PAUSE_NATIVEVAULT_START_WITHDRAWAL = 3;
    uint8 internal constant PAUSE_NATIVEVAULT_FINISH_WITHDRAWAL = 4;
    uint8 internal constant PAUSE_NATIVEVAULT_VALIDATE_SNAPSHOT = 5;
    uint8 internal constant PAUSE_NATIVEVAULT_NODE_IMPLEMENTATION = 6;
    uint8 internal constant PAUSE_NATIVEVAULT_VALIDATE_WITHDRAW_CREDS = 7;
    uint8 internal constant PAUSE_NATIVEVAULT_VALIDATE_EXPIRED_SNAPSHOT = 8;

    address internal constant DEAD_BEEF = 0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF;
}
