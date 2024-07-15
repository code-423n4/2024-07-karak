// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";

import "../../src/interfaces/IDSS.sol";

import "../helpers/ProxyDeployment.sol";
import "../helpers/contracts/MockDSS.sol";

contract DSSHook is Test {
    MockDSS dss;
    address proxyAdmin = address(21);
    address dssImpl = address(new MockDSS());

    function setUp() public {
        dss = MockDSS(ProxyDeployment.factoryDeploy(dssImpl, proxyAdmin));
        dss.storeInterfaces();
    }

    function test_supports_interface() public view {
        bytes4 supportedInterfaces = IDSS.registrationHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.unregistrationHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.requestUpdateStakeHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.cancelUpdateStakeHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.finishUpdateStakeHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.requestSlashingHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.cancelSlashingHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));

        supportedInterfaces = IDSS.finishSlashingHook.selector;
        assertTrue(dss.supportsInterface(supportedInterfaces));
    }

    function test_unsupported_interface(bytes4 supportedInterfaces) public view {
        vm.assume(
            supportedInterfaces != IDSS.registrationHook.selector
                && supportedInterfaces != IDSS.unregistrationHook.selector
                && supportedInterfaces != IDSS.requestUpdateStakeHook.selector
                && supportedInterfaces != IDSS.cancelUpdateStakeHook.selector
                && supportedInterfaces != IDSS.finishUpdateStakeHook.selector
                && supportedInterfaces != IDSS.requestSlashingHook.selector
                && supportedInterfaces != IDSS.cancelSlashingHook.selector
                && supportedInterfaces != IDSS.finishSlashingHook.selector
        );
        assertFalse(dss.supportsInterface(supportedInterfaces));
    }
}
