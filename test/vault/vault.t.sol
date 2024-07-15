// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "solady/src/utils/SafeTransferLib.sol";

import "../../src/Core.sol";
import "../../src/Vault.sol";
import "../../src/entities/VaultLib.sol";
import "../../src/entities/Operator.sol";
import "../../src/entities/Withdraw.sol";
import "../../src/interfaces/Errors.sol";
import "../../src/interfaces/IVault.sol";
import "../helpers/ProxyDeployment.sol";
import "../../src/interfaces/Constants.sol";
import "../helpers/contracts/ERC20Mintable.sol";

contract VaultTest is Test {
    Vault vault;
    Core core;
    ERC20Mintable depositToken;

    address manager = address(11);
    address notOwner = address(12);
    address operator = address(13);
    address proxyAdmin = address(14);
    address beneficiary = address(15);
    address slashingHandler = address(16);
    address slashingVetoCommittee = address(17);

    function setUp() public {
        uint32 hookCallGasLimit = 500_000;
        uint32 hookGasBuffer = 40_000;
        uint32 supportsInterfaceGasLimit = 20_000;
        // Setup core
        depositToken = new ERC20Mintable();
        depositToken.initialize("Test", "TST", 18);
        address vaultImpl = address(new Vault());
        core = Core(ProxyDeployment.factoryDeploy(address(new Core()), proxyAdmin));
        core.initialize(
            vaultImpl, manager, slashingVetoCommittee, hookCallGasLimit, supportsInterfaceGasLimit, hookGasBuffer
        );

        // Allowlist asset
        address[] memory assets = new address[](1);
        assets[0] = address(depositToken);

        // Slashing Handler for the asset
        address[] memory slashingHandlers = new address[](1);
        slashingHandlers[0] = slashingHandler;
        core.allowlistAssets(assets, slashingHandlers);

        // Deploy Vaults
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault",
            symbol: "TV",
            extraData: bytes("")
        });

        vm.startPrank(operator);
        IKarakBaseVault[] memory vaults = core.deployVaults(vaultConfigs, address(0));
        vault = Vault(address(vaults[0]));
        vm.stopPrank();
    }

    function mintAndDeposit(uint256 amount) public returns (uint256 shares) {
        depositToken.mint(address(this), amount);
        depositToken.approve(address(vault), amount);
        uint256 expectedShares = vault.convertToShares(amount);
        shares = vault.deposit(amount, address(this), expectedShares);
    }

    function test_initialize_fail_reinitialize() public {
        vm.expectRevert(Initializable.InvalidInitialization.selector);
        vault.initialize(address(core), operator, address(depositToken), "ABCDE", "EFG", bytes(""));
    }

    function test_initialize() public view {
        assertEq(vault.owner(), address(core));
        assertEq(vault.asset(), address(depositToken));
        assertEq(vault.name(), "TestVault");
        assertEq(vault.symbol(), "TV");
        assertEq(vault.decimals(), 18);
    }

    function test_deposit_revert_zero() public {
        vm.prank(address(core));
        vm.expectRevert(ZeroAmount.selector);
        vault.deposit(0, address(this), 0);
    }

    function test_deposit_no_approval(uint256 amount) public {
        vm.assume(amount > 0);

        depositToken.mint(address(this), amount);

        vm.expectRevert(SafeTransferLib.TransferFromFailed.selector);
        vault.deposit(amount, address(this), amount);
    }

    function test_deposit_not_enought_return_shares(uint256 amount, uint256 minSharesOut) public {
        vm.assume(amount > 0);
        vm.assume(minSharesOut < type(uint256).max / 10);
        vm.assume(amount < minSharesOut);

        depositToken.approve(address(this), amount);
        vm.expectRevert(SafeTransferLib.TransferFromFailed.selector);
        vault.deposit(amount, address(this), minSharesOut);
    }

    function test_deposit_no_tokens(uint256 amount) public {
        vm.assume(amount > 0);

        depositToken.approve(address(vault), amount);

        vm.prank(address(core));
        vm.expectRevert(SafeTransferLib.TransferFromFailed.selector);
        vault.deposit(amount, address(this), amount);
    }

    function test_deposit_paused(uint256 amount) public {
        vm.assume(amount > 0);

        vm.prank(address(core));
        vault.pause(type(uint256).max);

        depositToken.mint(address(this), amount);
        depositToken.approve(address(vault), amount);

        vm.expectRevert(
            abi.encodeWithSelector(Pauser.EnforcedPauseFunction.selector, Constants.PAUSE_VAULT_DEPOSIT_SLIPPAGE)
        );
        vault.deposit(amount, address(this), amount);
    }

    function test_deposit_multiple_vaults(uint256 amount) public {
        vm.assume(amount > 0);

        ERC20Mintable secondDepositToken = new ERC20Mintable();
        secondDepositToken.initialize("Test1", "TST1", 18);
        address[] memory assets = new address[](1);
        assets[0] = address(secondDepositToken);

        address[] memory slashingHandlers = new address[](1);
        slashingHandlers[0] = slashingHandler;

        core.allowlistAssets(assets, slashingHandlers);

        vm.startPrank(operator);
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(secondDepositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault1",
            symbol: "TV1",
            extraData: bytes("")
        });

        IKarakBaseVault[] memory vaults = core.deployVaults(vaultConfigs, address(0));
        Vault secondVault = Vault(address(vaults[0]));
        vm.stopPrank();

        depositToken.mint(address(this), amount);
        depositToken.approve(address(vault), amount);

        secondDepositToken.mint(address(this), amount);
        secondDepositToken.approve(address(secondVault), amount);

        uint256 sharesFirst = vault.deposit(amount, address(this), amount);
        assertEq(sharesFirst, amount);

        uint256 sharesSecond = secondVault.deposit(amount, address(this), amount);
        assertEq(sharesSecond, amount);

        assertEq(address(depositToken), vault.asset());
        assertEq(depositToken.balanceOf(address(this)), 0);
        assertEq(depositToken.balanceOf(address(vault)), amount);

        assertEq(secondDepositToken.balanceOf(address(this)), 0);
        assertEq(address(secondDepositToken), secondVault.asset());
        assertEq(secondDepositToken.balanceOf(address(secondVault)), amount);
    }

    function test_deposit(uint256 amount) public {
        vm.assume(amount > 0);

        uint256 shares = mintAndDeposit(amount);
        assertEq(shares, amount);

        assertEq(address(depositToken), vault.asset());
        assertEq(depositToken.balanceOf(address(this)), 0);
        assertEq(depositToken.balanceOf(address(vault)), amount);
    }

    function test_multiple_deposits(uint256 amount) public {
        vm.assume(amount > 1);
        vm.assume(amount < type(uint256).max / 10);

        depositToken.mint(address(this), amount * 2);
        depositToken.approve(address(vault), amount * 2);

        uint256 sharesFirst = vault.deposit(amount, address(this), amount);
        assertEq(sharesFirst, amount);
        assertEq(depositToken.balanceOf(address(this)), amount);
        assertEq(depositToken.balanceOf(address(vault)), amount);

        uint256 sharesSecond = vault.deposit(amount, address(this), amount);
        assertEq(sharesSecond, amount);
        assertEq(depositToken.balanceOf(address(this)), 0);
        assertEq(depositToken.balanceOf(address(vault)), amount * 2);

        assertEq(vault.totalAssets(), sharesFirst + sharesSecond);
    }

    function test_multiple_deposits_with_time_and_slash(uint256 amount, uint256 slashAmount, uint256 secondsLater)
        public
    {
        vm.assume(secondsLater > 0 && secondsLater < 3650 days);
        vm.assume(amount < type(uint256).max / 2);
        vm.assume(slashAmount < amount);

        test_deposit(amount);

        // Slash assets
        depositToken.burn(address(vault), slashAmount);

        StdCheats.skip(secondsLater);
        uint256 expectedNewShares = vault.previewDeposit(amount);

        mintAndDeposit(amount);

        assertEq(depositToken.balanceOf(address(vault)), amount * 2 - slashAmount);
        assertEq(vault.totalAssets(), amount * 2 - slashAmount);
        assertEq(vault.totalSupply(), amount + expectedNewShares);
        assertEq(vault.balanceOf(address(this)), amount + expectedNewShares);
        assertEq(depositToken.balanceOf(address(this)), 0);
    }

    function test_default_redeem_revert(uint256 shares) public {
        vm.assume(shares > 0);

        vm.expectRevert(NotImplemented.selector);
        vault.redeem(shares, address(this), address(this));
    }

    function test_default_withdraw_revert(uint256 amount) public {
        vm.assume(amount > 0);

        vm.expectRevert(NotImplemented.selector);
        vault.withdraw(amount, address(this), address(this));
    }

    function test_redeem_not_enough_time_passed(uint256 shares) public {
        vm.assume(shares > 0);
        vm.assume(shares < 1000);
        mintAndDeposit(1000);
        vault.approve(address(vault), shares);
        bytes32 withdrawalKey = vault.startRedeem(shares, address(this));

        uint256 withdrawalNonce = vault.getNextWithdrawNonce(address(this)) - 1;
        address staker = address(this);
        bytes32 expectedWithdrawalKey = keccak256(abi.encode(staker, withdrawalNonce));
        assertEq(withdrawalKey, expectedWithdrawalKey);

        vm.expectRevert(MinWithdrawDelayNotPassed.selector);
        vault.finishRedeem(withdrawalKey);
    }

    function test_fetch_queued_redeem(uint256) public {
        mintAndDeposit(1200);
        uint256 withdrawNonceBefore = vault.getNextWithdrawNonce(address(this));
        assertEq(withdrawNonceBefore, 0);

        vault.approve(address(vault), 1200);
        vault.startRedeem(300, address(this));
        vault.startRedeem(400, address(this));
        vault.startRedeem(500, address(this));

        uint256 withdrawNonceAfter = vault.getNextWithdrawNonce(address(this));
        assertEq(withdrawNonceAfter, 3);

        WithdrawLib.QueuedWithdrawal memory withdrawal1 = vault.getQueuedWithdrawal(address(this), 0);
        WithdrawLib.QueuedWithdrawal memory withdrawal2 = vault.getQueuedWithdrawal(address(this), 1);
        WithdrawLib.QueuedWithdrawal memory withdrawal3 = vault.getQueuedWithdrawal(address(this), 2);
        assertEq(withdrawal1.shares, 300);
        assertEq(withdrawal2.shares, 400);
        assertEq(withdrawal3.shares, 500);
    }

    function test_is_redeem_pending(uint256 time) public {
        vm.assume(time > Constants.MIN_WITHDRAWAL_DELAY && time < UINT256_MAX / 2);
        uint256 withdrawNonce = vault.getNextWithdrawNonce(address(this));
        mintAndDeposit(1000);
        vault.approve(address(vault), 1000);
        bytes32 withdrawalKey = vault.startRedeem(1000, address(this));

        bool pending = vault.isWithdrawalPending(address(this), withdrawNonce);
        assertEq(pending, true);

        vm.warp(time);
        vault.finishRedeem(withdrawalKey);
        pending = vault.isWithdrawalPending(address(this), withdrawNonce);
        assertEq(pending, false);
        assertEq(depositToken.balanceOf(address(this)), 1000);
    }

    function test_redeem_with_slashing(uint256 slashAmount, uint256 depositAmount) public {
        if (slashAmount == 0) return; // Not to reject the test else CI fails
        vm.assume(depositAmount < UINT256_MAX / 2);
        vm.assume(slashAmount < depositAmount);

        mintAndDeposit(depositAmount);

        // slash assets
        depositToken.burn(address(vault), slashAmount);

        uint256 shares = vault.balanceOf(address(this));
        vault.approve(address(vault), shares);
        bytes32 withdrawalKey = vault.startRedeem(shares, address(this));

        vm.warp(Constants.MIN_WITHDRAWAL_DELAY + 1);
        uint256 expectedAssets = vault.convertToAssets(shares);
        vault.finishRedeem(withdrawalKey);

        assertEq(depositToken.balanceOf(address(this)), expectedAssets);
    }

    function test_redeem(uint256 time) public {
        vm.assume(time > Constants.MIN_WITHDRAWAL_DELAY);

        mintAndDeposit(1000);

        assertEq(depositToken.balanceOf(address(this)), 0);
        uint256 withdrawalNonce = vault.getNextWithdrawNonce(address(this));
        vault.approve(address(vault), 1000);
        bytes32 withdrawalKey = vault.startRedeem(1000, address(this));

        assertTrue(vault.isWithdrawalPending(address(this), withdrawalNonce));

        vm.warp(time);

        vault.finishRedeem(withdrawalKey);
        assertFalse(vault.isWithdrawalPending(address(this), withdrawalNonce));
        assertEq(depositToken.balanceOf(address(this)), 1000);
    }

    function test_redeem_different_beneficiary(uint256 time, address beneficiary) public {
        vm.assume(time > Constants.MIN_WITHDRAWAL_DELAY);
        vm.assume(beneficiary != address(this) && beneficiary != address(0));
        mintAndDeposit(1000);

        assertEq(depositToken.balanceOf(address(this)), 0);
        uint256 withdrawalNonce = vault.getNextWithdrawNonce(address(this));
        vault.approve(address(vault), 1000);
        bytes32 withdrawalKey = vault.startRedeem(1000, beneficiary);

        assertTrue(vault.isWithdrawalPending(address(this), withdrawalNonce));

        vm.warp(time);

        vault.finishRedeem(withdrawalKey);
        assertFalse(vault.isWithdrawalPending(address(this), withdrawalNonce));
        assertEq(depositToken.balanceOf(address(this)), 0);
        assertEq(depositToken.balanceOf(beneficiary), 1000);
    }

    function test_e2e_deposit_redeem(uint256 amount, uint256 time) public {
        vm.assume(amount > 1000);
        vm.assume(amount < (type(uint256).max - 1000) / 100);
        vm.assume(time > Constants.MIN_WITHDRAWAL_DELAY);

        // deposit amount to simulate used vault
        mintAndDeposit(amount - 1000);

        address alice = address(2);
        vm.startPrank(alice);
        // mint tokens to alice
        depositToken.mint(alice, amount);

        // deposit tokens to vault as alice
        depositToken.approve(address(vault), amount);
        vault.deposit(amount, address(alice), amount);

        // start withdraw from vault for 50% of shares allocated to alice
        uint256 shares = vault.balanceOf(address(alice));
        uint256 withdrawalNonce = vault.getNextWithdrawNonce(alice);
        vault.approve(address(vault), shares / 2);
        bytes32 withdrawalKey = vault.startRedeem(shares / 2, alice);

        assertEq(vault.getNextWithdrawNonce(alice), withdrawalNonce + 1);
        assertEq(withdrawalKey, keccak256(abi.encode(alice, withdrawalNonce)));
        assertTrue(vault.isWithdrawalPending(alice, withdrawalNonce));

        vm.warp(time);

        vault.finishRedeem(withdrawalKey);
        assertFalse(vault.isWithdrawalPending(alice, withdrawalNonce));
        assertEq(depositToken.balanceOf(address(alice)), amount / 2);
    }
}
