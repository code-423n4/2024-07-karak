// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {LibClone} from "solady/src/utils/LibClone.sol";

import {Operator} from "./Operator.sol";
import {VaultLib} from "./VaultLib.sol";

import {IKarakBaseVault} from "../interfaces/IKarakBaseVault.sol";
import {IDSS} from "../interfaces/IDSS.sol";
import "../interfaces/Constants.sol";
import "../interfaces/Errors.sol";
import "../interfaces/Events.sol";

library CoreLib {
    using Operator for Operator.State;

    /// @custom:storage-location erc7201:core.storage
    struct Storage {
        // Operator
        mapping(address operator => Operator.State) operatorState;
        // Vault
        mapping(address vault => address implementation) vaultToImplMap;
        mapping(address implementation => bool) allowlistedVaultImpl;
        // Assets
        mapping(address asset => address slashingHandler) assetSlashingHandlers;
        // DSS
        mapping(bytes32 slashRoot => bool) slashingRequests;
        mapping(IDSS dss => uint256 slashablePercentageWad) dssMaxSlashablePercentageWad;
        address vaultImpl;
        uint96 vaultNonce;
        address vetoCommittee;
        uint96 nonce;
        uint32 hookCallGasLimit;
        uint32 supportsInterfaceGasLimit;
        uint32 hookGasBuffer;
    }

    function init(
        Storage storage self,
        address _vaultImpl,
        address _vetoCommittee,
        uint32 _hookCallGasLimit,
        uint32 _supportsInterfaceGasLimit,
        uint32 _hookGasBuffer
    ) internal {
        if (_vaultImpl == address(0) || _vetoCommittee == address(0)) {
            revert ZeroAddress();
        }
        self.vaultImpl = _vaultImpl;
        self.vetoCommittee = _vetoCommittee;
        updateGasValues(self, _hookCallGasLimit, _supportsInterfaceGasLimit, _hookGasBuffer);
    }

    function updateGasValues(
        Storage storage self,
        uint32 _hookCallGasLimit,
        uint32 _supportsInterfaceGasLimit,
        uint32 _hookGasBuffer
    ) internal {
        self.hookCallGasLimit = _hookCallGasLimit;
        self.hookGasBuffer = _hookGasBuffer;
        self.supportsInterfaceGasLimit = _supportsInterfaceGasLimit;
    }

    function allowlistAssets(Storage storage self, address[] memory assets, address[] memory slashingHandlers)
        external
    {
        if (assets.length != slashingHandlers.length) revert LengthsDontMatch();
        for (uint256 i = 0; i < assets.length; i++) {
            if (slashingHandlers[i] == address(0) || assets[i] == address(0)) revert ZeroAddress();
            self.assetSlashingHandlers[assets[i]] = slashingHandlers[i];
        }
    }

    function validateVaultConfigs(Storage storage self, VaultLib.Config[] calldata vaultConfigs, address implementation)
        public
        view
    {
        if (!(implementation == address(0) || isVaultImplAllowlisted(self, implementation))) {
            revert VaultImplNotAllowlisted();
        }
        for (uint256 i = 0; i < vaultConfigs.length; i++) {
            if (self.assetSlashingHandlers[vaultConfigs[i].asset] == address(0)) revert AssetNotAllowlisted();
        }
    }

    function createVault(
        Storage storage self,
        address operator,
        address depositToken,
        string memory name,
        string memory symbol,
        bytes memory extraData,
        address implementation
    ) internal returns (IKarakBaseVault) {
        // Use Create2 to determine the address before hand
        bytes32 salt = keccak256(abi.encodePacked(operator, depositToken, self.vaultNonce++));

        address expectedNewVaultAddr =
            LibClone.predictDeterministicAddressERC1967BeaconProxy(address(this), salt, address(this));

        self.vaultToImplMap[address(expectedNewVaultAddr)] = implementation;

        IKarakBaseVault vault = cloneVault(salt);
        vault.initialize(address(this), operator, depositToken, name, symbol, extraData);

        // Extra protection to ensure the vault was created with the correct address
        if (expectedNewVaultAddr != address(vault)) {
            revert VaultCreationFailedAddrMismatch(expectedNewVaultAddr, address(vault));
        }

        emit NewVault(address(vault), implementation);
        return vault;
    }

    function deployVaults(
        Storage storage self,
        address operator,
        address implementation,
        VaultLib.Config[] calldata vaultConfigs
    ) external returns (IKarakBaseVault[] memory) {
        validateVaultConfigs(self, vaultConfigs, implementation);
        IKarakBaseVault[] memory vaults = new IKarakBaseVault[](vaultConfigs.length);

        if (implementation == address(0)) {
            // Allows us to change all the standard vaults to a new implementation
            implementation = Constants.DEFAULT_VAULT_IMPLEMENTATION_FLAG;
        }

        for (uint256 i = 0; i < vaultConfigs.length; i++) {
            IKarakBaseVault vault = createVault(
                self,
                operator,
                vaultConfigs[i].asset,
                vaultConfigs[i].name,
                vaultConfigs[i].symbol,
                vaultConfigs[i].extraData,
                implementation
            );
            vaults[i] = vault;
            self.operatorState[operator].addVault(vault);
            emit DeployedVault(operator, address(vault), vaultConfigs[i].asset);
        }
        return vaults;
    }

    function cloneVault(bytes32 salt) internal returns (IKarakBaseVault) {
        return IKarakBaseVault(address(LibClone.deployDeterministicERC1967BeaconProxy(address(this), salt)));
    }

    function allowlistVaultImpl(Storage storage self, address implementation) internal {
        self.allowlistedVaultImpl[implementation] = true;
    }

    function isVaultImplAllowlisted(Storage storage self, address implementation) internal view returns (bool) {
        return self.allowlistedVaultImpl[implementation] || implementation == self.vaultImpl;
    }

    function isDSSRegistered(Storage storage self, IDSS dss) internal view returns (bool) {
        return self.dssMaxSlashablePercentageWad[dss] != 0;
    }
}
