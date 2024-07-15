export const VaultSupervisor = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
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
    "object": "0x60a0806040523460c857306080527ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c1660b957506001600160401b036002600160401b0319828216016075575b604051613ba490816100ce82396080518181816107fb0152610b0a0152f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a13880806056565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806302329a291461023757806317a68dd814610232578063183a4f6e1461022d5780631c10893f146102285780631cd64df414610223578063256929621461021e5780632de948071461021957806344d00f821461021457806347e7ef241461020f5780634a4ee7b11461020a5780634f1ef28614610205578063514e62fc1461020057806351ffb74a146101fb57806352d1902d146101f657806354d1f13d146101f15780635c60da1b146101ec5780635c975abb146101e75780636834e3a8146101e25780636b880718146101dd5780636ff09141146101d8578063715018a6146101d35780637a29084c146101ce5780638c80d4e5146101c95780638da5cb5b146101c457806394f649dd146101bf578063aa0a050c146101ba578063c1f09e30146101b5578063df670448146101b0578063e4af8b22146101ab578063f04e283e146101a6578063f0edf6aa146101a1578063f2fde38b1461019c578063f8c8765e146101975763fee81cf41461019257600080fd5b6120dc565b611ec4565b611e84565b611deb565b611c71565b611c36565b611be3565b611a1d565b611855565b611492565b61137c565b6111b2565b611129565b6110c7565b610d10565b610c8b565b610c1b565b610bd9565b610b9f565b610b58565b610af6565b61095f565b6108ee565b6107bf565b610765565b610701565b61063a565b6105b2565b610563565b610512565b6104ac565b610492565b6103b7565b61024b565b8015150361024657565b600080fd5b34610246576020600319360112610246576004356102688161023c565b61027061283b565b156102f35761027d61288f565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561036f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361024657565b346102465760206003193601126102465773ffffffffffffffffffffffffffffffffffffffff6004356103e981610399565b6103f1612857565b168015610468577fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557f2768c62492a0ab17bb4fd74f18e51a421e2a8e30c0d05ec389cd5609e91b4d5e600080a2005b60046040517fd92e233d000000000000000000000000000000000000000000000000000000008152fd5b6020600319360112610246576104aa60043533612f42565b005b6040600319360112610246576004356104c481610399565b6104cc612857565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b3461024657604060031936011261024657602061054e60043561053481610399565b602435918291638b78c6d8600c526000526020600c205490565b1614604051908152f35b600091031261024657565b6000806003193601126105af5763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b80fd5b346102465760206003193601126102465760206105e86004356105d481610399565b638b78c6d8600c526000526020600c205490565b604051908152f35b90815180825260208080930193019160005b828110610610575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610602565b3461024657600060031936011261024657604051807fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491049182548082526020809201936000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b8282106106d4576106d0856106bc81890382611d29565b6040519182916020835260208301906105f0565b0390f35b835473ffffffffffffffffffffffffffffffffffffffff16865294850194600193840193909101906106a5565b346102465760406003193601126102465760043561071e81610399565b68929eee149b4bd21268308154146107575761074b60209230835561074161288f565b60243590336128e4565b90389055604051908152f35b63ab143c066000526004601cfd5b6040600319360112610246576104aa60043561078081610399565b610788612857565b60243590612f42565b9181601f840112156102465782359167ffffffffffffffff8311610246576020838186019501011161024657565b6040600319360112610246576004356107d781610399565b60243567ffffffffffffffff8111610246576107f7903690600401610791565b91307f0000000000000000000000000000000000000000000000000000000000000000146108e05773ffffffffffffffffffffffffffffffffffffffff9061083d612857565b16916352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9081602060016004601d885afa51036108d2578084916000958694817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8780a2556108b1578280f35b806040519485378338925af4156108c9578181808280f35b903d90823e3d90fd5b6355299b496001526004601dfd5b639f03a0266000526004601cfd5b3461024657604060031936011261024657602060043561090d81610399565b61092860243591638b78c6d8600c526000526020600c205490565b161515604051908152f35b60031960609101126102465760043561094b81610399565b9060243561095881610399565b9060443590565b346102465761096d36610933565b73ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610acc57821692826109fa8573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa25768929eee149b4bd21268933085541461075757602092600060649230885560405196879586947fba08765200000000000000000000000000000000000000000000000000000000865260048601521660248401523060448401525af18015610a9d57610a6e575b50389055005b610a8f9060203d602011610a96575b610a878183611d29565b81019061217c565b5038610a68565b503d610a7d565b61218b565b60046040517fb13b4eea000000000000000000000000000000000000000000000000000000008152fd5b60046040517fd04f8cc5000000000000000000000000000000000000000000000000000000008152fd5b3461024657600060031936011261024657307f0000000000000000000000000000000000000000000000000000000000000000036108e05760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b6000806003193601126105af5763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b34610246576000600319360112610246576020610bbb33612197565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461024657600060031936011261024657602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b34610246576020600319360112610246576020610c82600435610c3d81610399565b73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b54604051908152f35b34610246576020600319360112610246576020610bbb600435610cad81610399565b612197565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c606091011261024657608490565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1c60609101126102465760e490565b3461024657610140600319360112610246576004803590610d3082610399565b60243590610d3d82610399565b6044359260643592610d4e36610cb2565b610d5736610ce1565b68929eee149b4bd2126895308754146110ba57308755610d7561288f565b610dbe8473ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b549273ffffffffffffffffffffffffffffffffffffffff96878716916040988951917f38d52e0f0000000000000000000000000000000000000000000000000000000090818452602093848187818a5afa8015610a9d57849160009161109d575b501690610e2b81612bac565b823b15610246578f92868f808f946000968c8f928f9a93610ec6948b97519c8d9b8c9a8b997fd505accf000000000000000000000000000000000000000000000000000000008b528801359701359589019360ff929897969360c0969260e087019a73ffffffffffffffffffffffffffffffffffffffff80921688521660208701526040860152606085015216608083015260a08201520152565b03925af19081611084575b50611069578a5190815282818581885afa918215610a9d57610f55928a87928e879560009461103a575b50518096819582947fdd62ed3e0000000000000000000000000000000000000000000000000000000084528b840190602090939293604083019473ffffffffffffffffffffffffffffffffffffffff809216845216910152565b0392165afa908115610a9d578c9260009261101d575b505010610ff6575092849289610f8a936106d09b97610fe49997613227565b610fd38173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b610fdd815461226d565b90556128e4565b38909255519081529081906020820190565b87517fb78cb0dd000000000000000000000000000000000000000000000000000000008152fd5b6110339250803d10610a9657610a878183611d29565b3880610f6b565b61105b919450863d8811611062575b6110538183611d29565b810190612366565b9238610efb565b503d611049565b5050505092849289610f8a936106d09b97610fe49997613227565b8061109161109792611cf4565b80610558565b38610ed1565b6110b49150863d8811611062576110538183611d29565b38610e1f565b8563ab143c06600052601cfd5b6000806003193601126105af576110dc612857565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b346102465760206003193601126102465760043561114681610399565b61114e61283b565b73ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910791167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055600080f35b34610246576111c036610933565b9173ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610acc578261124d81831673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa25768929eee149b4bd212689230845414610757573084558415611352578216936000948086527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100806020526112cb84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549182841161132857875260205281810361130984604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5514611318575b505038905580f35b61132191612cd0565b3880611310565b60046040517ff15ed214000000000000000000000000000000000000000000000000000000008152fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b346102465760006003193601126102465760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b90815180825260208080930193019160005b8281106113ef575050505090565b8351855293810193928101926001016113e1565b929061141b90959492956080855260808501906105f0565b60209084810360208601526020808851928381520197019160005b828110611468575050505084611457918461146596970360408601526113cf565b9160608184039101526113cf565b90565b835173ffffffffffffffffffffffffffffffffffffffff1689529781019792810192600101611436565b346102465760208060031936011261024657600480356114b181610399565b6114fa8173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b5490611505826122b7565b9261150f836122b7565b92611519816122b7565b9560005b8281106115885787876106d08861157b6115768a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612113565b9260405194859485611403565b61166d6115d48673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b611649611629846116248a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612335565b905473ffffffffffffffffffffffffffffffffffffffff9160031b1c1690565b73ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54906116db6116c2611629836116248a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff1690565b604084815180937f07a2d13a0000000000000000000000000000000000000000000000000000000082528180611718898d83019190602083019252565b03915afa938415610a9d5787948693600091611838575b5061173a858d612352565b52611745848b612352565b526117996116c2611629856116248c73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9051938480927f38d52e0f0000000000000000000000000000000000000000000000000000000082525afa8015610a9d5773ffffffffffffffffffffffffffffffffffffffff6118159160019460009161181b575b50166117fa838c612352565b9073ffffffffffffffffffffffffffffffffffffffff169052565b0161151d565b6118329150863d8811611062576110538183611d29565b386117ee565b61184f9150843d8611610a9657610a878183611d29565b3861172f565b346102465760406003193601126102465760043561187281610399565b6024359061187f82610399565b611887612857565b73ffffffffffffffffffffffffffffffffffffffff9081831692831561046857826118f18373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa257611985906119458373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b16907f928c1491037173ffa6782c693f229e11dbb934cb28daf9e2d1fca4b5131ffbf7600080a3005b919082519283825260005b8481106119f85750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016119b9565b9060206114659281815201906119ae565b3461024657604060031936011261024657600435611a3a81610399565b60243567ffffffffffffffff811161024657611a5a903690600401610791565b611a6261283b565b68929eee149b4bd212689230845414610757573084557fffffffff00000000000000000000000000000000000000000000000000000000611aa3838561237b565b16917f27ea6f2b0000000000000000000000000000000000000000000000000000000083148015611bba575b8015611b91575b15611b6757600073ffffffffffffffffffffffffffffffffffffffff81957ff2fde38b00000000000000000000000000000000000000000000000000000000839614611b5a575b611b2c604051809581936123bf565b0393165af190611b3a6123cd565b9115611b53573890556040519081906106d09082611a0c565b5060208101fd5b611b62612857565b611b1d565b60046040517fc55dde3d000000000000000000000000000000000000000000000000000000008152fd5b507f02329a29000000000000000000000000000000000000000000000000000000008314611ad6565b507ff2fde38b000000000000000000000000000000000000000000000000000000008314611acf565b3461024657600060031936011261024657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491065416604051908152f35b346102465760006003193601126102465760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b602060031936011261024657600435611c8981610399565b611c91612857565b63389a75e1600c52806000526020600c209081544211611cb75760006104aa9255612bba565b636f5e88186000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111611d0857604052565b611cc5565b6040810190811067ffffffffffffffff821117611d0857604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117611d0857604052565b67ffffffffffffffff8111611d0857601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561024657803590611dbb82611d6a565b92611dc96040519485611d29565b8284526020838301011161024657816000926020809301838601378301015290565b3461024657608060031936011261024657600435611e0881610399565b67ffffffffffffffff9060243582811161024657611e2a903690600401611da4565b9160443590811161024657611e43903690600401611da4565b606435906005821015610246576106d093611e5d936123fd565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b602060031936011261024657600435611e9c81610399565b611ea4612857565b8060601b15611eb6576104aa90612bba565b637448fbae6000526004601cfd5b3461024657608060031936011261024657600435611ee181610399565b60243590611eee82610399565b604435611efa81610399565b60643590611f0782610399565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff60ff8660401c16159516801590816120d4575b60011490816120ca575b1590816120c1575b5061209757611fba9385611fb17ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b61203b576126be565b611fc057005b61200c7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b6120927ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b6126be565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538611f58565b303b159150611f50565b869150611f46565b34610246576020600319360112610246576004356120f981610399565b63389a75e1600c52600052602080600c2054604051908152f35b90604051918281549182825260209260208301916000526020600020936000905b82821061214c5750505061214a92500383611d29565b565b855473ffffffffffffffffffffffffffffffffffffffff1684526001958601958895509381019390910190612134565b90816020910312610246575190565b6040513d6000823e3d90fd5b6121f89073ffffffffffffffffffffffffffffffffffffffff91829173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541690600182148015612236575b61220e575090565b90507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105541690565b508115612206565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461229a5760010190565b61223e565b67ffffffffffffffff8111611d085760051b60200190565b906122c18261229f565b6122ce6040519182611d29565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06122fc829461229f565b0190602036910137565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805482101561234d5760005260206000200190600090565b612306565b805182101561234d5760209160051b010190565b90816020910312610246575161146581610399565b7fffffffff0000000000000000000000000000000000000000000000000000000090358181169392600481106123b057505050565b60040360031b82901b16169150565b908092918237016000815290565b3d156123f8573d906123de82611d6a565b916123ec6040519384611d29565b82523d6000602084013e565b606090565b929161249c9061240b61283b565b61246c604051937f8420ce9900000000000000000000000000000000000000000000000000000000602086015230602486015273ffffffffffffffffffffffffffffffffffffffff809716604486015260a0606486015260c48501906119ae565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc8483030160848501526119ae565b600583101561258f57816124df916124e49460a4830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611d29565b612ee2565b906124ee826125be565b811661256761253c8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b60017fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b7f2cd7a531712f8899004c782d9607e0886d1dbc91bfac7be88dadf6750d9e1419600080a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910490815468010000000000000000811015611d08576001810180845581101561234d5761214a926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b9081549168010000000000000000831015611d08578261269291600161214a95018155612335565b90919073ffffffffffffffffffffffffffffffffffffffff8084549260031b9316831b921b1916179055565b919261276a90337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361271661344b565b61271e61344b565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055612f89565b73ffffffffffffffffffffffffffffffffffffffff80911680158015612831575b610468577fffffffffffffffffffffffff000000000000000000000000000000000000000092827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491069116848254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910590838254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649107921690825416179055565b508183161561278b565b638b78c6d8600c523360005260016020600c2054161561285757565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754330361288157565b6382b429006000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166128ba57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff9283831693806129488673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa257829161295961288f565b60405180967f6e553f65000000000000000000000000000000000000000000000000000000008252816000816129b960209889976004840190929173ffffffffffffffffffffffffffffffffffffffff6020916040840195845216910152565b03925af1948515610a9d57600095612adc575b5090849291612a126116c27fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075473ffffffffffffffffffffffffffffffffffffffff1690565b908116612a26575b50509161146592612fdb565b908092935060405180927f60cfb20400000000000000000000000000000000000000000000000000000000825281600081612a6360048201612b14565b03925af1918215610a9d57600092612aaf575b5050612a855782903880612a1a565b60046040517fbf2af50b000000000000000000000000000000000000000000000000000000008152fd5b612ace9250803d10612ad5575b612ac68183611d29565b810190612aff565b3880612a76565b503d612abc565b82612af692949396503d8711610a9657610a878183611d29565b939091386129cc565b9081602091031261024657516114658161023c565b60208082016020835260407fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910493845480935201926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b828210612b7f575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612b71565b3560ff811681036102465790565b73ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820191821161229a57565b80548015612ca1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190612c7e8282612335565b73ffffffffffffffffffffffffffffffffffffffff82549160031b1b1916905555565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b90612d1a8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906000905b828210612da9575b5014612d7f57612d7a61214a9173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612c49565b60046040517fdee790fb000000000000000000000000000000000000000000000000000000008152fd5b929190612df9816116248573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff90548187169260031b1c1614612e2a57600101909192612d20565b90919250612edc612e8f611629612e808673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612e8986612c1c565b90612335565b612692836116248773ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b38612d28565b6040519061053b908183019083821067ffffffffffffffff831117611d08576040612f1e928594613634863930815281602082015201906119ae565b03906000f08015610a9d5773ffffffffffffffffffffffffffffffffffffffff1690565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b638b78c6d8600c526000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b9190820180921161229a57565b73ffffffffffffffffffffffffffffffffffffffff8116156104685782156113525761306f8261304a8373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54156130d2575b6130ce9161304a6130c69273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b918254612fce565b9055565b602061311d8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54101561318b578161304a826131816130ce9561317c6130c69673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b61266a565b9250509150613076565b60046040517f63923f0e000000000000000000000000000000000000000000000000000000008152fd5b604051906131c282611d0d565b600f82527f4b6172616b5f5661756c745f53757000000000000000000000000000000000006020830152565b604051906131fb82611d0d565b600282527f76310000000000000000000000000000000000000000000000000000000000006020830152565b9392949094428310613421576133ba6132b66133d6966133ae9361336a61324c6131b5565b9761335e89516020809b01206132606131ee565b8051908c0120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818f0190815260208101949094529083019190915246606083015230608083015296879060a0830190565b03966132e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe098898101835282611d29565b519020986040519485938c850197889290917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000609495937ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3865260601b1660208501526034840152605483015260748201520190565b03848101835282611d29565b519020604051938491878301968790916042927f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201520190565b03908101835282611d29565b519020906133c783612bac565b906040840135930135916134a4565b73ffffffffffffffffffffffffffffffffffffffff9182169116036133f757565b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b60046040517faf04a38e000000000000000000000000000000000000000000000000000000008152fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c161561347a57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b9161146593916134b3936134bc565b9092919261355c565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161354157926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15610a9d57805173ffffffffffffffffffffffffffffffffffffffff81161561353857918190565b50809160019190565b50505060009160039190565b6004111561355757565b61258f565b6135658161354d565b8061356e575050565b6135778161354d565b600181036135a95760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b6135b28161354d565b600281036135ec576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b806135f860039261354d565b146136005750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fdfe60a060409080825261053b803803809161001982856102ae565b8339810182828203126101e95761002f826102e7565b60208084015191939091906001600160401b0382116101e9570182601f820112156101e957805190610060826102fb565b9361006d875195866102ae565b8285528383830101116101e957829060005b83811061029a57505060009184010152823b1561027a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529194928482600481895afa91821561026f57600092610238575b50813b1561021f5750508551847f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511561020057508290600487518096819382525afa9283156101f5576000936101b3575b5091600080848461019096519101845af4903d156101aa573d610174816102fb565b90610181885192836102ae565b8152600081943d92013e610316565b505b608052516101c1908161037a82396080518160450152f35b60609250610316565b92508183813d83116101ee575b6101ca81836102ae565b810103126101e9576000806101e1610190956102e7565b945050610152565b600080fd5b503d6101c0565b85513d6000823e3d90fd5b9350505050346102105750610192565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b9091508481813d8311610268575b61025081836102ae565b810103126101e957610261906102e7565b90386100fb565b503d610246565b88513d6000823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015186820184015284920161007f565b601f909101601f19168101906001600160401b038211908210176102d157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101e957565b6001600160401b0381116102d157601f01601f191660200190565b9061033d575080511561032b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610370575b61034e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034656fe6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033a2646970667358221220badca342accfa2289a573c096005521b11387a79d16267f9c22c71d9600f248464736f6c63430008190033",
    "sourceMap": "1240:11874:84:-:0;;;;;;;1520:4:77;1496:31;;8837:64:24;1240:11874:84;;;;;;;;;7896:76:24;;-1:-1:-1;;;;;;;;;;;;1240:11874:84;;;7985:34:24;7981:146;;-1:-1:-1;1240:11874:84;;;;;;;;1496:31:77;1240:11874:84;;;;;;;;;;;7981:146:24;-1:-1:-1;;;;;;1240:11874:84;;;;;;;;;;;;;8087:29:24;;1240:11874:84;;8087:29:24;7981:146;;;;;7896:76;-1:-1:-1;;;7938:23:24;;;;;1240:11874:84;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c806302329a291461023757806317a68dd814610232578063183a4f6e1461022d5780631c10893f146102285780631cd64df414610223578063256929621461021e5780632de948071461021957806344d00f821461021457806347e7ef241461020f5780634a4ee7b11461020a5780634f1ef28614610205578063514e62fc1461020057806351ffb74a146101fb57806352d1902d146101f657806354d1f13d146101f15780635c60da1b146101ec5780635c975abb146101e75780636834e3a8146101e25780636b880718146101dd5780636ff09141146101d8578063715018a6146101d35780637a29084c146101ce5780638c80d4e5146101c95780638da5cb5b146101c457806394f649dd146101bf578063aa0a050c146101ba578063c1f09e30146101b5578063df670448146101b0578063e4af8b22146101ab578063f04e283e146101a6578063f0edf6aa146101a1578063f2fde38b1461019c578063f8c8765e146101975763fee81cf41461019257600080fd5b6120dc565b611ec4565b611e84565b611deb565b611c71565b611c36565b611be3565b611a1d565b611855565b611492565b61137c565b6111b2565b611129565b6110c7565b610d10565b610c8b565b610c1b565b610bd9565b610b9f565b610b58565b610af6565b61095f565b6108ee565b6107bf565b610765565b610701565b61063a565b6105b2565b610563565b610512565b6104ac565b610492565b6103b7565b61024b565b8015150361024657565b600080fd5b34610246576020600319360112610246576004356102688161023c565b61027061283b565b156102f35761027d61288f565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561036f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361024657565b346102465760206003193601126102465773ffffffffffffffffffffffffffffffffffffffff6004356103e981610399565b6103f1612857565b168015610468577fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557f2768c62492a0ab17bb4fd74f18e51a421e2a8e30c0d05ec389cd5609e91b4d5e600080a2005b60046040517fd92e233d000000000000000000000000000000000000000000000000000000008152fd5b6020600319360112610246576104aa60043533612f42565b005b6040600319360112610246576004356104c481610399565b6104cc612857565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b3461024657604060031936011261024657602061054e60043561053481610399565b602435918291638b78c6d8600c526000526020600c205490565b1614604051908152f35b600091031261024657565b6000806003193601126105af5763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b80fd5b346102465760206003193601126102465760206105e86004356105d481610399565b638b78c6d8600c526000526020600c205490565b604051908152f35b90815180825260208080930193019160005b828110610610575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610602565b3461024657600060031936011261024657604051807fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491049182548082526020809201936000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b8282106106d4576106d0856106bc81890382611d29565b6040519182916020835260208301906105f0565b0390f35b835473ffffffffffffffffffffffffffffffffffffffff16865294850194600193840193909101906106a5565b346102465760406003193601126102465760043561071e81610399565b68929eee149b4bd21268308154146107575761074b60209230835561074161288f565b60243590336128e4565b90389055604051908152f35b63ab143c066000526004601cfd5b6040600319360112610246576104aa60043561078081610399565b610788612857565b60243590612f42565b9181601f840112156102465782359167ffffffffffffffff8311610246576020838186019501011161024657565b6040600319360112610246576004356107d781610399565b60243567ffffffffffffffff8111610246576107f7903690600401610791565b91307f0000000000000000000000000000000000000000000000000000000000000000146108e05773ffffffffffffffffffffffffffffffffffffffff9061083d612857565b16916352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9081602060016004601d885afa51036108d2578084916000958694817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8780a2556108b1578280f35b806040519485378338925af4156108c9578181808280f35b903d90823e3d90fd5b6355299b496001526004601dfd5b639f03a0266000526004601cfd5b3461024657604060031936011261024657602060043561090d81610399565b61092860243591638b78c6d8600c526000526020600c205490565b161515604051908152f35b60031960609101126102465760043561094b81610399565b9060243561095881610399565b9060443590565b346102465761096d36610933565b73ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610acc57821692826109fa8573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa25768929eee149b4bd21268933085541461075757602092600060649230885560405196879586947fba08765200000000000000000000000000000000000000000000000000000000865260048601521660248401523060448401525af18015610a9d57610a6e575b50389055005b610a8f9060203d602011610a96575b610a878183611d29565b81019061217c565b5038610a68565b503d610a7d565b61218b565b60046040517fb13b4eea000000000000000000000000000000000000000000000000000000008152fd5b60046040517fd04f8cc5000000000000000000000000000000000000000000000000000000008152fd5b3461024657600060031936011261024657307f0000000000000000000000000000000000000000000000000000000000000000036108e05760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b6000806003193601126105af5763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b34610246576000600319360112610246576020610bbb33612197565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b3461024657600060031936011261024657602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b34610246576020600319360112610246576020610c82600435610c3d81610399565b73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b54604051908152f35b34610246576020600319360112610246576020610bbb600435610cad81610399565b612197565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c606091011261024657608490565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1c60609101126102465760e490565b3461024657610140600319360112610246576004803590610d3082610399565b60243590610d3d82610399565b6044359260643592610d4e36610cb2565b610d5736610ce1565b68929eee149b4bd2126895308754146110ba57308755610d7561288f565b610dbe8473ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b549273ffffffffffffffffffffffffffffffffffffffff96878716916040988951917f38d52e0f0000000000000000000000000000000000000000000000000000000090818452602093848187818a5afa8015610a9d57849160009161109d575b501690610e2b81612bac565b823b15610246578f92868f808f946000968c8f928f9a93610ec6948b97519c8d9b8c9a8b997fd505accf000000000000000000000000000000000000000000000000000000008b528801359701359589019360ff929897969360c0969260e087019a73ffffffffffffffffffffffffffffffffffffffff80921688521660208701526040860152606085015216608083015260a08201520152565b03925af19081611084575b50611069578a5190815282818581885afa918215610a9d57610f55928a87928e879560009461103a575b50518096819582947fdd62ed3e0000000000000000000000000000000000000000000000000000000084528b840190602090939293604083019473ffffffffffffffffffffffffffffffffffffffff809216845216910152565b0392165afa908115610a9d578c9260009261101d575b505010610ff6575092849289610f8a936106d09b97610fe49997613227565b610fd38173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649102602052604060002090565b610fdd815461226d565b90556128e4565b38909255519081529081906020820190565b87517fb78cb0dd000000000000000000000000000000000000000000000000000000008152fd5b6110339250803d10610a9657610a878183611d29565b3880610f6b565b61105b919450863d8811611062575b6110538183611d29565b810190612366565b9238610efb565b503d611049565b5050505092849289610f8a936106d09b97610fe49997613227565b8061109161109792611cf4565b80610558565b38610ed1565b6110b49150863d8811611062576110538183611d29565b38610e1f565b8563ab143c06600052601cfd5b6000806003193601126105af576110dc612857565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b346102465760206003193601126102465760043561114681610399565b61114e61283b565b73ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910791167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055600080f35b34610246576111c036610933565b9173ffffffffffffffffffffffffffffffffffffffff91827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910654163303610acc578261124d81831673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa25768929eee149b4bd212689230845414610757573084558415611352578216936000948086527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100806020526112cb84604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b549182841161132857875260205281810361130984604089209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5514611318575b505038905580f35b61132191612cd0565b3880611310565b60046040517ff15ed214000000000000000000000000000000000000000000000000000000008152fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b346102465760006003193601126102465760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b90815180825260208080930193019160005b8281106113ef575050505090565b8351855293810193928101926001016113e1565b929061141b90959492956080855260808501906105f0565b60209084810360208601526020808851928381520197019160005b828110611468575050505084611457918461146596970360408601526113cf565b9160608184039101526113cf565b90565b835173ffffffffffffffffffffffffffffffffffffffff1689529781019792810192600101611436565b346102465760208060031936011261024657600480356114b181610399565b6114fa8173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b5490611505826122b7565b9261150f836122b7565b92611519816122b7565b9560005b8281106115885787876106d08861157b6115768a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612113565b9260405194859485611403565b61166d6115d48673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b611649611629846116248a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612335565b905473ffffffffffffffffffffffffffffffffffffffff9160031b1c1690565b73ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54906116db6116c2611629836116248a73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff1690565b604084815180937f07a2d13a0000000000000000000000000000000000000000000000000000000082528180611718898d83019190602083019252565b03915afa938415610a9d5787948693600091611838575b5061173a858d612352565b52611745848b612352565b526117996116c2611629856116248c73ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9051938480927f38d52e0f0000000000000000000000000000000000000000000000000000000082525afa8015610a9d5773ffffffffffffffffffffffffffffffffffffffff6118159160019460009161181b575b50166117fa838c612352565b9073ffffffffffffffffffffffffffffffffffffffff169052565b0161151d565b6118329150863d8811611062576110538183611d29565b386117ee565b61184f9150843d8611610a9657610a878183611d29565b3861172f565b346102465760406003193601126102465760043561187281610399565b6024359061187f82610399565b611887612857565b73ffffffffffffffffffffffffffffffffffffffff9081831692831561046857826118f18373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa257611985906119458373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b16907f928c1491037173ffa6782c693f229e11dbb934cb28daf9e2d1fca4b5131ffbf7600080a3005b919082519283825260005b8481106119f85750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016119b9565b9060206114659281815201906119ae565b3461024657604060031936011261024657600435611a3a81610399565b60243567ffffffffffffffff811161024657611a5a903690600401610791565b611a6261283b565b68929eee149b4bd212689230845414610757573084557fffffffff00000000000000000000000000000000000000000000000000000000611aa3838561237b565b16917f27ea6f2b0000000000000000000000000000000000000000000000000000000083148015611bba575b8015611b91575b15611b6757600073ffffffffffffffffffffffffffffffffffffffff81957ff2fde38b00000000000000000000000000000000000000000000000000000000839614611b5a575b611b2c604051809581936123bf565b0393165af190611b3a6123cd565b9115611b53573890556040519081906106d09082611a0c565b5060208101fd5b611b62612857565b611b1d565b60046040517fc55dde3d000000000000000000000000000000000000000000000000000000008152fd5b507f02329a29000000000000000000000000000000000000000000000000000000008314611ad6565b507ff2fde38b000000000000000000000000000000000000000000000000000000008314611acf565b3461024657600060031936011261024657602073ffffffffffffffffffffffffffffffffffffffff7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491065416604051908152f35b346102465760006003193601126102465760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b602060031936011261024657600435611c8981610399565b611c91612857565b63389a75e1600c52806000526020600c209081544211611cb75760006104aa9255612bba565b636f5e88186000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111611d0857604052565b611cc5565b6040810190811067ffffffffffffffff821117611d0857604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117611d0857604052565b67ffffffffffffffff8111611d0857601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561024657803590611dbb82611d6a565b92611dc96040519485611d29565b8284526020838301011161024657816000926020809301838601378301015290565b3461024657608060031936011261024657600435611e0881610399565b67ffffffffffffffff9060243582811161024657611e2a903690600401611da4565b9160443590811161024657611e43903690600401611da4565b606435906005821015610246576106d093611e5d936123fd565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b602060031936011261024657600435611e9c81610399565b611ea4612857565b8060601b15611eb6576104aa90612bba565b637448fbae6000526004601cfd5b3461024657608060031936011261024657600435611ee181610399565b60243590611eee82610399565b604435611efa81610399565b60643590611f0782610399565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549367ffffffffffffffff60ff8660401c16159516801590816120d4575b60011490816120ca575b1590816120c1575b5061209757611fba9385611fb17ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b61203b576126be565b611fc057005b61200c7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b6120927ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b6126be565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538611f58565b303b159150611f50565b869150611f46565b34610246576020600319360112610246576004356120f981610399565b63389a75e1600c52600052602080600c2054604051908152f35b90604051918281549182825260209260208301916000526020600020936000905b82821061214c5750505061214a92500383611d29565b565b855473ffffffffffffffffffffffffffffffffffffffff1684526001958601958895509381019390910190612134565b90816020910312610246575190565b6040513d6000823e3d90fd5b6121f89073ffffffffffffffffffffffffffffffffffffffff91829173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541690600182148015612236575b61220e575090565b90507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649105541690565b508115612206565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461229a5760010190565b61223e565b67ffffffffffffffff8111611d085760051b60200190565b906122c18261229f565b6122ce6040519182611d29565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06122fc829461229f565b0190602036910137565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805482101561234d5760005260206000200190600090565b612306565b805182101561234d5760209160051b010190565b90816020910312610246575161146581610399565b7fffffffff0000000000000000000000000000000000000000000000000000000090358181169392600481106123b057505050565b60040360031b82901b16169150565b908092918237016000815290565b3d156123f8573d906123de82611d6a565b916123ec6040519384611d29565b82523d6000602084013e565b606090565b929161249c9061240b61283b565b61246c604051937f8420ce9900000000000000000000000000000000000000000000000000000000602086015230602486015273ffffffffffffffffffffffffffffffffffffffff809716604486015260a0606486015260c48501906119ae565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc8483030160848501526119ae565b600583101561258f57816124df916124e49460a4830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611d29565b612ee2565b906124ee826125be565b811661256761253c8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b60017fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b7f2cd7a531712f8899004c782d9607e0886d1dbc91bfac7be88dadf6750d9e1419600080a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910490815468010000000000000000811015611d08576001810180845581101561234d5761214a926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b9081549168010000000000000000831015611d08578261269291600161214a95018155612335565b90919073ffffffffffffffffffffffffffffffffffffffff8084549260031b9316831b921b1916179055565b919261276a90337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361271661344b565b61271e61344b565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055612f89565b73ffffffffffffffffffffffffffffffffffffffff80911680158015612831575b610468577fffffffffffffffffffffffff000000000000000000000000000000000000000092827fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491069116848254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910590838254161790557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649107921690825416179055565b508183161561278b565b638b78c6d8600c523360005260016020600c2054161561285757565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754330361288157565b6382b429006000526004601cfd5b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166128ba57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff9283831693806129488673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649103602052604060002090565b541615610aa257829161295961288f565b60405180967f6e553f65000000000000000000000000000000000000000000000000000000008252816000816129b960209889976004840190929173ffffffffffffffffffffffffffffffffffffffff6020916040840195845216910152565b03925af1948515610a9d57600095612adc575b5090849291612a126116c27fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491075473ffffffffffffffffffffffffffffffffffffffff1690565b908116612a26575b50509161146592612fdb565b908092935060405180927f60cfb20400000000000000000000000000000000000000000000000000000000825281600081612a6360048201612b14565b03925af1918215610a9d57600092612aaf575b5050612a855782903880612a1a565b60046040517fbf2af50b000000000000000000000000000000000000000000000000000000008152fd5b612ace9250803d10612ad5575b612ac68183611d29565b810190612aff565b3880612a76565b503d612abc565b82612af692949396503d8711610a9657610a878183611d29565b939091386129cc565b9081602091031261024657516114658161023c565b60208082016020835260407fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910493845480935201926000527fcc963e9281187e610857e988900b0c72937ebb5122acc7f351ae2143b44e4682916000905b828210612b7f575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612b71565b3560ff811681036102465790565b73ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820191821161229a57565b80548015612ca1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190612c7e8282612335565b73ffffffffffffffffffffffffffffffffffffffff82549160031b1b1916905555565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b90612d1a8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54906000905b828210612da9575b5014612d7f57612d7a61214a9173ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612c49565b60046040517fdee790fb000000000000000000000000000000000000000000000000000000008152fd5b929190612df9816116248573ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff90548187169260031b1c1614612e2a57600101909192612d20565b90919250612edc612e8f611629612e808673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b612e8986612c1c565b90612335565b612692836116248773ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b38612d28565b6040519061053b908183019083821067ffffffffffffffff831117611d08576040612f1e928594613634863930815281602082015201906119ae565b03906000f08015610a9d5773ffffffffffffffffffffffffffffffffffffffff1690565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b638b78c6d8600c526000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b9190820180921161229a57565b73ffffffffffffffffffffffffffffffffffffffff8116156104685782156113525761306f8261304a8373ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54156130d2575b6130ce9161304a6130c69273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100602052604060002090565b918254612fce565b9055565b602061311d8273ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b54101561318b578161304a826131816130ce9561317c6130c69673ffffffffffffffffffffffffffffffffffffffff166000527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101602052604060002090565b61266a565b9250509150613076565b60046040517f63923f0e000000000000000000000000000000000000000000000000000000008152fd5b604051906131c282611d0d565b600f82527f4b6172616b5f5661756c745f53757000000000000000000000000000000000006020830152565b604051906131fb82611d0d565b600282527f76310000000000000000000000000000000000000000000000000000000000006020830152565b9392949094428310613421576133ba6132b66133d6966133ae9361336a61324c6131b5565b9761335e89516020809b01206132606131ee565b8051908c0120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818f0190815260208101949094529083019190915246606083015230608083015296879060a0830190565b03966132e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe098898101835282611d29565b519020986040519485938c850197889290917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000609495937ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3865260601b1660208501526034840152605483015260748201520190565b03848101835282611d29565b519020604051938491878301968790916042927f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201520190565b03908101835282611d29565b519020906133c783612bac565b906040840135930135916134a4565b73ffffffffffffffffffffffffffffffffffffffff9182169116036133f757565b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b60046040517faf04a38e000000000000000000000000000000000000000000000000000000008152fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c161561347a57565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fd5b9161146593916134b3936134bc565b9092919261355c565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161354157926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15610a9d57805173ffffffffffffffffffffffffffffffffffffffff81161561353857918190565b50809160019190565b50505060009160039190565b6004111561355757565b61258f565b6135658161354d565b8061356e575050565b6135778161354d565b600181036135a95760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b6135b28161354d565b600281036135ec576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b806135f860039261354d565b146136005750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fdfe60a060409080825261053b803803809161001982856102ae565b8339810182828203126101e95761002f826102e7565b60208084015191939091906001600160401b0382116101e9570182601f820112156101e957805190610060826102fb565b9361006d875195866102ae565b8285528383830101116101e957829060005b83811061029a57505060009184010152823b1561027a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529194928482600481895afa91821561026f57600092610238575b50813b1561021f5750508551847f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511561020057508290600487518096819382525afa9283156101f5576000936101b3575b5091600080848461019096519101845af4903d156101aa573d610174816102fb565b90610181885192836102ae565b8152600081943d92013e610316565b505b608052516101c1908161037a82396080518160450152f35b60609250610316565b92508183813d83116101ee575b6101ca81836102ae565b810103126101e9576000806101e1610190956102e7565b945050610152565b600080fd5b503d6101c0565b85513d6000823e3d90fd5b9350505050346102105750610192565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b9091508481813d8311610268575b61025081836102ae565b810103126101e957610261906102e7565b90386100fb565b503d610246565b88513d6000823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015186820184015284920161007f565b601f909101601f19168101906001600160401b038211908210176102d157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101e957565b6001600160401b0381116102d157601f01601f191660200190565b9061033d575080511561032b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610370575b61034e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034656fe6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033a2646970667358221220badca342accfa2289a573c096005521b11387a79d16267f9c22c71d9600f248464736f6c63430008190033",
    "sourceMap": "1240:11874:84:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;;;;;;:::o;:::-;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;4022:46:84;;;2281:72:26;;:::i;:::-;1237:66;739:6:89;1240:11874:84;;;;;;;3515:20:26;1240:11874:84;;;966:10:25;1240:11874:84;;3515:20:26;1240:11874:84;4022:46;1237:66:26;1240:11874:84;;;;;3167:9:26;3163:62;;1240:11874:84;;;;3823:22:26;1240:11874:84;;;966:10:25;1240:11874:84;;3823:22:26;1240:11874:84;3163:62:26;1240:11874:84;;;3199:15:26;;;;1240:11874:84;;;;;;;:::o;:::-;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;1240:11874:84;4873:26;;4869:52;;4990:14;1240:11874;;;;;;;;5034:31;-1:-1:-1;5034:31:84;;1240:11874;4869:52;1240:11874;;;4908:13;;;;1240:11874;;-1:-1:-1;;1240:11874:84;;;;;4408:5:70;1240:11874:84;;10211:10:70;4408:5;:::i;:::-;1240:11874:84;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;3082:831:70;;;;;;;;1240:11874:84;;3082:831:70;;;;;;;;;;;;;;1240:11874:84;;;;;;-1:-1:-1;;1240:11874:84;;;;;;11280:13:70;1240:11874:84;;;;;:::i;:::-;;;11280:13:70;;;10695:219;;;;;;;;;10567:353;;11280:13;:21;:30;1240:11874:84;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;1240:11874:84;;;;;9239:383:69;;;;;;7972:9;9132:15;1240:11874:84;9239:383:69;;;;;;;;;1240:11874:84;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;;:::i;:::-;10695:219:70;;;;;;;;;10567:353;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;9628:11;1240:11874;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;1575:245:75;;;;;;;9861:14:84;1240:11874;1575:245:75;;;;2281:72:26;;:::i;:::-;1240:11874:84;;2362:10;;9861:14;:::i;:::-;1883:75:75;;;;1240:11874:84;;;;;;1575:245:75;;-1:-1:-1;1575:245:75;1240:11874:84;1575:245:75;;1240:11874:84;;-1:-1:-1;;1240:11874:84;;;;;4408:5:70;1240:11874:84;;;;;:::i;:::-;12478:70:69;;:::i;:::-;1240:11874:84;;4408:5:70;;:::i;1240:11874:84:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;5766:446:77;;5707:6;5766:446;;;4254:1327;12478:70:69;;;:::i;:::-;4254:1327:77;;;;;;;;1240:11874:84;4254:1327:77;1240:11874:84;4254:1327:77;;;;;;;;-1:-1:-1;;;;4254:1327:77;;;;;;;;;;;1240:11874:84;;;4254:1327:77;;1240:11874:84;4254:1327:77;;;;;;;;;;;;;;;1240:11874:84;;;4254:1327:77;;;;;;;;;;;;;1240:11874:84;4254:1327:77;;5766:446;;-1:-1:-1;5766:446:77;1240:11874:84;5766:446:77;;1240:11874:84;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;:::i;:::-;11083:13:70;1240:11874:84;;11083:13:70;10695:219;;;;;;;;;10567:353;;11083:13;:21;:26;;1240:11874:84;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;12829:25;1240:11874;;12807:10;:48;12803:111;;1240:11874;;12571:35;;;;1240:11874;;;;12571:19;1240:11874;;;;;;;12571:35;1240:11874;;12571:49;12567:108;;1575:245:75;;;;;;;;3129:43:84;1575:245:75;-1:-1:-1;1240:11874:84;1575:245:75;;;;1240:11874:84;;3129:43;;;;;1240:11874;3129:43;;1240:11874;3129:43;;1240:11874;;;;;;1575:245:75;1240:11874:84;;;;3129:43;;;;;;;;1240:11874;-1:-1:-1;1883:75:75;;;1240:11874:84;3129:43;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;:::i;12567:108::-;1240:11874;;;12643:21;;;;12803:111;1240:11874;;;12878:25;;;;1240:11874;;;;;-1:-1:-1;;1240:11874:84;;;;;6461:184:77;6402:6;6461:184;;;1240:11874:84;;;2614:66:77;1240:11874:84;;;;;;-1:-1:-1;;1240:11874:84;;;;;9831:339:69;;;;;;;;;;;;;;;;1240:11874:84;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;8475:26;8490:10;8475:26;:::i;:::-;1240:11874;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;1237:66:26;1240:11874:84;;;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;9458:20;1240:11874;;;;;:::i;:::-;;;;;9458:14;1240:11874;;;;;;;9458:20;1240:11874;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;:::i;:::-;1575:245:75;;;;;;;;;;;2281:72:26;;:::i;:::-;2828:20:84;;1240:11874;;;;9458:14;1240:11874;;;;;;;2828:20;1240:11874;;;;;;;;;;;;;;1896:13:87;;;;1240:11874:84;1896:13:87;;;;;;;;;;;;;;-1:-1:-1;1896:13:87;;;1240:11874:84;;;1971:8:87;;;;:::i;:::-;1875:134;;;;;1240:11874:84;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;1875:134:87;1240:11874:84;;;;1875:134:87;;;;;;;1240:11874:84;1875:134:87;;1991:8;;1240:11874:84;1981:8:87;;1240:11874:84;1875:134:87;;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1875:134:87;;;;;;;;;1240:11874:84;-1:-1:-1;1871:261:87;;1240:11874:84;;2044:13:87;;;;;;;;;;;;;;;2037:53;2044:13;;;;;;;-1:-1:-1;2044:13:87;;;1871:261;1240:11874:84;;2037:53:87;;;;;;1240:11874:84;2037:53:87;;;;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;2037:53:87;;1240:11874:84;;2037:53:87;;;;;;;;;-1:-1:-1;2037:53:87;;;1871:261;2037:61;;;2033:88;;1871:261;;;;;2212:5;1871:261;1240:11874:84;1871:261:87;;9861:14:84;1871:261:87;;2212:5;:::i;:::-;2859:20:84;;1240:11874;;;;9458:14;1240:11874;;;;;;;2859:20;:22;1240:11874;;2859:22;:::i;:::-;1240:11874;;9861:14;:::i;:::-;1883:75:75;;;;1240:11874:84;;;;;;;;;;;;2033:88:87;1240:11874:84;;2107:14:87;;;;2037:53;;;;;;-1:-1:-1;2037:53:87;;;;;;:::i;:::-;;;;;2044:13;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;1871:261;;;;;;;;;2212:5;1871:261;1240:11874:84;1871:261:87;;9861:14:84;1871:261:87;;2212:5;:::i;1875:134::-;;;;;;:::i;:::-;;;:::i;:::-;;;;1896:13;;;;;;;;;;;;;;:::i;:::-;;;;1575:245:75;;;-1:-1:-1;1575:245:75;;;1240:11874:84;;;-1:-1:-1;;1240:11874:84;;;;;12478:70:69;;:::i;:::-;6813:405;;;;;;;;;;1240:11874:84;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;1240:11874:84;6040:12;1240:11874;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;:::i;:::-;;;;;12829:25;1240:11874;;12807:10;:48;12803:111;;1240:11874;12571:35;1240:11874;;;;;;;12571:19;1240:11874;;;;;;;12571:35;1240:11874;;12571:49;12567:108;;1575:245:75;;;;;;;;;;;3372:11:84;;3368:36;;1240:11874;;-1:-1:-1;;1240:11874:84;;;;7335:55;1240:11874;;;3494:32;1240:11874;;;;;;;;;;;;;;;;3494:32;1240:11874;3540:19;;;;3536:49;;1240:11874;;;;;;;3737:32;1240:11874;;;;;;;;;;;;;;;;3737:32;1240:11874;3843:15;3839:82;;1240:11874;1883:75:75;;;;;1240:11874:84;;3839:82;3904:5;;;:::i;:::-;3839:82;;;;3536:49;1240:11874;;;3568:17;;;;3368:36;1240:11874;;;3392:12;;;;1240:11874;;;;;-1:-1:-1;;1240:11874:84;;;;;;11523:61:69;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;;:::i;:::-;7807:26;;1240:11874;;;;7807:18;1240:11874;;;;;;;7807:26;1240:11874;7859:26;;;;:::i;:::-;7904;;;;:::i;:::-;7949:25;;;;:::i;:::-;7990:13;-1:-1:-1;8005:15:84;;;;;;8327:26;;1240:11874;8327:26;1240:11874;8327:26;;1240:11874;;;;7807:18;1240:11874;;;;;;;8327:26;1240:11874;:::i;:::-;;;;;;;;;:::i;8022:3::-;8059:56;:25;;1240:11874;;;;7335:55;1240:11874;;;;;;;8059:25;1240:11874;8085:29;:26;;;1240:11874;;;;7807:18;1240:11874;;;;;;;8085:26;:29;:::i;:::-;1240:11874;;;;;;;;;;;;;;;;;;;;;;8059:56;1240:11874;8141:26;:45;1240:11874;8141:29;:26;;;1240:11874;;;;7807:18;1240:11874;;;;;;;;;;;;8141:45;1240:11874;;;;8141:54;;1240:11874;8141:54;;;;;;;;;1240:11874;;;;;;;;8141:54;;;;;;;;;;;;;;-1:-1:-1;8141:54:84;;;8022:3;8129:66;;;;;:::i;:::-;1240:11874;8209:19;;;;:::i;:::-;1240:11874;8261:35;1240:11874;8261:29;:26;;;1240:11874;;;;7807:18;1240:11874;;;;;;;8261:35;1240:11874;;8261:37;;;;1240:11874;8261:37;;;;;;;;1240:11874;8242:57;8261:37;7807:18;8261:37;-1:-1:-1;8261:37:84;;;8022:3;1240:11874;;8242:57;;;;:::i;:::-;1240:11874;;;;;;8242:57;1240:11874;7990:13;;8261:37;;;;;;;;;;;;;;:::i;:::-;;;;8141:54;;;;;;;;;;;;;;:::i;:::-;;;;1240:11874;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;1240:11874:84;;;;;5343:26;;;5339:52;;5599:26;;;1240:11874;;;;12571:19;1240:11874;;;;;;;5599:26;1240:11874;;5599:40;5595:74;;5680:41;:26;;;1240:11874;;;;12571:19;1240:11874;;;;;;;5680:26;1240:11874;;;;;;;;;;;5680:41;1240:11874;5736:34;;-1:-1:-1;5736:34:84;;1240:11874;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;12272:5:70;;:::i;:::-;1575:245:75;;;;;;;;;;;1240:11874:84;6295:10;;;;:::i;:::-;1240:11874;6357:46;6379:24;6357:46;;:105;;;;1240:11874;6357:168;;;;1240:11874;6549:21;6545:86;;-1:-1:-1;1240:11874:84;6706:55;;6728:33;6706:55;;;6702:99;;1240:11874;;;;;;;;;:::i;:::-;6849:23;1240:11874;;6849:23;;;;;:::i;:::-;6887:8;;6883:289;;1883:75:75;;;1240:11874:84;;;;;;;;;:::i;6883:289::-;7090:72;1240:11874;7090:72;;;6702:99;;;:::i;:::-;;;6545:86;1240:11874;;;6593:27;;;;6357:168;6482:43;6504:21;6482:43;;6357:168;;:105;6407:55;6429:33;6407:55;;6357:105;;1240:11874;;;;;-1:-1:-1;;1240:11874:84;;;;;;;9276:25;1240:11874;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;339:83:89;1240:11874:84;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;-1:-1:-1;10506:526:69;1240:11874:84;10506:526:69;;;;;;;;;-1:-1:-1;11051:12:69;10506:526;;11051:12;:::i;10506:526::-;;-1:-1:-1;10506:526:69;1240:11874:84;10506:526:69;;1240:11874:84;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;;;;:::o;:::-;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;4276:6;;;;:::i;:::-;1240:11874;;;;;;;;;;;;;;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;8479:183;;;;;;8681:8;;;:::i;8479:183::-;;-1:-1:-1;8479:183:69;1240:11874:84;8479:183:69;;1240:11874:84;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;:::i;:::-;8837:64:24;1240:11874:84;;;;;;;;4301:16:24;1240:11874:84;;4726:16:24;;:34;;;;1240:11874:84;4805:1:24;4790:16;:50;;;;1240:11874:84;4855:13:24;:30;;;;1240:11874:84;4851:91:24;;;5055:1;4951:18;;;8837:64;1240:11874:84;;;;;;;;;4951:18:24;4979:67;;5055:1;:::i;:::-;5066:101;;1240:11874:84;5066:101:24;5100:23;8837:64;1240:11874:84;;;;;;;5100:23:24;1240:11874:84;;4805:1:24;1240:11874:84;;5142:14:24;;1240:11874:84;;5142:14:24;1240:11874:84;4979:67:24;5013:22;8837:64;1240:11874:84;;;;;;;;;5013:22:24;5055:1;:::i;4851:91::-;1240:11874:84;;;4908:23:24;;;;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:24;;4726:34;;;-1:-1:-1;4726:34:24;;1240:11874:84;;;;;-1:-1:-1;;1240:11874:84;;;;;;;;;;:::i;:::-;11885:237:69;;;-1:-1:-1;11885:237:69;1240:11874:84;11885:237:69;;;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;-1:-1:-1;1240:11874:84;;-1:-1:-1;1240:11874:84;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;8724:394;8890:26;8724:394;1240:11874;8890:26;;;1240:11874;;;;12571:19;1240:11874;;;;;;;8890:26;1240:11874;;8931:64;642:1:89;8931:64:84;;:99;;;;8724:394;8927:151;;9087:24;8724:394;:::o;8927:151::-;1240:11874;;9053:14;1240:11874;;9046:21;:::o;8931:99::-;8999:31;;;8931:99;;1240:11874;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;:::o;:::-;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;-1:-1:-1;1240:11874:84;;;-1:-1:-1;1240:11874:84;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;-1:-1:-1;1240:11874:84:o;:::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;-1:-1:-1;1240:11874:84;;;;:::o;:::-;;;:::o;12194:102:70:-;;;1240:11874:84;12194:102:70;12272:5;;:::i;:::-;1240:11874:84;;;4395:89;;;;;;4438:4;4395:89;;;1240:11874;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;4395:89;1240:11874;4384:101;1240:11874;;;;;4395:89;;;;;;;;:::i;:::-;4384:101;:::i;:::-;4495:23;;;;:::i;:::-;1240:11874;;4633:81;:35;;1240:11874;;;;12571:19;1240:11874;;;;;;;4633:35;1240:11874;;;;;;;;;4633:81;4729:24;1240:11874;4729:24;;12194:102:70;:::o;1240:11874:84:-;;;;;;;;;;;4495:11;1240:11874;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1806:409;;;4156:4:70;1806:409:84;1982:10;5710:347:69;;1982:10:84;-1:-1:-1;5710:347:69;;;;6893:76:24;;:::i;:::-;;;:::i;:::-;1237:66:26;1240:11874:84;;;;;;4156:4:70;:::i;:::-;1240:11874:84;;;;1318:24:87;;:63;;;;1806:409:84;1314:114:87;;1240:11874:84;1437:25:87;;;1240:11874:84;;;;;;;;;1519:14:87;1240:11874:84;;;;;;;;1556:12:87;1240:11874:84;;;;;;;;;1806:409::o;1318:63:87:-;1240:11874:84;;;;1346:35:87;1318:63;;6191:790:70;6309:666;;;;;;739:6:89;6309:666:70;;;;;;;;6191:790::o;6309:666::-;;;;;;;6191:790::o;6309:666::-;;;;;;;2905:128:26;1240:11874:84;1237:66:26;1240:11874:84;;2966:61:26;;2905:128::o;2966:61::-;3001:15;1240:11874:84;;3001:15:26;;;;12460:232:84;1240:11874;;;;;12571:35;;;;1240:11874;;;;12571:19;1240:11874;;;;;;;12571:35;1240:11874;;12571:49;12567:108;;2281:72:26;;;;:::i;:::-;1240:11874:84;;9959:29;;1240:11874;9959:29;;;1240:11874;9959:29;;;;;;;;;1240:11874;;;;;;;;;;;;;;;;;9959:29;;;;;;;;;;1240:11874;9959:29;;;12460:232;1240:11874;;;;;10166:21;1240:11874;10174:12;1240:11874;;;;;10166:21;1240:11874;;;10162:141;;12460:232;10424:6;;;;;;:::i;10162:141::-;1240:11874;;;;;;;10221:41;;1240:11874;10221:41;;;1240:11874;10221:41;;9959:29;10221:41;;;:::i;:::-;;;;;;;;;;1240:11874;10221:41;;;10162:141;10217:75;;;;10162:141;;;;;;10217:75;9959:29;1240:11874;;10271:21;;;;10221:41;;;;;;-1:-1:-1;10221:41:84;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;9959:29;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;1240:11874;;;;;;;;;;;;;:::i;:::-;;;;;;;;;10250:11;1240:11874;;;;;;;;-1:-1:-1;1240:11874:84;;;-1:-1:-1;1240:11874:84;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6145:1089:69:-;6813:405;;;;;;;-1:-1:-1;6813:405:69;;;6145:1089::o;1240:11874:84:-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;11408:758;;11570:26;;1240:11874;;;;7807:18;1240:11874;;;;;;;11570:26;1240:11874;11613:13;-1:-1:-1;11636:427:84;11643:16;;;;;;11636:427;12076:17;;12072:45;;12127:26;:30;:26;1240:11874;;;;7807:18;1240:11874;;;;;;;12127:26;:30;:::i;12072:45::-;12102:15;1240:11874;;12102:15;;;;11636:427;11679:26;;;:29;:26;;;1240:11874;;;;7807:18;1240:11874;;;;;;;11679:29;1240:11874;;;;;;;;;;;;11679:38;11675:319;;11570:18;1240:11874;11636:427;;;;;11675:319;11912:26;;;;11880:76;1240:11874;11912:44;:26;;1240:11874;;;;7807:18;1240:11874;;;;;;;11912:26;11939:16;;;:::i;:::-;11912:44;;:::i;1240:11874::-;11880:29;:26;;;1240:11874;;;;7807:18;1240:11874;;;;;;;11880:76;11974:5;;;12172:150;1240:11874;;12273:40;;;;;;;;;;;;;;;;1240:11874;;12273:40;;;;;;12297:4;1240:11874;;;;;;;;;;:::i;:::-;12273:40;;-1:-1:-1;12273:40:84;;;;;1240:11874;;12172:150;:::o;2952:967:70:-;3082:831;;;4408:5;3082:831;;;;;;;;;;;;;;;;;;;4408:5;3082:831;;2952:967::o;:::-;3082:831;;;;;;;;739:6:89;3082:831:70;;;;;;;;;;;;;;2952:967::o;272:2:89:-;;;;;;;;;;:::o;10682:720:84:-;1240:11874;;;10810:20;10806:46;;10866:11;;10862:36;;11055:32;:25;;;1240:11874;;;;7335:55;1240:11874;;;;;;;11055:25;1240:11874;;;;;;;;;;;;11055:32;1240:11874;11055:37;11051:217;;10682:720;11353:42;:25;;:32;:25;1240:11874;;;;7335:55;1240:11874;;;;;;;11353:32;1240:11874;;;11353:42;:::i;:::-;1240:11874;;10682:720::o;11051:217::-;272:2:89;11112:26:84;;1240:11874;;;;7807:18;1240:11874;;;;;;;11112:26;1240:11874;11112:68;;11108:97;;11219:26;11353:25;11219:26;:38;11353:42;11219:26;;11353:32;11219:26;1240:11874;;;;7807:18;1240:11874;;;;;;;11219:26;:38;:::i;:::-;11051:217;;;;;;;11108:97;11189:16;1240:11874;;11189:16;;;;472:95:89;1240:11874:84;;;;;;:::i;:::-;472:95:89;1240:11874:84;;472:95:89;;;;;:::o;:::-;1240:11874:84;;;;;;:::i;:::-;472:95:89;1240:11874:84;;472:95:89;;;;;:::o;2231:962:87:-;;;;;;2473:15;2462:26;;2458:52;;2980:57;2570:222;3065:66;472:95:89;2980:57:87;472:95:89;2854:82:87;472:95:89;;:::i;:::-;1240:11874:84;2854:82:87;1240:11874:84;;;;;;2641:35:87;472:95:89;;:::i;:::-;1240:11874:84;;;;;2694:22:87;1240:11874:84;;;472:95:89;2570:222:87;;;1240:11874:84;;;472:95:89;;;1240:11874:84;;;;472:95:89;;;1240:11874:84;;;;2734:13:87;472:95:89;;;1240:11874:84;2773:4:87;472:95:89;;;1240:11874:84;;;;472:95:89;;;;;2570:222:87;;;;;;;;;;;;;:::i;:::-;1240:11874:84;2547:255:87;;1240:11874:84;;;2854:82:87;;;;;;;;472:95:89;;;;;;;339:83;1240:11874:84;;472:95:89;;;;;;;;;;1240:11874:84;472:95:89;;;1240:11874:84;472:95:89;;;1240:11874:84;472:95:89;;;2854:82:87;;;;;;;;;:::i;:::-;1240:11874:84;2844:93:87;;1240:11874:84;;2980:57:87;;;;;;;;472:95:89;;;;;;;;;;1240:11874:84;472:95:89;;;1240:11874:84;472:95:89;;;2980:57:87;;;;;;;;;:::i;:::-;1240:11874:84;2970:68:87;;3093:11;;;;:::i;:::-;3119;1240:11874:84;3119:11:87;;1240:11874:84;3106:11:87;;1240:11874:84;3065:66:87;;:::i;:::-;1240:11874:84;;;;;;3145:14:87;3141:45;;2231:962::o;3141:45::-;3168:18;1240:11874:84;;3168:18:87;;;;2458:52;2497:13;1240:11874:84;;2497:13:87;;;;7084:141:24;1240:11874:84;8837:64:24;1240:11874:84;;;;7150:18:24;7146:73;;7084:141::o;7146:73::-;7191:17;1240:11874:84;;7191:17:24;;;;6803:260:61;;7021:8;6803:260;;6967:25;6803:260;6967:25;:::i;:::-;7021:8;;;;;:::i;5140:1530::-;;;6199:66;6186:79;;6182:164;;1240:11874:84;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6457:24:61;;;;;;;;;;;;;;1240:11874:84;;;6495:20:61;6491:113;;6614:49;;5140:1530;:::o;6491:113::-;6531:62;;;6457:24;6531:62;;:::o;6182:164::-;6281:54;;;6297:1;6281:54;6301:30;6281:54;;:::o;1240:11874:84:-;;-1:-1:-1;1240:11874:84;;;:::o;:::-;;:::i;7196:532:61:-;1240:11874:84;;;:::i;:::-;7282:29:61;;;7327:7;;:::o;7278:444::-;1240:11874:84;;;:::i;:::-;7387:29:61;7378:38;;7387:29;;7439:23;1240:11874:84;;7439:23:61;;;;7374:348;1240:11874:84;;;:::i;:::-;7492:35:61;7483:44;;7492:35;;1240:11874:84;;7550:46:61;;;;;;1240:11874:84;;;;;7550:46:61;7479:243;1240:11874:84;;7626:30:61;1240:11874:84;;:::i;:::-;7617:39:61;7613:109;;7479:243;7196:532::o;7613:109::-;1240:11874:84;;7679:32:61;;;;;;1240:11874:84;;;;;;7550:46:61",
    "linkReferences": {},
    "immutableReferences": {
      "58898": [
        {
          "start": 2043,
          "length": 32
        },
        {
          "start": 2826,
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CrossedDepositLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ECDSAInvalidSignature\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"ECDSAInvalidSignatureLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"ECDSAInvalidSignatureS\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredSign\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultAdminFunction\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxStakerVault\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotDelegationSupervisor\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotEnoughShares\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnauthorizedCallContext\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpgradeFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"VaultNotAChildVault\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"VaultNotFound\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroShares\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"NewVault\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"RolesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"UpgradedAllVaults\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"UpgradedVault\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"SIGNED_DEPOSIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newVaultImpl\",\"type\":\"address\"}],\"name\":\"changeImplementation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"newVaultImpl\",\"type\":\"address\"}],\"name\":\"changeImplementationForVault\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"delegationSupervisor\",\"outputs\":[{\"internalType\":\"contract IDelegationSupervisor\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"depositToken\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"enum IVault.AssetType\",\"name\":\"assetType\",\"type\":\"uint8\"}],\"name\":\"deployVault\",\"outputs\":[{\"internalType\":\"contract IVault\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"permit\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"vaultAllowance\",\"type\":\"tuple\"}],\"name\":\"depositWithSignature\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"getDeposits\",\"outputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IERC20[]\",\"name\":\"tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"assets\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getUserNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getVaults\",\"outputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"grantRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAllRoles\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAnyRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_vaultImpl\",\"type\":\"address\"},{\"internalType\":\"contract ILimiter\",\"name\":\"_limiter\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_manager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proxiableUUID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"redeemShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"removeShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"renounceRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"revokeRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rolesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"fn\",\"type\":\"bytes\"}],\"name\":\"runAdminOperation\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ILimiter\",\"name\":\"limiter\",\"type\":\"address\"}],\"name\":\"setLimiter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"ECDSAInvalidSignature()\":[{\"details\":\"The signature derives the `address(0)`.\"}],\"ECDSAInvalidSignatureLength(uint256)\":[{\"details\":\"The signature has an invalid length.\"}],\"ECDSAInvalidSignatureS(bytes32)\":[{\"details\":\"The signature has an S value that is in the upper half order.\"}],\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}],\"UnauthorizedCallContext()\":[{\"details\":\"The call is from an unauthorized call context.\"}],\"UpgradeFailed()\":[{\"details\":\"The upgrade failed.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"},\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"RolesUpdated(address,uint256)\":{\"details\":\"The `user`'s roles is updated to `roles`. Each bit of `roles` represents whether the role is set.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the proxy's implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"grantRoles(address,uint256)\":{\"details\":\"Allows the owner to grant `user` `roles`. If the `user` already has a role, then it will be an no-op for the role.\"},\"hasAllRoles(address,uint256)\":{\"details\":\"Returns whether `user` has all of `roles`.\"},\"hasAnyRole(address,uint256)\":{\"details\":\"Returns whether `user` has any of `roles`.\"},\"implementation()\":{\"details\":\"Must return an address that can be used as a delegate call target. {UpgradeableBeacon} will check that this address is a contract.\"},\"implementation(address)\":{\"details\":\"Doesn't revert if the vault is not set yet because during `deployVault` theres a period before we set it to the default flag where the vault needs an impl to be initialized against\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"proxiableUUID()\":{\"details\":\"Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"renounceRoles(uint256)\":{\"details\":\"Allow the caller to remove their own roles. If the caller does not have a role, then it will be an no-op for the role.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"revokeRoles(address,uint256)\":{\"details\":\"Allows the owner to remove `user` `roles`. If the `user` does not have a role, then it will be an no-op for the role.\"},\"rolesOf(address)\":{\"details\":\"Returns the roles of `user`.\"},\"setLimiter(address)\":{\"details\":\"Allow for it to be set to address(0) in the future to disable the global limit\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/VaultSupervisor.sol\":\"VaultSupervisor\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007\",\"dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78\",\"dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/proxy/Clones.sol\":{\"keccak256\":\"0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b\",\"dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964\",\"dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/UUPSUpgradeable.sol\":{\"keccak256\":\"0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83\",\"dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC\"]},\"src/VaultSupervisor.sol\":{\"keccak256\":\"0xf30a10ca4ed9997d6b6529d5e034a41ded745ee48d1ed045893bd8aa9d59a07d\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://c5e99ba0b4c3b0732ab0ecf1934f029d373c3e9759cba4a43534d1e5a560fe64\",\"dweb:/ipfs/QmZgY2h2zutSwvyhrq6TuHqCmXpeFEwPhqVDPihhPCdFFG\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/VaultSupervisorLib.sol\":{\"keccak256\":\"0x7ead0d97e47b1dcfdff4d3818022e6f7b6025ed0b01a90c8bbaa8a74e20f1d20\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8537989797f2c023f36e783681d7d3c9c54824227ee398e66d2742bbc01239e4\",\"dweb:/ipfs/QmRuvdqXFEtLoyuCFEBzAwkKVT3LX5KT6hs2QamYn1gq9S\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
        "src/VaultSupervisor.sol": "VaultSupervisor"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/VaultSupervisor.sol",
    "id": 62328,
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
    "src": "51:13064:84",
    "nodes": [
      {
        "id": 61160,
        "nodeType": "PragmaDirective",
        "src": "51:24:84",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 61162,
        "nodeType": "ImportDirective",
        "src": "77:86:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "@openzeppelin-upgradeable/proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61161,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "85:13:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61164,
        "nodeType": "ImportDirective",
        "src": "164:93:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "file": "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 51007,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61163,
              "name": "IERC20Permit",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51006,
              "src": "172:12:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61166,
        "nodeType": "ImportDirective",
        "src": "258:92:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/PausableUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 47100,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61165,
              "name": "PausableUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47099,
              "src": "266:19:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61168,
        "nodeType": "ImportDirective",
        "src": "351:73:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 49892,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61167,
              "name": "IBeacon",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49891,
              "src": "359:7:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61170,
        "nodeType": "ImportDirective",
        "src": "425:64:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/Clones.sol",
        "file": "@openzeppelin/contracts/proxy/Clones.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 49447,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61169,
              "name": "Clones",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49446,
              "src": "433:6:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61172,
        "nodeType": "ImportDirective",
        "src": "490:81:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 49882,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61171,
              "name": "BeaconProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49881,
              "src": "498:11:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61174,
        "nodeType": "ImportDirective",
        "src": "572:101:84",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 47444,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61173,
              "name": "EIP712Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47443,
              "src": "580:17:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61176,
        "nodeType": "ImportDirective",
        "src": "674:69:84",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/UUPSUpgradeable.sol",
        "file": "solady/src/utils/UUPSUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 58966,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61175,
              "name": "UUPSUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58965,
              "src": "682:15:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61178,
        "nodeType": "ImportDirective",
        "src": "744:62:84",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/OwnableRoles.sol",
        "file": "solady/src/auth/OwnableRoles.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 55651,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61177,
              "name": "OwnableRoles",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 55650,
              "src": "752:12:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61180,
        "nodeType": "ImportDirective",
        "src": "807:69:84",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
        "file": "solady/src/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 58543,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61179,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58542,
              "src": "815:15:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61182,
        "nodeType": "ImportDirective",
        "src": "878:47:84",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63272,
        "symbolAliases": [
          {
            "foreign": {
              "id": 61181,
              "name": "IVault",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63271,
              "src": "886:6:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 61183,
        "nodeType": "ImportDirective",
        "src": "927:43:84",
        "nodes": [],
        "absolutePath": "src/interfaces/IVaultSupervisor.sol",
        "file": "./interfaces/IVaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63405,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61184,
        "nodeType": "ImportDirective",
        "src": "971:33:84",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61185,
        "nodeType": "ImportDirective",
        "src": "1005:48:84",
        "nodes": [],
        "absolutePath": "src/interfaces/IDelegationSupervisor.sol",
        "file": "./interfaces/IDelegationSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63098,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61186,
        "nodeType": "ImportDirective",
        "src": "1054:36:84",
        "nodes": [],
        "absolutePath": "src/interfaces/Constants.sol",
        "file": "./interfaces/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 62946,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61187,
        "nodeType": "ImportDirective",
        "src": "1091:33:84",
        "nodes": [],
        "absolutePath": "src/interfaces/Errors.sol",
        "file": "./interfaces/Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63004,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61188,
        "nodeType": "ImportDirective",
        "src": "1125:33:84",
        "nodes": [],
        "absolutePath": "src/interfaces/Events.sol",
        "file": "./interfaces/Events.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63036,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61189,
        "nodeType": "ImportDirective",
        "src": "1159:35:84",
        "nodes": [],
        "absolutePath": "src/interfaces/ILimiter.sol",
        "file": "./interfaces/ILimiter.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 63121,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 61190,
        "nodeType": "ImportDirective",
        "src": "1195:43:84",
        "nodes": [],
        "absolutePath": "src/entities/VaultSupervisorLib.sol",
        "file": "./entities/VaultSupervisorLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62328,
        "sourceUnit": 62714,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62327,
        "nodeType": "ContractDefinition",
        "src": "1240:11874:84",
        "nodes": [
          {
            "id": 61208,
            "nodeType": "UsingForDirective",
            "src": "1412:56:84",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 61205,
              "name": "VaultSupervisorLib",
              "nameLocations": [
                "1418:18:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62713,
              "src": "1418:18:84"
            },
            "typeName": {
              "id": 61207,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 61206,
                "name": "VaultSupervisorLib.Storage",
                "nameLocations": [
                  "1441:18:84",
                  "1460:7:84"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62483,
                "src": "1441:26:84"
              },
              "referencedDeclaration": 62483,
              "src": "1441:26:84",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                "typeString": "struct VaultSupervisorLib.Storage"
              }
            }
          },
          {
            "id": 61211,
            "nodeType": "VariableDeclaration",
            "src": "1581:107:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STORAGE_SLOT",
            "nameLocation": "1607:12:84",
            "scope": 62327,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 61209,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1581:7:84",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861383530663963623139306433346563613936386165656538633935316234373635653632373434643763313338343761336164333932616438363439313030",
              "id": 61210,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1622:66:84",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_76131630337518788502901501502746484041859407509608347545736598695983404323072_by_1",
                "typeString": "int_const 7613...(69 digits omitted)...3072"
              },
              "value": "0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100"
            },
            "visibility": "internal"
          },
          {
            "id": 61218,
            "nodeType": "FunctionDefinition",
            "src": "1747:53:84",
            "nodes": [],
            "body": {
              "id": 61217,
              "nodeType": "Block",
              "src": "1761:39:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61214,
                      "name": "_disableInitializers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46845,
                      "src": "1771:20:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 61215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1771:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61216,
                  "nodeType": "ExpressionStatement",
                  "src": "1771:22:84"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 61212,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1758:2:84"
            },
            "returnParameters": {
              "id": 61213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1761:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61263,
            "nodeType": "FunctionDefinition",
            "src": "1806:409:84",
            "nodes": [],
            "body": {
              "id": 61262,
              "nodeType": "Block",
              "src": "1955:260:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61233,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1982:3:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1986:6:84",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1982:10:84",
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
                      "id": 61232,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54002,
                      "src": "1965:16:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 61235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1965:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61236,
                  "nodeType": "ExpressionStatement",
                  "src": "1965:28:84"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61237,
                      "name": "__Pausable_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46975,
                      "src": "2003:15:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 61238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2003:17:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61239,
                  "nodeType": "ExpressionStatement",
                  "src": "2003:17:84"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61241,
                        "name": "_manager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61227,
                        "src": "2043:8:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 61242,
                          "name": "Constants",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62945,
                          "src": "2053:9:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                            "typeString": "type(library Constants)"
                          }
                        },
                        "id": 61243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2063:12:84",
                        "memberName": "MANAGER_ROLE",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62944,
                        "src": "2053:22:84",
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
                      "id": 61240,
                      "name": "_grantRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54182,
                      "src": "2031:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 61244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2031:45:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61245,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:45:84"
                },
                {
                  "assignments": [
                    61250
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61250,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "2122:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61262,
                      "src": "2087:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61249,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61248,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "2087:18:84",
                            "2106:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "2087:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "2087:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61253,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61251,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "2129:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2129:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2087:49:84"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61257,
                        "name": "_delegationSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61220,
                        "src": "2164:21:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61258,
                        "name": "_vaultImpl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61222,
                        "src": "2187:10:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61259,
                        "name": "_limiter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61225,
                        "src": "2199:8:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ILimiter_$63120",
                          "typeString": "contract ILimiter"
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
                          "typeIdentifier": "t_contract$_ILimiter_$63120",
                          "typeString": "contract ILimiter"
                        }
                      ],
                      "expression": {
                        "id": 61254,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61250,
                        "src": "2146:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 61256,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2151:12:84",
                      "memberName": "initOrUpdate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62535,
                      "src": "2146:17:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Storage_$62483_storage_ptr_$_t_address_$_t_address_$_t_contract$_ILimiter_$63120_$returns$__$attached_to$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function (struct VaultSupervisorLib.Storage storage pointer,address,address,contract ILimiter)"
                      }
                    },
                    "id": 61260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2146:62:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61261,
                  "nodeType": "ExpressionStatement",
                  "src": "2146:62:84"
                }
              ]
            },
            "baseFunctions": [
              63315
            ],
            "functionSelector": "f8c8765e",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61230,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61229,
                  "name": "initializer",
                  "nameLocations": [
                    "1939:11:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46731,
                  "src": "1939:11:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "1939:11:84"
              }
            ],
            "name": "initialize",
            "nameLocation": "1815:10:84",
            "parameters": {
              "id": 61228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61220,
                  "mutability": "mutable",
                  "name": "_delegationSupervisor",
                  "nameLocation": "1834:21:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61263,
                  "src": "1826:29:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1826:7:84",
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
                  "id": 61222,
                  "mutability": "mutable",
                  "name": "_vaultImpl",
                  "nameLocation": "1865:10:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61263,
                  "src": "1857:18:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1857:7:84",
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
                  "id": 61225,
                  "mutability": "mutable",
                  "name": "_limiter",
                  "nameLocation": "1886:8:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61263,
                  "src": "1877:17:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ILimiter_$63120",
                    "typeString": "contract ILimiter"
                  },
                  "typeName": {
                    "id": 61224,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61223,
                      "name": "ILimiter",
                      "nameLocations": [
                        "1877:8:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63120,
                      "src": "1877:8:84"
                    },
                    "referencedDeclaration": 63120,
                    "src": "1877:8:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61227,
                  "mutability": "mutable",
                  "name": "_manager",
                  "nameLocation": "1904:8:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61263,
                  "src": "1896:16:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61226,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1896:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1825:88:84"
            },
            "returnParameters": {
              "id": 61231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1955:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61285,
            "nodeType": "FunctionDefinition",
            "src": "2221:174:84",
            "nodes": [],
            "body": {
              "id": 61284,
              "nodeType": "Block",
              "src": "2329:66:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61278,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2362:3:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2366:6:84",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2362:10:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61280,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61266,
                        "src": "2374:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 61281,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61268,
                        "src": "2381:6:84",
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
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 61277,
                      "name": "depositInternal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62068,
                      "src": "2346:15:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,contract IVault,uint256) returns (uint256)"
                      }
                    },
                    "id": 61282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2346:42:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61276,
                  "id": 61283,
                  "nodeType": "Return",
                  "src": "2339:49:84"
                }
              ]
            },
            "baseFunctions": [
              63345
            ],
            "functionSelector": "47e7ef24",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61271,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61270,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2277:12:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2277:12:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "2277:12:84"
              },
              {
                "id": 61273,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61272,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2290:13:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "2290:13:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "2290:13:84"
              }
            ],
            "name": "deposit",
            "nameLocation": "2230:7:84",
            "parameters": {
              "id": 61269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61266,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "2245:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61285,
                  "src": "2238:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61265,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61264,
                      "name": "IVault",
                      "nameLocations": [
                        "2238:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "2238:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "2238:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61268,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2260:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61285,
                  "src": "2252:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61267,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2252:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2237:30:84"
            },
            "returnParameters": {
              "id": 61276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61275,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2321:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61285,
                  "src": "2313:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2313:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2312:16:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61346,
            "nodeType": "FunctionDefinition",
            "src": "2401:539:84",
            "nodes": [],
            "body": {
              "id": 61345,
              "nodeType": "Block",
              "src": "2669:271:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61313
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61313,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "2714:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61345,
                      "src": "2679:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61312,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61311,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "2679:18:84",
                            "2698:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "2679:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "2679:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61316,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61314,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "2721:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2721:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2679:49:84"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61320,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61288,
                        "src": "2774:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 61321,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61290,
                        "src": "2781:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61322,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61292,
                        "src": "2787:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61323,
                        "name": "deadline",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61294,
                        "src": "2794:8:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61324,
                        "name": "permit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61297,
                        "src": "2804:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                          "typeString": "struct IVaultSupervisor.Signature calldata"
                        }
                      },
                      {
                        "id": 61325,
                        "name": "vaultAllowance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61300,
                        "src": "2812:14:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                          "typeString": "struct IVaultSupervisor.Signature calldata"
                        }
                      },
                      {
                        "baseExpression": {
                          "expression": {
                            "id": 61326,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61313,
                            "src": "2828:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 61327,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2833:9:84",
                          "memberName": "userNonce",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62466,
                          "src": "2828:14:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 61329,
                        "indexExpression": {
                          "id": 61328,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61290,
                          "src": "2843:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2828:20:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
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
                        },
                        {
                          "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                          "typeString": "struct IVaultSupervisor.Signature calldata"
                        },
                        {
                          "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                          "typeString": "struct IVaultSupervisor.Signature calldata"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 61317,
                        "name": "VaultSupervisorLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62713,
                        "src": "2738:18:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_VaultSupervisorLib_$62713_$",
                          "typeString": "type(library VaultSupervisorLib)"
                        }
                      },
                      "id": 61319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2757:16:84",
                      "memberName": "verifySignatures",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62614,
                      "src": "2738:35:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IVault_$63271_$_t_address_$_t_uint256_$_t_uint256_$_t_struct$_Signature_$63284_calldata_ptr_$_t_struct$_Signature_$63284_calldata_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IVault,address,uint256,uint256,struct IVaultSupervisor.Signature calldata,struct IVaultSupervisor.Signature calldata,uint256)"
                      }
                    },
                    "id": 61330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2738:111:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61331,
                  "nodeType": "ExpressionStatement",
                  "src": "2738:111:84"
                },
                {
                  "expression": {
                    "id": 61337,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "2859:22:84",
                    "subExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 61332,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61313,
                          "src": "2859:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61335,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2864:9:84",
                        "memberName": "userNonce",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62466,
                        "src": "2859:14:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 61336,
                      "indexExpression": {
                        "id": 61334,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61290,
                        "src": "2874:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2859:20:84",
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
                  "id": 61338,
                  "nodeType": "ExpressionStatement",
                  "src": "2859:22:84"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61340,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61290,
                        "src": "2914:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61341,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61288,
                        "src": "2920:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 61342,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61292,
                        "src": "2927:5:84",
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
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 61339,
                      "name": "depositInternal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62068,
                      "src": "2898:15:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,contract IVault,uint256) returns (uint256)"
                      }
                    },
                    "id": 61343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2898:35:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61308,
                  "id": 61344,
                  "nodeType": "Return",
                  "src": "2891:42:84"
                }
              ]
            },
            "baseFunctions": [
              63391
            ],
            "functionSelector": "6ff09141",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61303,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61302,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2617:12:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2617:12:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "2617:12:84"
              },
              {
                "id": 61305,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61304,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2630:13:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "2630:13:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "2630:13:84"
              }
            ],
            "name": "depositWithSignature",
            "nameLocation": "2410:20:84",
            "parameters": {
              "id": 61301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61288,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "2447:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2440:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61287,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61286,
                      "name": "IVault",
                      "nameLocations": [
                        "2440:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "2440:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "2440:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61290,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2470:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2462:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2462:7:84",
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
                  "id": 61292,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2492:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2484:13:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2484:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61294,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "2515:8:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2507:16:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2507:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61297,
                  "mutability": "mutable",
                  "name": "permit",
                  "nameLocation": "2552:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2533:25:84",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                    "typeString": "struct IVaultSupervisor.Signature"
                  },
                  "typeName": {
                    "id": 61296,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61295,
                      "name": "Signature",
                      "nameLocations": [
                        "2533:9:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63284,
                      "src": "2533:9:84"
                    },
                    "referencedDeclaration": 63284,
                    "src": "2533:9:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$63284_storage_ptr",
                      "typeString": "struct IVaultSupervisor.Signature"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61300,
                  "mutability": "mutable",
                  "name": "vaultAllowance",
                  "nameLocation": "2587:14:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2568:33:84",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                    "typeString": "struct IVaultSupervisor.Signature"
                  },
                  "typeName": {
                    "id": 61299,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61298,
                      "name": "Signature",
                      "nameLocations": [
                        "2568:9:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63284,
                      "src": "2568:9:84"
                    },
                    "referencedDeclaration": 63284,
                    "src": "2568:9:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$63284_storage_ptr",
                      "typeString": "struct IVaultSupervisor.Signature"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2430:177:84"
            },
            "returnParameters": {
              "id": 61308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61307,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2661:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61346,
                  "src": "2653:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2653:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2652:16:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61375,
            "nodeType": "FunctionDefinition",
            "src": "2946:233:84",
            "nodes": [],
            "body": {
              "id": 61374,
              "nodeType": "Block",
              "src": "3119:60:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61366,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61353,
                        "src": "3142:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61367,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61348,
                        "src": "3150:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 61370,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3166:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                              "typeString": "contract VaultSupervisor"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                              "typeString": "contract VaultSupervisor"
                            }
                          ],
                          "id": 61369,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3158:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 61368,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3158:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3158:13:84",
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
                        "id": 61363,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61351,
                        "src": "3129:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      "id": 61365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3135:6:84",
                      "memberName": "redeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63231,
                      "src": "3129:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) external returns (uint256)"
                      }
                    },
                    "id": 61372,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3129:43:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 61373,
                  "nodeType": "ExpressionStatement",
                  "src": "3129:43:84"
                }
              ]
            },
            "baseFunctions": [
              63325
            ],
            "functionSelector": "51ffb74a",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61356,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61355,
                  "name": "onlyDelegationSupervisor",
                  "nameLocations": [
                    "3039:24:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62316,
                  "src": "3039:24:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3039:24:84"
              },
              {
                "arguments": [
                  {
                    "id": 61358,
                    "name": "vault",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61351,
                    "src": "3087:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  }
                ],
                "id": 61359,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61357,
                  "name": "onlyChildVault",
                  "nameLocations": [
                    "3072:14:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62291,
                  "src": "3072:14:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3072:21:84"
              },
              {
                "id": 61361,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61360,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "3102:12:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "3102:12:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3102:12:84"
              }
            ],
            "name": "redeemShares",
            "nameLocation": "2955:12:84",
            "parameters": {
              "id": 61354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61348,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "2976:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61375,
                  "src": "2968:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61347,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2968:7:84",
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
                  "id": 61351,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "2991:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61375,
                  "src": "2984:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61350,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61349,
                      "name": "IVault",
                      "nameLocations": [
                        "2984:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "2984:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "2984:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61353,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3006:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61375,
                  "src": "2998:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2998:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2967:46:84"
            },
            "returnParameters": {
              "id": 61362,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3119:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61451,
            "nodeType": "FunctionDefinition",
            "src": "3185:742:84",
            "nodes": [],
            "body": {
              "id": 61450,
              "nodeType": "Block",
              "src": "3358:569:84",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61392,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61382,
                      "src": "3372:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3382:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3372:11:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61398,
                  "nodeType": "IfStatement",
                  "src": "3368:36:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61395,
                        "name": "ZeroShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62965,
                        "src": "3392:10:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3392:12:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61397,
                    "nodeType": "RevertStatement",
                    "src": "3385:19:84"
                  }
                },
                {
                  "assignments": [
                    61403
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61403,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "3449:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61450,
                      "src": "3414:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61402,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61401,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "3414:18:84",
                            "3433:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "3414:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "3414:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61406,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61404,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "3456:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3456:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3414:49:84"
                },
                {
                  "assignments": [
                    61408
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61408,
                      "mutability": "mutable",
                      "name": "userShares",
                      "nameLocation": "3481:10:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61450,
                      "src": "3473:18:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61407,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3473:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61415,
                  "initialValue": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 61409,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61403,
                          "src": "3494:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61410,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3499:12:84",
                        "memberName": "stakerShares",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62456,
                        "src": "3494:17:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(contract IVault => uint256))"
                        }
                      },
                      "id": 61412,
                      "indexExpression": {
                        "id": 61411,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61377,
                        "src": "3512:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3494:25:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$",
                        "typeString": "mapping(contract IVault => uint256)"
                      }
                    },
                    "id": 61414,
                    "indexExpression": {
                      "id": 61413,
                      "name": "vault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61380,
                      "src": "3520:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3494:32:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3473:53:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61416,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61382,
                      "src": "3540:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 61417,
                      "name": "userShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61408,
                      "src": "3549:10:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3540:19:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61422,
                  "nodeType": "IfStatement",
                  "src": "3536:49:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61419,
                        "name": "NotEnoughShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62977,
                        "src": "3568:15:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61420,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3568:17:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61421,
                    "nodeType": "RevertStatement",
                    "src": "3561:24:84"
                  }
                },
                {
                  "id": 61429,
                  "nodeType": "UncheckedBlock",
                  "src": "3660:67:84",
                  "statements": [
                    {
                      "expression": {
                        "id": 61427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61423,
                          "name": "userShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61408,
                          "src": "3684:10:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61424,
                            "name": "userShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61408,
                            "src": "3697:10:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 61425,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61382,
                            "src": "3710:6:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3697:19:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3684:32:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61428,
                      "nodeType": "ExpressionStatement",
                      "src": "3684:32:84"
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 61438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 61430,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61403,
                            "src": "3737:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 61434,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3742:12:84",
                          "memberName": "stakerShares",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62456,
                          "src": "3737:17:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(contract IVault => uint256))"
                          }
                        },
                        "id": 61435,
                        "indexExpression": {
                          "id": 61432,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61377,
                          "src": "3755:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3737:25:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$",
                          "typeString": "mapping(contract IVault => uint256)"
                        }
                      },
                      "id": 61436,
                      "indexExpression": {
                        "id": 61433,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61380,
                        "src": "3763:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3737:32:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61437,
                      "name": "userShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61408,
                      "src": "3772:10:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3737:45:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 61439,
                  "nodeType": "ExpressionStatement",
                  "src": "3737:45:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61440,
                      "name": "userShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61408,
                      "src": "3843:10:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3857:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3843:15:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61449,
                  "nodeType": "IfStatement",
                  "src": "3839:82:84",
                  "trueBody": {
                    "id": 61448,
                    "nodeType": "Block",
                    "src": "3860:61:84",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 61444,
                              "name": "staker",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61377,
                              "src": "3896:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 61445,
                              "name": "vault",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61380,
                              "src": "3904:5:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
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
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              }
                            ],
                            "id": 61443,
                            "name": "removeVaultFromStaker",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62226,
                            "src": "3874:21:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_contract$_IVault_$63271_$returns$__$",
                              "typeString": "function (address,contract IVault)"
                            }
                          },
                          "id": 61446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3874:36:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61447,
                        "nodeType": "ExpressionStatement",
                        "src": "3874:36:84"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              63335
            ],
            "functionSelector": "8c80d4e5",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61385,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61384,
                  "name": "onlyDelegationSupervisor",
                  "nameLocations": [
                    "3278:24:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62316,
                  "src": "3278:24:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3278:24:84"
              },
              {
                "arguments": [
                  {
                    "id": 61387,
                    "name": "vault",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61380,
                    "src": "3326:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  }
                ],
                "id": 61388,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61386,
                  "name": "onlyChildVault",
                  "nameLocations": [
                    "3311:14:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62291,
                  "src": "3311:14:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3311:21:84"
              },
              {
                "id": 61390,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61389,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "3341:12:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "3341:12:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3341:12:84"
              }
            ],
            "name": "removeShares",
            "nameLocation": "3194:12:84",
            "parameters": {
              "id": 61383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61377,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "3215:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61451,
                  "src": "3207:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61376,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3207:7:84",
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
                  "id": 61380,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "3230:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61451,
                  "src": "3223:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61379,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61378,
                      "name": "IVault",
                      "nameLocations": [
                        "3223:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "3223:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "3223:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61382,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3245:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61451,
                  "src": "3237:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3237:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:46:84"
            },
            "returnParameters": {
              "id": 61391,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3358:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61469,
            "nodeType": "FunctionDefinition",
            "src": "3933:142:84",
            "nodes": [],
            "body": {
              "id": 61468,
              "nodeType": "Block",
              "src": "4012:63:84",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 61460,
                    "name": "toPause",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61453,
                    "src": "4026:7:84",
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
                        "id": 61464,
                        "name": "_unpause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47098,
                        "src": "4058:8:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 61465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4058:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61466,
                    "nodeType": "ExpressionStatement",
                    "src": "4058:10:84"
                  },
                  "id": 61467,
                  "nodeType": "IfStatement",
                  "src": "4022:46:84",
                  "trueBody": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61461,
                        "name": "_pause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47074,
                        "src": "4035:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 61462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4035:8:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61463,
                    "nodeType": "ExpressionStatement",
                    "src": "4035:8:84"
                  }
                }
              ]
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 61456,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "3988:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 61457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "3998:12:84",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "3988:22:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 61458,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61455,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "3971:16:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "3971:16:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "3971:40:84"
              }
            ],
            "name": "pause",
            "nameLocation": "3942:5:84",
            "parameters": {
              "id": 61454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61453,
                  "mutability": "mutable",
                  "name": "toPause",
                  "nameLocation": "3953:7:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61469,
                  "src": "3948:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61452,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3948:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3947:14:84"
            },
            "returnParameters": {
              "id": 61459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4012:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61547,
            "nodeType": "FunctionDefinition",
            "src": "4081:701:84",
            "nodes": [],
            "body": {
              "id": 61546,
              "nodeType": "Block",
              "src": "4288:494:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61493
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61493,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "4333:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61546,
                      "src": "4298:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61492,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61491,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "4298:18:84",
                            "4317:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "4298:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "4298:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61496,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61494,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "4340:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4340:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4298:49:84"
                },
                {
                  "assignments": [
                    61499
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61499,
                      "mutability": "mutable",
                      "name": "vault",
                      "nameLocation": "4364:5:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61546,
                      "src": "4357:12:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      },
                      "typeName": {
                        "id": 61498,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61497,
                          "name": "IVault",
                          "nameLocations": [
                            "4357:6:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 63271,
                          "src": "4357:6:84"
                        },
                        "referencedDeclaration": 63271,
                        "src": "4357:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61516,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 61503,
                              "name": "IVault",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63271,
                              "src": "4410:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                                "typeString": "type(contract IVault)"
                              }
                            },
                            "id": 61504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4417:10:84",
                            "memberName": "initialize",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63211,
                            "src": "4410:17:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_contract$_IERC20_$50790_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_enum$_AssetType_$63196_$returns$__$",
                              "typeString": "function IVault.initialize(address,contract IERC20,string memory,string memory,enum IVault.AssetType)"
                            }
                          },
                          {
                            "components": [
                              {
                                "arguments": [
                                  {
                                    "id": 61507,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4438:4:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                                      "typeString": "contract VaultSupervisor"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                                      "typeString": "contract VaultSupervisor"
                                    }
                                  ],
                                  "id": 61506,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4430:7:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 61505,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4430:7:84",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 61508,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4430:13:84",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 61509,
                                "name": "depositToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61472,
                                "src": "4445:12:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$50790",
                                  "typeString": "contract IERC20"
                                }
                              },
                              {
                                "id": 61510,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61474,
                                "src": "4459:4:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "id": 61511,
                                "name": "symbol",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61476,
                                "src": "4465:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "id": 61512,
                                "name": "assetType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61479,
                                "src": "4473:9:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_AssetType_$63196",
                                  "typeString": "enum IVault.AssetType"
                                }
                              }
                            ],
                            "id": 61513,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "4429:54:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_contract$_IERC20_$50790_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_enum$_AssetType_$63196_$",
                              "typeString": "tuple(address,contract IERC20,string memory,string memory,enum IVault.AssetType)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_contract$_IERC20_$50790_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_enum$_AssetType_$63196_$returns$__$",
                              "typeString": "function IVault.initialize(address,contract IERC20,string memory,string memory,enum IVault.AssetType)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_contract$_IERC20_$50790_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_enum$_AssetType_$63196_$",
                              "typeString": "tuple(address,contract IERC20,string memory,string memory,enum IVault.AssetType)"
                            }
                          ],
                          "expression": {
                            "id": 61501,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4395:3:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 61502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4399:10:84",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "4395:14:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 61514,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4395:89:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 61500,
                      "name": "cloneVault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62250,
                      "src": "4384:10:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$returns$_t_contract$_IVault_$63271_$",
                        "typeString": "function (bytes memory) returns (contract IVault)"
                      }
                    },
                    "id": 61515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4384:101:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4357:128:84"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 61522,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61499,
                        "src": "4512:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "id": 61517,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61493,
                          "src": "4495:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61520,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4500:6:84",
                        "memberName": "vaults",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62474,
                        "src": "4495:11:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                          "typeString": "contract IVault[] storage ref"
                        }
                      },
                      "id": 61521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4507:4:84",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "4495:16:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$_t_contract$_IVault_$63271_$returns$__$attached_to$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$",
                        "typeString": "function (contract IVault[] storage pointer,contract IVault)"
                      }
                    },
                    "id": 61523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4495:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61524,
                  "nodeType": "ExpressionStatement",
                  "src": "4495:23:84"
                },
                {
                  "expression": {
                    "id": 61535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 61525,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61493,
                          "src": "4633:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61531,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4638:14:84",
                        "memberName": "vaultToImplMap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62470,
                        "src": "4633:19:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 61532,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 61529,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61499,
                            "src": "4661:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          ],
                          "id": 61528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4653:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 61527,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4653:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4653:14:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4633:35:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 61533,
                        "name": "Constants",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62945,
                        "src": "4671:9:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                          "typeString": "type(library Constants)"
                        }
                      },
                      "id": 61534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4681:33:84",
                      "memberName": "DEFAULT_VAULT_IMPLEMENTATION_FLAG",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62939,
                      "src": "4671:43:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4633:81:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61536,
                  "nodeType": "ExpressionStatement",
                  "src": "4633:81:84"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 61540,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61499,
                            "src": "4746:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          ],
                          "id": 61539,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4738:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 61538,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4738:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4738:14:84",
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
                      "id": 61537,
                      "name": "NewVault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63035,
                      "src": "4729:8:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 61542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4729:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61543,
                  "nodeType": "EmitStatement",
                  "src": "4724:29:84"
                },
                {
                  "expression": {
                    "id": 61544,
                    "name": "vault",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61499,
                    "src": "4770:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "functionReturnParameters": 61488,
                  "id": 61545,
                  "nodeType": "Return",
                  "src": "4763:12:84"
                }
              ]
            },
            "baseFunctions": [
              63361
            ],
            "functionSelector": "f0edf6aa",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 61482,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "4235:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 61483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "4245:12:84",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "4235:22:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 61484,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61481,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "4218:16:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "4218:16:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "4218:40:84"
              }
            ],
            "name": "deployVault",
            "nameLocation": "4090:11:84",
            "parameters": {
              "id": 61480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61472,
                  "mutability": "mutable",
                  "name": "depositToken",
                  "nameLocation": "4109:12:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61547,
                  "src": "4102:19:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$50790",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 61471,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61470,
                      "name": "IERC20",
                      "nameLocations": [
                        "4102:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 50790,
                      "src": "4102:6:84"
                    },
                    "referencedDeclaration": 50790,
                    "src": "4102:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61474,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4137:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61547,
                  "src": "4123:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61473,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4123:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61476,
                  "mutability": "mutable",
                  "name": "symbol",
                  "nameLocation": "4157:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61547,
                  "src": "4143:20:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4143:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61479,
                  "mutability": "mutable",
                  "name": "assetType",
                  "nameLocation": "4182:9:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61547,
                  "src": "4165:26:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetType_$63196",
                    "typeString": "enum IVault.AssetType"
                  },
                  "typeName": {
                    "id": 61478,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61477,
                      "name": "IVault.AssetType",
                      "nameLocations": [
                        "4165:6:84",
                        "4172:9:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63196,
                      "src": "4165:16:84"
                    },
                    "referencedDeclaration": 63196,
                    "src": "4165:16:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4101:91:84"
            },
            "returnParameters": {
              "id": 61488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61487,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61547,
                  "src": "4276:6:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61486,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61485,
                      "name": "IVault",
                      "nameLocations": [
                        "4276:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "4276:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "4276:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4275:8:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61583,
            "nodeType": "FunctionDefinition",
            "src": "4788:284:84",
            "nodes": [],
            "body": {
              "id": 61582,
              "nodeType": "Block",
              "src": "4859:213:84",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 61559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61554,
                      "name": "newVaultImpl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61549,
                      "src": "4873:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 61557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4897:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 61556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4889:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 61555,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4889:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 61558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4889:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4873:26:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61563,
                  "nodeType": "IfStatement",
                  "src": "4869:52:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61560,
                        "name": "ZeroAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62953,
                        "src": "4908:11:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4908:13:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61562,
                    "nodeType": "RevertStatement",
                    "src": "4901:20:84"
                  }
                },
                {
                  "assignments": [
                    61568
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61568,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "4966:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61582,
                      "src": "4931:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61567,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61566,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "4931:18:84",
                            "4950:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "4931:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "4931:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61571,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61569,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "4973:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4931:49:84"
                },
                {
                  "expression": {
                    "id": 61576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 61572,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61568,
                        "src": "4990:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 61574,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4995:9:84",
                      "memberName": "vaultImpl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62476,
                      "src": "4990:14:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61575,
                      "name": "newVaultImpl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61549,
                      "src": "5007:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4990:29:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61577,
                  "nodeType": "ExpressionStatement",
                  "src": "4990:29:84"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 61579,
                        "name": "newVaultImpl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61549,
                        "src": "5052:12:84",
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
                      "id": 61578,
                      "name": "UpgradedAllVaults",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62326,
                      "src": "5034:17:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 61580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5034:31:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61581,
                  "nodeType": "EmitStatement",
                  "src": "5029:36:84"
                }
              ]
            },
            "functionSelector": "17a68dd8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61552,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61551,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "4849:9:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "4849:9:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "4849:9:84"
              }
            ],
            "name": "changeImplementation",
            "nameLocation": "4797:20:84",
            "parameters": {
              "id": 61550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61549,
                  "mutability": "mutable",
                  "name": "newVaultImpl",
                  "nameLocation": "4826:12:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61583,
                  "src": "4818:20:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61548,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4818:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4817:22:84"
            },
            "returnParameters": {
              "id": 61553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4859:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61637,
            "nodeType": "FunctionDefinition",
            "src": "5078:699:84",
            "nodes": [],
            "body": {
              "id": 61636,
              "nodeType": "Block",
              "src": "5172:605:84",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 61597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61592,
                      "name": "newVaultImpl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61587,
                      "src": "5343:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 61595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5367:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 61594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5359:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 61593,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5359:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 61596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5359:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5343:26:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61601,
                  "nodeType": "IfStatement",
                  "src": "5339:52:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61598,
                        "name": "ZeroAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62953,
                        "src": "5378:11:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5378:13:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61600,
                    "nodeType": "RevertStatement",
                    "src": "5371:20:84"
                  }
                },
                {
                  "assignments": [
                    61606
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61606,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "5437:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61636,
                      "src": "5402:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61605,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61604,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "5402:18:84",
                            "5421:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "5402:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "5402:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61609,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61607,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "5444:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61608,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5444:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5402:49:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 61618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 61610,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61606,
                          "src": "5599:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61611,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5604:14:84",
                        "memberName": "vaultToImplMap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62470,
                        "src": "5599:19:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 61613,
                      "indexExpression": {
                        "id": 61612,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61585,
                        "src": "5619:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5599:26:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 61616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5637:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 61615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5629:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 61614,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5629:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 61617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5629:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5599:40:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61622,
                  "nodeType": "IfStatement",
                  "src": "5595:74:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 61619,
                        "name": "VaultNotAChildVault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62969,
                        "src": "5648:19:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 61620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5648:21:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 61621,
                    "nodeType": "RevertStatement",
                    "src": "5641:28:84"
                  }
                },
                {
                  "expression": {
                    "id": 61629,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 61623,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61606,
                          "src": "5680:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61626,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5685:14:84",
                        "memberName": "vaultToImplMap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62470,
                        "src": "5680:19:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 61627,
                      "indexExpression": {
                        "id": 61625,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61585,
                        "src": "5700:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5680:26:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61628,
                      "name": "newVaultImpl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61587,
                      "src": "5709:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5680:41:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61630,
                  "nodeType": "ExpressionStatement",
                  "src": "5680:41:84"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 61632,
                        "name": "newVaultImpl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61587,
                        "src": "5750:12:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61633,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61585,
                        "src": "5764:5:84",
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
                      "id": 61631,
                      "name": "UpgradedVault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62322,
                      "src": "5736:13:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 61634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5736:34:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61635,
                  "nodeType": "EmitStatement",
                  "src": "5731:39:84"
                }
              ]
            },
            "functionSelector": "aa0a050c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 61590,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61589,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5162:9:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "5162:9:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "5162:9:84"
              }
            ],
            "name": "changeImplementationForVault",
            "nameLocation": "5087:28:84",
            "parameters": {
              "id": 61588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61585,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "5124:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61637,
                  "src": "5116:13:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5116:7:84",
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
                  "id": 61587,
                  "mutability": "mutable",
                  "name": "newVaultImpl",
                  "nameLocation": "5139:12:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61637,
                  "src": "5131:20:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61586,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5131:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5115:37:84"
            },
            "returnParameters": {
              "id": 61591,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5172:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61663,
            "nodeType": "FunctionDefinition",
            "src": "5883:186:84",
            "nodes": [],
            "body": {
              "id": 61662,
              "nodeType": "Block",
              "src": "5971:98:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61652
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61652,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "6016:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61662,
                      "src": "5981:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61651,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61650,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "5981:18:84",
                            "6000:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "5981:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "5981:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61655,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61653,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "6023:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6023:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5981:49:84"
                },
                {
                  "expression": {
                    "id": 61660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 61656,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61652,
                        "src": "6040:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 61658,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6045:7:84",
                      "memberName": "limiter",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62482,
                      "src": "6040:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ILimiter_$63120",
                        "typeString": "contract ILimiter"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61659,
                      "name": "limiter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61641,
                      "src": "6055:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ILimiter_$63120",
                        "typeString": "contract ILimiter"
                      }
                    },
                    "src": "6040:22:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "id": 61661,
                  "nodeType": "ExpressionStatement",
                  "src": "6040:22:84"
                }
              ]
            },
            "documentation": {
              "id": 61638,
              "nodeType": "StructuredDocumentation",
              "src": "5783:95:84",
              "text": "@dev Allow for it to be set to address(0)\n in the future to disable the global limit"
            },
            "functionSelector": "7a29084c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 61644,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "5947:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 61645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5957:12:84",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "5947:22:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 61646,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61643,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "5930:16:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "5930:16:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "5930:40:84"
              }
            ],
            "name": "setLimiter",
            "nameLocation": "5892:10:84",
            "parameters": {
              "id": 61642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61641,
                  "mutability": "mutable",
                  "name": "limiter",
                  "nameLocation": "5912:7:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61663,
                  "src": "5903:16:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ILimiter_$63120",
                    "typeString": "contract ILimiter"
                  },
                  "typeName": {
                    "id": 61640,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61639,
                      "name": "ILimiter",
                      "nameLocations": [
                        "5903:8:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63120,
                      "src": "5903:8:84"
                    },
                    "referencedDeclaration": 63120,
                    "src": "5903:8:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5902:18:84"
            },
            "returnParameters": {
              "id": 61647,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5971:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61744,
            "nodeType": "FunctionDefinition",
            "src": "6075:1127:84",
            "nodes": [],
            "body": {
              "id": 61743,
              "nodeType": "Block",
              "src": "6257:945:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61680
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61680,
                      "mutability": "mutable",
                      "name": "incomingFnSelector",
                      "nameLocation": "6274:18:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61743,
                      "src": "6267:25:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 61679,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "6267:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61685,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 61683,
                        "name": "fn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61668,
                        "src": "6302:2:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 61682,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6295:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 61681,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "6295:6:84",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 61684,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6295:10:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6267:38:84"
                },
                {
                  "assignments": [
                    61687
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61687,
                      "mutability": "mutable",
                      "name": "isValidAdminFunction",
                      "nameLocation": "6320:20:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61743,
                      "src": "6315:25:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 61686,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6315:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61706,
                  "initialValue": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 61704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 61698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            "id": 61692,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61688,
                              "name": "incomingFnSelector",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61680,
                              "src": "6357:18:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 61689,
                                  "name": "IVault",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63271,
                                  "src": "6379:6:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                                    "typeString": "type(contract IVault)"
                                  }
                                },
                                "id": 61690,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6386:8:84",
                                "memberName": "setLimit",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 63236,
                                "src": "6379:15:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$returns$__$",
                                  "typeString": "function IVault.setLimit(uint256)"
                                }
                              },
                              "id": 61691,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6395:8:84",
                              "memberName": "selector",
                              "nodeType": "MemberAccess",
                              "src": "6379:24:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "src": "6357:46:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            "id": 61697,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61693,
                              "name": "incomingFnSelector",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61680,
                              "src": "6407:18:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 61694,
                                  "name": "IVault",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63271,
                                  "src": "6429:6:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                                    "typeString": "type(contract IVault)"
                                  }
                                },
                                "id": 61695,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6436:17:84",
                                "memberName": "transferOwnership",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 63251,
                                "src": "6429:24:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$returns$__$",
                                  "typeString": "function IVault.transferOwnership(address)"
                                }
                              },
                              "id": 61696,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6454:8:84",
                              "memberName": "selector",
                              "nodeType": "MemberAccess",
                              "src": "6429:33:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "src": "6407:55:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6357:105:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 61703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61699,
                            "name": "incomingFnSelector",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61680,
                            "src": "6482:18:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "expression": {
                                "id": 61700,
                                "name": "IVault",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63271,
                                "src": "6504:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                                  "typeString": "type(contract IVault)"
                                }
                              },
                              "id": 61701,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6511:5:84",
                              "memberName": "pause",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 63241,
                              "src": "6504:12:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_declaration_nonpayable$_t_bool_$returns$__$",
                                "typeString": "function IVault.pause(bool)"
                              }
                            },
                            "id": 61702,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "6517:8:84",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "6504:21:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "6482:43:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "6357:168:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 61705,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6343:192:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6315:220:84"
                },
                {
                  "condition": {
                    "id": 61708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6549:21:84",
                    "subExpression": {
                      "id": 61707,
                      "name": "isValidAdminFunction",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61687,
                      "src": "6550:20:84",
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
                  "id": 61713,
                  "nodeType": "IfStatement",
                  "src": "6545:86:84",
                  "trueBody": {
                    "id": 61712,
                    "nodeType": "Block",
                    "src": "6572:59:84",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 61709,
                            "name": "InvalidVaultAdminFunction",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62979,
                            "src": "6593:25:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 61710,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6593:27:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61711,
                        "nodeType": "RevertStatement",
                        "src": "6586:34:84"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 61718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61714,
                      "name": "incomingFnSelector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61680,
                      "src": "6706:18:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 61715,
                          "name": "IVault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63271,
                          "src": "6728:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                            "typeString": "type(contract IVault)"
                          }
                        },
                        "id": 61716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6735:17:84",
                        "memberName": "transferOwnership",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63251,
                        "src": "6728:24:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$returns$__$",
                          "typeString": "function IVault.transferOwnership(address)"
                        }
                      },
                      "id": 61717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6753:8:84",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "6728:33:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "6706:55:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61723,
                  "nodeType": "IfStatement",
                  "src": "6702:99:84",
                  "trueBody": {
                    "id": 61722,
                    "nodeType": "Block",
                    "src": "6763:38:84",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 61719,
                            "name": "_checkOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54022,
                            "src": "6777:11:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$__$",
                              "typeString": "function () view"
                            }
                          },
                          "id": 61720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6777:13:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61721,
                        "nodeType": "ExpressionStatement",
                        "src": "6777:13:84"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    61725,
                    61727
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61725,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6817:7:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61743,
                      "src": "6812:12:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 61724,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6812:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 61727,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "6839:6:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61743,
                      "src": "6826:19:84",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 61726,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6826:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61735,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 61733,
                        "name": "fn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61668,
                        "src": "6869:2:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 61730,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61666,
                            "src": "6857:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          ],
                          "id": 61729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6849:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 61728,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6849:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6849:14:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 61732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6864:4:84",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "6849:19:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 61734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6849:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6811:61:84"
                },
                {
                  "condition": {
                    "id": 61737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6887:8:84",
                    "subExpression": {
                      "id": 61736,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61725,
                      "src": "6888:7:84",
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
                  "id": 61740,
                  "nodeType": "IfStatement",
                  "src": "6883:289:84",
                  "trueBody": {
                    "id": 61739,
                    "nodeType": "Block",
                    "src": "6897:275:84",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "7099:63:84",
                          "nodeType": "YulBlock",
                          "src": "7099:63:84",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nativeSrc": "7128:6:84",
                                        "nodeType": "YulIdentifier",
                                        "src": "7128:6:84"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7136:2:84",
                                        "nodeType": "YulLiteral",
                                        "src": "7136:2:84",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "7124:3:84",
                                      "nodeType": "YulIdentifier",
                                      "src": "7124:3:84"
                                    },
                                    "nativeSrc": "7124:15:84",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7124:15:84"
                                  },
                                  {
                                    "name": "result",
                                    "nativeSrc": "7141:6:84",
                                    "nodeType": "YulIdentifier",
                                    "src": "7141:6:84"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "7117:6:84",
                                  "nodeType": "YulIdentifier",
                                  "src": "7117:6:84"
                                },
                                "nativeSrc": "7117:31:84",
                                "nodeType": "YulFunctionCall",
                                "src": "7117:31:84"
                              },
                              "nativeSrc": "7117:31:84",
                              "nodeType": "YulExpressionStatement",
                              "src": "7117:31:84"
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 61727,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7128:6:84",
                            "valueSize": 1
                          },
                          {
                            "declaration": 61727,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7141:6:84",
                            "valueSize": 1
                          }
                        ],
                        "id": 61738,
                        "nodeType": "InlineAssembly",
                        "src": "7090:72:84"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 61741,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61727,
                    "src": "7189:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 61678,
                  "id": 61742,
                  "nodeType": "Return",
                  "src": "7182:13:84"
                }
              ]
            },
            "baseFunctions": [
              63371
            ],
            "functionSelector": "c1f09e30",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 61671,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "6177:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 61672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "6187:12:84",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "6177:22:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 61673,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61670,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "6160:16:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "6160:16:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "6160:40:84"
              },
              {
                "id": 61675,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 61674,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "6209:12:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "6209:12:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "6209:12:84"
              }
            ],
            "name": "runAdminOperation",
            "nameLocation": "6084:17:84",
            "parameters": {
              "id": 61669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61666,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "6109:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61744,
                  "src": "6102:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 61665,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61664,
                      "name": "IVault",
                      "nameLocations": [
                        "6102:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "6102:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "6102:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61668,
                  "mutability": "mutable",
                  "name": "fn",
                  "nameLocation": "6131:2:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61744,
                  "src": "6116:17:84",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 61667,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6116:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6101:33:84"
            },
            "returnParameters": {
              "id": 61678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61677,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61744,
                  "src": "6239:12:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 61676,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6239:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6238:14:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61752,
            "nodeType": "FunctionDefinition",
            "src": "7247:149:84",
            "nodes": [],
            "body": {
              "id": 61751,
              "nodeType": "Block",
              "src": "7325:71:84",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7344:46:84",
                    "nodeType": "YulBlock",
                    "src": "7344:46:84",
                    "statements": [
                      {
                        "nativeSrc": "7358:22:84",
                        "nodeType": "YulAssignment",
                        "src": "7358:22:84",
                        "value": {
                          "name": "STORAGE_SLOT",
                          "nativeSrc": "7368:12:84",
                          "nodeType": "YulIdentifier",
                          "src": "7368:12:84"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "7358:6:84",
                            "nodeType": "YulIdentifier",
                            "src": "7358:6:84"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 61748,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "7358:6:84",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 61211,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7368:12:84",
                      "valueSize": 1
                    }
                  ],
                  "id": 61750,
                  "nodeType": "InlineAssembly",
                  "src": "7335:55:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_self",
            "nameLocation": "7256:5:84",
            "parameters": {
              "id": 61745,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7261:2:84"
            },
            "returnParameters": {
              "id": 61749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61748,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "7322:1:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61752,
                  "src": "7287:36:84",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                    "typeString": "struct VaultSupervisorLib.Storage"
                  },
                  "typeName": {
                    "id": 61747,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61746,
                      "name": "VaultSupervisorLib.Storage",
                      "nameLocations": [
                        "7287:18:84",
                        "7306:7:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62483,
                      "src": "7287:26:84"
                    },
                    "referencedDeclaration": 62483,
                    "src": "7287:26:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7286:38:84"
            },
            "scope": 62327,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61761,
            "nodeType": "FunctionDefinition",
            "src": "7402:122:84",
            "nodes": [],
            "body": {
              "id": 61760,
              "nodeType": "Block",
              "src": "7467:57:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 61757,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "7484:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 61758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "7494:23:84",
                    "memberName": "SIGNED_DEPOSIT_TYPEHASH",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62928,
                    "src": "7484:33:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 61756,
                  "id": 61759,
                  "nodeType": "Return",
                  "src": "7477:40:84"
                }
              ]
            },
            "baseFunctions": [
              63396
            ],
            "functionSelector": "e4af8b22",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "SIGNED_DEPOSIT_TYPEHASH",
            "nameLocation": "7411:23:84",
            "parameters": {
              "id": 61753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7434:2:84"
            },
            "returnParameters": {
              "id": 61756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61755,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61761,
                  "src": "7458:7:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61754,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7458:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7457:9:84"
            },
            "scope": 62327,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61892,
            "nodeType": "FunctionDefinition",
            "src": "7530:855:84",
            "nodes": [],
            "body": {
              "id": 61891,
              "nodeType": "Block",
              "src": "7716:669:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61784
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61784,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "7761:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61891,
                      "src": "7726:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61783,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61782,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "7726:18:84",
                            "7745:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "7726:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "7726:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61787,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61785,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "7768:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7768:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7726:49:84"
                },
                {
                  "assignments": [
                    61789
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61789,
                      "mutability": "mutable",
                      "name": "vaultLength",
                      "nameLocation": "7793:11:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61891,
                      "src": "7785:19:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61788,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7785:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61795,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "expression": {
                          "id": 61790,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61784,
                          "src": "7807:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 61791,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7812:13:84",
                        "memberName": "stakersVaults",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62462,
                        "src": "7807:18:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                          "typeString": "mapping(address => contract IVault[] storage ref)"
                        }
                      },
                      "id": 61793,
                      "indexExpression": {
                        "id": 61792,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61763,
                        "src": "7826:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "7807:26:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                        "typeString": "contract IVault[] storage ref"
                      }
                    },
                    "id": 61794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7834:6:84",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "7807:33:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7785:55:84"
                },
                {
                  "expression": {
                    "id": 61802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61796,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61775,
                      "src": "7850:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 61800,
                          "name": "vaultLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61789,
                          "src": "7873:11:84",
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
                        "id": 61799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "7859:13:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 61797,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7863:7:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 61798,
                          "nodeType": "ArrayTypeName",
                          "src": "7863:9:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 61801,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7859:26:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "7850:35:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "id": 61803,
                  "nodeType": "ExpressionStatement",
                  "src": "7850:35:84"
                },
                {
                  "expression": {
                    "id": 61810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61804,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61778,
                      "src": "7895:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 61808,
                          "name": "vaultLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61789,
                          "src": "7918:11:84",
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
                        "id": 61807,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "7904:13:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 61805,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7908:7:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 61806,
                          "nodeType": "ArrayTypeName",
                          "src": "7908:9:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 61809,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7904:26:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "7895:35:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "id": 61811,
                  "nodeType": "ExpressionStatement",
                  "src": "7895:35:84"
                },
                {
                  "expression": {
                    "id": 61819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61812,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61772,
                      "src": "7940:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                        "typeString": "contract IERC20[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 61817,
                          "name": "vaultLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61789,
                          "src": "7962:11:84",
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
                        "id": 61816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "7949:12:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (contract IERC20[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 61814,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 61813,
                              "name": "IERC20",
                              "nameLocations": [
                                "7953:6:84"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 50790,
                              "src": "7953:6:84"
                            },
                            "referencedDeclaration": 50790,
                            "src": "7953:6:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$50790",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 61815,
                          "nodeType": "ArrayTypeName",
                          "src": "7953:8:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                            "typeString": "contract IERC20[]"
                          }
                        }
                      },
                      "id": 61818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7949:25:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                        "typeString": "contract IERC20[] memory"
                      }
                    },
                    "src": "7940:34:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                      "typeString": "contract IERC20[] memory"
                    }
                  },
                  "id": 61820,
                  "nodeType": "ExpressionStatement",
                  "src": "7940:34:84"
                },
                {
                  "body": {
                    "id": 61880,
                    "nodeType": "Block",
                    "src": "8027:283:84",
                    "statements": [
                      {
                        "assignments": [
                          61832
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 61832,
                            "mutability": "mutable",
                            "name": "_shares",
                            "nameLocation": "8049:7:84",
                            "nodeType": "VariableDeclaration",
                            "scope": 61880,
                            "src": "8041:15:84",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 61831,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8041:7:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 61844,
                        "initialValue": {
                          "baseExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 61833,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61784,
                                "src": "8059:4:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                  "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                }
                              },
                              "id": 61834,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8064:12:84",
                              "memberName": "stakerShares",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62456,
                              "src": "8059:17:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(contract IVault => uint256))"
                              }
                            },
                            "id": 61836,
                            "indexExpression": {
                              "id": 61835,
                              "name": "staker",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61763,
                              "src": "8077:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8059:25:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$",
                              "typeString": "mapping(contract IVault => uint256)"
                            }
                          },
                          "id": 61843,
                          "indexExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 61837,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61784,
                                  "src": "8085:4:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                    "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                  }
                                },
                                "id": 61838,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8090:13:84",
                                "memberName": "stakersVaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62462,
                                "src": "8085:18:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                  "typeString": "mapping(address => contract IVault[] storage ref)"
                                }
                              },
                              "id": 61840,
                              "indexExpression": {
                                "id": 61839,
                                "name": "staker",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61763,
                                "src": "8104:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8085:26:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            },
                            "id": 61842,
                            "indexExpression": {
                              "id": 61841,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61822,
                              "src": "8112:1:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8085:29:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8059:56:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8041:74:84"
                      },
                      {
                        "expression": {
                          "id": 61857,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 61845,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61775,
                              "src": "8129:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 61847,
                            "indexExpression": {
                              "id": 61846,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61822,
                              "src": "8136:1:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8129:9:84",
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
                                "id": 61855,
                                "name": "_shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61832,
                                "src": "8187:7:84",
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
                              "expression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 61848,
                                      "name": "self",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61784,
                                      "src": "8141:4:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                        "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                      }
                                    },
                                    "id": 61849,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "8146:13:84",
                                    "memberName": "stakersVaults",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 62462,
                                    "src": "8141:18:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                      "typeString": "mapping(address => contract IVault[] storage ref)"
                                    }
                                  },
                                  "id": 61851,
                                  "indexExpression": {
                                    "id": 61850,
                                    "name": "staker",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61763,
                                    "src": "8160:6:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "8141:26:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                    "typeString": "contract IVault[] storage ref"
                                  }
                                },
                                "id": 61853,
                                "indexExpression": {
                                  "id": 61852,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61822,
                                  "src": "8168:1:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8141:29:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              },
                              "id": 61854,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8171:15:84",
                              "memberName": "convertToAssets",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 49090,
                              "src": "8141:45:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view external returns (uint256)"
                              }
                            },
                            "id": 61856,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8141:54:84",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8129:66:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61858,
                        "nodeType": "ExpressionStatement",
                        "src": "8129:66:84"
                      },
                      {
                        "expression": {
                          "id": 61863,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 61859,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61778,
                              "src": "8209:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 61861,
                            "indexExpression": {
                              "id": 61860,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61822,
                              "src": "8216:1:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8209:9:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 61862,
                            "name": "_shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61832,
                            "src": "8221:7:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8209:19:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61864,
                        "nodeType": "ExpressionStatement",
                        "src": "8209:19:84"
                      },
                      {
                        "expression": {
                          "id": 61878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 61865,
                              "name": "tokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61772,
                              "src": "8242:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                                "typeString": "contract IERC20[] memory"
                              }
                            },
                            "id": 61867,
                            "indexExpression": {
                              "id": 61866,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61822,
                              "src": "8249:1:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8242:9:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$50790",
                              "typeString": "contract IERC20"
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
                                  "expression": {
                                    "baseExpression": {
                                      "baseExpression": {
                                        "expression": {
                                          "id": 61869,
                                          "name": "self",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 61784,
                                          "src": "8261:4:84",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                          }
                                        },
                                        "id": 61870,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "8266:13:84",
                                        "memberName": "stakersVaults",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 62462,
                                        "src": "8261:18:84",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                          "typeString": "mapping(address => contract IVault[] storage ref)"
                                        }
                                      },
                                      "id": 61872,
                                      "indexExpression": {
                                        "id": 61871,
                                        "name": "staker",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 61763,
                                        "src": "8280:6:84",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "8261:26:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                        "typeString": "contract IVault[] storage ref"
                                      }
                                    },
                                    "id": 61874,
                                    "indexExpression": {
                                      "id": 61873,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61822,
                                      "src": "8288:1:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "8261:29:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IVault_$63271",
                                      "typeString": "contract IVault"
                                    }
                                  },
                                  "id": 61875,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8291:5:84",
                                  "memberName": "asset",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 49068,
                                  "src": "8261:35:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                                    "typeString": "function () view external returns (address)"
                                  }
                                },
                                "id": 61876,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8261:37:84",
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
                              "id": 61868,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50790,
                              "src": "8254:6:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$50790_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 61877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8254:45:84",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$50790",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "8242:57:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$50790",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 61879,
                        "nodeType": "ExpressionStatement",
                        "src": "8242:57:84"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61825,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61822,
                      "src": "8005:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 61826,
                      "name": "vaultLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61789,
                      "src": "8009:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8005:15:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61881,
                  "initializationExpression": {
                    "assignments": [
                      61822
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 61822,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "7998:1:84",
                        "nodeType": "VariableDeclaration",
                        "scope": 61881,
                        "src": "7990:9:84",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 61821,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "7990:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 61824,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 61823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8002:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7990:13:84"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 61829,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "8022:3:84",
                      "subExpression": {
                        "id": 61828,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61822,
                        "src": "8022:1:84",
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
                    "id": 61830,
                    "nodeType": "ExpressionStatement",
                    "src": "8022:3:84"
                  },
                  "nodeType": "ForStatement",
                  "src": "7985:325:84"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "baseExpression": {
                          "expression": {
                            "id": 61882,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61784,
                            "src": "8327:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 61883,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8332:13:84",
                          "memberName": "stakersVaults",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62462,
                          "src": "8327:18:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                            "typeString": "mapping(address => contract IVault[] storage ref)"
                          }
                        },
                        "id": 61885,
                        "indexExpression": {
                          "id": 61884,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61763,
                          "src": "8346:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8327:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                          "typeString": "contract IVault[] storage ref"
                        }
                      },
                      {
                        "id": 61886,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61772,
                        "src": "8355:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                          "typeString": "contract IERC20[] memory"
                        }
                      },
                      {
                        "id": 61887,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61775,
                        "src": "8363:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 61888,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61778,
                        "src": "8371:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 61889,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8326:52:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$_t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(contract IVault[] storage ref,contract IERC20[] memory,uint256[] memory,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 61779,
                  "id": 61890,
                  "nodeType": "Return",
                  "src": "8319:59:84"
                }
              ]
            },
            "baseFunctions": [
              63303
            ],
            "functionSelector": "94f649dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDeposits",
            "nameLocation": "7539:11:84",
            "parameters": {
              "id": 61764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61763,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "7559:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61892,
                  "src": "7551:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61762,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7551:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7550:16:84"
            },
            "returnParameters": {
              "id": 61779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61768,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "7630:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61892,
                  "src": "7614:22:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61766,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 61765,
                        "name": "IVault",
                        "nameLocations": [
                          "7614:6:84"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "7614:6:84"
                      },
                      "referencedDeclaration": 63271,
                      "src": "7614:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 61767,
                    "nodeType": "ArrayTypeName",
                    "src": "7614:8:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61772,
                  "mutability": "mutable",
                  "name": "tokens",
                  "nameLocation": "7654:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61892,
                  "src": "7638:22:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                    "typeString": "contract IERC20[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61770,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 61769,
                        "name": "IERC20",
                        "nameLocations": [
                          "7638:6:84"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 50790,
                        "src": "7638:6:84"
                      },
                      "referencedDeclaration": 50790,
                      "src": "7638:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$50790",
                        "typeString": "contract IERC20"
                      }
                    },
                    "id": 61771,
                    "nodeType": "ArrayTypeName",
                    "src": "7638:8:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                      "typeString": "contract IERC20[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61775,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "7679:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61892,
                  "src": "7662:23:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61773,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7662:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61774,
                    "nodeType": "ArrayTypeName",
                    "src": "7662:9:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61778,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "7704:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61892,
                  "src": "7687:23:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61776,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7687:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61777,
                    "nodeType": "ArrayTypeName",
                    "src": "7687:9:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7613:98:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61904,
            "nodeType": "FunctionDefinition",
            "src": "8391:117:84",
            "nodes": [],
            "body": {
              "id": 61903,
              "nodeType": "Block",
              "src": "8458:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61899,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "8490:3:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8494:6:84",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "8490:10:84",
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
                      "id": 61898,
                      "name": "implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61946,
                      "src": "8475:14:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view returns (address)"
                      }
                    },
                    "id": 61901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8475:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 61897,
                  "id": 61902,
                  "nodeType": "Return",
                  "src": "8468:33:84"
                }
              ]
            },
            "baseFunctions": [
              49890
            ],
            "functionSelector": "5c60da1b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "implementation",
            "nameLocation": "8400:14:84",
            "overrides": {
              "id": 61894,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "8431:8:84"
            },
            "parameters": {
              "id": 61893,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8414:2:84"
            },
            "returnParameters": {
              "id": 61897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61896,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61904,
                  "src": "8449:7:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61895,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8449:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8448:9:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61946,
            "nodeType": "FunctionDefinition",
            "src": "8724:394:84",
            "nodes": [],
            "body": {
              "id": 61945,
              "nodeType": "Block",
              "src": "8793:325:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61916
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61916,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "8838:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61945,
                      "src": "8803:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61915,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61914,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "8803:18:84",
                            "8822:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "8803:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "8803:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61919,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61917,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "8845:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8845:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8803:49:84"
                },
                {
                  "assignments": [
                    61921
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61921,
                      "mutability": "mutable",
                      "name": "vaultImplOverride",
                      "nameLocation": "8870:17:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61945,
                      "src": "8862:25:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 61920,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "8862:7:84",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61926,
                  "initialValue": {
                    "baseExpression": {
                      "expression": {
                        "id": 61922,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61916,
                        "src": "8890:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 61923,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8895:14:84",
                      "memberName": "vaultToImplMap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62470,
                      "src": "8890:19:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                        "typeString": "mapping(address => address)"
                      }
                    },
                    "id": 61925,
                    "indexExpression": {
                      "id": 61924,
                      "name": "vault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61907,
                      "src": "8910:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "8890:26:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8862:54:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 61937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 61930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61927,
                        "name": "vaultImplOverride",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61921,
                        "src": "8931:17:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 61928,
                          "name": "Constants",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62945,
                          "src": "8952:9:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                            "typeString": "type(library Constants)"
                          }
                        },
                        "id": 61929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "8962:33:84",
                        "memberName": "DEFAULT_VAULT_IMPLEMENTATION_FLAG",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62939,
                        "src": "8952:43:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8931:64:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 61936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61931,
                        "name": "vaultImplOverride",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61921,
                        "src": "8999:17:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 61934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9028:1:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 61933,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9020:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 61932,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "9020:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61935,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9020:10:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8999:31:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8931:99:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61942,
                  "nodeType": "IfStatement",
                  "src": "8927:151:84",
                  "trueBody": {
                    "id": 61941,
                    "nodeType": "Block",
                    "src": "9032:46:84",
                    "statements": [
                      {
                        "expression": {
                          "expression": {
                            "id": 61938,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61916,
                            "src": "9053:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 61939,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9058:9:84",
                          "memberName": "vaultImpl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62476,
                          "src": "9053:14:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "functionReturnParameters": 61911,
                        "id": 61940,
                        "nodeType": "Return",
                        "src": "9046:21:84"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 61943,
                    "name": "vaultImplOverride",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61921,
                    "src": "9094:17:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 61911,
                  "id": 61944,
                  "nodeType": "Return",
                  "src": "9087:24:84"
                }
              ]
            },
            "documentation": {
              "id": 61905,
              "nodeType": "StructuredDocumentation",
              "src": "8514:205:84",
              "text": "@dev Doesn't revert if the vault is not set yet because during `deployVault`\n theres a period before we set it to the default flag where the vault\n needs an impl to be initialized against"
            },
            "functionSelector": "6b880718",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "implementation",
            "nameLocation": "8733:14:84",
            "parameters": {
              "id": 61908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61907,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "8756:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61946,
                  "src": "8748:13:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61906,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8748:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8747:15:84"
            },
            "returnParameters": {
              "id": 61911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61910,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61946,
                  "src": "8784:7:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8784:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8783:9:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61964,
            "nodeType": "FunctionDefinition",
            "src": "9124:184:84",
            "nodes": [],
            "body": {
              "id": 61963,
              "nodeType": "Block",
              "src": "9200:108:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61956
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61956,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "9245:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61963,
                      "src": "9210:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61955,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61954,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "9210:18:84",
                            "9229:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "9210:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "9210:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61959,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61957,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "9252:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9252:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9210:49:84"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 61960,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61956,
                      "src": "9276:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                      }
                    },
                    "id": 61961,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9281:20:84",
                    "memberName": "delegationSupervisor",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62479,
                    "src": "9276:25:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "functionReturnParameters": 61951,
                  "id": 61962,
                  "nodeType": "Return",
                  "src": "9269:32:84"
                }
              ]
            },
            "functionSelector": "df670448",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "delegationSupervisor",
            "nameLocation": "9133:20:84",
            "parameters": {
              "id": 61947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9153:2:84"
            },
            "returnParameters": {
              "id": 61951,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61950,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61964,
                  "src": "9177:21:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                    "typeString": "contract IDelegationSupervisor"
                  },
                  "typeName": {
                    "id": 61949,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61948,
                      "name": "IDelegationSupervisor",
                      "nameLocations": [
                        "9177:21:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63097,
                      "src": "9177:21:84"
                    },
                    "referencedDeclaration": 63097,
                    "src": "9177:21:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9176:23:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 61985,
            "nodeType": "FunctionDefinition",
            "src": "9314:171:84",
            "nodes": [],
            "body": {
              "id": 61984,
              "nodeType": "Block",
              "src": "9382:103:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61975
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61975,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "9427:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 61984,
                      "src": "9392:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61974,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61973,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "9392:18:84",
                            "9411:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "9392:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "9392:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61978,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61976,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "9434:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9434:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9392:49:84"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 61979,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61975,
                        "src": "9458:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 61980,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9463:9:84",
                      "memberName": "userNonce",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62466,
                      "src": "9458:14:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 61982,
                    "indexExpression": {
                      "id": 61981,
                      "name": "user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61966,
                      "src": "9473:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9458:20:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61970,
                  "id": 61983,
                  "nodeType": "Return",
                  "src": "9451:27:84"
                }
              ]
            },
            "baseFunctions": [
              63403
            ],
            "functionSelector": "6834e3a8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUserNonce",
            "nameLocation": "9323:12:84",
            "parameters": {
              "id": 61967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61966,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "9344:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 61985,
                  "src": "9336:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9336:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9335:14:84"
            },
            "returnParameters": {
              "id": 61970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61969,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61985,
                  "src": "9373:7:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9373:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9372:9:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 62004,
            "nodeType": "FunctionDefinition",
            "src": "9491:155:84",
            "nodes": [],
            "body": {
              "id": 62003,
              "nodeType": "Block",
              "src": "9552:94:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61996
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61996,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "9597:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62003,
                      "src": "9562:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 61995,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61994,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "9562:18:84",
                            "9581:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "9562:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "9562:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61999,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 61997,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "9604:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 61998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9604:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9562:49:84"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 62000,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61996,
                      "src": "9628:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                      }
                    },
                    "id": 62001,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9633:6:84",
                    "memberName": "vaults",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62474,
                    "src": "9628:11:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                      "typeString": "contract IVault[] storage ref"
                    }
                  },
                  "functionReturnParameters": 61991,
                  "id": 62002,
                  "nodeType": "Return",
                  "src": "9621:18:84"
                }
              ]
            },
            "functionSelector": "44d00f82",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVaults",
            "nameLocation": "9500:9:84",
            "parameters": {
              "id": 61986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9509:2:84"
            },
            "returnParameters": {
              "id": 61991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62004,
                  "src": "9535:15:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61988,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 61987,
                        "name": "IVault",
                        "nameLocations": [
                          "9535:6:84"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "9535:6:84"
                      },
                      "referencedDeclaration": 63271,
                      "src": "9535:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 61989,
                    "nodeType": "ArrayTypeName",
                    "src": "9535:8:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9534:17:84"
            },
            "scope": 62327,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 62068,
            "nodeType": "FunctionDefinition",
            "src": "9704:972:84",
            "nodes": [],
            "body": {
              "id": 62067,
              "nodeType": "Block",
              "src": "9881:795:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62025,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "9926:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62067,
                      "src": "9891:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 62024,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62023,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "9891:18:84",
                            "9910:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "9891:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "9891:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62028,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 62026,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "9933:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 62027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9933:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9891:49:84"
                },
                {
                  "expression": {
                    "id": 62035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62029,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62019,
                      "src": "9950:6:84",
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
                          "id": 62032,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62011,
                          "src": "9973:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 62033,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62006,
                          "src": "9981:6:84",
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
                          "id": 62030,
                          "name": "vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62009,
                          "src": "9959:5:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVault_$63271",
                            "typeString": "contract IVault"
                          }
                        },
                        "id": 62031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9965:7:84",
                        "memberName": "deposit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63220,
                        "src": "9959:13:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (uint256,address) external returns (uint256)"
                        }
                      },
                      "id": 62034,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9959:29:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9950:38:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62036,
                  "nodeType": "ExpressionStatement",
                  "src": "9950:38:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 62039,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62025,
                            "src": "10174:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 62040,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10179:7:84",
                          "memberName": "limiter",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62482,
                          "src": "10174:12:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ILimiter_$63120",
                            "typeString": "contract ILimiter"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_ILimiter_$63120",
                            "typeString": "contract ILimiter"
                          }
                        ],
                        "id": 62038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10166:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62037,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10166:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62041,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10166:21:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 62044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10199:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 62043,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10191:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62042,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10191:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10191:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10166:35:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62058,
                  "nodeType": "IfStatement",
                  "src": "10162:141:84",
                  "trueBody": {
                    "id": 62057,
                    "nodeType": "Block",
                    "src": "10203:100:84",
                    "statements": [
                      {
                        "condition": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 62050,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62025,
                                "src": "10250:4:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                  "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                }
                              },
                              "id": 62051,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10255:6:84",
                              "memberName": "vaults",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62474,
                              "src": "10250:11:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 62047,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62025,
                                "src": "10221:4:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                  "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                }
                              },
                              "id": 62048,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10226:7:84",
                              "memberName": "limiter",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62482,
                              "src": "10221:12:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ILimiter_$63120",
                                "typeString": "contract ILimiter"
                              }
                            },
                            "id": 62049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10234:15:84",
                            "memberName": "isLimitBreached",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63109,
                            "src": "10221:28:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (contract IVault[] memory) external returns (bool)"
                            }
                          },
                          "id": 62052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10221:41:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 62056,
                        "nodeType": "IfStatement",
                        "src": "10217:75:84",
                        "trueBody": {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 62053,
                              "name": "CrossedDepositLimit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63001,
                              "src": "10271:19:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 62054,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10271:21:84",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 62055,
                          "nodeType": "RevertStatement",
                          "src": "10264:28:84"
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 62060,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62006,
                        "src": "10409:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62061,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62009,
                        "src": "10417:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 62062,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62019,
                        "src": "10424:6:84",
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
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 62059,
                      "name": "increaseShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62145,
                      "src": "10394:14:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_contract$_IVault_$63271_$_t_uint256_$returns$__$",
                        "typeString": "function (address,contract IVault,uint256)"
                      }
                    },
                    "id": 62063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10394:37:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62064,
                  "nodeType": "ExpressionStatement",
                  "src": "10394:37:84"
                },
                {
                  "expression": {
                    "id": 62065,
                    "name": "shares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62019,
                    "src": "10663:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62020,
                  "id": 62066,
                  "nodeType": "Return",
                  "src": "10656:13:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 62014,
                    "name": "vault",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62009,
                    "src": "9815:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  }
                ],
                "id": 62015,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62013,
                  "name": "onlyChildVault",
                  "nameLocations": [
                    "9800:14:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62291,
                  "src": "9800:14:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "9800:21:84"
              },
              {
                "id": 62017,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62016,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "9830:13:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "9830:13:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "9830:13:84"
              }
            ],
            "name": "depositInternal",
            "nameLocation": "9713:15:84",
            "parameters": {
              "id": 62012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62006,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "9737:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "9729:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62005,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9729:7:84",
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
                  "id": 62009,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "9752:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "9745:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 62008,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62007,
                      "name": "IVault",
                      "nameLocations": [
                        "9745:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "9745:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "9745:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62011,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "9767:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "9759:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9728:46:84"
            },
            "returnParameters": {
              "id": 62020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62019,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "9869:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "9861:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9861:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9860:16:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62145,
            "nodeType": "FunctionDefinition",
            "src": "10682:720:84",
            "nodes": [],
            "body": {
              "id": 62144,
              "nodeType": "Block",
              "src": "10761:641:84",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62078,
                      "name": "staker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62070,
                      "src": "10810:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 62081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10828:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 62080,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10820:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62079,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10820:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62082,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10820:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10810:20:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62087,
                  "nodeType": "IfStatement",
                  "src": "10806:46:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62084,
                        "name": "ZeroAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62953,
                        "src": "10839:11:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10839:13:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62086,
                    "nodeType": "RevertStatement",
                    "src": "10832:20:84"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62088,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62075,
                      "src": "10866:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10876:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10866:11:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62094,
                  "nodeType": "IfStatement",
                  "src": "10862:36:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62091,
                        "name": "ZeroShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62965,
                        "src": "10886:10:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10886:12:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62093,
                    "nodeType": "RevertStatement",
                    "src": "10879:19:84"
                  }
                },
                {
                  "assignments": [
                    62099
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62099,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "10944:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62144,
                      "src": "10909:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 62098,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62097,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "10909:18:84",
                            "10928:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "10909:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "10909:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62102,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 62100,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "10951:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 62101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10951:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10909:49:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 62103,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62099,
                            "src": "11055:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 62104,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11060:12:84",
                          "memberName": "stakerShares",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62456,
                          "src": "11055:17:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(contract IVault => uint256))"
                          }
                        },
                        "id": 62106,
                        "indexExpression": {
                          "id": 62105,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62070,
                          "src": "11073:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11055:25:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$",
                          "typeString": "mapping(contract IVault => uint256)"
                        }
                      },
                      "id": 62108,
                      "indexExpression": {
                        "id": 62107,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62073,
                        "src": "11081:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "11055:32:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11091:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11055:37:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62133,
                  "nodeType": "IfStatement",
                  "src": "11051:217:84",
                  "trueBody": {
                    "id": 62132,
                    "nodeType": "Block",
                    "src": "11094:174:84",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 62118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 62111,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62099,
                                  "src": "11112:4:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                    "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                  }
                                },
                                "id": 62112,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11117:13:84",
                                "memberName": "stakersVaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62462,
                                "src": "11112:18:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                  "typeString": "mapping(address => contract IVault[] storage ref)"
                                }
                              },
                              "id": 62114,
                              "indexExpression": {
                                "id": 62113,
                                "name": "staker",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62070,
                                "src": "11131:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "11112:26:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            },
                            "id": 62115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11139:6:84",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "11112:33:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "expression": {
                              "id": 62116,
                              "name": "Constants",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62945,
                              "src": "11149:9:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                                "typeString": "type(library Constants)"
                              }
                            },
                            "id": 62117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "11159:21:84",
                            "memberName": "MAX_VAULTS_PER_STAKER",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62923,
                            "src": "11149:31:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "11112:68:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 62122,
                        "nodeType": "IfStatement",
                        "src": "11108:97:84",
                        "trueBody": {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 62119,
                              "name": "MaxStakerVault",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62967,
                              "src": "11189:14:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 62120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11189:16:84",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 62121,
                          "nodeType": "RevertStatement",
                          "src": "11182:23:84"
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 62129,
                              "name": "vault",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62073,
                              "src": "11251:5:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              }
                            ],
                            "expression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 62123,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62099,
                                  "src": "11219:4:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                    "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                  }
                                },
                                "id": 62126,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11224:13:84",
                                "memberName": "stakersVaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62462,
                                "src": "11219:18:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                  "typeString": "mapping(address => contract IVault[] storage ref)"
                                }
                              },
                              "id": 62127,
                              "indexExpression": {
                                "id": 62125,
                                "name": "staker",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62070,
                                "src": "11238:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "11219:26:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            },
                            "id": 62128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11246:4:84",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "11219:31:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$_t_contract$_IVault_$63271_$returns$__$attached_to$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$",
                              "typeString": "function (contract IVault[] storage pointer,contract IVault)"
                            }
                          },
                          "id": 62130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11219:38:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62131,
                        "nodeType": "ExpressionStatement",
                        "src": "11219:38:84"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 62142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 62134,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62099,
                            "src": "11353:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 62138,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11358:12:84",
                          "memberName": "stakerShares",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62456,
                          "src": "11353:17:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(contract IVault => uint256))"
                          }
                        },
                        "id": 62139,
                        "indexExpression": {
                          "id": 62136,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62070,
                          "src": "11371:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11353:25:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_contract$_IVault_$63271_$_t_uint256_$",
                          "typeString": "mapping(contract IVault => uint256)"
                        }
                      },
                      "id": 62140,
                      "indexExpression": {
                        "id": 62137,
                        "name": "vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62073,
                        "src": "11379:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11353:32:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 62141,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62075,
                      "src": "11389:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11353:42:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62143,
                  "nodeType": "ExpressionStatement",
                  "src": "11353:42:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "increaseShares",
            "nameLocation": "10691:14:84",
            "parameters": {
              "id": 62076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62070,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "10714:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62145,
                  "src": "10706:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10706:7:84",
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
                  "id": 62073,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "10729:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62145,
                  "src": "10722:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 62072,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62071,
                      "name": "IVault",
                      "nameLocations": [
                        "10722:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "10722:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "10722:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62075,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "10744:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62145,
                  "src": "10736:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62074,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10736:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10705:46:84"
            },
            "returnParameters": {
              "id": 62077,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10761:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62226,
            "nodeType": "FunctionDefinition",
            "src": "11408:758:84",
            "nodes": [],
            "body": {
              "id": 62225,
              "nodeType": "Block",
              "src": "11478:688:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62157
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62157,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "11523:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62225,
                      "src": "11488:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 62156,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62155,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "11488:18:84",
                            "11507:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "11488:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "11488:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62160,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 62158,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "11530:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 62159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11530:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11488:49:84"
                },
                {
                  "assignments": [
                    62162
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62162,
                      "mutability": "mutable",
                      "name": "vaultsLength",
                      "nameLocation": "11555:12:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62225,
                      "src": "11547:20:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 62161,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11547:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62168,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "expression": {
                          "id": 62163,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62157,
                          "src": "11570:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 62164,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11575:13:84",
                        "memberName": "stakersVaults",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62462,
                        "src": "11570:18:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                          "typeString": "mapping(address => contract IVault[] storage ref)"
                        }
                      },
                      "id": 62166,
                      "indexExpression": {
                        "id": 62165,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62147,
                        "src": "11589:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "11570:26:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                        "typeString": "contract IVault[] storage ref"
                      }
                    },
                    "id": 62167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "11597:6:84",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "11570:33:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11547:56:84"
                },
                {
                  "assignments": [
                    62170
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62170,
                      "mutability": "mutable",
                      "name": "i",
                      "nameLocation": "11621:1:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62225,
                      "src": "11613:9:84",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 62169,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11613:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62172,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 62171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "11625:1:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11613:13:84"
                },
                {
                  "body": {
                    "id": 62208,
                    "nodeType": "Block",
                    "src": "11661:402:84",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_contract$_IVault_$63271",
                            "typeString": "contract IVault"
                          },
                          "id": 62183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 62176,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62157,
                                  "src": "11679:4:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                    "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                  }
                                },
                                "id": 62177,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11684:13:84",
                                "memberName": "stakersVaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62462,
                                "src": "11679:18:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                  "typeString": "mapping(address => contract IVault[] storage ref)"
                                }
                              },
                              "id": 62179,
                              "indexExpression": {
                                "id": 62178,
                                "name": "staker",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62147,
                                "src": "11698:6:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "11679:26:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                "typeString": "contract IVault[] storage ref"
                              }
                            },
                            "id": 62181,
                            "indexExpression": {
                              "id": 62180,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62170,
                              "src": "11706:1:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "11679:29:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 62182,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62150,
                            "src": "11712:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          },
                          "src": "11679:38:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 62203,
                        "nodeType": "IfStatement",
                        "src": "11675:319:84",
                        "trueBody": {
                          "id": 62202,
                          "nodeType": "Block",
                          "src": "11719:275:84",
                          "statements": [
                            {
                              "expression": {
                                "id": 62199,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "expression": {
                                        "id": 62184,
                                        "name": "self",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 62157,
                                        "src": "11880:4:84",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                        }
                                      },
                                      "id": 62188,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "11885:13:84",
                                      "memberName": "stakersVaults",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 62462,
                                      "src": "11880:18:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                        "typeString": "mapping(address => contract IVault[] storage ref)"
                                      }
                                    },
                                    "id": 62189,
                                    "indexExpression": {
                                      "id": 62186,
                                      "name": "staker",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62147,
                                      "src": "11899:6:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "11880:26:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                      "typeString": "contract IVault[] storage ref"
                                    }
                                  },
                                  "id": 62190,
                                  "indexExpression": {
                                    "id": 62187,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62170,
                                    "src": "11907:1:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "11880:29:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IVault_$63271",
                                    "typeString": "contract IVault"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "expression": {
                                        "id": 62191,
                                        "name": "self",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 62157,
                                        "src": "11912:4:84",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                                          "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                                        }
                                      },
                                      "id": 62192,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "11917:13:84",
                                      "memberName": "stakersVaults",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 62462,
                                      "src": "11912:18:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                                        "typeString": "mapping(address => contract IVault[] storage ref)"
                                      }
                                    },
                                    "id": 62194,
                                    "indexExpression": {
                                      "id": 62193,
                                      "name": "staker",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62147,
                                      "src": "11931:6:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "11912:26:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                                      "typeString": "contract IVault[] storage ref"
                                    }
                                  },
                                  "id": 62198,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 62197,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 62195,
                                      "name": "vaultsLength",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62162,
                                      "src": "11939:12:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 62196,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "11954:1:84",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "11939:16:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "11912:44:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IVault_$63271",
                                    "typeString": "contract IVault"
                                  }
                                },
                                "src": "11880:76:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              },
                              "id": 62200,
                              "nodeType": "ExpressionStatement",
                              "src": "11880:76:84"
                            },
                            {
                              "id": 62201,
                              "nodeType": "Break",
                              "src": "11974:5:84"
                            }
                          ]
                        }
                      },
                      {
                        "id": 62207,
                        "nodeType": "UncheckedBlock",
                        "src": "12007:46:84",
                        "statements": [
                          {
                            "expression": {
                              "id": 62205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "12035:3:84",
                              "subExpression": {
                                "id": 62204,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62170,
                                "src": "12035:1:84",
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
                            "id": 62206,
                            "nodeType": "ExpressionStatement",
                            "src": "12035:3:84"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62173,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62170,
                      "src": "11643:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 62174,
                      "name": "vaultsLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62162,
                      "src": "11647:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11643:16:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62209,
                  "nodeType": "WhileStatement",
                  "src": "11636:427:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62210,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62170,
                      "src": "12076:1:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 62211,
                      "name": "vaultsLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62162,
                      "src": "12081:12:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12076:17:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62216,
                  "nodeType": "IfStatement",
                  "src": "12072:45:84",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62213,
                        "name": "VaultNotFound",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62975,
                        "src": "12102:13:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12102:15:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62215,
                    "nodeType": "RevertStatement",
                    "src": "12095:22:84"
                  }
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "baseExpression": {
                          "expression": {
                            "id": 62217,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62157,
                            "src": "12127:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 62220,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12132:13:84",
                          "memberName": "stakersVaults",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62462,
                          "src": "12127:18:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_storage_$",
                            "typeString": "mapping(address => contract IVault[] storage ref)"
                          }
                        },
                        "id": 62221,
                        "indexExpression": {
                          "id": 62219,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62147,
                          "src": "12146:6:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "12127:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage",
                          "typeString": "contract IVault[] storage ref"
                        }
                      },
                      "id": 62222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12154:3:84",
                      "memberName": "pop",
                      "nodeType": "MemberAccess",
                      "src": "12127:30:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr_$",
                        "typeString": "function (contract IVault[] storage pointer)"
                      }
                    },
                    "id": 62223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12127:32:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62224,
                  "nodeType": "ExpressionStatement",
                  "src": "12127:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeVaultFromStaker",
            "nameLocation": "11417:21:84",
            "parameters": {
              "id": 62151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62147,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "11447:6:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62226,
                  "src": "11439:14:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11439:7:84",
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
                  "id": 62150,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "11462:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62226,
                  "src": "11455:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 62149,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62148,
                      "name": "IVault",
                      "nameLocations": [
                        "11455:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "11455:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "11455:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11438:30:84"
            },
            "returnParameters": {
              "id": 62152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11478:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62250,
            "nodeType": "FunctionDefinition",
            "src": "12172:150:84",
            "nodes": [],
            "body": {
              "id": 62249,
              "nodeType": "Block",
              "src": "12241:81:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 62242,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "12297:4:84",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                                      "typeString": "contract VaultSupervisor"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_VaultSupervisor_$62327",
                                      "typeString": "contract VaultSupervisor"
                                    }
                                  ],
                                  "id": 62241,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "12289:7:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 62240,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "12289:7:84",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62243,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12289:13:84",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 62244,
                                "name": "initData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62228,
                                "src": "12304:8:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
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
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 62239,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "NewExpression",
                              "src": "12273:15:84",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_creation_payable$_t_address_$_t_bytes_memory_ptr_$returns$_t_contract$_BeaconProxy_$49881_$",
                                "typeString": "function (address,bytes memory) payable returns (contract BeaconProxy)"
                              },
                              "typeName": {
                                "id": 62238,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                  "id": 62237,
                                  "name": "BeaconProxy",
                                  "nameLocations": [
                                    "12277:11:84"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 49881,
                                  "src": "12277:11:84"
                                },
                                "referencedDeclaration": 49881,
                                "src": "12277:11:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_BeaconProxy_$49881",
                                  "typeString": "contract BeaconProxy"
                                }
                              }
                            },
                            "id": 62245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12273:40:84",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BeaconProxy_$49881",
                              "typeString": "contract BeaconProxy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_BeaconProxy_$49881",
                              "typeString": "contract BeaconProxy"
                            }
                          ],
                          "id": 62236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12265:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 62235,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12265:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12265:49:84",
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
                      "id": 62234,
                      "name": "IVault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63271,
                      "src": "12258:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                        "typeString": "type(contract IVault)"
                      }
                    },
                    "id": 62247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12258:57:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "functionReturnParameters": 62233,
                  "id": 62248,
                  "nodeType": "Return",
                  "src": "12251:64:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cloneVault",
            "nameLocation": "12181:10:84",
            "parameters": {
              "id": 62229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62228,
                  "mutability": "mutable",
                  "name": "initData",
                  "nameLocation": "12205:8:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62250,
                  "src": "12192:21:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 62227,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12192:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12191:23:84"
            },
            "returnParameters": {
              "id": 62233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62232,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62250,
                  "src": "12233:6:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 62231,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62230,
                      "name": "IVault",
                      "nameLocations": [
                        "12233:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "12233:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "12233:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12232:8:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62259,
            "nodeType": "FunctionDefinition",
            "src": "12328:84:84",
            "nodes": [],
            "body": {
              "id": 62258,
              "nodeType": "Block",
              "src": "12410:2:84",
              "nodes": [],
              "statements": []
            },
            "baseFunctions": [
              58917
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62256,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62255,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "12400:9:84"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "12400:9:84"
                },
                "nodeType": "ModifierInvocation",
                "src": "12400:9:84"
              }
            ],
            "name": "_authorizeUpgrade",
            "nameLocation": "12337:17:84",
            "overrides": {
              "id": 62254,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "12391:8:84"
            },
            "parameters": {
              "id": 62253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62252,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "12363:17:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62259,
                  "src": "12355:25:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62251,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12355:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12354:27:84"
            },
            "returnParameters": {
              "id": 62257,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12410:0:84"
            },
            "scope": 62327,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62291,
            "nodeType": "ModifierDefinition",
            "src": "12460:232:84",
            "nodes": [],
            "body": {
              "id": 62290,
              "nodeType": "Block",
              "src": "12498:194:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62268
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62268,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "12543:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62290,
                      "src": "12508:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 62267,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62266,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "12508:18:84",
                            "12527:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "12508:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "12508:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62271,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 62269,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "12550:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 62270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12550:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12508:49:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 62272,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62268,
                          "src": "12571:4:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                            "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 62273,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12576:14:84",
                        "memberName": "vaultToImplMap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62470,
                        "src": "12571:19:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 62278,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 62276,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62262,
                            "src": "12599:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          ],
                          "id": 62275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12591:7:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 62274,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12591:7:84",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12591:14:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "12571:35:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 62281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12618:1:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 62280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12610:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62279,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12610:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12610:10:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12571:49:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62288,
                  "nodeType": "IfStatement",
                  "src": "12567:108:84",
                  "trueBody": {
                    "id": 62287,
                    "nodeType": "Block",
                    "src": "12622:53:84",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 62284,
                            "name": "VaultNotAChildVault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62969,
                            "src": "12643:19:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 62285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12643:21:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62286,
                        "nodeType": "RevertStatement",
                        "src": "12636:28:84"
                      }
                    ]
                  }
                },
                {
                  "id": 62289,
                  "nodeType": "PlaceholderStatement",
                  "src": "12684:1:84"
                }
              ]
            },
            "name": "onlyChildVault",
            "nameLocation": "12469:14:84",
            "parameters": {
              "id": 62263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62262,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "12491:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62291,
                  "src": "12484:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 62261,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62260,
                      "name": "IVault",
                      "nameLocations": [
                        "12484:6:84"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "12484:6:84"
                    },
                    "referencedDeclaration": 63271,
                    "src": "12484:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12483:14:84"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62316,
            "nodeType": "ModifierDefinition",
            "src": "12698:233:84",
            "nodes": [],
            "body": {
              "id": 62315,
              "nodeType": "Block",
              "src": "12734:197:84",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62297
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62297,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "12779:4:84",
                      "nodeType": "VariableDeclaration",
                      "scope": 62315,
                      "src": "12744:39:84",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                        "typeString": "struct VaultSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 62296,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62295,
                          "name": "VaultSupervisorLib.Storage",
                          "nameLocations": [
                            "12744:18:84",
                            "12763:7:84"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62483,
                          "src": "12744:26:84"
                        },
                        "referencedDeclaration": 62483,
                        "src": "12744:26:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                          "typeString": "struct VaultSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62300,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 62298,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61752,
                      "src": "12786:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62483_storage_ptr_$",
                        "typeString": "function () pure returns (struct VaultSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 62299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12786:7:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                      "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12744:49:84"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 62301,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "12807:3:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 62302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12811:6:84",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "12807:10:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 62305,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62297,
                            "src": "12829:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62483_storage_ptr",
                              "typeString": "struct VaultSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 62306,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12834:20:84",
                          "memberName": "delegationSupervisor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62479,
                          "src": "12829:25:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                            "typeString": "contract IDelegationSupervisor"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                            "typeString": "contract IDelegationSupervisor"
                          }
                        ],
                        "id": 62304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12821:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62303,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12821:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62307,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12821:34:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12807:48:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62313,
                  "nodeType": "IfStatement",
                  "src": "12803:111:84",
                  "trueBody": {
                    "id": 62312,
                    "nodeType": "Block",
                    "src": "12857:57:84",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 62309,
                            "name": "NotDelegationSupervisor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62971,
                            "src": "12878:23:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 62310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12878:25:84",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62311,
                        "nodeType": "RevertStatement",
                        "src": "12871:32:84"
                      }
                    ]
                  }
                },
                {
                  "id": 62314,
                  "nodeType": "PlaceholderStatement",
                  "src": "12923:1:84"
                }
              ]
            },
            "name": "onlyDelegationSupervisor",
            "nameLocation": "12707:24:84",
            "parameters": {
              "id": 62292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12731:2:84"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62322,
            "nodeType": "EventDefinition",
            "src": "12976:75:84",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "928c1491037173ffa6782c693f229e11dbb934cb28daf9e2d1fca4b5131ffbf7",
            "name": "UpgradedVault",
            "nameLocation": "12982:13:84",
            "parameters": {
              "id": 62321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62318,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "13012:14:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62322,
                  "src": "12996:30:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62317,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12996:7:84",
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
                  "id": 62320,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "13044:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62322,
                  "src": "13028:21:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13028:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12995:55:84"
            }
          },
          {
            "id": 62326,
            "nodeType": "EventDefinition",
            "src": "13056:56:84",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "2768c62492a0ab17bb4fd74f18e51a421e2a8e30c0d05ec389cd5609e91b4d5e",
            "name": "UpgradedAllVaults",
            "nameLocation": "13062:17:84",
            "parameters": {
              "id": 62325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62324,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "13096:14:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 62326,
                  "src": "13080:30:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13080:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13079:32:84"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 61191,
              "name": "Initializable",
              "nameLocations": [
                "1272:13:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "1272:13:84"
            },
            "id": 61192,
            "nodeType": "InheritanceSpecifier",
            "src": "1272:13:84"
          },
          {
            "baseName": {
              "id": 61193,
              "name": "OwnableRoles",
              "nameLocations": [
                "1291:12:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 55650,
              "src": "1291:12:84"
            },
            "id": 61194,
            "nodeType": "InheritanceSpecifier",
            "src": "1291:12:84"
          },
          {
            "baseName": {
              "id": 61195,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "1309:15:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58542,
              "src": "1309:15:84"
            },
            "id": 61196,
            "nodeType": "InheritanceSpecifier",
            "src": "1309:15:84"
          },
          {
            "baseName": {
              "id": 61197,
              "name": "PausableUpgradeable",
              "nameLocations": [
                "1330:19:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47099,
              "src": "1330:19:84"
            },
            "id": 61198,
            "nodeType": "InheritanceSpecifier",
            "src": "1330:19:84"
          },
          {
            "baseName": {
              "id": 61199,
              "name": "UUPSUpgradeable",
              "nameLocations": [
                "1355:15:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58965,
              "src": "1355:15:84"
            },
            "id": 61200,
            "nodeType": "InheritanceSpecifier",
            "src": "1355:15:84"
          },
          {
            "baseName": {
              "id": 61201,
              "name": "IVaultSupervisor",
              "nameLocations": [
                "1376:16:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63404,
              "src": "1376:16:84"
            },
            "id": 61202,
            "nodeType": "InheritanceSpecifier",
            "src": "1376:16:84"
          },
          {
            "baseName": {
              "id": 61203,
              "name": "IBeacon",
              "nameLocations": [
                "1398:7:84"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49891,
              "src": "1398:7:84"
            },
            "id": 61204,
            "nodeType": "InheritanceSpecifier",
            "src": "1398:7:84"
          }
        ],
        "canonicalName": "VaultSupervisor",
        "contractDependencies": [
          49881
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
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
        "name": "VaultSupervisor",
        "nameLocation": "1249:15:84",
        "scope": 62328,
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
  "id": 84
} as const;