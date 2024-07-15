// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {CommonBase} from "forge-std/Base.sol";
import {StdCheats} from "forge-std/StdCheats.sol";
import "forge-std/console.sol";

import "./ERC20Mintable.sol";
import "../../../src/Vault.sol";
import "../../../src/entities/Withdraw.sol";
import "../../../src/interfaces/Errors.sol";
import "../../../src/interfaces/Constants.sol";

contract VaultHandler is CommonBase, StdCheats {
    Vault private vault;
    ERC20Mintable private depositToken;

    constructor(Vault _vault, ERC20Mintable _depositToken) {
        vault = _vault;
        depositToken = _depositToken;
    }

    function deposit(uint256 amount) public {
        vm.assume(amount > 0);
        vm.assume(amount < depositToken.balanceOf(address(this)));

        depositToken.approve(address(vault), amount);
        vault.deposit(amount, address(this), amount);
    }

    function redeemFinish(uint256 amount, uint256 time) public {
        vm.assume(amount > 0);
        vm.assume(time > Constants.MIN_WITHDRAWAL_DELAY);

        uint256 shares = vault.balanceOf(address(this));

        vm.assume(amount < shares);

        bytes32 withdrawalKey = vault.startRedeem(shares, address(this));

        vm.warp(time);
        vault.finishRedeem(withdrawalKey);
    }

    function redeemFinishFail(uint256 amount) public {
        vm.assume(amount > 0);

        uint256 shares = vault.balanceOf(address(this));

        vm.assume(amount < shares);

        bytes32 withdrawalKey = vault.startRedeem(shares, address(this));

        vm.expectRevert(MinWithdrawDelayNotPassed.selector);
        vault.finishRedeem(withdrawalKey);
    }
}
