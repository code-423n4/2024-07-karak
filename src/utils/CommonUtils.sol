// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

library CommonUtils {
    /// Sorts the array using quick sort inplace
    /// @param arr Array to sort
    function sortArr(address[] memory arr) private pure {
        if (arr.length == 0) return;
        sort(arr, 0, arr.length - 1);
    }

    function sort(address[] memory arr, uint256 left, uint256 right) private pure {
        if (left >= right) return;
        uint256 lastUnsortedInd = left;
        uint256 pivot = right;
        for (uint256 i = left; i < right; i++) {
            if (arr[i] <= arr[pivot]) {
                if (i != lastUnsortedInd) swap(arr, i, lastUnsortedInd);
                lastUnsortedInd++;
            }
        }
        swap(arr, pivot, lastUnsortedInd);
        if (lastUnsortedInd > left) {
            sort(arr, left, lastUnsortedInd - 1);
        }
        sort(arr, lastUnsortedInd, right);
    }

    function swap(address[] memory arr, uint256 left, uint256 right) private pure {
        address temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    /// @notice Sorts the array and checks for duplicates
    /// Intent was to get the array unchanges after sorting
    /// @param arr Array of addresses to check duplicates
    /// @return boolean indicates whether array has duplicates or not
    function hasDuplicates(address[] memory arr) external pure returns (bool) {
        sortArr(arr);
        if (arr.length == 0) return false;
        for (uint256 i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) return true;
        }
        return false;
    }

    function isSmartContract(address addr) external view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(addr)
        }
        return size > 0;
    }
}
