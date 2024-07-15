// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {Constants} from "../interfaces/Constants.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "../interfaces/Errors.sol";
import "../interfaces/Events.sol";

library HookLib {
    /// @notice Performs low level call with limited gas and limit return data
    /// @param target address of the target contract
    /// @param data the calldata
    /// @param gasLimit the gaslimit with which the call is to be performed
    /// @return success boolean representing call was successful or not
    /// @return returnVal returned value by the contract
    function performLowLevelCallAndLimitReturnData(address target, bytes memory data, uint256 gasLimit)
        internal
        returns (bool success, bytes32 returnVal)
    {
        bytes32[1] memory returnData;

        assembly {
            // pointer(data) + 0x20 is where actual data is available
            // pointer(data) contains the size of the data in bytes
            // returnData is where the return value is written to
            // we limit size of return value to 32 bytes (same as the size of `returnData` above)
            success :=
                call(
                    gasLimit, // gas available to the inner call
                    target, // address of contract being called
                    0, // ETH (denominated in WEI) being transferred in this call
                    add(data, 0x20), // Pointer to actual data (i.e. 32 bytes offset from `data`)
                    mload(data), // Size of actual data (i.e. the value stored in the first 32 bytes at `data`)
                    returnData, // Free pointer as a buffer for the inner call to write the return value
                    32 // 32 bytes size limit for the return value
                )
        }
        returnVal = returnData[0];
    }

    /// @notice Performs low level call to the DSS
    /// @param target address of DSS contract
    /// @param data the calldata
    /// @param ignoreFailure whether to revert tx incase call to DSS fails
    /// @param hookCallGasLimit max gas to perform call with
    /// @param hookGasBuffer gas to perform this function call
    /// @return boolean indicating call succeeded or not
    function callHook(
        address target,
        bytes memory data,
        bool ignoreFailure,
        uint32 hookCallGasLimit,
        uint32 hookGasBuffer
    ) internal returns (bool) {
        if (gasleft() < (hookCallGasLimit * 64 / 63 + hookGasBuffer)) revert NotEnoughGas();

        (bool success, bytes32 returnData) = performLowLevelCallAndLimitReturnData(target, data, hookCallGasLimit);

        if (!ignoreFailure && !success) revert DSSHookCallReverted(returnData);

        if (success) emit HookCallSucceeded(returnData);
        else emit HookCallFailed(returnData);
        return success;
    }

    /// @notice performs a low level call to the dss with given data, returns boolean incase of success or failure
    /// @dev Returns `false` if the interface is not supported since the call wasn't a success if it actually went through
    /// If the call to the DSS is not successful then the tx is reverted based on the `ignoreFailure` param
    /// gas checks are performed to ensure calls are not failed due to OOG error
    /// @param dss address of the DSS
    /// @param data the calldata
    /// @param interfaceId interface to be called
    /// @param ignoreFailure whether the call to DSS can be ignored or not
    /// @param hookCallGasLimit gasLimit to perform call to the DSS
    /// @param supportsInterfaceGasLimit gasLimit to perform `supportsInterface` call to the DSS
    /// @param hookGasBuffer gas to perform this function call
    /// @return boolean indicating hook call passed or failed
    function callHookIfInterfaceImplemented(
        IERC165 dss,
        bytes memory data,
        bytes4 interfaceId,
        bool ignoreFailure,
        uint32 hookCallGasLimit,
        uint32 supportsInterfaceGasLimit,
        uint32 hookGasBuffer
    ) internal returns (bool) {
        if (gasleft() < (supportsInterfaceGasLimit * 64 / 63 + hookGasBuffer)) {
            revert NotEnoughGas();
        }

        (bool success, bytes32 result) = performLowLevelCallAndLimitReturnData(
            address(dss),
            abi.encodeWithSelector(IERC165.supportsInterface.selector, interfaceId),
            supportsInterfaceGasLimit
        );

        if (!success || result == bytes32(0)) {
            // Either call failed or interface isn't implemented
            emit InterfaceNotSupported();
            return false;
        }
        return callHook(address(dss), data, ignoreFailure, hookCallGasLimit, hookGasBuffer);
    }
}
