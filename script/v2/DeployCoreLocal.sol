// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Script, console2} from "forge-std/Script.sol";
import {ERC1967Factory} from "solady/src/utils/ERC1967Factory.sol";
import {Core} from "../../src/Core.sol";
import {Vault} from "../../src/Vault.sol";
import {SlashingHandler} from "../../src/SlashingHandler.sol";
import {ERC20Mintable} from "../../test/helpers/contracts/ERC20Mintable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeployCoreLocal is Script {
    address internal constant CORE_PROXY_ADMIN = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address internal constant CORE_MANAGER = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address internal constant CORE_VETO_COMMITTEE = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address internal constant SLASHING_HANDLER_PROXY_ADMIN = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    uint32 internal constant HOOK_CALL_GAS_LIMIT = 500_000;
    uint32 internal constant HOOK_GAS_BUFFER = 40_000;
    uint32 internal constant SUPPORTS_INTERFACE_GAS_LIMIT = 20_000;

    function run() public {
        console2.log("Running DeployCoreLocal script. Signer:", msg.sender);
        console2.log();

        (address coreImpl, address vaultImpl, address slashingHandlerImpl) = deployImpls();
        console2.log("Deployed Core(impl):", coreImpl);
        console2.log("Deployed Vault(impl):", vaultImpl);
        console2.log("Deployed SlashingHandler(impl):", slashingHandlerImpl);
        console2.log();

        (Core coreProxy, SlashingHandler slashingHandlerProxy) = deployProxies(coreImpl, slashingHandlerImpl);
        console2.log("Deployed Core(proxy):", address(coreProxy));
        console2.log("Deployed SlashingHandler(proxy):", address(slashingHandlerProxy));
        console2.log();

        initializeCore(coreProxy, vaultImpl);
        console2.log("Initialized Core(proxy) with params:");
        console2.log("\tVault Implementation:", vaultImpl);
        console2.log("\tManager:", CORE_MANAGER);
        console2.log("\tVeto Committee:", CORE_VETO_COMMITTEE);
        console2.log();

        ERC20Mintable testERC20 = deployTestERC20();
        testERC20.mint(msg.sender, 1e6 * 1e6);
        console2.log("Deployed TEST ERC20:", address(testERC20));
        console2.log("Minted 1,000,000 TEST ERC20 to msg.sender");
        console2.log();

        IERC20[] memory tokens = new IERC20[](1);
        tokens[0] = IERC20(address(testERC20));

        initializeSlashingHandler(slashingHandlerProxy, tokens);
        console2.log("Initialized SlashingHandler(proxy) with params:");
        console2.log("\tTokens:");
        for (uint256 i = 0; i < tokens.length; i++) {
            console2.log("\t ", i, "-", address(tokens[i]));
        }
        console2.log();
    }

    function deployImpls() public returns (address coreImpl, address vaultImpl, address slashingHandlerImpl) {
        vm.startBroadcast();
        coreImpl = address(new Core());
        vaultImpl = address(new Vault());
        slashingHandlerImpl = address(new SlashingHandler());
        vm.stopBroadcast();
    }

    function deployProxies(address coreImpl, address slashingHandlerImpl)
        public
        returns (Core coreProxy, SlashingHandler slashingHandlerProxy)
    {
        vm.startBroadcast();
        ERC1967Factory factory = new ERC1967Factory();
        coreProxy = Core(factory.deploy(coreImpl, CORE_PROXY_ADMIN));
        slashingHandlerProxy = SlashingHandler(factory.deploy(slashingHandlerImpl, SLASHING_HANDLER_PROXY_ADMIN));
        vm.stopBroadcast();
    }

    function initializeCore(Core core, address vaultImpl) public {
        vm.startBroadcast();
        core.initialize(
            vaultImpl,
            CORE_MANAGER,
            CORE_VETO_COMMITTEE,
            HOOK_CALL_GAS_LIMIT,
            SUPPORTS_INTERFACE_GAS_LIMIT,
            HOOK_GAS_BUFFER
        );
        vm.stopBroadcast();
    }

    function deployTestERC20() public returns (ERC20Mintable testERC20) {
        vm.startBroadcast();
        testERC20 = new ERC20Mintable();
        testERC20.initialize("Test", "TEST", 6);
        vm.stopBroadcast();
    }

    function initializeSlashingHandler(SlashingHandler slashingHandler, IERC20[] memory tokens) public {
        vm.startBroadcast();
        slashingHandler.initialize(msg.sender, tokens);
        vm.stopBroadcast();
    }
}
