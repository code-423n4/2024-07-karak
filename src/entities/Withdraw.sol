// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

library WithdrawLib {
    struct QueuedWithdrawal {
        address staker;
        uint96 start;
        uint256 shares;
        address beneficiary;
    }

    function calculateWithdrawKey(address staker, uint256 stakerNonce) internal pure returns (bytes32) {
        return keccak256(abi.encode(staker, stakerNonce));
    }
}
