// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Ownable} from "solady/src/auth/Ownable.sol";
import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";
import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interfaces/ISlashingHandler.sol";
import "./interfaces/Errors.sol";

/// @title SlashingHandler
/// @notice Handles slashing logic for each asset since it's not simple as burning for some assets
/// @dev Not all slashing logic has to be sync, some can be async like stETH slashing.
/// @dev Seldom will this need to be upgradeable or ownable but added for flexibility
contract SlashingHandler is Initializable, Ownable, ISlashingHandler {
    string public constant VERSION = "2.0.0";

    // keccak256(abi.encode(uint256(keccak256("slashinghandler.config")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant CONFIG_SLOT = 0x661dfff6e6cdad10b44554a6ab58129a188fa46a74caae866b07c414cb424500;

    struct Config {
        mapping(IERC20 asset => bool) supportedAssets;
    }

    constructor() {
        _disableInitializers();
    }

    /// @notice initializes the slashingHandler: sets owner, list of supported assets
    /// @param owner address of the owner
    /// @param _supportedAssets array of assets can be slashed by the slashinh handler
    function initialize(address owner, IERC20[] calldata _supportedAssets) external initializer {
        _initializeOwner(owner);
        Config storage config = _config();
        for (uint256 i = 0; i < _supportedAssets.length; i++) {
            config.supportedAssets[_supportedAssets[i]] = true;
        }
    }

    /// @notice Adds the token to list of supported assets
    /// @param token address of the token to be added to the list of supported assets
    function addSlashableToken(IERC20 token) external onlyOwner {
        _config().supportedAssets[token] = true;
    }

    /// @notice slashes the specified amount of the token
    /// The vault needs to give approval to the slashing handler prior to slashing
    /// Pulls the assets form the vault and send them to address(0)
    /// @param token address of the token to be slashed
    /// @param amount quantity of assets to be slashed
    function handleSlashing(IERC20 token, uint256 amount) external {
        if (amount == 0) revert ZeroAmount();
        if (!_config().supportedAssets[token]) revert UnsupportedAsset();

        SafeTransferLib.safeTransferFrom(address(token), msg.sender, address(this), amount);
        // Below is where custom logic for each asset lives
        SafeTransferLib.safeTransfer(address(token), address(0), amount);
    }

    function _config() internal pure returns (Config storage $) {
        assembly {
            $.slot := CONFIG_SLOT
        }
    }
}
