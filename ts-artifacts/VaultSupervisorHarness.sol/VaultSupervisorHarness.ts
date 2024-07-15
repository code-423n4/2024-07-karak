export const VaultSupervisorHarness = {
  "abi": [
    {
      "type": "function",
      "name": "SIGNED_DEPOSIT_TYPEHASH",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
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
      "name": "changeImplementation",
      "inputs": [
        {
          "name": "newVaultImpl",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "changeImplementationForVault",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "newVaultImpl",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "name": "delegationSupervisor",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IDelegationSupervisor"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deployVault",
      "inputs": [
        {
          "name": "depositToken",
          "type": "address",
          "internalType": "contract IERC20"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "symbol",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "assetType",
          "type": "uint8",
          "internalType": "enum IVault.AssetType"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IVault"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "amount",
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
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "depositWithSignature",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "user",
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
          "name": "permit",
          "type": "tuple",
          "internalType": "struct IVaultSupervisor.Signature",
          "components": [
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
          ]
        },
        {
          "name": "vaultAllowance",
          "type": "tuple",
          "internalType": "struct IVaultSupervisor.Signature",
          "components": [
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
          ]
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
      "name": "getDeposits",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
        },
        {
          "name": "tokens",
          "type": "address[]",
          "internalType": "contract IERC20[]"
        },
        {
          "name": "assets",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "shares",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserNonce",
      "inputs": [
        {
          "name": "user",
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
      "name": "getVaults",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address[]",
          "internalType": "contract IVault[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRoles",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "roles",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "hasAllRoles",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "roles",
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
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hasAnyRole",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "roles",
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
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "implementation",
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
      "name": "implementation",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "initialize",
      "inputs": [
        {
          "name": "_delegationSupervisor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_vaultImpl",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_limiter",
          "type": "address",
          "internalType": "contract ILimiter"
        },
        {
          "name": "_manager",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "limiter",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract ILimiter"
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
      "name": "proxiableUUID",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "redeemShares",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "removeShares",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
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
      "name": "renounceRoles",
      "inputs": [
        {
          "name": "roles",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
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
      "name": "revokeRoles",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "roles",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "rolesOf",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "roles",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "runAdminOperation",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "fn",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setLimiter",
      "inputs": [
        {
          "name": "limiter",
          "type": "address",
          "internalType": "contract ILimiter"
        }
      ],
      "outputs": [],
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
      "name": "upgradeToAndCall",
      "inputs": [
        {
          "name": "newImplementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
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
      "name": "NewVault",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
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
      "name": "RolesUpdated",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "roles",
          "type": "uint256",
          "indexed": true,
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
      "name": "Upgraded",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpgradedAllVaults",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpgradedVault",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AlreadyInitialized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "CrossedDepositLimit",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignature",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureLength",
      "inputs": [
        {
          "name": "length",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureS",
      "inputs": [
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
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
      "name": "ExpiredSign",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidSignature",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidVaultAdminFunction",
      "inputs": []
    },
    {
      "type": "error",
      "name": "MaxStakerVault",
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
      "name": "NotDelegationSupervisor",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotEnoughShares",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
      "inputs": []
    },
    {
      "type": "error",
      "name": "PermitFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Unauthorized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "UnauthorizedCallContext",
      "inputs": []
    },
    {
      "type": "error",
      "name": "UpgradeFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "VaultNotAChildVault",
      "inputs": []
    },
    {
      "type": "error",
      "name": "VaultNotFound",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroShares",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60a0806040523460c857306080527ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c1660b957506001600160401b036002600160401b0319828216016075575b604051613c0790816100ce823960805181818161080b0152610b1a0152f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a13880806056565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806302329a291461024757806317a68dd814610242578063183a4f6e1461023d5780631c10893f146102385780631cd64df414610233578063256929621461022e5780632de948071461022957806344d00f821461022457806347e7ef241461021f5780634a4ee7b11461021a5780634f1ef28614610215578063514e62fc1461021057806351ffb74a1461020b57806352d1902d1461020657806354d1f13d146102015780635c60da1b146101fc5780635c975abb146101f75780636834e3a8146101f25780636b880718146101ed5780636ff09141146101e8578063715018a6146101e357806374b87f67146101de5780637a29084c146101d95780638c80d4e5146101d45780638da5cb5b146101cf57806394f649dd146101ca578063aa0a050c146101c5578063c1f09e30146101c0578063df670448146101bb578063e4af8b22146101b6578063f04e283e146101b1578063f0edf6aa146101ac578063f2fde38b146101a7578063f8c8765e146101a25763fee81cf41461019d57600080fd5b61213f565b611f27565b611ee7565b611e4e565b611cd4565b611c99565b611c46565b611a80565b6118b8565b6114f5565b6113df565b611215565b61118c565b611139565b6110d7565b610d20565b610c9b565b610c2b565b610be9565b610baf565b610b68565b610b06565b61096f565b6108fe565b6107cf565b610775565b610711565b61064a565b6105c2565b610573565b610522565b6104bc565b6104a2565b6103c7565b61025b565b8015150361025657565b600080fd5b34610256576020600319360112610256576004356102788161024c565b61028061289e565b156103035761028d6128f2565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561037f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361025657565b346102565760206003193601126102565773ffffffffffffffffffffffffffffffffffffffff6004356103f9816103a9565b6104016128ba565b168015610478577fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557f2768c62492a0ab17bb4fd74f18e51a421e2a8e30c0d05ec389cd5609e91b4d5e600080a2005b60046040517fd92e233d000000000000000000000000000000000000000000000000000000008152fd5b6020600319360112610256576104ba60043533612fa5565b005b6040600319360112610256576004356104d4816103a9565b6104dc6128ba565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b3461025657604060031936011261025657602061055e600435610544816103a9565b602435918291638b78c6d8600c526000526020600c205490565b1614604051908152f35b600091031261025657565b6000806003193601126105bf5763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b80fd5b346102565760206003193601126102565760206105f86004356105e4816103a9565b638b78c6d8600c526000526020600c205490565b604051908152f35b90815180825260208080930193019160005b828110610620575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610612565b3461025657600060031936011261025657604051807fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491049182548082526020809201936000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b8282106106e4576106e0856106cc81890382611d8c565b604051918291602083526020830190610600565b0390f35b835473ffffffffffffffffffffffffffffffffffffffff16865294850194600193840193909101906106b5565b346102565760406003193601126102565760043561072e816103a9565b68929eee149b4bd21268308154146107675761075b6020923083556107516128f2565b6024359033612947565b90389055604051908152f35b63ab143c066000526004601cfd5b6040600319360112610256576104ba600435610790816103a9565b6107986128ba565b60243590612fa5565b9181601f840112156102565782359167ffffffffffffffff8311610256576020838186019501011161025657565b6040600319360112610256576004356107e7816103a9565b60243567ffffffffffffffff8111610256576108079036906004016107a1565b91307f0000000000000000000000000000000000000000000000000000000000000000146108f05773ffffffffffffffffffffffffffffffffffffffff9061084d6128ba565b16916352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9081602060016004601d885afa51036108e2578084916000958694817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8780a2556108c1578280f35b806040519485378338925af4156108d9578181808280f35b903d90823e3d90fd5b6355299b496001526004601dfd5b639f03a0266000526004601cfd5b3461025657604060031936011261025657602060043561091d816103a9565b61093860243591638b78c6d8600c526000526020600c205490565b161515604051908152f35b60031960609101126102565760043561095b816103a9565b90602435610968816103a9565b9060443590565b346102565761097d36610943565b73ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610adc5782169282610a0a8573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25768929eee149b4bd21268933085541461076757602092600060649230885560405196879586947fba08765200000000000000000000000000000000000000000000000000000000865260048601521660248401523060448401525af18015610aad57610a7e575b50389055005b610a9f9060203d602011610aa6575b610a978183611d8c565b8101906121df565b5038610a78565b503d610a8d565b6121ee565b60046040517fb13b4eea000000000000000000000000000000000000000000000000000000008152fd5b60046040517fd04f8cc5000000000000000000000000000000000000000000000000000000008152fd5b3461025657600060031936011261025657307f0000000000000000000000000000000000000000000000000000000000000000036108f05760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b6000806003193601126105bf5763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b34610256576000600319360112610256576020610bcb336121fa565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461025657600060031936011261025657602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b34610256576020600319360112610256576020610c92600435610c4d816103a9565b73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b54604051908152f35b34610256576020600319360112610256576020610bcb600435610cbd816103a9565b6121fa565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c606091011261025657608490565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1c60609101126102565760e490565b3461025657610140600319360112610256576004803590610d40826103a9565b60243590610d4d826103a9565b6044359260643592610d5e36610cc2565b610d6736610cf1565b68929eee149b4bd2126895308754146110ca57308755610d856128f2565b610dce8473ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b549273ffffffffffffffffffffffffffffffffffffffff96878716916040988951917f38d52e0f0000000000000000000000000000000000000000000000000000000090818452602093848187818a5afa8015610aad5784916000916110ad575b501690610e3b81612c0f565b823b15610256578f92868f808f946000968c8f928f9a93610ed6948b97519c8d9b8c9a8b997fd505accf000000000000000000000000000000000000000000000000000000008b528801359701359589019360ff929897969360c0969260e087019a73ffffffffffffffffffffffffffffffffffffffff80921688521660208701526040860152606085015216608083015260a08201520152565b03925af19081611094575b50611079578a5190815282818581885afa918215610aad57610f65928a87928e879560009461104a575b50518096819582947fdd62ed3e0000000000000000000000000000000000000000000000000000000084528b840190602090939293604083019473ffffffffffffffffffffffffffffffffffffffff809216845216910152565b0392165afa908115610aad578c9260009261102d575b505010611006575092849289610f9a936106e09b97610ff4999761328a565b610fe38173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b610fed81546122d0565b9055612947565b38909255519081529081906020820190565b87517fb78cb0dd000000000000000000000000000000000000000000000000000000008152fd5b6110439250803d10610aa657610a978183611d8c565b3880610f7b565b61106b919450863d8811611072575b6110638183611d8c565b8101906123c9565b9238610f0b565b503d611059565b5050505092849289610f9a936106e09b97610ff4999761328a565b806110a16110a792611d57565b80610568565b38610ee1565b6110c49150863d8811611072576110638183611d8c565b38610e2f565b8563ab143c06600052601cfd5b6000806003193601126105bf576110ec6128ba565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b3461025657600060031936011261025657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075416604051908152f35b34610256576020600319360112610256576004356111a9816103a9565b6111b161289e565b73ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910791167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055600080f35b346102565761122336610943565b9173ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610adc57826112b081831673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25768929eee149b4bd2126892308454146107675730845584156113b5578216936000948086527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491008060205261132e84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549182841161138b57875260205281810361136c84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b551461137b575b505038905580f35b61138491612d33565b3880611373565b60046040517ff15ed214000000000000000000000000000000000000000000000000000000008152fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b346102565760006003193601126102565760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b90815180825260208080930193019160005b828110611452575050505090565b835185529381019392810192600101611444565b929061147e9095949295608085526080850190610600565b60209084810360208601526020808851928381520197019160005b8281106114cb5750505050846114ba91846114c89697036040860152611432565b916060818403910152611432565b90565b835173ffffffffffffffffffffffffffffffffffffffff1689529781019792810192600101611499565b34610256576020806003193601126102565760048035611514816103a9565b61155d8173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906115688261231a565b926115728361231a565b9261157c8161231a565b9560005b8281106115eb5787876106e0886115de6115d98a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612176565b9260405194859485611466565b6116d06116378673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b6116ac61168c846116878a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612398565b905473ffffffffffffffffffffffffffffffffffffffff9160031b1c1690565b73ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549061173e61172561168c836116878a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff1690565b604084815180937f07a2d13a000000000000000000000000000000000000000000000000000000008252818061177b898d83019190602083019252565b03915afa938415610aad578794869360009161189b575b5061179d858d6123b5565b526117a8848b6123b5565b526117fc61172561168c856116878c73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9051938480927f38d52e0f0000000000000000000000000000000000000000000000000000000082525afa8015610aad5773ffffffffffffffffffffffffffffffffffffffff6118789160019460009161187e575b501661185d838c6123b5565b9073ffffffffffffffffffffffffffffffffffffffff169052565b01611580565b6118959150863d8811611072576110638183611d8c565b38611851565b6118b29150843d8611610aa657610a978183611d8c565b38611792565b34610256576040600319360112610256576004356118d5816103a9565b602435906118e2826103a9565b6118ea6128ba565b73ffffffffffffffffffffffffffffffffffffffff9081831692831561047857826119548373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab2576119e8906119a88373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b16907f928c1491037173ffa6782c693f229e11dbb934cb28daf9e2d1fca4b5131ffbf7600080a3005b919082519283825260005b848110611a5b5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201611a1c565b9060206114c8928181520190611a11565b3461025657604060031936011261025657600435611a9d816103a9565b60243567ffffffffffffffff811161025657611abd9036906004016107a1565b611ac561289e565b68929eee149b4bd212689230845414610767573084557fffffffff00000000000000000000000000000000000000000000000000000000611b0683856123de565b16917f27ea6f2b0000000000000000000000000000000000000000000000000000000083148015611c1d575b8015611bf4575b15611bca57600073ffffffffffffffffffffffffffffffffffffffff81957ff2fde38b00000000000000000000000000000000000000000000000000000000839614611bbd575b611b8f60405180958193612422565b0393165af190611b9d612430565b9115611bb6573890556040519081906106e09082611a6f565b5060208101fd5b611bc56128ba565b611b80565b60046040517fc55dde3d000000000000000000000000000000000000000000000000000000008152fd5b507f02329a29000000000000000000000000000000000000000000000000000000008314611b39565b507ff2fde38b000000000000000000000000000000000000000000000000000000008314611b32565b3461025657600060031936011261025657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491065416604051908152f35b346102565760006003193601126102565760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b602060031936011261025657600435611cec816103a9565b611cf46128ba565b63389a75e1600c52806000526020600c209081544211611d1a5760006104ba9255612c1d565b636f5e88186000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111611d6b57604052565b611d28565b6040810190811067ffffffffffffffff821117611d6b57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117611d6b57604052565b67ffffffffffffffff8111611d6b57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561025657803590611e1e82611dcd565b92611e2c6040519485611d8c565b8284526020838301011161025657816000926020809301838601378301015290565b3461025657608060031936011261025657600435611e6b816103a9565b67ffffffffffffffff9060243582811161025657611e8d903690600401611e07565b9160443590811161025657611ea6903690600401611e07565b606435906005821015610256576106e093611ec093612460565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b602060031936011261025657600435611eff816103a9565b611f076128ba565b8060601b15611f19576104ba90612c1d565b637448fbae6000526004601cfd5b3461025657608060031936011261025657600435611f44816103a9565b60243590611f51826103a9565b604435611f5d816103a9565b60643590611f6a826103a9565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff60ff8660401c1615951680159081612137575b600114908161212d575b159081612124575b506120fa5761201d93856120147ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b61209e57612721565b61202357005b61206f7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b6120f57ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b612721565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538611fbb565b303b159150611fb3565b869150611fa9565b346102565760206003193601126102565760043561215c816103a9565b63389a75e1600c52600052602080600c2054604051908152f35b90604051918281549182825260209260208301916000526020600020936000905b8282106121af575050506121ad92500383611d8c565b565b855473ffffffffffffffffffffffffffffffffffffffff1684526001958601958895509381019390910190612197565b90816020910312610256575190565b6040513d6000823e3d90fd5b61225b9073ffffffffffffffffffffffffffffffffffffffff91829173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541690600182148015612299575b612271575090565b90507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105541690565b508115612269565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146122fd5760010190565b6122a1565b67ffffffffffffffff8111611d6b5760051b60200190565b9061232482612302565b6123316040519182611d8c565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061235f8294612302565b0190602036910137565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80548210156123b05760005260206000200190600090565b612369565b80518210156123b05760209160051b010190565b9081602091031261025657516114c8816103a9565b7fffffffff00000000000000000000000000000000000000000000000000000000903581811693926004811061241357505050565b60040360031b82901b16169150565b908092918237016000815290565b3d1561245b573d9061244182611dcd565b9161244f6040519384611d8c565b82523d6000602084013e565b606090565b92916124ff9061246e61289e565b6124cf604051937f8420ce9900000000000000000000000000000000000000000000000000000000602086015230602486015273ffffffffffffffffffffffffffffffffffffffff809716604486015260a0606486015260c4850190611a11565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc848303016084850152611a11565b60058310156125f25781612542916125479460a4830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611d8c565b612f45565b9061255182612621565b81166125ca61259f8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b60017fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b7f2cd7a531712f8899004c782d9607e0886d1dbc91bfac7be88dadf6750d9e1419600080a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910490815468010000000000000000811015611d6b57600181018084558110156123b0576121ad926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b9081549168010000000000000000831015611d6b57826126f59160016121ad95018155612398565b90919073ffffffffffffffffffffffffffffffffffffffff8084549260031b9316831b921b1916179055565b91926127cd90337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36127796134ae565b6127816134ae565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055612fec565b73ffffffffffffffffffffffffffffffffffffffff80911680158015612894575b610478577fffffffffffffffffffffffff000000000000000000000000000000000000000092827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491069116848254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910590838254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649107921690825416179055565b50818316156127ee565b638b78c6d8600c523360005260016020600c205416156128ba57565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275433036128e457565b6382b429006000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300541661291d57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff9283831693806129ab8673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25782916129bc6128f2565b60405180967f6e553f6500000000000000000000000000000000000000000000000000000000825281600081612a1c60209889976004840190929173ffffffffffffffffffffffffffffffffffffffff6020916040840195845216910152565b03925af1948515610aad57600095612b3f575b5090849291612a756117257fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075473ffffffffffffffffffffffffffffffffffffffff1690565b908116612a89575b5050916114c89261303e565b908092935060405180927f60cfb20400000000000000000000000000000000000000000000000000000000825281600081612ac660048201612b77565b03925af1918215610aad57600092612b12575b5050612ae85782903880612a7d565b60046040517fbf2af50b000000000000000000000000000000000000000000000000000000008152fd5b612b319250803d10612b38575b612b298183611d8c565b810190612b62565b3880612ad9565b503d612b1f565b82612b5992949396503d8711610aa657610a978183611d8c565b93909138612a2f565b9081602091031261025657516114c88161024c565b60208082016020835260407fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910493845480935201926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b828210612be2575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612bd4565b3560ff811681036102565790565b73ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82019182116122fd57565b80548015612d04577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190612ce18282612398565b73ffffffffffffffffffffffffffffffffffffffff82549160031b1b1916905555565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b90612d7d8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906000905b828210612e0c575b5014612de257612ddd6121ad9173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612cac565b60046040517fdee790fb000000000000000000000000000000000000000000000000000000008152fd5b929190612e5c816116878573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff90548187169260031b1c1614612e8d57600101909192612d83565b90919250612f3f612ef261168c612ee38673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612eec86612c7f565b90612398565b6126f5836116878773ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b38612d8b565b6040519061053b908183019083821067ffffffffffffffff831117611d6b576040612f8192859461369786393081528160208201520190611a11565b03906000f08015610aad5773ffffffffffffffffffffffffffffffffffffffff1690565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b638b78c6d8600c526000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b919082018092116122fd57565b73ffffffffffffffffffffffffffffffffffffffff8116156104785782156113b5576130d2826130ad8373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5415613135575b613131916130ad6131299273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b918254613031565b9055565b60206131808273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b5410156131ee57816130ad826131e4613131956131df6131299673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b6126cd565b92505091506130d9565b60046040517f63923f0e000000000000000000000000000000000000000000000000000000008152fd5b6040519061322582611d70565b600f82527f4b6172616b5f5661756c745f53757000000000000000000000000000000000006020830152565b6040519061325e82611d70565b600282527f76310000000000000000000000000000000000000000000000000000000000006020830152565b93929490944283106134845761341d61331961343996613411936133cd6132af613218565b976133c189516020809b01206132c3613251565b8051908c0120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818f0190815260208101949094529083019190915246606083015230608083015296879060a0830190565b039661334b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe098898101835282611d8c565b519020986040519485938c850197889290917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000609495937ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3865260601b1660208501526034840152605483015260748201520190565b03848101835282611d8c565b519020604051938491878301968790916042927f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201520190565b03908101835282611d8c565b5190209061342a83612c0f565b90604084013593013591613507565b73ffffffffffffffffffffffffffffffffffffffff91821691160361345a57565b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b60046040517faf04a38e000000000000000000000000000000000000000000000000000000008152fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c16156134dd57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b916114c893916135169361351f565b909291926135bf565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116135a457926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15610aad57805173ffffffffffffffffffffffffffffffffffffffff81161561359b57918190565b50809160019190565b50505060009160039190565b600411156135ba57565b6125f2565b6135c8816135b0565b806135d1575050565b6135da816135b0565b6001810361360c5760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b613615816135b0565b6002810361364f576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b8061365b6003926135b0565b146136635750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fdfe60a060409080825261053b803803809161001982856102ae565b8339810182828203126101e95761002f826102e7565b60208084015191939091906001600160401b0382116101e9570182601f820112156101e957805190610060826102fb565b9361006d875195866102ae565b8285528383830101116101e957829060005b83811061029a57505060009184010152823b1561027a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529194928482600481895afa91821561026f57600092610238575b50813b1561021f5750508551847f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511561020057508290600487518096819382525afa9283156101f5576000936101b3575b5091600080848461019096519101845af4903d156101aa573d610174816102fb565b90610181885192836102ae565b8152600081943d92013e610316565b505b608052516101c1908161037a82396080518160450152f35b60609250610316565b92508183813d83116101ee575b6101ca81836102ae565b810103126101e9576000806101e1610190956102e7565b945050610152565b600080fd5b503d6101c0565b85513d6000823e3d90fd5b9350505050346102105750610192565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b9091508481813d8311610268575b61025081836102ae565b810103126101e957610261906102e7565b90386100fb565b503d610246565b88513d6000823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015186820184015284920161007f565b601f909101601f19168101906001600160401b038211908210176102d157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101e957565b6001600160401b0381116102d157601f01601f191660200190565b9061033d575080511561032b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610370575b61034e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034656fe6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033a2646970667358221220fcb67ba218b766442ab8526b048c7c281856bbd40e0dabfef90f84bf829899d664736f6c63430008190033",
    "sourceMap": "118:268:100:-:0;;;;;;;1520:4:77;1496:31;;8837:64:24;118:268:100;;;;;;;;;7896:76:24;;-1:-1:-1;;;;;;;;;;;;118:268:100;;;7985:34:24;7981:146;;-1:-1:-1;118:268:100;;;;;;;;1496:31:77;118:268:100;;;;;;;;;;;7981:146:24;-1:-1:-1;;;;;;118:268:100;;;;;;;;;;;;;8087:29:24;;118:268:100;;8087:29:24;7981:146;;;;;7896:76;-1:-1:-1;;;7938:23:24;;;;;118:268:100;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c806302329a291461024757806317a68dd814610242578063183a4f6e1461023d5780631c10893f146102385780631cd64df414610233578063256929621461022e5780632de948071461022957806344d00f821461022457806347e7ef241461021f5780634a4ee7b11461021a5780634f1ef28614610215578063514e62fc1461021057806351ffb74a1461020b57806352d1902d1461020657806354d1f13d146102015780635c60da1b146101fc5780635c975abb146101f75780636834e3a8146101f25780636b880718146101ed5780636ff09141146101e8578063715018a6146101e357806374b87f67146101de5780637a29084c146101d95780638c80d4e5146101d45780638da5cb5b146101cf57806394f649dd146101ca578063aa0a050c146101c5578063c1f09e30146101c0578063df670448146101bb578063e4af8b22146101b6578063f04e283e146101b1578063f0edf6aa146101ac578063f2fde38b146101a7578063f8c8765e146101a25763fee81cf41461019d57600080fd5b61213f565b611f27565b611ee7565b611e4e565b611cd4565b611c99565b611c46565b611a80565b6118b8565b6114f5565b6113df565b611215565b61118c565b611139565b6110d7565b610d20565b610c9b565b610c2b565b610be9565b610baf565b610b68565b610b06565b61096f565b6108fe565b6107cf565b610775565b610711565b61064a565b6105c2565b610573565b610522565b6104bc565b6104a2565b6103c7565b61025b565b8015150361025657565b600080fd5b34610256576020600319360112610256576004356102788161024c565b61028061289e565b156103035761028d6128f2565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561037f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361025657565b346102565760206003193601126102565773ffffffffffffffffffffffffffffffffffffffff6004356103f9816103a9565b6104016128ba565b168015610478577fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557f2768c62492a0ab17bb4fd74f18e51a421e2a8e30c0d05ec389cd5609e91b4d5e600080a2005b60046040517fd92e233d000000000000000000000000000000000000000000000000000000008152fd5b6020600319360112610256576104ba60043533612fa5565b005b6040600319360112610256576004356104d4816103a9565b6104dc6128ba565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b3461025657604060031936011261025657602061055e600435610544816103a9565b602435918291638b78c6d8600c526000526020600c205490565b1614604051908152f35b600091031261025657565b6000806003193601126105bf5763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b80fd5b346102565760206003193601126102565760206105f86004356105e4816103a9565b638b78c6d8600c526000526020600c205490565b604051908152f35b90815180825260208080930193019160005b828110610620575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610612565b3461025657600060031936011261025657604051807fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491049182548082526020809201936000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b8282106106e4576106e0856106cc81890382611d8c565b604051918291602083526020830190610600565b0390f35b835473ffffffffffffffffffffffffffffffffffffffff16865294850194600193840193909101906106b5565b346102565760406003193601126102565760043561072e816103a9565b68929eee149b4bd21268308154146107675761075b6020923083556107516128f2565b6024359033612947565b90389055604051908152f35b63ab143c066000526004601cfd5b6040600319360112610256576104ba600435610790816103a9565b6107986128ba565b60243590612fa5565b9181601f840112156102565782359167ffffffffffffffff8311610256576020838186019501011161025657565b6040600319360112610256576004356107e7816103a9565b60243567ffffffffffffffff8111610256576108079036906004016107a1565b91307f0000000000000000000000000000000000000000000000000000000000000000146108f05773ffffffffffffffffffffffffffffffffffffffff9061084d6128ba565b16916352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9081602060016004601d885afa51036108e2578084916000958694817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8780a2556108c1578280f35b806040519485378338925af4156108d9578181808280f35b903d90823e3d90fd5b6355299b496001526004601dfd5b639f03a0266000526004601cfd5b3461025657604060031936011261025657602060043561091d816103a9565b61093860243591638b78c6d8600c526000526020600c205490565b161515604051908152f35b60031960609101126102565760043561095b816103a9565b90602435610968816103a9565b9060443590565b346102565761097d36610943565b73ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610adc5782169282610a0a8573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25768929eee149b4bd21268933085541461076757602092600060649230885560405196879586947fba08765200000000000000000000000000000000000000000000000000000000865260048601521660248401523060448401525af18015610aad57610a7e575b50389055005b610a9f9060203d602011610aa6575b610a978183611d8c565b8101906121df565b5038610a78565b503d610a8d565b6121ee565b60046040517fb13b4eea000000000000000000000000000000000000000000000000000000008152fd5b60046040517fd04f8cc5000000000000000000000000000000000000000000000000000000008152fd5b3461025657600060031936011261025657307f0000000000000000000000000000000000000000000000000000000000000000036108f05760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b6000806003193601126105bf5763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b34610256576000600319360112610256576020610bcb336121fa565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461025657600060031936011261025657602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b34610256576020600319360112610256576020610c92600435610c4d816103a9565b73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b54604051908152f35b34610256576020600319360112610256576020610bcb600435610cbd816103a9565b6121fa565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c606091011261025657608490565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1c60609101126102565760e490565b3461025657610140600319360112610256576004803590610d40826103a9565b60243590610d4d826103a9565b6044359260643592610d5e36610cc2565b610d6736610cf1565b68929eee149b4bd2126895308754146110ca57308755610d856128f2565b610dce8473ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b549273ffffffffffffffffffffffffffffffffffffffff96878716916040988951917f38d52e0f0000000000000000000000000000000000000000000000000000000090818452602093848187818a5afa8015610aad5784916000916110ad575b501690610e3b81612c0f565b823b15610256578f92868f808f946000968c8f928f9a93610ed6948b97519c8d9b8c9a8b997fd505accf000000000000000000000000000000000000000000000000000000008b528801359701359589019360ff929897969360c0969260e087019a73ffffffffffffffffffffffffffffffffffffffff80921688521660208701526040860152606085015216608083015260a08201520152565b03925af19081611094575b50611079578a5190815282818581885afa918215610aad57610f65928a87928e879560009461104a575b50518096819582947fdd62ed3e0000000000000000000000000000000000000000000000000000000084528b840190602090939293604083019473ffffffffffffffffffffffffffffffffffffffff809216845216910152565b0392165afa908115610aad578c9260009261102d575b505010611006575092849289610f9a936106e09b97610ff4999761328a565b610fe38173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b610fed81546122d0565b9055612947565b38909255519081529081906020820190565b87517fb78cb0dd000000000000000000000000000000000000000000000000000000008152fd5b6110439250803d10610aa657610a978183611d8c565b3880610f7b565b61106b919450863d8811611072575b6110638183611d8c565b8101906123c9565b9238610f0b565b503d611059565b5050505092849289610f9a936106e09b97610ff4999761328a565b806110a16110a792611d57565b80610568565b38610ee1565b6110c49150863d8811611072576110638183611d8c565b38610e2f565b8563ab143c06600052601cfd5b6000806003193601126105bf576110ec6128ba565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b3461025657600060031936011261025657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075416604051908152f35b34610256576020600319360112610256576004356111a9816103a9565b6111b161289e565b73ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910791167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055600080f35b346102565761122336610943565b9173ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610adc57826112b081831673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25768929eee149b4bd2126892308454146107675730845584156113b5578216936000948086527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491008060205261132e84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549182841161138b57875260205281810361136c84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b551461137b575b505038905580f35b61138491612d33565b3880611373565b60046040517ff15ed214000000000000000000000000000000000000000000000000000000008152fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b346102565760006003193601126102565760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b90815180825260208080930193019160005b828110611452575050505090565b835185529381019392810192600101611444565b929061147e9095949295608085526080850190610600565b60209084810360208601526020808851928381520197019160005b8281106114cb5750505050846114ba91846114c89697036040860152611432565b916060818403910152611432565b90565b835173ffffffffffffffffffffffffffffffffffffffff1689529781019792810192600101611499565b34610256576020806003193601126102565760048035611514816103a9565b61155d8173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906115688261231a565b926115728361231a565b9261157c8161231a565b9560005b8281106115eb5787876106e0886115de6115d98a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612176565b9260405194859485611466565b6116d06116378673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b6116ac61168c846116878a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612398565b905473ffffffffffffffffffffffffffffffffffffffff9160031b1c1690565b73ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549061173e61172561168c836116878a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff1690565b604084815180937f07a2d13a000000000000000000000000000000000000000000000000000000008252818061177b898d83019190602083019252565b03915afa938415610aad578794869360009161189b575b5061179d858d6123b5565b526117a8848b6123b5565b526117fc61172561168c856116878c73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9051938480927f38d52e0f0000000000000000000000000000000000000000000000000000000082525afa8015610aad5773ffffffffffffffffffffffffffffffffffffffff6118789160019460009161187e575b501661185d838c6123b5565b9073ffffffffffffffffffffffffffffffffffffffff169052565b01611580565b6118959150863d8811611072576110638183611d8c565b38611851565b6118b29150843d8611610aa657610a978183611d8c565b38611792565b34610256576040600319360112610256576004356118d5816103a9565b602435906118e2826103a9565b6118ea6128ba565b73ffffffffffffffffffffffffffffffffffffffff9081831692831561047857826119548373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab2576119e8906119a88373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b16907f928c1491037173ffa6782c693f229e11dbb934cb28daf9e2d1fca4b5131ffbf7600080a3005b919082519283825260005b848110611a5b5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201611a1c565b9060206114c8928181520190611a11565b3461025657604060031936011261025657600435611a9d816103a9565b60243567ffffffffffffffff811161025657611abd9036906004016107a1565b611ac561289e565b68929eee149b4bd212689230845414610767573084557fffffffff00000000000000000000000000000000000000000000000000000000611b0683856123de565b16917f27ea6f2b0000000000000000000000000000000000000000000000000000000083148015611c1d575b8015611bf4575b15611bca57600073ffffffffffffffffffffffffffffffffffffffff81957ff2fde38b00000000000000000000000000000000000000000000000000000000839614611bbd575b611b8f60405180958193612422565b0393165af190611b9d612430565b9115611bb6573890556040519081906106e09082611a6f565b5060208101fd5b611bc56128ba565b611b80565b60046040517fc55dde3d000000000000000000000000000000000000000000000000000000008152fd5b507f02329a29000000000000000000000000000000000000000000000000000000008314611b39565b507ff2fde38b000000000000000000000000000000000000000000000000000000008314611b32565b3461025657600060031936011261025657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491065416604051908152f35b346102565760006003193601126102565760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b602060031936011261025657600435611cec816103a9565b611cf46128ba565b63389a75e1600c52806000526020600c209081544211611d1a5760006104ba9255612c1d565b636f5e88186000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111611d6b57604052565b611d28565b6040810190811067ffffffffffffffff821117611d6b57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117611d6b57604052565b67ffffffffffffffff8111611d6b57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561025657803590611e1e82611dcd565b92611e2c6040519485611d8c565b8284526020838301011161025657816000926020809301838601378301015290565b3461025657608060031936011261025657600435611e6b816103a9565b67ffffffffffffffff9060243582811161025657611e8d903690600401611e07565b9160443590811161025657611ea6903690600401611e07565b606435906005821015610256576106e093611ec093612460565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b602060031936011261025657600435611eff816103a9565b611f076128ba565b8060601b15611f19576104ba90612c1d565b637448fbae6000526004601cfd5b3461025657608060031936011261025657600435611f44816103a9565b60243590611f51826103a9565b604435611f5d816103a9565b60643590611f6a826103a9565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff60ff8660401c1615951680159081612137575b600114908161212d575b159081612124575b506120fa5761201d93856120147ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b61209e57612721565b61202357005b61206f7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b6120f57ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b612721565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538611fbb565b303b159150611fb3565b869150611fa9565b346102565760206003193601126102565760043561215c816103a9565b63389a75e1600c52600052602080600c2054604051908152f35b90604051918281549182825260209260208301916000526020600020936000905b8282106121af575050506121ad92500383611d8c565b565b855473ffffffffffffffffffffffffffffffffffffffff1684526001958601958895509381019390910190612197565b90816020910312610256575190565b6040513d6000823e3d90fd5b61225b9073ffffffffffffffffffffffffffffffffffffffff91829173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541690600182148015612299575b612271575090565b90507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105541690565b508115612269565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146122fd5760010190565b6122a1565b67ffffffffffffffff8111611d6b5760051b60200190565b9061232482612302565b6123316040519182611d8c565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061235f8294612302565b0190602036910137565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80548210156123b05760005260206000200190600090565b612369565b80518210156123b05760209160051b010190565b9081602091031261025657516114c8816103a9565b7fffffffff00000000000000000000000000000000000000000000000000000000903581811693926004811061241357505050565b60040360031b82901b16169150565b908092918237016000815290565b3d1561245b573d9061244182611dcd565b9161244f6040519384611d8c565b82523d6000602084013e565b606090565b92916124ff9061246e61289e565b6124cf604051937f8420ce9900000000000000000000000000000000000000000000000000000000602086015230602486015273ffffffffffffffffffffffffffffffffffffffff809716604486015260a0606486015260c4850190611a11565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc848303016084850152611a11565b60058310156125f25781612542916125479460a4830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611d8c565b612f45565b9061255182612621565b81166125ca61259f8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b60017fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b7f2cd7a531712f8899004c782d9607e0886d1dbc91bfac7be88dadf6750d9e1419600080a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910490815468010000000000000000811015611d6b57600181018084558110156123b0576121ad926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b9081549168010000000000000000831015611d6b57826126f59160016121ad95018155612398565b90919073ffffffffffffffffffffffffffffffffffffffff8084549260031b9316831b921b1916179055565b91926127cd90337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36127796134ae565b6127816134ae565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055612fec565b73ffffffffffffffffffffffffffffffffffffffff80911680158015612894575b610478577fffffffffffffffffffffffff000000000000000000000000000000000000000092827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491069116848254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910590838254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649107921690825416179055565b50818316156127ee565b638b78c6d8600c523360005260016020600c205416156128ba57565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275433036128e457565b6382b429006000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300541661291d57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff9283831693806129ab8673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610ab25782916129bc6128f2565b60405180967f6e553f6500000000000000000000000000000000000000000000000000000000825281600081612a1c60209889976004840190929173ffffffffffffffffffffffffffffffffffffffff6020916040840195845216910152565b03925af1948515610aad57600095612b3f575b5090849291612a756117257fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075473ffffffffffffffffffffffffffffffffffffffff1690565b908116612a89575b5050916114c89261303e565b908092935060405180927f60cfb20400000000000000000000000000000000000000000000000000000000825281600081612ac660048201612b77565b03925af1918215610aad57600092612b12575b5050612ae85782903880612a7d565b60046040517fbf2af50b000000000000000000000000000000000000000000000000000000008152fd5b612b319250803d10612b38575b612b298183611d8c565b810190612b62565b3880612ad9565b503d612b1f565b82612b5992949396503d8711610aa657610a978183611d8c565b93909138612a2f565b9081602091031261025657516114c88161024c565b60208082016020835260407fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910493845480935201926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b828210612be2575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612bd4565b3560ff811681036102565790565b73ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82019182116122fd57565b80548015612d04577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190612ce18282612398565b73ffffffffffffffffffffffffffffffffffffffff82549160031b1b1916905555565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b90612d7d8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906000905b828210612e0c575b5014612de257612ddd6121ad9173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612cac565b60046040517fdee790fb000000000000000000000000000000000000000000000000000000008152fd5b929190612e5c816116878573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff90548187169260031b1c1614612e8d57600101909192612d83565b90919250612f3f612ef261168c612ee38673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612eec86612c7f565b90612398565b6126f5836116878773ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b38612d8b565b6040519061053b908183019083821067ffffffffffffffff831117611d6b576040612f8192859461369786393081528160208201520190611a11565b03906000f08015610aad5773ffffffffffffffffffffffffffffffffffffffff1690565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b638b78c6d8600c526000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b919082018092116122fd57565b73ffffffffffffffffffffffffffffffffffffffff8116156104785782156113b5576130d2826130ad8373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5415613135575b613131916130ad6131299273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b918254613031565b9055565b60206131808273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b5410156131ee57816130ad826131e4613131956131df6131299673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b6126cd565b92505091506130d9565b60046040517f63923f0e000000000000000000000000000000000000000000000000000000008152fd5b6040519061322582611d70565b600f82527f4b6172616b5f5661756c745f53757000000000000000000000000000000000006020830152565b6040519061325e82611d70565b600282527f76310000000000000000000000000000000000000000000000000000000000006020830152565b93929490944283106134845761341d61331961343996613411936133cd6132af613218565b976133c189516020809b01206132c3613251565b8051908c0120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818f0190815260208101949094529083019190915246606083015230608083015296879060a0830190565b039661334b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe098898101835282611d8c565b519020986040519485938c850197889290917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000609495937ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3865260601b1660208501526034840152605483015260748201520190565b03848101835282611d8c565b519020604051938491878301968790916042927f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201520190565b03908101835282611d8c565b5190209061342a83612c0f565b90604084013593013591613507565b73ffffffffffffffffffffffffffffffffffffffff91821691160361345a57565b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b60046040517faf04a38e000000000000000000000000000000000000000000000000000000008152fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c16156134dd57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b916114c893916135169361351f565b909291926135bf565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116135a457926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15610aad57805173ffffffffffffffffffffffffffffffffffffffff81161561359b57918190565b50809160019190565b50505060009160039190565b600411156135ba57565b6125f2565b6135c8816135b0565b806135d1575050565b6135da816135b0565b6001810361360c5760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b613615816135b0565b6002810361364f576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b8061365b6003926135b0565b146136635750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fdfe60a060409080825261053b803803809161001982856102ae565b8339810182828203126101e95761002f826102e7565b60208084015191939091906001600160401b0382116101e9570182601f820112156101e957805190610060826102fb565b9361006d875195866102ae565b8285528383830101116101e957829060005b83811061029a57505060009184010152823b1561027a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529194928482600481895afa91821561026f57600092610238575b50813b1561021f5750508551847f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511561020057508290600487518096819382525afa9283156101f5576000936101b3575b5091600080848461019096519101845af4903d156101aa573d610174816102fb565b90610181885192836102ae565b8152600081943d92013e610316565b505b608052516101c1908161037a82396080518160450152f35b60609250610316565b92508183813d83116101ee575b6101ca81836102ae565b810103126101e9576000806101e1610190956102e7565b945050610152565b600080fd5b503d6101c0565b85513d6000823e3d90fd5b9350505050346102105750610192565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b9091508481813d8311610268575b61025081836102ae565b810103126101e957610261906102e7565b90386100fb565b503d610246565b88513d6000823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015186820184015284920161007f565b601f909101601f19168101906001600160401b038211908210176102d157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101e957565b6001600160401b0381116102d157601f01601f191660200190565b9061033d575080511561032b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610370575b61034e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034656fe6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033a2646970667358221220fcb67ba218b766442ab8526b048c7c281856bbd40e0dabfef90f84bf829899d664736f6c63430008190033",
    "sourceMap": "118:268:100:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;;;;;;:::o;:::-;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;4022:46:84;;;2281:72:26;;:::i;:::-;1237:66;739:6:89;118:268:100;;;;;;;3515:20:26;118:268:100;;;966:10:25;118:268:100;;3515:20:26;118:268:100;4022:46:84;1237:66:26;118:268:100;;;;;3167:9:26;3163:62;;118:268:100;;;;3823:22:26;118:268:100;;;966:10:25;118:268:100;;3823:22:26;118:268:100;3163:62:26;118:268:100;;;3199:15:26;;;;118:268:100;;;;;;;:::o;:::-;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;118:268:100;4873:26:84;;4869:52;;4990:14;118:268:100;;;;;;;;5034:31:84;-1:-1:-1;5034:31:84;;118:268:100;4869:52:84;118:268:100;;;4908:13:84;;;;118:268:100;;-1:-1:-1;;118:268:100;;;;;4408:5:70;118:268:100;;10211:10:70;4408:5;:::i;:::-;118:268:100;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;3082:831:70;;;;;;;;118:268:100;;3082:831:70;;;;;;;;;;;;;;118:268:100;;;;;;-1:-1:-1;;118:268:100;;;;;;11280:13:70;118:268:100;;;;;:::i;:::-;;;11280:13:70;;;10695:219;;;;;;;;;10567:353;;11280:13;:21;:30;118:268:100;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;118:268:100;;;;;9239:383:69;;;;;;7972:9;9132:15;118:268:100;9239:383:69;;;;;;;;;118:268:100;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;;:::i;:::-;10695:219:70;;;;;;;;;10567:353;;118:268:100;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;9628:11:84;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;1575:245:75;;;;;;;9861:14:84;118:268:100;1575:245:75;;;;2281:72:26;;:::i;:::-;118:268:100;;2362:10:84;;9861:14;:::i;:::-;1883:75:75;;;;118:268:100;;;;;;1575:245:75;;-1:-1:-1;1575:245:75;118:268:100;1575:245:75;;118:268:100;;-1:-1:-1;;118:268:100;;;;;4408:5:70;118:268:100;;;;;:::i;:::-;12478:70:69;;:::i;:::-;118:268:100;;4408:5:70;;:::i;118:268:100:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;5766:446:77;;5707:6;5766:446;;;4254:1327;12478:70:69;;;:::i;:::-;4254:1327:77;;;;;;;;118:268:100;4254:1327:77;118:268:100;4254:1327:77;;;;;;;;-1:-1:-1;;;;4254:1327:77;;;;;;;;;;;118:268:100;;;4254:1327:77;;118:268:100;4254:1327:77;;;;;;;;;;;;;;;118:268:100;;;4254:1327:77;;;;;;;;;;;;;118:268:100;4254:1327:77;;5766:446;;-1:-1:-1;5766:446:77;118:268:100;5766:446:77;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;:::i;:::-;11083:13:70;118:268:100;;11083:13:70;10695:219;;;;;;;;;10567:353;;11083:13;:21;:26;;118:268:100;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;12829:25:84;118:268:100;;12807:10:84;:48;12803:111;;118:268:100;;12571:35:84;;;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;12571:35:84;118:268:100;;12571:49:84;12567:108;;1575:245:75;;;;;;;;3129:43:84;1575:245:75;-1:-1:-1;118:268:100;1575:245:75;;;;118:268:100;;3129:43:84;;;;;118:268:100;3129:43:84;;118:268:100;3129:43:84;;118:268:100;;;;;;1575:245:75;118:268:100;;;;3129:43:84;;;;;;;;118:268:100;-1:-1:-1;1883:75:75;;;118:268:100;3129:43:84;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;:::i;12567:108::-;118:268:100;;;12643:21:84;;;;12803:111;118:268:100;;;12878:25:84;;;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;6461:184:77;6402:6;6461:184;;;118:268:100;;;2614:66:77;118:268:100;;;;;;-1:-1:-1;;118:268:100;;;;;9831:339:69;;;;;;;;;;;;;;;;118:268:100;;;;;;;-1:-1:-1;;118:268:100;;;;;;8475:26:84;8490:10;8475:26;:::i;:::-;118:268:100;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;1237:66:26;118:268:100;;;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;9458:20:84;118:268:100;;;;;:::i;:::-;;;;;9458:14:84;118:268:100;;;;;;;9458:20:84;118:268:100;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;:::i;:::-;1575:245:75;;;;;;;;;;;2281:72:26;;:::i;:::-;2828:20:84;;118:268:100;;;;9458:14:84;118:268:100;;;;;;;2828:20:84;118:268:100;;;;;;;;;;;;;;1896:13:87;;;;118:268:100;1896:13:87;;;;;;;;;;;;;;-1:-1:-1;1896:13:87;;;118:268:100;;;1971:8:87;;;;:::i;:::-;1875:134;;;;;118:268:100;;;;;;;-1:-1:-1;118:268:100;;;;;;;1875:134:87;118:268:100;;;;1875:134:87;;;;;;;118:268:100;1875:134:87;;1991:8;;118:268:100;1981:8:87;;118:268:100;1875:134:87;;;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1875:134:87;;;;;;;;;118:268:100;-1:-1:-1;1871:261:87;;118:268:100;;2044:13:87;;;;;;;;;;;;;;;2037:53;2044:13;;;;;;;-1:-1:-1;2044:13:87;;;1871:261;118:268:100;;2037:53:87;;;;;;118:268:100;2037:53:87;;;;;118:268:100;;;;;;;;;;;;;;;;;;;;;2037:53:87;;118:268:100;;2037:53:87;;;;;;;;;-1:-1:-1;2037:53:87;;;1871:261;2037:61;;;2033:88;;1871:261;;;;;2212:5;1871:261;118:268:100;1871:261:87;;9861:14:84;1871:261:87;;2212:5;:::i;:::-;2859:20:84;;118:268:100;;;;9458:14:84;118:268:100;;;;;;;2859:20:84;:22;118:268:100;;2859:22:84;:::i;:::-;118:268:100;;9861:14:84;:::i;:::-;1883:75:75;;;;118:268:100;;;;;;;;;;;;2033:88:87;118:268:100;;2107:14:87;;;;2037:53;;;;;;-1:-1:-1;2037:53:87;;;;;;:::i;:::-;;;;;2044:13;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;1871:261;;;;;;;;;2212:5;1871:261;118:268:100;1871:261:87;;9861:14:84;1871:261:87;;2212:5;:::i;1875:134::-;;;;;;:::i;:::-;;;:::i;:::-;;;;1896:13;;;;;;;;;;;;;;:::i;:::-;;;;1575:245:75;;;-1:-1:-1;1575:245:75;;;118:268:100;;;-1:-1:-1;;118:268:100;;;;;12478:70:69;;:::i;:::-;6813:405;;;;;;;;;;118:268:100;;;;;;;-1:-1:-1;;118:268:100;;;;;;;365:12;118:268;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;118:268:100;6040:12:84;118:268:100;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;:::i;:::-;;;;;12829:25:84;118:268:100;;12807:10:84;:48;12803:111;;118:268:100;12571:35:84;118:268:100;;;;;;;12571:19:84;118:268:100;;;;;;;12571:35:84;118:268:100;;12571:49:84;12567:108;;1575:245:75;;;;;;;;;;;3372:11:84;;3368:36;;118:268:100;;-1:-1:-1;;118:268:100;;;;7335:55:84;118:268:100;;;3494:32:84;118:268:100;;;;;;;;;;;;;;;;3494:32:84;118:268:100;3540:19:84;;;;3536:49;;118:268:100;;;;;;;3737:32:84;118:268:100;;;;;;;;;;;;;;;;3737:32:84;118:268:100;3843:15:84;3839:82;;118:268:100;1883:75:75;;;;;118:268:100;;3839:82:84;3904:5;;;:::i;:::-;3839:82;;;;3536:49;118:268:100;;;3568:17:84;;;;3368:36;118:268:100;;;3392:12:84;;;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;11523:61:69;;118:268:100;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;;:::i;:::-;7807:26:84;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;7807:26:84;118:268:100;7859:26:84;;;;:::i;:::-;7904;;;;:::i;:::-;7949:25;;;;:::i;:::-;7990:13;-1:-1:-1;8005:15:84;;;;;;8327:26;;118:268:100;8327:26:84;118:268:100;8327:26:84;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;8327:26:84;118:268:100;:::i;:::-;;;;;;;;;:::i;8022:3:84:-;8059:56;:25;;118:268:100;;;;7335:55:84;118:268:100;;;;;;;8059:25:84;118:268:100;8085:29:84;:26;;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;8085:26:84;:29;:::i;:::-;118:268:100;;;;;;;;;;;;;;;;;;;;;;8059:56:84;118:268:100;8141:26:84;:45;118:268:100;8141:29:84;:26;;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;;;;;;8141:45:84;118:268:100;;;;8141:54:84;;118:268:100;8141:54:84;;;;;;;;;118:268:100;;;;;;;;8141:54:84;;;;;;;;;;;;;;-1:-1:-1;8141:54:84;;;8022:3;8129:66;;;;;:::i;:::-;118:268:100;8209:19:84;;;;:::i;:::-;118:268:100;8261:35:84;118:268:100;8261:29:84;:26;;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;8261:35:84;118:268:100;;8261:37:84;;;;118:268:100;8261:37:84;;;;;;;;118:268:100;8242:57:84;8261:37;7807:18;8261:37;-1:-1:-1;8261:37:84;;;8022:3;118:268:100;;8242:57:84;;;;:::i;:::-;118:268:100;;;;;;8242:57:84;118:268:100;7990:13:84;;8261:37;;;;;;;;;;;;;;:::i;:::-;;;;8141:54;;;;;;;;;;;;;;:::i;:::-;;;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;118:268:100;;;;;5343:26:84;;;5339:52;;5599:26;;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;5599:26:84;118:268:100;;5599:40:84;5595:74;;5680:41;:26;;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;5680:26:84;118:268:100;;;;;;;;;;;5680:41:84;118:268:100;5736:34:84;;-1:-1:-1;5736:34:84;;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;1575:245:75;;;;;;;;;;;118:268:100;6295:10:84;;;;:::i;:::-;118:268:100;6357:46:84;6379:24;6357:46;;:105;;;;118:268:100;6357:168:84;;;;118:268:100;6549:21:84;6545:86;;-1:-1:-1;118:268:100;6706:55:84;;6728:33;6706:55;;;6702:99;;118:268:100;;;;;;;;;:::i;:::-;6849:23:84;118:268:100;;6849:23:84;;;;;:::i;:::-;6887:8;;6883:289;;1883:75:75;;;118:268:100;;;;;;;;;:::i;6883:289:84:-;7090:72;118:268:100;7090:72:84;;;6702:99;;;:::i;:::-;;;6545:86;118:268:100;;;6593:27:84;;;;6357:168;6482:43;6504:21;6482:43;;6357:168;;:105;6407:55;6429:33;6407:55;;6357:105;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;9276:25:84;118:268:100;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;339:83:89;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;-1:-1:-1;10506:526:69;118:268:100;10506:526:69;;;;;;;;;-1:-1:-1;11051:12:69;10506:526;;11051:12;:::i;10506:526::-;;-1:-1:-1;10506:526:69;118:268:100;10506:526:69;;118:268:100;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;;;;;;:::o;:::-;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;4276:6:84;;;;:::i;:::-;118:268:100;;;;;;;;;;;;;;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;8479:183;;;;;;8681:8;;;:::i;8479:183::-;;-1:-1:-1;8479:183:69;118:268:100;8479:183:69;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;:::i;:::-;8837:64:24;118:268:100;;;;;;;;4301:16:24;118:268:100;;4726:16:24;;:34;;;;118:268:100;4805:1:24;4790:16;:50;;;;118:268:100;4855:13:24;:30;;;;118:268:100;4851:91:24;;;5055:1;4951:18;;;8837:64;118:268:100;;;;;;;;;4951:18:24;4979:67;;5055:1;:::i;:::-;5066:101;;118:268:100;5066:101:24;5100:23;8837:64;118:268:100;;;;;;;5100:23:24;118:268:100;;4805:1:24;118:268:100;;5142:14:24;;118:268:100;;5142:14:24;118:268:100;4979:67:24;5013:22;8837:64;118:268:100;;;;;;;;;5013:22:24;5055:1;:::i;4851:91::-;118:268:100;;;4908:23:24;;;;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:24;;4726:34;;;-1:-1:-1;4726:34:24;;118:268:100;;;;;-1:-1:-1;;118:268:100;;;;;;;;;;:::i;:::-;11885:237:69;;;-1:-1:-1;11885:237:69;118:268:100;11885:237:69;;;;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;-1:-1:-1;118:268:100;;-1:-1:-1;118:268:100;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;8724:394:84;8890:26;8724:394;118:268:100;8890:26:84;;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;8890:26:84;118:268:100;;8931:64:84;642:1:89;8931:64:84;;:99;;;;8724:394;8927:151;;9087:24;8724:394;:::o;8927:151::-;118:268:100;;9053:14:84;118:268:100;;9046:21:84;:::o;8931:99::-;8999:31;;;8931:99;;118:268:100;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;:::o;:::-;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;-1:-1:-1;118:268:100;;;-1:-1:-1;118:268:100;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;-1:-1:-1;118:268:100:o;:::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;-1:-1:-1;118:268:100;;;;:::o;:::-;;;:::o;12194:102:70:-;;;118:268:100;12194:102:70;12272:5;;:::i;:::-;118:268:100;;;4395:89:84;;;;;;4438:4;4395:89;;;118:268:100;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;4395:89:84;118:268:100;4384:101:84;118:268:100;;;;;4395:89:84;;;;;;;;:::i;:::-;4384:101;:::i;:::-;4495:23;;;;:::i;:::-;118:268:100;;4633:81:84;:35;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;4633:35:84;118:268:100;;;;;;;;;4633:81:84;4729:24;118:268:100;4729:24:84;;12194:102:70;:::o;118:268:100:-;;;;;;;;;;;4495:11:84;118:268:100;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1806:409:84;;;4156:4:70;1806:409:84;1982:10;5710:347:69;;1982:10:84;-1:-1:-1;5710:347:69;;;;6893:76:24;;:::i;:::-;;;:::i;:::-;1237:66:26;118:268:100;;;;;;4156:4:70;:::i;:::-;118:268:100;;;;1318:24:87;;:63;;;;1806:409:84;1314:114:87;;118:268:100;1437:25:87;;;118:268:100;;;;;;;;;1519:14:87;118:268:100;;;;;;;;1556:12:87;118:268:100;;;;;;;;;1806:409:84:o;1318:63:87:-;118:268:100;;;;1346:35:87;1318:63;;6191:790:70;6309:666;;;;;;739:6:89;6309:666:70;;;;;;;;6191:790::o;6309:666::-;;;;;;;6191:790::o;6309:666::-;;;;;;;2905:128:26;118:268:100;1237:66:26;118:268:100;;2966:61:26;;2905:128::o;2966:61::-;3001:15;118:268:100;;3001:15:26;;;;12460:232:84;118:268:100;;;;;12571:35:84;;;;118:268:100;;;;12571:19:84;118:268:100;;;;;;;12571:35:84;118:268:100;;12571:49:84;12567:108;;2281:72:26;;;;:::i;:::-;118:268:100;;9959:29:84;;118:268:100;9959:29:84;;;118:268:100;9959:29:84;;;;;;;;;118:268:100;;;;;;;;;;;;;;;;;9959:29:84;;;;;;;;;;118:268:100;9959:29:84;;;12460:232;118:268:100;;;;;10166:21:84;118:268:100;10174:12:84;118:268:100;;;;;10166:21:84;118:268:100;;;10162:141:84;;12460:232;10424:6;;;;;;:::i;10162:141::-;118:268:100;;;;;;;10221:41:84;;118:268:100;10221:41:84;;;118:268:100;10221:41:84;;9959:29;10221:41;;;:::i;:::-;;;;;;;;;;118:268:100;10221:41:84;;;10162:141;10217:75;;;;10162:141;;;;;;10217:75;9959:29;118:268:100;;10271:21:84;;;;10221:41;;;;;;-1:-1:-1;10221:41:84;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;9959:29;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;118:268:100;;;;;;;;;;;;;:::i;:::-;;;;;;;;;10250:11:84;118:268:100;;;;;;;;-1:-1:-1;118:268:100;;;-1:-1:-1;118:268:100;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6145:1089:69:-;6813:405;;;;;;;-1:-1:-1;6813:405:69;;;6145:1089::o;118:268:100:-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;11408:758:84;;11570:26;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11570:26:84;118:268:100;11613:13:84;-1:-1:-1;11636:427:84;11643:16;;;;;;11636:427;12076:17;;12072:45;;12127:26;:30;:26;118:268:100;;;;7807:18:84;118:268:100;;;;;;;12127:26:84;:30;:::i;12072:45::-;12102:15;118:268:100;;12102:15:84;;;;11636:427;11679:26;;;:29;:26;;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11679:29:84;118:268:100;;;;;;;;;;;;11679:38:84;11675:319;;11570:18;118:268:100;11636:427:84;;;;;11675:319;11912:26;;;;11880:76;118:268:100;11912:44:84;:26;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11912:26:84;11939:16;;;:::i;:::-;11912:44;;:::i;118:268:100:-;11880:29:84;:26;;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11880:76:84;11974:5;;;12172:150;118:268:100;;12273:40:84;;;;;;;;;;;;;;;;118:268:100;;12273:40:84;;;;;;12297:4;118:268:100;;;;;;;;;;:::i;:::-;12273:40:84;;-1:-1:-1;12273:40:84;;;;;118:268:100;;12172:150:84;:::o;2952:967:70:-;3082:831;;;4408:5;3082:831;;;;;;;;;;;;;;;;;;;4408:5;3082:831;;2952:967::o;:::-;3082:831;;;;;;;;739:6:89;3082:831:70;;;;;;;;;;;;;;2952:967::o;272:2:89:-;;;;;;;;;;:::o;10682:720:84:-;118:268:100;;;10810:20:84;10806:46;;10866:11;;10862:36;;11055:32;:25;;;118:268:100;;;;7335:55:84;118:268:100;;;;;;;11055:25:84;118:268:100;;;;;;;;;;;;11055:32:84;118:268:100;11055:37:84;11051:217;;10682:720;11353:42;:25;;:32;:25;118:268:100;;;;7335:55:84;118:268:100;;;;;;;11353:32:84;118:268:100;;;11353:42:84;:::i;:::-;118:268:100;;10682:720:84:o;11051:217::-;272:2:89;11112:26:84;;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11112:26:84;118:268:100;11112:68:84;;11108:97;;11219:26;11353:25;11219:26;:38;11353:42;11219:26;;11353:32;11219:26;118:268:100;;;;7807:18:84;118:268:100;;;;;;;11219:26:84;:38;:::i;:::-;11051:217;;;;;;;11108:97;11189:16;118:268:100;;11189:16:84;;;;472:95:89;118:268:100;;;;;;:::i;:::-;472:95:89;118:268:100;;472:95:89;;;;;:::o;:::-;118:268:100;;;;;;:::i;:::-;472:95:89;118:268:100;;472:95:89;;;;;:::o;2231:962:87:-;;;;;;2473:15;2462:26;;2458:52;;2980:57;2570:222;3065:66;472:95:89;2980:57:87;472:95:89;2854:82:87;472:95:89;;:::i;:::-;118:268:100;2854:82:87;118:268:100;;;;;;2641:35:87;472:95:89;;:::i;:::-;118:268:100;;;;;2694:22:87;118:268:100;;;472:95:89;2570:222:87;;;118:268:100;;;472:95:89;;;118:268:100;;;;472:95:89;;;118:268:100;;;;2734:13:87;472:95:89;;;118:268:100;2773:4:87;472:95:89;;;118:268:100;;;;472:95:89;;;;;2570:222:87;;;;;;;;;;;;;:::i;:::-;118:268:100;2547:255:87;;118:268:100;;;2854:82:87;;;;;;;;472:95:89;;;;;;;339:83;118:268:100;;472:95:89;;;;;;;;;;118:268:100;472:95:89;;;118:268:100;472:95:89;;;118:268:100;472:95:89;;;2854:82:87;;;;;;;;;:::i;:::-;118:268:100;2844:93:87;;118:268:100;;2980:57:87;;;;;;;;472:95:89;;;;;;;;;;118:268:100;472:95:89;;;118:268:100;472:95:89;;;2980:57:87;;;;;;;;;:::i;:::-;118:268:100;2970:68:87;;3093:11;;;;:::i;:::-;3119;118:268:100;3119:11:87;;118:268:100;3106:11:87;;118:268:100;3065:66:87;;:::i;:::-;118:268:100;;;;;;3145:14:87;3141:45;;2231:962::o;3141:45::-;3168:18;118:268:100;;3168:18:87;;;;2458:52;2497:13;118:268:100;;2497:13:87;;;;7084:141:24;118:268:100;8837:64:24;118:268:100;;;;7150:18:24;7146:73;;7084:141::o;7146:73::-;7191:17;118:268:100;;7191:17:24;;;;6803:260:61;;7021:8;6803:260;;6967:25;6803:260;6967:25;:::i;:::-;7021:8;;;;;:::i;5140:1530::-;;;6199:66;6186:79;;6182:164;;118:268:100;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6457:24:61;;;;;;;;;;;;;;118:268:100;;;6495:20:61;6491:113;;6614:49;;5140:1530;:::o;6491:113::-;6531:62;;;6457:24;6531:62;;:::o;6182:164::-;6281:54;;;6297:1;6281:54;6301:30;6281:54;;:::o;118:268:100:-;;-1:-1:-1;118:268:100;;;:::o;:::-;;:::i;7196:532:61:-;118:268:100;;;:::i;:::-;7282:29:61;;;7327:7;;:::o;7278:444::-;118:268:100;;;:::i;:::-;7387:29:61;7378:38;;7387:29;;7439:23;118:268:100;;7439:23:61;;;;7374:348;118:268:100;;;:::i;:::-;7492:35:61;7483:44;;7492:35;;118:268:100;;7550:46:61;;;;;;118:268:100;;;;;7550:46:61;7479:243;118:268:100;;7626:30:61;118:268:100;;:::i;:::-;7617:39:61;7613:109;;7479:243;7196:532::o;7613:109::-;118:268:100;;7679:32:61;;;;;;118:268:100;;;;;;7550:46:61",
    "linkReferences": {},
    "immutableReferences": {
      "58898": [
        {
          "start": 2059,
          "length": 32
        },
        {
          "start": 2842,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "SIGNED_DEPOSIT_TYPEHASH()": "e4af8b22",
    "cancelOwnershipHandover()": "54d1f13d",
    "changeImplementation(address)": "17a68dd8",
    "changeImplementationForVault(address,address)": "aa0a050c",
    "completeOwnershipHandover(address)": "f04e283e",
    "delegationSupervisor()": "df670448",
    "deployVault(address,string,string,uint8)": "f0edf6aa",
    "deposit(address,uint256)": "47e7ef24",
    "depositWithSignature(address,address,uint256,uint256,(uint8,bytes32,bytes32),(uint8,bytes32,bytes32))": "6ff09141",
    "getDeposits(address)": "94f649dd",
    "getUserNonce(address)": "6834e3a8",
    "getVaults()": "44d00f82",
    "grantRoles(address,uint256)": "1c10893f",
    "hasAllRoles(address,uint256)": "1cd64df4",
    "hasAnyRole(address,uint256)": "514e62fc",
    "implementation()": "5c60da1b",
    "implementation(address)": "6b880718",
    "initialize(address,address,address,address)": "f8c8765e",
    "limiter()": "74b87f67",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "pause(bool)": "02329a29",
    "paused()": "5c975abb",
    "proxiableUUID()": "52d1902d",
    "redeemShares(address,address,uint256)": "51ffb74a",
    "removeShares(address,address,uint256)": "8c80d4e5",
    "renounceOwnership()": "715018a6",
    "renounceRoles(uint256)": "183a4f6e",
    "requestOwnershipHandover()": "25692962",
    "revokeRoles(address,uint256)": "4a4ee7b1",
    "rolesOf(address)": "2de94807",
    "runAdminOperation(address,bytes)": "c1f09e30",
    "setLimiter(address)": "7a29084c",
    "transferOwnership(address)": "f2fde38b",
    "upgradeToAndCall(address,bytes)": "4f1ef286"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CrossedDepositLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ECDSAInvalidSignature\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"ECDSAInvalidSignatureLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"ECDSAInvalidSignatureS\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredSign\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultAdminFunction\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxStakerVault\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotDelegationSupervisor\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotEnoughShares\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnauthorizedCallContext\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpgradeFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"VaultNotAChildVault\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"VaultNotFound\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroShares\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"NewVault\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"RolesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"UpgradedAllVaults\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"UpgradedVault\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"SIGNED_DEPOSIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newVaultImpl\",\"type\":\"address\"}],\"name\":\"changeImplementation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"newVaultImpl\",\"type\":\"address\"}],\"name\":\"changeImplementationForVault\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"delegationSupervisor\",\"outputs\":[{\"internalType\":\"contract IDelegationSupervisor\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"depositToken\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"enum IVault.AssetType\",\"name\":\"assetType\",\"type\":\"uint8\"}],\"name\":\"deployVault\",\"outputs\":[{\"internalType\":\"contract IVault\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"permit\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"vaultAllowance\",\"type\":\"tuple\"}],\"name\":\"depositWithSignature\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"getDeposits\",\"outputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IERC20[]\",\"name\":\"tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"assets\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getUserNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getVaults\",\"outputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"grantRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAllRoles\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAnyRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_vaultImpl\",\"type\":\"address\"},{\"internalType\":\"contract ILimiter\",\"name\":\"_limiter\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_manager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"limiter\",\"outputs\":[{\"internalType\":\"contract ILimiter\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proxiableUUID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"redeemShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"removeShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"renounceRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"revokeRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rolesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"fn\",\"type\":\"bytes\"}],\"name\":\"runAdminOperation\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ILimiter\",\"name\":\"limiter\",\"type\":\"address\"}],\"name\":\"setLimiter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"ECDSAInvalidSignature()\":[{\"details\":\"The signature derives the `address(0)`.\"}],\"ECDSAInvalidSignatureLength(uint256)\":[{\"details\":\"The signature has an invalid length.\"}],\"ECDSAInvalidSignatureS(bytes32)\":[{\"details\":\"The signature has an S value that is in the upper half order.\"}],\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}],\"UnauthorizedCallContext()\":[{\"details\":\"The call is from an unauthorized call context.\"}],\"UpgradeFailed()\":[{\"details\":\"The upgrade failed.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"},\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"RolesUpdated(address,uint256)\":{\"details\":\"The `user`'s roles is updated to `roles`. Each bit of `roles` represents whether the role is set.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the proxy's implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"grantRoles(address,uint256)\":{\"details\":\"Allows the owner to grant `user` `roles`. If the `user` already has a role, then it will be an no-op for the role.\"},\"hasAllRoles(address,uint256)\":{\"details\":\"Returns whether `user` has all of `roles`.\"},\"hasAnyRole(address,uint256)\":{\"details\":\"Returns whether `user` has any of `roles`.\"},\"implementation()\":{\"details\":\"Must return an address that can be used as a delegate call target. {UpgradeableBeacon} will check that this address is a contract.\"},\"implementation(address)\":{\"details\":\"Doesn't revert if the vault is not set yet because during `deployVault` theres a period before we set it to the default flag where the vault needs an impl to be initialized against\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"proxiableUUID()\":{\"details\":\"Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"renounceRoles(uint256)\":{\"details\":\"Allow the caller to remove their own roles. If the caller does not have a role, then it will be an no-op for the role.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"revokeRoles(address,uint256)\":{\"details\":\"Allows the owner to remove `user` `roles`. If the `user` does not have a role, then it will be an no-op for the role.\"},\"rolesOf(address)\":{\"details\":\"Returns the roles of `user`.\"},\"setLimiter(address)\":{\"details\":\"Allow for it to be set to address(0) in the future to disable the global limit\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/harnesses/VaultSupervisorHarness.sol\":\"VaultSupervisorHarness\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007\",\"dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78\",\"dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/proxy/Clones.sol\":{\"keccak256\":\"0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b\",\"dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964\",\"dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/UUPSUpgradeable.sol\":{\"keccak256\":\"0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83\",\"dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC\"]},\"src/VaultSupervisor.sol\":{\"keccak256\":\"0xf30a10ca4ed9997d6b6529d5e034a41ded745ee48d1ed045893bd8aa9d59a07d\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://c5e99ba0b4c3b0732ab0ecf1934f029d373c3e9759cba4a43534d1e5a560fe64\",\"dweb:/ipfs/QmZgY2h2zutSwvyhrq6TuHqCmXpeFEwPhqVDPihhPCdFFG\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/VaultSupervisorLib.sol\":{\"keccak256\":\"0x7ead0d97e47b1dcfdff4d3818022e6f7b6025ed0b01a90c8bbaa8a74e20f1d20\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8537989797f2c023f36e783681d7d3c9c54824227ee398e66d2742bbc01239e4\",\"dweb:/ipfs/QmRuvdqXFEtLoyuCFEBzAwkKVT3LX5KT6hs2QamYn1gq9S\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]},\"test/harnesses/VaultSupervisorHarness.sol\":{\"keccak256\":\"0xa5adbcd2e3a87be2b262599e06039eb2391f70b148bf29189449a586e4bc5674\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://b94f1f45950a1ec01c5cf054319b6a1f8a2e238ab165d2dd776a1c5711e8a7ef\",\"dweb:/ipfs/QmV6qC7EpS7MnhGF4eRBgDAinrPoX9LTvNT1J1gKEyaQWN\"]}},\"version\":1}",
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
          "name": "AlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "CrossedDepositLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ECDSAInvalidSignature"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureLength"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureS"
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
          "name": "ExpiredSign"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidVaultAdminFunction"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MaxStakerVault"
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
          "name": "NotDelegationSupervisor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotEnoughShares"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PermitFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Reentrancy"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnauthorizedCallContext"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UpgradeFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "VaultNotAChildVault"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "VaultNotFound"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroShares"
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
              "name": "vault",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "NewVault",
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
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RolesUpdated",
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
              "name": "implementation",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Upgraded",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "UpgradedAllVaults",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "vault",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "UpgradedVault",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "SIGNED_DEPOSIT_TYPEHASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
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
              "name": "newVaultImpl",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "changeImplementation"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "newVaultImpl",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "changeImplementationForVault"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "delegationSupervisor",
          "outputs": [
            {
              "internalType": "contract IDelegationSupervisor",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "depositToken",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "enum IVault.AssetType",
              "name": "assetType",
              "type": "uint8"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deployVault",
          "outputs": [
            {
              "internalType": "contract IVault",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IVault",
              "name": "vault",
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
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "user",
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
              "internalType": "struct IVaultSupervisor.Signature",
              "name": "permit",
              "type": "tuple",
              "components": [
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
              ]
            },
            {
              "internalType": "struct IVaultSupervisor.Signature",
              "name": "vaultAllowance",
              "type": "tuple",
              "components": [
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
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "depositWithSignature",
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
              "name": "staker",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeposits",
          "outputs": [
            {
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            },
            {
              "internalType": "contract IERC20[]",
              "name": "tokens",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "assets",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "shares",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getUserNonce",
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
          "name": "getVaults",
          "outputs": [
            {
              "internalType": "contract IVault[]",
              "name": "",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "grantRoles"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasAllRoles",
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
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasAnyRole",
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
          "name": "implementation",
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
              "name": "vault",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "implementation",
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
              "name": "_delegationSupervisor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_vaultImpl",
              "type": "address"
            },
            {
              "internalType": "contract ILimiter",
              "name": "_limiter",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_manager",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "limiter",
          "outputs": [
            {
              "internalType": "contract ILimiter",
              "name": "",
              "type": "address"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "staker",
              "type": "address"
            },
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemShares"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "staker",
              "type": "address"
            },
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeShares"
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "renounceRoles"
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
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "revokeRoles"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "rolesOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "roles",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "fn",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "runAdminOperation",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract ILimiter",
              "name": "limiter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setLimiter"
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
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "upgradeToAndCall"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "cancelOwnershipHandover()": {
            "details": "Cancels the two-step ownership handover to the caller, if any."
          },
          "completeOwnershipHandover(address)": {
            "details": "Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`."
          },
          "grantRoles(address,uint256)": {
            "details": "Allows the owner to grant `user` `roles`. If the `user` already has a role, then it will be an no-op for the role."
          },
          "hasAllRoles(address,uint256)": {
            "details": "Returns whether `user` has all of `roles`."
          },
          "hasAnyRole(address,uint256)": {
            "details": "Returns whether `user` has any of `roles`."
          },
          "implementation()": {
            "details": "Must return an address that can be used as a delegate call target. {UpgradeableBeacon} will check that this address is a contract."
          },
          "implementation(address)": {
            "details": "Doesn't revert if the vault is not set yet because during `deployVault` theres a period before we set it to the default flag where the vault needs an impl to be initialized against"
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
          "proxiableUUID()": {
            "details": "Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract."
          },
          "renounceOwnership()": {
            "details": "Allows the owner to renounce their ownership."
          },
          "renounceRoles(uint256)": {
            "details": "Allow the caller to remove their own roles. If the caller does not have a role, then it will be an no-op for the role."
          },
          "requestOwnershipHandover()": {
            "details": "Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default."
          },
          "revokeRoles(address,uint256)": {
            "details": "Allows the owner to remove `user` `roles`. If the `user` does not have a role, then it will be an no-op for the role."
          },
          "rolesOf(address)": {
            "details": "Returns the roles of `user`."
          },
          "setLimiter(address)": {
            "details": "Allow for it to be set to address(0) in the future to disable the global limit"
          },
          "transferOwnership(address)": {
            "details": "Allows the owner to transfer the ownership to `newOwner`."
          },
          "upgradeToAndCall(address,bytes)": {
            "details": "Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`."
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
        "test/harnesses/VaultSupervisorHarness.sol": "VaultSupervisorHarness"
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
      "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol": {
        "keccak256": "0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327",
        "urls": [
          "bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78",
          "dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
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
      "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol": {
        "keccak256": "0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92",
        "urls": [
          "bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a",
          "dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/Clones.sol": {
        "keccak256": "0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155",
        "urls": [
          "bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b",
          "dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol": {
        "keccak256": "0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65",
        "urls": [
          "bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a",
          "dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/Proxy.sol": {
        "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
        "urls": [
          "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
          "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol": {
        "keccak256": "0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c",
        "urls": [
          "bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964",
          "dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
        "urls": [
          "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
          "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
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
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
        "urls": [
          "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
          "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
        "urls": [
          "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
          "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
        "urls": [
          "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
          "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf",
        "urls": [
          "bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c",
          "dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol": {
        "keccak256": "0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435",
        "urls": [
          "bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c",
          "dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
        "urls": [
          "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
          "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
        "urls": [
          "bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
          "dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
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
      "node_modules/solady/src/auth/OwnableRoles.sol": {
        "keccak256": "0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3",
        "urls": [
          "bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c",
          "dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L"
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
      "node_modules/solady/src/utils/UUPSUpgradeable.sol": {
        "keccak256": "0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f",
        "urls": [
          "bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83",
          "dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC"
        ],
        "license": "MIT"
      },
      "src/VaultSupervisor.sol": {
        "keccak256": "0xf30a10ca4ed9997d6b6529d5e034a41ded745ee48d1ed045893bd8aa9d59a07d",
        "urls": [
          "bzz-raw://c5e99ba0b4c3b0732ab0ecf1934f029d373c3e9759cba4a43534d1e5a560fe64",
          "dweb:/ipfs/QmZgY2h2zutSwvyhrq6TuHqCmXpeFEwPhqVDPihhPCdFFG"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/DelegationSupervisorLib.sol": {
        "keccak256": "0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc",
        "urls": [
          "bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1",
          "dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Staker.sol": {
        "keccak256": "0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33",
        "urls": [
          "bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f",
          "dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/VaultSupervisorLib.sol": {
        "keccak256": "0x7ead0d97e47b1dcfdff4d3818022e6f7b6025ed0b01a90c8bbaa8a74e20f1d20",
        "urls": [
          "bzz-raw://8537989797f2c023f36e783681d7d3c9c54824227ee398e66d2742bbc01239e4",
          "dweb:/ipfs/QmRuvdqXFEtLoyuCFEBzAwkKVT3LX5KT6hs2QamYn1gq9S"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Withdraw.sol": {
        "keccak256": "0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc",
        "urls": [
          "bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653",
          "dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Constants.sol": {
        "keccak256": "0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86",
        "urls": [
          "bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c",
          "dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG"
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
      "src/interfaces/Events.sol": {
        "keccak256": "0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178",
        "urls": [
          "bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21",
          "dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IDelegationSupervisor.sol": {
        "keccak256": "0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a",
        "urls": [
          "bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79",
          "dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh"
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
      },
      "test/harnesses/VaultSupervisorHarness.sol": {
        "keccak256": "0xa5adbcd2e3a87be2b262599e06039eb2391f70b148bf29189449a586e4bc5674",
        "urls": [
          "bzz-raw://b94f1f45950a1ec01c5cf054319b6a1f8a2e238ab165d2dd776a1c5711e8a7ef",
          "dweb:/ipfs/QmV6qC7EpS7MnhGF4eRBgDAinrPoX9LTvNT1J1gKEyaQWN"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/harnesses/VaultSupervisorHarness.sol",
    "id": 70185,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "BeaconProxy": [
        49881
      ],
      "Clones": [
        49446
      ],
      "Constants": [
        62945
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "DelegationSupervisorLib": [
        62416
      ],
      "ECDSA": [
        52332
      ],
      "EIP712Upgradeable": [
        47443
      ],
      "ExpiredSign": [
        62997
      ],
      "FinishedWithdrawal": [
        63031
      ],
      "IBeacon": [
        49891
      ],
      "IDelegationSupervisor": [
        63097
      ],
      "IERC20": [
        50790
      ],
      "IERC20Permit": [
        51006
      ],
      "IERC4626": [
        49199
      ],
      "ILimiter": [
        63120
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
      "NewVault": [
        63035
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
      "OwnableRoles": [
        55650
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
      "Staker": [
        62431
      ],
      "StartedWithdrawal": [
        63017
      ],
      "TokenNotEnabled": [
        62987
      ],
      "UUPSUpgradeable": [
        58965
      ],
      "UnsupportedAsset": [
        63003
      ],
      "VaultNotAChildVault": [
        62969
      ],
      "VaultNotFound": [
        62975
      ],
      "VaultSupervisor": [
        62327
      ],
      "VaultSupervisorHarness": [
        70184
      ],
      "VaultSupervisorLib": [
        62713
      ],
      "Withdraw": [
        62913
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
    "src": "51:336:100",
    "nodes": [
      {
        "id": 70158,
        "nodeType": "PragmaDirective",
        "src": "51:24:100",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 70159,
        "nodeType": "ImportDirective",
        "src": "77:39:100",
        "nodes": [],
        "absolutePath": "src/VaultSupervisor.sol",
        "file": "../../src/VaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 70185,
        "sourceUnit": 62328,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 70184,
        "nodeType": "ContractDefinition",
        "src": "118:268:100",
        "nodes": [
          {
            "id": 70165,
            "nodeType": "UsingForDirective",
            "src": "175:56:100",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 70162,
              "name": "VaultSupervisorLib",
              "nameLocations": [
                "181:18:100"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62713,
              "src": "181:18:100"
            },
            "typeName": {
              "id": 70164,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 70163,
                "name": "VaultSupervisorLib.Storage",
                "nameLocations": [
                  "204:18:100",
                  "223:7:100"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62483,
                "src": "204:26:100"
              },
              "referencedDeclaration": 62483,
              "src": "204:26:100",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                "typeString": "struct VaultSupervisorLib.Storage"
              }
            }
          },
          {
            "id": 70183,
            "nodeType": "FunctionDefinition",
            "src": "237:147:100",
            "nodes": [],
            "body": {
              "id": 70182,
              "nodeType": "Block",
              "src": "289:95:100",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    70175
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 70175,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "334:4:100",
                      "nodeType": "VariableDeclaration",
                      "scope": 70182,
                      "src": "299:39:100",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 70174,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 70173,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "299:18:100",
                            "318:7:100"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "299:26:100"
                        },
                        "referencedDeclaration": 62483,
                        "src": "299:26:100",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 70178,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 70176,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "341:5:100",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 70177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "341:7:100",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "299:49:100"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 70179,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 70175,
                      "src": "365:4:100",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                      }
                    },
                    "id": 70180,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "370:7:100",
                    "memberName": "limiter",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62482,
                    "src": "365:12:100",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "functionReturnParameters": 70170,
                  "id": 70181,
                  "nodeType": "Return",
                  "src": "358:19:100"
                }
              ]
            },
            "functionSelector": "74b87f67",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "limiter",
            "nameLocation": "246:7:100",
            "parameters": {
              "id": 70166,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:2:100"
            },
            "returnParameters": {
              "id": 70170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 70169,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 70183,
                  "src": "279:8:100",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ILimiter_$63120",
                    "typeString": "contract ILimiter"
                  },
                  "typeName": {
                    "id": 70168,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 70167,
                      "name": "ILimiter",
                      "nameLocations": [
                        "279:8:100"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63120,
                      "src": "279:8:100"
                    },
                    "referencedDeclaration": 63120,
                    "src": "279:8:100",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "278:10:100"
            },
            "scope": 70184,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 70160,
              "name": "VaultSupervisor",
              "nameLocations": [
                "153:15:100"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62327,
              "src": "153:15:100"
            },
            "id": 70161,
            "nodeType": "InheritanceSpecifier",
            "src": "153:15:100"
          }
        ],
        "canonicalName": "VaultSupervisorHarness",
        "contractDependencies": [
          49881
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          70184,
          62327,
          49891,
          63404,
          58965,
          47099,
          46923,
          58542,
          55650,
          46877,
          54123
        ],
        "name": "VaultSupervisorHarness",
        "nameLocation": "127:22:100",
        "scope": 70185,
        "usedErrors": [
          46640,
          46643,
          46962,
          46965,
          51995,
          52000,
          52005,
          53935,
          53938,
          53941,
          53944,
          58524,
          58882,
          58885,
          62953,
          62965,
          62967,
          62969,
          62971,
          62975,
          62977,
          62979,
          62995,
          62997,
          62999,
          63001
        ],
        "usedEvents": [
          46648,
          46954,
          46959,
          53951,
          53956,
          53961,
          54137,
          58903,
          62322,
          62326,
          63035
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 100
} as const;