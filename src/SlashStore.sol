// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Ownable} from "solady/src/auth/Ownable.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {ReentrancyGuard} from "solady/src/utils/ReentrancyGuard.sol";

import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

import "./interfaces/Events.sol";

contract SlashStore is Initializable, Ownable, ReentrancyGuard {
    /* ========== MUTATIVE FUNCTIONS ========== */
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the SlashStore
    /// @param _owner: The owner of the slashStore allowed to withdraw assets
    function initialize(address _owner) external initializer {
        _initializeOwner(_owner);
    }

    /// @notice Emits DepositedSlashedAssets event with address of NativeNode and slashed amount
    receive() external payable {
        emit DepositedSlashedAssets(msg.sender, msg.value);
    }

    /// @notice Lets the owner of the store withdraw funds to an address.
    /// @param to: address of receivers of the funds
    /// @param weiAmount: amount to be withdrawn in wei
    function withdraw(address to, uint256 weiAmount) external nonReentrant onlyOwner {
        Address.sendValue(payable(to), weiAmount);
        emit NodeETHWithdrawn(address(this), to, weiAmount);
    }
    /* ======================================== */
}
