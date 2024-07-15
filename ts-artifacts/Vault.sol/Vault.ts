export const Vault = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
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
      "name": "assetLimit",
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
      "name": "cancelOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "completeOwnershipHandover",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
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
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "depositToken",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IERC20"
        }
      ],
      "stateMutability": "view"
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
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "result",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownershipHandoverExpiresAt",
      "inputs": [
        {
          "name": "pendingOwner",
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
      "name": "paused",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
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
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "requestOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
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
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
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
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipHandoverCanceled",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipHandoverRequested",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "oldOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Paused",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": false,
          "internalType": "address"
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
      "name": "Unpaused",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": false,
          "internalType": "address"
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
      "name": "AlreadyInitialized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "DepositMoreThanMax",
      "inputs": []
    },
    {
      "type": "error",
      "name": "EnforcedPause",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ExpectedPause",
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
      "name": "InvalidInitialization",
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
      "name": "NewOwnerIsZeroAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoHandoverRequest",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
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
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TokenNotEnabled",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TotalSupplyOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Unauthorized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawMoreThanMax",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroAmount",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x6080806040523460b4577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c1660a557506001600160401b036002600160401b0319828216016061575b6040516120f490816100ba8239f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a13880806052565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806301e1d1141461187657806302329a291461172857806306fdde031461170c57806307a2d13a1461136a578063095ea7b31461169e5780630a28a4771461168057806318160ddd1461165a57806322da98e71461163c57806323b872dd14611557578063256929621461150b57806327ea6f2b146114ea578063313ce5671461148e5780633644e5151461140557806338d52e0f146105e25780633fe3347a146113ac578063402d267d146113885780634cdad5061461136a57806354d1f13d146113225780635c975abb146112e05780636e553f651461124757806370a08231146103c6578063715018a6146111e65780637ecebe00146111b35780638420ce99146109f25780638da5cb5b1461099f57806394bf804d1461094757806395d89b4114610846578063a9059cbb146107b8578063b3d7f6b91461079a578063b460af9414610717578063ba0876521461065a578063c63d75b614610616578063c6e6f59214610361578063c89039c5146105e2578063ce96cb77146105af578063d505accf146103f9578063d905777e146103c6578063dd62ed3e14610387578063ef8b30f714610361578063f04e283e146102b7578063f2fde38b146102225763fee81cf4146101ea57600080fd5b3461021d57602060031936011261021d576102036118f7565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b602060031936011261021d576102366118f7565b61023e611c91565b8060601b156102a95773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b602060031936011261021d576102cb6118f7565b6102d3611c91565b63389a75e1600c52806000526020600c20908154421161035357600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b3461021d57602060031936011261021d57602061037f600435611c65565b604051908152f35b3461021d57604060031936011261021d576103a06118f7565b6103a861191a565b602052637f5e9f20600c5260005260206034600c2054604051908152f35b3461021d57602060031936011261021d576103df6118f7565b6387a211a2600c52600052602080600c2054604051908152f35b3461021d5760e060031936011261021d576104126118f7565b61041a61191a565b604435606435906084359360ff8516850361021d57610437611ace565b918251602080940120918442116105a1576040519073ffffffffffffffffffffffffffffffffffffffff80911696169665383775081901600e528660005260c085600c20928354977f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82528782019687528860408301977fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc689528c6060850199468b528d608087019330855260a08820602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9885252528789525260a082015220604e526042602c2060005260ff16845260a43560405260c43560605283806080600060015afa863d5103610593577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259501905585777f5e9f200000000000000000000000000000000000000000176040526034602c2055a3005b63ddafbaef6000526004601cfd5b631a15a3cc6000526004601cfd5b3461021d57602060031936011261021d576105c86118f7565b6387a211a2600c52600052602061037f81600c2054611bb3565b3461021d57600060031936011261021d57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b3461021d57602060031936011261021d5761062f6118f7565b5060206040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8152f35b3461021d57610668366119f3565b90610671611c91565b68929eee149b4bd2126890308254146107095730825561068f611db6565b83156106df576387a211a2600c52826000526020600c205484116106d157836106c6916106bd602096611bb3565b94859133611f75565b389055604051908152f35b634656425a6000526004601cfd5b60046040517f1f2a2005000000000000000000000000000000000000000000000000000000008152fd5b63ab143c066000526004601cfd5b3461021d57610725366119f3565b909161072f611c91565b610737611db6565b68929eee149b4bd2126890308254146107095730825580156106df576387a211a2600c528260005261076d6020600c2054611bb3565b811161078c57602093816107836106c693611be2565b94859233611f75565b63936941fc6000526004601cfd5b3461021d57602060031936011261021d57602061037f600435611c39565b3461021d57604060031936011261021d576107d16118f7565b6024356387a211a2600c523360005260209182600c20805480841161083857839003905560005281600c208181540190558152600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a360405160018152f35b63f4d678b86000526004601cfd5b3461021d57600060031936011261021d57604051600060045461086881611a7b565b808452906020906001908181169081156108ff57506001146108a5575b6108a1856108958187038261193d565b60405191829182611891565b0390f35b6004600090815293507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106108ec57505050508101602001610895826108a1610885565b80548686018401529382019381016108d0565b8695506108a1969350602092506108959491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b8201019293610885565b3461021d57604060031936011261021d5760043561096361191a565b61096b611c91565b610973611db6565b68929eee149b4bd2126830815414610709576106c660209330835561099781611c39565b809433611e0b565b3461021d57600060031936011261021d5760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461021d5760a060031936011261021d57610a0b6118f7565b6024359073ffffffffffffffffffffffffffffffffffffffff808316830361021d5760443567ffffffffffffffff811161021d57610a4d90369060040161197e565b9260643567ffffffffffffffff811161021d57610a6e90369060040161197e565b6005608435101561021d577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff8516801590816111a3575b6001149081611199575b159081611190575b506111665760017fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008616177ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005560ff8560401c1615611111575b608435156110e7578316807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275560007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3610b77611f1c565b610b7f611f1c565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690558282167fffffffffffffffffffffffff00000000000000000000000000000000000000006000541617600055845167ffffffffffffffff8111610f455780600396610c118854611a7b565b601f811161103b575b50602090601f8311600114610f7f57600092610f74575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b92881b1c19161785555b80519067ffffffffffffffff8211610f4557610c7f600454611a7b565b601f8111610ee0575b50602090601f8311600114610e0d579360009360ff9784600495601c956020998993610de2575b5050807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9160011b931b1c19161784555b63313ce5678552165afa6000516101008110601f3d1116909116908115610dd957025b6002547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000061ff0085608435169360081b169116171760025560401c1615610d4657005b7fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054167ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b50506012610d03565b015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8c610caf565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083169160046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b9260005b818110610ec8575084601c9460ff9a60209995600099958460049a60019710610e8f575b5050505050811b018455610ce0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9260f8920151931b161c191690558a80808084610e80565b92936020600181928786015181550195019301610e5c565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c81019160208510610f3b575b601f0160051c01905b818110610f2f5750610c88565b60008155600101610f22565b9091508190610f19565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b015190508780610c31565b60008981527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905b8181106110235750908460019594939210610fed575b505050811b018555610c62565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f8848b1b161c19169055878080610fe0565b92936020600181928786015181550195019301610fca565b90915087600052601f830160051c7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190602084106110bf575b90601f8493920160051c7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01905b8181106110b05750610c1a565b600081558493506001016110a3565b7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9150611075565b60046040517f3f9f188e000000000000000000000000000000000000000000000000000000008152fd5b680100000000000000017fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000008616177ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0055610b1c565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501587610ac2565b303b159150610aba565b604087901c60ff16159150610ab0565b3461021d57602060031936011261021d576111cc6118f7565b6338377508600c52600052602080600c2054604051908152f35b600060031936011261021d576111fa611c91565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b3461021d57604060031936011261021d5760043561126361191a565b9061126c611c91565b611274611db6565b68929eee149b4bd21268308154146107095730815581156106df57611297611c0e565b82116112b6576106c66020936112ac84611c65565b9384913390611e0b565b60046040517fb3c61a83000000000000000000000000000000000000000000000000000000008152fd5b3461021d57600060031936011261021d57602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b600060031936011261021d5763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b3461021d57602060031936011261021d57602061037f600435611bb3565b3461021d57602060031936011261021d576113a16118f7565b50602061037f611c0e565b3461021d57600060031936011261021d5760ff6002541660405160058210156113d6576020918152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b3461021d57600060031936011261021d57602060a0611422611ace565b828151910120604051907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8252838201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6604082015246606082015230608082015220604051908152f35b3461021d57600060031936011261021d5760ff60025460081c1660ff81116114bb57602090604051908152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b3461021d57602060031936011261021d57611503611c91565b600435600155005b600060031936011261021d5763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b3461021d57606060031936011261021d576115706118f7565b61157861191a565b90604435918160601b602093338552600c91637f5e9f2081178352603483209081549160018301611617575b506387a211a21783525084822080549390848311610838578273ffffffffffffffffffffffffffffffffffffffff9503905560005284822081815401905584525160601c91167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a360405160018152f35b82841161162e57836387a211a293039055876115a4565b6313be252b6000526004601cfd5b3461021d57600060031936011261021d576020600154604051908152f35b3461021d57600060031936011261021d5760206805345cdf77eb68f44c54604051908152f35b3461021d57602060031936011261021d57602061037f600435611be2565b3461021d57604060031936011261021d576116b76118f7565b60243590602052637f5e9f20600c5233600052806034600c2055600052602c5160601c337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560206000a3602060405160018152f35b3461021d57600060031936011261021d576108a1610895611ace565b3461021d57602060031936011261021d57600435801515810361021d5761174d611c91565b156117d05761175a611db6565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561184c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b3461021d57600060031936011261021d57602061037f611a35565b60208082528251818301819052939260005b8581106118e3575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b8181018301518482016040015282016118a3565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361021d57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361021d57565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610f4557604052565b81601f8201121561021d5780359067ffffffffffffffff8211610f4557604051926119d160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116018561193d565b8284526020838301011161021d57816000926020809301838601378301015290565b600319606091011261021d576004359073ffffffffffffffffffffffffffffffffffffffff90602435828116810361021d5791604435908116810361021d5790565b6020806024601073ffffffffffffffffffffffffffffffffffffffff60005416306014526f70a082310000000000000000000000006000525afa601f3d11166020510290565b90600182811c92168015611ac4575b6020831014611a9557565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691611a8a565b6040519060008260035491611ae283611a7b565b80835292602090600190818116908115611b705750600114611b0f575b5050611b0d9250038361193d565b565b91509260036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b936000925b828410611b585750611b0d9450505081016020013880611aff565b85548885018301529485019487945092810192611b3d565b905060209350611b0d9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880611aff565b611bbb611a35565b90600182018092116114bb57611bdf9160016805345cdf77eb68f44c540191611cc9565b90565b6805345cdf77eb68f44c5490600182018092116114bb57611bdf916001611c07611a35565b0191611d85565b600154611c19611a35565b8111611c255750600090565b611c2d611a35565b81039081116114bb5790565b611c41611a35565b90600182018092116114bb57611bdf9160016805345cdf77eb68f44c540191611d85565b6805345cdf77eb68f44c5490600182018092116114bb57611bdf916001611c8a611a35565b0191611cc9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303611cbb57565b6382b429006000526004601cfd5b90600091818102917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8183099183831084018084039314611d695782861115611d5c57908591099160018585038616809604600281600302811880830282030280830282030280830282030280830282030280830282030280920290030295808086850304960304019211900302170290565b63ae47f70285526004601cfd5b505050908215611d7857500490565b63ae47f70290526004601cfd5b929190611d93828286611cc9565b9309611d9b57565b90600101908115611da857565b63ae47f7026000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005416611de157565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b9092919273ffffffffffffffffffffffffffffffffffffffff93600093858554166020866064601c826040519588606052306040528a60601b602c526f23b872dd000000000000000000000000600c525af13d156001885114171615611f0f57856060526040526805345cdf77eb68f44c805490828201918210611f0257917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d795939160409593556387a211a2600c528287526020600c20818154019055602052600c5160601c867fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a385528516941692a3565b63e5cfe95787526004601cfd5b637939f42486526004601cfd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c1615611f4b57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b9093929173ffffffffffffffffffffffffffffffffffffffff93848216938486851603612084575b6387a211a2600c526000948386526020600c2080548085116120775790848893920390556805345cdf77eb68f44c8481540390558382527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a360208560446010828a8154168c601452866034526fa9059cbb00000000000000000000000082525af13d15600187511417161561206a576034859052845260205283169383169216907ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db90604090a4565b6390b8ec1885526004601cfd5b63f4d678b888526004601cfd5b83602052637f5e9f20600c52826000526034600c208054600181016120ab575b5050611f9d565b80841161162e57839003905538806120a456fea2646970667358221220cc0e2c68f6a226f68f62be516d220a6e976c66af1af039ee1d301b7de62c31d764736f6c63430008190033",
    "sourceMap": "575:3506:83:-:0;;;;;;;8837:64:24;575:3506:83;;;;;;;;;7896:76:24;;-1:-1:-1;;;;;;;;;;;;575:3506:83;;;7985:34:24;7981:146;;-1:-1:-1;575:3506:83;;;;;;;;;7981:146:24;-1:-1:-1;;;;;;575:3506:83;;;;;;;;;;;;;8087:29:24;;575:3506:83;;8087:29:24;7981:146;;;;;7896:76;-1:-1:-1;;;7938:23:24;;;;;575:3506:83;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c806301e1d1141461187657806302329a291461172857806306fdde031461170c57806307a2d13a1461136a578063095ea7b31461169e5780630a28a4771461168057806318160ddd1461165a57806322da98e71461163c57806323b872dd14611557578063256929621461150b57806327ea6f2b146114ea578063313ce5671461148e5780633644e5151461140557806338d52e0f146105e25780633fe3347a146113ac578063402d267d146113885780634cdad5061461136a57806354d1f13d146113225780635c975abb146112e05780636e553f651461124757806370a08231146103c6578063715018a6146111e65780637ecebe00146111b35780638420ce99146109f25780638da5cb5b1461099f57806394bf804d1461094757806395d89b4114610846578063a9059cbb146107b8578063b3d7f6b91461079a578063b460af9414610717578063ba0876521461065a578063c63d75b614610616578063c6e6f59214610361578063c89039c5146105e2578063ce96cb77146105af578063d505accf146103f9578063d905777e146103c6578063dd62ed3e14610387578063ef8b30f714610361578063f04e283e146102b7578063f2fde38b146102225763fee81cf4146101ea57600080fd5b3461021d57602060031936011261021d576102036118f7565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b602060031936011261021d576102366118f7565b61023e611c91565b8060601b156102a95773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b602060031936011261021d576102cb6118f7565b6102d3611c91565b63389a75e1600c52806000526020600c20908154421161035357600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b3461021d57602060031936011261021d57602061037f600435611c65565b604051908152f35b3461021d57604060031936011261021d576103a06118f7565b6103a861191a565b602052637f5e9f20600c5260005260206034600c2054604051908152f35b3461021d57602060031936011261021d576103df6118f7565b6387a211a2600c52600052602080600c2054604051908152f35b3461021d5760e060031936011261021d576104126118f7565b61041a61191a565b604435606435906084359360ff8516850361021d57610437611ace565b918251602080940120918442116105a1576040519073ffffffffffffffffffffffffffffffffffffffff80911696169665383775081901600e528660005260c085600c20928354977f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82528782019687528860408301977fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc689528c6060850199468b528d608087019330855260a08820602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9885252528789525260a082015220604e526042602c2060005260ff16845260a43560405260c43560605283806080600060015afa863d5103610593577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259501905585777f5e9f200000000000000000000000000000000000000000176040526034602c2055a3005b63ddafbaef6000526004601cfd5b631a15a3cc6000526004601cfd5b3461021d57602060031936011261021d576105c86118f7565b6387a211a2600c52600052602061037f81600c2054611bb3565b3461021d57600060031936011261021d57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b3461021d57602060031936011261021d5761062f6118f7565b5060206040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8152f35b3461021d57610668366119f3565b90610671611c91565b68929eee149b4bd2126890308254146107095730825561068f611db6565b83156106df576387a211a2600c52826000526020600c205484116106d157836106c6916106bd602096611bb3565b94859133611f75565b389055604051908152f35b634656425a6000526004601cfd5b60046040517f1f2a2005000000000000000000000000000000000000000000000000000000008152fd5b63ab143c066000526004601cfd5b3461021d57610725366119f3565b909161072f611c91565b610737611db6565b68929eee149b4bd2126890308254146107095730825580156106df576387a211a2600c528260005261076d6020600c2054611bb3565b811161078c57602093816107836106c693611be2565b94859233611f75565b63936941fc6000526004601cfd5b3461021d57602060031936011261021d57602061037f600435611c39565b3461021d57604060031936011261021d576107d16118f7565b6024356387a211a2600c523360005260209182600c20805480841161083857839003905560005281600c208181540190558152600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a360405160018152f35b63f4d678b86000526004601cfd5b3461021d57600060031936011261021d57604051600060045461086881611a7b565b808452906020906001908181169081156108ff57506001146108a5575b6108a1856108958187038261193d565b60405191829182611891565b0390f35b6004600090815293507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106108ec57505050508101602001610895826108a1610885565b80548686018401529382019381016108d0565b8695506108a1969350602092506108959491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b8201019293610885565b3461021d57604060031936011261021d5760043561096361191a565b61096b611c91565b610973611db6565b68929eee149b4bd2126830815414610709576106c660209330835561099781611c39565b809433611e0b565b3461021d57600060031936011261021d5760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461021d5760a060031936011261021d57610a0b6118f7565b6024359073ffffffffffffffffffffffffffffffffffffffff808316830361021d5760443567ffffffffffffffff811161021d57610a4d90369060040161197e565b9260643567ffffffffffffffff811161021d57610a6e90369060040161197e565b6005608435101561021d577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff8516801590816111a3575b6001149081611199575b159081611190575b506111665760017fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008616177ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005560ff8560401c1615611111575b608435156110e7578316807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275560007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3610b77611f1c565b610b7f611f1c565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690558282167fffffffffffffffffffffffff00000000000000000000000000000000000000006000541617600055845167ffffffffffffffff8111610f455780600396610c118854611a7b565b601f811161103b575b50602090601f8311600114610f7f57600092610f74575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b92881b1c19161785555b80519067ffffffffffffffff8211610f4557610c7f600454611a7b565b601f8111610ee0575b50602090601f8311600114610e0d579360009360ff9784600495601c956020998993610de2575b5050807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9160011b931b1c19161784555b63313ce5678552165afa6000516101008110601f3d1116909116908115610dd957025b6002547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000061ff0085608435169360081b169116171760025560401c1615610d4657005b7fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054167ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b50506012610d03565b015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8c610caf565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083169160046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b9260005b818110610ec8575084601c9460ff9a60209995600099958460049a60019710610e8f575b5050505050811b018455610ce0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9260f8920151931b161c191690558a80808084610e80565b92936020600181928786015181550195019301610e5c565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c81019160208510610f3b575b601f0160051c01905b818110610f2f5750610c88565b60008155600101610f22565b9091508190610f19565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b015190508780610c31565b60008981527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905b8181106110235750908460019594939210610fed575b505050811b018555610c62565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f8848b1b161c19169055878080610fe0565b92936020600181928786015181550195019301610fca565b90915087600052601f830160051c7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190602084106110bf575b90601f8493920160051c7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01905b8181106110b05750610c1a565b600081558493506001016110a3565b7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9150611075565b60046040517f3f9f188e000000000000000000000000000000000000000000000000000000008152fd5b680100000000000000017fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000008616177ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0055610b1c565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501587610ac2565b303b159150610aba565b604087901c60ff16159150610ab0565b3461021d57602060031936011261021d576111cc6118f7565b6338377508600c52600052602080600c2054604051908152f35b600060031936011261021d576111fa611c91565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b3461021d57604060031936011261021d5760043561126361191a565b9061126c611c91565b611274611db6565b68929eee149b4bd21268308154146107095730815581156106df57611297611c0e565b82116112b6576106c66020936112ac84611c65565b9384913390611e0b565b60046040517fb3c61a83000000000000000000000000000000000000000000000000000000008152fd5b3461021d57600060031936011261021d57602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b600060031936011261021d5763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b3461021d57602060031936011261021d57602061037f600435611bb3565b3461021d57602060031936011261021d576113a16118f7565b50602061037f611c0e565b3461021d57600060031936011261021d5760ff6002541660405160058210156113d6576020918152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b3461021d57600060031936011261021d57602060a0611422611ace565b828151910120604051907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8252838201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6604082015246606082015230608082015220604051908152f35b3461021d57600060031936011261021d5760ff60025460081c1660ff81116114bb57602090604051908152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b3461021d57602060031936011261021d57611503611c91565b600435600155005b600060031936011261021d5763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b3461021d57606060031936011261021d576115706118f7565b61157861191a565b90604435918160601b602093338552600c91637f5e9f2081178352603483209081549160018301611617575b506387a211a21783525084822080549390848311610838578273ffffffffffffffffffffffffffffffffffffffff9503905560005284822081815401905584525160601c91167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a360405160018152f35b82841161162e57836387a211a293039055876115a4565b6313be252b6000526004601cfd5b3461021d57600060031936011261021d576020600154604051908152f35b3461021d57600060031936011261021d5760206805345cdf77eb68f44c54604051908152f35b3461021d57602060031936011261021d57602061037f600435611be2565b3461021d57604060031936011261021d576116b76118f7565b60243590602052637f5e9f20600c5233600052806034600c2055600052602c5160601c337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560206000a3602060405160018152f35b3461021d57600060031936011261021d576108a1610895611ace565b3461021d57602060031936011261021d57600435801515810361021d5761174d611c91565b156117d05761175a611db6565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561184c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b3461021d57600060031936011261021d57602061037f611a35565b60208082528251818301819052939260005b8581106118e3575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b8181018301518482016040015282016118a3565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361021d57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361021d57565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610f4557604052565b81601f8201121561021d5780359067ffffffffffffffff8211610f4557604051926119d160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116018561193d565b8284526020838301011161021d57816000926020809301838601378301015290565b600319606091011261021d576004359073ffffffffffffffffffffffffffffffffffffffff90602435828116810361021d5791604435908116810361021d5790565b6020806024601073ffffffffffffffffffffffffffffffffffffffff60005416306014526f70a082310000000000000000000000006000525afa601f3d11166020510290565b90600182811c92168015611ac4575b6020831014611a9557565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691611a8a565b6040519060008260035491611ae283611a7b565b80835292602090600190818116908115611b705750600114611b0f575b5050611b0d9250038361193d565b565b91509260036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b936000925b828410611b585750611b0d9450505081016020013880611aff565b85548885018301529485019487945092810192611b3d565b905060209350611b0d9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880611aff565b611bbb611a35565b90600182018092116114bb57611bdf9160016805345cdf77eb68f44c540191611cc9565b90565b6805345cdf77eb68f44c5490600182018092116114bb57611bdf916001611c07611a35565b0191611d85565b600154611c19611a35565b8111611c255750600090565b611c2d611a35565b81039081116114bb5790565b611c41611a35565b90600182018092116114bb57611bdf9160016805345cdf77eb68f44c540191611d85565b6805345cdf77eb68f44c5490600182018092116114bb57611bdf916001611c8a611a35565b0191611cc9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303611cbb57565b6382b429006000526004601cfd5b90600091818102917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8183099183831084018084039314611d695782861115611d5c57908591099160018585038616809604600281600302811880830282030280830282030280830282030280830282030280830282030280920290030295808086850304960304019211900302170290565b63ae47f70285526004601cfd5b505050908215611d7857500490565b63ae47f70290526004601cfd5b929190611d93828286611cc9565b9309611d9b57565b90600101908115611da857565b63ae47f7026000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005416611de157565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b9092919273ffffffffffffffffffffffffffffffffffffffff93600093858554166020866064601c826040519588606052306040528a60601b602c526f23b872dd000000000000000000000000600c525af13d156001885114171615611f0f57856060526040526805345cdf77eb68f44c805490828201918210611f0257917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d795939160409593556387a211a2600c528287526020600c20818154019055602052600c5160601c867fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a385528516941692a3565b63e5cfe95787526004601cfd5b637939f42486526004601cfd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c1615611f4b57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b9093929173ffffffffffffffffffffffffffffffffffffffff93848216938486851603612084575b6387a211a2600c526000948386526020600c2080548085116120775790848893920390556805345cdf77eb68f44c8481540390558382527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a360208560446010828a8154168c601452866034526fa9059cbb00000000000000000000000082525af13d15600187511417161561206a576034859052845260205283169383169216907ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db90604090a4565b6390b8ec1885526004601cfd5b63f4d678b888526004601cfd5b83602052637f5e9f20600c52826000526034600c208054600181016120ab575b5050611f9d565b80841161162e57839003905538806120a456fea2646970667358221220cc0e2c68f6a226f68f62be516d220a6e976c66af1af039ee1d301b7de62c31d764736f6c63430008190033",
    "sourceMap": "575:3506:83:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6680:148:71;575:3506:83;6680:148:71;;;;575:3506:83;6680:148:71;;;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;11885:237:69;;;575:3506:83;11885:237:69;575:3506:83;11885:237:69;;;;575:3506:83;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;8479:183;;;;;;6813:405;;;;;;;575:3506:83;6813:405:69;;;575:3506:83;8479:183:69;;575:3506:83;8479:183:69;575:3506:83;8479:183:69;;575:3506:83;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;575:3506:83;10506:526:69;575:3506:83;10506:526:69;;;;;;;;;575:3506:83;6813:405:69;10506:526;;6813:405;;;;;;575:3506:83;6813:405:69;;;575:3506:83;10506:526:69;;575:3506:83;10506:526:69;575:3506:83;10506:526:69;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;10632:23:72;575:3506:83;;10632:23:72;:::i;:::-;575:3506:83;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;:::i;:::-;;7114:184:71;;;;575:3506:83;7114:184:71;575:3506:83;7114:184:71;;;;575:3506:83;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;6680:148:71;;;575:3506:83;6680:148:71;575:3506:83;6680:148:71;;;;575:3506:83;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;13704:24:71;13781:2752;;;;;;575:3506:83;13781:2752:71;;;;;;;;;;;;;575:3506:83;13781:2752:71;575:3506:83;13781:2752:71;;;;;;;;;;;;;;;;;575:3506:83;13781:2752:71;;;;;;;575:3506:83;13781:2752:71;;;;;;;575:3506:83;13781:2752:71;;;;;;575:3506:83;13781:2752:71;;;;;;;;;;;;;575:3506:83;13781:2752:71;;;;;;;;;575:3506:83;13781:2752:71;575:3506:83;13781:2752:71;;;575:3506:83;;;13781:2752:71;575:3506:83;;;13781:2752:71;;;575:3506:83;;;13781:2752:71;;;;;;;;;;;;;;;;575:3506:83;13781:2752:71;;;;;;575:3506:83;13781:2752:71;;575:3506:83;13781:2752:71;575:3506:83;13781:2752:71;;;;575:3506:83;13781:2752:71;575:3506:83;13781:2752:71;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;6680:148:71;;;575:3506:83;6680:148:71;575:3506:83;17365:33:72;6680:148:71;;;;17365:33:72;:::i;575:3506:83:-;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;;;16940:17:72;575:3506:83;;;;;;;;;;:::i;:::-;12478:70:69;;;:::i;:::-;1575:245:75;;;;;;;;;;;2281:72:26;;:::i;:::-;3075:11:83;;3071:36;;6680:148:71;;;;575:3506:83;6680:148:71;;;;;21677:25:72;;21673:50;;14947:23;21840:6;14947:23;;6680:148:71;14947:23:72;;:::i;:::-;21809:10;;;;21840:6;:::i;:::-;1883:75:75;;;575:3506:83;;;;;;21673:50:72;21712:10;575:3506:83;22010:79:72;575:3506:83;22010:79:72;;3071:36:83;575:3506;;;3095:12;;;;1575:245:75;;575:3506:83;1575:245:75;575:3506:83;1575:245:75;;575:3506:83;;;;;;;:::i;:::-;12478:70:69;;;;:::i;:::-;2281:72:26;;:::i;:::-;1575:245:75;;;;;;;;;;;2777:11:83;;2773:36;;6680:148:71;;;;575:3506:83;6680:148:71;17365:33:72;6680:148:71;;;;17365:33:72;:::i;:::-;20708:27;;20704:52;;6680:148:71;20803:23:72;;;20877:6;20803:23;;:::i;:::-;20846:10;;;;20877:6;:::i;20704:52::-;20745:10;575:3506:83;22010:79:72;575:3506:83;22010:79:72;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;8378:1143:71;;;;575:3506:83;8378:1143:71;575:3506:83;8378:1143:71;;;;;;;;;;;;;;;;575:3506:83;8378:1143:71;;;;;;;;;;;;;;;;;;;;;575:3506:83;;;;;;8378:1143:71;;575:3506:83;8378:1143:71;575:3506:83;8378:1143:71;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;575:3506:83;;;;;;;-1:-1:-1;;;;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;2281:72:26;;:::i;:::-;1575:245:75;;;;;;;19895:6:72;575:3506:83;1575:245:75;;;;19833:19:72;;;:::i;:::-;19871:10;;;19895:6;:::i;575:3506:83:-;;;;;-1:-1:-1;;575:3506:83;;;;;;11523:61:69;;575:3506:83;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;8837:64:24;575:3506:83;;;;;4726:16:24;;:34;;;;575:3506:83;4805:1:24;4790:16;:50;;;;575:3506:83;4855:13:24;:30;;;;575:3506:83;4851:91:24;;;4805:1;575:3506:83;;;;8837:64:24;575:3506:83;;;;;;4301:16:24;4979:67;;575:3506:83;;;1215:35;1211:65;;5710:347:69;;;;;575:3506:83;5710:347:69;;;;6893:76:24;;:::i;:::-;;;:::i;:::-;1237:66:26;1061:2:72;575:3506:83;;1061:2:72;575:3506:83;;;;;;;;;;;;;;;;;;;1386:15;;575:3506;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;5641:564:72;575:3506:83;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;5641:564:72;;;575:3506:83;5641:564:72;;575:3506:83;5641:564:72;;;;575:3506:83;5641:564:72;;;;;;;1537:47:83;;;;5641:564:72;1537:47:83;1525:59;1061:2:72;;;575:3506:83;;;1061:2:72;;;;;;;;;1525:59:83;1061:2:72;575:3506:83;;;4301:16:24;5066:101;;575:3506:83;5066:101:24;575:3506:83;8837:64:24;575:3506:83;;8837:64:24;575:3506:83;5142:14:24;575:3506:83;;;4805:1:24;575:3506:83;;5142:14:24;575:3506:83;1537:47;;;1061:2:72;1537:47:83;;575:3506;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;5641:564:72;575:3506:83;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:24;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4805:1:24;575:3506:83;;;;;;-1:-1:-1;575:3506:83;;1211:65;575:3506;;;1259:17;;;;4979:67:24;575:3506:83;;;;;8837:64:24;575:3506:83;4979:67:24;;4851:91;575:3506:83;;;4908:23:24;;;;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:24;;4726:34;575:3506:83;;;;;;4301:16:24;;-1:-1:-1;4726:34:24;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;12929:205:71;;;575:3506:83;12929:205:71;575:3506:83;12929:205:71;;;;575:3506:83;;;;;;;;-1:-1:-1;;575:3506:83;;;;;12478:70:69;;:::i;:::-;575:3506:83;6813:405:69;;;;;;;;;575:3506:83;;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;:::i;:::-;12478:70:69;;;:::i;:::-;2281:72:26;;:::i;:::-;1575:245:75;;;;;;;;;;2047:11:83;;2043:36;;2093:30;;:::i;:::-;;;2089:63;;2327:6;575:3506;10632:23:72;;;;:::i;:::-;2291:10:83;;;;2327:6;;:::i;2089:63::-;575:3506;;;2132:20;;;;575:3506;;;;;-1:-1:-1;;575:3506:83;;;;;;;1237:66:26;575:3506:83;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;9831:339:69;;;;575:3506:83;9831:339:69;575:3506:83;9831:339:69;;;;;;575:3506:83;9831:339:69;;575:3506:83;;;;;;-1:-1:-1;;575:3506:83;;;;;;14947:23:72;575:3506:83;;14947:23:72;:::i;575:3506:83:-;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;3433:223;;:::i;575:3506::-;;;;;-1:-1:-1;;575:3506:83;;;;;;732:33;575:3506;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;16961:346:71;575:3506:83;;:::i;:::-;;;;;;16884:24:71;575:3506:83;16961:346:71;;;;;;;;;;575:3506:83;16961:346:71;;;;;;;;;;;;;;575:3506:83;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;1716:9;575:3506;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;4012:67;;:::i;:::-;575:3506;;;;;;;-1:-1:-1;;575:3506:83;;;;;9239:383:69;;;;575:3506:83;9239:383:69;7972:9;9132:15;575:3506:83;9239:383:69;;;;;;575:3506:83;9239:383:69;;575:3506:83;;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;:::i;:::-;;;;10164:1922:71;;575:3506:83;10164:1922:71;575:3506:83;10164:1922:71;;;;;;;;;;;;;;;;;;575:3506:83;10164:1922:71;;;;575:3506:83;-1:-1:-1;10164:1922:71;;;;-1:-1:-1;10164:1922:71;;;;;;;;;;;;;;;;;;575:3506:83;10164:1922:71;;;;;;;;;;;;;575:3506:83;10164:1922:71;;;;;;;575:3506:83;;;;;;10164:1922:71;;;;;;;;;;;;;;;;;575:3506:83;10164:1922:71;575:3506:83;10164:1922:71;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;701:25;575:3506;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;6408:68:71;;575:3506:83;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;575:3506:83;;;;;;;:::i;:::-;;;7568:413:71;575:3506:83;7568:413:71;;;;;575:3506:83;7568:413:71;;;;;;575:3506:83;7568:413:71;;;;;;;575:3506:83;;7568:413:71;575:3506:83;;;;;;;;;;;;-1:-1:-1;;575:3506:83;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;575:3506:83;;;;;;;;;;;;;;4012:67;;:::i;:::-;3335:46;;;2281:72:26;;:::i;:::-;1237:66;3496:4;1061:2:72;575:3506:83;;1061:2:72;;575:3506:83;;3515:20:26;575:3506:83;;;966:10:25;575:3506:83;;3515:20:26;575:3506:83;3335:46;1237:66:26;575:3506:83;;;;;3167:9:26;3163:62;;1061:2:72;;575:3506:83;;3823:22:26;575:3506:83;;;966:10:25;575:3506:83;;3823:22:26;575:3506:83;3163:62:26;575:3506:83;;;3199:15:26;;;;575:3506:83;;;;;-1:-1:-1;;575:3506:83;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6774:143:72:-;19403:590:76;575:3506:83;19403:590:76;;575:3506:83;3943:12;575:3506;;6904:4:72;19403:590:76;;;3943:12:83;19403:590:76;;;;;;;;;;6774:143:72;:::o;575:3506:83:-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;575:3506:83;3740:7;575:3506;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;3740:7;-1:-1:-1;575:3506:83;;;-1:-1:-1;575:3506:83;;;;;;;-1:-1:-1;575:3506:83;;-1:-1:-1;;;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;575:3506:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8943:608:72;9398:13;;:::i;:::-;575:3506:83;4334:4:72;575:3506:83;;;;;;;9361:76:72;6408:68:71;4334:4:72;6408:68:71;;575:3506:83;9361:76:72;;:::i;:::-;8943:608;:::o;13227:634::-;6408:68:71;;575:3506:83;4334:4:72;575:3506:83;;;;;;;13665:78:72;13728:13;4334:4;13728:13;;:::i;:::-;575:3506:83;13665:78:72;;:::i;3433:223:83:-;3589:10;575:3506;3603:13;;:::i;:::-;3589:27;;:60;;;-1:-1:-1;3433:223:83;:::o;3589:60::-;3636:13;;:::i;:::-;575:3506;;;;;;;3433:223;:::o;11613:610:72:-;12068:13;;:::i;:::-;575:3506:83;4334:4:72;575:3506:83;;;;;;;12029:78:72;6408:68:71;4334:4:72;6408:68:71;;575:3506:83;12029:78:72;;:::i;7616:628::-;6408:68:71;;575:3506:83;4334:4:72;575:3506:83;;;;;;;8052:76:72;8113:13;4334:4;8113:13;;:::i;:::-;575:3506:83;8052:76:72;;:::i;7292:355:69:-;7390:251;;;;;;7292:355::o;7390:251::-;;;;;;;20285:3569:74;;575:3506:83;20430:3418:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20285:3569::o;20430:3418::-;;;;;;;;;;;;;;;;;;;20285:3569::o;20430:3418::-;;;;;;;24141:462;;;;24254:19;;;;;:::i;:::-;24326:271;;;;24141:462::o;24326:271::-;;;;;;;;;24141:462::o;24326:271::-;;;;;;;2905:128:26;575:3506:83;1237:66:26;575:3506:83;;2966:61:26;;2905:128::o;2966:61::-;3001:15;575:3506:83;;3001:15:26;;;;22462:537:72;;;;;575:3506:83;3943:12;;575:3506;;;;;9254:988:76;;;;;;;;;;;22617:4:72;9254:988:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;17884:946:71;;;;;;;;;;;;;22711:243:72;17884:946:71;;;9254:988:76;17884:946:71;;;;9254:988:76;17884:946:71;;;;9254:988:76;;17884:946:71;;;;;;;9254:988:76;17884:946:71;9254:988:76;17884:946:71;9254:988:76;17884:946:71;;;9254:988:76;17884:946:71;;22711:243:72;;;;;;;;22462:537::o;17884:946:71:-;;;;;9254:988:76;17884:946:71;9254:988:76;;;;;;;7084:141:24;575:3506:83;8837:64:24;575:3506:83;;;;7150:18:24;7146:73;;7084:141::o;7146:73::-;7191:17;575:3506:83;;7191:17:24;;;;23093:637:72;;;;;575:3506:83;;;;;;;;;;23234:11:72;23230:51;;23093:637;19466:887:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:3506:83;13593:806:76;;575:3506:83;;;;;13593:806:76;;;;;;;;;;;;;;;;;;;;;;;;;;23464:260:72;;19466:887:71;23464:260:72;;;;;;;;;;;;;;23093:637::o;13593:806:76:-;;;;;;;19466:887:71;;;;;;;23230:51:72;22675:798:71;;;;;;;;;;;;;;;;;;;23230:51:72;;;;;22675:798:71;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "assetLimit()": "22da98e7",
    "assetType()": "3fe3347a",
    "balanceOf(address)": "70a08231",
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "depositToken()": "c89039c5",
    "initialize(address,address,string,string,uint8)": "8420ce99",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "pause(bool)": "02329a29",
    "paused()": "5c975abb",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "renounceOwnership()": "715018a6",
    "requestOwnershipHandover()": "25692962",
    "setLimit(uint256)": "27ea6f2b",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AllowanceOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AllowanceUnderflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DepositMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPermit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RedeemMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TokenNotEnabled\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TotalSupplyOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WithdrawMoreThanMax\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroAmount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"by\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"by\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"result\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"assetLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"assetType\",\"outputs\":[{\"internalType\":\"enum IVault.AssetType\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"depositor\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"depositToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"_depositToken\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"enum IVault.AssetType\",\"name\":\"_assetType\",\"type\":\"uint8\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newLimit\",\"type\":\"uint256\"}],\"name\":\"setLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AllowanceOverflow()\":[{\"details\":\"The allowance has overflowed.\"}],\"AllowanceUnderflow()\":[{\"details\":\"The allowance has underflowed.\"}],\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"DepositMoreThanMax()\":[{\"details\":\"Cannot deposit more than the max limit.\"}],\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"InsufficientAllowance()\":[{\"details\":\"Insufficient allowance.\"}],\"InsufficientBalance()\":[{\"details\":\"Insufficient balance.\"}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"InvalidPermit()\":[{\"details\":\"The permit is invalid.\"}],\"MintMoreThanMax()\":[{\"details\":\"Cannot mint more than the max limit.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"PermitExpired()\":[{\"details\":\"The permit has expired.\"}],\"RedeemMoreThanMax()\":[{\"details\":\"Cannot redeem more than the max limit.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"TotalSupplyOverflow()\":[{\"details\":\"The total supply has overflowed.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}],\"WithdrawMoreThanMax()\":[{\"details\":\"Cannot withdraw more than the max limit.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is approved by `owner` to be used by `spender`.\"},\"Deposit(address,address,uint256,uint256)\":{\"details\":\"Emitted during a mint call or deposit call.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"},\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is transferred from `from` to `to`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"},\"Withdraw(address,address,address,uint256,uint256)\":{\"details\":\"Emitted during a withdraw call or redeem call.\"}},\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the EIP-712 domain separator for the EIP-2612 permit.\"},\"allowance(address,address)\":{\"details\":\"Returns the amount of tokens that `spender` can spend on behalf of `owner`.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event.\"},\"asset()\":{\"details\":\"To be overridden to return the address of the underlying asset. - MUST be an ERC20 token contract. - MUST NOT revert.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `owner`.\"},\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"convertToAssets(uint256)\":{\"details\":\"Returns the amount of assets that the Vault will exchange for the amount of shares provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \\\"per-user\\\" price-per-share, and instead should reflect the \\\"average-user's\\\" price-per-share, i.e. what the average user should expect to see when exchanging to and from.\"},\"convertToShares(uint256)\":{\"details\":\"Returns the amount of shares that the Vault will exchange for the amount of assets provided, in an ideal scenario where all conditions are met. - MUST NOT be inclusive of any fees that are charged against assets in the Vault. - MUST NOT show any variations depending on the caller. - MUST NOT reflect slippage or other on-chain conditions, during the actual exchange. - MUST NOT revert. Note: This calculation MAY NOT reflect the \\\"per-user\\\" price-per-share, and instead should reflect the \\\"average-user's\\\" price-per-share, i.e. what the average user should expect to see when exchanging to and from.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token. - MUST NOT revert.\"},\"maxDeposit(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be deposited into the Vault for `to`, via a deposit call. - MUST return a limited value if `to` is subject to some deposit limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert.\"},\"maxMint(address)\":{\"details\":\"Returns the maximum amount of the Vault shares that can be minter for `to`, via a mint call. - MUST return a limited value if `to` is subject to some mint limit. - MUST return `2**256-1` if there is no maximum limit. - MUST NOT revert.\"},\"maxRedeem(address)\":{\"details\":\"Returns the maximum amount of Vault shares that can be redeemed from the `owner`'s balance in the Vault, via a redeem call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST return `balanceOf(owner)` otherwise. - MUST NOT revert.\"},\"maxWithdraw(address)\":{\"details\":\"Returns the maximum amount of the underlying asset that can be withdrawn from the `owner`'s balance in the Vault, via a withdraw call. - MUST return a limited value if `owner` is subject to some withdrawal limit or timelock. - MUST NOT revert.\"},\"mint(uint256,address)\":{\"details\":\"Mints exactly `shares` Vault shares to `to` by depositing `assets` of underlying tokens. - MUST emit the {Deposit} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the mint execution, and are accounted for during mint. - MUST revert if all of `shares` cannot be deposited, such as due to deposit limit,   slippage, insufficient approval, etc. Note: Most implementations will require pre-approval of the Vault with the Vault's underlying `asset` token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event.\"},\"previewDeposit(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of Vault shares that   will be minted in a deposit call in the same transaction, i.e. deposit should   return the same or more shares as `previewDeposit` if call in the same transaction. - MUST NOT account for deposit limits like those returned from `maxDeposit` and should   always act as if the deposit will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewDeposit` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewMint(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions. - MUST return as close to and no fewer than the exact amount of assets that   will be deposited in a mint call in the same transaction, i.e. mint should   return the same or fewer assets as `previewMint` if called in the same transaction. - MUST NOT account for mint limits like those returned from `maxMint` and should   always act as if the mint will be accepted, regardless of approvals, etc. - MUST be inclusive of deposit fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewMint` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by minting.\"},\"previewRedeem(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions. - MUST return as close to and no more than the exact amount of assets that   will be withdrawn in a redeem call in the same transaction, i.e. redeem should   return the same or more assets as `previewRedeem` if called in the same transaction. - MUST NOT account for redemption limits like those returned from `maxRedeem` and should   always act as if the redemption will be accepted, regardless of approvals, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST NOT revert. Note: Any unfavorable discrepancy between `convertToAssets` and `previewRedeem` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"previewWithdraw(uint256)\":{\"details\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given the current on-chain conditions. - MUST return as close to and no fewer than the exact amount of Vault shares that   will be burned in a withdraw call in the same transaction, i.e. withdraw should   return the same or fewer shares as `previewWithdraw` if call in the same transaction. - MUST NOT account for withdrawal limits like those returned from `maxWithdraw` and should   always act as if the withdrawal will be accepted, regardless of share balance, etc. - MUST be inclusive of withdrawal fees. Integrators should be aware of this. - MUST not revert. Note: Any unfavorable discrepancy between `convertToShares` and `previewWithdraw` SHOULD be considered slippage in share price or some other type of condition, meaning the depositor will lose assets by depositing.\"},\"redeem(uint256,address,address)\":{\"details\":\"Burns exactly `shares` from `owner` and sends `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the redeem execution, and are accounted for during redeem. - MUST revert if all of shares cannot be redeemed, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a redeem may be performed. Those methods should be performed separately.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalAssets()\":{\"details\":\"Returns the total amount of the underlying asset managed by the Vault. - SHOULD include any compounding that occurs from the yield. - MUST be inclusive of any fees that are charged against assets in the Vault. - MUST NOT revert.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"},\"withdraw(uint256,address,address)\":{\"details\":\"Burns `shares` from `owner` and sends exactly `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the withdraw execution, and are accounted for during withdraw. - MUST revert if all of `assets` cannot be withdrawn, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit(uint256,address)\":{\"notice\":\"ERC4626 `_deposit` implementation calls `maxDeposit` which checks the asset limit\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Vault.sol\":\"Vault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007\",\"dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/tokens/ERC20.sol\":{\"keccak256\":\"0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc\",\"dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6\"]},\"node_modules/solady/src/tokens/ERC4626.sol\":{\"keccak256\":\"0x1978774549a505b5789e7ba3b4f833af97173b55f5be721e5577010a133ebfbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cd85dc32a649169393731972d0134578811ea0990f508c3e45902a10ac519732\",\"dweb:/ipfs/QmWfQ8z53FJaAYCCiogHEaW7Zrauuhwr4nfjE1fmrqFVYu\"]},\"node_modules/solady/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4\",\"dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1\",\"dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr\"]},\"src/Vault.sol\":{\"keccak256\":\"0x906b3cba3c8f052d22193b749d4e3cfa46d7d88fba4bd2ba6ea8928098f3522c\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8644c9597d145b9f4ef7f2fb19559af9ef0df2ad16bbbb83e5d323bb65b970fb\",\"dweb:/ipfs/QmcNwPhPRNJQ6tgVKZ9UxU4XME3qRNHwcVktucVFzgsBsM\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
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
          "name": "AlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "DepositMoreThanMax"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "EnforcedPause"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpectedPause"
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
          "name": "InvalidInitialization"
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
          "name": "NewOwnerIsZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoHandoverRequest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
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
          "name": "Reentrancy"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TokenNotEnabled"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TotalSupplyOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "WithdrawMoreThanMax"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroAmount"
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
              "internalType": "uint64",
              "name": "version",
              "type": "uint64",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialized",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverCanceled",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverRequested",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "oldOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Paused",
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
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Unpaused",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "assetLimit",
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
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "cancelOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "completeOwnershipHandover"
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
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "depositToken",
          "outputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "result",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownershipHandoverExpiresAt",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "paused",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "requestOwnershipHandover"
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
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
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
          "cancelOwnershipHandover()": {
            "details": "Cancels the two-step ownership handover to the caller, if any."
          },
          "completeOwnershipHandover(address)": {
            "details": "Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`."
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
          "owner()": {
            "details": "Returns the owner of the contract."
          },
          "ownershipHandoverExpiresAt(address)": {
            "details": "Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
          },
          "paused()": {
            "details": "Returns true if the contract is paused, and false otherwise."
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
          "renounceOwnership()": {
            "details": "Allows the owner to renounce their ownership."
          },
          "requestOwnershipHandover()": {
            "details": "Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default."
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
          "transferOwnership(address)": {
            "details": "Allows the owner to transfer the ownership to `newOwner`."
          },
          "withdraw(uint256,address,address)": {
            "details": "Burns `shares` from `owner` and sends exactly `assets` of underlying tokens to `to`. - MUST emit the {Withdraw} event. - MAY support an additional flow in which the underlying tokens are owned by the Vault   contract before the withdraw execution, and are accounted for during withdraw. - MUST revert if all of `assets` cannot be withdrawn, such as due to withdrawal limit,   slippage, insufficient balance, etc. Note: Some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "deposit(uint256,address)": {
            "notice": "ERC4626 `_deposit` implementation calls `maxDeposit` which checks the asset limit"
          }
        },
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
        "src/Vault.sol": "Vault"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": {
        "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
        "urls": [
          "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
          "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol": {
        "keccak256": "0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97",
        "urls": [
          "bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007",
          "dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ"
        ],
        "license": "MIT"
      },
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
      "node_modules/solady/src/auth/Ownable.sol": {
        "keccak256": "0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3",
        "urls": [
          "bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3",
          "dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs"
        ],
        "license": "MIT"
      },
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
      "node_modules/solady/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8",
        "urls": [
          "bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98",
          "dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi"
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
      },
      "src/Vault.sol": {
        "keccak256": "0x906b3cba3c8f052d22193b749d4e3cfa46d7d88fba4bd2ba6ea8928098f3522c",
        "urls": [
          "bzz-raw://8644c9597d145b9f4ef7f2fb19559af9ef0df2ad16bbbb83e5d323bb65b970fb",
          "dweb:/ipfs/QmcNwPhPRNJQ6tgVKZ9UxU4XME3qRNHwcVktucVFzgsBsM"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Errors.sol": {
        "keccak256": "0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27",
        "urls": [
          "bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915",
          "dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2"
        ],
        "license": "SEE LICENSE IN LICENSE"
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
    "absolutePath": "src/Vault.sol",
    "id": 61159,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "ERC4626": [
        56919
      ],
      "ExpiredSign": [
        62997
      ],
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
      ],
      "Initializable": [
        46877
      ],
      "InvalidInput": [
        62949
      ],
      "InvalidSignature": [
        62999
      ],
      "InvalidVaultAdminFunction": [
        62979
      ],
      "InvalidWithdrawalDelay": [
        62951
      ],
      "MaxStakerVault": [
        62967
      ],
      "MinWithdrawDelayNotPassed": [
        62961
      ],
      "NoElementsInArray": [
        62989
      ],
      "NotDelegationSupervisor": [
        62971
      ],
      "NotEnoughShares": [
        62977
      ],
      "NotInitialized": [
        62981
      ],
      "NotPreviousNorCurrentDelegationSupervisor": [
        62973
      ],
      "NotStaker": [
        62957
      ],
      "NotSupervisor": [
        62985
      ],
      "NotVaultSupervisor": [
        62955
      ],
      "Ownable": [
        54123
      ],
      "PausableUpgradeable": [
        47099
      ],
      "PermitFailed": [
        62995
      ],
      "ReentrancyGuard": [
        58542
      ],
      "RoleNotGranted": [
        62983
      ],
      "TokenNotEnabled": [
        62987
      ],
      "UnsupportedAsset": [
        63003
      ],
      "Vault": [
        61158
      ],
      "VaultNotAChildVault": [
        62969
      ],
      "VaultNotFound": [
        62975
      ],
      "WithdrawAlreadyCompleted": [
        62959
      ],
      "WithdrawerNotCaller": [
        62963
      ],
      "ZeroAddress": [
        62953
      ],
      "ZeroAmount": [
        62993
      ],
      "ZeroShares": [
        62965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:4031:83",
    "nodes": [
      {
        "id": 60803,
        "nodeType": "PragmaDirective",
        "src": "51:24:83",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 60805,
        "nodeType": "ImportDirective",
        "src": "77:54:83",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/tokens/ERC4626.sol",
        "file": "solady/src/tokens/ERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 56920,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60804,
              "name": "ERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 56919,
              "src": "85:7:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60807,
        "nodeType": "ImportDirective",
        "src": "132:52:83",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
        "file": "solady/src/auth/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 54124,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60806,
              "name": "Ownable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 54123,
              "src": "140:7:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60809,
        "nodeType": "ImportDirective",
        "src": "185:69:83",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
        "file": "solady/src/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 58543,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60808,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58542,
              "src": "193:15:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60811,
        "nodeType": "ImportDirective",
        "src": "255:70:83",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 50791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60810,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "263:6:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60813,
        "nodeType": "ImportDirective",
        "src": "326:92:83",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/PausableUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 47100,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60812,
              "name": "PausableUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47099,
              "src": "334:19:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60815,
        "nodeType": "ImportDirective",
        "src": "419:86:83",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "@openzeppelin-upgradeable/proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60814,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "427:13:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60816,
        "nodeType": "ImportDirective",
        "src": "506:33:83",
        "nodes": [],
        "absolutePath": "src/interfaces/Errors.sol",
        "file": "./interfaces/Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 63004,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60817,
        "nodeType": "ImportDirective",
        "src": "540:33:83",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 61159,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61158,
        "nodeType": "ContractDefinition",
        "src": "575:3506:83",
        "nodes": [
          {
            "id": 60830,
            "nodeType": "VariableDeclaration",
            "src": "669:26:83",
            "nodes": [],
            "constant": false,
            "functionSelector": "c89039c5",
            "mutability": "mutable",
            "name": "depositToken",
            "nameLocation": "683:12:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$50790",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 60829,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 60828,
                "name": "IERC20",
                "nameLocations": [
                  "669:6:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 50790,
                "src": "669:6:83"
              },
              "referencedDeclaration": 50790,
              "src": "669:6:83",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$50790",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60832,
            "nodeType": "VariableDeclaration",
            "src": "701:25:83",
            "nodes": [],
            "constant": false,
            "functionSelector": "22da98e7",
            "mutability": "mutable",
            "name": "assetLimit",
            "nameLocation": "716:10:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 60831,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "701:7:83",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60835,
            "nodeType": "VariableDeclaration",
            "src": "732:33:83",
            "nodes": [],
            "constant": false,
            "functionSelector": "3fe3347a",
            "mutability": "mutable",
            "name": "assetType",
            "nameLocation": "756:9:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_enum$_AssetType_$63196",
              "typeString": "enum IVault.AssetType"
            },
            "typeName": {
              "id": 60834,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 60833,
                "name": "IVault.AssetType",
                "nameLocations": [
                  "732:6:83",
                  "739:9:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63196,
                "src": "732:16:83"
              },
              "referencedDeclaration": 63196,
              "src": "732:16:83",
              "typeDescriptions": {
                "typeIdentifier": "t_enum$_AssetType_$63196",
                "typeString": "enum IVault.AssetType"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60837,
            "nodeType": "VariableDeclaration",
            "src": "772:23:83",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_decimals",
            "nameLocation": "786:9:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 60836,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "772:5:83",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "visibility": "private"
          },
          {
            "id": 60839,
            "nodeType": "VariableDeclaration",
            "src": "801:22:83",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "nameStr",
            "nameLocation": "816:7:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 60838,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "801:6:83",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 60841,
            "nodeType": "VariableDeclaration",
            "src": "829:24:83",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "symbolStr",
            "nameLocation": "844:9:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 60840,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "829:6:83",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 60845,
            "nodeType": "VariableDeclaration",
            "src": "860:25:83",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "__gap",
            "nameLocation": "880:5:83",
            "scope": 61158,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$44_storage",
              "typeString": "uint256[44]"
            },
            "typeName": {
              "baseType": {
                "id": 60842,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "860:7:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 60844,
              "length": {
                "hexValue": "3434",
                "id": 60843,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "868:2:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_44_by_1",
                  "typeString": "int_const 44"
                },
                "value": "44"
              },
              "nodeType": "ArrayTypeName",
              "src": "860:11:83",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$44_storage_ptr",
                "typeString": "uint256[44]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 60852,
            "nodeType": "FunctionDefinition",
            "src": "944:53:83",
            "nodes": [],
            "body": {
              "id": 60851,
              "nodeType": "Block",
              "src": "958:39:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60848,
                      "name": "_disableInitializers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46845,
                      "src": "968:20:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 60849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "968:22:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60850,
                  "nodeType": "ExpressionStatement",
                  "src": "968:22:83"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 60846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "955:2:83"
            },
            "returnParameters": {
              "id": 60847,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "958:0:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60920,
            "nodeType": "FunctionDefinition",
            "src": "1003:620:83",
            "nodes": [],
            "body": {
              "id": 60919,
              "nodeType": "Block",
              "src": "1201:422:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    },
                    "id": 60873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60869,
                      "name": "_assetType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60864,
                      "src": "1215:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 60870,
                          "name": "IVault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63271,
                          "src": "1229:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                            "typeString": "type(contract IVault)"
                          }
                        },
                        "id": 60871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1236:9:83",
                        "memberName": "AssetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63196,
                        "src": "1229:16:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_AssetType_$63196_$",
                          "typeString": "type(enum IVault.AssetType)"
                        }
                      },
                      "id": 60872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1246:4:83",
                      "memberName": "NONE",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63191,
                      "src": "1229:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "src": "1215:35:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60877,
                  "nodeType": "IfStatement",
                  "src": "1211:65:83",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 60874,
                        "name": "TokenNotEnabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62987,
                        "src": "1259:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 60875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1259:17:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 60876,
                    "nodeType": "RevertStatement",
                    "src": "1252:24:83"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60879,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60854,
                        "src": "1304:6:83",
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
                      "id": 60878,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54002,
                      "src": "1287:16:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 60880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1287:24:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60881,
                  "nodeType": "ExpressionStatement",
                  "src": "1287:24:83"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60882,
                      "name": "__Pausable_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46975,
                      "src": "1321:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 60883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1321:17:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60884,
                  "nodeType": "ExpressionStatement",
                  "src": "1321:17:83"
                },
                {
                  "expression": {
                    "id": 60887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60885,
                      "name": "depositToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60830,
                      "src": "1348:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$50790",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60886,
                      "name": "_depositToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60857,
                      "src": "1363:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$50790",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "1348:28:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 60888,
                  "nodeType": "ExpressionStatement",
                  "src": "1348:28:83"
                },
                {
                  "expression": {
                    "id": 60891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60889,
                      "name": "nameStr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60839,
                      "src": "1386:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60890,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60859,
                      "src": "1396:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1386:15:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 60892,
                  "nodeType": "ExpressionStatement",
                  "src": "1386:15:83"
                },
                {
                  "expression": {
                    "id": 60895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60893,
                      "name": "symbolStr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60841,
                      "src": "1411:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60894,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60861,
                      "src": "1423:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1411:19:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 60896,
                  "nodeType": "ExpressionStatement",
                  "src": "1411:19:83"
                },
                {
                  "assignments": [
                    60898,
                    60900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60898,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1446:7:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 60919,
                      "src": "1441:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 60897,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1441:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 60900,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1461:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 60919,
                      "src": "1455:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 60899,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "1455:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60907,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 60904,
                            "name": "_depositToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60857,
                            "src": "1500:13:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$50790",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$50790",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 60903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1492:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 60902,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1492:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60905,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1492:22:83",
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
                        }
                      ],
                      "id": 60901,
                      "name": "_tryGetAssetDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56199,
                      "src": "1471:20:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$_t_uint8_$",
                        "typeString": "function (address) view returns (bool,uint8)"
                      }
                    },
                    "id": 60906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1471:44:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_uint8_$",
                      "typeString": "tuple(bool,uint8)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1440:75:83"
                },
                {
                  "expression": {
                    "id": 60913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60908,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60837,
                      "src": "1525:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "id": 60909,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60898,
                        "src": "1537:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 60911,
                        "name": "_DEFAULT_UNDERLYING_DECIMALS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56084,
                        "src": "1556:28:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "id": 60912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "1537:47:83",
                      "trueExpression": {
                        "id": 60910,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60900,
                        "src": "1547:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "1525:59:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 60914,
                  "nodeType": "ExpressionStatement",
                  "src": "1525:59:83"
                },
                {
                  "expression": {
                    "id": 60917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60915,
                      "name": "assetType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60835,
                      "src": "1594:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60916,
                      "name": "_assetType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60864,
                      "src": "1606:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "src": "1594:22:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "id": 60918,
                  "nodeType": "ExpressionStatement",
                  "src": "1594:22:83"
                }
              ]
            },
            "functionSelector": "8420ce99",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60867,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60866,
                  "name": "initializer",
                  "nameLocations": [
                    "1189:11:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46731,
                  "src": "1189:11:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "1189:11:83"
              }
            ],
            "name": "initialize",
            "nameLocation": "1012:10:83",
            "parameters": {
              "id": 60865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60854,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1040:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60920,
                  "src": "1032:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:7:83",
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
                  "id": 60857,
                  "mutability": "mutable",
                  "name": "_depositToken",
                  "nameLocation": "1063:13:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60920,
                  "src": "1056:20:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$50790",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60856,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60855,
                      "name": "IERC20",
                      "nameLocations": [
                        "1056:6:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 50790,
                      "src": "1056:6:83"
                    },
                    "referencedDeclaration": 50790,
                    "src": "1056:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60859,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "1100:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60920,
                  "src": "1086:19:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 60858,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60861,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "1129:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60920,
                  "src": "1115:21:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 60860,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60864,
                  "mutability": "mutable",
                  "name": "_assetType",
                  "nameLocation": "1163:10:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60920,
                  "src": "1146:27:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetType_$63196",
                    "typeString": "enum IVault.AssetType"
                  },
                  "typeName": {
                    "id": 60863,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60862,
                      "name": "IVault.AssetType",
                      "nameLocations": [
                        "1146:6:83",
                        "1153:9:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63196,
                      "src": "1146:16:83"
                    },
                    "referencedDeclaration": 63196,
                    "src": "1146:16:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1022:157:83"
            },
            "returnParameters": {
              "id": 60868,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1201:0:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60929,
            "nodeType": "FunctionDefinition",
            "src": "1629:103:83",
            "nodes": [],
            "body": {
              "id": 60928,
              "nodeType": "Block",
              "src": "1699:33:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60926,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60837,
                    "src": "1716:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 60925,
                  "id": 60927,
                  "nodeType": "Return",
                  "src": "1709:16:83"
                }
              ]
            },
            "baseFunctions": [
              56147
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_underlyingDecimals",
            "nameLocation": "1638:19:83",
            "overrides": {
              "id": 60922,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1674:8:83"
            },
            "parameters": {
              "id": 60921,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1657:2:83"
            },
            "returnParameters": {
              "id": 60925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60924,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60929,
                  "src": "1692:5:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 60923,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1692:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1691:7:83"
            },
            "scope": 61158,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60977,
            "nodeType": "FunctionDefinition",
            "src": "1851:491:83",
            "nodes": [],
            "body": {
              "id": 60976,
              "nodeType": "Block",
              "src": "2033:309:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60946,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60932,
                      "src": "2047:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 60947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2057:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2047:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60952,
                  "nodeType": "IfStatement",
                  "src": "2043:36:83",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 60949,
                        "name": "ZeroAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62993,
                        "src": "2067:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 60950,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2067:12:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 60951,
                    "nodeType": "RevertStatement",
                    "src": "2060:19:83"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60953,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60932,
                      "src": "2093:6:83",
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
                          "id": 60955,
                          "name": "depositor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60934,
                          "src": "2113:9:83",
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
                        "id": 60954,
                        "name": "maxDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          61120
                        ],
                        "referencedDeclaration": 61120,
                        "src": "2102:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 60956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2102:21:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2093:30:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60961,
                  "nodeType": "IfStatement",
                  "src": "2089:63:83",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 60958,
                        "name": "DepositMoreThanMax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56091,
                        "src": "2132:18:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 60959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2132:20:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 60960,
                    "nodeType": "RevertStatement",
                    "src": "2125:27:83"
                  }
                },
                {
                  "expression": {
                    "id": 60966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60962,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60944,
                      "src": "2162:6:83",
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
                          "id": 60964,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60932,
                          "src": "2186:6:83",
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
                        "id": 60963,
                        "name": "previewDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56378,
                        "src": "2171:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 60965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2171:22:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2162:31:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60967,
                  "nodeType": "ExpressionStatement",
                  "src": "2162:31:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60969,
                        "name": "depositor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60934,
                        "src": "2276:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 60970,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2291:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 60971,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2295:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2291:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 60972,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60932,
                        "src": "2311:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60973,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60944,
                        "src": "2327:6:83",
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
                      "id": 60968,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56829,
                      "src": "2262:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 60974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [
                      "2272:2:83",
                      "2287:2:83",
                      "2303:6:83",
                      "2319:6:83"
                    ],
                    "names": [
                      "by",
                      "to",
                      "assets",
                      "shares"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "2262:73:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60975,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:73:83"
                }
              ]
            },
            "baseFunctions": [
              56673
            ],
            "documentation": {
              "id": 60930,
              "nodeType": "StructuredDocumentation",
              "src": "1738:108:83",
              "text": " @notice ERC4626 `_deposit` implementation calls `maxDeposit` which checks the asset limit"
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60938,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60937,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1943:9:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "1943:9:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "1943:9:83"
              },
              {
                "id": 60940,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60939,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "1961:13:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "1961:13:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "1961:13:83"
              },
              {
                "id": 60942,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60941,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1983:12:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "1983:12:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "1983:12:83"
              }
            ],
            "name": "deposit",
            "nameLocation": "1860:7:83",
            "overrides": {
              "id": 60936,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1926:8:83"
            },
            "parameters": {
              "id": 60935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60932,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1876:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60977,
                  "src": "1868:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1868:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60934,
                  "mutability": "mutable",
                  "name": "depositor",
                  "nameLocation": "1892:9:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60977,
                  "src": "1884:17:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60933,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1884:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1867:35:83"
            },
            "returnParameters": {
              "id": 60945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60944,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2021:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 60977,
                  "src": "2013:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2013:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2012:16:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61000,
            "nodeType": "FunctionDefinition",
            "src": "2348:218:83",
            "nodes": [],
            "body": {
              "id": 60999,
              "nodeType": "Block",
              "src": "2520:46:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60995,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60979,
                        "src": "2548:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60996,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60981,
                        "src": "2556:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 60993,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2537:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_Vault_$61158_$",
                          "typeString": "type(contract super Vault)"
                        }
                      },
                      "id": 60994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2543:4:83",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56708,
                      "src": "2537:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 60997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2537:22:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60992,
                  "id": 60998,
                  "nodeType": "Return",
                  "src": "2530:29:83"
                }
              ]
            },
            "baseFunctions": [
              56708
            ],
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60985,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60984,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2430:9:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "2430:9:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2430:9:83"
              },
              {
                "id": 60987,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60986,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2448:13:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "2448:13:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2448:13:83"
              },
              {
                "id": 60989,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60988,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2470:12:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2470:12:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2470:12:83"
              }
            ],
            "name": "mint",
            "nameLocation": "2357:4:83",
            "overrides": {
              "id": 60983,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2413:8:83"
            },
            "parameters": {
              "id": 60982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60979,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2370:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61000,
                  "src": "2362:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60978,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60981,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2386:2:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61000,
                  "src": "2378:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60980,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2378:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2361:28:83"
            },
            "returnParameters": {
              "id": 60992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60991,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2508:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61000,
                  "src": "2500:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2500:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2499:16:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61033,
            "nodeType": "FunctionDefinition",
            "src": "2572:294:83",
            "nodes": [],
            "body": {
              "id": 61032,
              "nodeType": "Block",
              "src": "2763:103:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61018,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61002,
                      "src": "2777:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61019,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2787:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2777:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61024,
                  "nodeType": "IfStatement",
                  "src": "2773:36:83",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61021,
                        "name": "ZeroAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62993,
                        "src": "2797:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61022,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2797:12:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61023,
                    "nodeType": "RevertStatement",
                    "src": "2790:19:83"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61027,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61002,
                        "src": "2841:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61028,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61004,
                        "src": "2849:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61029,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61006,
                        "src": "2853:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 61025,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2826:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_Vault_$61158_$",
                          "typeString": "type(contract super Vault)"
                        }
                      },
                      "id": 61026,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2832:8:83",
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56746,
                      "src": "2826:14:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 61030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2826:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61017,
                  "id": 61031,
                  "nodeType": "Return",
                  "src": "2819:40:83"
                }
              ]
            },
            "baseFunctions": [
              56746
            ],
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61010,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61009,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2673:9:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "2673:9:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2673:9:83"
              },
              {
                "id": 61012,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61011,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2691:13:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "2691:13:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2691:13:83"
              },
              {
                "id": 61014,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61013,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2713:12:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2713:12:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2713:12:83"
              }
            ],
            "name": "withdraw",
            "nameLocation": "2581:8:83",
            "overrides": {
              "id": 61008,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2656:8:83"
            },
            "parameters": {
              "id": 61007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61002,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2598:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61033,
                  "src": "2590:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2590:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61004,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2614:2:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61033,
                  "src": "2606:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61003,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2606:7:83",
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
                  "id": 61006,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2626:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61033,
                  "src": "2618:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61005,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2618:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2589:43:83"
            },
            "returnParameters": {
              "id": 61017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61016,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2751:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61033,
                  "src": "2743:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61015,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2743:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2742:16:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61066,
            "nodeType": "FunctionDefinition",
            "src": "2872:290:83",
            "nodes": [],
            "body": {
              "id": 61065,
              "nodeType": "Block",
              "src": "3061:101:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61051,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61035,
                      "src": "3075:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3085:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3075:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61057,
                  "nodeType": "IfStatement",
                  "src": "3071:36:83",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61054,
                        "name": "ZeroAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62993,
                        "src": "3095:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61055,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3095:12:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61056,
                    "nodeType": "RevertStatement",
                    "src": "3088:19:83"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61060,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61035,
                        "src": "3137:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61061,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61037,
                        "src": "3145:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61062,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61039,
                        "src": "3149:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 61058,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "3124:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_Vault_$61158_$",
                          "typeString": "type(contract super Vault)"
                        }
                      },
                      "id": 61059,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3130:6:83",
                      "memberName": "redeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56784,
                      "src": "3124:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 61063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3124:31:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61050,
                  "id": 61064,
                  "nodeType": "Return",
                  "src": "3117:38:83"
                }
              ]
            },
            "baseFunctions": [
              56784
            ],
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61043,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61042,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2971:9:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "2971:9:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2971:9:83"
              },
              {
                "id": 61045,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61044,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2989:12:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2989:12:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "2989:12:83"
              },
              {
                "id": 61047,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61046,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "3010:13:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "3010:13:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "3010:13:83"
              }
            ],
            "name": "redeem",
            "nameLocation": "2881:6:83",
            "overrides": {
              "id": 61041,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2954:8:83"
            },
            "parameters": {
              "id": 61040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61035,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2896:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61066,
                  "src": "2888:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61034,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2888:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61037,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2912:2:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61066,
                  "src": "2904:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2904:7:83",
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
                  "id": 61039,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2924:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61066,
                  "src": "2916:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2916:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2887:43:83"
            },
            "returnParameters": {
              "id": 61050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61049,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3049:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61066,
                  "src": "3041:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3041:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3040:16:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61078,
            "nodeType": "FunctionDefinition",
            "src": "3168:98:83",
            "nodes": [],
            "body": {
              "id": 61077,
              "nodeType": "Block",
              "src": "3228:38:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 61075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61073,
                      "name": "assetLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60832,
                      "src": "3238:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61074,
                      "name": "newLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61068,
                      "src": "3251:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3238:21:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 61076,
                  "nodeType": "ExpressionStatement",
                  "src": "3238:21:83"
                }
              ]
            },
            "functionSelector": "27ea6f2b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61071,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61070,
                  "name": "onlySupervisor",
                  "nameLocations": [
                    "3213:14:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61157,
                  "src": "3213:14:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "3213:14:83"
              }
            ],
            "name": "setLimit",
            "nameLocation": "3177:8:83",
            "parameters": {
              "id": 61069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61068,
                  "mutability": "mutable",
                  "name": "newLimit",
                  "nameLocation": "3194:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61078,
                  "src": "3186:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61067,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3186:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3185:18:83"
            },
            "returnParameters": {
              "id": 61072,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3228:0:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61094,
            "nodeType": "FunctionDefinition",
            "src": "3272:116:83",
            "nodes": [],
            "body": {
              "id": 61093,
              "nodeType": "Block",
              "src": "3325:63:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 61085,
                    "name": "toPause",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61080,
                    "src": "3339:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61089,
                        "name": "_unpause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47098,
                        "src": "3371:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 61090,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3371:10:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61091,
                    "nodeType": "ExpressionStatement",
                    "src": "3371:10:83"
                  },
                  "id": 61092,
                  "nodeType": "IfStatement",
                  "src": "3335:46:83",
                  "trueBody": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61086,
                        "name": "_pause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47074,
                        "src": "3348:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 61087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3348:8:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61088,
                    "nodeType": "ExpressionStatement",
                    "src": "3348:8:83"
                  }
                }
              ]
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61083,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61082,
                  "name": "onlySupervisor",
                  "nameLocations": [
                    "3310:14:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61157,
                  "src": "3310:14:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "3310:14:83"
              }
            ],
            "name": "pause",
            "nameLocation": "3281:5:83",
            "parameters": {
              "id": 61081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61080,
                  "mutability": "mutable",
                  "name": "toPause",
                  "nameLocation": "3292:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61094,
                  "src": "3287:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61079,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3287:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3286:14:83"
            },
            "returnParameters": {
              "id": 61084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3325:0:83"
            },
            "scope": 61158,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61120,
            "nodeType": "FunctionDefinition",
            "src": "3433:223:83",
            "nodes": [],
            "body": {
              "id": 61119,
              "nodeType": "Block",
              "src": "3514:142:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 61104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61102,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61096,
                      "src": "3524:2:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61103,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61096,
                      "src": "3529:2:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3524:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61105,
                  "nodeType": "ExpressionStatement",
                  "src": "3524:7:83"
                },
                {
                  "expression": {
                    "id": 61117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61106,
                      "name": "maxAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61100,
                      "src": "3577:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61107,
                          "name": "assetLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60832,
                          "src": "3589:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 61108,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56218,
                            "src": "3603:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 61109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3603:13:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3589:27:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61112,
                          "name": "assetLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60832,
                          "src": "3623:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 61113,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56218,
                            "src": "3636:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 61114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3636:13:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3623:26:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "3589:60:83",
                      "trueExpression": {
                        "hexValue": "30",
                        "id": 61111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3619:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3577:72:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 61118,
                  "nodeType": "ExpressionStatement",
                  "src": "3577:72:83"
                }
              ]
            },
            "baseFunctions": [
              56585
            ],
            "functionSelector": "402d267d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3442:10:83",
            "overrides": {
              "id": 61098,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3477:8:83"
            },
            "parameters": {
              "id": 61097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61096,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3461:2:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61120,
                  "src": "3453:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3453:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3452:12:83"
            },
            "returnParameters": {
              "id": 61101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61100,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3503:9:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 61120,
                  "src": "3495:17:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3494:19:83"
            },
            "scope": 61158,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61129,
            "nodeType": "FunctionDefinition",
            "src": "3662:92:83",
            "nodes": [],
            "body": {
              "id": 61128,
              "nodeType": "Block",
              "src": "3723:31:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 61126,
                    "name": "nameStr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60839,
                    "src": "3740:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 61125,
                  "id": 61127,
                  "nodeType": "Return",
                  "src": "3733:14:83"
                }
              ]
            },
            "baseFunctions": [
              55738
            ],
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "3671:4:83",
            "overrides": {
              "id": 61122,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3690:8:83"
            },
            "parameters": {
              "id": 61121,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3675:2:83"
            },
            "returnParameters": {
              "id": 61125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61124,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61129,
                  "src": "3708:13:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61123,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3708:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3707:15:83"
            },
            "scope": 61158,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61138,
            "nodeType": "FunctionDefinition",
            "src": "3760:96:83",
            "nodes": [],
            "body": {
              "id": 61137,
              "nodeType": "Block",
              "src": "3823:33:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 61135,
                    "name": "symbolStr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60841,
                    "src": "3840:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 61134,
                  "id": 61136,
                  "nodeType": "Return",
                  "src": "3833:16:83"
                }
              ]
            },
            "baseFunctions": [
              55744
            ],
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "3769:6:83",
            "overrides": {
              "id": 61131,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3790:8:83"
            },
            "parameters": {
              "id": 61130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3775:2:83"
            },
            "returnParameters": {
              "id": 61134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61133,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61138,
                  "src": "3808:13:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3808:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3807:15:83"
            },
            "scope": 61158,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61150,
            "nodeType": "FunctionDefinition",
            "src": "3862:101:83",
            "nodes": [],
            "body": {
              "id": 61149,
              "nodeType": "Block",
              "src": "3918:45:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61146,
                        "name": "depositToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60830,
                        "src": "3943:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$50790",
                          "typeString": "contract IERC20"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IERC20_$50790",
                          "typeString": "contract IERC20"
                        }
                      ],
                      "id": 61145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3935:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 61144,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3935:7:83",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 61147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3935:21:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 61143,
                  "id": 61148,
                  "nodeType": "Return",
                  "src": "3928:28:83"
                }
              ]
            },
            "baseFunctions": [
              56138
            ],
            "functionSelector": "38d52e0f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "3871:5:83",
            "overrides": {
              "id": 61140,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3891:8:83"
            },
            "parameters": {
              "id": 61139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3876:2:83"
            },
            "returnParameters": {
              "id": 61143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61142,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61150,
                  "src": "3909:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3909:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3908:9:83"
            },
            "scope": 61158,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61157,
            "nodeType": "ModifierDefinition",
            "src": "4012:67:83",
            "nodes": [],
            "body": {
              "id": 61156,
              "nodeType": "Block",
              "src": "4038:41:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61152,
                      "name": "_checkOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54022,
                      "src": "4048:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 61153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4048:13:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61154,
                  "nodeType": "ExpressionStatement",
                  "src": "4048:13:83"
                },
                {
                  "id": 61155,
                  "nodeType": "PlaceholderStatement",
                  "src": "4071:1:83"
                }
              ]
            },
            "name": "onlySupervisor",
            "nameLocation": "4021:14:83",
            "parameters": {
              "id": 61151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4035:2:83"
            },
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 60818,
              "name": "ERC4626",
              "nameLocations": [
                "593:7:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56919,
              "src": "593:7:83"
            },
            "id": 60819,
            "nodeType": "InheritanceSpecifier",
            "src": "593:7:83"
          },
          {
            "baseName": {
              "id": 60820,
              "name": "Initializable",
              "nameLocations": [
                "602:13:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "602:13:83"
            },
            "id": 60821,
            "nodeType": "InheritanceSpecifier",
            "src": "602:13:83"
          },
          {
            "baseName": {
              "id": 60822,
              "name": "Ownable",
              "nameLocations": [
                "617:7:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54123,
              "src": "617:7:83"
            },
            "id": 60823,
            "nodeType": "InheritanceSpecifier",
            "src": "617:7:83"
          },
          {
            "baseName": {
              "id": 60824,
              "name": "PausableUpgradeable",
              "nameLocations": [
                "626:19:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47099,
              "src": "626:19:83"
            },
            "id": 60825,
            "nodeType": "InheritanceSpecifier",
            "src": "626:19:83"
          },
          {
            "baseName": {
              "id": 60826,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "647:15:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58542,
              "src": "647:15:83"
            },
            "id": 60827,
            "nodeType": "InheritanceSpecifier",
            "src": "647:15:83"
          }
        ],
        "canonicalName": "Vault",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61158,
          58542,
          47099,
          46923,
          54123,
          46877,
          56919,
          56069
        ],
        "name": "Vault",
        "nameLocation": "584:5:83",
        "scope": 61159,
        "usedErrors": [
          46640,
          46643,
          46962,
          46965,
          53935,
          53938,
          53941,
          53944,
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
          56100,
          58524,
          62987,
          62993
        ],
        "usedEvents": [
          46648,
          46954,
          46959,
          53951,
          53956,
          53961,
          55683,
          55692,
          56111,
          56124
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 83
} as const;