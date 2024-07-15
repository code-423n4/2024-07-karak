export const DelegationSupervisor = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
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
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        {
          "name": "fields",
          "type": "bytes1",
          "internalType": "bytes1"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "version",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "chainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "verifyingContract",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "extensions",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "fetchQueuedWithdrawals",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "queuedWithdrawals",
          "type": "tuple[]",
          "internalType": "struct Withdraw.QueuedWithdrawal[]",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "finishWithdraw",
      "inputs": [
        {
          "name": "startedWithdrawals",
          "type": "tuple[]",
          "internalType": "struct Withdraw.QueuedWithdrawal[]",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "name": "initialize",
      "inputs": [
        {
          "name": "vaultSupervisor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "minWithdrawDelay",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "manager",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isWithdrawPending",
      "inputs": [
        {
          "name": "withdrawal",
          "type": "tuple",
          "internalType": "struct Withdraw.QueuedWithdrawal",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
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
      "name": "startWithdraw",
      "inputs": [
        {
          "name": "withdrawalRequests",
          "type": "tuple[]",
          "internalType": "struct Withdraw.WithdrawRequest[]",
          "components": [
            {
              "name": "vaults",
              "type": "address[]",
              "internalType": "contract IVault[]"
            },
            {
              "name": "shares",
              "type": "uint256[]",
              "internalType": "uint256[]"
            },
            {
              "name": "withdrawer",
              "type": "address",
              "internalType": "address"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "withdrawalRoots",
          "type": "bytes32[]",
          "internalType": "bytes32[]"
        },
        {
          "name": "withdrawConfigs",
          "type": "tuple[]",
          "internalType": "struct Withdraw.QueuedWithdrawal[]",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
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
      "name": "updateMinWithdrawDelay",
      "inputs": [
        {
          "name": "delay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "type": "function",
      "name": "withdrawalDelay",
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
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "FinishedWithdrawal",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "staker",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "withdrawer",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "withdrawRoot",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
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
      "name": "StartedWithdrawal",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "staker",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "withdrawer",
          "type": "address",
          "indexed": false,
          "internalType": "address"
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
      "type": "error",
      "name": "AlreadyInitialized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ArrayLengthsNotEqual",
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
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidInput",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidWithdrawalDelay",
      "inputs": []
    },
    {
      "type": "error",
      "name": "MinWithdrawDelayNotPassed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NewOwnerIsZeroAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoElementsInArray",
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
      "name": "NotStaker",
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
      "name": "WithdrawAlreadyCompleted",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawerNotCaller",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroShares",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60a0806040523460c857306080527ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c1660b957506001600160401b036002600160401b0319828216016075575b604051612cc990816100ce8239608051818181611f9d01526120810152f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a13880806056565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806302329a291461233a578063183a4f6e146123225780631c10893f146122c05780631cd64df414612286578063256929621461223a5780632de94807146122075780634618c974146121895780634a4ee7b11461215f5780634f1ef28614612032578063514e62fc14611ff957806352d1902d14611f8957806354d1f13d14611f415780635c975abb14611eff578063715018a614611e9e57806384b0196e14611b4a57806386e9a1f7146117715780638c475559146115605780638da5cb5b1461150d57806392dca40714610b5f578063a7ab696114610b22578063bf2dc79d14610ad8578063c350a1b5146102a6578063f04e283e146101fc578063f2fde38b146101675763fee81cf41461012f57600080fd5b3461016257602060031936011261016257610148612488565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b60206003193601126101625761017b612488565b610183612a78565b8060601b156101ee5773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b602060031936011261016257610210612488565b610218612a78565b63389a75e1600c52806000526020600c20908154421161029857600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b34610162576060600319360112610162576102bf612488565b73ffffffffffffffffffffffffffffffffffffffff6044351660443503610162577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0090815467ffffffffffffffff811680159081610ac8575b6001149081610abe575b159081610ab5575b50610a8b5760017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000821617835560ff8160401c1615610a56575b337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36103b6612c3a565b6103be612c3a565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690556040516104118161272a565b601481527f4b6172616b5f44656c65676174696f6e5f5375700000000000000000000000006020820152604051906104488261272a565b600282527f7631000000000000000000000000000000000000000000000000000000000000602083015261047a612c3a565b610482612c3a565b80519067ffffffffffffffff821161088c5781906104c07fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10254612aff565b601f81116109e8575b50602090601f83116001146108c6576000926108bb575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916177fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102555b805167ffffffffffffffff811161088c57807fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d103926105708454612aff565b601f8111610833575b50602090601f83116001146107765760009261076b575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b60007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1005560007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10155638b78c6d8600c526044356000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a362278d00602435116107415760ff916024357fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f77035573ffffffffffffffffffffffffffffffffffffffff7fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770491167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905560401c16156106ee57005b7fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff81541690557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b60046040517f796571ae000000000000000000000000000000000000000000000000000000008152fd5b015190508680610590565b60008581527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905b81811061081b57509084600195949392106107e4575b505050811b0190556105c2565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558680806107d7565b929360206001819287860151815501950193016107c1565b61087c90856000527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75601f850160051c81019160208610610882575b601f0160051c0190612bb7565b87610579565b909150819061086f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b0151905086806104e0565b92507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1026000527f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d906000935b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0841685106109cd5760019450837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0811610610996575b505050811b017fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10255610532565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055868080610969565b81810151835560209485019460019093019290910190610912565b610a50907fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1026000527f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d601f850160051c8101916020861061088257601f0160051c0190612bb7565b876104c9565b680100000000000000017fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000008216178355610364565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b9050158461032a565b303b159150610322565b604083901c60ff16159150610318565b3461016257602060031936011261016257600435610af4612a5c565b62278d008111610741577fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770355005b346101625760006003193601126101625760207fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770354604051908152f35b346101625760206003193601126101625760043567ffffffffffffffff811161016257610b9090369060040161255e565b3068929eee149b4bd2126854146114ff573068929eee149b4bd2126855610bb5612b52565b80156114d557610bc481612787565b91610bd26040519384612746565b818352610bde82612787565b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0809301366020860137610c1281612787565b92610c206040519485612746565b818452610c2c82612787565b0160005b8181106114be57505073ffffffffffffffffffffffffffffffffffffffff610c973373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b5416906000925b818410610d055785853868929eee149b4bd2126855604051906040820160408352835180915260206060840194019060005b818110610cef578480610ceb88878382036020850152612663565b0390f35b8251865260209586019590920191600101610cd0565b9091929493610d158684846129b9565b60208101610d2381836129f4565b90501580156114ab575b61148157610d3b90826129f4565b9050610d4782806129f4565b919050036114575773ffffffffffffffffffffffffffffffffffffffff610d7160403393016129d3565b160361142d5785610d916040610d8b610dd69987876129b9565b016129d3565b93610da6610da08383876129b9565b806129f4565b610dce610dc4610dba86868a9e969e6129b9565b60208101906129f4565b9b9092369161279f565b99369161280a565b93610ddf61293a565b5060005b8951811015610f9757610df68187612a48565b5115610f6d5773ffffffffffffffffffffffffffffffffffffffff7fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770454169073ffffffffffffffffffffffffffffffffffffffff610e54828d612a48565b5116610e608289612a48565b51833b15610162576040517f8c80d4e500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9290921660248301526044820152916000908390606490829084905af18015610f615773ffffffffffffffffffffffffffffffffffffffff610ef6838e6001968e95610f52575b50612a48565b5116610f02838a612a48565b51906040519173ffffffffffffffffffffffffffffffffffffffff8c16835260208301527f6ee63f530864567ac8a1fcce5050111457154b213c6297ffc622603e8497f7b260403393a401610de3565b610f5b906126de565b38610ef0565b6040513d6000823e3d90fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b509497909295936002610fe93373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b01549860026110373373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b01918254927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84146113fe57600173ffffffffffffffffffffffffffffffffffffffff940190556040519361108b8561270e565b84526020840152166040820152604051976110a5896126f2565b3389528460208a0152604089015242606089015260808801526110c787612ab0565b806000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7700602052604060002060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905560036111683373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b0197885498680100000000000000008a101561088c5760018a018082558a10156113cf57600052602060002073ffffffffffffffffffffffffffffffffffffffff8251167fffffffffffffffffffffffff000000000000000000000000000000000000000060078c02830154161760078b02820155600160078b0282010173ffffffffffffffffffffffffffffffffffffffff6020840151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556040820151600260078c02830101556060820151600360078c0283010155608082015190815180519067ffffffffffffffff821161088c5768010000000000000000821161088c576004600760208f9361129986858588028a0101548187878a028c010155868689028b0101612bce565b019202840101600052602060002060005b8381106113a5575050505060208201519a8b519b67ffffffffffffffff8d1161088c57680100000000000000008d1161088c5760078202830160050180548e82558e9260209290916112fe91859190612bce565b01600560078402850101600052602060002060009e8f5b1061138e575050506001969798999a9b50600673ffffffffffffffffffffffffffffffffffffffff926007604093020101920151167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905561137b8389612a48565b526113868289612a48565b520192610c9e565b6001839f6020845194019381840155019e8f611315565b600190602073ffffffffffffffffffffffffffffffffffffffff85511694019381840155016112aa565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60046040517f59cc8a2f000000000000000000000000000000000000000000000000000000008152fd5b60046040517f440de63f000000000000000000000000000000000000000000000000000000008152fd5b60046040517fa4f8591d000000000000000000000000000000000000000000000000000000008152fd5b506114b682806129f4565b905015610d2d565b6020906114c961293a565b82828801015201610c30565b60046040517fb4fa3fb3000000000000000000000000000000000000000000000000000000008152fd5b63ab143c066000526004601cfd5b346101625760006003193601126101625760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346101625760206003193601126101625760036115c361157e612488565b73ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b0180546115cf81612787565b906115dd6040519283612746565b808252602082019260005260206000206000935b82851061160e5760405160208082528190610ceb90820187612663565b60405161161a816126f2565b73ffffffffffffffffffffffffffffffffffffffff8354168152600173ffffffffffffffffffffffffffffffffffffffff81850154166020830152600284015460408301526003840154606083015260048401906040519161167b8361270e565b604051808260208294549384815201906000526020600020926000905b86818310611741575050506116af92500382612746565b8252600585016040519182602083549182815201926000526020600020916000915b808310611729575050505092602092826116f2600197946007970382612746565b8482015273ffffffffffffffffffffffffffffffffffffffff600688015416604082015260808201528152019201940193906115f1565b908060208596829596548152019501930191906116d1565b919350916020829173ffffffffffffffffffffffffffffffffffffffff8754168152019401920184929391611698565b34610162576020806003193601126101625760043567ffffffffffffffff8111610162576117a390369060040161255e565b68929eee149b4bd212689291308454146114ff5790913084556117c4612b52565b6000925b8084106117d457388555005b836005959394951b8401357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61853603018112156101625784019061182061181b3684612858565b612ab0565b608083019273ffffffffffffffffffffffffffffffffffffffff92338461184c6040610d8b8987612986565b1603611b2057606096878301357fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f77035481018091116113fe574210611af657836000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770080885260ff6040600020541615611acc5760008581529088526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558388019992905b611906610da08987612986565b9050811015611ab6578488611970836119558d61196761196061195b8f611955610da08a89937fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770454169c612986565b90612ba7565b6129d3565b958c612986565b908101906129f4565b35823b15610162576040517f51ffb74a00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9290921660248301526044820152906000908290606490829084905af1908115610f61578a8a8a8f948f94876119fa858e8695948695611aa7575b50612986565b80611a04916129f4565b611a0e9291612ba7565b611a17906129d3565b1693611a228c6129d3565b96611a2c906129d3565b90888d611a398782612986565b604001611a45906129d3565b96611a4f91612986565b828101611a5b916129f4565b611a659291612ba7565b359083604051961686528501528c6040850152169416927f486508c3c40ef7985dcc1f7d43acb1e77e0059505d1f0e6064674ca655a0c82f91a46001016118f9565b611ab0906126de565b386119f4565b509099600101985090965093506117c892505050565b60046040517f35a34c35000000000000000000000000000000000000000000000000000000008152fd5b60046040517f4b90bbc2000000000000000000000000000000000000000000000000000000008152fd5b60046040517f584434d4000000000000000000000000000000000000000000000000000000008152fd5b34610162576000600319360112610162577fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100541580611e75575b15611e17576040517fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102805491600081611bbc85612aff565b9182825260209460019686600182169182600014611dd9575050600114611d7b575b50611beb92500382612746565b604051928360007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10392835493611c2085612aff565b9485855287600182169182600014611d3a575050600114611cde575b5050611c4a92500384612746565b6040518281019181831067ffffffffffffffff84111761088c5760e094611caf611cbd92610ceb95604052600085526040519788977f0f00000000000000000000000000000000000000000000000000000000000000895288015260e08701906124cc565b9085820360408701526124cc565b90466060850152306080850152600060a085015283820360c085015261252a565b8692506000527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75906000915b858310611d22575050611c4a93508201018680611c3c565b8054838a018501528894508793909201918101611d0a565b91509350611c4a9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201018680611c3c565b91505060005281837f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d866000915b858310611dc0575050611beb935082010186611bde565b8091929450548385880101520191018490868593611da9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685820152611beb95151560051b8501019250889150611bde9050565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4549503731323a20556e696e697469616c697a656400000000000000000000006044820152fd5b507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015415611b84565b600060031936011261016257611eb2612a78565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b3461016257600060031936011261016257602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b60006003193601126101625763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b3461016257600060031936011261016257307f000000000000000000000000000000000000000000000000000000000000000003611feb5760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a0266000526004601cfd5b3461016257604060031936011261016257612012612488565b638b78c6d8600c52600052602060243581600c2054161515604051908152f35b604060031936011261016257612046612488565b6024359067ffffffffffffffff90818311610162573660238401121561016257826004013591821161016257366024838501011161016257307f000000000000000000000000000000000000000000000000000000000000000014611feb5773ffffffffffffffffffffffffffffffffffffffff906120c3612a78565b166352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80602060016004601d865afa510361215157818391817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a25561212f57005b816000926024604051950185378338925af41561214857005b3d6000823e3d90fd5b6355299b496001526004601dfd5b604060031936011261016257612187612176612488565b61217e612a78565b60243590612bf3565b005b3461016257600319602081360112610162576004359067ffffffffffffffff82116101625760a09082360301126101625761181b6121cb913690600401612858565b6000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7700602052602060ff604060002054166040519015158152f35b3461016257602060031936011261016257612220612488565b638b78c6d8600c52600052602080600c2054604051908152f35b60006003193601126101625763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b346101625760406003193601126101625760206122a1612488565b60243590638b78c6d8600c526000528082600c20541614604051908152f35b6040600319360112610162576122d4612488565b6122dc612a78565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b60206003193601126101625761218760043533612bf3565b346101625760206003193601126101625760043580151581036101625761235f612a5c565b156123e25761236c612b52565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561245e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016257565b359073ffffffffffffffffffffffffffffffffffffffff8216820361016257565b919082519283825260005b8481106125165750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016124d7565b90815180825260208080930193019160005b82811061254a575050505090565b83518552938101939281019260010161253c565b9181601f840112156101625782359167ffffffffffffffff8311610162576020808501948460051b01011161016257565b919073ffffffffffffffffffffffffffffffffffffffff90818451168152608060209483868201511686840152604081015160408401526060810151606084015201519160a06080830152610100820194835195606060a0850152865180915281610120850197019060005b81811061264d5750505061264384959660409260e0959601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608783030160c088015261252a565b9401511691015290565b82518516895297830197918301916001016125fb565b90808251908181526020809101926020808460051b8301019501936000915b8483106126925750505050505090565b90919293949584806126ce837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a5161258f565b9801930193019194939290612682565b67ffffffffffffffff811161088c57604052565b60a0810190811067ffffffffffffffff82111761088c57604052565b6060810190811067ffffffffffffffff82111761088c57604052565b6040810190811067ffffffffffffffff82111761088c57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761088c57604052565b67ffffffffffffffff811161088c5760051b60200190565b92916127aa82612787565b916127b86040519384612746565b829481845260208094019160051b810192831161016257905b8282106127de5750505050565b813573ffffffffffffffffffffffffffffffffffffffff811681036101625781529083019083016127d1565b929161281582612787565b916128236040519384612746565b829481845260208094019160051b810192831161016257905b8282106128495750505050565b8135815290830190830161283c565b91909160a081840312610162576040928351612873816126f2565b809461287e846124ab565b825260209261288e8486016124ab565b84840152818501358284015260608501356060840152608085013567ffffffffffffffff95868211610162570190606082820312610162578251956128d28761270e565b823581811161016257830182601f82011215610162578281886128f79335910161279f565b8752858301359081116101625782019181601f8401121561016257856129288593856080996129329735910161280a565b90880152016124ab565b908401520152565b60405190612947826126f2565b81600081526000602082015260006040820152600060608201526080604051916129708361270e565b6060835260606020840152600060408401520152565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610162570190565b908210156113cf576129d09160051b810190612986565b90565b3573ffffffffffffffffffffffffffffffffffffffff811681036101625790565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610162570180359067ffffffffffffffff821161016257602001918160051b3603831361016257565b80518210156113cf5760209160051b010190565b638b78c6d8600c523360005260016020600c20541615612a7857565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303612aa257565b6382b429006000526004601cfd5b604051612af981612acd602082019460208652604083019061258f565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282612746565b51902090565b90600182811c92168015612b48575b6020831014612b1957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691612b0e565b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005416612b7d57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b91908110156113cf5760051b0190565b818110612bc2575050565b60008155600101612bb7565b91818110612bdb57505050565b612bf19260005260206000209182019101612bb7565b565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c1615612c6957565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fdfea26469706673582212205b71a217e0ff0007e9c925a401c7d42c67bd49a2afa1837a066c9c56da02fb7564736f6c63430008190033",
    "sourceMap": "1058:5856:80:-:0;;;;;;;1520:4:77;1496:31;;8837:64:24;1058:5856:80;;;;;;;;;7896:76:24;;-1:-1:-1;;;;;;;;;;;;1058:5856:80;;;7985:34:24;7981:146;;-1:-1:-1;1058:5856:80;;;;;;;;1496:31:77;1058:5856:80;;;;;;;;;;;7981:146:24;-1:-1:-1;;;;;;1058:5856:80;;;;;;;;;;;;;8087:29:24;;1058:5856:80;;8087:29:24;7981:146;;;;;7896:76;-1:-1:-1;;;7938:23:24;;;;;1058:5856:80;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c806302329a291461233a578063183a4f6e146123225780631c10893f146122c05780631cd64df414612286578063256929621461223a5780632de94807146122075780634618c974146121895780634a4ee7b11461215f5780634f1ef28614612032578063514e62fc14611ff957806352d1902d14611f8957806354d1f13d14611f415780635c975abb14611eff578063715018a614611e9e57806384b0196e14611b4a57806386e9a1f7146117715780638c475559146115605780638da5cb5b1461150d57806392dca40714610b5f578063a7ab696114610b22578063bf2dc79d14610ad8578063c350a1b5146102a6578063f04e283e146101fc578063f2fde38b146101675763fee81cf41461012f57600080fd5b3461016257602060031936011261016257610148612488565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b60206003193601126101625761017b612488565b610183612a78565b8060601b156101ee5773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b602060031936011261016257610210612488565b610218612a78565b63389a75e1600c52806000526020600c20908154421161029857600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b34610162576060600319360112610162576102bf612488565b73ffffffffffffffffffffffffffffffffffffffff6044351660443503610162577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0090815467ffffffffffffffff811680159081610ac8575b6001149081610abe575b159081610ab5575b50610a8b5760017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000821617835560ff8160401c1615610a56575b337fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36103b6612c3a565b6103be612c3a565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690556040516104118161272a565b601481527f4b6172616b5f44656c65676174696f6e5f5375700000000000000000000000006020820152604051906104488261272a565b600282527f7631000000000000000000000000000000000000000000000000000000000000602083015261047a612c3a565b610482612c3a565b80519067ffffffffffffffff821161088c5781906104c07fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10254612aff565b601f81116109e8575b50602090601f83116001146108c6576000926108bb575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916177fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102555b805167ffffffffffffffff811161088c57807fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d103926105708454612aff565b601f8111610833575b50602090601f83116001146107765760009261076b575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b60007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1005560007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10155638b78c6d8600c526044356000526020600c206001815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a362278d00602435116107415760ff916024357fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f77035573ffffffffffffffffffffffffffffffffffffffff7fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770491167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905560401c16156106ee57005b7fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff81541690557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b60046040517f796571ae000000000000000000000000000000000000000000000000000000008152fd5b015190508680610590565b60008581527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905b81811061081b57509084600195949392106107e4575b505050811b0190556105c2565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558680806107d7565b929360206001819287860151815501950193016107c1565b61087c90856000527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75601f850160051c81019160208610610882575b601f0160051c0190612bb7565b87610579565b909150819061086f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b0151905086806104e0565b92507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1026000527f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d906000935b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0841685106109cd5760019450837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0811610610996575b505050811b017fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10255610532565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055868080610969565b81810151835560209485019460019093019290910190610912565b610a50907fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1026000527f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d601f850160051c8101916020861061088257601f0160051c0190612bb7565b876104c9565b680100000000000000017fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000008216178355610364565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b9050158461032a565b303b159150610322565b604083901c60ff16159150610318565b3461016257602060031936011261016257600435610af4612a5c565b62278d008111610741577fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770355005b346101625760006003193601126101625760207fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770354604051908152f35b346101625760206003193601126101625760043567ffffffffffffffff811161016257610b9090369060040161255e565b3068929eee149b4bd2126854146114ff573068929eee149b4bd2126855610bb5612b52565b80156114d557610bc481612787565b91610bd26040519384612746565b818352610bde82612787565b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0809301366020860137610c1281612787565b92610c206040519485612746565b818452610c2c82612787565b0160005b8181106114be57505073ffffffffffffffffffffffffffffffffffffffff610c973373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b5416906000925b818410610d055785853868929eee149b4bd2126855604051906040820160408352835180915260206060840194019060005b818110610cef578480610ceb88878382036020850152612663565b0390f35b8251865260209586019590920191600101610cd0565b9091929493610d158684846129b9565b60208101610d2381836129f4565b90501580156114ab575b61148157610d3b90826129f4565b9050610d4782806129f4565b919050036114575773ffffffffffffffffffffffffffffffffffffffff610d7160403393016129d3565b160361142d5785610d916040610d8b610dd69987876129b9565b016129d3565b93610da6610da08383876129b9565b806129f4565b610dce610dc4610dba86868a9e969e6129b9565b60208101906129f4565b9b9092369161279f565b99369161280a565b93610ddf61293a565b5060005b8951811015610f9757610df68187612a48565b5115610f6d5773ffffffffffffffffffffffffffffffffffffffff7fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770454169073ffffffffffffffffffffffffffffffffffffffff610e54828d612a48565b5116610e608289612a48565b51833b15610162576040517f8c80d4e500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9290921660248301526044820152916000908390606490829084905af18015610f615773ffffffffffffffffffffffffffffffffffffffff610ef6838e6001968e95610f52575b50612a48565b5116610f02838a612a48565b51906040519173ffffffffffffffffffffffffffffffffffffffff8c16835260208301527f6ee63f530864567ac8a1fcce5050111457154b213c6297ffc622603e8497f7b260403393a401610de3565b610f5b906126de565b38610ef0565b6040513d6000823e3d90fd5b60046040517f9811e0c7000000000000000000000000000000000000000000000000000000008152fd5b509497909295936002610fe93373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b01549860026110373373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b01918254927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84146113fe57600173ffffffffffffffffffffffffffffffffffffffff940190556040519361108b8561270e565b84526020840152166040820152604051976110a5896126f2565b3389528460208a0152604089015242606089015260808801526110c787612ab0565b806000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7700602052604060002060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905560036111683373ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b0197885498680100000000000000008a101561088c5760018a018082558a10156113cf57600052602060002073ffffffffffffffffffffffffffffffffffffffff8251167fffffffffffffffffffffffff000000000000000000000000000000000000000060078c02830154161760078b02820155600160078b0282010173ffffffffffffffffffffffffffffffffffffffff6020840151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556040820151600260078c02830101556060820151600360078c0283010155608082015190815180519067ffffffffffffffff821161088c5768010000000000000000821161088c576004600760208f9361129986858588028a0101548187878a028c010155868689028b0101612bce565b019202840101600052602060002060005b8381106113a5575050505060208201519a8b519b67ffffffffffffffff8d1161088c57680100000000000000008d1161088c5760078202830160050180548e82558e9260209290916112fe91859190612bce565b01600560078402850101600052602060002060009e8f5b1061138e575050506001969798999a9b50600673ffffffffffffffffffffffffffffffffffffffff926007604093020101920151167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905561137b8389612a48565b526113868289612a48565b520192610c9e565b6001839f6020845194019381840155019e8f611315565b600190602073ffffffffffffffffffffffffffffffffffffffff85511694019381840155016112aa565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60046040517f59cc8a2f000000000000000000000000000000000000000000000000000000008152fd5b60046040517f440de63f000000000000000000000000000000000000000000000000000000008152fd5b60046040517fa4f8591d000000000000000000000000000000000000000000000000000000008152fd5b506114b682806129f4565b905015610d2d565b6020906114c961293a565b82828801015201610c30565b60046040517fb4fa3fb3000000000000000000000000000000000000000000000000000000008152fd5b63ab143c066000526004601cfd5b346101625760006003193601126101625760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346101625760206003193601126101625760036115c361157e612488565b73ffffffffffffffffffffffffffffffffffffffff166000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7702602052604060002090565b0180546115cf81612787565b906115dd6040519283612746565b808252602082019260005260206000206000935b82851061160e5760405160208082528190610ceb90820187612663565b60405161161a816126f2565b73ffffffffffffffffffffffffffffffffffffffff8354168152600173ffffffffffffffffffffffffffffffffffffffff81850154166020830152600284015460408301526003840154606083015260048401906040519161167b8361270e565b604051808260208294549384815201906000526020600020926000905b86818310611741575050506116af92500382612746565b8252600585016040519182602083549182815201926000526020600020916000915b808310611729575050505092602092826116f2600197946007970382612746565b8482015273ffffffffffffffffffffffffffffffffffffffff600688015416604082015260808201528152019201940193906115f1565b908060208596829596548152019501930191906116d1565b919350916020829173ffffffffffffffffffffffffffffffffffffffff8754168152019401920184929391611698565b34610162576020806003193601126101625760043567ffffffffffffffff8111610162576117a390369060040161255e565b68929eee149b4bd212689291308454146114ff5790913084556117c4612b52565b6000925b8084106117d457388555005b836005959394951b8401357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61853603018112156101625784019061182061181b3684612858565b612ab0565b608083019273ffffffffffffffffffffffffffffffffffffffff92338461184c6040610d8b8987612986565b1603611b2057606096878301357fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f77035481018091116113fe574210611af657836000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770080885260ff6040600020541615611acc5760008581529088526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558388019992905b611906610da08987612986565b9050811015611ab6578488611970836119558d61196761196061195b8f611955610da08a89937fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f770454169c612986565b90612ba7565b6129d3565b958c612986565b908101906129f4565b35823b15610162576040517f51ffb74a00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9290921660248301526044820152906000908290606490829084905af1908115610f61578a8a8a8f948f94876119fa858e8695948695611aa7575b50612986565b80611a04916129f4565b611a0e9291612ba7565b611a17906129d3565b1693611a228c6129d3565b96611a2c906129d3565b90888d611a398782612986565b604001611a45906129d3565b96611a4f91612986565b828101611a5b916129f4565b611a659291612ba7565b359083604051961686528501528c6040850152169416927f486508c3c40ef7985dcc1f7d43acb1e77e0059505d1f0e6064674ca655a0c82f91a46001016118f9565b611ab0906126de565b386119f4565b509099600101985090965093506117c892505050565b60046040517f35a34c35000000000000000000000000000000000000000000000000000000008152fd5b60046040517f4b90bbc2000000000000000000000000000000000000000000000000000000008152fd5b60046040517f584434d4000000000000000000000000000000000000000000000000000000008152fd5b34610162576000600319360112610162577fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100541580611e75575b15611e17576040517fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102805491600081611bbc85612aff565b9182825260209460019686600182169182600014611dd9575050600114611d7b575b50611beb92500382612746565b604051928360007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10392835493611c2085612aff565b9485855287600182169182600014611d3a575050600114611cde575b5050611c4a92500384612746565b6040518281019181831067ffffffffffffffff84111761088c5760e094611caf611cbd92610ceb95604052600085526040519788977f0f00000000000000000000000000000000000000000000000000000000000000895288015260e08701906124cc565b9085820360408701526124cc565b90466060850152306080850152600060a085015283820360c085015261252a565b8692506000527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75906000915b858310611d22575050611c4a93508201018680611c3c565b8054838a018501528894508793909201918101611d0a565b91509350611c4a9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201018680611c3c565b91505060005281837f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d866000915b858310611dc0575050611beb935082010186611bde565b8091929450548385880101520191018490868593611da9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685820152611beb95151560051b8501019250889150611bde9050565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4549503731323a20556e696e697469616c697a656400000000000000000000006044820152fd5b507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015415611b84565b600060031936011261016257611eb2612a78565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b3461016257600060031936011261016257602060ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330054166040519015158152f35b60006003193601126101625763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b3461016257600060031936011261016257307f000000000000000000000000000000000000000000000000000000000000000003611feb5760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a0266000526004601cfd5b3461016257604060031936011261016257612012612488565b638b78c6d8600c52600052602060243581600c2054161515604051908152f35b604060031936011261016257612046612488565b6024359067ffffffffffffffff90818311610162573660238401121561016257826004013591821161016257366024838501011161016257307f000000000000000000000000000000000000000000000000000000000000000014611feb5773ffffffffffffffffffffffffffffffffffffffff906120c3612a78565b166352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80602060016004601d865afa510361215157818391817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a25561212f57005b816000926024604051950185378338925af41561214857005b3d6000823e3d90fd5b6355299b496001526004601dfd5b604060031936011261016257612187612176612488565b61217e612a78565b60243590612bf3565b005b3461016257600319602081360112610162576004359067ffffffffffffffff82116101625760a09082360301126101625761181b6121cb913690600401612858565b6000527fb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7700602052602060ff604060002054166040519015158152f35b3461016257602060031936011261016257612220612488565b638b78c6d8600c52600052602080600c2054604051908152f35b60006003193601126101625763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b346101625760406003193601126101625760206122a1612488565b60243590638b78c6d8600c526000528082600c20541614604051908152f35b6040600319360112610162576122d4612488565b6122dc612a78565b638b78c6d8600c526000526020600c20602435815417809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3005b60206003193601126101625761218760043533612bf3565b346101625760206003193601126101625760043580151581036101625761235f612a5c565b156123e25761236c612b52565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff81161561245e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016257565b359073ffffffffffffffffffffffffffffffffffffffff8216820361016257565b919082519283825260005b8481106125165750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016124d7565b90815180825260208080930193019160005b82811061254a575050505090565b83518552938101939281019260010161253c565b9181601f840112156101625782359167ffffffffffffffff8311610162576020808501948460051b01011161016257565b919073ffffffffffffffffffffffffffffffffffffffff90818451168152608060209483868201511686840152604081015160408401526060810151606084015201519160a06080830152610100820194835195606060a0850152865180915281610120850197019060005b81811061264d5750505061264384959660409260e0959601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608783030160c088015261252a565b9401511691015290565b82518516895297830197918301916001016125fb565b90808251908181526020809101926020808460051b8301019501936000915b8483106126925750505050505090565b90919293949584806126ce837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a5161258f565b9801930193019194939290612682565b67ffffffffffffffff811161088c57604052565b60a0810190811067ffffffffffffffff82111761088c57604052565b6060810190811067ffffffffffffffff82111761088c57604052565b6040810190811067ffffffffffffffff82111761088c57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761088c57604052565b67ffffffffffffffff811161088c5760051b60200190565b92916127aa82612787565b916127b86040519384612746565b829481845260208094019160051b810192831161016257905b8282106127de5750505050565b813573ffffffffffffffffffffffffffffffffffffffff811681036101625781529083019083016127d1565b929161281582612787565b916128236040519384612746565b829481845260208094019160051b810192831161016257905b8282106128495750505050565b8135815290830190830161283c565b91909160a081840312610162576040928351612873816126f2565b809461287e846124ab565b825260209261288e8486016124ab565b84840152818501358284015260608501356060840152608085013567ffffffffffffffff95868211610162570190606082820312610162578251956128d28761270e565b823581811161016257830182601f82011215610162578281886128f79335910161279f565b8752858301359081116101625782019181601f8401121561016257856129288593856080996129329735910161280a565b90880152016124ab565b908401520152565b60405190612947826126f2565b81600081526000602082015260006040820152600060608201526080604051916129708361270e565b6060835260606020840152600060408401520152565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610162570190565b908210156113cf576129d09160051b810190612986565b90565b3573ffffffffffffffffffffffffffffffffffffffff811681036101625790565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610162570180359067ffffffffffffffff821161016257602001918160051b3603831361016257565b80518210156113cf5760209160051b010190565b638b78c6d8600c523360005260016020600c20541615612a7857565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303612aa257565b6382b429006000526004601cfd5b604051612af981612acd602082019460208652604083019061258f565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282612746565b51902090565b90600182811c92168015612b48575b6020831014612b1957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691612b0e565b60ff7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005416612b7d57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b91908110156113cf5760051b0190565b818110612bc2575050565b60008155600101612bb7565b91818110612bdb57505050565b612bf19260005260206000209182019101612bb7565b565b638b78c6d8600c526000526020600c2090815490811618809155600c5160601c7f715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26600080a3565b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c1615612c6957565b60046040517fd7e6bcf8000000000000000000000000000000000000000000000000000000008152fdfea26469706673582212205b71a217e0ff0007e9c925a401c7d42c67bd49a2afa1837a066c9c56da02fb7564736f6c63430008190033",
    "sourceMap": "1058:5856:80:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;11885:237:69;;;1058:5856:80;11885:237:69;1058:5856:80;11885:237:69;;;;1058:5856:80;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;8479:183;;;;;;6813:405;;;;;;;1058:5856:80;6813:405:69;;;1058:5856:80;8479:183:69;;1058:5856:80;8479:183:69;1058:5856:80;8479:183:69;;1058:5856:80;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;1058:5856:80;10506:526:69;1058:5856:80;10506:526:69;;;;;;;;;1058:5856:80;6813:405:69;10506:526;;6813:405;;;;;;1058:5856:80;6813:405:69;;;1058:5856:80;10506:526:69;;1058:5856:80;10506:526:69;1058:5856:80;10506:526:69;;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;;;;;;;;;;8837:64:24;1058:5856:80;;;;;;4726:16:24;;:34;;;;1058:5856:80;;4790:16:24;:50;;;;1058:5856:80;4855:13:24;:30;;;;1058:5856:80;4851:91:24;;;1058:5856:80;;;;;;;;;;;;4301:16:24;4979:67;;1058:5856:80;1944:10;5710:347:69;;1944:10:80;1058:5856;5710:347:69;;;;6893:76:24;;:::i;:::-;;;:::i;:::-;1237:66:26;1058:5856:80;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;6893:76:24;;:::i;:::-;;;:::i;:::-;1058:5856:80;;;;;;;;;;;3766:7:27;1058:5856:80;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3766:7:27;1058:5856:80;;;;;;;;;3790:10:27;;1058:5856:80;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3790:10:27;1058:5856:80;;;;;;;;;2806:64:27;1058:5856:80;;3902:16:27;1058:5856:80;3082:831:70;;;1058:5856:80;;;3082:831:70;1058:5856:80;3082:831:70;;1058:5856:80;3082:831:70;;;;;;;;1058:5856:80;3082:831:70;;1058:5856:80;3082:831:70;;212:7:89;1058:5856:80;;838:46:85;834:83;;1058:5856:80;;;;927:20:85;1058:5856:80;;973:20:85;1058:5856:80;;;;;;;;;;;;4301:16:24;5066:101;;1058:5856:80;5066:101:24;1058:5856:80;;;;;;5142:14:24;1058:5856:80;;;;;;5142:14:24;1058:5856:80;834:83:85;1058:5856:80;;;893:24:85;;;;1058:5856:80;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3790:10:27;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;3766:7:27;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3766:7:27;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3766:7:27;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;4979:67:24;1058:5856:80;;;;;;;4979:67:24;;4851:91;1058:5856:80;;;4908:23:24;;;;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:24;;4726:34;1058:5856:80;;;;;;4301:16:24;;-1:-1:-1;4726:34:24;;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;;;12272:5:70;;:::i;:::-;212:7:89;1142:46:85;;1138:83;;1231:20;1058:5856:80;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;4327:20;1058:5856;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;;;;;;;;;;;;;:::i;:::-;1575:245:75;;;;;;;;;2281:72:26;;:::i;:::-;2708:30:80;;2704:57;;1058:5856;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;3021:10;;1058:5856;3008:24;3021:10;1058:5856;;;;4607:12;1058:5856;;;;;;;3008:24;1058:5856;;3058:13;1058:5856;3053:550;3073:29;;;;;;1883:75:75;;;1575:245;1883:75;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;3104:3;3123:21;;;;;;;;;;:::i;:::-;1058:5856;2076:24:88;;;;;;:::i;:::-;:36;;;:76;;;;3104:3:80;2072:108:88;;2194:24;;;;:::i;:::-;2229;;;;;;:::i;:::-;2194:66;;;;2190:101;;1058:5856:80;2328:28:88;1058:5856:80;3021:10;2328:28:88;;;:::i;:::-;1058:5856:80;2328:42:88;2324:66;;3437:21:80;:32;1058:5856;3437:21;1058:5856;3437:21;;;;:::i;:::-;:32;;:::i;:::-;3495:21;:28;:21;;;;;:::i;:::-;:28;;:::i;:::-;1058:5856;3549:28;:21;;;;;;;;:::i;:::-;1058:5856;3549:28;;;;:::i;:::-;1058:5856;;;;;;:::i;:::-;;;;;:::i;:::-;;;;:::i;:::-;;;5913:3;1058:5856;;5894:17;;;;;5936:9;;;;:::i;:::-;1058:5856;5936:14;5932:39;;1058:5856;6056:20;1058:5856;;6098:9;1058:5856;6098:9;;;;:::i;:::-;1058:5856;;6109:9;;;;:::i;:::-;1058:5856;6056:63;;;;;1058:5856;;;6056:63;;3021:10;1058:5856;6056:63;;1058:5856;;;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;-1:-1:-1;;6056:63:80;;;;;;1058:5856;6164:9;6056:63;;1058:5856;6056:63;;;;;5913:3;6164:9;;:::i;:::-;1058:5856;;6206:9;;;;:::i;:::-;1058:5856;;;;;;;;;;;;;;6138:78;1058:5856;3021:10;6138:78;;1058:5856;5879:13;;6056:63;;;;:::i;:::-;;;;;1058:5856;;;;;;;;;5932:39;1058:5856;;;5959:12;;;;5894:17;;;;;;;;3008:12;6252:20;3021:10;1058:5856;;;;4607:12;1058:5856;;;;;;;6252:20;:41;1058:5856;3021:10;3008:12;6303:20;3021:10;1058:5856;;;;4607:12;1058:5856;;;;;;;6303:20;:41;1058:5856;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;6552:82;;1058:5856;;;6552:82;;1058:5856;;;;;;;:::i;:::-;3021:10;1058:5856;;6369:276;1058:5856;6369:276;;1058:5856;;6369:276;;1058:5856;6513:15;1058:5856;6369:276;;1058:5856;6369:276;;;1058:5856;6672:36;;;:::i;:::-;1058:5856;;;5331:55;1058:5856;;;;;;;;;;;;;6774:42;:24;3021:10;1058:5856;;;;4607:12;1058:5856;;;;;;;6774:24;:42;1058:5856;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6369:276;;1058:5856;;;;;;;;;;6369:276;;1058:5856;3008:12;1058:5856;;;;;;;;6369:276;;1058:5856;6774:42;1058:5856;;;;;;;6369:276;;;1058:5856;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3261:331;;;;:::i;:::-;;;;;;:::i;:::-;1058:5856;;3058:13;;;1058:5856;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2324:66:88;1058:5856:80;;;2379:11:88;;;;2190:101;1058:5856:80;;;2269:22:88;;;;2072:108;1058:5856:80;;;2161:19:88;;;;2076:76;2116:24;;;;;:::i;:::-;:36;;;2076:76;;1058:5856:80;;;;;:::i;:::-;;;;;;;;;;2704:57;1058:5856;;;2747:14;;;;1575:245:75;;1058:5856:80;1575:245:75;1058:5856:80;1575:245:75;;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;;11523:61:69;;1058:5856:80;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;4607:38;:20;1058:5856;;:::i;:::-;;;;;4607:12;1058:5856;;;;;;;4607:20;:38;1058:5856;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;4607:12;1058:5856;;;;;;;4607:38;1058:5856;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;;;;;;;;;;;;;:::i;:::-;1575:245:75;;;;;;;;;;;;;;2281:72:26;;:::i;:::-;1058:5856:80;3770:200;3790:29;;;;;;1883:75:75;;;1058:5856:80;3821:3;1058:5856;;;;;;;;;;;;;;;;;;;;;;;774:35:88;1058:5856:80;;;;:::i;:::-;774:35:88;:::i;:::-;823:18;;;1058:5856:80;;856:10:88;;823:18;:29;1058:5856:80;823:18:88;;;;:::i;:29::-;1058:5856:80;823:43:88;819:77;;910:16;;;;;1058:5856:80;929:36:88;1058:5856:80;;;;;;;;968:15:88;-1:-1:-1;906:138:88;;1058:5856:80;;;5331:55;1058:5856;;;;;;;;;1057:56:88;1053:95;;1058:5856:80;;;;;;;;;;;;;;;;1604:22:88;;;;1058:5856:80;;1289:3:88;1255:25;:18;;;;:::i;:25::-;1251:36;;;;;;;1058:5856:80;;1417:28:88;1058:5856:80;1417:25:88;1058:5856:80;1417:18:88;1387:28;;1058:5856:80;1387:25:88;:18;1058:5856:80;;;1308:36:88;1058:5856:80;;1387:18:88;;:::i;:25::-;:28;;:::i;:::-;;:::i;:::-;1417:18;;;:::i;:::-;:25;;;;;:::i;:28::-;1058:5856:80;1308:151:88;;;;;1058:5856:80;;;1308:151:88;;856:10;1058:5856:80;1308:151:88;;1058:5856:80;;;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;-1:-1:-1;;1308:151:88;;;;;;;;;;;;;;;1522:18;1308:151;;;;;;;;;1289:3;1522:18;;:::i;:::-;:25;;;;:::i;:::-;:28;;;;:::i;:::-;;;;:::i;:::-;1058:5856:80;1569:17:88;;;;:::i;:::-;1604:22;;;;:::i;:::-;1644:18;;;;;;;:::i;:::-;1058:5856:80;1644:29:88;;;;:::i;:::-;1691:18;;;;:::i;:::-;:25;;;;;;:::i;:::-;:28;;;;:::i;:::-;1058:5856:80;;;;;;;;;;;;;;;;;;;;1478:287:88;;;;1058:5856:80;;1236:13:88;;1308:151;;;;:::i;:::-;;;;1251:36;-1:-1:-1;1251:36:88;;1058:5856:80;;;-1:-1:-1;1251:36:88;;-1:-1:-1;1251:36:88;-1:-1:-1;3775:13:80;;-1:-1:-1;;;3775:13:80;1053:95:88;1058:5856:80;;;1122:26:88;;;;906:138;1058:5856:80;;;1006:27:88;;;;819:77;1058:5856:80;;;875:21:88;;;;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;2806:64:27;1058:5856:80;5777:18:27;:43;;;1058:5856:80;;;;;;6441:7:27;1058:5856:80;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;6826:10:27;1058:5856:80;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;5965:13:27;;1058:5856:80;;;;6000:4:27;1058:5856:80;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1058:5856:80;;-1:-1:-1;1058:5856:80;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;5777:43:27;1058:5856:80;5799:16:27;1058:5856:80;5799:21:27;5777:43;;1058:5856:80;;-1:-1:-1;;1058:5856:80;;;;;12478:70:69;;:::i;:::-;1058:5856:80;6813:405:69;;;;;;;;;1058:5856:80;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;1237:66:26;1058:5856:80;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;9831:339:69;;;;1058:5856:80;9831:339:69;1058:5856:80;9831:339:69;;;;;;1058:5856:80;9831:339:69;;1058:5856:80;;;;;;-1:-1:-1;;1058:5856:80;;;;;6461:184:77;6402:6;6461:184;;;1058:5856:80;;;2614:66:77;1058:5856:80;;;6461:184:77;;1058:5856:80;6461:184:77;1058:5856:80;6461:184:77;;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;10695:219:70;;;1058:5856:80;10695:219:70;1058:5856:80;;;10695:219:70;;;;11083:21;:26;;1058:5856:80;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5766:446:77;5707:6;5766:446;;;4254:1327;12478:70:69;;;:::i;:::-;4254:1327:77;;;;;;1058:5856:80;4254:1327:77;1058:5856:80;4254:1327:77;;;;;;;;;;;;;1058:5856:80;4254:1327:77;;;;;1058:5856:80;4254:1327:77;;1058:5856:80;4254:1327:77;1058:5856:80;;4254:1327:77;1058:5856:80;;4254:1327:77;;;;;;;;;;1058:5856:80;4254:1327:77;;1058:5856:80;4254:1327:77;;;;;;;;;1058:5856:80;4254:1327:77;;1058:5856:80;;-1:-1:-1;;1058:5856:80;;;;;4408:5:70;1058:5856:80;;:::i;:::-;12478:70:69;;:::i;:::-;1058:5856:80;;4408:5:70;;:::i;:::-;1058:5856:80;;;;;-1:-1:-1;;1058:5856:80;;;;;;;;;;;;;;;;;;;;;;;;;4866:36;1058:5856;;;;;;:::i;4866:36::-;1058:5856;;5331:55;1058:5856;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;10695:219:70;;;1058:5856:80;10695:219:70;1058:5856:80;10695:219:70;;;;1058:5856:80;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;9239:383:69;;;;1058:5856:80;9239:383:69;7972:9;9132:15;1058:5856:80;9239:383:69;;;;;;1058:5856:80;9239:383:69;;1058:5856:80;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;;:::i;:::-;;;10695:219:70;;;;1058:5856:80;10695:219:70;;;;;;11280:21;:30;1058:5856:80;;;;;;;;-1:-1:-1;;1058:5856:80;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;3082:831:70;;;1058:5856:80;3082:831:70;;;;1058:5856:80;;3082:831:70;;;;;;;;;;;1058:5856:80;3082:831:70;;1058:5856:80;;;-1:-1:-1;;1058:5856:80;;;;;4408:5:70;1058:5856:80;;10211:10:70;4408:5;:::i;1058:5856:80:-;;;;;-1:-1:-1;;1058:5856:80;;;;;;;;;;;;;;12272:5:70;;:::i;:::-;4071:46:80;;;2281:72:26;;:::i;:::-;1237:66;739:6:89;1058:5856:80;;;;;;;3515:20:26;1058:5856:80;;;966:10:25;1058:5856:80;;3515:20:26;1058:5856:80;4071:46;1237:66:26;1058:5856:80;;;;;3167:9:26;3163:62;;1058:5856:80;;;;3823:22:26;1058:5856:80;;;966:10:25;1058:5856:80;;3823:22:26;1058:5856:80;3163:62:26;1058:5856:80;;;3199:15:26;;;;1058:5856:80;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;:::o;:::-;;;;;;;:::i;:::-;;-1:-1:-1;1058:5856:80;;-1:-1:-1;1058:5856:80;;;;-1:-1:-1;1058:5856:80;;;;-1:-1:-1;1058:5856:80;;;;;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;1058:5856:80;;;;;;:::o;:::-;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;6191:790:70:-;6309:666;;;;;;739:6:89;6309:666:70;;;;;;;;6191:790::o;6309:666::-;;;;;;;6191:790::o;6309:666::-;;;;;;;1788:158:88;1058:5856:80;;1916:22:88;;1058:5856:80;1916:22:88;;;1058:5856:80;1916:22:88;1058:5856:80;;;;;;;:::i;:::-;1916:22:88;;;;;;;;:::i;:::-;1058:5856:80;1906:33:88;;1788:158;:::o;1058:5856:80:-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;2905:128:26;1058:5856:80;1237:66:26;1058:5856:80;;2966:61:26;;2905:128::o;2966:61::-;3001:15;1058:5856:80;;3001:15:26;;;;1058:5856:80;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;1058:5856:80;;-1:-1:-1;1058:5856:80;;;;;;;:::i;:::-;:::o;2952:967:70:-;3082:831;;;1058:5856:80;3082:831:70;;;;;;;;;;;;;;;;;;;1058:5856:80;3082:831:70;;2952:967::o;7084:141:24:-;1058:5856:80;8837:64:24;1058:5856:80;;;;7150:18:24;7146:73;;7084:141::o;7146:73::-;7191:17;1058:5856:80;;7191:17:24;;;",
    "linkReferences": {},
    "immutableReferences": {
      "58898": [
        {
          "start": 8093,
          "length": 32
        },
        {
          "start": 8321,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "eip712Domain()": "84b0196e",
    "fetchQueuedWithdrawals(address)": "8c475559",
    "finishWithdraw((address,address,uint256,uint256,(address[],uint256[],address))[])": "86e9a1f7",
    "grantRoles(address,uint256)": "1c10893f",
    "hasAllRoles(address,uint256)": "1cd64df4",
    "hasAnyRole(address,uint256)": "514e62fc",
    "initialize(address,uint256,address)": "c350a1b5",
    "isWithdrawPending((address,address,uint256,uint256,(address[],uint256[],address)))": "4618c974",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "pause(bool)": "02329a29",
    "paused()": "5c975abb",
    "proxiableUUID()": "52d1902d",
    "renounceOwnership()": "715018a6",
    "renounceRoles(uint256)": "183a4f6e",
    "requestOwnershipHandover()": "25692962",
    "revokeRoles(address,uint256)": "4a4ee7b1",
    "rolesOf(address)": "2de94807",
    "startWithdraw((address[],uint256[],address)[])": "92dca407",
    "transferOwnership(address)": "f2fde38b",
    "updateMinWithdrawDelay(uint256)": "bf2dc79d",
    "upgradeToAndCall(address,bytes)": "4f1ef286",
    "withdrawalDelay()": "a7ab6961"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ArrayLengthsNotEqual\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidWithdrawalDelay\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinWithdrawDelayNotPassed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoElementsInArray\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotStaker\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnauthorizedCallContext\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpgradeFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WithdrawAlreadyCompleted\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WithdrawerNotCaller\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroShares\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"withdrawRoot\",\"type\":\"bytes32\"}],\"name\":\"FinishedWithdrawal\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"RolesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"StartedWithdrawal\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"fetchQueuedWithdrawals\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"queuedWithdrawals\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"startedWithdrawals\",\"type\":\"tuple[]\"}],\"name\":\"finishWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"grantRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAllRoles\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAnyRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultSupervisor\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"minWithdrawDelay\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"manager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal\",\"name\":\"withdrawal\",\"type\":\"tuple\"}],\"name\":\"isWithdrawPending\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proxiableUUID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"renounceRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"revokeRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rolesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest[]\",\"name\":\"withdrawalRequests\",\"type\":\"tuple[]\"}],\"name\":\"startWithdraw\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"withdrawalRoots\",\"type\":\"bytes32[]\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"withdrawConfigs\",\"type\":\"tuple[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"delay\",\"type\":\"uint256\"}],\"name\":\"updateMinWithdrawDelay\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawalDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}],\"UnauthorizedCallContext()\":[{\"details\":\"The call is from an unauthorized call context.\"}],\"UpgradeFailed()\":[{\"details\":\"The upgrade failed.\"}]},\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"},\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"RolesUpdated(address,uint256)\":{\"details\":\"The `user`'s roles is updated to `roles`. Each bit of `roles` represents whether the role is set.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the proxy's implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"},\"grantRoles(address,uint256)\":{\"details\":\"Allows the owner to grant `user` `roles`. If the `user` already has a role, then it will be an no-op for the role.\"},\"hasAllRoles(address,uint256)\":{\"details\":\"Returns whether `user` has all of `roles`.\"},\"hasAnyRole(address,uint256)\":{\"details\":\"Returns whether `user` has any of `roles`.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"proxiableUUID()\":{\"details\":\"Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"renounceRoles(uint256)\":{\"details\":\"Allow the caller to remove their own roles. If the caller does not have a role, then it will be an no-op for the role.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"revokeRoles(address,uint256)\":{\"details\":\"Allows the owner to remove `user` `roles`. If the `user` does not have a role, then it will be an no-op for the role.\"},\"rolesOf(address)\":{\"details\":\"Returns the roles of `user`.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/DelegationSupervisor.sol\":\"DelegationSupervisor\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007\",\"dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78\",\"dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743\",\"dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x6b11eb41a228cca35d4b662b4df69fcd75192851365102690f57b2ac01e83fe6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ab006a2983ed350d2af21ddcdd835dcae3b8340086cc4d088460da5abd041f69\",\"dweb:/ipfs/QmbEacDhkJZiGrgzLjB4pNtE8Z1uudjDw1DvcDUTVQFsLG\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/UUPSUpgradeable.sol\":{\"keccak256\":\"0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83\",\"dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC\"]},\"src/DelegationSupervisor.sol\":{\"keccak256\":\"0x94ab38c8bf398c356c94f9caacf6482eced82fe149e447bf09d9132aaa847bf3\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e97c6bb546db5801eaf63132ed8bbcf167ee33aa686695f21650038115222a79\",\"dweb:/ipfs/Qmbka1cdjGeHHsvWxVw9s32CP99psFMfTTPgUA2G1DZGMt\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
          "name": "ArrayLengthsNotEqual"
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
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidWithdrawalDelay"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinWithdrawDelayNotPassed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NewOwnerIsZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoElementsInArray"
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
          "name": "NotStaker"
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
          "name": "WithdrawAlreadyCompleted"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "WithdrawerNotCaller"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroShares"
        },
        {
          "inputs": [],
          "type": "event",
          "name": "EIP712DomainChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "staker",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "withdrawer",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "withdrawRoot",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "FinishedWithdrawal",
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
              "name": "vault",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "staker",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "withdrawer",
              "type": "address",
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
          "name": "StartedWithdrawal",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
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
          "name": "fetchQueuedWithdrawals",
          "outputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "queuedWithdrawals",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "startedWithdrawals",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "finishWithdraw"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "vaultSupervisor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "minWithdrawDelay",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "manager",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal",
              "name": "withdrawal",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isWithdrawPending",
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
              "internalType": "struct Withdraw.WithdrawRequest[]",
              "name": "withdrawalRequests",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "contract IVault[]",
                  "name": "vaults",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "shares",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "withdrawer",
                  "type": "address"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startWithdraw",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "withdrawalRoots",
              "type": "bytes32[]"
            },
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "withdrawConfigs",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
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
              "name": "delay",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateMinWithdrawDelay"
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
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "withdrawalDelay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
          "eip712Domain()": {
            "details": "See {IERC-5267}."
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
        "src/DelegationSupervisor.sol": "DelegationSupervisor"
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
      "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": {
        "keccak256": "0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39",
        "urls": [
          "bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743",
          "dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"
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
      "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": {
        "keccak256": "0x6b11eb41a228cca35d4b662b4df69fcd75192851365102690f57b2ac01e83fe6",
        "urls": [
          "bzz-raw://ab006a2983ed350d2af21ddcdd835dcae3b8340086cc4d088460da5abd041f69",
          "dweb:/ipfs/QmbEacDhkJZiGrgzLjB4pNtE8Z1uudjDw1DvcDUTVQFsLG"
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
      "src/DelegationSupervisor.sol": {
        "keccak256": "0x94ab38c8bf398c356c94f9caacf6482eced82fe149e447bf09d9132aaa847bf3",
        "urls": [
          "bzz-raw://e97c6bb546db5801eaf63132ed8bbcf167ee33aa686695f21650038115222a79",
          "dweb:/ipfs/Qmbka1cdjGeHHsvWxVw9s32CP99psFMfTTPgUA2G1DZGMt"
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
    "absolutePath": "src/DelegationSupervisor.sol",
    "id": 60249,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "Constants": [
        62945
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "DelegationSupervisor": [
        60248
      ],
      "DelegationSupervisorLib": [
        62416
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
      "SignatureChecker": [
        52734
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
    "src": "51:6864:80",
    "nodes": [
      {
        "id": 59692,
        "nodeType": "PragmaDirective",
        "src": "51:24:80",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 59694,
        "nodeType": "ImportDirective",
        "src": "77:86:80",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "@openzeppelin-upgradeable/proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59693,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "85:13:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59696,
        "nodeType": "ImportDirective",
        "src": "164:93:80",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "file": "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 51007,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59695,
              "name": "IERC20Permit",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51006,
              "src": "172:12:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59698,
        "nodeType": "ImportDirective",
        "src": "259:92:80",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/PausableUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 47100,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59697,
              "name": "PausableUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47099,
              "src": "267:19:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59700,
        "nodeType": "ImportDirective",
        "src": "352:101:80",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 47444,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59699,
              "name": "EIP712Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47443,
              "src": "360:17:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59702,
        "nodeType": "ImportDirective",
        "src": "454:97:80",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
        "file": "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 52735,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59701,
              "name": "SignatureChecker",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52734,
              "src": "462:16:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59704,
        "nodeType": "ImportDirective",
        "src": "552:69:80",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
        "file": "solady/src/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 58543,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59703,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58542,
              "src": "560:15:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59706,
        "nodeType": "ImportDirective",
        "src": "622:69:80",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/UUPSUpgradeable.sol",
        "file": "solady/src/utils/UUPSUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 58966,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59705,
              "name": "UUPSUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58965,
              "src": "630:15:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59708,
        "nodeType": "ImportDirective",
        "src": "692:62:80",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/OwnableRoles.sol",
        "file": "solady/src/auth/OwnableRoles.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 55651,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59707,
              "name": "OwnableRoles",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 55650,
              "src": "700:12:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59709,
        "nodeType": "ImportDirective",
        "src": "756:33:80",
        "nodes": [],
        "absolutePath": "src/entities/Withdraw.sol",
        "file": "./entities/Withdraw.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 62914,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59710,
        "nodeType": "ImportDirective",
        "src": "790:48:80",
        "nodes": [],
        "absolutePath": "src/entities/DelegationSupervisorLib.sol",
        "file": "./entities/DelegationSupervisorLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 62417,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59711,
        "nodeType": "ImportDirective",
        "src": "839:31:80",
        "nodes": [],
        "absolutePath": "src/entities/Staker.sol",
        "file": "./entities/Staker.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 62432,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59713,
        "nodeType": "ImportDirective",
        "src": "872:53:80",
        "nodes": [],
        "absolutePath": "src/interfaces/Constants.sol",
        "file": "./interfaces/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 62946,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59712,
              "name": "Constants",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62945,
              "src": "880:9:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59715,
        "nodeType": "ImportDirective",
        "src": "926:47:80",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 63272,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59714,
              "name": "IVault",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63271,
              "src": "934:6:80",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59716,
        "nodeType": "ImportDirective",
        "src": "974:48:80",
        "nodes": [],
        "absolutePath": "src/interfaces/IDelegationSupervisor.sol",
        "file": "./interfaces/IDelegationSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 63098,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59717,
        "nodeType": "ImportDirective",
        "src": "1023:33:80",
        "nodes": [],
        "absolutePath": "src/interfaces/Events.sol",
        "file": "./interfaces/Events.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60249,
        "sourceUnit": 63036,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60248,
        "nodeType": "ContractDefinition",
        "src": "1058:5856:80",
        "nodes": [
          {
            "id": 59735,
            "nodeType": "UsingForDirective",
            "src": "1250:66:80",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59732,
              "name": "DelegationSupervisorLib",
              "nameLocations": [
                "1256:23:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62416,
              "src": "1256:23:80"
            },
            "typeName": {
              "id": 59734,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 59733,
                "name": "DelegationSupervisorLib.Storage",
                "nameLocations": [
                  "1284:23:80",
                  "1308:7:80"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62359,
                "src": "1284:31:80"
              },
              "referencedDeclaration": 62359,
              "src": "1284:31:80",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                "typeString": "struct DelegationSupervisorLib.Storage"
              }
            }
          },
          {
            "id": 59739,
            "nodeType": "UsingForDirective",
            "src": "1321:45:80",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59736,
              "name": "Withdraw",
              "nameLocations": [
                "1327:8:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62913,
              "src": "1327:8:80"
            },
            "typeName": {
              "id": 59738,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 59737,
                "name": "Withdraw.QueuedWithdrawal",
                "nameLocations": [
                  "1340:8:80",
                  "1349:16:80"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62732,
                "src": "1340:25:80"
              },
              "referencedDeclaration": 62732,
              "src": "1340:25:80",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                "typeString": "struct Withdraw.QueuedWithdrawal"
              }
            }
          },
          {
            "id": 59744,
            "nodeType": "UsingForDirective",
            "src": "1371:46:80",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59740,
              "name": "Withdraw",
              "nameLocations": [
                "1377:8:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62913,
              "src": "1377:8:80"
            },
            "typeName": {
              "baseType": {
                "id": 59742,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 59741,
                  "name": "Withdraw.WithdrawRequest",
                  "nameLocations": [
                    "1390:8:80",
                    "1399:15:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62742,
                  "src": "1390:24:80"
                },
                "referencedDeclaration": 62742,
                "src": "1390:24:80",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                  "typeString": "struct Withdraw.WithdrawRequest"
                }
              },
              "id": 59743,
              "nodeType": "ArrayTypeName",
              "src": "1390:26:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_storage_$dyn_storage_ptr",
                "typeString": "struct Withdraw.WithdrawRequest[]"
              }
            }
          },
          {
            "id": 59748,
            "nodeType": "UsingForDirective",
            "src": "1422:44:80",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59745,
              "name": "Withdraw",
              "nameLocations": [
                "1428:8:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62913,
              "src": "1428:8:80"
            },
            "typeName": {
              "id": 59747,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 59746,
                "name": "Withdraw.WithdrawRequest",
                "nameLocations": [
                  "1441:8:80",
                  "1450:15:80"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62742,
                "src": "1441:24:80"
              },
              "referencedDeclaration": 62742,
              "src": "1441:24:80",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                "typeString": "struct Withdraw.WithdrawRequest"
              }
            }
          },
          {
            "id": 59751,
            "nodeType": "VariableDeclaration",
            "src": "1584:106:80",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STORAGE_SLOT",
            "nameLocation": "1609:12:80",
            "scope": 60248,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 59749,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1584:7:80",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307862306230326630656362303961366537393862306639303262313361633836633263313537646134313261376634323934666131616537393333366637373030",
              "id": 59750,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1624:66:80",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_79918351214955798291759588364679175304230863019067255961849442008920721684224_by_1",
                "typeString": "int_const 7991...(69 digits omitted)...4224"
              },
              "value": "0xb0b02f0ecb09a6e798b0f902b13ac86c2c157da412a7f4294fa1ae79336f7700"
            },
            "visibility": "private"
          },
          {
            "id": 59758,
            "nodeType": "FunctionDefinition",
            "src": "1749:53:80",
            "nodes": [],
            "body": {
              "id": 59757,
              "nodeType": "Block",
              "src": "1763:39:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 59754,
                      "name": "_disableInitializers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46845,
                      "src": "1773:20:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 59755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1773:22:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59756,
                  "nodeType": "ExpressionStatement",
                  "src": "1773:22:80"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 59752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1760:2:80"
            },
            "returnParameters": {
              "id": 59753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1763:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 59804,
            "nodeType": "FunctionDefinition",
            "src": "1808:416:80",
            "nodes": [],
            "body": {
              "id": 59803,
              "nodeType": "Block",
              "src": "1917:307:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59770,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1944:3:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1948:6:80",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1944:10:80",
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
                      "id": 59769,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54002,
                      "src": "1927:16:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 59772,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1927:28:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59773,
                  "nodeType": "ExpressionStatement",
                  "src": "1927:28:80"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 59774,
                      "name": "__Pausable_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46975,
                      "src": "1965:15:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 59775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1965:17:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59776,
                  "nodeType": "ExpressionStatement",
                  "src": "1965:17:80"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "4b6172616b5f44656c65676174696f6e5f537570",
                        "id": 59778,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2006:22:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24cae66b3fcd68d1bea1c6463e354675b5eba8fce8c09ac195ea3c15d9a68ff9",
                          "typeString": "literal_string \"Karak_Delegation_Sup\""
                        },
                        "value": "Karak_Delegation_Sup"
                      },
                      {
                        "hexValue": "7631",
                        "id": 59779,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2030:4:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0984d5efd47d99151ae1be065a709e56c602102f24c1abc4008eb3f815a8d217",
                          "typeString": "literal_string \"v1\""
                        },
                        "value": "v1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_24cae66b3fcd68d1bea1c6463e354675b5eba8fce8c09ac195ea3c15d9a68ff9",
                          "typeString": "literal_string \"Karak_Delegation_Sup\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0984d5efd47d99151ae1be065a709e56c602102f24c1abc4008eb3f815a8d217",
                          "typeString": "literal_string \"v1\""
                        }
                      ],
                      "id": 59777,
                      "name": "__EIP712_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47156,
                      "src": "1992:13:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 59780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1992:43:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59781,
                  "nodeType": "ExpressionStatement",
                  "src": "1992:43:80"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59783,
                        "name": "manager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59764,
                        "src": "2058:7:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 59784,
                          "name": "Constants",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62945,
                          "src": "2067:9:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                            "typeString": "type(library Constants)"
                          }
                        },
                        "id": 59785,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2077:12:80",
                        "memberName": "MANAGER_ROLE",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62944,
                        "src": "2067:22:80",
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
                      "id": 59782,
                      "name": "_grantRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54182,
                      "src": "2046:11:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 59786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2046:44:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59787,
                  "nodeType": "ExpressionStatement",
                  "src": "2046:44:80"
                },
                {
                  "assignments": [
                    59792
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59792,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "2141:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 59803,
                      "src": "2101:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 59791,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 59790,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "2101:23:80",
                            "2125:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "2101:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "2101:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59795,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 59793,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "2148:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 59794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2148:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2101:54:80"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59799,
                        "name": "vaultSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59760,
                        "src": "2183:15:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59800,
                        "name": "minWithdrawDelay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59762,
                        "src": "2200:16:80",
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
                      "expression": {
                        "id": 59796,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59792,
                        "src": "2165:4:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 59798,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2170:12:80",
                      "memberName": "initOrUpdate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62392,
                      "src": "2165:17:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Storage_$62359_storage_ptr_$_t_address_$_t_uint256_$returns$__$attached_to$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function (struct DelegationSupervisorLib.Storage storage pointer,address,uint256)"
                      }
                    },
                    "id": 59801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2165:52:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59802,
                  "nodeType": "ExpressionStatement",
                  "src": "2165:52:80"
                }
              ]
            },
            "baseFunctions": [
              63053
            ],
            "functionSelector": "c350a1b5",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 59767,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59766,
                  "name": "initializer",
                  "nameLocations": [
                    "1905:11:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46731,
                  "src": "1905:11:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "1905:11:80"
              }
            ],
            "name": "initialize",
            "nameLocation": "1817:10:80",
            "parameters": {
              "id": 59765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59760,
                  "mutability": "mutable",
                  "name": "vaultSupervisor",
                  "nameLocation": "1836:15:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59804,
                  "src": "1828:23:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1828:7:80",
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
                  "id": 59762,
                  "mutability": "mutable",
                  "name": "minWithdrawDelay",
                  "nameLocation": "1861:16:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59804,
                  "src": "1853:24:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59764,
                  "mutability": "mutable",
                  "name": "manager",
                  "nameLocation": "1887:7:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59804,
                  "src": "1879:15:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1879:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1827:68:80"
            },
            "returnParameters": {
              "id": 59768,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1917:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 59828,
            "nodeType": "FunctionDefinition",
            "src": "2230:212:80",
            "nodes": [],
            "body": {
              "id": 59827,
              "nodeType": "Block",
              "src": "2327:115:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59817
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59817,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "2377:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 59827,
                      "src": "2337:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 59816,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 59815,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "2337:23:80",
                            "2361:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "2337:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "2337:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59820,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 59818,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "2384:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 59819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2384:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2337:54:80"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59824,
                        "name": "delay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59806,
                        "src": "2429:5:80",
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
                        "id": 59821,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59817,
                        "src": "2401:4:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 59823,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2406:22:80",
                      "memberName": "updateMinWithdrawDelay",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62415,
                      "src": "2401:27:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Storage_$62359_storage_ptr_$_t_uint256_$returns$__$attached_to$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function (struct DelegationSupervisorLib.Storage storage pointer,uint256)"
                      }
                    },
                    "id": 59825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2401:34:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59826,
                  "nodeType": "ExpressionStatement",
                  "src": "2401:34:80"
                }
              ]
            },
            "functionSelector": "bf2dc79d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 59809,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "2303:9:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 59810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "2313:12:80",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "2303:22:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 59811,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59808,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "2286:16:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "2286:16:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "2286:40:80"
              }
            ],
            "name": "updateMinWithdrawDelay",
            "nameLocation": "2239:22:80",
            "parameters": {
              "id": 59807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59806,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "2270:5:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59828,
                  "src": "2262:13:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2262:7:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2261:15:80"
            },
            "returnParameters": {
              "id": 59812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2327:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 59936,
            "nodeType": "FunctionDefinition",
            "src": "2448:1161:80",
            "nodes": [],
            "body": {
              "id": 59935,
              "nodeType": "Block",
              "src": "2694:915:80",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 59849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 59846,
                        "name": "withdrawalRequests",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59832,
                        "src": "2708:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                        }
                      },
                      "id": 59847,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2727:6:80",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2708:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 59848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2737:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2708:30:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59853,
                  "nodeType": "IfStatement",
                  "src": "2704:57:80",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 59850,
                        "name": "InvalidInput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62949,
                        "src": "2747:12:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 59851,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2747:14:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 59852,
                    "nodeType": "RevertStatement",
                    "src": "2740:21:80"
                  }
                },
                {
                  "assignments": [
                    59858
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59858,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "2811:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 59935,
                      "src": "2771:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 59857,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 59856,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "2771:23:80",
                            "2795:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "2771:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "2771:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59861,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 59859,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "2818:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 59860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2818:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2771:54:80"
                },
                {
                  "expression": {
                    "id": 59869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59862,
                      "name": "withdrawalRoots",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59840,
                      "src": "2835:15:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 59866,
                            "name": "withdrawalRequests",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59832,
                            "src": "2867:18:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                              "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                            }
                          },
                          "id": 59867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2886:6:80",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "2867:25:80",
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
                        "id": 59865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2853:13:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (bytes32[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 59863,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2857:7:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 59864,
                          "nodeType": "ArrayTypeName",
                          "src": "2857:9:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                            "typeString": "bytes32[]"
                          }
                        }
                      },
                      "id": 59868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2853:40:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "src": "2835:58:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "id": 59870,
                  "nodeType": "ExpressionStatement",
                  "src": "2835:58:80"
                },
                {
                  "expression": {
                    "id": 59879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59871,
                      "name": "withdrawConfigs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59844,
                      "src": "2903:15:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 59876,
                            "name": "withdrawalRequests",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59832,
                            "src": "2953:18:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                              "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                            }
                          },
                          "id": 59877,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2972:6:80",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "2953:25:80",
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
                        "id": 59875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2921:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (struct Withdraw.QueuedWithdrawal memory[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 59873,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 59872,
                              "name": "Withdraw.QueuedWithdrawal",
                              "nameLocations": [
                                "2925:8:80",
                                "2934:16:80"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 62732,
                              "src": "2925:25:80"
                            },
                            "referencedDeclaration": 62732,
                            "src": "2925:25:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal"
                            }
                          },
                          "id": 59874,
                          "nodeType": "ArrayTypeName",
                          "src": "2925:27:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal[]"
                          }
                        }
                      },
                      "id": 59878,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2921:58:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                      }
                    },
                    "src": "2903:76:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                    }
                  },
                  "id": 59880,
                  "nodeType": "ExpressionStatement",
                  "src": "2903:76:80"
                },
                {
                  "assignments": [
                    59882
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59882,
                      "mutability": "mutable",
                      "name": "operator",
                      "nameLocation": "2997:8:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 59935,
                      "src": "2989:16:80",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 59881,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2989:7:80",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59889,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "expression": {
                          "id": 59883,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59858,
                          "src": "3008:4:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 59884,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3013:7:80",
                        "memberName": "stakers",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62353,
                        "src": "3008:12:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakerState_$62430_storage_$",
                          "typeString": "mapping(address => struct Staker.StakerState storage ref)"
                        }
                      },
                      "id": 59887,
                      "indexExpression": {
                        "expression": {
                          "id": 59885,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3021:3:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59886,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3025:6:80",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3021:10:80",
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
                      "src": "3008:24:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakerState_$62430_storage",
                        "typeString": "struct Staker.StakerState storage ref"
                      }
                    },
                    "id": 59888,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3033:9:80",
                    "memberName": "delegatee",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62421,
                    "src": "3008:34:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2989:53:80"
                },
                {
                  "body": {
                    "id": 59933,
                    "nodeType": "Block",
                    "src": "3109:494:80",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "baseExpression": {
                                "id": 59901,
                                "name": "withdrawalRequests",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59832,
                                "src": "3123:18:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                                  "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                                }
                              },
                              "id": 59903,
                              "indexExpression": {
                                "id": 59902,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59891,
                                "src": "3142:1:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3123:21:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                "typeString": "struct Withdraw.WithdrawRequest calldata"
                              }
                            },
                            "id": 59904,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3145:8:80",
                            "memberName": "validate",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62912,
                            "src": "3123:30:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$returns$__$attached_to$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$",
                              "typeString": "function (struct Withdraw.WithdrawRequest calldata) view"
                            }
                          },
                          "id": 59905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3123:32:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59906,
                        "nodeType": "ExpressionStatement",
                        "src": "3123:32:80"
                      },
                      {
                        "expression": {
                          "id": 59931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "baseExpression": {
                                  "id": 59907,
                                  "name": "withdrawalRoots",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59840,
                                  "src": "3262:15:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 59909,
                                "indexExpression": {
                                  "id": 59908,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59891,
                                  "src": "3278:1:80",
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
                                "src": "3262:18:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "baseExpression": {
                                  "id": 59910,
                                  "name": "withdrawConfigs",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59844,
                                  "src": "3282:15:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                                    "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                                  }
                                },
                                "id": 59912,
                                "indexExpression": {
                                  "id": 59911,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59891,
                                  "src": "3298:1:80",
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
                                "src": "3282:18:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                                  "typeString": "struct Withdraw.QueuedWithdrawal memory"
                                }
                              }
                            ],
                            "id": 59913,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "3261:40:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$",
                              "typeString": "tuple(bytes32,struct Withdraw.QueuedWithdrawal memory)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 59915,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "3361:3:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 59916,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3365:6:80",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "3361:10:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 59917,
                                "name": "operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59882,
                                "src": "3399:8:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 59918,
                                    "name": "withdrawalRequests",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59832,
                                    "src": "3437:18:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                                      "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                                    }
                                  },
                                  "id": 59920,
                                  "indexExpression": {
                                    "id": 59919,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59891,
                                    "src": "3456:1:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3437:21:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 59921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3459:10:80",
                                "memberName": "withdrawer",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62741,
                                "src": "3437:32:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 59922,
                                    "name": "withdrawalRequests",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59832,
                                    "src": "3495:18:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                                      "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                                    }
                                  },
                                  "id": 59924,
                                  "indexExpression": {
                                    "id": 59923,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59891,
                                    "src": "3514:1:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3495:21:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 59925,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3517:6:80",
                                "memberName": "vaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62736,
                                "src": "3495:28:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                                  "typeString": "contract IVault[] calldata"
                                }
                              },
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 59926,
                                    "name": "withdrawalRequests",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59832,
                                    "src": "3549:18:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                                      "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                                    }
                                  },
                                  "id": 59928,
                                  "indexExpression": {
                                    "id": 59927,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59891,
                                    "src": "3568:1:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3549:21:80",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 59929,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3571:6:80",
                                "memberName": "shares",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62739,
                                "src": "3549:28:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
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
                                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                                  "typeString": "contract IVault[] calldata"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              ],
                              "id": 59914,
                              "name": "removeSharesAndStartWithdrawal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60238,
                              "src": "3304:30:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_bytes32_$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$",
                                "typeString": "function (address,address,address,contract IVault[] memory,uint256[] memory) returns (bytes32,struct Withdraw.QueuedWithdrawal memory)"
                              }
                            },
                            "id": 59930,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "3353:6:80",
                              "3389:8:80",
                              "3425:10:80",
                              "3487:6:80",
                              "3541:6:80"
                            ],
                            "names": [
                              "staker",
                              "operator",
                              "withdrawer",
                              "vaults",
                              "shares"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "3304:288:80",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$",
                              "typeString": "tuple(bytes32,struct Withdraw.QueuedWithdrawal memory)"
                            }
                          },
                          "src": "3261:331:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59932,
                        "nodeType": "ExpressionStatement",
                        "src": "3261:331:80"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 59897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 59894,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59891,
                      "src": "3073:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 59895,
                        "name": "withdrawalRequests",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59832,
                        "src": "3077:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "struct Withdraw.WithdrawRequest calldata[] calldata"
                        }
                      },
                      "id": 59896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3096:6:80",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3077:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3073:29:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59934,
                  "initializationExpression": {
                    "assignments": [
                      59891
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 59891,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3066:1:80",
                        "nodeType": "VariableDeclaration",
                        "scope": 59934,
                        "src": "3058:9:80",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 59890,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3058:7:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 59893,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 59892,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3070:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3058:13:80"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 59899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3104:3:80",
                      "subExpression": {
                        "id": 59898,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59891,
                        "src": "3104:1:80",
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
                    "id": 59900,
                    "nodeType": "ExpressionStatement",
                    "src": "3104:3:80"
                  },
                  "nodeType": "ForStatement",
                  "src": "3053:550:80"
                }
              ]
            },
            "baseFunctions": [
              63067
            ],
            "functionSelector": "92dca407",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 59835,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59834,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2552:12:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "2552:12:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "2552:12:80"
              },
              {
                "id": 59837,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59836,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2573:13:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "2573:13:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "2573:13:80"
              }
            ],
            "name": "startWithdraw",
            "nameLocation": "2457:13:80",
            "parameters": {
              "id": 59833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59832,
                  "mutability": "mutable",
                  "name": "withdrawalRequests",
                  "nameLocation": "2507:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59936,
                  "src": "2471:54:80",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct Withdraw.WithdrawRequest[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59830,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 59829,
                        "name": "Withdraw.WithdrawRequest",
                        "nameLocations": [
                          "2471:8:80",
                          "2480:15:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62742,
                        "src": "2471:24:80"
                      },
                      "referencedDeclaration": 62742,
                      "src": "2471:24:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                        "typeString": "struct Withdraw.WithdrawRequest"
                      }
                    },
                    "id": 59831,
                    "nodeType": "ArrayTypeName",
                    "src": "2471:26:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.WithdrawRequest[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2470:56:80"
            },
            "returnParameters": {
              "id": 59845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59840,
                  "mutability": "mutable",
                  "name": "withdrawalRoots",
                  "nameLocation": "2621:15:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59936,
                  "src": "2604:32:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59838,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2604:7:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 59839,
                    "nodeType": "ArrayTypeName",
                    "src": "2604:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59844,
                  "mutability": "mutable",
                  "name": "withdrawConfigs",
                  "nameLocation": "2673:15:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59936,
                  "src": "2638:50:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59842,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 59841,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "2638:8:80",
                          "2647:16:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "2638:25:80"
                      },
                      "referencedDeclaration": 62732,
                      "src": "2638:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 59843,
                    "nodeType": "ArrayTypeName",
                    "src": "2638:27:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2603:86:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 59976,
            "nodeType": "FunctionDefinition",
            "src": "3615:361:80",
            "nodes": [],
            "body": {
              "id": 59975,
              "nodeType": "Block",
              "src": "3760:216:80",
              "nodes": [],
              "statements": [
                {
                  "body": {
                    "id": 59973,
                    "nodeType": "Block",
                    "src": "3826:144:80",
                    "statements": [
                      {
                        "assignments": [
                          59962
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 59962,
                            "mutability": "mutable",
                            "name": "self",
                            "nameLocation": "3880:4:80",
                            "nodeType": "VariableDeclaration",
                            "scope": 59973,
                            "src": "3840:44:80",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                              "typeString": "struct DelegationSupervisorLib.Storage"
                            },
                            "typeName": {
                              "id": 59961,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 59960,
                                "name": "DelegationSupervisorLib.Storage",
                                "nameLocations": [
                                  "3840:23:80",
                                  "3864:7:80"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 62359,
                                "src": "3840:31:80"
                              },
                              "referencedDeclaration": 62359,
                              "src": "3840:31:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                "typeString": "struct DelegationSupervisorLib.Storage"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 59965,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 59963,
                            "name": "_self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60095,
                            "src": "3887:5:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                              "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                            }
                          },
                          "id": 59964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3887:7:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3840:54:80"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59970,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59962,
                              "src": "3954:4:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                              }
                            ],
                            "expression": {
                              "baseExpression": {
                                "id": 59966,
                                "name": "startedWithdrawals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59940,
                                "src": "3908:18:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$dyn_calldata_ptr",
                                  "typeString": "struct Withdraw.QueuedWithdrawal calldata[] calldata"
                                }
                              },
                              "id": 59968,
                              "indexExpression": {
                                "id": 59967,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59948,
                                "src": "3927:1:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3908:21:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                              }
                            },
                            "id": 59969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3930:23:80",
                            "memberName": "finishStartedWithdrawal",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62854,
                            "src": "3908:45:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$_t_struct$_Storage_$62359_storage_ptr_$returns$__$attached_to$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$",
                              "typeString": "function (struct Withdraw.QueuedWithdrawal calldata,struct DelegationSupervisorLib.Storage storage pointer)"
                            }
                          },
                          "id": 59971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3908:51:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59972,
                        "nodeType": "ExpressionStatement",
                        "src": "3908:51:80"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 59954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 59951,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59948,
                      "src": "3790:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 59952,
                        "name": "startedWithdrawals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59940,
                        "src": "3794:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal calldata[] calldata"
                        }
                      },
                      "id": 59953,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3813:6:80",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3794:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3790:29:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59974,
                  "initializationExpression": {
                    "assignments": [
                      59948
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 59948,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3783:1:80",
                        "nodeType": "VariableDeclaration",
                        "scope": 59974,
                        "src": "3775:9:80",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 59947,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3775:7:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 59950,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 59949,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3787:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3775:13:80"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 59956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "3821:3:80",
                      "subExpression": {
                        "id": 59955,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59948,
                        "src": "3823:1:80",
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
                    "id": 59957,
                    "nodeType": "ExpressionStatement",
                    "src": "3821:3:80"
                  },
                  "nodeType": "ForStatement",
                  "src": "3770:200:80"
                }
              ]
            },
            "baseFunctions": [
              63074
            ],
            "functionSelector": "86e9a1f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 59943,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59942,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "3721:12:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58535,
                  "src": "3721:12:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "3721:12:80"
              },
              {
                "id": 59945,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59944,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "3742:13:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "3742:13:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "3742:13:80"
              }
            ],
            "name": "finishWithdraw",
            "nameLocation": "3624:14:80",
            "parameters": {
              "id": 59941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59940,
                  "mutability": "mutable",
                  "name": "startedWithdrawals",
                  "nameLocation": "3676:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59976,
                  "src": "3639:55:80",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59938,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 59937,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "3639:8:80",
                          "3648:16:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "3639:25:80"
                      },
                      "referencedDeclaration": 62732,
                      "src": "3639:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 59939,
                    "nodeType": "ArrayTypeName",
                    "src": "3639:27:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3638:57:80"
            },
            "returnParameters": {
              "id": 59946,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3760:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 59994,
            "nodeType": "FunctionDefinition",
            "src": "3982:142:80",
            "nodes": [],
            "body": {
              "id": 59993,
              "nodeType": "Block",
              "src": "4061:63:80",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 59985,
                    "name": "toPause",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59978,
                    "src": "4075:7:80",
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
                        "id": 59989,
                        "name": "_unpause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47098,
                        "src": "4107:8:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 59990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4107:10:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 59991,
                    "nodeType": "ExpressionStatement",
                    "src": "4107:10:80"
                  },
                  "id": 59992,
                  "nodeType": "IfStatement",
                  "src": "4071:46:80",
                  "trueBody": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 59986,
                        "name": "_pause",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47074,
                        "src": "4084:6:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 59987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4084:8:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 59988,
                    "nodeType": "ExpressionStatement",
                    "src": "4084:8:80"
                  }
                }
              ]
            },
            "baseFunctions": [
              63079
            ],
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 59981,
                      "name": "Constants",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62945,
                      "src": "4037:9:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Constants_$62945_$",
                        "typeString": "type(library Constants)"
                      }
                    },
                    "id": 59982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "4047:12:80",
                    "memberName": "MANAGER_ROLE",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62944,
                    "src": "4037:22:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 59983,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59980,
                  "name": "onlyRolesOrOwner",
                  "nameLocations": [
                    "4020:16:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54369,
                  "src": "4020:16:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "4020:40:80"
              }
            ],
            "name": "pause",
            "nameLocation": "3991:5:80",
            "parameters": {
              "id": 59979,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59978,
                  "mutability": "mutable",
                  "name": "toPause",
                  "nameLocation": "4002:7:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 59994,
                  "src": "3997:12:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59977,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3997:4:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3996:14:80"
            },
            "returnParameters": {
              "id": 59984,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4061:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60012,
            "nodeType": "FunctionDefinition",
            "src": "4178:176:80",
            "nodes": [],
            "body": {
              "id": 60011,
              "nodeType": "Block",
              "src": "4246:108:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60004
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60004,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "4296:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60011,
                      "src": "4256:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 60003,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 60002,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "4256:23:80",
                            "4280:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "4256:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "4256:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60007,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60005,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "4303:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 60006,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4303:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4256:54:80"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 60008,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60004,
                      "src": "4327:4:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                      }
                    },
                    "id": 60009,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4332:15:80",
                    "memberName": "withdrawalDelay",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62355,
                    "src": "4327:20:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59999,
                  "id": 60010,
                  "nodeType": "Return",
                  "src": "4320:27:80"
                }
              ]
            },
            "baseFunctions": [
              63044
            ],
            "functionSelector": "a7ab6961",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawalDelay",
            "nameLocation": "4187:15:80",
            "overrides": {
              "id": 59996,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4219:8:80"
            },
            "parameters": {
              "id": 59995,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4202:2:80"
            },
            "returnParameters": {
              "id": 59999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59998,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60012,
                  "src": "4237:7:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4237:7:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4236:9:80"
            },
            "scope": 60248,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60038,
            "nodeType": "FunctionDefinition",
            "src": "4360:292:80",
            "nodes": [],
            "body": {
              "id": 60037,
              "nodeType": "Block",
              "src": "4513:139:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60025,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "4563:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60037,
                      "src": "4523:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 60024,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 60023,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "4523:23:80",
                            "4547:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "4523:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "4523:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60028,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60026,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "4570:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 60027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4570:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4523:54:80"
                },
                {
                  "expression": {
                    "id": 60035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60029,
                      "name": "queuedWithdrawals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60019,
                      "src": "4587:17:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "baseExpression": {
                          "expression": {
                            "id": 60030,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60025,
                            "src": "4607:4:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                              "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 60031,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4612:7:80",
                          "memberName": "stakers",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62353,
                          "src": "4607:12:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakerState_$62430_storage_$",
                            "typeString": "mapping(address => struct Staker.StakerState storage ref)"
                          }
                        },
                        "id": 60033,
                        "indexExpression": {
                          "id": 60032,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60014,
                          "src": "4620:6:80",
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
                        "src": "4607:20:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakerState_$62430_storage",
                          "typeString": "struct Staker.StakerState storage ref"
                        }
                      },
                      "id": 60034,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4628:17:80",
                      "memberName": "queuedWithdrawals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62429,
                      "src": "4607:38:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage",
                        "typeString": "struct Withdraw.QueuedWithdrawal storage ref[] storage ref"
                      }
                    },
                    "src": "4587:58:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                    }
                  },
                  "id": 60036,
                  "nodeType": "ExpressionStatement",
                  "src": "4587:58:80"
                }
              ]
            },
            "baseFunctions": [
              63088
            ],
            "functionSelector": "8c475559",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchQueuedWithdrawals",
            "nameLocation": "4369:22:80",
            "parameters": {
              "id": 60015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60014,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "4400:6:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60038,
                  "src": "4392:14:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4392:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4391:16:80"
            },
            "returnParameters": {
              "id": 60020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60019,
                  "mutability": "mutable",
                  "name": "queuedWithdrawals",
                  "nameLocation": "4490:17:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60038,
                  "src": "4455:52:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60017,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60016,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "4455:8:80",
                          "4464:16:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "4455:25:80"
                      },
                      "referencedDeclaration": 62732,
                      "src": "4455:25:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 60018,
                    "nodeType": "ArrayTypeName",
                    "src": "4455:27:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4454:54:80"
            },
            "scope": 60248,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60062,
            "nodeType": "FunctionDefinition",
            "src": "4658:252:80",
            "nodes": [],
            "body": {
              "id": 60061,
              "nodeType": "Block",
              "src": "4761:149:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60050
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60050,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "4811:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60061,
                      "src": "4771:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 60049,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 60048,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "4771:23:80",
                            "4795:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "4771:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "4771:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60053,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60051,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "4818:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 60052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4818:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4771:54:80"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 60054,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60050,
                        "src": "4842:4:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                        }
                      },
                      "id": 60055,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4847:18:80",
                      "memberName": "pendingWithdrawals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62342,
                      "src": "4842:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 60059,
                    "indexExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 60056,
                          "name": "withdrawal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60041,
                          "src": "4866:10:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                          }
                        },
                        "id": 60057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4877:23:80",
                        "memberName": "calculateWithdrawalRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62870,
                        "src": "4866:34:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$returns$_t_bytes32_$attached_to$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$",
                          "typeString": "function (struct Withdraw.QueuedWithdrawal memory) pure returns (bytes32)"
                        }
                      },
                      "id": 60058,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4866:36:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4842:61:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 60045,
                  "id": 60060,
                  "nodeType": "Return",
                  "src": "4835:68:80"
                }
              ]
            },
            "baseFunctions": [
              63096
            ],
            "functionSelector": "4618c974",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isWithdrawPending",
            "nameLocation": "4667:17:80",
            "parameters": {
              "id": 60042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60041,
                  "mutability": "mutable",
                  "name": "withdrawal",
                  "nameLocation": "4720:10:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60062,
                  "src": "4685:45:80",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal"
                  },
                  "typeName": {
                    "id": 60040,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60039,
                      "name": "Withdraw.QueuedWithdrawal",
                      "nameLocations": [
                        "4685:8:80",
                        "4694:16:80"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62732,
                      "src": "4685:25:80"
                    },
                    "referencedDeclaration": 62732,
                    "src": "4685:25:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4684:47:80"
            },
            "returnParameters": {
              "id": 60045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60044,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60062,
                  "src": "4755:4:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 60043,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4755:4:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4754:6:80"
            },
            "scope": 60248,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60087,
            "nodeType": "ModifierDefinition",
            "src": "4958:223:80",
            "nodes": [],
            "body": {
              "id": 60086,
              "nodeType": "Block",
              "src": "4989:192:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60068
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60068,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "5039:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60086,
                      "src": "4999:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 60067,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 60066,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "4999:23:80",
                            "5023:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "4999:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "4999:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60071,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60069,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "5046:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 60070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5046:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4999:54:80"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 60079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 60072,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5067:3:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 60073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5071:6:80",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "5067:10:80",
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
                            "id": 60076,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60068,
                            "src": "5089:4:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                              "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 60077,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5094:15:80",
                          "memberName": "vaultSupervisor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62358,
                          "src": "5089:20:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                            "typeString": "contract IVaultSupervisor"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                            "typeString": "contract IVaultSupervisor"
                          }
                        ],
                        "id": 60075,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5081:7:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 60074,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5081:7:80",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 60078,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5081:29:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5067:43:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60084,
                  "nodeType": "IfStatement",
                  "src": "5063:101:80",
                  "trueBody": {
                    "id": 60083,
                    "nodeType": "Block",
                    "src": "5112:52:80",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 60080,
                            "name": "NotVaultSupervisor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62955,
                            "src": "5133:18:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 60081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5133:20:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60082,
                        "nodeType": "RevertStatement",
                        "src": "5126:27:80"
                      }
                    ]
                  }
                },
                {
                  "id": 60085,
                  "nodeType": "PlaceholderStatement",
                  "src": "5173:1:80"
                }
              ]
            },
            "name": "onlyVaultSupervisor",
            "nameLocation": "4967:19:80",
            "parameters": {
              "id": 60063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4986:2:80"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60095,
            "nodeType": "FunctionDefinition",
            "src": "5239:153:80",
            "nodes": [],
            "body": {
              "id": 60094,
              "nodeType": "Block",
              "src": "5321:71:80",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5340:46:80",
                    "nodeType": "YulBlock",
                    "src": "5340:46:80",
                    "statements": [
                      {
                        "nativeSrc": "5354:22:80",
                        "nodeType": "YulAssignment",
                        "src": "5354:22:80",
                        "value": {
                          "name": "STORAGE_SLOT",
                          "nativeSrc": "5364:12:80",
                          "nodeType": "YulIdentifier",
                          "src": "5364:12:80"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "5354:6:80",
                            "nodeType": "YulIdentifier",
                            "src": "5354:6:80"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60091,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "5354:6:80",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 59751,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5364:12:80",
                      "valueSize": 1
                    }
                  ],
                  "id": 60093,
                  "nodeType": "InlineAssembly",
                  "src": "5331:55:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_self",
            "nameLocation": "5248:5:80",
            "parameters": {
              "id": 60088,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5253:2:80"
            },
            "returnParameters": {
              "id": 60092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60091,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "5318:1:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60095,
                  "src": "5278:41:80",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                    "typeString": "struct DelegationSupervisorLib.Storage"
                  },
                  "typeName": {
                    "id": 60090,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60089,
                      "name": "DelegationSupervisorLib.Storage",
                      "nameLocations": [
                        "5278:23:80",
                        "5302:7:80"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62359,
                      "src": "5278:31:80"
                    },
                    "referencedDeclaration": 62359,
                    "src": "5278:31:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5277:43:80"
            },
            "scope": 60248,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 60238,
            "nodeType": "FunctionDefinition",
            "src": "5524:1316:80",
            "nodes": [],
            "body": {
              "id": 60237,
              "nodeType": "Block",
              "src": "5800:1040:80",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60121
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60121,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "5850:4:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60237,
                      "src": "5810:44:80",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                        "typeString": "struct DelegationSupervisorLib.Storage"
                      },
                      "typeName": {
                        "id": 60120,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 60119,
                          "name": "DelegationSupervisorLib.Storage",
                          "nameLocations": [
                            "5810:23:80",
                            "5834:7:80"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62359,
                          "src": "5810:31:80"
                        },
                        "referencedDeclaration": 62359,
                        "src": "5810:31:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                          "typeString": "struct DelegationSupervisorLib.Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60124,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 60122,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60095,
                      "src": "5857:5:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_Storage_$62359_storage_ptr_$",
                        "typeString": "function () pure returns (struct DelegationSupervisorLib.Storage storage pointer)"
                      }
                    },
                    "id": 60123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5857:7:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5810:54:80"
                },
                {
                  "body": {
                    "id": 60174,
                    "nodeType": "Block",
                    "src": "5918:309:80",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 60136,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60109,
                              "src": "5936:6:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 60138,
                            "indexExpression": {
                              "id": 60137,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60126,
                              "src": "5943:1:80",
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
                            "src": "5936:9:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 60139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5949:1:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5936:14:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 60144,
                        "nodeType": "IfStatement",
                        "src": "5932:39:80",
                        "trueBody": {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 60141,
                              "name": "ZeroShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62965,
                              "src": "5959:10:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 60142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5959:12:80",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 60143,
                          "nodeType": "RevertStatement",
                          "src": "5952:19:80"
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 60150,
                              "name": "staker",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60098,
                              "src": "6090:6:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 60151,
                                "name": "vaults",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60106,
                                "src": "6098:6:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                  "typeString": "contract IVault[] memory"
                                }
                              },
                              "id": 60153,
                              "indexExpression": {
                                "id": 60152,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60126,
                                "src": "6105:1:80",
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
                              "src": "6098:9:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 60154,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60109,
                                "src": "6109:6:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 60156,
                              "indexExpression": {
                                "id": 60155,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60126,
                                "src": "6116:1:80",
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
                              "src": "6109:9:80",
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
                            "expression": {
                              "expression": {
                                "id": 60145,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60121,
                                "src": "6056:4:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                  "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                                }
                              },
                              "id": 60148,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6061:15:80",
                              "memberName": "vaultSupervisor",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62358,
                              "src": "6056:20:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                                "typeString": "contract IVaultSupervisor"
                              }
                            },
                            "id": 60149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6077:12:80",
                            "memberName": "removeShares",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63335,
                            "src": "6056:33:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_contract$_IVault_$63271_$_t_uint256_$returns$__$",
                              "typeString": "function (address,contract IVault,uint256) external"
                            }
                          },
                          "id": 60157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6056:63:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60158,
                        "nodeType": "ExpressionStatement",
                        "src": "6056:63:80"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 60162,
                                    "name": "vaults",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60106,
                                    "src": "6164:6:80",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                      "typeString": "contract IVault[] memory"
                                    }
                                  },
                                  "id": 60164,
                                  "indexExpression": {
                                    "id": 60163,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60126,
                                    "src": "6171:1:80",
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
                                  "src": "6164:9:80",
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
                                "id": 60161,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6156:7:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 60160,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6156:7:80",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 60165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6156:18:80",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 60166,
                              "name": "staker",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60098,
                              "src": "6176:6:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 60167,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60100,
                              "src": "6184:8:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 60168,
                              "name": "withdrawer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60102,
                              "src": "6194:10:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 60169,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60109,
                                "src": "6206:6:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 60171,
                              "indexExpression": {
                                "id": 60170,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60126,
                                "src": "6213:1:80",
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
                              "src": "6206:9:80",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 60159,
                            "name": "StartedWithdrawal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63017,
                            "src": "6138:17:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,address,address,uint256)"
                            }
                          },
                          "id": 60172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6138:78:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60173,
                        "nodeType": "EmitStatement",
                        "src": "6133:83:80"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60129,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60126,
                      "src": "5894:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 60130,
                        "name": "vaults",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60106,
                        "src": "5898:6:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      },
                      "id": 60131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5905:6:80",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5898:13:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5894:17:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60175,
                  "initializationExpression": {
                    "assignments": [
                      60126
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 60126,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "5887:1:80",
                        "nodeType": "VariableDeclaration",
                        "scope": 60175,
                        "src": "5879:9:80",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 60125,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5879:7:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 60128,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 60127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5891:1:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5879:13:80"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 60134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5913:3:80",
                      "subExpression": {
                        "id": 60133,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60126,
                        "src": "5913:1:80",
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
                    "id": 60135,
                    "nodeType": "ExpressionStatement",
                    "src": "5913:3:80"
                  },
                  "nodeType": "ForStatement",
                  "src": "5874:353:80"
                },
                {
                  "assignments": [
                    60177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60177,
                      "mutability": "mutable",
                      "name": "nonce",
                      "nameLocation": "6244:5:80",
                      "nodeType": "VariableDeclaration",
                      "scope": 60237,
                      "src": "6236:13:80",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60176,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6236:7:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60183,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "expression": {
                          "id": 60178,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60121,
                          "src": "6252:4:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 60179,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6257:7:80",
                        "memberName": "stakers",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62353,
                        "src": "6252:12:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakerState_$62430_storage_$",
                          "typeString": "mapping(address => struct Staker.StakerState storage ref)"
                        }
                      },
                      "id": 60181,
                      "indexExpression": {
                        "id": 60180,
                        "name": "staker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60098,
                        "src": "6265:6:80",
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
                      "src": "6252:20:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakerState_$62430_storage",
                        "typeString": "struct Staker.StakerState storage ref"
                      }
                    },
                    "id": 60182,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6273:20:80",
                    "memberName": "totalWithdrawsQueued",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 62425,
                    "src": "6252:41:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6236:57:80"
                },
                {
                  "expression": {
                    "id": 60190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "6303:43:80",
                    "subExpression": {
                      "expression": {
                        "baseExpression": {
                          "expression": {
                            "id": 60184,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60121,
                            "src": "6303:4:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                              "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                            }
                          },
                          "id": 60187,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6308:7:80",
                          "memberName": "stakers",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62353,
                          "src": "6303:12:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakerState_$62430_storage_$",
                            "typeString": "mapping(address => struct Staker.StakerState storage ref)"
                          }
                        },
                        "id": 60188,
                        "indexExpression": {
                          "id": 60186,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60098,
                          "src": "6316:6:80",
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
                        "src": "6303:20:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakerState_$62430_storage",
                          "typeString": "struct Staker.StakerState storage ref"
                        }
                      },
                      "id": 60189,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6324:20:80",
                      "memberName": "totalWithdrawsQueued",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62425,
                      "src": "6303:41:80",
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
                  "id": 60191,
                  "nodeType": "ExpressionStatement",
                  "src": "6303:43:80"
                },
                {
                  "expression": {
                    "id": 60210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60192,
                      "name": "withdrawal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60115,
                      "src": "6356:10:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 60195,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60098,
                          "src": "6417:6:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 60196,
                          "name": "operator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60100,
                          "src": "6450:8:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 60197,
                          "name": "nonce",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60177,
                          "src": "6479:5:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 60200,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "6513:5:80",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 60201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6519:9:80",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "6513:15:80",
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
                            "id": 60199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6505:7:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 60198,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6505:7:80",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 60202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6505:24:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 60205,
                              "name": "vaults",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60106,
                              "src": "6586:6:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                "typeString": "contract IVault[] memory"
                              }
                            },
                            {
                              "id": 60206,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60109,
                              "src": "6602:6:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 60207,
                              "name": "withdrawer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60102,
                              "src": "6622:10:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                "typeString": "contract IVault[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "id": 60203,
                              "name": "Withdraw",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62913,
                              "src": "6552:8:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Withdraw_$62913_$",
                                "typeString": "type(library Withdraw)"
                              }
                            },
                            "id": 60204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6561:15:80",
                            "memberName": "WithdrawRequest",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62742,
                            "src": "6552:24:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_WithdrawRequest_$62742_storage_ptr_$",
                              "typeString": "type(struct Withdraw.WithdrawRequest storage pointer)"
                            }
                          },
                          "id": 60208,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "6578:6:80",
                            "6594:6:80",
                            "6610:10:80"
                          ],
                          "names": [
                            "vaults",
                            "shares",
                            "withdrawer"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "6552:82:80",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawRequest_$62742_memory_ptr",
                            "typeString": "struct Withdraw.WithdrawRequest memory"
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
                          },
                          {
                            "typeIdentifier": "t_struct$_WithdrawRequest_$62742_memory_ptr",
                            "typeString": "struct Withdraw.WithdrawRequest memory"
                          }
                        ],
                        "expression": {
                          "id": 60193,
                          "name": "Withdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62913,
                          "src": "6369:8:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Withdraw_$62913_$",
                            "typeString": "type(library Withdraw)"
                          }
                        },
                        "id": 60194,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6378:16:80",
                        "memberName": "QueuedWithdrawal",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62732,
                        "src": "6369:25:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_QueuedWithdrawal_$62732_storage_ptr_$",
                          "typeString": "type(struct Withdraw.QueuedWithdrawal storage pointer)"
                        }
                      },
                      "id": 60209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "6409:6:80",
                        "6437:11:80",
                        "6472:5:80",
                        "6498:5:80",
                        "6543:7:80"
                      ],
                      "names": [
                        "staker",
                        "delegatedTo",
                        "nonce",
                        "start",
                        "request"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "6369:276:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory"
                      }
                    },
                    "src": "6356:289:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal memory"
                    }
                  },
                  "id": 60211,
                  "nodeType": "ExpressionStatement",
                  "src": "6356:289:80"
                },
                {
                  "expression": {
                    "id": 60216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60212,
                      "name": "withdrawalRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60112,
                      "src": "6655:14:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 60213,
                          "name": "withdrawal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60115,
                          "src": "6672:10:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal memory"
                          }
                        },
                        "id": 60214,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6683:23:80",
                        "memberName": "calculateWithdrawalRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62870,
                        "src": "6672:34:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$returns$_t_bytes32_$attached_to$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$",
                          "typeString": "function (struct Withdraw.QueuedWithdrawal memory) pure returns (bytes32)"
                        }
                      },
                      "id": 60215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6672:36:80",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6655:53:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 60217,
                  "nodeType": "ExpressionStatement",
                  "src": "6655:53:80"
                },
                {
                  "expression": {
                    "id": 60224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 60218,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60121,
                          "src": "6718:4:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 60221,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6723:18:80",
                        "memberName": "pendingWithdrawals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62342,
                        "src": "6718:23:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 60222,
                      "indexExpression": {
                        "id": 60220,
                        "name": "withdrawalRoot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60112,
                        "src": "6742:14:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6718:39:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 60223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6760:4:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6718:46:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60225,
                  "nodeType": "ExpressionStatement",
                  "src": "6718:46:80"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60234,
                        "name": "withdrawal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60115,
                        "src": "6822:10:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal memory"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "expression": {
                              "id": 60226,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60121,
                              "src": "6774:4:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                              }
                            },
                            "id": 60230,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6779:7:80",
                            "memberName": "stakers",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62353,
                            "src": "6774:12:80",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakerState_$62430_storage_$",
                              "typeString": "mapping(address => struct Staker.StakerState storage ref)"
                            }
                          },
                          "id": 60231,
                          "indexExpression": {
                            "expression": {
                              "id": 60228,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "6787:3:80",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 60229,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6791:6:80",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "6787:10:80",
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
                          "src": "6774:24:80",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StakerState_$62430_storage",
                            "typeString": "struct Staker.StakerState storage ref"
                          }
                        },
                        "id": 60232,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6799:17:80",
                        "memberName": "queuedWithdrawals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62429,
                        "src": "6774:42:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage",
                          "typeString": "struct Withdraw.QueuedWithdrawal storage ref[] storage ref"
                        }
                      },
                      "id": 60233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6817:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "6774:47:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr_$_t_struct$_QueuedWithdrawal_$62732_storage_$returns$__$attached_to$_t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Withdraw.QueuedWithdrawal storage ref[] storage pointer,struct Withdraw.QueuedWithdrawal storage ref)"
                      }
                    },
                    "id": 60235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6774:59:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60236,
                  "nodeType": "ExpressionStatement",
                  "src": "6774:59:80"
                }
              ]
            },
            "documentation": {
              "id": 60096,
              "nodeType": "StructuredDocumentation",
              "src": "5398:121:80",
              "text": " @notice\n     @param staker The staker who is withdrawing. NOTE assumes this is validated already"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeSharesAndStartWithdrawal",
            "nameLocation": "5533:30:80",
            "parameters": {
              "id": 60110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60098,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "5581:6:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5573:14:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5573:7:80",
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
                  "id": 60100,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5605:8:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5597:16:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5597:7:80",
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
                  "id": 60102,
                  "mutability": "mutable",
                  "name": "withdrawer",
                  "nameLocation": "5631:10:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5623:18:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5623:7:80",
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
                  "id": 60106,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "5667:6:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5651:22:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60104,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60103,
                        "name": "IVault",
                        "nameLocations": [
                          "5651:6:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "5651:6:80"
                      },
                      "referencedDeclaration": 63271,
                      "src": "5651:6:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 60105,
                    "nodeType": "ArrayTypeName",
                    "src": "5651:8:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60109,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5700:6:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5683:23:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60107,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5683:7:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60108,
                    "nodeType": "ArrayTypeName",
                    "src": "5683:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5563:149:80"
            },
            "returnParameters": {
              "id": 60116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60112,
                  "mutability": "mutable",
                  "name": "withdrawalRoot",
                  "nameLocation": "5739:14:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5731:22:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60111,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5731:7:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60115,
                  "mutability": "mutable",
                  "name": "withdrawal",
                  "nameLocation": "5788:10:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 60238,
                  "src": "5755:43:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal"
                  },
                  "typeName": {
                    "id": 60114,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60113,
                      "name": "Withdraw.QueuedWithdrawal",
                      "nameLocations": [
                        "5755:8:80",
                        "5764:16:80"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62732,
                      "src": "5755:25:80"
                    },
                    "referencedDeclaration": 62732,
                    "src": "5755:25:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5730:69:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60247,
            "nodeType": "FunctionDefinition",
            "src": "6846:66:80",
            "nodes": [],
            "body": {
              "id": 60246,
              "nodeType": "Block",
              "src": "6910:2:80",
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
                "id": 60244,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60243,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6900:9:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "6900:9:80"
                },
                "nodeType": "ModifierInvocation",
                "src": "6900:9:80"
              }
            ],
            "name": "_authorizeUpgrade",
            "nameLocation": "6855:17:80",
            "overrides": {
              "id": 60242,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6891:8:80"
            },
            "parameters": {
              "id": 60241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60240,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60247,
                  "src": "6873:7:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6873:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6872:9:80"
            },
            "returnParameters": {
              "id": 60245,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6910:0:80"
            },
            "scope": 60248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 59718,
              "name": "IDelegationSupervisor",
              "nameLocations": [
                "1095:21:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63097,
              "src": "1095:21:80"
            },
            "id": 59719,
            "nodeType": "InheritanceSpecifier",
            "src": "1095:21:80"
          },
          {
            "baseName": {
              "id": 59720,
              "name": "Initializable",
              "nameLocations": [
                "1122:13:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "1122:13:80"
            },
            "id": 59721,
            "nodeType": "InheritanceSpecifier",
            "src": "1122:13:80"
          },
          {
            "baseName": {
              "id": 59722,
              "name": "OwnableRoles",
              "nameLocations": [
                "1141:12:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 55650,
              "src": "1141:12:80"
            },
            "id": 59723,
            "nodeType": "InheritanceSpecifier",
            "src": "1141:12:80"
          },
          {
            "baseName": {
              "id": 59724,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "1159:15:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58542,
              "src": "1159:15:80"
            },
            "id": 59725,
            "nodeType": "InheritanceSpecifier",
            "src": "1159:15:80"
          },
          {
            "baseName": {
              "id": 59726,
              "name": "PausableUpgradeable",
              "nameLocations": [
                "1180:19:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47099,
              "src": "1180:19:80"
            },
            "id": 59727,
            "nodeType": "InheritanceSpecifier",
            "src": "1180:19:80"
          },
          {
            "baseName": {
              "id": 59728,
              "name": "UUPSUpgradeable",
              "nameLocations": [
                "1205:15:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58965,
              "src": "1205:15:80"
            },
            "id": 59729,
            "nodeType": "InheritanceSpecifier",
            "src": "1205:15:80"
          },
          {
            "baseName": {
              "id": 59730,
              "name": "EIP712Upgradeable",
              "nameLocations": [
                "1226:17:80"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47443,
              "src": "1226:17:80"
            },
            "id": 59731,
            "nodeType": "InheritanceSpecifier",
            "src": "1226:17:80"
          }
        ],
        "canonicalName": "DelegationSupervisor",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60248,
          47443,
          49224,
          58965,
          47099,
          46923,
          58542,
          55650,
          46877,
          54123,
          63097
        ],
        "name": "DelegationSupervisor",
        "nameLocation": "1067:20:80",
        "scope": 60249,
        "usedErrors": [
          46640,
          46643,
          46962,
          46965,
          53935,
          53938,
          53941,
          53944,
          58524,
          58882,
          58885,
          62949,
          62951,
          62957,
          62959,
          62961,
          62963,
          62965,
          62989,
          62991
        ],
        "usedEvents": [
          46648,
          46954,
          46959,
          49204,
          53951,
          53956,
          53961,
          54137,
          58903,
          63017,
          63031
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 80
} as const;