// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Vm.sol";
import "forge-std/Test.sol";
import "forge-std/console.sol";
import "solady/src/utils/LibClone.sol";

import "../../src/Core.sol";
import "../../src/SlashStore.sol";
import "../../src/NativeNode.sol";
import "../../src/NativeVault.sol";
import "../helpers/ProxyDeployment.sol";
import "../../src/entities/VaultLib.sol";
import "../../src/interfaces/Constants.sol";
import "../../src/entities/NativeVaultLib.sol";
import "../../src/entities/BeaconProofsLib.sol";
import "../../src/interfaces/IKarakBaseVault.sol";

struct ValidatorFieldProof {
    bytes32 beaconStateRoot;
    bytes beaconStateRootProof;
    bytes32 blockHeaderRoot;
    uint64 slot;
    bytes32[] validatorFields;
    uint40 validatorIndex;
    bytes validatorProof;
    bytes32 validatorRoot;
}

struct WithdrawProof {
    uint256 amount;
    bytes32[] amountProof;
    bytes32 headerRoot;
    uint64 slot;
    uint256 validatorIndex;
    bytes32[] validatorIndexProof;
    uint8 withdrawalIndex;
}

contract NativeVaultTest is Test {
    Core core;
    NativeNode nativeNode;
    NativeVault nativeVault;

    address manager = address(11);
    address operator = address(12);
    address slashStore = address(13);
    address proxyAdmin = address(14);
    address slashingVetoCommittee = address(15);

    ValidatorFieldProof validatorFieldProof;
    ValidatorFieldProof updateBalanceValidatorFieldProof;
    ValidatorFieldProof paritalWithdrawValidator;
    WithdrawProof withdrawProof;
    WithdrawProof partialWithdrawProof;

    uint256 internal constant beaconGenesisTimestamp = 1606824023;
    address mockAddressOfNode = address(0x8e609AC80F4324E499A6eFD24f221a2CAA868224);
    bytes32 internal constant STATE_SLOT = 0x0e977c4f52771ae90b9a885786536a06e14de7815be95b6ed56cdea86f6fc300;
    bytes32 nodeToOwnerSlot = bytes32(uint256(STATE_SLOT) + 3);
    bytes32 ownerToNodeSlot = bytes32(uint256(STATE_SLOT) + 4);

    function setUp() public {
        vm.etch(
            Constants.BEACON_ROOTS_ADDRESS,
            hex"3373fffffffffffffffffffffffffffffffffffffffe14604d57602036146024575f5ffd5b5f35801560495762001fff810690815414603c575f5ffd5b62001fff01545f5260205ff35b5f5ffd5b62001fff42064281555f359062001fff015500"
        );
        // Setup core
        uint32 hookCallGasLimit = 500_000;
        uint32 hookGasBuffer = 40_000;
        uint32 supportsInterfaceGasLimit = 20_000;
        address nativeVaultImpl = address(new NativeVault());
        core = Core(ProxyDeployment.factoryDeploy(address(new Core()), proxyAdmin));
        core.initialize(
            nativeVaultImpl, manager, slashingVetoCommittee, hookCallGasLimit, supportsInterfaceGasLimit, hookGasBuffer
        );
        address[] memory assets = new address[](1);
        assets[0] = Constants.DEAD_BEEF;
        address[] memory slashingHandlers = new address[](1);
        slashingHandlers[0] = slashStore;
        core.allowlistAssets(assets, slashingHandlers);

        // Setup NativeNode implementation
        address nativeNodeImpl = address(new NativeNode());

        // Deploy Vaults
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](1);
        vaultConfigs[0] = VaultLib.Config({
            asset: Constants.DEAD_BEEF,
            decimals: 18,
            operator: operator,
            name: "NativeTestVault",
            symbol: "NTV",
            extraData: abi.encode(address(manager), slashStore, address(nativeNodeImpl))
        });

        vm.startPrank(operator);
        IKarakBaseVault[] memory vaults = core.deployVaults(vaultConfigs, address(0));
        nativeVault = NativeVault(address(vaults[0]));
        vm.stopPrank();

        string memory root = vm.projectRoot();
        string memory filename = "validator_field_data";
        string memory path = string.concat(root, "/test/fixtures/", filename, ".json");
        string memory file = vm.readFile(path);
        bytes memory parsed = vm.parseJson(file);
        validatorFieldProof = abi.decode(parsed, (ValidatorFieldProof));

        filename = "withdraw_data";
        path = string.concat(root, "/test/fixtures/", filename, ".json");
        file = vm.readFile(path);
        parsed = vm.parseJson(file);
        withdrawProof = abi.decode(parsed, (WithdrawProof));

        filename = "update_validator_data";
        path = string.concat(root, "/test/fixtures/", filename, ".json");
        file = vm.readFile(path);
        parsed = vm.parseJson(file);
        updateBalanceValidatorFieldProof = abi.decode(parsed, (ValidatorFieldProof));

        filename = "partial_withdraw_data";
        path = string.concat(root, "/test/fixtures/", filename, ".json");
        file = vm.readFile(path);
        parsed = vm.parseJson(file);
        partialWithdrawProof = abi.decode(parsed, (WithdrawProof));

        filename = "partial_withdraw_validator_data";
        path = string.concat(root, "/test/fixtures/", filename, ".json");
        file = vm.readFile(path);
        parsed = vm.parseJson(file);
        paritalWithdrawValidator = abi.decode(parsed, (ValidatorFieldProof));
    }

    function slotTimestamp(uint64 slot) public pure returns (uint256) {
        return beaconGenesisTimestamp + ((slot + 1) * 12);
    }

    function timestamp_idx(uint256 timestamp) public pure returns (bytes32) {
        return bytes32(uint256(timestamp % Constants.BEACON_ROOTS_RING_BUFFER));
    }

    function root_idx(uint256 timestamp) public pure returns (bytes32) {
        return bytes32(uint256(timestamp % Constants.BEACON_ROOTS_RING_BUFFER + Constants.BEACON_ROOTS_RING_BUFFER));
    }

    function test_initialize_fail_reinitialize() public {
        vm.expectRevert(Initializable.InvalidInitialization.selector);
        nativeVault.initialize(address(core), operator, address(0), "ABCDE", "EFG", bytes(""));
    }

    function test_deposit_revert(uint256 amount, address to) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.deposit(amount, to);
    }

    function test_mint_revert(uint256 shares, address to) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.mint(shares, to);
    }

    function test_transfer_revert(address to, uint256 amount) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.transfer(to, amount);
    }

    function test_transferFrom_revert(address from, address to, uint256 amount) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.transferFrom(from, to, amount);
    }

    function test_withdraw_revert(uint256 assets, address to, address owner) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.withdraw(assets, to, owner);
    }

    function test_redeem_revert(uint256 shares, address to, address owner) public {
        vm.expectRevert(NotImplemented.selector);
        nativeVault.redeem(shares, to, owner);
    }

    function test_createNode_duplicate_revert() public {
        nativeVault.createNode();
        vm.expectRevert(LibClone.DeploymentFailed.selector);
        nativeVault.createNode();
    }

    function test_startSnapshot_notNodeOwner_revert(address attacker) public {
        vm.assume(attacker != address(this));
        nativeVault.createNode();
        vm.startPrank(attacker);
        vm.expectRevert(NotNodeOwner.selector);
        nativeVault.startSnapshot(false);
    }

    function test_startSnapshot_noBalanceChange_revert() public {
        nativeVault.createNode();
        vm.expectRevert(NoBalanceUpdateToSnapshot.selector);
        nativeVault.startSnapshot(true);
    }

    function test_initialize() public view {
        assertEq(nativeVault.owner(), address(core));
        assertEq(nativeVault.asset(), Constants.DEAD_BEEF);
        assertEq(nativeVault.name(), "NativeTestVault");
        assertEq(nativeVault.symbol(), "NTV");
        assertEq(nativeVault.decimals(), 18);
    }

    function test_createNode(address nodeOwner) public {
        vm.startPrank(nodeOwner);
        address node = nativeVault.createNode();

        assertEq(nodeOwner, nativeVault.getNodeOwner(node));
        assertEq(0, nativeVault.withdrawableWei(nodeOwner));
        assertEq(0, nativeVault.currentSnapshotTimestamp(nodeOwner));
        assertEq(0, nativeVault.lastSnapshotTimestamp(nodeOwner));
        vm.stopPrank();
    }

    function test_startSnapshot_no_validators(bytes32 parentRoot) public {
        vm.assume(parentRoot != bytes32(0));

        address node = nativeVault.createNode();
        assertEq(nativeVault.getNodeOwner(node), address(this));

        vm.store(Constants.BEACON_ROOTS_ADDRESS, timestamp_idx(block.timestamp), bytes32(uint256(block.timestamp)));
        vm.store(Constants.BEACON_ROOTS_ADDRESS, root_idx(block.timestamp), parentRoot);

        nativeVault.startSnapshot(false);

        // Both 0 since there is no active validators hence snapshot finalises on starting
        assertEq(nativeVault.currentSnapshotTimestamp(address(this)), 0);
        assertEq(nativeVault.currentSnapshot(address(this)).parentBeaconBlockRoot, 0);
    }

    function test_validateWithdrawalCredentials() public {
        BeaconProofs.ValidatorProof memory validatorProof = BeaconProofs.ValidatorProof({
            validatorIndex: validatorFieldProof.validatorIndex,
            validatorRoot: validatorFieldProof.validatorRoot,
            proof: validatorFieldProof.validatorProof
        });
        BeaconProofs.ValidatorFieldsProof[] memory validatorFieldsProof = new BeaconProofs.ValidatorFieldsProof[](1);
        validatorFieldsProof[0] = BeaconProofs.ValidatorFieldsProof({
            validatorFields: validatorFieldProof.validatorFields,
            validatorProof: validatorProof
        });
        BeaconProofs.BeaconStateRootProof memory beaconStateRootProof = BeaconProofs.BeaconStateRootProof({
            timestamp: uint64(slotTimestamp(validatorFieldProof.slot)),
            beaconStateRoot: validatorFieldProof.beaconStateRoot,
            proof: validatorFieldProof.beaconStateRootProof
        });

        vm.etch(address(mockAddressOfNode), type(NativeNode).runtimeCode);
        vm.store(
            address(nativeVault),
            keccak256(abi.encode(address(this), ownerToNodeSlot)),
            bytes32(abi.encode(mockAddressOfNode))
        );
        vm.store(
            Constants.BEACON_ROOTS_ADDRESS,
            timestamp_idx(beaconStateRootProof.timestamp),
            bytes32(uint256(beaconStateRootProof.timestamp))
        );
        vm.store(
            Constants.BEACON_ROOTS_ADDRESS,
            root_idx(beaconStateRootProof.timestamp),
            validatorFieldProof.blockHeaderRoot
        );
        nativeVault.validateWithdrawalCredentials(address(this), beaconStateRootProof, validatorFieldsProof);
        assertEq(nativeVault.activeValidatorCount(address(this)), 1);
        assertEq(nativeVault.balanceOf(address(this)), uint256(32 * 1 ether));
    }

    function test_startSnapshot(bytes32 parentRoot) public {
        vm.assume(parentRoot != bytes32(0));
        test_validateWithdrawalCredentials();

        address node = nativeVault.createNode();
        assertEq(nativeVault.getNodeOwner(node), address(this));

        vm.store(Constants.BEACON_ROOTS_ADDRESS, timestamp_idx(block.timestamp), bytes32(uint256(block.timestamp)));
        vm.store(Constants.BEACON_ROOTS_ADDRESS, root_idx(block.timestamp), parentRoot);

        nativeVault.startSnapshot(false);

        assertEq(nativeVault.currentSnapshotTimestamp(address(this)), block.timestamp);
        assertEq(nativeVault.currentSnapshot(address(this)).parentBeaconBlockRoot, parentRoot);
    }
}
