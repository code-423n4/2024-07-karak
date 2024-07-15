export const IVault = {
  "abi": [
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "asset",
      "inputs": [],
      "outputs": [
        {
          "name": "assetTokenAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "assetType",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "enum IVault.AssetType"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "convertToAssets",
      "inputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "convertToShares",
      "inputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "depositor",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "name": "_owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_depositToken",
          "type": "address",
          "internalType": "contract IERC20"
        },
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_symbol",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_assetType",
          "type": "uint8",
          "internalType": "enum IVault.AssetType"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "maxDeposit",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "maxAssets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "maxMint",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "maxShares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "maxRedeem",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "maxShares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "maxWithdraw",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "maxAssets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "pause",
      "inputs": [
        {
          "name": "toPause",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "previewDeposit",
      "inputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "previewMint",
      "inputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "previewRedeem",
      "inputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "previewWithdraw",
      "inputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "redeem",
      "inputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setLimit",
      "inputs": [
        {
          "name": "newLimit",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalAssets",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Deposit",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "assets",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdraw",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "assets",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "assetType()": "3fe3347a",
    "balanceOf(address)": "70a08231",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "initialize(address,address,string,string,uint8)": "8420ce99",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "owner()": "8da5cb5b",
    "pause(bool)": "02329a29",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "renounceOwnership()": "715018a6",
    "setLimit(uint256)": "27ea6f2b",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"assetTokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"assetType\",\"outputs\":[{\"internalType\":\"enum IVault.AssetType\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"depositor\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"_depositToken\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"enum IVault.AssetType\",\"name\":\"_assetType\",\"type\":\"uint8\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newLimit\",\"type\":\"uint256\"}],\"name\":\"setLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets a `value` amount of tokens as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"asset()\":{\"details\":\"Returns the address of the underlying token used for the Vault for accounting, depositing, and withdrawing. - MUST be an ERC-20 token contract. - MUST NOT revert.\"},\"balanceOf(address)\":{\"details\":\"Returns the value of tokens owned by `account`.\"},\"convertToAssets(uint256)\":{\"details\":\"Returns the amount of assets that the Vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the \\u201cper-user\\u201d price-per-share, and instead should reflect the \\u201caverage-user\\u2019s\\u201d price-per-share, meaning what the average user should expect to see when exchanging to and from.\"},\"convertToShares(uint256)\":{\"details\":\"Returns the amount of shares that the Vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the \\u201cper-user\\u201d price-per-share, and instead should reflect the \\u201caverage-user\\u2019s\\u201d price-per-share, meaning what the average user should expect to see when exchanging to and from.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token.\"},\"maxDeposit(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be deposited into the Vault for the receiver, through a deposit call. - MUST return a limited value if receiver is subject to some deposit limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of assets that may be deposited. - MUST NOT revert.\"},\"maxMint(address)\":{\"details\":\"Returns the maximum amount of the Vault shares that can be minted for the receiver, through a mint call. - MUST return a limited value if receiver is subject to some mint limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of shares that may be minted. - MUST NOT revert.\"},\"maxRedeem(address)\":{\"details\":\"Returns the maximum amount of Vault shares that can be redeemed from the owner balance in the Vault, through a redeem call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST return balanceOf(owner) if owner is not subject to any withdrawal limit or timelock. - MUST NOT revert.\"},\"maxWithdraw(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be withdrawn from the owner balance in the Vault, through a withdraw call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST NOT revert.\"},\"mint(uint256,address)\":{\"details\":\"Mints exactly shares Vault shares to receiver by depositing amount of underlying tokens. - MUST emit the Deposit event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the mint   execution, and are accounted for during mint. - MUST revert if all of shares cannot be minted (due to deposit limit being reached, slippage, the user not   approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault\\u2019s underlying asset token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"previewDeposit(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that would be minted in a deposit   call in the same transaction. I.e. deposit should return the same or more shares as previewDeposit if called   in the same transaction. - MUST NOT account for deposit limits like those returned from maxDeposit and should always act as though the   deposit would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewDeposit SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewMint(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that would be deposited in a mint call   in the same transaction. I.e. mint should return the same or fewer assets as previewMint if called in the   same transaction. - MUST NOT account for mint limits like those returned from maxMint and should always act as though the mint   would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewMint SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting.\"},\"previewRedeem(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their redeemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that would be withdrawn in a redeem call   in the same transaction. I.e. redeem should return the same or more assets as previewRedeem if called in the   same transaction. - MUST NOT account for redemption limits like those returned from maxRedeem and should always act as though the   redemption would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewRedeem SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by redeeming.\"},\"previewWithdraw(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that would be burned in a withdraw   call in the same transaction. I.e. withdraw should return the same or fewer shares as previewWithdraw if   called   in the same transaction. - MUST NOT account for withdrawal limits like those returned from maxWithdraw and should always act as though   the withdrawal would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewWithdraw SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalAssets()\":{\"details\":\"Returns the total amount of the underlying asset that is \\u201cmanaged\\u201d by Vault. - SHOULD include any compounding that occurs from yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert.\"},\"totalSupply()\":{\"details\":\"Returns the value of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"withdraw(uint256,address,address)\":{\"details\":\"Burns shares from owner and sends exactly assets of underlying tokens to receiver. - MUST emit the Withdraw event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   withdraw execution, and are accounted for during withdraw. - MUST revert if all of assets cannot be withdrawn (due to withdrawal limit being reached, slippage, the owner   not having enough shares, etc). Note that some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/IVault.sol\":\"IVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deposit",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Withdraw",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "asset",
          "outputs": [
            {
              "internalType": "address",
              "name": "assetTokenAddress",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "assetType",
          "outputs": [
            {
              "internalType": "enum IVault.AssetType",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToAssets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "contract IERC20",
              "name": "_depositToken",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "enum IVault.AssetType",
              "name": "_assetType",
              "type": "uint8"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxAssets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxMint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxRedeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxWithdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxAssets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "toPause",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewMint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewRedeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewWithdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newLimit",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setLimit"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalAssets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "allowance(address,address)": {
            "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
          },
          "approve(address,uint256)": {
            "details": "Sets a `value` amount of tokens as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
          },
          "asset()": {
            "details": "Returns the address of the underlying token used for the Vault for accounting, depositing, and withdrawing. - MUST be an ERC-20 token contract. - MUST NOT revert."
          },
          "balanceOf(address)": {
            "details": "Returns the value of tokens owned by `account`."
          },
          "convertToAssets(uint256)": {
            "details": "Returns the amount of assets that the Vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and from."
          },
          "convertToShares(uint256)": {
            "details": "Returns the amount of shares that the Vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and from."
          },
          "decimals()": {
            "details": "Returns the decimals places of the token."
          },
          "maxDeposit(address)": {
            "details": "Returns the maximum amount of the underlying asset that can be deposited into the Vault for the receiver, through a deposit call. - MUST return a limited value if receiver is subject to some deposit limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of assets that may be deposited. - MUST NOT revert."
          },
          "maxMint(address)": {
            "details": "Returns the maximum amount of the Vault shares that can be minted for the receiver, through a mint call. - MUST return a limited value if receiver is subject to some mint limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of shares that may be minted. - MUST NOT revert."
          },
          "maxRedeem(address)": {
            "details": "Returns the maximum amount of Vault shares that can be redeemed from the owner balance in the Vault, through a redeem call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST return balanceOf(owner) if owner is not subject to any withdrawal limit or timelock. - MUST NOT revert."
          },
          "maxWithdraw(address)": {
            "details": "Returns the maximum amount of the underlying asset that can be withdrawn from the owner balance in the Vault, through a withdraw call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST NOT revert."
          },
          "mint(uint256,address)": {
            "details": "Mints exactly shares Vault shares to receiver by depositing amount of underlying tokens. - MUST emit the Deposit event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the mint   execution, and are accounted for during mint. - MUST revert if all of shares cannot be minted (due to deposit limit being reached, slippage, the user not   approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "previewDeposit(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that would be minted in a deposit   call in the same transaction. I.e. deposit should return the same or more shares as previewDeposit if called   in the same transaction. - MUST NOT account for deposit limits like those returned from maxDeposit and should always act as though the   deposit would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewDeposit SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing."
          },
          "previewMint(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that would be deposited in a mint call   in the same transaction. I.e. mint should return the same or fewer assets as previewMint if called in the   same transaction. - MUST NOT account for mint limits like those returned from maxMint and should always act as though the mint   would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewMint SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting."
          },
          "previewRedeem(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their redeemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that would be withdrawn in a redeem call   in the same transaction. I.e. redeem should return the same or more assets as previewRedeem if called in the   same transaction. - MUST NOT account for redemption limits like those returned from maxRedeem and should always act as though the   redemption would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewRedeem SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by redeeming."
          },
          "previewWithdraw(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that would be burned in a withdraw   call in the same transaction. I.e. withdraw should return the same or fewer shares as previewWithdraw if   called   in the same transaction. - MUST NOT account for withdrawal limits like those returned from maxWithdraw and should always act as though   the withdrawal would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewWithdraw SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing."
          },
          "symbol()": {
            "details": "Returns the symbol of the token."
          },
          "totalAssets()": {
            "details": "Returns the total amount of the underlying asset that is “managed” by Vault. - SHOULD include any compounding that occurs from yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert."
          },
          "totalSupply()": {
            "details": "Returns the value of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Moves a `value` amount of tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          },
          "withdraw(uint256,address,address)": {
            "details": "Burns shares from owner and sends exactly assets of underlying tokens to receiver. - MUST emit the Withdraw event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   withdraw execution, and are accounted for during withdraw. - MUST revert if all of assets cannot be withdrawn (due to withdrawal limit being reached, slippage, the owner   not having enough shares, etc). Note that some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/",
        "@openzeppelin/=node_modules/@openzeppelin/",
        "forge-std/=lib/forge-std/src/",
        "solady/=node_modules/solady/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 20000
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/interfaces/IVault.sol": "IVault"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol": {
        "keccak256": "0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d",
        "urls": [
          "bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205",
          "dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc",
        "urls": [
          "bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892",
          "dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVault.sol": {
        "keccak256": "0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436",
        "urls": [
          "bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693",
          "dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVaultSupervisor.sol": {
        "keccak256": "0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a",
        "urls": [
          "bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4",
          "dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/interfaces/IVault.sol",
    "id": 63272,
    "exportedSymbols": {
      "IERC20": [
        50790
      ],
      "IERC4626": [
        49199
      ],
      "IVault": [
        63271
      ],
      "IVaultSupervisor": [
        63404
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:1160:95",
    "nodes": [
      {
        "id": 63182,
        "nodeType": "PragmaDirective",
        "src": "51:24:95",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63184,
        "nodeType": "ImportDirective",
        "src": "77:73:95",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63272,
        "sourceUnit": 49200,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63183,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49199,
              "src": "85:8:95",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63186,
        "nodeType": "ImportDirective",
        "src": "151:70:95",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63272,
        "sourceUnit": 50791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63185,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "159:6:95",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63188,
        "nodeType": "ImportDirective",
        "src": "222:56:95",
        "nodes": [],
        "absolutePath": "src/interfaces/IVaultSupervisor.sol",
        "file": "./IVaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63272,
        "sourceUnit": 63405,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63187,
              "name": "IVaultSupervisor",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63404,
              "src": "230:16:95",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63271,
        "nodeType": "ContractDefinition",
        "src": "280:930:95",
        "nodes": [
          {
            "id": 63196,
            "nodeType": "EnumDefinition",
            "src": "315:92:95",
            "nodes": [],
            "canonicalName": "IVault.AssetType",
            "members": [
              {
                "id": 63191,
                "name": "NONE",
                "nameLocation": "340:4:95",
                "nodeType": "EnumValue",
                "src": "340:4:95"
              },
              {
                "id": 63192,
                "name": "ETH",
                "nameLocation": "354:3:95",
                "nodeType": "EnumValue",
                "src": "354:3:95"
              },
              {
                "id": 63193,
                "name": "STABLE",
                "nameLocation": "367:6:95",
                "nodeType": "EnumValue",
                "src": "367:6:95"
              },
              {
                "id": 63194,
                "name": "BTC",
                "nameLocation": "383:3:95",
                "nodeType": "EnumValue",
                "src": "383:3:95"
              },
              {
                "id": 63195,
                "name": "OTHER",
                "nameLocation": "396:5:95",
                "nodeType": "EnumValue",
                "src": "396:5:95"
              }
            ],
            "name": "AssetType",
            "nameLocation": "320:9:95"
          },
          {
            "id": 63211,
            "nodeType": "FunctionDefinition",
            "src": "413:179:95",
            "nodes": [],
            "functionSelector": "8420ce99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "422:10:95",
            "parameters": {
              "id": 63209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63198,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "450:6:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63211,
                  "src": "442:14:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63197,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "442:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63201,
                  "mutability": "mutable",
                  "name": "_depositToken",
                  "nameLocation": "473:13:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63211,
                  "src": "466:20:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$50790",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 63200,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63199,
                      "name": "IERC20",
                      "nameLocations": [
                        "466:6:95"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 50790,
                      "src": "466:6:95"
                    },
                    "referencedDeclaration": 50790,
                    "src": "466:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63203,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "510:5:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63211,
                  "src": "496:19:95",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63202,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63205,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "539:7:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63211,
                  "src": "525:21:95",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63204,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63208,
                  "mutability": "mutable",
                  "name": "_assetType",
                  "nameLocation": "566:10:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63211,
                  "src": "556:20:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetType_$63196",
                    "typeString": "enum IVault.AssetType"
                  },
                  "typeName": {
                    "id": 63207,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63206,
                      "name": "AssetType",
                      "nameLocations": [
                        "556:9:95"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63196,
                      "src": "556:9:95"
                    },
                    "referencedDeclaration": 63196,
                    "src": "556:9:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "432:150:95"
            },
            "returnParameters": {
              "id": 63210,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "591:0:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63220,
            "nodeType": "FunctionDefinition",
            "src": "598:79:95",
            "nodes": [],
            "baseFunctions": [
              49116
            ],
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "607:7:95",
            "parameters": {
              "id": 63216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63213,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "623:6:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63220,
                  "src": "615:14:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63215,
                  "mutability": "mutable",
                  "name": "depositor",
                  "nameLocation": "639:9:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63220,
                  "src": "631:17:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "631:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "614:35:95"
            },
            "returnParameters": {
              "id": 63219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63218,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63220,
                  "src": "668:7:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63217,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "668:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "667:9:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63231,
            "nodeType": "FunctionDefinition",
            "src": "683:93:95",
            "nodes": [],
            "baseFunctions": [
              49198
            ],
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "692:6:95",
            "parameters": {
              "id": 63227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63222,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "707:6:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63231,
                  "src": "699:14:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63221,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63224,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "723:2:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63231,
                  "src": "715:10:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63223,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "715:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63226,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "735:5:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63231,
                  "src": "727:13:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63225,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:43:95"
            },
            "returnParameters": {
              "id": 63230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63229,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "768:6:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63231,
                  "src": "760:14:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "759:16:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63236,
            "nodeType": "FunctionDefinition",
            "src": "782:45:95",
            "nodes": [],
            "functionSelector": "27ea6f2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setLimit",
            "nameLocation": "791:8:95",
            "parameters": {
              "id": 63234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63233,
                  "mutability": "mutable",
                  "name": "newLimit",
                  "nameLocation": "808:8:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63236,
                  "src": "800:16:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63232,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "800:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "799:18:95"
            },
            "returnParameters": {
              "id": 63235,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "826:0:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63241,
            "nodeType": "FunctionDefinition",
            "src": "833:38:95",
            "nodes": [],
            "functionSelector": "02329a29",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "842:5:95",
            "parameters": {
              "id": 63239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63238,
                  "mutability": "mutable",
                  "name": "toPause",
                  "nameLocation": "853:7:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63241,
                  "src": "848:12:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63237,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "848:4:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "847:14:95"
            },
            "returnParameters": {
              "id": 63240,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "870:0:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63246,
            "nodeType": "FunctionDefinition",
            "src": "877:49:95",
            "nodes": [],
            "functionSelector": "8da5cb5b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "886:5:95",
            "parameters": {
              "id": 63242,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "891:2:95"
            },
            "returnParameters": {
              "id": 63245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63244,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63246,
                  "src": "917:7:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "916:9:95"
            },
            "scope": 63271,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63251,
            "nodeType": "FunctionDefinition",
            "src": "932:54:95",
            "nodes": [],
            "functionSelector": "f2fde38b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferOwnership",
            "nameLocation": "941:17:95",
            "parameters": {
              "id": 63249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63248,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "967:8:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 63251,
                  "src": "959:16:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:7:95",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "958:18:95"
            },
            "returnParameters": {
              "id": 63250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "985:0:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63254,
            "nodeType": "FunctionDefinition",
            "src": "992:38:95",
            "nodes": [],
            "functionSelector": "715018a6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "renounceOwnership",
            "nameLocation": "1001:17:95",
            "parameters": {
              "id": 63252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1018:2:95"
            },
            "returnParameters": {
              "id": 63253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1029:0:95"
            },
            "scope": 63271,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63259,
            "nodeType": "FunctionDefinition",
            "src": "1036:55:95",
            "nodes": [],
            "baseFunctions": [
              49074
            ],
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1045:11:95",
            "parameters": {
              "id": 63255,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1056:2:95"
            },
            "returnParameters": {
              "id": 63258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63257,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63259,
                  "src": "1082:7:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63256,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1081:9:95"
            },
            "scope": 63271,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63264,
            "nodeType": "FunctionDefinition",
            "src": "1097:50:95",
            "nodes": [],
            "baseFunctions": [
              50969
            ],
            "functionSelector": "313ce567",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "1106:8:95",
            "parameters": {
              "id": 63260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1114:2:95"
            },
            "returnParameters": {
              "id": 63263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63262,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63264,
                  "src": "1140:5:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 63261,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:5:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1139:7:95"
            },
            "scope": 63271,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63270,
            "nodeType": "FunctionDefinition",
            "src": "1153:55:95",
            "nodes": [],
            "functionSelector": "3fe3347a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assetType",
            "nameLocation": "1162:9:95",
            "parameters": {
              "id": 63265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1171:2:95"
            },
            "returnParameters": {
              "id": 63269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63268,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63270,
                  "src": "1197:9:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetType_$63196",
                    "typeString": "enum IVault.AssetType"
                  },
                  "typeName": {
                    "id": 63267,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63266,
                      "name": "AssetType",
                      "nameLocations": [
                        "1197:9:95"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63196,
                      "src": "1197:9:95"
                    },
                    "referencedDeclaration": 63196,
                    "src": "1197:9:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1196:11:95"
            },
            "scope": 63271,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 63189,
              "name": "IERC4626",
              "nameLocations": [
                "300:8:95"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49199,
              "src": "300:8:95"
            },
            "id": 63190,
            "nodeType": "InheritanceSpecifier",
            "src": "300:8:95"
          }
        ],
        "canonicalName": "IVault",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63271,
          49199,
          50970,
          50790
        ],
        "name": "IVault",
        "nameLocation": "290:6:95",
        "scope": 63272,
        "usedErrors": [],
        "usedEvents": [
          49050,
          49062,
          50724,
          50733
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 95
} as const;