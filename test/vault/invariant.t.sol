// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../../src/Vault.sol";
import "../../src/interfaces/Errors.sol";

import "../helpers/ProxyDeployment.sol";
import "../helpers/contracts/ERC20Mintable.sol";
import "../helpers/contracts/InvariantHandlers.sol";

contract InvariantVaultTest is Test {
    Vault vault;
    VaultHandler handler;
    ERC20Mintable depositToken;

    address core = address(2);
    address manager = address(3);
    address operator = address(4);
    address vetoCommittee = address(5);

    function setUp() public {
        depositToken = new ERC20Mintable();

        vm.startPrank(core);
        vault = Vault(ProxyDeployment.factoryDeploy(address(new Vault()), core));
        vault.initialize(core, operator, address(depositToken), "TestVault", "TST", bytes(""));
        vm.stopPrank();

        handler = new VaultHandler(vault, depositToken);

        vm.startPrank(address(handler));
        depositToken.mint(address(handler), 2000);
        depositToken.approve(address(vault), 2000);
        vault.deposit(2000, address(handler), 2000);
        targetContract(address(handler));
    }

    //function invariant_withdraw_nonce() public {}
}
