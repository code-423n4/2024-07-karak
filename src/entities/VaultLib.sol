// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Constants} from "../interfaces/Constants.sol";
import "./Withdraw.sol";
import "../interfaces/Errors.sol";

library VaultLib {
    struct Config {
        // Required fields
        address asset;
        uint8 decimals;
        address operator;
        string name;
        string symbol;
        bytes extraData;
    }

    struct State {
        mapping(address staker => uint256 withdrawNonce) stakerToWithdrawNonce;
        mapping(bytes32 stakerWithdrawNonceKey => WithdrawLib.QueuedWithdrawal withdrawal) withdrawalMap;
    }

    function validateQueuedWithdrawal(State storage self, bytes32 withdrawalKey)
        internal
        view
        returns (WithdrawLib.QueuedWithdrawal memory qdWithdrawal)
    {
        qdWithdrawal = self.withdrawalMap[withdrawalKey];

        if (qdWithdrawal.start == 0) {
            revert WithdrawalNotFound();
        }

        if (qdWithdrawal.start + Constants.MIN_WITHDRAWAL_DELAY > block.timestamp) {
            revert MinWithdrawDelayNotPassed();
        }
    }
}
