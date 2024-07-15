// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../helpers/OperatorHelper.sol";
import "../../src/interfaces/Errors.sol";

contract VaultImpl is OperatorHelper {
    function test_change_standard_vault_implementation(address newVaultImpl) public {
        vm.assume(newVaultImpl != address(0) && newVaultImpl != Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG);
        core.changeStandardImplementation(newVaultImpl);

        bytes32[] memory slots = new bytes32[](1);
        slots[0] = bytes32(
            uint256(uint256(bytes32(0x13c729cff436dc8ac22d145f2c778f6a709d225083f39538cc5e2674f2f10700)) + uint256(6))
        );
        bytes32[] memory results = core.extSloads(slots);
        address storedVaultImpl = address(uint160(uint256(results[0])));
        assertEq(storedVaultImpl, newVaultImpl);
    }

    function test_change_standard_vault_implementation_zero_addr() public {
        vm.expectRevert(ZeroAddress.selector);
        core.changeStandardImplementation(address(0));
        vm.expectRevert(ReservedAddress.selector);
        core.changeStandardImplementation(Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG);
    }

    function test_change_implementation_for_vault_not_allowed(address newVaultImpl) public {
        vm.assume(newVaultImpl != address(0));
        addVaults();

        vm.expectRevert(VaultImplNotAllowlisted.selector);
        core.changeImplementationForVault(address(vaults[0]), newVaultImpl);
    }

    function test_change_implementation_for_vault(address newVaultImpl1, address newVaultImpl2) public {
        vm.assume(newVaultImpl1 != address(0));
        vm.assume(newVaultImpl1 != address(1));
        vm.assume(newVaultImpl2 != address(0));
        vm.assume(newVaultImpl2 != address(1));

        addVaults();

        core.allowlistVaultImpl(newVaultImpl1);
        core.allowlistVaultImpl(newVaultImpl2);

        core.changeImplementationForVault(address(vaults[0]), newVaultImpl1);
        assertEq(core.implementation(address(vaults[0])), newVaultImpl1);

        core.changeImplementationForVault(address(vaults[1]), newVaultImpl2);
        assertEq(core.implementation(address(vaults[1])), newVaultImpl2);
    }
}
