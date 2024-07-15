export const ERC4626 = {
  "abi": [
    {
      "type": "function",
      "name": "DOMAIN_SEPARATOR",
      "inputs": [],
      "outputs": [
        {
          "name": "result",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
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
          "name": "result",
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
          "name": "amount",
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
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
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
          "name": "to",
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
      "type": "function",
      "name": "maxDeposit",
      "inputs": [
        {
          "name": "to",
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
          "name": "to",
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
          "name": "to",
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
      "name": "nonces",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "permit",
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
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "v",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
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
          "name": "assets",
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
          "name": "result",
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
          "name": "amount",
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
          "name": "amount",
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
      "name": "withdraw",
      "inputs": [
        {
          "name": "assets",
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
          "name": "amount",
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
          "name": "by",
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
          "name": "amount",
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
          "name": "by",
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
      "type": "error",
      "name": "AllowanceOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AllowanceUnderflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "DepositMoreThanMax",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientAllowance",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientBalance",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidPermit",
      "inputs": []
    },
    {
      "type": "error",
      "name": "MintMoreThanMax",
      "inputs": []
    },
    {
      "type": "error",
      "name": "PermitExpired",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RedeemMoreThanMax",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TotalSupplyOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawMoreThanMax",
      "inputs": []
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "balanceOf(address)": "70a08231",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AllowanceOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AllowanceUnderflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DepositMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPermit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RedeemMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TotalSupplyOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WithdrawMoreThanMax\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"by\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"by\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"result\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/tokens/ERC4626.sol)Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC4626.sol)\",\"errors\":{\"AllowanceOverflow()\":[{\"details\":\"The allowance has overflowed.\"}],\"AllowanceUnderflow()\":[{\"details\":\"The allowance has underflowed.\"}],\"DepositMoreThanMax()\":[{\"details\":\"Cannot deposit more than the max limit.\"}],\"InsufficientAllowance()\":[{\"details\":\"Insufficient allowance.\"}],\"InsufficientBalance()\":[{\"details\":\"Insufficient balance.\"}],\"InvalidPermit()\":[{\"details\":\"The permit is invalid.\"}],\"MintMoreThanMax()\":[{\"details\":\"Cannot mint more than the max limit.\"}],\"PermitExpired()\":[{\"details\":\"The permit has expired.\"}],\"RedeemMoreThanMax()\":[{\"details\":\"Cannot redeem more than the max limit.\"}],\"TotalSupplyOverflow()\":[{\"details\":\"The total supply has overflowed.\"}],\"WithdrawMoreThanMax()\":[{\"details\":\"Cannot withdraw more than the max limit.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is approved by `owner` to be used by `spender`.\"},\"Deposit(address,address,uint256,uint256)\":{\"details\":\"Emitted during a mint call or deposit call.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is transferred from `from` to `to`.\"},\"Withdraw(address,address,address,uint256,uint256)\":{\"details\":\"Emitted during a withdraw call or redeem call.\"}},\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the EIP-712 domain separator for the EIP-2612 permit.\"},\"allowance(address,address)\":{\"details\":\"Returns the amount of tokens that `spender` can spend on behalf of `owner`.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event.\"},\"asset()\":{\"details\":\"To be overridden to return the address of the underlying asset. - MUST be an ERC20 token contract. - MUST NOT revert.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `owner`.\"},\"convertToAssets(uint256)\":{\"details\":\"Returns the amount of assets that the Vault will exchange for the amount of shares provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \\\"per-user\\\" price-per-share, and instead should reflect the \\\"average-user's\\\" price-per-share, i.e. what the average user should expect to see when exchanging to and from.\"},\"convertToShares(uint256)\":{\"details\":\"Returns the amount of shares that the Vault will exchange for the amount of assets provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \\\"per-user\\\" price-per-share, and instead should reflect the \\\"average-user's\\\" price-per-share, i.e. what the average user should expect to see when exchanging to and from.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token. - MUST NOT revert.\"},\"deposit(uint256,address)\":{\"details\":\"Mints `shares` Vault shares to `to` by depositing exactly `assets` of underlying tokens. - MUST emit the {Deposit} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the deposit execution, and are accounted for during deposit. - MUST revert if all of `assets` cannot be deposited, such as due to deposit limit,   slippage, insufficient approval, etc. Note: Most implementations will require pre-approval of the Vault with the Vault's underlying `asset` token.\"},\"maxDeposit(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be deposited into the Vault for `to`, via a deposit call. - MUST return a limited value if `to` is subject to some deposit limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert.\"},\"maxMint(address)\":{\"details\":\"Returns the maximum amount of the Vault shares that can be minter for `to`, via a mint call. - MUST return a limited value if `to` is subject to some mint limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert.\"},\"maxRedeem(address)\":{\"details\":\"Returns the maximum amount of Vault shares that can be redeemed from the `owner`'s balance in the Vault, via a redeem call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST return `balanceOf(owner)` otherwise. - MUST NOT revert.\"},\"maxWithdraw(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be withdrawn from the `owner`'s balance in the Vault, via a withdraw call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST NOT revert.\"},\"mint(uint256,address)\":{\"details\":\"Mints exactly `shares` Vault shares to `to` by depositing `assets` of underlying tokens. - MUST emit the {Deposit} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the mint execution, and are accounted for during mint. - MUST revert if all of `shares` cannot be deposited, such as due to deposit limit,   slippage, insufficient approval, etc. Note: Most implementations will require pre-approval of the Vault with the Vault's underlying `asset` token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event.\"},\"previewDeposit(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that   will be minted in a deposit call in the same transaction, i.e. deposit should   return the same or more shares as `previewDeposit` if call in the same transaction. - MUST NOT account for deposit limits like those returned from `maxDeposit` and should   always act as if the deposit will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewDeposit` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewMint(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that   will be deposited in a mint call in the same transaction, i.e. mint should   return the same or fewer assets as `previewMint` if called in the same transaction. - MUST NOT account for mint limits like those returned from `maxMint` and should   always act as if the mint will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewMint` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting.\"},\"previewRedeem(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that   will be withdrawn in a redeem call in the same transaction, i.e. redeem should   return the same or more assets as `previewRedeem` if called in the same transaction. - MUST NOT account for redemption limits like those returned from `maxRedeem` and should   always act as if the redemption will be accepted, regardless of approvals, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST NOT revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewRedeem` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewWithdraw(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given the current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that   will be burned in a withdraw call in the same transaction, i.e. withdraw should   return the same or fewer shares as `previewWithdraw` if call in the same transaction. - MUST NOT account for withdrawal limits like those returned from `maxWithdraw` and should   always act as if the withdrawal will be accepted, regardless of share balance, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewWithdraw` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"redeem(uint256,address,address)\":{\"details\":\"Burns exactly `shares` from `owner` and sends `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the redeem execution, and are accounted for during redeem. - MUST revert if all of shares cannot be redeemed, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a redeem may be performed. Those methods should be performed separately.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalAssets()\":{\"details\":\"Returns the total amount of the underlying asset managed by the Vault. - SHOULD include any compounding that occurs from the yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event.\"},\"withdraw(uint256,address,address)\":{\"details\":\"Burns `shares` from `owner` and sends exactly `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the withdraw execution, and are accounted for during withdraw. - MUST revert if all of `assets` cannot be withdrawn, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.\"}},\"stateVariables\":{\"_DEFAULT_DECIMALS_OFFSET\":{\"details\":\"The default decimals offset.\"},\"_DEFAULT_UNDERLYING_DECIMALS\":{\"details\":\"The default underlying decimals.\"},\"_DEPOSIT_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Deposit(address,address,uint256,uint256)\\\"))`.\"},\"_WITHDRAW_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Withdraw(address,address,address,uint256,uint256)\\\"))`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Simple ERC4626 tokenized Vault implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/tokens/ERC4626.sol\":\"ERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/tokens/ERC20.sol\":{\"keccak256\":\"0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc\",\"dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6\"]},\"node_modules/solady/src/tokens/ERC4626.sol\":{\"keccak256\":\"0x1978774549a505b5789e7ba3b4f833af97173b55f5be721e5577010a133ebfbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cd85dc32a649169393731972d0134578811ea0990f508c3e45902a10ac519732\",\"dweb:/ipfs/QmWfQ8z53FJaAYCCiogHEaW7Zrauuhwr4nfjE1fmrqFVYu\"]},\"node_modules/solady/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4\",\"dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P\"]},\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1\",\"dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "AllowanceOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AllowanceUnderflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "DepositMoreThanMax"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientAllowance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientBalance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPermit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MintMoreThanMax"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PermitExpired"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RedeemMoreThanMax"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TotalSupplyOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "WithdrawMoreThanMax"
        },
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
              "name": "amount",
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
              "name": "by",
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
              "name": "amount",
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
              "name": "by",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "result",
              "type": "bytes32"
            }
          ]
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
              "name": "result",
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
              "name": "amount",
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
              "name": "",
              "type": "address"
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
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
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
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
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
              "internalType": "address",
              "name": "to",
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
              "name": "to",
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
              "name": "to",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
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
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permit"
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
              "name": "assets",
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
              "name": "result",
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
              "name": "amount",
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
              "name": "amount",
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
              "internalType": "uint256",
              "name": "assets",
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
          "DOMAIN_SEPARATOR()": {
            "details": "Returns the EIP-712 domain separator for the EIP-2612 permit."
          },
          "allowance(address,address)": {
            "details": "Returns the amount of tokens that `spender` can spend on behalf of `owner`."
          },
          "approve(address,uint256)": {
            "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event."
          },
          "asset()": {
            "details": "To be overridden to return the address of the underlying asset. - MUST be an ERC20 token contract. - MUST NOT revert."
          },
          "balanceOf(address)": {
            "details": "Returns the amount of tokens owned by `owner`."
          },
          "convertToAssets(uint256)": {
            "details": "Returns the amount of assets that the Vault will exchange for the amount of shares provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \"per-user\" price-per-share, and instead should reflect the \"average-user's\" price-per-share, i.e. what the average user should expect to see when exchanging to and from."
          },
          "convertToShares(uint256)": {
            "details": "Returns the amount of shares that the Vault will exchange for the amount of assets provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \"per-user\" price-per-share, and instead should reflect the \"average-user's\" price-per-share, i.e. what the average user should expect to see when exchanging to and from."
          },
          "decimals()": {
            "details": "Returns the decimals places of the token. - MUST NOT revert."
          },
          "deposit(uint256,address)": {
            "details": "Mints `shares` Vault shares to `to` by depositing exactly `assets` of underlying tokens. - MUST emit the {Deposit} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the deposit execution, and are accounted for during deposit. - MUST revert if all of `assets` cannot be deposited, such as due to deposit limit,   slippage, insufficient approval, etc. Note: Most implementations will require pre-approval of the Vault with the Vault's underlying `asset` token."
          },
          "maxDeposit(address)": {
            "details": "Returns the maximum amount of the underlying asset that can be deposited into the Vault for `to`, via a deposit call. - MUST return a limited value if `to` is subject to some deposit limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert."
          },
          "maxMint(address)": {
            "details": "Returns the maximum amount of the Vault shares that can be minter for `to`, via a mint call. - MUST return a limited value if `to` is subject to some mint limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert."
          },
          "maxRedeem(address)": {
            "details": "Returns the maximum amount of Vault shares that can be redeemed from the `owner`'s balance in the Vault, via a redeem call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST return `balanceOf(owner)` otherwise. - MUST NOT revert."
          },
          "maxWithdraw(address)": {
            "details": "Returns the maximum amount of the underlying asset that can be withdrawn from the `owner`'s balance in the Vault, via a withdraw call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST NOT revert."
          },
          "mint(uint256,address)": {
            "details": "Mints exactly `shares` Vault shares to `to` by depositing `assets` of underlying tokens. - MUST emit the {Deposit} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the mint execution, and are accounted for during mint. - MUST revert if all of `shares` cannot be deposited, such as due to deposit limit,   slippage, insufficient approval, etc. Note: Most implementations will require pre-approval of the Vault with the Vault's underlying `asset` token."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "nonces(address)": {
            "details": "Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit."
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "details": "Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event."
          },
          "previewDeposit(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that   will be minted in a deposit call in the same transaction, i.e. deposit should   return the same or more shares as `previewDeposit` if call in the same transaction. - MUST NOT account for deposit limits like those returned from `maxDeposit` and should   always act as if the deposit will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewDeposit` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing."
          },
          "previewMint(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that   will be deposited in a mint call in the same transaction, i.e. mint should   return the same or fewer assets as `previewMint` if called in the same transaction. - MUST NOT account for mint limits like those returned from `maxMint` and should   always act as if the mint will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewMint` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting."
          },
          "previewRedeem(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that   will be withdrawn in a redeem call in the same transaction, i.e. redeem should   return the same or more assets as `previewRedeem` if called in the same transaction. - MUST NOT account for redemption limits like those returned from `maxRedeem` and should   always act as if the redemption will be accepted, regardless of approvals, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST NOT revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewRedeem` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing."
          },
          "previewWithdraw(uint256)": {
            "details": "Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given the current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that   will be burned in a withdraw call in the same transaction, i.e. withdraw should   return the same or fewer shares as `previewWithdraw` if call in the same transaction. - MUST NOT account for withdrawal limits like those returned from `maxWithdraw` and should   always act as if the withdrawal will be accepted, regardless of share balance, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewWithdraw` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing."
          },
          "redeem(uint256,address,address)": {
            "details": "Burns exactly `shares` from `owner` and sends `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the redeem execution, and are accounted for during redeem. - MUST revert if all of shares cannot be redeemed, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a redeem may be performed. Those methods should be performed separately."
          },
          "symbol()": {
            "details": "Returns the symbol of the token."
          },
          "totalAssets()": {
            "details": "Returns the total amount of the underlying asset managed by the Vault. - SHOULD include any compounding that occurs from the yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert."
          },
          "totalSupply()": {
            "details": "Returns the amount of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event."
          },
          "withdraw(uint256,address,address)": {
            "details": "Burns `shares` from `owner` and sends exactly `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the withdraw execution, and are accounted for during withdraw. - MUST revert if all of `assets` cannot be withdrawn, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately."
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
        "node_modules/solady/src/tokens/ERC4626.sol": "ERC4626"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/tokens/ERC20.sol": {
        "keccak256": "0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0",
        "urls": [
          "bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc",
          "dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/tokens/ERC4626.sol": {
        "keccak256": "0x1978774549a505b5789e7ba3b4f833af97173b55f5be721e5577010a133ebfbf",
        "urls": [
          "bzz-raw://cd85dc32a649169393731972d0134578811ea0990f508c3e45902a10ac519732",
          "dweb:/ipfs/QmWfQ8z53FJaAYCCiogHEaW7Zrauuhwr4nfjE1fmrqFVYu"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e",
        "urls": [
          "bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4",
          "dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666",
        "urls": [
          "bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1",
          "dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/tokens/ERC4626.sol",
    "id": 56920,
    "exportedSymbols": {
      "ERC20": [
        56069
      ],
      "ERC4626": [
        56919
      ],
      "FixedPointMathLib": [
        58518
      ],
      "SafeTransferLib": [
        58876
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:25180:72",
    "nodes": [
      {
        "id": 56071,
        "nodeType": "PragmaDirective",
        "src": "32:23:72",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 56073,
        "nodeType": "ImportDirective",
        "src": "57:34:72",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/tokens/ERC20.sol",
        "file": "./ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56920,
        "sourceUnit": 56070,
        "symbolAliases": [
          {
            "foreign": {
              "id": 56072,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 56069,
              "src": "65:5:72",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 56075,
        "nodeType": "ImportDirective",
        "src": "92:65:72",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/FixedPointMathLib.sol",
        "file": "../utils/FixedPointMathLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56920,
        "sourceUnit": 58519,
        "symbolAliases": [
          {
            "foreign": {
              "id": 56074,
              "name": "FixedPointMathLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58518,
              "src": "100:17:72",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 56077,
        "nodeType": "ImportDirective",
        "src": "158:61:72",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/SafeTransferLib.sol",
        "file": "../utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56920,
        "sourceUnit": 58877,
        "symbolAliases": [
          {
            "foreign": {
              "id": 56076,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58876,
              "src": "166:15:72",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 56919,
        "nodeType": "ContractDefinition",
        "src": "636:24575:72",
        "nodes": [
          {
            "id": 56084,
            "nodeType": "VariableDeclaration",
            "src": "1006:57:72",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56081,
              "nodeType": "StructuredDocumentation",
              "src": "960:41:72",
              "text": "@dev The default underlying decimals."
            },
            "mutability": "constant",
            "name": "_DEFAULT_UNDERLYING_DECIMALS",
            "nameLocation": "1030:28:72",
            "scope": 56919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 56082,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1006:5:72",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3138",
              "id": 56083,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1061:2:72",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "internal"
          },
          {
            "id": 56088,
            "nodeType": "VariableDeclaration",
            "src": "1112:52:72",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56085,
              "nodeType": "StructuredDocumentation",
              "src": "1070:37:72",
              "text": "@dev The default decimals offset."
            },
            "mutability": "constant",
            "name": "_DEFAULT_DECIMALS_OFFSET",
            "nameLocation": "1136:24:72",
            "scope": 56919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 56086,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1112:5:72",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 56087,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1163:1:72",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "id": 56091,
            "nodeType": "ErrorDefinition",
            "src": "1507:27:72",
            "nodes": [],
            "documentation": {
              "id": 56089,
              "nodeType": "StructuredDocumentation",
              "src": "1454:48:72",
              "text": "@dev Cannot deposit more than the max limit."
            },
            "errorSelector": "b3c61a83",
            "name": "DepositMoreThanMax",
            "nameLocation": "1513:18:72",
            "parameters": {
              "id": 56090,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:72"
            }
          },
          {
            "id": 56094,
            "nodeType": "ErrorDefinition",
            "src": "1590:24:72",
            "nodes": [],
            "documentation": {
              "id": 56092,
              "nodeType": "StructuredDocumentation",
              "src": "1540:45:72",
              "text": "@dev Cannot mint more than the max limit."
            },
            "errorSelector": "6a695959",
            "name": "MintMoreThanMax",
            "nameLocation": "1596:15:72",
            "parameters": {
              "id": 56093,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1611:2:72"
            }
          },
          {
            "id": 56097,
            "nodeType": "ErrorDefinition",
            "src": "1674:28:72",
            "nodes": [],
            "documentation": {
              "id": 56095,
              "nodeType": "StructuredDocumentation",
              "src": "1620:49:72",
              "text": "@dev Cannot withdraw more than the max limit."
            },
            "errorSelector": "936941fc",
            "name": "WithdrawMoreThanMax",
            "nameLocation": "1680:19:72",
            "parameters": {
              "id": 56096,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1699:2:72"
            }
          },
          {
            "id": 56100,
            "nodeType": "ErrorDefinition",
            "src": "1760:26:72",
            "nodes": [],
            "documentation": {
              "id": 56098,
              "nodeType": "StructuredDocumentation",
              "src": "1708:47:72",
              "text": "@dev Cannot redeem more than the max limit."
            },
            "errorSelector": "4656425a",
            "name": "RedeemMoreThanMax",
            "nameLocation": "1766:17:72",
            "parameters": {
              "id": 56099,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1783:2:72"
            }
          },
          {
            "id": 56111,
            "nodeType": "EventDefinition",
            "src": "2132:89:72",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 56101,
              "nodeType": "StructuredDocumentation",
              "src": "2075:52:72",
              "text": "@dev Emitted during a mint call or deposit call."
            },
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "2138:7:72",
            "parameters": {
              "id": 56110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56103,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "by",
                  "nameLocation": "2162:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56111,
                  "src": "2146:18:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2146:7:72",
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
                  "id": 56105,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2182:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56111,
                  "src": "2166:21:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2166:7:72",
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
                  "id": 56107,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2197:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56111,
                  "src": "2189:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2189:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56109,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2213:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56111,
                  "src": "2205:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2205:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2145:75:72"
            }
          },
          {
            "id": 56124,
            "nodeType": "EventDefinition",
            "src": "2287:156:72",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 56112,
              "nodeType": "StructuredDocumentation",
              "src": "2227:55:72",
              "text": "@dev Emitted during a withdraw call or redeem call."
            },
            "eventSelector": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
            "name": "Withdraw",
            "nameLocation": "2293:8:72",
            "parameters": {
              "id": 56123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56114,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "by",
                  "nameLocation": "2327:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56124,
                  "src": "2311:18:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56113,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2311:7:72",
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
                  "id": 56116,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2355:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56124,
                  "src": "2339:18:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2339:7:72",
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
                  "id": 56118,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2383:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56124,
                  "src": "2367:21:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2367:7:72",
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
                  "id": 56120,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2406:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56124,
                  "src": "2398:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2398:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56122,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2430:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56124,
                  "src": "2422:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2301:141:72"
            }
          },
          {
            "id": 56128,
            "nodeType": "VariableDeclaration",
            "src": "2526:126:72",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56125,
              "nodeType": "StructuredDocumentation",
              "src": "2449:72:72",
              "text": "@dev `keccak256(bytes(\"Deposit(address,address,uint256,uint256)\"))`."
            },
            "mutability": "constant",
            "name": "_DEPOSIT_EVENT_SIGNATURE",
            "nameLocation": "2551:24:72",
            "scope": 56919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2526:7:72",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307864636263316330353234306633316666336164303637656631656533356365343939373736323735326533613039353238343735343534346634633730396437",
              "id": 56127,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2586:66:72",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_99841187323991878651857463966695491112958443285409756881630392772141504727511_by_1",
                "typeString": "int_const 9984...(69 digits omitted)...7511"
              },
              "value": "0xdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7"
            },
            "visibility": "private"
          },
          {
            "id": 56132,
            "nodeType": "VariableDeclaration",
            "src": "2745:127:72",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56129,
              "nodeType": "StructuredDocumentation",
              "src": "2659:81:72",
              "text": "@dev `keccak256(bytes(\"Withdraw(address,address,address,uint256,uint256)\"))`."
            },
            "mutability": "constant",
            "name": "_WITHDRAW_EVENT_SIGNATURE",
            "nameLocation": "2770:25:72",
            "scope": 56919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56130,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2745:7:72",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307866626465373937643230316336383162393130353635323931313965306230323430376337626239366134613263373563303166633936363732333263386462",
              "id": 56131,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2806:66:72",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_113923603527463639014809444807069482138736635533632932454551718384408456251611_by_1",
                "typeString": "int_const 1139...(70 digits omitted)...1611"
              },
              "value": "0xfbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db"
            },
            "visibility": "private"
          },
          {
            "id": 56138,
            "nodeType": "FunctionDefinition",
            "src": "3317:55:72",
            "nodes": [],
            "documentation": {
              "id": 56133,
              "nodeType": "StructuredDocumentation",
              "src": "3162:150:72",
              "text": "@dev To be overridden to return the address of the underlying asset.\n - MUST be an ERC20 token contract.\n - MUST NOT revert."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "3326:5:72",
            "parameters": {
              "id": 56134,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3331:2:72"
            },
            "returnParameters": {
              "id": 56137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56138,
                  "src": "3363:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56135,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3363:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3362:9:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56147,
            "nodeType": "FunctionDefinition",
            "src": "3522:121:72",
            "nodes": [],
            "body": {
              "id": 56146,
              "nodeType": "Block",
              "src": "3591:52:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56144,
                    "name": "_DEFAULT_UNDERLYING_DECIMALS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 56084,
                    "src": "3608:28:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 56143,
                  "id": 56145,
                  "nodeType": "Return",
                  "src": "3601:35:72"
                }
              ]
            },
            "documentation": {
              "id": 56139,
              "nodeType": "StructuredDocumentation",
              "src": "3378:139:72",
              "text": "@dev To be overridden to return the number of decimals of the underlying asset.\n Default: 18.\n - MUST NOT revert."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_underlyingDecimals",
            "nameLocation": "3531:19:72",
            "parameters": {
              "id": 56140,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3550:2:72"
            },
            "returnParameters": {
              "id": 56143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56142,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56147,
                  "src": "3584:5:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 56141,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3584:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3583:7:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56156,
            "nodeType": "FunctionDefinition",
            "src": "3861:113:72",
            "nodes": [],
            "body": {
              "id": 56155,
              "nodeType": "Block",
              "src": "3926:48:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56153,
                    "name": "_DEFAULT_DECIMALS_OFFSET",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 56088,
                    "src": "3943:24:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 56152,
                  "id": 56154,
                  "nodeType": "Return",
                  "src": "3936:31:72"
                }
              ]
            },
            "documentation": {
              "id": 56148,
              "nodeType": "StructuredDocumentation",
              "src": "3649:207:72",
              "text": "@dev Override to return a non-zero value to make the inflation attack even more unfeasible.\n Only used when {_useVirtualShares} returns true.\n Default: 0.\n - MUST NOT revert."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_decimalsOffset",
            "nameLocation": "3870:15:72",
            "parameters": {
              "id": 56149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3885:2:72"
            },
            "returnParameters": {
              "id": 56152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56151,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56156,
                  "src": "3919:5:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 56150,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3919:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3918:7:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56165,
            "nodeType": "FunctionDefinition",
            "src": "4251:94:72",
            "nodes": [],
            "body": {
              "id": 56164,
              "nodeType": "Block",
              "src": "4317:28:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 56162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4334:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 56161,
                  "id": 56163,
                  "nodeType": "Return",
                  "src": "4327:11:72"
                }
              ]
            },
            "documentation": {
              "id": 56157,
              "nodeType": "StructuredDocumentation",
              "src": "3980:266:72",
              "text": "@dev Returns whether virtual shares will be used to mitigate the inflation attack.\n See: https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3706\n Override to return true or false.\n Default: true.\n - MUST NOT revert."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_useVirtualShares",
            "nameLocation": "4260:17:72",
            "parameters": {
              "id": 56158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4277:2:72"
            },
            "returnParameters": {
              "id": 56161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56160,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56165,
                  "src": "4311:4:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56159,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4311:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4310:6:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56187,
            "nodeType": "FunctionDefinition",
            "src": "4441:201:72",
            "nodes": [],
            "body": {
              "id": 56186,
              "nodeType": "Block",
              "src": "4513:129:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 56175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4527:20:72",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56173,
                        "name": "_useVirtualShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56165,
                        "src": "4528:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 56174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4528:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56179,
                  "nodeType": "IfStatement",
                  "src": "4523:54:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56176,
                        "name": "_underlyingDecimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56147,
                        "src": "4556:19:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                          "typeString": "function () view returns (uint8)"
                        }
                      },
                      "id": 56177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4556:21:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "functionReturnParameters": 56172,
                    "id": 56178,
                    "nodeType": "Return",
                    "src": "4549:28:72"
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 56184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56180,
                        "name": "_underlyingDecimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56147,
                        "src": "4594:19:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                          "typeString": "function () view returns (uint8)"
                        }
                      },
                      "id": 56181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4594:21:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56182,
                        "name": "_decimalsOffset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56156,
                        "src": "4618:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                          "typeString": "function () view returns (uint8)"
                        }
                      },
                      "id": 56183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4618:17:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "4594:41:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 56172,
                  "id": 56185,
                  "nodeType": "Return",
                  "src": "4587:48:72"
                }
              ]
            },
            "baseFunctions": [
              55753
            ],
            "documentation": {
              "id": 56166,
              "nodeType": "StructuredDocumentation",
              "src": "4351:85:72",
              "text": "@dev Returns the decimals places of the token.\n - MUST NOT revert."
            },
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "4450:8:72",
            "overrides": {
              "id": 56169,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 56168,
                  "name": "ERC20",
                  "nameLocations": [
                    "4490:5:72"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 56069,
                  "src": "4490:5:72"
                }
              ],
              "src": "4481:15:72"
            },
            "parameters": {
              "id": 56167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4458:2:72"
            },
            "returnParameters": {
              "id": 56172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56187,
                  "src": "4506:5:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 56170,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4505:7:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56199,
            "nodeType": "FunctionDefinition",
            "src": "5459:752:72",
            "nodes": [],
            "body": {
              "id": 56198,
              "nodeType": "Block",
              "src": "5588:623:72",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5650:555:72",
                    "nodeType": "YulBlock",
                    "src": "5650:555:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "5731:4:72",
                              "nodeType": "YulLiteral",
                              "src": "5731:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5737:10:72",
                              "nodeType": "YulLiteral",
                              "src": "5737:10:72",
                              "type": "",
                              "value": "0x313ce567"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5724:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "5724:6:72"
                          },
                          "nativeSrc": "5724:24:72",
                          "nodeType": "YulFunctionCall",
                          "src": "5724:24:72"
                        },
                        "nativeSrc": "5724:24:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "5724:24:72"
                      },
                      {
                        "nativeSrc": "5815:332:72",
                        "nodeType": "YulAssignment",
                        "src": "5815:332:72",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5964:4:72",
                                          "nodeType": "YulLiteral",
                                          "src": "5964:4:72",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "5958:5:72",
                                        "nodeType": "YulIdentifier",
                                        "src": "5958:5:72"
                                      },
                                      "nativeSrc": "5958:11:72",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5958:11:72"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "5971:5:72",
                                      "nodeType": "YulLiteral",
                                      "src": "5971:5:72",
                                      "type": "",
                                      "value": "0x100"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "5955:2:72",
                                    "nodeType": "YulIdentifier",
                                    "src": "5955:2:72"
                                  },
                                  "nativeSrc": "5955:22:72",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5955:22:72"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "5982:14:72",
                                        "nodeType": "YulIdentifier",
                                        "src": "5982:14:72"
                                      },
                                      "nativeSrc": "5982:16:72",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5982:16:72"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "6000:4:72",
                                      "nodeType": "YulLiteral",
                                      "src": "6000:4:72",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "5979:2:72",
                                    "nodeType": "YulIdentifier",
                                    "src": "5979:2:72"
                                  },
                                  "nativeSrc": "5979:26:72",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5979:26:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "5951:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "5951:3:72"
                              },
                              "nativeSrc": "5951:55:72",
                              "nodeType": "YulFunctionCall",
                              "src": "5951:55:72"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nativeSrc": "6087:3:72",
                                    "nodeType": "YulIdentifier",
                                    "src": "6087:3:72"
                                  },
                                  "nativeSrc": "6087:5:72",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6087:5:72"
                                },
                                {
                                  "name": "underlying",
                                  "nativeSrc": "6094:10:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "6094:10:72"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6106:4:72",
                                  "nodeType": "YulLiteral",
                                  "src": "6106:4:72",
                                  "type": "",
                                  "value": "0x1c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6112:4:72",
                                  "nodeType": "YulLiteral",
                                  "src": "6112:4:72",
                                  "type": "",
                                  "value": "0x04"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6118:4:72",
                                  "nodeType": "YulLiteral",
                                  "src": "6118:4:72",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6124:4:72",
                                  "nodeType": "YulLiteral",
                                  "src": "6124:4:72",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "staticcall",
                                "nativeSrc": "6076:10:72",
                                "nodeType": "YulIdentifier",
                                "src": "6076:10:72"
                              },
                              "nativeSrc": "6076:53:72",
                              "nodeType": "YulFunctionCall",
                              "src": "6076:53:72"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "5842:3:72",
                            "nodeType": "YulIdentifier",
                            "src": "5842:3:72"
                          },
                          "nativeSrc": "5842:305:72",
                          "nodeType": "YulFunctionCall",
                          "src": "5842:305:72"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "5815:7:72",
                            "nodeType": "YulIdentifier",
                            "src": "5815:7:72"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "6160:35:72",
                        "nodeType": "YulAssignment",
                        "src": "6160:35:72",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "6180:4:72",
                                  "nodeType": "YulLiteral",
                                  "src": "6180:4:72",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nativeSrc": "6174:5:72",
                                "nodeType": "YulIdentifier",
                                "src": "6174:5:72"
                              },
                              "nativeSrc": "6174:11:72",
                              "nodeType": "YulFunctionCall",
                              "src": "6174:11:72"
                            },
                            {
                              "name": "success",
                              "nativeSrc": "6187:7:72",
                              "nodeType": "YulIdentifier",
                              "src": "6187:7:72"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "6170:3:72",
                            "nodeType": "YulIdentifier",
                            "src": "6170:3:72"
                          },
                          "nativeSrc": "6170:25:72",
                          "nodeType": "YulFunctionCall",
                          "src": "6170:25:72"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "6160:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "6160:6:72"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56195,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6160:6:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56193,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5815:7:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56193,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6187:7:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56190,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6094:10:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 56197,
                  "nodeType": "InlineAssembly",
                  "src": "5641:564:72"
                }
              ]
            },
            "documentation": {
              "id": 56188,
              "nodeType": "StructuredDocumentation",
              "src": "4931:523:72",
              "text": "@dev Helper function to get the decimals of the underlying asset.\n Useful for setting the return value of `_underlyingDecimals` during initialization.\n If the retrieval succeeds, `success` will be true, and `result` will hold the result.\n Otherwise, `success` will be false, and `result` will be zero.\n Example usage:\n ```\n (bool success, uint8 result) = _tryGetAssetDecimals(underlying);\n _decimals = success ? result : _DEFAULT_UNDERLYING_DECIMALS;\n ```"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_tryGetAssetDecimals",
            "nameLocation": "5468:20:72",
            "parameters": {
              "id": 56191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56190,
                  "mutability": "mutable",
                  "name": "underlying",
                  "nameLocation": "5497:10:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56199,
                  "src": "5489:18:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56189,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5489:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5488:20:72"
            },
            "returnParameters": {
              "id": 56196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56193,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "5561:7:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56199,
                  "src": "5556:12:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56192,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5556:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56195,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "5576:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56199,
                  "src": "5570:12:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 56194,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "5570:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5555:28:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56218,
            "nodeType": "FunctionDefinition",
            "src": "6774:143:72",
            "nodes": [],
            "body": {
              "id": 56217,
              "nodeType": "Block",
              "src": "6842:75:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56205,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56203,
                      "src": "6852:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56208,
                            "name": "asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56138,
                            "src": "6887:5:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 56209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6887:7:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 56212,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "6904:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC4626_$56919",
                                "typeString": "contract ERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ERC4626_$56919",
                                "typeString": "contract ERC4626"
                              }
                            ],
                            "id": 56211,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6896:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 56210,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6896:7:72",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 56213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6896:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 56206,
                          "name": "SafeTransferLib",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58876,
                          "src": "6861:15:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$58876_$",
                            "typeString": "type(library SafeTransferLib)"
                          }
                        },
                        "id": 56207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6877:9:72",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 58771,
                        "src": "6861:25:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address,address) view returns (uint256)"
                        }
                      },
                      "id": 56214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6861:49:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6852:58:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56216,
                  "nodeType": "ExpressionStatement",
                  "src": "6852:58:72"
                }
              ]
            },
            "documentation": {
              "id": 56200,
              "nodeType": "StructuredDocumentation",
              "src": "6500:269:72",
              "text": "@dev Returns the total amount of the underlying asset managed by the Vault.\n - SHOULD include any compounding that occurs from the yield.\n - MUST be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT revert."
            },
            "functionSelector": "01e1d114",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "6783:11:72",
            "parameters": {
              "id": 56201,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6794:2:72"
            },
            "returnParameters": {
              "id": 56204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56203,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6834:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56218,
                  "src": "6826:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56202,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6826:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6825:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56291,
            "nodeType": "FunctionDefinition",
            "src": "7616:628:72",
            "nodes": [],
            "body": {
              "id": 56290,
              "nodeType": "Block",
              "src": "7702:542:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 56228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7716:20:72",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56226,
                        "name": "_useVirtualShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56165,
                        "src": "7717:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 56227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7717:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56251,
                  "nodeType": "IfStatement",
                  "src": "7712:259:72",
                  "trueBody": {
                    "id": 56250,
                    "nodeType": "Block",
                    "src": "7738:233:72",
                    "statements": [
                      {
                        "assignments": [
                          56230
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56230,
                            "mutability": "mutable",
                            "name": "supply",
                            "nameLocation": "7760:6:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 56250,
                            "src": "7752:14:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56229,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7752:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56233,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56231,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "7769:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7769:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7752:30:72"
                      },
                      {
                        "expression": {
                          "condition": {
                            "arguments": [
                              {
                                "id": 56235,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56221,
                                "src": "7817:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56236,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56230,
                                "src": "7825:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56234,
                              "name": "_eitherIsZero",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56550,
                              "src": "7803:13:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (uint256,uint256) pure returns (bool)"
                              }
                            },
                            "id": 56237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7803:29:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "arguments": [
                              {
                                "id": 56243,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56221,
                                "src": "7930:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56244,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56230,
                                "src": "7938:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56245,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "7946:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56246,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7946:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 56241,
                                "name": "FixedPointMathLib",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 58518,
                                "src": "7901:17:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                  "typeString": "type(library FixedPointMathLib)"
                                }
                              },
                              "id": 56242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7919:10:72",
                              "memberName": "fullMulDiv",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57790,
                              "src": "7901:28:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 56247,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7901:59:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 56248,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "7803:157:72",
                          "trueExpression": {
                            "arguments": [
                              {
                                "id": 56239,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56221,
                                "src": "7875:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56238,
                              "name": "_initialConvertToShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56887,
                              "src": "7851:23:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 56240,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7851:31:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56225,
                        "id": 56249,
                        "nodeType": "Return",
                        "src": "7796:164:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    56253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56253,
                      "mutability": "mutable",
                      "name": "o",
                      "nameLocation": "7988:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 56290,
                      "src": "7980:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 56252,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7980:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56256,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 56254,
                      "name": "_decimalsOffset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56156,
                      "src": "7992:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                        "typeString": "function () view returns (uint8)"
                      }
                    },
                    "id": 56255,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7992:17:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7980:29:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56257,
                      "name": "o",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56253,
                      "src": "8023:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 56258,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8028:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8023:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56274,
                  "nodeType": "IfStatement",
                  "src": "8019:120:72",
                  "trueBody": {
                    "id": 56273,
                    "nodeType": "Block",
                    "src": "8031:108:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 56262,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56221,
                              "src": "8081:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 56266,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56263,
                                  "name": "totalSupply",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55761,
                                  "src": "8089:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8089:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 56265,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8105:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "8089:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 56268,
                                    "name": "totalAssets",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 56218,
                                    "src": "8113:11:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                      "typeString": "function () view returns (uint256)"
                                    }
                                  },
                                  "id": 56269,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8113:13:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 56267,
                                "name": "_inc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56564,
                                "src": "8108:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 56270,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8108:19:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56260,
                              "name": "FixedPointMathLib",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58518,
                              "src": "8052:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                "typeString": "type(library FixedPointMathLib)"
                              }
                            },
                            "id": 56261,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8070:10:72",
                            "memberName": "fullMulDiv",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57790,
                            "src": "8052:28:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 56271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8052:76:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56225,
                        "id": 56272,
                        "nodeType": "Return",
                        "src": "8045:83:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56277,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56221,
                        "src": "8184:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56278,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "8192:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8192:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 56280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8208:2:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "id": 56281,
                            "name": "o",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56253,
                            "src": "8214:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8208:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8192:23:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 56285,
                              "name": "totalAssets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56218,
                              "src": "8222:11:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 56286,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8222:13:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 56284,
                          "name": "_inc",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56564,
                          "src": "8217:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 56287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8217:19:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56275,
                        "name": "FixedPointMathLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58518,
                        "src": "8155:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                          "typeString": "type(library FixedPointMathLib)"
                        }
                      },
                      "id": 56276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8173:10:72",
                      "memberName": "fullMulDiv",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57790,
                      "src": "8155:28:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 56288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8155:82:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56225,
                  "id": 56289,
                  "nodeType": "Return",
                  "src": "8148:89:72"
                }
              ]
            },
            "documentation": {
              "id": 56219,
              "nodeType": "StructuredDocumentation",
              "src": "6923:688:72",
              "text": "@dev Returns the amount of shares that the Vault will exchange for the amount of\n assets provided, in an ideal scenario where all conditions are met.\n - MUST NOT be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT show any variations depending on the caller.\n - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange.\n - MUST NOT revert.\n Note: This calculation MAY NOT reflect the \"per-user\" price-per-share, and instead\n should reflect the \"average-user's\" price-per-share, i.e. what the average user should\n expect to see when exchanging to and from."
            },
            "functionSelector": "c6e6f592",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "7625:15:72",
            "parameters": {
              "id": 56222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56221,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "7649:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56291,
                  "src": "7641:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7641:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7640:16:72"
            },
            "returnParameters": {
              "id": 56225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56224,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "7694:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56291,
                  "src": "7686:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7686:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7685:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56363,
            "nodeType": "FunctionDefinition",
            "src": "8943:608:72",
            "nodes": [],
            "body": {
              "id": 56362,
              "nodeType": "Block",
              "src": "9029:522:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 56301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9043:20:72",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56299,
                        "name": "_useVirtualShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56165,
                        "src": "9044:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 56300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9044:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56323,
                  "nodeType": "IfStatement",
                  "src": "9039:241:72",
                  "trueBody": {
                    "id": 56322,
                    "nodeType": "Block",
                    "src": "9065:215:72",
                    "statements": [
                      {
                        "assignments": [
                          56303
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56303,
                            "mutability": "mutable",
                            "name": "supply",
                            "nameLocation": "9087:6:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 56322,
                            "src": "9079:14:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56302,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "9079:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56306,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56304,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "9096:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56305,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9096:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9079:30:72"
                      },
                      {
                        "expression": {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 56307,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56303,
                              "src": "9130:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 56308,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9140:1:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "9130:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "arguments": [
                              {
                                "id": 56315,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56294,
                                "src": "9239:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56316,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "9247:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56317,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9247:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56318,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56303,
                                "src": "9262:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 56313,
                                "name": "FixedPointMathLib",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 58518,
                                "src": "9210:17:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                  "typeString": "type(library FixedPointMathLib)"
                                }
                              },
                              "id": 56314,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9228:10:72",
                              "memberName": "fullMulDiv",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57790,
                              "src": "9210:28:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 56319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9210:59:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 56320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "9130:139:72",
                          "trueExpression": {
                            "arguments": [
                              {
                                "id": 56311,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56294,
                                "src": "9184:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56310,
                              "name": "_initialConvertToAssets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56900,
                              "src": "9160:23:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 56312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9160:31:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56298,
                        "id": 56321,
                        "nodeType": "Return",
                        "src": "9123:146:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    56325
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56325,
                      "mutability": "mutable",
                      "name": "o",
                      "nameLocation": "9297:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 56362,
                      "src": "9289:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 56324,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9289:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56328,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 56326,
                      "name": "_decimalsOffset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56156,
                      "src": "9301:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                        "typeString": "function () view returns (uint8)"
                      }
                    },
                    "id": 56327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9301:17:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9289:29:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56329,
                      "name": "o",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56325,
                      "src": "9332:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 56330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9337:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9332:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56346,
                  "nodeType": "IfStatement",
                  "src": "9328:120:72",
                  "trueBody": {
                    "id": 56345,
                    "nodeType": "Block",
                    "src": "9340:108:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 56334,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56294,
                              "src": "9390:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 56338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56335,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "9398:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56336,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9398:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 56337,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9414:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "9398:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 56340,
                                    "name": "totalSupply",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 55761,
                                    "src": "9422:11:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                      "typeString": "function () view returns (uint256)"
                                    }
                                  },
                                  "id": 56341,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9422:13:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 56339,
                                "name": "_inc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56564,
                                "src": "9417:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 56342,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9417:19:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56332,
                              "name": "FixedPointMathLib",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58518,
                              "src": "9361:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                "typeString": "type(library FixedPointMathLib)"
                              }
                            },
                            "id": 56333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9379:10:72",
                            "memberName": "fullMulDiv",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57790,
                            "src": "9361:28:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 56343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9361:76:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56298,
                        "id": 56344,
                        "nodeType": "Return",
                        "src": "9354:83:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56349,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56294,
                        "src": "9493:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56350,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56218,
                            "src": "9501:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9501:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 56352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9517:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "9501:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56354,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "9520:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9520:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56358,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 56356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9536:2:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "id": 56357,
                            "name": "o",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56325,
                            "src": "9542:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9536:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9520:23:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56347,
                        "name": "FixedPointMathLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58518,
                        "src": "9464:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                          "typeString": "type(library FixedPointMathLib)"
                        }
                      },
                      "id": 56348,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9482:10:72",
                      "memberName": "fullMulDiv",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57790,
                      "src": "9464:28:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 56360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9464:80:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56298,
                  "id": 56361,
                  "nodeType": "Return",
                  "src": "9457:87:72"
                }
              ]
            },
            "documentation": {
              "id": 56292,
              "nodeType": "StructuredDocumentation",
              "src": "8250:688:72",
              "text": "@dev Returns the amount of assets that the Vault will exchange for the amount of\n shares provided, in an ideal scenario where all conditions are met.\n - MUST NOT be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT show any variations depending on the caller.\n - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange.\n - MUST NOT revert.\n Note: This calculation MAY NOT reflect the \"per-user\" price-per-share, and instead\n should reflect the \"average-user's\" price-per-share, i.e. what the average user should\n expect to see when exchanging to and from."
            },
            "functionSelector": "07a2d13a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "8952:15:72",
            "parameters": {
              "id": 56295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56294,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "8976:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56363,
                  "src": "8968:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8968:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8967:16:72"
            },
            "returnParameters": {
              "id": 56298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56297,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "9021:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56363,
                  "src": "9013:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9013:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9012:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56378,
            "nodeType": "FunctionDefinition",
            "src": "10528:134:72",
            "nodes": [],
            "body": {
              "id": 56377,
              "nodeType": "Block",
              "src": "10613:49:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56371,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56369,
                      "src": "10623:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56373,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56366,
                          "src": "10648:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56372,
                        "name": "convertToShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56291,
                        "src": "10632:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10632:23:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10623:32:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56376,
                  "nodeType": "ExpressionStatement",
                  "src": "10623:32:72"
                }
              ]
            },
            "documentation": {
              "id": 56364,
              "nodeType": "StructuredDocumentation",
              "src": "9557:966:72",
              "text": "@dev Allows an on-chain or off-chain user to simulate the effects of their deposit\n at the current block, given current on-chain conditions.\n - MUST return as close to and no more than the exact amount of Vault shares that\n   will be minted in a deposit call in the same transaction, i.e. deposit should\n   return the same or more shares as `previewDeposit` if call in the same transaction.\n - MUST NOT account for deposit limits like those returned from `maxDeposit` and should\n   always act as if the deposit will be accepted, regardless of approvals, etc.\n - MUST be inclusive of deposit fees. Integrators should be aware of this.\n - MUST not revert.\n Note: Any unfavorable discrepancy between `convertToShares` and `previewDeposit` SHOULD\n be considered slippage in share price or some other type of condition, meaning\n the depositor will lose assets by depositing."
            },
            "functionSelector": "ef8b30f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "10537:14:72",
            "parameters": {
              "id": 56367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56366,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "10560:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56378,
                  "src": "10552:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56365,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10552:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10551:16:72"
            },
            "returnParameters": {
              "id": 56370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56369,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "10605:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56378,
                  "src": "10597:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10597:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10596:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56450,
            "nodeType": "FunctionDefinition",
            "src": "11613:610:72",
            "nodes": [],
            "body": {
              "id": 56449,
              "nodeType": "Block",
              "src": "11695:528:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 56388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11709:20:72",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56386,
                        "name": "_useVirtualShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56165,
                        "src": "11710:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 56387,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11710:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56410,
                  "nodeType": "IfStatement",
                  "src": "11705:243:72",
                  "trueBody": {
                    "id": 56409,
                    "nodeType": "Block",
                    "src": "11731:217:72",
                    "statements": [
                      {
                        "assignments": [
                          56390
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56390,
                            "mutability": "mutable",
                            "name": "supply",
                            "nameLocation": "11753:6:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 56409,
                            "src": "11745:14:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56389,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "11745:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56393,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56391,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "11762:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11762:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11745:30:72"
                      },
                      {
                        "expression": {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56396,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 56394,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56390,
                              "src": "11796:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 56395,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11806:1:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "11796:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "arguments": [
                              {
                                "id": 56402,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56381,
                                "src": "11907:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56403,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "11915:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56404,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11915:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56405,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56390,
                                "src": "11930:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 56400,
                                "name": "FixedPointMathLib",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 58518,
                                "src": "11876:17:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                  "typeString": "type(library FixedPointMathLib)"
                                }
                              },
                              "id": 56401,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11894:12:72",
                              "memberName": "fullMulDivUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57812,
                              "src": "11876:30:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 56406,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11876:61:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 56407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "11796:141:72",
                          "trueExpression": {
                            "arguments": [
                              {
                                "id": 56398,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56381,
                                "src": "11850:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56397,
                              "name": "_initialConvertToAssets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56900,
                              "src": "11826:23:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 56399,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11826:31:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56385,
                        "id": 56408,
                        "nodeType": "Return",
                        "src": "11789:148:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    56412
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56412,
                      "mutability": "mutable",
                      "name": "o",
                      "nameLocation": "11965:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 56449,
                      "src": "11957:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 56411,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11957:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56415,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 56413,
                      "name": "_decimalsOffset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56156,
                      "src": "11969:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                        "typeString": "function () view returns (uint8)"
                      }
                    },
                    "id": 56414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11969:17:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11957:29:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56416,
                      "name": "o",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56412,
                      "src": "12000:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 56417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12005:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "12000:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56433,
                  "nodeType": "IfStatement",
                  "src": "11996:122:72",
                  "trueBody": {
                    "id": 56432,
                    "nodeType": "Block",
                    "src": "12008:110:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 56421,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56381,
                              "src": "12060:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 56425,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56422,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "12068:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56423,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12068:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 56424,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12084:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "12068:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 56427,
                                    "name": "totalSupply",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 55761,
                                    "src": "12092:11:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                      "typeString": "function () view returns (uint256)"
                                    }
                                  },
                                  "id": 56428,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12092:13:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 56426,
                                "name": "_inc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56564,
                                "src": "12087:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 56429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12087:19:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56419,
                              "name": "FixedPointMathLib",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58518,
                              "src": "12029:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                "typeString": "type(library FixedPointMathLib)"
                              }
                            },
                            "id": 56420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12047:12:72",
                            "memberName": "fullMulDivUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57812,
                            "src": "12029:30:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 56430,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12029:78:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56385,
                        "id": 56431,
                        "nodeType": "Return",
                        "src": "12022:85:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56436,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56381,
                        "src": "12165:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56437,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56218,
                            "src": "12173:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12173:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 56439,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12189:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "12173:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56441,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "12192:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56442,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12192:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 56443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12208:2:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "id": 56444,
                            "name": "o",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56412,
                            "src": "12214:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "12208:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12192:23:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56434,
                        "name": "FixedPointMathLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58518,
                        "src": "12134:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                          "typeString": "type(library FixedPointMathLib)"
                        }
                      },
                      "id": 56435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12152:12:72",
                      "memberName": "fullMulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57812,
                      "src": "12134:30:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 56447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12134:82:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56385,
                  "id": 56448,
                  "nodeType": "Return",
                  "src": "12127:89:72"
                }
              ]
            },
            "documentation": {
              "id": 56379,
              "nodeType": "StructuredDocumentation",
              "src": "10668:940:72",
              "text": "@dev Allows an on-chain or off-chain user to simulate the effects of their mint\n at the current block, given current on-chain conditions.\n - MUST return as close to and no fewer than the exact amount of assets that\n   will be deposited in a mint call in the same transaction, i.e. mint should\n   return the same or fewer assets as `previewMint` if called in the same transaction.\n - MUST NOT account for mint limits like those returned from `maxMint` and should\n   always act as if the mint will be accepted, regardless of approvals, etc.\n - MUST be inclusive of deposit fees. Integrators should be aware of this.\n - MUST not revert.\n Note: Any unfavorable discrepancy between `convertToAssets` and `previewMint` SHOULD\n be considered slippage in share price or some other type of condition,\n meaning the depositor will lose assets by minting."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "11622:11:72",
            "parameters": {
              "id": 56382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56381,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "11642:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56450,
                  "src": "11634:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11634:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11633:16:72"
            },
            "returnParameters": {
              "id": 56385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56384,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "11687:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56450,
                  "src": "11679:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11679:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11678:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56523,
            "nodeType": "FunctionDefinition",
            "src": "13227:634:72",
            "nodes": [],
            "body": {
              "id": 56522,
              "nodeType": "Block",
              "src": "13313:548:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 56460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "13327:20:72",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56458,
                        "name": "_useVirtualShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56165,
                        "src": "13328:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 56459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13328:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56483,
                  "nodeType": "IfStatement",
                  "src": "13323:261:72",
                  "trueBody": {
                    "id": 56482,
                    "nodeType": "Block",
                    "src": "13349:235:72",
                    "statements": [
                      {
                        "assignments": [
                          56462
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56462,
                            "mutability": "mutable",
                            "name": "supply",
                            "nameLocation": "13371:6:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 56482,
                            "src": "13363:14:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56461,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "13363:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56465,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56463,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "13380:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13380:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "13363:30:72"
                      },
                      {
                        "expression": {
                          "condition": {
                            "arguments": [
                              {
                                "id": 56467,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56453,
                                "src": "13428:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56468,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56462,
                                "src": "13436:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56466,
                              "name": "_eitherIsZero",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56550,
                              "src": "13414:13:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (uint256,uint256) pure returns (bool)"
                              }
                            },
                            "id": 56469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13414:29:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "arguments": [
                              {
                                "id": 56475,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56453,
                                "src": "13543:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56476,
                                "name": "supply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56462,
                                "src": "13551:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56477,
                                  "name": "totalAssets",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56218,
                                  "src": "13559:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56478,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13559:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 56473,
                                "name": "FixedPointMathLib",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 58518,
                                "src": "13512:17:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                  "typeString": "type(library FixedPointMathLib)"
                                }
                              },
                              "id": 56474,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13530:12:72",
                              "memberName": "fullMulDivUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57812,
                              "src": "13512:30:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 56479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13512:61:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 56480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "13414:159:72",
                          "trueExpression": {
                            "arguments": [
                              {
                                "id": 56471,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56453,
                                "src": "13486:6:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 56470,
                              "name": "_initialConvertToShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56887,
                              "src": "13462:23:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 56472,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13462:31:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56457,
                        "id": 56481,
                        "nodeType": "Return",
                        "src": "13407:166:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    56485
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56485,
                      "mutability": "mutable",
                      "name": "o",
                      "nameLocation": "13601:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 56522,
                      "src": "13593:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 56484,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13593:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56488,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 56486,
                      "name": "_decimalsOffset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56156,
                      "src": "13605:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                        "typeString": "function () view returns (uint8)"
                      }
                    },
                    "id": 56487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13605:17:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13593:29:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56489,
                      "name": "o",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56485,
                      "src": "13636:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 56490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "13641:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "13636:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56506,
                  "nodeType": "IfStatement",
                  "src": "13632:122:72",
                  "trueBody": {
                    "id": 56505,
                    "nodeType": "Block",
                    "src": "13644:110:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 56494,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56453,
                              "src": "13696:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 56498,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 56495,
                                  "name": "totalSupply",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55761,
                                  "src": "13704:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view returns (uint256)"
                                  }
                                },
                                "id": 56496,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13704:13:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 56497,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13720:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "13704:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 56500,
                                    "name": "totalAssets",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 56218,
                                    "src": "13728:11:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                      "typeString": "function () view returns (uint256)"
                                    }
                                  },
                                  "id": 56501,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13728:13:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 56499,
                                "name": "_inc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56564,
                                "src": "13723:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 56502,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13723:19:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56492,
                              "name": "FixedPointMathLib",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58518,
                              "src": "13665:17:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                                "typeString": "type(library FixedPointMathLib)"
                              }
                            },
                            "id": 56493,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13683:12:72",
                            "memberName": "fullMulDivUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57812,
                            "src": "13665:30:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 56503,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13665:78:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56457,
                        "id": 56504,
                        "nodeType": "Return",
                        "src": "13658:85:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56509,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56453,
                        "src": "13801:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56510,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55761,
                            "src": "13809:11:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 56511,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13809:13:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56514,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 56512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13825:2:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "id": 56513,
                            "name": "o",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56485,
                            "src": "13831:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13825:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "13809:23:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 56517,
                              "name": "totalAssets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56218,
                              "src": "13839:11:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 56518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13839:13:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 56516,
                          "name": "_inc",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56564,
                          "src": "13834:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 56519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13834:19:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56507,
                        "name": "FixedPointMathLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58518,
                        "src": "13770:17:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMathLib_$58518_$",
                          "typeString": "type(library FixedPointMathLib)"
                        }
                      },
                      "id": 56508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13788:12:72",
                      "memberName": "fullMulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57812,
                      "src": "13770:30:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 56520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13770:84:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56457,
                  "id": 56521,
                  "nodeType": "Return",
                  "src": "13763:91:72"
                }
              ]
            },
            "documentation": {
              "id": 56451,
              "nodeType": "StructuredDocumentation",
              "src": "12229:993:72",
              "text": "@dev Allows an on-chain or off-chain user to simulate the effects of their withdrawal\n at the current block, given the current on-chain conditions.\n - MUST return as close to and no fewer than the exact amount of Vault shares that\n   will be burned in a withdraw call in the same transaction, i.e. withdraw should\n   return the same or fewer shares as `previewWithdraw` if call in the same transaction.\n - MUST NOT account for withdrawal limits like those returned from `maxWithdraw` and should\n   always act as if the withdrawal will be accepted, regardless of share balance, etc.\n - MUST be inclusive of withdrawal fees. Integrators should be aware of this.\n - MUST not revert.\n Note: Any unfavorable discrepancy between `convertToShares` and `previewWithdraw` SHOULD\n be considered slippage in share price or some other type of condition,\n meaning the depositor will lose assets by depositing."
            },
            "functionSelector": "0a28a477",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "13236:15:72",
            "parameters": {
              "id": 56454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56453,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "13260:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56523,
                  "src": "13252:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56452,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13252:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13251:16:72"
            },
            "returnParameters": {
              "id": 56457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56456,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "13305:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56523,
                  "src": "13297:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56455,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13297:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13296:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56538,
            "nodeType": "FunctionDefinition",
            "src": "14844:133:72",
            "nodes": [],
            "body": {
              "id": 56537,
              "nodeType": "Block",
              "src": "14928:49:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56531,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56529,
                      "src": "14938:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56533,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56526,
                          "src": "14963:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56532,
                        "name": "convertToAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56363,
                        "src": "14947:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14947:23:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14938:32:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56536,
                  "nodeType": "ExpressionStatement",
                  "src": "14938:32:72"
                }
              ]
            },
            "documentation": {
              "id": 56524,
              "nodeType": "StructuredDocumentation",
              "src": "13867:972:72",
              "text": "@dev Allows an on-chain or off-chain user to simulate the effects of their redemption\n at the current block, given current on-chain conditions.\n - MUST return as close to and no more than the exact amount of assets that\n   will be withdrawn in a redeem call in the same transaction, i.e. redeem should\n   return the same or more assets as `previewRedeem` if called in the same transaction.\n - MUST NOT account for redemption limits like those returned from `maxRedeem` and should\n   always act as if the redemption will be accepted, regardless of approvals, etc.\n - MUST be inclusive of withdrawal fees. Integrators should be aware of this.\n - MUST NOT revert.\n Note: Any unfavorable discrepancy between `convertToAssets` and `previewRedeem` SHOULD\n be considered slippage in share price or some other type of condition,\n meaning the depositor will lose assets by depositing."
            },
            "functionSelector": "4cdad506",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "14853:13:72",
            "parameters": {
              "id": 56527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56526,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "14875:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56538,
                  "src": "14867:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56525,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14867:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14866:16:72"
            },
            "returnParameters": {
              "id": 56530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56529,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "14920:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56538,
                  "src": "14912:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56528,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14912:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14911:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56550,
            "nodeType": "FunctionDefinition",
            "src": "15046:206:72",
            "nodes": [],
            "body": {
              "id": 56549,
              "nodeType": "Block",
              "src": "15126:126:72",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "15188:58:72",
                    "nodeType": "YulBlock",
                    "src": "15188:58:72",
                    "statements": [
                      {
                        "nativeSrc": "15202:34:72",
                        "nodeType": "YulAssignment",
                        "src": "15202:34:72",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "a",
                                  "nativeSrc": "15222:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "15222:1:72"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "15215:6:72",
                                "nodeType": "YulIdentifier",
                                "src": "15215:6:72"
                              },
                              "nativeSrc": "15215:9:72",
                              "nodeType": "YulFunctionCall",
                              "src": "15215:9:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "b",
                                  "nativeSrc": "15233:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "15233:1:72"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "15226:6:72",
                                "nodeType": "YulIdentifier",
                                "src": "15226:6:72"
                              },
                              "nativeSrc": "15226:9:72",
                              "nodeType": "YulFunctionCall",
                              "src": "15226:9:72"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "15212:2:72",
                            "nodeType": "YulIdentifier",
                            "src": "15212:2:72"
                          },
                          "nativeSrc": "15212:24:72",
                          "nodeType": "YulFunctionCall",
                          "src": "15212:24:72"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "15202:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "15202:6:72"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56541,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15222:1:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56543,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15233:1:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56546,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15202:6:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 56548,
                  "nodeType": "InlineAssembly",
                  "src": "15179:67:72"
                }
              ]
            },
            "documentation": {
              "id": 56539,
              "nodeType": "StructuredDocumentation",
              "src": "14983:58:72",
              "text": "@dev Private helper to return if either value is zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_eitherIsZero",
            "nameLocation": "15055:13:72",
            "parameters": {
              "id": 56544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56541,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15077:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56550,
                  "src": "15069:9:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15069:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56543,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15088:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56550,
                  "src": "15080:9:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15080:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15068:22:72"
            },
            "returnParameters": {
              "id": 56547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56546,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "15118:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56550,
                  "src": "15113:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56545,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15113:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15112:13:72"
            },
            "scope": 56919,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 56564,
            "nodeType": "FunctionDefinition",
            "src": "15589:119:72",
            "nodes": [],
            "body": {
              "id": 56563,
              "nodeType": "Block",
              "src": "15645:63:72",
              "nodes": [],
              "statements": [
                {
                  "id": 56562,
                  "nodeType": "UncheckedBlock",
                  "src": "15655:47:72",
                  "statements": [
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 56558,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56553,
                          "src": "15686:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 56559,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "15690:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "15686:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 56557,
                      "id": 56561,
                      "nodeType": "Return",
                      "src": "15679:12:72"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 56551,
              "nodeType": "StructuredDocumentation",
              "src": "15258:326:72",
              "text": "@dev Private helper to return `x + 1` without the overflow check.\n Used for computing the denominator input to `FixedPointMathLib.fullMulDiv(a, b, x + 1)`.\n When `x == type(uint256).max`, we get `x + 1 == 0` (mod 2**256 - 1),\n and `FixedPointMathLib.fullMulDiv` will revert as the denominator is zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_inc",
            "nameLocation": "15598:4:72",
            "parameters": {
              "id": 56554,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56553,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "15611:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56564,
                  "src": "15603:9:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56552,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15603:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15602:11:72"
            },
            "returnParameters": {
              "id": 56557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56556,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56564,
                  "src": "15636:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15636:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15635:9:72"
            },
            "scope": 56919,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 56585,
            "nodeType": "FunctionDefinition",
            "src": "16314:179:72",
            "nodes": [],
            "body": {
              "id": 56584,
              "nodeType": "Block",
              "src": "16394:99:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56572,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56567,
                      "src": "16404:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 56573,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56567,
                      "src": "16409:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "16404:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 56575,
                  "nodeType": "ExpressionStatement",
                  "src": "16404:7:72"
                },
                {
                  "expression": {
                    "id": 56582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56576,
                      "name": "maxAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56570,
                      "src": "16457:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 56579,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16474:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 56578,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "16474:7:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 56577,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16469:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 56580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16469:13:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 56581,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16483:3:72",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16469:17:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16457:29:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56583,
                  "nodeType": "ExpressionStatement",
                  "src": "16457:29:72"
                }
              ]
            },
            "documentation": {
              "id": 56565,
              "nodeType": "StructuredDocumentation",
              "src": "15997:312:72",
              "text": "@dev Returns the maximum amount of the underlying asset that can be deposited\n into the Vault for `to`, via a deposit call.\n - MUST return a limited value if `to` is subject to some deposit limit.\n - MUST return `2**256-1` if there is no maximum limit.\n - MUST NOT revert."
            },
            "functionSelector": "402d267d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "16323:10:72",
            "parameters": {
              "id": 56568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56567,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16342:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56585,
                  "src": "16334:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56566,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16334:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16333:12:72"
            },
            "returnParameters": {
              "id": 56571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56570,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "16383:9:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56585,
                  "src": "16375:17:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16375:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16374:19:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56606,
            "nodeType": "FunctionDefinition",
            "src": "16788:176:72",
            "nodes": [],
            "body": {
              "id": 56605,
              "nodeType": "Block",
              "src": "16865:99:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56593,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56588,
                      "src": "16875:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 56594,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56588,
                      "src": "16880:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "16875:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 56596,
                  "nodeType": "ExpressionStatement",
                  "src": "16875:7:72"
                },
                {
                  "expression": {
                    "id": 56603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56597,
                      "name": "maxShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56591,
                      "src": "16928:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 56600,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16945:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 56599,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "16945:7:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 56598,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16940:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 56601,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16940:13:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 56602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16954:3:72",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16940:17:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16928:29:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56604,
                  "nodeType": "ExpressionStatement",
                  "src": "16928:29:72"
                }
              ]
            },
            "documentation": {
              "id": 56586,
              "nodeType": "StructuredDocumentation",
              "src": "16499:284:72",
              "text": "@dev Returns the maximum amount of the Vault shares that can be minter for `to`,\n via a mint call.\n - MUST return a limited value if `to` is subject to some mint limit.\n - MUST return `2**256-1` if there is no maximum limit.\n - MUST NOT revert."
            },
            "functionSelector": "c63d75b6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "16797:7:72",
            "parameters": {
              "id": 56589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56588,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16813:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56606,
                  "src": "16805:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56587,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16805:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16804:12:72"
            },
            "returnParameters": {
              "id": 56592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56591,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "16854:9:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56606,
                  "src": "16846:17:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16846:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16845:19:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56623,
            "nodeType": "FunctionDefinition",
            "src": "17259:146:72",
            "nodes": [],
            "body": {
              "id": 56622,
              "nodeType": "Block",
              "src": "17343:62:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56614,
                      "name": "maxAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56612,
                      "src": "17353:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 56617,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56609,
                              "src": "17391:5:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 56616,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55771,
                            "src": "17381:9:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 56618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17381:16:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56615,
                        "name": "convertToAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56363,
                        "src": "17365:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17365:33:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17353:45:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56621,
                  "nodeType": "ExpressionStatement",
                  "src": "17353:45:72"
                }
              ]
            },
            "documentation": {
              "id": 56607,
              "nodeType": "StructuredDocumentation",
              "src": "16970:284:72",
              "text": "@dev Returns the maximum amount of the underlying asset that can be withdrawn\n from the `owner`'s balance in the Vault, via a withdraw call.\n - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock.\n - MUST NOT revert."
            },
            "functionSelector": "ce96cb77",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "17268:11:72",
            "parameters": {
              "id": 56610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56609,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "17288:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56623,
                  "src": "17280:13:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56608,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17280:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17279:15:72"
            },
            "returnParameters": {
              "id": 56613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56612,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "17332:9:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56623,
                  "src": "17324:17:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17324:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17323:19:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56638,
            "nodeType": "FunctionDefinition",
            "src": "17741:127:72",
            "nodes": [],
            "body": {
              "id": 56637,
              "nodeType": "Block",
              "src": "17823:45:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56631,
                      "name": "maxShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56629,
                      "src": "17833:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56633,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56626,
                          "src": "17855:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56632,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55771,
                        "src": "17845:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17845:16:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17833:28:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56636,
                  "nodeType": "ExpressionStatement",
                  "src": "17833:28:72"
                }
              ]
            },
            "documentation": {
              "id": 56624,
              "nodeType": "StructuredDocumentation",
              "src": "17411:325:72",
              "text": "@dev Returns the maximum amount of Vault shares that can be redeemed\n from the `owner`'s balance in the Vault, via a redeem call.\n - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock.\n - MUST return `balanceOf(owner)` otherwise.\n - MUST NOT revert."
            },
            "functionSelector": "d905777e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "17750:9:72",
            "parameters": {
              "id": 56627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56626,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "17768:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56638,
                  "src": "17760:13:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17760:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17759:15:72"
            },
            "returnParameters": {
              "id": 56630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56629,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "17812:9:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56638,
                  "src": "17804:17:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17804:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17803:19:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56673,
            "nodeType": "FunctionDefinition",
            "src": "18771:268:72",
            "nodes": [],
            "body": {
              "id": 56672,
              "nodeType": "Block",
              "src": "18856:183:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56648,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56641,
                      "src": "18870:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 56650,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56643,
                          "src": "18890:2:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56649,
                        "name": "maxDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56585,
                        "src": "18879:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18879:14:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18870:23:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56657,
                  "nodeType": "IfStatement",
                  "src": "18866:48:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "30786233633631613833",
                          "id": 56654,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18903:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3016104579_by_1",
                            "typeString": "int_const 3016104579"
                          },
                          "value": "0xb3c61a83"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_3016104579_by_1",
                            "typeString": "int_const 3016104579"
                          }
                        ],
                        "id": 56653,
                        "name": "_revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56792,
                        "src": "18895:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) pure"
                        }
                      },
                      "id": 56655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18895:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 56656,
                    "nodeType": "ExpressionStatement",
                    "src": "18895:19:72"
                  }
                },
                {
                  "expression": {
                    "id": 56662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56658,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56646,
                      "src": "18951:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56660,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56641,
                          "src": "18975:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56659,
                        "name": "previewDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56378,
                        "src": "18960:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56661,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18960:22:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18951:31:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56663,
                  "nodeType": "ExpressionStatement",
                  "src": "18951:31:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56665,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "19001:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 56666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19005:6:72",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "19001:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56667,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56643,
                        "src": "19013:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56668,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56641,
                        "src": "19017:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56669,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56646,
                        "src": "19025:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56664,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56829,
                      "src": "18992:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 56670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18992:40:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56671,
                  "nodeType": "ExpressionStatement",
                  "src": "18992:40:72"
                }
              ]
            },
            "documentation": {
              "id": 56639,
              "nodeType": "StructuredDocumentation",
              "src": "18157:609:72",
              "text": "@dev Mints `shares` Vault shares to `to` by depositing exactly `assets`\n of underlying tokens.\n - MUST emit the {Deposit} event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault\n   contract before the deposit execution, and are accounted for during deposit.\n - MUST revert if all of `assets` cannot be deposited, such as due to deposit limit,\n   slippage, insufficient approval, etc.\n Note: Most implementations will require pre-approval of the Vault with the\n Vault's underlying `asset` token."
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "18780:7:72",
            "parameters": {
              "id": 56644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56641,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "18796:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56673,
                  "src": "18788:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56640,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18788:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56643,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "18812:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56673,
                  "src": "18804:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "18804:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18787:28:72"
            },
            "returnParameters": {
              "id": 56647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56646,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "18848:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56673,
                  "src": "18840:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18840:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18839:16:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56708,
            "nodeType": "FunctionDefinition",
            "src": "19653:256:72",
            "nodes": [],
            "body": {
              "id": 56707,
              "nodeType": "Block",
              "src": "19735:174:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56683,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56676,
                      "src": "19749:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 56685,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56678,
                          "src": "19766:2:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56684,
                        "name": "maxMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56606,
                        "src": "19758:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56686,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19758:11:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19749:20:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56692,
                  "nodeType": "IfStatement",
                  "src": "19745:45:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "30783661363935393539",
                          "id": 56689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19779:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1785289049_by_1",
                            "typeString": "int_const 1785289049"
                          },
                          "value": "0x6a695959"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1785289049_by_1",
                            "typeString": "int_const 1785289049"
                          }
                        ],
                        "id": 56688,
                        "name": "_revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56792,
                        "src": "19771:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) pure"
                        }
                      },
                      "id": 56690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19771:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 56691,
                    "nodeType": "ExpressionStatement",
                    "src": "19771:19:72"
                  }
                },
                {
                  "expression": {
                    "id": 56697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56693,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56681,
                      "src": "19824:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56695,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56676,
                          "src": "19845:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56694,
                        "name": "previewMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56450,
                        "src": "19833:11:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19833:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19824:28:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56698,
                  "nodeType": "ExpressionStatement",
                  "src": "19824:28:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56700,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "19871:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 56701,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19875:6:72",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "19871:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56702,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56678,
                        "src": "19883:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56703,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56681,
                        "src": "19887:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56704,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56676,
                        "src": "19895:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56699,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56829,
                      "src": "19862:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 56705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "19862:40:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56706,
                  "nodeType": "ExpressionStatement",
                  "src": "19862:40:72"
                }
              ]
            },
            "documentation": {
              "id": 56674,
              "nodeType": "StructuredDocumentation",
              "src": "19045:603:72",
              "text": "@dev Mints exactly `shares` Vault shares to `to` by depositing `assets`\n of underlying tokens.\n - MUST emit the {Deposit} event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault\n   contract before the mint execution, and are accounted for during mint.\n - MUST revert if all of `shares` cannot be deposited, such as due to deposit limit,\n   slippage, insufficient approval, etc.\n Note: Most implementations will require pre-approval of the Vault with the\n Vault's underlying `asset` token."
            },
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "19662:4:72",
            "parameters": {
              "id": 56679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56676,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "19675:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56708,
                  "src": "19667:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19667:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56678,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "19691:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56708,
                  "src": "19683:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19683:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19666:28:72"
            },
            "returnParameters": {
              "id": 56682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56681,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "19727:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56708,
                  "src": "19719:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19719:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19718:16:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56746,
            "nodeType": "FunctionDefinition",
            "src": "20565:326:72",
            "nodes": [],
            "body": {
              "id": 56745,
              "nodeType": "Block",
              "src": "20694:197:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56724,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56720,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56711,
                      "src": "20708:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 56722,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56715,
                          "src": "20729:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56721,
                        "name": "maxWithdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56623,
                        "src": "20717:11:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20717:18:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20708:27:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56729,
                  "nodeType": "IfStatement",
                  "src": "20704:52:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "30783933363934316663",
                          "id": 56726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20745:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2473148924_by_1",
                            "typeString": "int_const 2473148924"
                          },
                          "value": "0x936941fc"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_2473148924_by_1",
                            "typeString": "int_const 2473148924"
                          }
                        ],
                        "id": 56725,
                        "name": "_revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56792,
                        "src": "20737:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) pure"
                        }
                      },
                      "id": 56727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20737:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 56728,
                    "nodeType": "ExpressionStatement",
                    "src": "20737:19:72"
                  }
                },
                {
                  "expression": {
                    "id": 56734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56730,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56718,
                      "src": "20794:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56732,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56711,
                          "src": "20819:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56731,
                        "name": "previewWithdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56523,
                        "src": "20803:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56733,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20803:23:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20794:32:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56735,
                  "nodeType": "ExpressionStatement",
                  "src": "20794:32:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56737,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "20846:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 56738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20850:6:72",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "20846:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56739,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56713,
                        "src": "20858:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56740,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56715,
                        "src": "20862:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56741,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56711,
                        "src": "20869:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56742,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56718,
                        "src": "20877:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56736,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56874,
                      "src": "20836:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 56743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20836:48:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56744,
                  "nodeType": "ExpressionStatement",
                  "src": "20836:48:72"
                }
              ]
            },
            "documentation": {
              "id": 56709,
              "nodeType": "StructuredDocumentation",
              "src": "19915:645:72",
              "text": "@dev Burns `shares` from `owner` and sends exactly `assets` of underlying tokens to `to`.\n - MUST emit the {Withdraw} event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault\n   contract before the withdraw execution, and are accounted for during withdraw.\n - MUST revert if all of `assets` cannot be withdrawn, such as due to withdrawal limit,\n   slippage, insufficient balance, etc.\n Note: Some implementations will require pre-requesting to the Vault before a withdrawal\n may be performed. Those methods should be performed separately."
            },
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "20574:8:72",
            "parameters": {
              "id": 56716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56711,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "20591:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56746,
                  "src": "20583:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20583:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56713,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "20607:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56746,
                  "src": "20599:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56712,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20599:7:72",
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
                  "id": 56715,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "20619:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56746,
                  "src": "20611:13:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56714,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20611:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20582:43:72"
            },
            "returnParameters": {
              "id": 56719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56718,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "20682:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56746,
                  "src": "20674:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20674:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20673:16:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56784,
            "nodeType": "FunctionDefinition",
            "src": "21536:318:72",
            "nodes": [],
            "body": {
              "id": 56783,
              "nodeType": "Block",
              "src": "21663:191:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56758,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56749,
                      "src": "21677:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 56760,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56753,
                          "src": "21696:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56759,
                        "name": "maxRedeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56638,
                        "src": "21686:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21686:16:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21677:25:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56767,
                  "nodeType": "IfStatement",
                  "src": "21673:50:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "30783436353634323561",
                          "id": 56764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21712:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1180058202_by_1",
                            "typeString": "int_const 1180058202"
                          },
                          "value": "0x4656425a"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1180058202_by_1",
                            "typeString": "int_const 1180058202"
                          }
                        ],
                        "id": 56763,
                        "name": "_revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56792,
                        "src": "21704:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) pure"
                        }
                      },
                      "id": 56765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21704:19:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 56766,
                    "nodeType": "ExpressionStatement",
                    "src": "21704:19:72"
                  }
                },
                {
                  "expression": {
                    "id": 56772,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56768,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56756,
                      "src": "21759:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 56770,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56749,
                          "src": "21782:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56769,
                        "name": "previewRedeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56538,
                        "src": "21768:13:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 56771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21768:21:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21759:30:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56773,
                  "nodeType": "ExpressionStatement",
                  "src": "21759:30:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56775,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "21809:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 56776,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21813:6:72",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "21809:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56777,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56751,
                        "src": "21821:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56778,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56753,
                        "src": "21825:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56779,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56756,
                        "src": "21832:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56780,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56749,
                        "src": "21840:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56774,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56874,
                      "src": "21799:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 56781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "21799:48:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56782,
                  "nodeType": "ExpressionStatement",
                  "src": "21799:48:72"
                }
              ]
            },
            "documentation": {
              "id": 56747,
              "nodeType": "StructuredDocumentation",
              "src": "20897:634:72",
              "text": "@dev Burns exactly `shares` from `owner` and sends `assets` of underlying tokens to `to`.\n - MUST emit the {Withdraw} event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault\n   contract before the redeem execution, and are accounted for during redeem.\n - MUST revert if all of shares cannot be redeemed, such as due to withdrawal limit,\n   slippage, insufficient balance, etc.\n Note: Some implementations will require pre-requesting to the Vault before a redeem\n may be performed. Those methods should be performed separately."
            },
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "21545:6:72",
            "parameters": {
              "id": 56754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56749,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "21560:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56784,
                  "src": "21552:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21552:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56751,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "21576:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56784,
                  "src": "21568:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21568:7:72",
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
                  "id": 56753,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "21588:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56784,
                  "src": "21580:13:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21580:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21551:43:72"
            },
            "returnParameters": {
              "id": 56757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56756,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "21651:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56784,
                  "src": "21643:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56755,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21643:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21642:16:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 56792,
            "nodeType": "FunctionDefinition",
            "src": "21916:179:72",
            "nodes": [],
            "body": {
              "id": 56791,
              "nodeType": "Block",
              "src": "21957:138:72",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "22019:70:72",
                    "nodeType": "YulBlock",
                    "src": "22019:70:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22040:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22040:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "s",
                              "nativeSrc": "22046:1:72",
                              "nodeType": "YulIdentifier",
                              "src": "22046:1:72"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22033:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "22033:6:72"
                          },
                          "nativeSrc": "22033:15:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22033:15:72"
                        },
                        "nativeSrc": "22033:15:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "22033:15:72"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22068:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22068:4:72",
                              "type": "",
                              "value": "0x1c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "22074:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22074:4:72",
                              "type": "",
                              "value": "0x04"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "22061:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "22061:6:72"
                          },
                          "nativeSrc": "22061:18:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22061:18:72"
                        },
                        "nativeSrc": "22061:18:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "22061:18:72"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56787,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22046:1:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 56790,
                  "nodeType": "InlineAssembly",
                  "src": "22010:79:72"
                }
              ]
            },
            "documentation": {
              "id": 56785,
              "nodeType": "StructuredDocumentation",
              "src": "21860:51:72",
              "text": "@dev Internal helper for reverting efficiently."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "21925:7:72",
            "parameters": {
              "id": 56788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56787,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "21941:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56792,
                  "src": "21933:9:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21933:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21932:11:72"
            },
            "returnParameters": {
              "id": 56789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:72"
            },
            "scope": 56919,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 56829,
            "nodeType": "FunctionDefinition",
            "src": "22462:537:72",
            "nodes": [],
            "body": {
              "id": 56828,
              "nodeType": "Block",
              "src": "22553:446:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56807,
                          "name": "asset",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56138,
                          "src": "22596:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 56808,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "22596:7:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56809,
                        "name": "by",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56795,
                        "src": "22605:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 56812,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "22617:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626_$56919",
                              "typeString": "contract ERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626_$56919",
                              "typeString": "contract ERC4626"
                            }
                          ],
                          "id": 56811,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "22609:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 56810,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "22609:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 56813,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "22609:13:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56814,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56799,
                        "src": "22624:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56804,
                        "name": "SafeTransferLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58876,
                        "src": "22563:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$58876_$",
                          "typeString": "type(library SafeTransferLib)"
                        }
                      },
                      "id": 56806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "22579:16:72",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58681,
                      "src": "22563:32:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 56815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22563:68:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56816,
                  "nodeType": "ExpressionStatement",
                  "src": "22563:68:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56818,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56797,
                        "src": "22647:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56819,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56801,
                        "src": "22651:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56817,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55970,
                      "src": "22641:5:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 56820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22641:17:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56821,
                  "nodeType": "ExpressionStatement",
                  "src": "22641:17:72"
                },
                {
                  "AST": {
                    "nativeSrc": "22720:234:72",
                    "nodeType": "YulBlock",
                    "src": "22720:234:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22782:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22782:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "assets",
                              "nativeSrc": "22788:6:72",
                              "nodeType": "YulIdentifier",
                              "src": "22788:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22775:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "22775:6:72"
                          },
                          "nativeSrc": "22775:20:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22775:20:72"
                        },
                        "nativeSrc": "22775:20:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "22775:20:72"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22815:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22815:4:72",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "shares",
                              "nativeSrc": "22821:6:72",
                              "nodeType": "YulIdentifier",
                              "src": "22821:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22808:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "22808:6:72"
                          },
                          "nativeSrc": "22808:20:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22808:20:72"
                        },
                        "nativeSrc": "22808:20:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "22808:20:72"
                      },
                      {
                        "nativeSrc": "22841:24:72",
                        "nodeType": "YulVariableDeclaration",
                        "src": "22841:24:72",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22854:2:72",
                              "nodeType": "YulLiteral",
                              "src": "22854:2:72",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "22862:1:72",
                                  "nodeType": "YulLiteral",
                                  "src": "22862:1:72",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "22858:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "22858:3:72"
                              },
                              "nativeSrc": "22858:6:72",
                              "nodeType": "YulFunctionCall",
                              "src": "22858:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "22850:3:72",
                            "nodeType": "YulIdentifier",
                            "src": "22850:3:72"
                          },
                          "nativeSrc": "22850:15:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22850:15:72"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "22845:1:72",
                            "nodeType": "YulTypedName",
                            "src": "22845:1:72",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22883:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22883:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "22889:4:72",
                              "nodeType": "YulLiteral",
                              "src": "22889:4:72",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "_DEPOSIT_EVENT_SIGNATURE",
                              "nativeSrc": "22895:24:72",
                              "nodeType": "YulIdentifier",
                              "src": "22895:24:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "22925:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "22925:1:72"
                                },
                                {
                                  "name": "by",
                                  "nativeSrc": "22928:2:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "22928:2:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "22921:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "22921:3:72"
                              },
                              "nativeSrc": "22921:10:72",
                              "nodeType": "YulFunctionCall",
                              "src": "22921:10:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "22937:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "22937:1:72"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "22940:2:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "22940:2:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "22933:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "22933:3:72"
                              },
                              "nativeSrc": "22933:10:72",
                              "nodeType": "YulFunctionCall",
                              "src": "22933:10:72"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "22878:4:72",
                            "nodeType": "YulIdentifier",
                            "src": "22878:4:72"
                          },
                          "nativeSrc": "22878:66:72",
                          "nodeType": "YulFunctionCall",
                          "src": "22878:66:72"
                        },
                        "nativeSrc": "22878:66:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "22878:66:72"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56128,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22895:24:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56799,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22788:6:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56795,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22928:2:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56801,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22821:6:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56797,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22940:2:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 56822,
                  "nodeType": "InlineAssembly",
                  "src": "22711:243:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56824,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56799,
                        "src": "22977:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56825,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56801,
                        "src": "22985:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56823,
                      "name": "_afterDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56918,
                      "src": "22963:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 56826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22963:29:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56827,
                  "nodeType": "ExpressionStatement",
                  "src": "22963:29:72"
                }
              ]
            },
            "documentation": {
              "id": 56793,
              "nodeType": "StructuredDocumentation",
              "src": "22384:73:72",
              "text": "@dev For deposits and mints.\n Emits a {Deposit} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "22471:8:72",
            "parameters": {
              "id": 56802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56795,
                  "mutability": "mutable",
                  "name": "by",
                  "nameLocation": "22488:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56829,
                  "src": "22480:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56794,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22480:7:72",
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
                  "id": 56797,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "22500:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56829,
                  "src": "22492:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22492:7:72",
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
                  "id": 56799,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "22512:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56829,
                  "src": "22504:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22504:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56801,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "22528:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56829,
                  "src": "22520:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22520:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22479:56:72"
            },
            "returnParameters": {
              "id": 56803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22553:0:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56874,
            "nodeType": "FunctionDefinition",
            "src": "23093:637:72",
            "nodes": [],
            "body": {
              "id": 56873,
              "nodeType": "Block",
              "src": "23220:510:72",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 56845,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 56843,
                      "name": "by",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56832,
                      "src": "23234:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 56844,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56836,
                      "src": "23240:5:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "23234:11:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56852,
                  "nodeType": "IfStatement",
                  "src": "23230:51:72",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 56847,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56836,
                          "src": "23263:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 56848,
                          "name": "by",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56832,
                          "src": "23270:2:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 56849,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56840,
                          "src": "23274:6:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56846,
                        "name": "_spendAllowance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56034,
                        "src": "23247:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 56850,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23247:34:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 56851,
                    "nodeType": "ExpressionStatement",
                    "src": "23247:34:72"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56854,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56838,
                        "src": "23307:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56855,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56840,
                        "src": "23315:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56853,
                      "name": "_beforeWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56909,
                      "src": "23291:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 56856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "23291:31:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56857,
                  "nodeType": "ExpressionStatement",
                  "src": "23291:31:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56859,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56836,
                        "src": "23338:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56860,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56840,
                        "src": "23345:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56858,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55998,
                      "src": "23332:5:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 56861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "23332:20:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56862,
                  "nodeType": "ExpressionStatement",
                  "src": "23332:20:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56866,
                          "name": "asset",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56138,
                          "src": "23391:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 56867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "23391:7:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56868,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56834,
                        "src": "23400:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56869,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56838,
                        "src": "23404:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56863,
                        "name": "SafeTransferLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58876,
                        "src": "23362:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$58876_$",
                          "typeString": "type(library SafeTransferLib)"
                        }
                      },
                      "id": 56865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "23378:12:72",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58723,
                      "src": "23362:28:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 56870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "23362:49:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56871,
                  "nodeType": "ExpressionStatement",
                  "src": "23362:49:72"
                },
                {
                  "AST": {
                    "nativeSrc": "23473:251:72",
                    "nodeType": "YulBlock",
                    "src": "23473:251:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23536:4:72",
                              "nodeType": "YulLiteral",
                              "src": "23536:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "assets",
                              "nativeSrc": "23542:6:72",
                              "nodeType": "YulIdentifier",
                              "src": "23542:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "23529:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "23529:6:72"
                          },
                          "nativeSrc": "23529:20:72",
                          "nodeType": "YulFunctionCall",
                          "src": "23529:20:72"
                        },
                        "nativeSrc": "23529:20:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "23529:20:72"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23569:4:72",
                              "nodeType": "YulLiteral",
                              "src": "23569:4:72",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "shares",
                              "nativeSrc": "23575:6:72",
                              "nodeType": "YulIdentifier",
                              "src": "23575:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "23562:6:72",
                            "nodeType": "YulIdentifier",
                            "src": "23562:6:72"
                          },
                          "nativeSrc": "23562:20:72",
                          "nodeType": "YulFunctionCall",
                          "src": "23562:20:72"
                        },
                        "nativeSrc": "23562:20:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "23562:20:72"
                      },
                      {
                        "nativeSrc": "23595:24:72",
                        "nodeType": "YulVariableDeclaration",
                        "src": "23595:24:72",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23608:2:72",
                              "nodeType": "YulLiteral",
                              "src": "23608:2:72",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "23616:1:72",
                                  "nodeType": "YulLiteral",
                                  "src": "23616:1:72",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "23612:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "23612:3:72"
                              },
                              "nativeSrc": "23612:6:72",
                              "nodeType": "YulFunctionCall",
                              "src": "23612:6:72"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "23604:3:72",
                            "nodeType": "YulIdentifier",
                            "src": "23604:3:72"
                          },
                          "nativeSrc": "23604:15:72",
                          "nodeType": "YulFunctionCall",
                          "src": "23604:15:72"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "23599:1:72",
                            "nodeType": "YulTypedName",
                            "src": "23599:1:72",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23637:4:72",
                              "nodeType": "YulLiteral",
                              "src": "23637:4:72",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "23643:4:72",
                              "nodeType": "YulLiteral",
                              "src": "23643:4:72",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "_WITHDRAW_EVENT_SIGNATURE",
                              "nativeSrc": "23649:25:72",
                              "nodeType": "YulIdentifier",
                              "src": "23649:25:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "23680:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23680:1:72"
                                },
                                {
                                  "name": "by",
                                  "nativeSrc": "23683:2:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23683:2:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "23676:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "23676:3:72"
                              },
                              "nativeSrc": "23676:10:72",
                              "nodeType": "YulFunctionCall",
                              "src": "23676:10:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "23692:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23692:1:72"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "23695:2:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23695:2:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "23688:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "23688:3:72"
                              },
                              "nativeSrc": "23688:10:72",
                              "nodeType": "YulFunctionCall",
                              "src": "23688:10:72"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "23704:1:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23704:1:72"
                                },
                                {
                                  "name": "owner",
                                  "nativeSrc": "23707:5:72",
                                  "nodeType": "YulIdentifier",
                                  "src": "23707:5:72"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "23700:3:72",
                                "nodeType": "YulIdentifier",
                                "src": "23700:3:72"
                              },
                              "nativeSrc": "23700:13:72",
                              "nodeType": "YulFunctionCall",
                              "src": "23700:13:72"
                            }
                          ],
                          "functionName": {
                            "name": "log4",
                            "nativeSrc": "23632:4:72",
                            "nodeType": "YulIdentifier",
                            "src": "23632:4:72"
                          },
                          "nativeSrc": "23632:82:72",
                          "nodeType": "YulFunctionCall",
                          "src": "23632:82:72"
                        },
                        "nativeSrc": "23632:82:72",
                        "nodeType": "YulExpressionStatement",
                        "src": "23632:82:72"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56132,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23649:25:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23542:6:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23683:2:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23707:5:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56840,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23575:6:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23695:2:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 56872,
                  "nodeType": "InlineAssembly",
                  "src": "23464:260:72"
                }
              ]
            },
            "documentation": {
              "id": 56830,
              "nodeType": "StructuredDocumentation",
              "src": "23005:83:72",
              "text": "@dev For withdrawals and redemptions.\n Emits a {Withdraw} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "23102:9:72",
            "parameters": {
              "id": 56841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56832,
                  "mutability": "mutable",
                  "name": "by",
                  "nameLocation": "23120:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56874,
                  "src": "23112:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23112:7:72",
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
                  "id": 56834,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "23132:2:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56874,
                  "src": "23124:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56833,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23124:7:72",
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
                  "id": 56836,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "23144:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56874,
                  "src": "23136:13:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23136:7:72",
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
                  "id": 56838,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "23159:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56874,
                  "src": "23151:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23151:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56840,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "23175:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56874,
                  "src": "23167:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23167:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23111:71:72"
            },
            "returnParameters": {
              "id": 56842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23220:0:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56887,
            "nodeType": "FunctionDefinition",
            "src": "24018:164:72",
            "nodes": [],
            "body": {
              "id": 56886,
              "nodeType": "Block",
              "src": "24150:32:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56882,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56880,
                      "src": "24160:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 56883,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56877,
                      "src": "24169:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "24160:15:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56885,
                  "nodeType": "ExpressionStatement",
                  "src": "24160:15:72"
                }
              ]
            },
            "documentation": {
              "id": 56875,
              "nodeType": "StructuredDocumentation",
              "src": "23736:277:72",
              "text": "@dev Internal conversion function (from assets to shares) to apply when the Vault is empty.\n Only used when {_useVirtualShares} returns false.\n Note: Make sure to keep this function consistent with {_initialConvertToAssets}\n when overriding it."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_initialConvertToShares",
            "nameLocation": "24027:23:72",
            "parameters": {
              "id": 56878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56877,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "24059:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56887,
                  "src": "24051:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56876,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24051:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24050:16:72"
            },
            "returnParameters": {
              "id": 56881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56880,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "24138:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56887,
                  "src": "24130:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24130:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24129:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56900,
            "nodeType": "FunctionDefinition",
            "src": "24470:164:72",
            "nodes": [],
            "body": {
              "id": 56899,
              "nodeType": "Block",
              "src": "24602:32:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 56897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 56895,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56893,
                      "src": "24612:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 56896,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56890,
                      "src": "24621:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "24612:15:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56898,
                  "nodeType": "ExpressionStatement",
                  "src": "24612:15:72"
                }
              ]
            },
            "documentation": {
              "id": 56888,
              "nodeType": "StructuredDocumentation",
              "src": "24188:277:72",
              "text": "@dev Internal conversion function (from shares to assets) to apply when the Vault is empty.\n Only used when {_useVirtualShares} returns false.\n Note: Make sure to keep this function consistent with {_initialConvertToShares}\n when overriding it."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_initialConvertToAssets",
            "nameLocation": "24479:23:72",
            "parameters": {
              "id": 56891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56890,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "24511:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56900,
                  "src": "24503:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56889,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24503:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24502:16:72"
            },
            "returnParameters": {
              "id": 56894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56893,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "24590:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56900,
                  "src": "24582:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56892,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24582:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24581:16:72"
            },
            "scope": 56919,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56909,
            "nodeType": "FunctionDefinition",
            "src": "24993:76:72",
            "nodes": [],
            "body": {
              "id": 56908,
              "nodeType": "Block",
              "src": "25067:2:72",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 56901,
              "nodeType": "StructuredDocumentation",
              "src": "24923:65:72",
              "text": "@dev Hook that is called before any withdrawal or redemption."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeWithdraw",
            "nameLocation": "25002:15:72",
            "parameters": {
              "id": 56906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56903,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "25026:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56909,
                  "src": "25018:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25018:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56905,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "25042:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56909,
                  "src": "25034:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56904,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25034:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25017:32:72"
            },
            "returnParameters": {
              "id": 56907,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25067:0:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56918,
            "nodeType": "FunctionDefinition",
            "src": "25135:74:72",
            "nodes": [],
            "body": {
              "id": 56917,
              "nodeType": "Block",
              "src": "25207:2:72",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 56910,
              "nodeType": "StructuredDocumentation",
              "src": "25075:55:72",
              "text": "@dev Hook that is called after any deposit or mint."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_afterDeposit",
            "nameLocation": "25144:13:72",
            "parameters": {
              "id": 56915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56912,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "25166:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56918,
                  "src": "25158:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56911,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25158:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56914,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "25182:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 56918,
                  "src": "25174:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25174:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25157:32:72"
            },
            "returnParameters": {
              "id": 56916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25207:0:72"
            },
            "scope": 56919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 56079,
              "name": "ERC20",
              "nameLocations": [
                "665:5:72"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56069,
              "src": "665:5:72"
            },
            "id": 56080,
            "nodeType": "InheritanceSpecifier",
            "src": "665:5:72"
          }
        ],
        "canonicalName": "ERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 56078,
          "nodeType": "StructuredDocumentation",
          "src": "221:415:72",
          "text": "@notice Simple ERC4626 tokenized Vault implementation.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/tokens/ERC4626.sol)\n @author Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)\n @author Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC4626.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          56919,
          56069
        ],
        "name": "ERC4626",
        "nameLocation": "654:7:72",
        "scope": 56920,
        "usedErrors": [
          55656,
          55659,
          55662,
          55665,
          55668,
          55671,
          55674,
          56091,
          56094,
          56097,
          56100
        ],
        "usedEvents": [
          55683,
          55692,
          56111,
          56124
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 72
} as const;