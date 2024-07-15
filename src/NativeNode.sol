// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Ownable} from "solady/src/auth/Ownable.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

import {Pauser} from "./entities/Pauser.sol";
import {INativeNode} from "./interfaces/INativeNode.sol";

import "./interfaces/Errors.sol";
import "./interfaces/Events.sol";
import "./interfaces/Constants.sol";

contract NativeNode is Pauser, Ownable, INativeNode, ReentrancyGuard {
    address nodeOwner;

    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the NativeNode
    /// @param _owner: The owner of the node, which should be the NativeVault in most cases
    /// @param _nodeOwner: The logical owner of the node whom the funds belong to
    function initialize(address _owner, address _nodeOwner) external initializer {
        _initializeOwner(_owner);
        __Pauser_init();

        nodeOwner = _nodeOwner;
    }

    /// @notice Lets the NativeVault withdraw funds to the given address.
    /// In case of slashed assets the NativeVault withdraws those funds to the slashStore
    /// @param to: address of receivers of the funds
    /// @param weiAmount: amount to be withdrawn in wei
    function withdraw(address to, uint256 weiAmount)
        external
        onlyOwner
        nonReentrant
        whenFunctionNotPaused(Constants.PAUSE_NODE_WITHDRAW)
    {
        Address.sendValue(payable(to), weiAmount);
        emit NodeETHWithdrawn(address(this), to, weiAmount);
    }

    /// @notice Lets the NativeVault pause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, type(uint256).max to pause all functions
    function pause(uint256 map) external onlyOwner {
        _pause(map);
    }

    /// @notice Lets the NativeVault unpause NativeNode functions
    /// @param map: 256 bitmap for paused and unpaused functions, 0 to unpause all functions
    function unpause(uint256 map) external onlyOwner {
        _unpause(map);
    }
    /* ======================================== */
}
