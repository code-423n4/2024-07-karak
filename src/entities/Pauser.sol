// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.21;

import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";
import {ContextUpgradeable} from "@openzeppelin-upgradeable/utils/ContextUpgradeable.sol";

/// @dev Pauser contract that modifies https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/PausableUpgradeable.sol
/// to enable the ability for pausing specific functions using bitmaps
contract Pauser is Initializable, ContextUpgradeable {
    struct PauserStorage {
        uint256 _paused;
    }

    // keccak256(abi.encode(uint256(keccak256("pauser.storage")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant PAUSER_STORAGE_SLOT = 0x271441cddf42198c20456f920f5dac04f245854c82f280f2e59e7095958d0b00;

    function _getPauserStorage() private pure returns (PauserStorage storage $) {
        assembly {
            $.slot := PAUSER_STORAGE_SLOT
        }
    }

    event Paused(address account, uint256 map);

    event Unpaused(address account, uint256 map);

    error EnforcedPause();

    error EnforcedPauseFunction(uint8 functionIndex);

    error AttemptedUnpauseWhilePausing();

    error AttemptedPauseWhileUnpausing();

    function __Pauser_init() internal onlyInitializing {
        __Pauser_init_unchained();
    }

    function __Pauser_init_unchained() internal onlyInitializing {
        _getPauserStorage()._paused = 0;
    }

    modifier whenNotPaused() {
        if (paused()) revert EnforcedPause();
        _;
    }

    modifier whenFunctionNotPaused(uint8 index) {
        if (paused(index)) revert EnforcedPauseFunction(index);
        _;
    }

    function paused() public view virtual returns (bool) {
        return (_getPauserStorage()._paused != 0);
    }

    function paused(uint8 index) public view virtual returns (bool) {
        uint256 mask = 1 << index;
        return ((_getPauserStorage()._paused & mask) != 0);
    }

    function pausedMap() public view virtual returns (uint256) {
        return _getPauserStorage()._paused;
    }

    function _pause(uint256 map) internal virtual {
        PauserStorage storage self = _getPauserStorage();
        if ((self._paused & map) != self._paused) revert AttemptedUnpauseWhilePausing();
        self._paused = map;
        emit Paused(_msgSender(), map);
    }

    function _unpause(uint256 map) internal virtual {
        PauserStorage storage self = _getPauserStorage();
        if (self._paused & map != map) revert AttemptedPauseWhileUnpausing();
        self._paused = map;
        emit Unpaused(_msgSender(), map);
    }
}
