export const IERC4626 = {
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
          "name": "receiver",
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
          "name": "totalManagedAssets",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"assetTokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalManagedAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC4626 \\\"Tokenized Vault Standard\\\", as defined in https://eips.ethereum.org/EIPS/eip-4626[ERC-4626].\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets a `value` amount of tokens as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"asset()\":{\"details\":\"Returns the address of the underlying token used for the Vault for accounting, depositing, and withdrawing. - MUST be an ERC-20 token contract. - MUST NOT revert.\"},\"balanceOf(address)\":{\"details\":\"Returns the value of tokens owned by `account`.\"},\"convertToAssets(uint256)\":{\"details\":\"Returns the amount of assets that the Vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the \\u201cper-user\\u201d price-per-share, and instead should reflect the \\u201caverage-user\\u2019s\\u201d price-per-share, meaning what the average user should expect to see when exchanging to and from.\"},\"convertToShares(uint256)\":{\"details\":\"Returns the amount of shares that the Vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange. - MUST NOT revert. NOTE: This calculation MAY NOT reflect the \\u201cper-user\\u201d price-per-share, and instead should reflect the \\u201caverage-user\\u2019s\\u201d price-per-share, meaning what the average user should expect to see when exchanging to and from.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token.\"},\"deposit(uint256,address)\":{\"details\":\"Mints shares Vault shares to receiver by depositing exactly amount of underlying tokens. - MUST emit the Deposit event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   deposit execution, and are accounted for during deposit. - MUST revert if all of assets cannot be deposited (due to deposit limit being reached, slippage, the user not   approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault\\u2019s underlying asset token.\"},\"maxDeposit(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be deposited into the Vault for the receiver, through a deposit call. - MUST return a limited value if receiver is subject to some deposit limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of assets that may be deposited. - MUST NOT revert.\"},\"maxMint(address)\":{\"details\":\"Returns the maximum amount of the Vault shares that can be minted for the receiver, through a mint call. - MUST return a limited value if receiver is subject to some mint limit. - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of shares that may be minted. - MUST NOT revert.\"},\"maxRedeem(address)\":{\"details\":\"Returns the maximum amount of Vault shares that can be redeemed from the owner balance in the Vault, through a redeem call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST return balanceOf(owner) if owner is not subject to any withdrawal limit or timelock. - MUST NOT revert.\"},\"maxWithdraw(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be withdrawn from the owner balance in the Vault, through a withdraw call. - MUST return a limited value if owner is subject to some withdrawal limit or timelock. - MUST NOT revert.\"},\"mint(uint256,address)\":{\"details\":\"Mints exactly shares Vault shares to receiver by depositing amount of underlying tokens. - MUST emit the Deposit event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the mint   execution, and are accounted for during mint. - MUST revert if all of shares cannot be minted (due to deposit limit being reached, slippage, the user not   approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault\\u2019s underlying asset token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"previewDeposit(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that would be minted in a deposit   call in the same transaction. I.e. deposit should return the same or more shares as previewDeposit if called   in the same transaction. - MUST NOT account for deposit limits like those returned from maxDeposit and should always act as though the   deposit would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewDeposit SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewMint(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that would be deposited in a mint call   in the same transaction. I.e. mint should return the same or fewer assets as previewMint if called in the   same transaction. - MUST NOT account for mint limits like those returned from maxMint and should always act as though the mint   would be accepted, regardless if the user has enough tokens approved, etc. - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewMint SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting.\"},\"previewRedeem(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their redeemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that would be withdrawn in a redeem call   in the same transaction. I.e. redeem should return the same or more assets as previewRedeem if called in the   same transaction. - MUST NOT account for redemption limits like those returned from maxRedeem and should always act as though the   redemption would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToAssets and previewRedeem SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by redeeming.\"},\"previewWithdraw(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that would be burned in a withdraw   call in the same transaction. I.e. withdraw should return the same or fewer shares as previewWithdraw if   called   in the same transaction. - MUST NOT account for withdrawal limits like those returned from maxWithdraw and should always act as though   the withdrawal would be accepted, regardless if the user has enough shares, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees. - MUST NOT revert. NOTE: any unfavorable discrepancy between convertToShares and previewWithdraw SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"redeem(uint256,address,address)\":{\"details\":\"Burns exactly shares from owner and sends assets of underlying tokens to receiver. - MUST emit the Withdraw event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   redeem execution, and are accounted for during redeem. - MUST revert if all of shares cannot be redeemed (due to withdrawal limit being reached, slippage, the owner   not having enough shares, etc). NOTE: some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalAssets()\":{\"details\":\"Returns the total amount of the underlying asset that is \\u201cmanaged\\u201d by Vault. - SHOULD include any compounding that occurs from yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert.\"},\"totalSupply()\":{\"details\":\"Returns the value of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"withdraw(uint256,address,address)\":{\"details\":\"Burns shares from owner and sends exactly assets of underlying tokens to receiver. - MUST emit the Withdraw event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   withdraw execution, and are accounted for during withdraw. - MUST revert if all of assets cannot be withdrawn (due to withdrawal limit being reached, slippage, the owner   not having enough shares, etc). Note that some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]}},\"version\":1}",
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
              "name": "receiver",
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
              "name": "totalManagedAssets",
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
          "deposit(uint256,address)": {
            "details": "Mints shares Vault shares to receiver by depositing exactly amount of underlying tokens. - MUST emit the Deposit event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   deposit execution, and are accounted for during deposit. - MUST revert if all of assets cannot be deposited (due to deposit limit being reached, slippage, the user not   approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token."
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
          "redeem(uint256,address,address)": {
            "details": "Burns exactly shares from owner and sends assets of underlying tokens to receiver. - MUST emit the Withdraw event. - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the   redeem execution, and are accounted for during redeem. - MUST revert if all of shares cannot be redeemed (due to withdrawal limit being reached, slippage, the owner   not having enough shares, etc). NOTE: some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately."
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
        "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol": "IERC4626"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol",
    "id": 49200,
    "exportedSymbols": {
      "IERC20": [
        50790
      ],
      "IERC20Metadata": [
        50970
      ],
      "IERC4626": [
        49199
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:12076:35",
    "nodes": [
      {
        "id": 49031,
        "nodeType": "PragmaDirective",
        "src": "107:24:35",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49033,
        "nodeType": "ImportDirective",
        "src": "133:49:35",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "../token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49200,
        "sourceUnit": 50791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49032,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "141:6:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49035,
        "nodeType": "ImportDirective",
        "src": "183:76:35",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol",
        "file": "../token/ERC20/extensions/IERC20Metadata.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49200,
        "sourceUnit": 50971,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49034,
              "name": "IERC20Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50970,
              "src": "191:14:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49199,
        "nodeType": "ContractDefinition",
        "src": "398:11784:35",
        "nodes": [
          {
            "id": 49050,
            "nodeType": "EventDefinition",
            "src": "449:93:35",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "455:7:35",
            "parameters": {
              "id": 49049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49042,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "479:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49050,
                  "src": "463:22:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49041,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:35",
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
                  "id": 49044,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "503:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49050,
                  "src": "487:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49043,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:35",
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
                  "id": 49046,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "518:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49050,
                  "src": "510:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49048,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "534:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49050,
                  "src": "526:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "462:79:35"
            }
          },
          {
            "id": 49062,
            "nodeType": "EventDefinition",
            "src": "548:166:35",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
            "name": "Withdraw",
            "nameLocation": "554:8:35",
            "parameters": {
              "id": 49061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49052,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "588:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49062,
                  "src": "572:22:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49051,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "572:7:35",
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
                  "id": 49054,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "620:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49062,
                  "src": "604:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49053,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:7:35",
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
                  "id": 49056,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "654:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49062,
                  "src": "638:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:35",
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
                  "id": 49058,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "677:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49062,
                  "src": "669:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "669:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49060,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "701:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49062,
                  "src": "693:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "562:151:35"
            }
          },
          {
            "id": 49068,
            "nodeType": "FunctionDefinition",
            "src": "932:67:35",
            "nodes": [],
            "documentation": {
              "id": 49063,
              "nodeType": "StructuredDocumentation",
              "src": "720:207:35",
              "text": " @dev Returns the address of the underlying token used for the Vault for accounting, depositing, and withdrawing.\n - MUST be an ERC-20 token contract.\n - MUST NOT revert."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "941:5:35",
            "parameters": {
              "id": 49064,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "946:2:35"
            },
            "returnParameters": {
              "id": 49067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49066,
                  "mutability": "mutable",
                  "name": "assetTokenAddress",
                  "nameLocation": "980:17:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49068,
                  "src": "972:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49065,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "972:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "971:27:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49074,
            "nodeType": "FunctionDefinition",
            "src": "1296:74:35",
            "nodes": [],
            "documentation": {
              "id": 49069,
              "nodeType": "StructuredDocumentation",
              "src": "1005:286:35",
              "text": " @dev Returns the total amount of the underlying asset that is “managed” by Vault.\n - SHOULD include any compounding that occurs from yield.\n - MUST be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT revert."
            },
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1305:11:35",
            "parameters": {
              "id": 49070,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1316:2:35"
            },
            "returnParameters": {
              "id": 49073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49072,
                  "mutability": "mutable",
                  "name": "totalManagedAssets",
                  "nameLocation": "1350:18:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49074,
                  "src": "1342:26:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1342:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1341:28:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49082,
            "nodeType": "FunctionDefinition",
            "src": "2101:80:35",
            "nodes": [],
            "documentation": {
              "id": 49075,
              "nodeType": "StructuredDocumentation",
              "src": "1376:720:35",
              "text": " @dev Returns the amount of shares that the Vault would exchange for the amount of assets provided, in an ideal\n scenario where all the conditions are met.\n - MUST NOT be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT show any variations depending on the caller.\n - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange.\n - MUST NOT revert.\n NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the\n “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and\n from."
            },
            "functionSelector": "c6e6f592",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "2110:15:35",
            "parameters": {
              "id": 49078,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49077,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2134:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49082,
                  "src": "2126:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49076,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2126:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2125:16:35"
            },
            "returnParameters": {
              "id": 49081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49080,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2173:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49082,
                  "src": "2165:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2164:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49090,
            "nodeType": "FunctionDefinition",
            "src": "2912:80:35",
            "nodes": [],
            "documentation": {
              "id": 49083,
              "nodeType": "StructuredDocumentation",
              "src": "2187:720:35",
              "text": " @dev Returns the amount of assets that the Vault would exchange for the amount of shares provided, in an ideal\n scenario where all the conditions are met.\n - MUST NOT be inclusive of any fees that are charged against assets in the Vault.\n - MUST NOT show any variations depending on the caller.\n - MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange.\n - MUST NOT revert.\n NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the\n “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and\n from."
            },
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "2921:15:35",
            "parameters": {
              "id": 49086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49085,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2945:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49090,
                  "src": "2937:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49084,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2937:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2936:16:35"
            },
            "returnParameters": {
              "id": 49089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49088,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2984:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49090,
                  "src": "2976:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2976:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2975:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49098,
            "nodeType": "FunctionDefinition",
            "src": "3389:80:35",
            "nodes": [],
            "documentation": {
              "id": 49091,
              "nodeType": "StructuredDocumentation",
              "src": "2998:386:35",
              "text": " @dev Returns the maximum amount of the underlying asset that can be deposited into the Vault for the receiver,\n through a deposit call.\n - MUST return a limited value if receiver is subject to some deposit limit.\n - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of assets that may be deposited.\n - MUST NOT revert."
            },
            "functionSelector": "402d267d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3398:10:35",
            "parameters": {
              "id": 49094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49093,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "3417:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49098,
                  "src": "3409:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3409:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3408:18:35"
            },
            "returnParameters": {
              "id": 49097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49096,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3458:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49098,
                  "src": "3450:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49095,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3450:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3449:19:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49106,
            "nodeType": "FunctionDefinition",
            "src": "4492:79:35",
            "nodes": [],
            "documentation": {
              "id": 49099,
              "nodeType": "StructuredDocumentation",
              "src": "3475:1012:35",
              "text": " @dev Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given\n current on-chain conditions.\n - MUST return as close to and no more than the exact amount of Vault shares that would be minted in a deposit\n   call in the same transaction. I.e. deposit should return the same or more shares as previewDeposit if called\n   in the same transaction.\n - MUST NOT account for deposit limits like those returned from maxDeposit and should always act as though the\n   deposit would be accepted, regardless if the user has enough tokens approved, etc.\n - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees.\n - MUST NOT revert.\n NOTE: any unfavorable discrepancy between convertToShares and previewDeposit SHOULD be considered slippage in\n share price or some other type of condition, meaning the depositor will lose assets by depositing."
            },
            "functionSelector": "ef8b30f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "4501:14:35",
            "parameters": {
              "id": 49102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49101,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4524:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49106,
                  "src": "4516:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4516:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4515:16:35"
            },
            "returnParameters": {
              "id": 49105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49104,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4563:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49106,
                  "src": "4555:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4555:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4554:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49116,
            "nodeType": "FunctionDefinition",
            "src": "5233:85:35",
            "nodes": [],
            "documentation": {
              "id": 49107,
              "nodeType": "StructuredDocumentation",
              "src": "4577:651:35",
              "text": " @dev Mints shares Vault shares to receiver by depositing exactly amount of underlying tokens.\n - MUST emit the Deposit event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the\n   deposit execution, and are accounted for during deposit.\n - MUST revert if all of assets cannot be deposited (due to deposit limit being reached, slippage, the user not\n   approving enough underlying tokens to the Vault contract, etc).\n NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token."
            },
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "5242:7:35",
            "parameters": {
              "id": 49112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49109,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5258:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49116,
                  "src": "5250:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5250:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49111,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "5274:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49116,
                  "src": "5266:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49110,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5266:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5249:34:35"
            },
            "returnParameters": {
              "id": 49115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49114,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5310:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49116,
                  "src": "5302:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5302:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5301:16:35"
            },
            "scope": 49199,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49124,
            "nodeType": "FunctionDefinition",
            "src": "5670:77:35",
            "nodes": [],
            "documentation": {
              "id": 49117,
              "nodeType": "StructuredDocumentation",
              "src": "5324:341:35",
              "text": " @dev Returns the maximum amount of the Vault shares that can be minted for the receiver, through a mint call.\n - MUST return a limited value if receiver is subject to some mint limit.\n - MUST return 2 ** 256 - 1 if there is no limit on the maximum amount of shares that may be minted.\n - MUST NOT revert."
            },
            "functionSelector": "c63d75b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "5679:7:35",
            "parameters": {
              "id": 49120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49119,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "5695:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49124,
                  "src": "5687:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5687:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5686:18:35"
            },
            "returnParameters": {
              "id": 49123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49122,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "5736:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49124,
                  "src": "5728:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5728:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5727:19:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49132,
            "nodeType": "FunctionDefinition",
            "src": "6742:76:35",
            "nodes": [],
            "documentation": {
              "id": 49125,
              "nodeType": "StructuredDocumentation",
              "src": "5753:984:35",
              "text": " @dev Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given\n current on-chain conditions.\n - MUST return as close to and no fewer than the exact amount of assets that would be deposited in a mint call\n   in the same transaction. I.e. mint should return the same or fewer assets as previewMint if called in the\n   same transaction.\n - MUST NOT account for mint limits like those returned from maxMint and should always act as though the mint\n   would be accepted, regardless if the user has enough tokens approved, etc.\n - MUST be inclusive of deposit fees. Integrators should be aware of the existence of deposit fees.\n - MUST NOT revert.\n NOTE: any unfavorable discrepancy between convertToAssets and previewMint SHOULD be considered slippage in\n share price or some other type of condition, meaning the depositor will lose assets by minting."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "6751:11:35",
            "parameters": {
              "id": 49128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49127,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "6771:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49132,
                  "src": "6763:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6763:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6762:16:35"
            },
            "returnParameters": {
              "id": 49131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49130,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6810:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49132,
                  "src": "6802:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6802:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6801:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49142,
            "nodeType": "FunctionDefinition",
            "src": "7471:82:35",
            "nodes": [],
            "documentation": {
              "id": 49133,
              "nodeType": "StructuredDocumentation",
              "src": "6824:642:35",
              "text": " @dev Mints exactly shares Vault shares to receiver by depositing amount of underlying tokens.\n - MUST emit the Deposit event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the mint\n   execution, and are accounted for during mint.\n - MUST revert if all of shares cannot be minted (due to deposit limit being reached, slippage, the user not\n   approving enough underlying tokens to the Vault contract, etc).\n NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token."
            },
            "functionSelector": "94bf804d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "7480:4:35",
            "parameters": {
              "id": 49138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49135,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "7493:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49142,
                  "src": "7485:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7485:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49137,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "7509:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49142,
                  "src": "7501:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49136,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7484:34:35"
            },
            "returnParameters": {
              "id": 49141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49140,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "7545:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49142,
                  "src": "7537:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7537:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7536:16:35"
            },
            "scope": 49199,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49150,
            "nodeType": "FunctionDefinition",
            "src": "7857:78:35",
            "nodes": [],
            "documentation": {
              "id": 49143,
              "nodeType": "StructuredDocumentation",
              "src": "7559:293:35",
              "text": " @dev Returns the maximum amount of the underlying asset that can be withdrawn from the owner balance in the\n Vault, through a withdraw call.\n - MUST return a limited value if owner is subject to some withdrawal limit or timelock.\n - MUST NOT revert."
            },
            "functionSelector": "ce96cb77",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "7866:11:35",
            "parameters": {
              "id": 49146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49145,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "7886:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49150,
                  "src": "7878:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49144,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7878:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7877:15:35"
            },
            "returnParameters": {
              "id": 49149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49148,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "7924:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49150,
                  "src": "7916:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7916:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7915:19:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49158,
            "nodeType": "FunctionDefinition",
            "src": "8980:80:35",
            "nodes": [],
            "documentation": {
              "id": 49151,
              "nodeType": "StructuredDocumentation",
              "src": "7941:1034:35",
              "text": " @dev Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block,\n given current on-chain conditions.\n - MUST return as close to and no fewer than the exact amount of Vault shares that would be burned in a withdraw\n   call in the same transaction. I.e. withdraw should return the same or fewer shares as previewWithdraw if\n   called\n   in the same transaction.\n - MUST NOT account for withdrawal limits like those returned from maxWithdraw and should always act as though\n   the withdrawal would be accepted, regardless if the user has enough shares, etc.\n - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees.\n - MUST NOT revert.\n NOTE: any unfavorable discrepancy between convertToShares and previewWithdraw SHOULD be considered slippage in\n share price or some other type of condition, meaning the depositor will lose assets by depositing."
            },
            "functionSelector": "0a28a477",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "8989:15:35",
            "parameters": {
              "id": 49154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49153,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "9013:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49158,
                  "src": "9005:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9005:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9004:16:35"
            },
            "returnParameters": {
              "id": 49157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49156,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "9052:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49158,
                  "src": "9044:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9044:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9043:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49170,
            "nodeType": "FunctionDefinition",
            "src": "9741:101:35",
            "nodes": [],
            "documentation": {
              "id": 49159,
              "nodeType": "StructuredDocumentation",
              "src": "9066:670:35",
              "text": " @dev Burns shares from owner and sends exactly assets of underlying tokens to receiver.\n - MUST emit the Withdraw event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the\n   withdraw execution, and are accounted for during withdraw.\n - MUST revert if all of assets cannot be withdrawn (due to withdrawal limit being reached, slippage, the owner\n   not having enough shares, etc).\n Note that some implementations will require pre-requesting to the Vault before a withdrawal may be performed.\n Those methods should be performed separately."
            },
            "functionSelector": "b460af94",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "9750:8:35",
            "parameters": {
              "id": 49166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49161,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "9767:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49170,
                  "src": "9759:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49160,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49163,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "9783:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49170,
                  "src": "9775:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9775:7:35",
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
                  "id": 49165,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "9801:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49170,
                  "src": "9793:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49164,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9793:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9758:49:35"
            },
            "returnParameters": {
              "id": 49169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49168,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "9834:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49170,
                  "src": "9826:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49167,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9826:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9825:16:35"
            },
            "scope": 49199,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49178,
            "nodeType": "FunctionDefinition",
            "src": "10234:76:35",
            "nodes": [],
            "documentation": {
              "id": 49171,
              "nodeType": "StructuredDocumentation",
              "src": "9848:381:35",
              "text": " @dev Returns the maximum amount of Vault shares that can be redeemed from the owner balance in the Vault,\n through a redeem call.\n - MUST return a limited value if owner is subject to some withdrawal limit or timelock.\n - MUST return balanceOf(owner) if owner is not subject to any withdrawal limit or timelock.\n - MUST NOT revert."
            },
            "functionSelector": "d905777e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "10243:9:35",
            "parameters": {
              "id": 49174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49173,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "10261:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49178,
                  "src": "10253:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49172,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10253:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10252:15:35"
            },
            "returnParameters": {
              "id": 49177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49176,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "10299:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49178,
                  "src": "10291:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10291:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10290:19:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49186,
            "nodeType": "FunctionDefinition",
            "src": "11331:78:35",
            "nodes": [],
            "documentation": {
              "id": 49179,
              "nodeType": "StructuredDocumentation",
              "src": "10316:1010:35",
              "text": " @dev Allows an on-chain or off-chain user to simulate the effects of their redeemption at the current block,\n given current on-chain conditions.\n - MUST return as close to and no more than the exact amount of assets that would be withdrawn in a redeem call\n   in the same transaction. I.e. redeem should return the same or more assets as previewRedeem if called in the\n   same transaction.\n - MUST NOT account for redemption limits like those returned from maxRedeem and should always act as though the\n   redemption would be accepted, regardless if the user has enough shares, etc.\n - MUST be inclusive of withdrawal fees. Integrators should be aware of the existence of withdrawal fees.\n - MUST NOT revert.\n NOTE: any unfavorable discrepancy between convertToAssets and previewRedeem SHOULD be considered slippage in\n share price or some other type of condition, meaning the depositor will lose assets by redeeming."
            },
            "functionSelector": "4cdad506",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "11340:13:35",
            "parameters": {
              "id": 49182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49181,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "11362:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49186,
                  "src": "11354:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11354:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11353:16:35"
            },
            "returnParameters": {
              "id": 49185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49184,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "11401:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49186,
                  "src": "11393:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49183,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11393:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11392:16:35"
            },
            "scope": 49199,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49198,
            "nodeType": "FunctionDefinition",
            "src": "12081:99:35",
            "nodes": [],
            "documentation": {
              "id": 49187,
              "nodeType": "StructuredDocumentation",
              "src": "11415:661:35",
              "text": " @dev Burns exactly shares from owner and sends assets of underlying tokens to receiver.\n - MUST emit the Withdraw event.\n - MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the\n   redeem execution, and are accounted for during redeem.\n - MUST revert if all of shares cannot be redeemed (due to withdrawal limit being reached, slippage, the owner\n   not having enough shares, etc).\n NOTE: some implementations will require pre-requesting to the Vault before a withdrawal may be performed.\n Those methods should be performed separately."
            },
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "12090:6:35",
            "parameters": {
              "id": 49194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49189,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "12105:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49198,
                  "src": "12097:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12097:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49191,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "12121:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49198,
                  "src": "12113:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12113:7:35",
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
                  "id": 49193,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "12139:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49198,
                  "src": "12131:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12131:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12096:49:35"
            },
            "returnParameters": {
              "id": 49197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49196,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "12172:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 49198,
                  "src": "12164:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12164:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12163:16:35"
            },
            "scope": 49199,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49037,
              "name": "IERC20",
              "nameLocations": [
                "420:6:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50790,
              "src": "420:6:35"
            },
            "id": 49038,
            "nodeType": "InheritanceSpecifier",
            "src": "420:6:35"
          },
          {
            "baseName": {
              "id": 49039,
              "name": "IERC20Metadata",
              "nameLocations": [
                "428:14:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50970,
              "src": "428:14:35"
            },
            "id": 49040,
            "nodeType": "InheritanceSpecifier",
            "src": "428:14:35"
          }
        ],
        "canonicalName": "IERC4626",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 49036,
          "nodeType": "StructuredDocumentation",
          "src": "261:136:35",
          "text": " @dev Interface of the ERC4626 \"Tokenized Vault Standard\", as defined in\n https://eips.ethereum.org/EIPS/eip-4626[ERC-4626]."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49199,
          50970,
          50790
        ],
        "name": "IERC4626",
        "nameLocation": "408:8:35",
        "scope": 49200,
        "usedErrors": [],
        "usedEvents": [
          49050,
          49062,
          50724,
          50733
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 35
} as const;