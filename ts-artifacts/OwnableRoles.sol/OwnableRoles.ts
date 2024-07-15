export const OwnableRoles = {
  "abi": [
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
      "type": "error",
      "name": "AlreadyInitialized",
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
      "name": "Unauthorized",
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
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "grantRoles(address,uint256)": "1c10893f",
    "hasAllRoles(address,uint256)": "1cd64df4",
    "hasAnyRole(address,uint256)": "514e62fc",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "renounceOwnership()": "715018a6",
    "renounceRoles(uint256)": "183a4f6e",
    "requestOwnershipHandover()": "25692962",
    "revokeRoles(address,uint256)": "4a4ee7b1",
    "rolesOf(address)": "2de94807",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"RolesUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"grantRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAllRoles\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"hasAnyRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"renounceRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"name\":\"revokeRoles\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rolesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"roles\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/auth/Ownable.sol)\",\"details\":\"While the ownable portion follows [EIP-173](https://eips.ethereum.org/EIPS/eip-173) for compatibility, the nomenclature for the 2-step ownership handover and roles may be unique to this codebase.\",\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}]},\"events\":{\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"},\"RolesUpdated(address,uint256)\":{\"details\":\"The `user`'s roles is updated to `roles`. Each bit of `roles` represents whether the role is set.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"grantRoles(address,uint256)\":{\"details\":\"Allows the owner to grant `user` `roles`. If the `user` already has a role, then it will be an no-op for the role.\"},\"hasAllRoles(address,uint256)\":{\"details\":\"Returns whether `user` has all of `roles`.\"},\"hasAnyRole(address,uint256)\":{\"details\":\"Returns whether `user` has any of `roles`.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"renounceRoles(uint256)\":{\"details\":\"Allow the caller to remove their own roles. If the caller does not have a role, then it will be an no-op for the role.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"revokeRoles(address,uint256)\":{\"details\":\"Allows the owner to remove `user` `roles`. If the `user` does not have a role, then it will be an no-op for the role.\"},\"rolesOf(address)\":{\"details\":\"Returns the roles of `user`.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"}},\"stateVariables\":{\"_ROLES_UPDATED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"RolesUpdated(address,uint256)\\\"))`.\"},\"_ROLE_SLOT_SEED\":{\"details\":\"The role slot of `user` is given by: ```     mstore(0x00, or(shl(96, user), _ROLE_SLOT_SEED))     let roleSlot := keccak256(0x00, 0x20) ``` This automatically ignores the upper bits of the `user` in case they are not clean, as well as keep the `keccak256` under 32-bytes. Note: This is equivalent to `uint32(bytes4(keccak256(\\\"_OWNER_SLOT_NOT\\\")))`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Simple single owner and multiroles authorization mixin.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/auth/OwnableRoles.sol\":\"OwnableRoles\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]}},\"version\":1}",
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
          "name": "Unauthorized"
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
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "transferOwnership"
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
          "owner()": {
            "details": "Returns the owner of the contract."
          },
          "ownershipHandoverExpiresAt(address)": {
            "details": "Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
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
        "node_modules/solady/src/auth/OwnableRoles.sol": "OwnableRoles"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/auth/OwnableRoles.sol",
    "id": 55651,
    "exportedSymbols": {
      "Ownable": [
        54123
      ],
      "OwnableRoles": [
        55650
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:25657:70",
    "nodes": [
      {
        "id": 54125,
        "nodeType": "PragmaDirective",
        "src": "32:23:70",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 54127,
        "nodeType": "ImportDirective",
        "src": "57:38:70",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
        "file": "./Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55651,
        "sourceUnit": 54124,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54126,
              "name": "Ownable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 54123,
              "src": "65:7:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 55650,
        "nodeType": "ContractDefinition",
        "src": "467:25221:70",
        "nodes": [
          {
            "id": 54137,
            "nodeType": "EventDefinition",
            "src": "917:64:70",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 54131,
              "nodeType": "StructuredDocumentation",
              "src": "798:114:70",
              "text": "@dev The `user`'s roles is updated to `roles`.\n Each bit of `roles` represents whether the role is set."
            },
            "eventSelector": "715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26",
            "name": "RolesUpdated",
            "nameLocation": "923:12:70",
            "parameters": {
              "id": 54136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54133,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "952:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54137,
                  "src": "936:20:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "936:7:70",
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
                  "id": 54135,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "974:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54137,
                  "src": "958:21:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "958:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "935:45:70"
            }
          },
          {
            "id": 54141,
            "nodeType": "VariableDeclaration",
            "src": "1053:132:70",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54138,
              "nodeType": "StructuredDocumentation",
              "src": "987:61:70",
              "text": "@dev `keccak256(bytes(\"RolesUpdated(address,uint256)\"))`."
            },
            "mutability": "constant",
            "name": "_ROLES_UPDATED_EVENT_SIGNATURE",
            "nameLocation": "1078:30:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54139,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1053:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307837313561643563653631666339353935633762343135323839643539636632303366323361393466613036663034616637653438396130613736653166653236",
              "id": 54140,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1119:66:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_51271843761779235751881398726824997251846621987341107132597768407806770282022_by_1",
                "typeString": "int_const 5127...(69 digits omitted)...2022"
              },
              "value": "0x715ad5ce61fc9595c7b415289d59cf203f23a94fa06f04af7e489a0a76e1fe26"
            },
            "visibility": "private"
          },
          {
            "id": 54145,
            "nodeType": "VariableDeclaration",
            "src": "1900:53:70",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54142,
              "nodeType": "StructuredDocumentation",
              "src": "1475:420:70",
              "text": "@dev The role slot of `user` is given by:\n ```\n     mstore(0x00, or(shl(96, user), _ROLE_SLOT_SEED))\n     let roleSlot := keccak256(0x00, 0x20)\n ```\n This automatically ignores the upper bits of the `user` in case\n they are not clean, as well as keep the `keccak256` under 32-bytes.\n Note: This is equivalent to `uint32(bytes4(keccak256(\"_OWNER_SLOT_NOT\")))`."
            },
            "mutability": "constant",
            "name": "_ROLE_SLOT_SEED",
            "nameLocation": "1925:15:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54143,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1900:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783862373863366438",
              "id": 54144,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1943:10:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2339948248_by_1",
                "typeString": "int_const 2339948248"
              },
              "value": "0x8b78c6d8"
            },
            "visibility": "private"
          },
          {
            "id": 54155,
            "nodeType": "FunctionDefinition",
            "src": "2314:432:70",
            "nodes": [],
            "body": {
              "id": 54154,
              "nodeType": "Block",
              "src": "2379:367:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2441:299:70",
                    "nodeType": "YulBlock",
                    "src": "2441:299:70",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2462:4:70",
                              "nodeType": "YulLiteral",
                              "src": "2462:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ROLE_SLOT_SEED",
                              "nativeSrc": "2468:15:70",
                              "nodeType": "YulIdentifier",
                              "src": "2468:15:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2455:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "2455:6:70"
                          },
                          "nativeSrc": "2455:29:70",
                          "nodeType": "YulFunctionCall",
                          "src": "2455:29:70"
                        },
                        "nativeSrc": "2455:29:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "2455:29:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2504:4:70",
                              "nodeType": "YulLiteral",
                              "src": "2504:4:70",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "user",
                              "nativeSrc": "2510:4:70",
                              "nodeType": "YulIdentifier",
                              "src": "2510:4:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2497:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "2497:6:70"
                          },
                          "nativeSrc": "2497:18:70",
                          "nodeType": "YulFunctionCall",
                          "src": "2497:18:70"
                        },
                        "nativeSrc": "2497:18:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "2497:18:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2581:4:70",
                                  "nodeType": "YulLiteral",
                                  "src": "2581:4:70",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2587:4:70",
                                  "nodeType": "YulLiteral",
                                  "src": "2587:4:70",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "2571:9:70",
                                "nodeType": "YulIdentifier",
                                "src": "2571:9:70"
                              },
                              "nativeSrc": "2571:21:70",
                              "nodeType": "YulFunctionCall",
                              "src": "2571:21:70"
                            },
                            {
                              "name": "roles",
                              "nativeSrc": "2594:5:70",
                              "nodeType": "YulIdentifier",
                              "src": "2594:5:70"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "2564:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "2564:6:70"
                          },
                          "nativeSrc": "2564:36:70",
                          "nodeType": "YulFunctionCall",
                          "src": "2564:36:70"
                        },
                        "nativeSrc": "2564:36:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "2564:36:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2664:1:70",
                              "nodeType": "YulLiteral",
                              "src": "2664:1:70",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2667:1:70",
                              "nodeType": "YulLiteral",
                              "src": "2667:1:70",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_ROLES_UPDATED_EVENT_SIGNATURE",
                              "nativeSrc": "2670:30:70",
                              "nodeType": "YulIdentifier",
                              "src": "2670:30:70"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2706:2:70",
                                  "nodeType": "YulLiteral",
                                  "src": "2706:2:70",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2716:4:70",
                                      "nodeType": "YulLiteral",
                                      "src": "2716:4:70",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "2710:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "2710:5:70"
                                  },
                                  "nativeSrc": "2710:11:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2710:11:70"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "2702:3:70",
                                "nodeType": "YulIdentifier",
                                "src": "2702:3:70"
                              },
                              "nativeSrc": "2702:20:70",
                              "nodeType": "YulFunctionCall",
                              "src": "2702:20:70"
                            },
                            {
                              "name": "roles",
                              "nativeSrc": "2724:5:70",
                              "nodeType": "YulIdentifier",
                              "src": "2724:5:70"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "2659:4:70",
                            "nodeType": "YulIdentifier",
                            "src": "2659:4:70"
                          },
                          "nativeSrc": "2659:71:70",
                          "nodeType": "YulFunctionCall",
                          "src": "2659:71:70"
                        },
                        "nativeSrc": "2659:71:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "2659:71:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54141,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2670:30:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2468:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54150,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2594:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54150,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2724:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54148,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2510:4:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54153,
                  "nodeType": "InlineAssembly",
                  "src": "2432:308:70"
                }
              ]
            },
            "documentation": {
              "id": 54146,
              "nodeType": "StructuredDocumentation",
              "src": "2243:66:70",
              "text": "@dev Overwrite the roles directly without authorization guard."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setRoles",
            "nameLocation": "2323:9:70",
            "parameters": {
              "id": 54151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54148,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2341:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54155,
                  "src": "2333:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2333:7:70",
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
                  "id": 54150,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "2355:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54155,
                  "src": "2347:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2347:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2332:29:70"
            },
            "returnParameters": {
              "id": 54152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2379:0:70"
            },
            "scope": 55650,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54167,
            "nodeType": "FunctionDefinition",
            "src": "2952:967:70",
            "nodes": [],
            "body": {
              "id": 54166,
              "nodeType": "Block",
              "src": "3029:890:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3091:822:70",
                    "nodeType": "YulBlock",
                    "src": "3091:822:70",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3112:4:70",
                              "nodeType": "YulLiteral",
                              "src": "3112:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ROLE_SLOT_SEED",
                              "nativeSrc": "3118:15:70",
                              "nodeType": "YulIdentifier",
                              "src": "3118:15:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3105:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "3105:6:70"
                          },
                          "nativeSrc": "3105:29:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3105:29:70"
                        },
                        "nativeSrc": "3105:29:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "3105:29:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3154:4:70",
                              "nodeType": "YulLiteral",
                              "src": "3154:4:70",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "user",
                              "nativeSrc": "3160:4:70",
                              "nodeType": "YulIdentifier",
                              "src": "3160:4:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3147:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "3147:6:70"
                          },
                          "nativeSrc": "3147:18:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3147:18:70"
                        },
                        "nativeSrc": "3147:18:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "3147:18:70"
                      },
                      {
                        "nativeSrc": "3178:37:70",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3178:37:70",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3204:4:70",
                              "nodeType": "YulLiteral",
                              "src": "3204:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3210:4:70",
                              "nodeType": "YulLiteral",
                              "src": "3210:4:70",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3194:9:70",
                            "nodeType": "YulIdentifier",
                            "src": "3194:9:70"
                          },
                          "nativeSrc": "3194:21:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3194:21:70"
                        },
                        "variables": [
                          {
                            "name": "roleSlot",
                            "nativeSrc": "3182:8:70",
                            "nodeType": "YulTypedName",
                            "src": "3182:8:70",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3267:30:70",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3267:30:70",
                        "value": {
                          "arguments": [
                            {
                              "name": "roleSlot",
                              "nativeSrc": "3288:8:70",
                              "nodeType": "YulIdentifier",
                              "src": "3288:8:70"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "3282:5:70",
                            "nodeType": "YulIdentifier",
                            "src": "3282:5:70"
                          },
                          "nativeSrc": "3282:15:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3282:15:70"
                        },
                        "variables": [
                          {
                            "name": "current",
                            "nativeSrc": "3271:7:70",
                            "nodeType": "YulTypedName",
                            "src": "3271:7:70",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3368:33:70",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3368:33:70",
                        "value": {
                          "arguments": [
                            {
                              "name": "current",
                              "nativeSrc": "3386:7:70",
                              "nodeType": "YulIdentifier",
                              "src": "3386:7:70"
                            },
                            {
                              "name": "roles",
                              "nativeSrc": "3395:5:70",
                              "nodeType": "YulIdentifier",
                              "src": "3395:5:70"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "3383:2:70",
                            "nodeType": "YulIdentifier",
                            "src": "3383:2:70"
                          },
                          "nativeSrc": "3383:18:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3383:18:70"
                        },
                        "variables": [
                          {
                            "name": "updated",
                            "nativeSrc": "3372:7:70",
                            "nodeType": "YulTypedName",
                            "src": "3372:7:70",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "3643:48:70",
                          "nodeType": "YulBlock",
                          "src": "3643:48:70",
                          "statements": [
                            {
                              "nativeSrc": "3645:44:70",
                              "nodeType": "YulAssignment",
                              "src": "3645:44:70",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "current",
                                    "nativeSrc": "3660:7:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "3660:7:70"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "current",
                                        "nativeSrc": "3673:7:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "3673:7:70"
                                      },
                                      {
                                        "name": "roles",
                                        "nativeSrc": "3682:5:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "3682:5:70"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "3669:3:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "3669:3:70"
                                    },
                                    "nativeSrc": "3669:19:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3669:19:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "xor",
                                  "nativeSrc": "3656:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "3656:3:70"
                                },
                                "nativeSrc": "3656:33:70",
                                "nodeType": "YulFunctionCall",
                                "src": "3656:33:70"
                              },
                              "variableNames": [
                                {
                                  "name": "updated",
                                  "nativeSrc": "3645:7:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "3645:7:70"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "on",
                              "nativeSrc": "3639:2:70",
                              "nodeType": "YulIdentifier",
                              "src": "3639:2:70"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "3632:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "3632:6:70"
                          },
                          "nativeSrc": "3632:10:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3632:10:70"
                        },
                        "nativeSrc": "3629:62:70",
                        "nodeType": "YulIf",
                        "src": "3629:62:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "roleSlot",
                              "nativeSrc": "3753:8:70",
                              "nodeType": "YulIdentifier",
                              "src": "3753:8:70"
                            },
                            {
                              "name": "updated",
                              "nativeSrc": "3763:7:70",
                              "nodeType": "YulIdentifier",
                              "src": "3763:7:70"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "3746:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "3746:6:70"
                          },
                          "nativeSrc": "3746:25:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3746:25:70"
                        },
                        "nativeSrc": "3746:25:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "3746:25:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3835:1:70",
                              "nodeType": "YulLiteral",
                              "src": "3835:1:70",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3838:1:70",
                              "nodeType": "YulLiteral",
                              "src": "3838:1:70",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_ROLES_UPDATED_EVENT_SIGNATURE",
                              "nativeSrc": "3841:30:70",
                              "nodeType": "YulIdentifier",
                              "src": "3841:30:70"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3877:2:70",
                                  "nodeType": "YulLiteral",
                                  "src": "3877:2:70",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3887:4:70",
                                      "nodeType": "YulLiteral",
                                      "src": "3887:4:70",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "3881:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "3881:5:70"
                                  },
                                  "nativeSrc": "3881:11:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3881:11:70"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "3873:3:70",
                                "nodeType": "YulIdentifier",
                                "src": "3873:3:70"
                              },
                              "nativeSrc": "3873:20:70",
                              "nodeType": "YulFunctionCall",
                              "src": "3873:20:70"
                            },
                            {
                              "name": "updated",
                              "nativeSrc": "3895:7:70",
                              "nodeType": "YulIdentifier",
                              "src": "3895:7:70"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "3830:4:70",
                            "nodeType": "YulIdentifier",
                            "src": "3830:4:70"
                          },
                          "nativeSrc": "3830:73:70",
                          "nodeType": "YulFunctionCall",
                          "src": "3830:73:70"
                        },
                        "nativeSrc": "3830:73:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "3830:73:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54141,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3841:30:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3118:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54162,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3639:2:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54160,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3395:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54160,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3682:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54158,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3160:4:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54165,
                  "nodeType": "InlineAssembly",
                  "src": "3082:831:70"
                }
              ]
            },
            "documentation": {
              "id": 54156,
              "nodeType": "StructuredDocumentation",
              "src": "2752:195:70",
              "text": "@dev Updates the roles directly without authorization guard.\n If `on` is true, each set bit of `roles` will be turned on,\n otherwise, each set bit of `roles` will be turned off."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateRoles",
            "nameLocation": "2961:12:70",
            "parameters": {
              "id": 54163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54158,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2982:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54167,
                  "src": "2974:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2974:7:70",
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
                  "id": 54160,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "2996:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54167,
                  "src": "2988:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2988:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54162,
                  "mutability": "mutable",
                  "name": "on",
                  "nameLocation": "3008:2:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54167,
                  "src": "3003:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 54161,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:38:70"
            },
            "returnParameters": {
              "id": 54164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3029:0:70"
            },
            "scope": 55650,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54182,
            "nodeType": "FunctionDefinition",
            "src": "4053:115:70",
            "nodes": [],
            "body": {
              "id": 54181,
              "nodeType": "Block",
              "src": "4120:48:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54176,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54170,
                        "src": "4143:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54177,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54172,
                        "src": "4149:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 54178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4156:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 54175,
                      "name": "_updateRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54167,
                      "src": "4130:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint256,bool)"
                      }
                    },
                    "id": 54179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4130:31:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54180,
                  "nodeType": "ExpressionStatement",
                  "src": "4130:31:70"
                }
              ]
            },
            "documentation": {
              "id": 54168,
              "nodeType": "StructuredDocumentation",
              "src": "3925:123:70",
              "text": "@dev Grants the roles directly without authorization guard.\n Each bit of `roles` represents the role to turn on."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_grantRoles",
            "nameLocation": "4062:11:70",
            "parameters": {
              "id": 54173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54170,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "4082:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54182,
                  "src": "4074:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4074:7:70",
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
                  "id": 54172,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "4096:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54182,
                  "src": "4088:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54171,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4088:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4073:29:70"
            },
            "returnParameters": {
              "id": 54174,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4120:0:70"
            },
            "scope": 55650,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54197,
            "nodeType": "FunctionDefinition",
            "src": "4304:117:70",
            "nodes": [],
            "body": {
              "id": 54196,
              "nodeType": "Block",
              "src": "4372:49:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54191,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54185,
                        "src": "4395:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54192,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54187,
                        "src": "4401:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "66616c7365",
                        "id": 54193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4408:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 54190,
                      "name": "_updateRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54167,
                      "src": "4382:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint256,bool)"
                      }
                    },
                    "id": 54194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4382:32:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54195,
                  "nodeType": "ExpressionStatement",
                  "src": "4382:32:70"
                }
              ]
            },
            "documentation": {
              "id": 54183,
              "nodeType": "StructuredDocumentation",
              "src": "4174:125:70",
              "text": "@dev Removes the roles directly without authorization guard.\n Each bit of `roles` represents the role to turn off."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_removeRoles",
            "nameLocation": "4313:12:70",
            "parameters": {
              "id": 54188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54185,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "4334:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54197,
                  "src": "4326:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54184,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4326:7:70",
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
                  "id": 54187,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "4348:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54197,
                  "src": "4340:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54186,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4340:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4325:29:70"
            },
            "returnParameters": {
              "id": 54189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4372:0:70"
            },
            "scope": 55650,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54205,
            "nodeType": "FunctionDefinition",
            "src": "4495:554:70",
            "nodes": [],
            "body": {
              "id": 54204,
              "nodeType": "Block",
              "src": "4553:496:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4615:428:70",
                    "nodeType": "YulBlock",
                    "src": "4615:428:70",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4674:4:70",
                              "nodeType": "YulLiteral",
                              "src": "4674:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ROLE_SLOT_SEED",
                              "nativeSrc": "4680:15:70",
                              "nodeType": "YulIdentifier",
                              "src": "4680:15:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4667:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "4667:6:70"
                          },
                          "nativeSrc": "4667:29:70",
                          "nodeType": "YulFunctionCall",
                          "src": "4667:29:70"
                        },
                        "nativeSrc": "4667:29:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "4667:29:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4716:4:70",
                              "nodeType": "YulLiteral",
                              "src": "4716:4:70",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "4722:6:70",
                                "nodeType": "YulIdentifier",
                                "src": "4722:6:70"
                              },
                              "nativeSrc": "4722:8:70",
                              "nodeType": "YulFunctionCall",
                              "src": "4722:8:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4709:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "4709:6:70"
                          },
                          "nativeSrc": "4709:22:70",
                          "nodeType": "YulFunctionCall",
                          "src": "4709:22:70"
                        },
                        "nativeSrc": "4709:22:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "4709:22:70"
                      },
                      {
                        "body": {
                          "nativeSrc": "4921:112:70",
                          "nodeType": "YulBlock",
                          "src": "4921:112:70",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4946:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "4946:4:70",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4952:10:70",
                                    "nodeType": "YulLiteral",
                                    "src": "4952:10:70",
                                    "type": "",
                                    "value": "0x82b42900"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4939:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "4939:6:70"
                                },
                                "nativeSrc": "4939:24:70",
                                "nodeType": "YulFunctionCall",
                                "src": "4939:24:70"
                              },
                              "nativeSrc": "4939:24:70",
                              "nodeType": "YulExpressionStatement",
                              "src": "4939:24:70"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5008:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "5008:4:70",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5014:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "5014:4:70",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "5001:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "5001:6:70"
                                },
                                "nativeSrc": "5001:18:70",
                                "nodeType": "YulFunctionCall",
                                "src": "5001:18:70"
                              },
                              "nativeSrc": "5001:18:70",
                              "nodeType": "YulExpressionStatement",
                              "src": "5001:18:70"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4899:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "4899:4:70",
                                          "type": "",
                                          "value": "0x0c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4905:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "4905:4:70",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "keccak256",
                                        "nativeSrc": "4889:9:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "4889:9:70"
                                      },
                                      "nativeSrc": "4889:21:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "4889:21:70"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "4883:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "4883:5:70"
                                  },
                                  "nativeSrc": "4883:28:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4883:28:70"
                                },
                                {
                                  "name": "roles",
                                  "nativeSrc": "4913:5:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "4913:5:70"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "4879:3:70",
                                "nodeType": "YulIdentifier",
                                "src": "4879:3:70"
                              },
                              "nativeSrc": "4879:40:70",
                              "nodeType": "YulFunctionCall",
                              "src": "4879:40:70"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4872:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "4872:6:70"
                          },
                          "nativeSrc": "4872:48:70",
                          "nodeType": "YulFunctionCall",
                          "src": "4872:48:70"
                        },
                        "nativeSrc": "4869:164:70",
                        "nodeType": "YulIf",
                        "src": "4869:164:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4680:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54200,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4913:5:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54203,
                  "nodeType": "InlineAssembly",
                  "src": "4606:437:70"
                }
              ]
            },
            "documentation": {
              "id": 54198,
              "nodeType": "StructuredDocumentation",
              "src": "4427:63:70",
              "text": "@dev Throws if the sender does not have any of the `roles`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRoles",
            "nameLocation": "4504:11:70",
            "parameters": {
              "id": 54201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54200,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "4524:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54205,
                  "src": "4516:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4516:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4515:15:70"
            },
            "returnParameters": {
              "id": 54202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4553:0:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54213,
            "nodeType": "FunctionDefinition",
            "src": "5219:802:70",
            "nodes": [],
            "body": {
              "id": 54212,
              "nodeType": "Block",
              "src": "5284:737:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5346:669:70",
                    "nodeType": "YulBlock",
                    "src": "5346:669:70",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5537:468:70",
                          "nodeType": "YulBlock",
                          "src": "5537:468:70",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5604:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "5604:4:70",
                                    "type": "",
                                    "value": "0x0c"
                                  },
                                  {
                                    "name": "_ROLE_SLOT_SEED",
                                    "nativeSrc": "5610:15:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "5610:15:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5597:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "5597:6:70"
                                },
                                "nativeSrc": "5597:29:70",
                                "nodeType": "YulFunctionCall",
                                "src": "5597:29:70"
                              },
                              "nativeSrc": "5597:29:70",
                              "nodeType": "YulExpressionStatement",
                              "src": "5597:29:70"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5650:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "5650:4:70",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "caller",
                                      "nativeSrc": "5656:6:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "5656:6:70"
                                    },
                                    "nativeSrc": "5656:8:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5656:8:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5643:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "5643:6:70"
                                },
                                "nativeSrc": "5643:22:70",
                                "nodeType": "YulFunctionCall",
                                "src": "5643:22:70"
                              },
                              "nativeSrc": "5643:22:70",
                              "nodeType": "YulExpressionStatement",
                              "src": "5643:22:70"
                            },
                            {
                              "body": {
                                "nativeSrc": "5867:124:70",
                                "nodeType": "YulBlock",
                                "src": "5867:124:70",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5896:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "5896:4:70",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5902:10:70",
                                          "nodeType": "YulLiteral",
                                          "src": "5902:10:70",
                                          "type": "",
                                          "value": "0x82b42900"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "5889:6:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "5889:6:70"
                                      },
                                      "nativeSrc": "5889:24:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5889:24:70"
                                    },
                                    "nativeSrc": "5889:24:70",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5889:24:70"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5962:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "5962:4:70",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5968:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "5968:4:70",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "5955:6:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "5955:6:70"
                                      },
                                      "nativeSrc": "5955:18:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5955:18:70"
                                    },
                                    "nativeSrc": "5955:18:70",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5955:18:70"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nativeSrc": "5845:4:70",
                                                "nodeType": "YulLiteral",
                                                "src": "5845:4:70",
                                                "type": "",
                                                "value": "0x0c"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "5851:4:70",
                                                "nodeType": "YulLiteral",
                                                "src": "5851:4:70",
                                                "type": "",
                                                "value": "0x20"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "keccak256",
                                              "nativeSrc": "5835:9:70",
                                              "nodeType": "YulIdentifier",
                                              "src": "5835:9:70"
                                            },
                                            "nativeSrc": "5835:21:70",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5835:21:70"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "sload",
                                          "nativeSrc": "5829:5:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "5829:5:70"
                                        },
                                        "nativeSrc": "5829:28:70",
                                        "nodeType": "YulFunctionCall",
                                        "src": "5829:28:70"
                                      },
                                      {
                                        "name": "roles",
                                        "nativeSrc": "5859:5:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "5859:5:70"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "5825:3:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "5825:3:70"
                                    },
                                    "nativeSrc": "5825:40:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5825:40:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "5818:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "5818:6:70"
                                },
                                "nativeSrc": "5818:48:70",
                                "nodeType": "YulFunctionCall",
                                "src": "5818:48:70"
                              },
                              "nativeSrc": "5815:176:70",
                              "nodeType": "YulIf",
                              "src": "5815:176:70"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "caller",
                                    "nativeSrc": "5497:6:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "5497:6:70"
                                  },
                                  "nativeSrc": "5497:8:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5497:8:70"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "_ROLE_SLOT_SEED",
                                          "nativeSrc": "5517:15:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "5517:15:70"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nativeSrc": "5513:3:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "5513:3:70"
                                      },
                                      "nativeSrc": "5513:20:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5513:20:70"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "5507:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "5507:5:70"
                                  },
                                  "nativeSrc": "5507:27:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5507:27:70"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "5494:2:70",
                                "nodeType": "YulIdentifier",
                                "src": "5494:2:70"
                              },
                              "nativeSrc": "5494:41:70",
                              "nodeType": "YulFunctionCall",
                              "src": "5494:41:70"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5487:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "5487:6:70"
                          },
                          "nativeSrc": "5487:49:70",
                          "nodeType": "YulFunctionCall",
                          "src": "5487:49:70"
                        },
                        "nativeSrc": "5484:521:70",
                        "nodeType": "YulIf",
                        "src": "5484:521:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5517:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5610:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54208,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5859:5:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54211,
                  "nodeType": "InlineAssembly",
                  "src": "5337:678:70"
                }
              ]
            },
            "documentation": {
              "id": 54206,
              "nodeType": "StructuredDocumentation",
              "src": "5055:159:70",
              "text": "@dev Throws if the sender is not the owner,\n and does not have any of the `roles`.\n Checks for ownership first, then lazily checks for roles."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkOwnerOrRoles",
            "nameLocation": "5228:18:70",
            "parameters": {
              "id": 54209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54208,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "5255:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54213,
                  "src": "5247:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54207,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5247:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5246:15:70"
            },
            "returnParameters": {
              "id": 54210,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5284:0:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54221,
            "nodeType": "FunctionDefinition",
            "src": "6191:790:70",
            "nodes": [],
            "body": {
              "id": 54220,
              "nodeType": "Block",
              "src": "6256:725:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "6318:657:70",
                    "nodeType": "YulBlock",
                    "src": "6318:657:70",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6377:4:70",
                              "nodeType": "YulLiteral",
                              "src": "6377:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ROLE_SLOT_SEED",
                              "nativeSrc": "6383:15:70",
                              "nodeType": "YulIdentifier",
                              "src": "6383:15:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6370:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "6370:6:70"
                          },
                          "nativeSrc": "6370:29:70",
                          "nodeType": "YulFunctionCall",
                          "src": "6370:29:70"
                        },
                        "nativeSrc": "6370:29:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "6370:29:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6419:4:70",
                              "nodeType": "YulLiteral",
                              "src": "6419:4:70",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "6425:6:70",
                                "nodeType": "YulIdentifier",
                                "src": "6425:6:70"
                              },
                              "nativeSrc": "6425:8:70",
                              "nodeType": "YulFunctionCall",
                              "src": "6425:8:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6412:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "6412:6:70"
                          },
                          "nativeSrc": "6412:22:70",
                          "nodeType": "YulFunctionCall",
                          "src": "6412:22:70"
                        },
                        "nativeSrc": "6412:22:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "6412:22:70"
                      },
                      {
                        "body": {
                          "nativeSrc": "6624:341:70",
                          "nodeType": "YulBlock",
                          "src": "6624:341:70",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "6827:124:70",
                                "nodeType": "YulBlock",
                                "src": "6827:124:70",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6856:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6856:4:70",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6862:10:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6862:10:70",
                                          "type": "",
                                          "value": "0x82b42900"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "6849:6:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "6849:6:70"
                                      },
                                      "nativeSrc": "6849:24:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6849:24:70"
                                    },
                                    "nativeSrc": "6849:24:70",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6849:24:70"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6922:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6922:4:70",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6928:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6928:4:70",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "6915:6:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "6915:6:70"
                                      },
                                      "nativeSrc": "6915:18:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6915:18:70"
                                    },
                                    "nativeSrc": "6915:18:70",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6915:18:70"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "caller",
                                          "nativeSrc": "6787:6:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "6787:6:70"
                                        },
                                        "nativeSrc": "6787:8:70",
                                        "nodeType": "YulFunctionCall",
                                        "src": "6787:8:70"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "_ROLE_SLOT_SEED",
                                                "nativeSrc": "6807:15:70",
                                                "nodeType": "YulIdentifier",
                                                "src": "6807:15:70"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "not",
                                              "nativeSrc": "6803:3:70",
                                              "nodeType": "YulIdentifier",
                                              "src": "6803:3:70"
                                            },
                                            "nativeSrc": "6803:20:70",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6803:20:70"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "sload",
                                          "nativeSrc": "6797:5:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "6797:5:70"
                                        },
                                        "nativeSrc": "6797:27:70",
                                        "nodeType": "YulFunctionCall",
                                        "src": "6797:27:70"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "eq",
                                      "nativeSrc": "6784:2:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "6784:2:70"
                                    },
                                    "nativeSrc": "6784:41:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6784:41:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "6777:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "6777:6:70"
                                },
                                "nativeSrc": "6777:49:70",
                                "nodeType": "YulFunctionCall",
                                "src": "6777:49:70"
                              },
                              "nativeSrc": "6774:177:70",
                              "nodeType": "YulIf",
                              "src": "6774:177:70"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6602:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6602:4:70",
                                          "type": "",
                                          "value": "0x0c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6608:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "6608:4:70",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "keccak256",
                                        "nativeSrc": "6592:9:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "6592:9:70"
                                      },
                                      "nativeSrc": "6592:21:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6592:21:70"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "6586:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "6586:5:70"
                                  },
                                  "nativeSrc": "6586:28:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6586:28:70"
                                },
                                {
                                  "name": "roles",
                                  "nativeSrc": "6616:5:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "6616:5:70"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "6582:3:70",
                                "nodeType": "YulIdentifier",
                                "src": "6582:3:70"
                              },
                              "nativeSrc": "6582:40:70",
                              "nodeType": "YulFunctionCall",
                              "src": "6582:40:70"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6575:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "6575:6:70"
                          },
                          "nativeSrc": "6575:48:70",
                          "nodeType": "YulFunctionCall",
                          "src": "6575:48:70"
                        },
                        "nativeSrc": "6572:393:70",
                        "nodeType": "YulIf",
                        "src": "6572:393:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6383:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6807:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54216,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6616:5:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54219,
                  "nodeType": "InlineAssembly",
                  "src": "6309:666:70"
                }
              ]
            },
            "documentation": {
              "id": 54214,
              "nodeType": "StructuredDocumentation",
              "src": "6027:159:70",
              "text": "@dev Throws if the sender does not have any of the `roles`,\n and is not the owner.\n Checks for roles first, then lazily checks for ownership."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRolesOrOwner",
            "nameLocation": "6200:18:70",
            "parameters": {
              "id": 54217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54216,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "6227:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54221,
                  "src": "6219:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54215,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6219:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6218:15:70"
            },
            "returnParameters": {
              "id": 54218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6256:0:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54232,
            "nodeType": "FunctionDefinition",
            "src": "7298:489:70",
            "nodes": [],
            "body": {
              "id": 54231,
              "nodeType": "Block",
              "src": "7389:398:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7451:330:70",
                    "nodeType": "YulBlock",
                    "src": "7451:330:70",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "7530:241:70",
                          "nodeType": "YulBlock",
                          "src": "7530:241:70",
                          "statements": [
                            {
                              "nativeSrc": "7706:51:70",
                              "nodeType": "YulAssignment",
                              "src": "7706:51:70",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "ordinals",
                                                "nativeSrc": "7732:8:70",
                                                "nodeType": "YulIdentifier",
                                                "src": "7732:8:70"
                                              },
                                              {
                                                "name": "i",
                                                "nativeSrc": "7742:1:70",
                                                "nodeType": "YulIdentifier",
                                                "src": "7742:1:70"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nativeSrc": "7728:3:70",
                                              "nodeType": "YulIdentifier",
                                              "src": "7728:3:70"
                                            },
                                            "nativeSrc": "7728:16:70",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7728:16:70"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nativeSrc": "7722:5:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "7722:5:70"
                                        },
                                        "nativeSrc": "7722:23:70",
                                        "nodeType": "YulFunctionCall",
                                        "src": "7722:23:70"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7747:1:70",
                                        "nodeType": "YulLiteral",
                                        "src": "7747:1:70",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "7718:3:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "7718:3:70"
                                    },
                                    "nativeSrc": "7718:31:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7718:31:70"
                                  },
                                  {
                                    "name": "roles",
                                    "nativeSrc": "7751:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "7751:5:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "or",
                                  "nativeSrc": "7715:2:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "7715:2:70"
                                },
                                "nativeSrc": "7715:42:70",
                                "nodeType": "YulFunctionCall",
                                "src": "7715:42:70"
                              },
                              "variableNames": [
                                {
                                  "name": "roles",
                                  "nativeSrc": "7706:5:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "7706:5:70"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "name": "i",
                          "nativeSrc": "7506:1:70",
                          "nodeType": "YulIdentifier",
                          "src": "7506:1:70"
                        },
                        "nativeSrc": "7465:306:70",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "7508:21:70",
                          "nodeType": "YulBlock",
                          "src": "7508:21:70",
                          "statements": [
                            {
                              "nativeSrc": "7510:17:70",
                              "nodeType": "YulAssignment",
                              "src": "7510:17:70",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nativeSrc": "7519:1:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "7519:1:70"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7522:4:70",
                                    "nodeType": "YulLiteral",
                                    "src": "7522:4:70",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "7515:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "7515:3:70"
                                },
                                "nativeSrc": "7515:12:70",
                                "nodeType": "YulFunctionCall",
                                "src": "7515:12:70"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nativeSrc": "7510:1:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "7510:1:70"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nativeSrc": "7469:36:70",
                          "nodeType": "YulBlock",
                          "src": "7469:36:70",
                          "statements": [
                            {
                              "nativeSrc": "7471:32:70",
                              "nodeType": "YulVariableDeclaration",
                              "src": "7471:32:70",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7484:1:70",
                                    "nodeType": "YulLiteral",
                                    "src": "7484:1:70",
                                    "type": "",
                                    "value": "5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "ordinals",
                                        "nativeSrc": "7493:8:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "7493:8:70"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "7487:5:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "7487:5:70"
                                    },
                                    "nativeSrc": "7487:15:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7487:15:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "7480:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "7480:3:70"
                                },
                                "nativeSrc": "7480:23:70",
                                "nodeType": "YulFunctionCall",
                                "src": "7480:23:70"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nativeSrc": "7475:1:70",
                                  "nodeType": "YulTypedName",
                                  "src": "7475:1:70",
                                  "type": ""
                                }
                              ]
                            }
                          ]
                        },
                        "src": "7465:306:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54225,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7493:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54225,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7732:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54228,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7706:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54228,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7751:5:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54230,
                  "nodeType": "InlineAssembly",
                  "src": "7442:339:70"
                }
              ]
            },
            "documentation": {
              "id": 54222,
              "nodeType": "StructuredDocumentation",
              "src": "6987:306:70",
              "text": "@dev Convenience function to return a `roles` bitmap from an array of `ordinals`.\n This is meant for frontends like Etherscan, and is therefore not fully optimized.\n Not recommended to be called on-chain.\n Made internal to conserve bytecode. Wrap it in a public function if needed."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_rolesFromOrdinals",
            "nameLocation": "7307:18:70",
            "parameters": {
              "id": 54226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54225,
                  "mutability": "mutable",
                  "name": "ordinals",
                  "nameLocation": "7341:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54232,
                  "src": "7326:23:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 54223,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "7326:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 54224,
                    "nodeType": "ArrayTypeName",
                    "src": "7326:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7325:25:70"
            },
            "returnParameters": {
              "id": 54229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54228,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "7382:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54232,
                  "src": "7374:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54227,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7374:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7373:15:70"
            },
            "scope": 55650,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54243,
            "nodeType": "FunctionDefinition",
            "src": "8106:1057:70",
            "nodes": [],
            "body": {
              "id": 54242,
              "nodeType": "Block",
              "src": "8197:966:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8259:898:70",
                    "nodeType": "YulBlock",
                    "src": "8259:898:70",
                    "statements": [
                      {
                        "nativeSrc": "8325:23:70",
                        "nodeType": "YulAssignment",
                        "src": "8325:23:70",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "8343:4:70",
                              "nodeType": "YulLiteral",
                              "src": "8343:4:70",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "8337:5:70",
                            "nodeType": "YulIdentifier",
                            "src": "8337:5:70"
                          },
                          "nativeSrc": "8337:11:70",
                          "nodeType": "YulFunctionCall",
                          "src": "8337:11:70"
                        },
                        "variableNames": [
                          {
                            "name": "ordinals",
                            "nativeSrc": "8325:8:70",
                            "nodeType": "YulIdentifier",
                            "src": "8325:8:70"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "8361:30:70",
                        "nodeType": "YulVariableDeclaration",
                        "src": "8361:30:70",
                        "value": {
                          "arguments": [
                            {
                              "name": "ordinals",
                              "nativeSrc": "8376:8:70",
                              "nodeType": "YulIdentifier",
                              "src": "8376:8:70"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8386:4:70",
                              "nodeType": "YulLiteral",
                              "src": "8386:4:70",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "8372:3:70",
                            "nodeType": "YulIdentifier",
                            "src": "8372:3:70"
                          },
                          "nativeSrc": "8372:19:70",
                          "nodeType": "YulFunctionCall",
                          "src": "8372:19:70"
                        },
                        "variables": [
                          {
                            "name": "ptr",
                            "nativeSrc": "8365:3:70",
                            "nodeType": "YulTypedName",
                            "src": "8365:3:70",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "8404:10:70",
                        "nodeType": "YulVariableDeclaration",
                        "src": "8404:10:70",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "8413:1:70",
                          "nodeType": "YulLiteral",
                          "src": "8413:1:70",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "o",
                            "nativeSrc": "8408:1:70",
                            "nodeType": "YulTypedName",
                            "src": "8408:1:70",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "8627:339:70",
                          "nodeType": "YulBlock",
                          "src": "8627:339:70",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "ptr",
                                    "nativeSrc": "8652:3:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8652:3:70"
                                  },
                                  {
                                    "name": "o",
                                    "nativeSrc": "8657:1:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8657:1:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "8645:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8645:6:70"
                                },
                                "nativeSrc": "8645:14:70",
                                "nodeType": "YulFunctionCall",
                                "src": "8645:14:70"
                              },
                              "nativeSrc": "8645:14:70",
                              "nodeType": "YulExpressionStatement",
                              "src": "8645:14:70"
                            },
                            {
                              "nativeSrc": "8813:34:70",
                              "nodeType": "YulAssignment",
                              "src": "8813:34:70",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "ptr",
                                    "nativeSrc": "8824:3:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8824:3:70"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "8833:1:70",
                                        "nodeType": "YulLiteral",
                                        "src": "8833:1:70",
                                        "type": "",
                                        "value": "5"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "t",
                                            "nativeSrc": "8840:1:70",
                                            "nodeType": "YulIdentifier",
                                            "src": "8840:1:70"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "8843:1:70",
                                            "nodeType": "YulLiteral",
                                            "src": "8843:1:70",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nativeSrc": "8836:3:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "8836:3:70"
                                        },
                                        "nativeSrc": "8836:9:70",
                                        "nodeType": "YulFunctionCall",
                                        "src": "8836:9:70"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "8829:3:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "8829:3:70"
                                    },
                                    "nativeSrc": "8829:17:70",
                                    "nodeType": "YulFunctionCall",
                                    "src": "8829:17:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "8820:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8820:3:70"
                                },
                                "nativeSrc": "8820:27:70",
                                "nodeType": "YulFunctionCall",
                                "src": "8820:27:70"
                              },
                              "variableNames": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "8813:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8813:3:70"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "8864:14:70",
                              "nodeType": "YulAssignment",
                              "src": "8864:14:70",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "o",
                                    "nativeSrc": "8873:1:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8873:1:70"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8876:1:70",
                                    "nodeType": "YulLiteral",
                                    "src": "8876:1:70",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "8869:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8869:3:70"
                                },
                                "nativeSrc": "8869:9:70",
                                "nodeType": "YulFunctionCall",
                                "src": "8869:9:70"
                              },
                              "variableNames": [
                                {
                                  "name": "o",
                                  "nativeSrc": "8864:1:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8864:1:70"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "8895:18:70",
                              "nodeType": "YulAssignment",
                              "src": "8895:18:70",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "o",
                                    "nativeSrc": "8904:1:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8904:1:70"
                                  },
                                  {
                                    "name": "roles",
                                    "nativeSrc": "8907:5:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8907:5:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nativeSrc": "8900:3:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8900:3:70"
                                },
                                "nativeSrc": "8900:13:70",
                                "nodeType": "YulFunctionCall",
                                "src": "8900:13:70"
                              },
                              "variableNames": [
                                {
                                  "name": "t",
                                  "nativeSrc": "8895:1:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8895:1:70"
                                }
                              ]
                            },
                            {
                              "body": {
                                "nativeSrc": "8943:9:70",
                                "nodeType": "YulBlock",
                                "src": "8943:9:70",
                                "statements": [
                                  {
                                    "nativeSrc": "8945:5:70",
                                    "nodeType": "YulBreak",
                                    "src": "8945:5:70"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "t",
                                    "nativeSrc": "8940:1:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "8940:1:70"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "8933:6:70",
                                  "nodeType": "YulIdentifier",
                                  "src": "8933:6:70"
                                },
                                "nativeSrc": "8933:9:70",
                                "nodeType": "YulFunctionCall",
                                "src": "8933:9:70"
                              },
                              "nativeSrc": "8930:22:70",
                              "nodeType": "YulIf",
                              "src": "8930:22:70"
                            }
                          ]
                        },
                        "condition": {
                          "kind": "number",
                          "nativeSrc": "8622:1:70",
                          "nodeType": "YulLiteral",
                          "src": "8622:1:70",
                          "type": "",
                          "value": "1"
                        },
                        "nativeSrc": "8599:367:70",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "8624:2:70",
                          "nodeType": "YulBlock",
                          "src": "8624:2:70",
                          "statements": []
                        },
                        "pre": {
                          "nativeSrc": "8603:18:70",
                          "nodeType": "YulBlock",
                          "src": "8603:18:70",
                          "statements": [
                            {
                              "nativeSrc": "8605:14:70",
                              "nodeType": "YulVariableDeclaration",
                              "src": "8605:14:70",
                              "value": {
                                "name": "roles",
                                "nativeSrc": "8614:5:70",
                                "nodeType": "YulIdentifier",
                                "src": "8614:5:70"
                              },
                              "variables": [
                                {
                                  "name": "t",
                                  "nativeSrc": "8609:1:70",
                                  "nodeType": "YulTypedName",
                                  "src": "8609:1:70",
                                  "type": ""
                                }
                              ]
                            }
                          ]
                        },
                        "src": "8599:367:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "ordinals",
                              "nativeSrc": "9033:8:70",
                              "nodeType": "YulIdentifier",
                              "src": "9033:8:70"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9047:1:70",
                                  "nodeType": "YulLiteral",
                                  "src": "9047:1:70",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "ptr",
                                      "nativeSrc": "9054:3:70",
                                      "nodeType": "YulIdentifier",
                                      "src": "9054:3:70"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "ordinals",
                                          "nativeSrc": "9063:8:70",
                                          "nodeType": "YulIdentifier",
                                          "src": "9063:8:70"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9073:4:70",
                                          "nodeType": "YulLiteral",
                                          "src": "9073:4:70",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "9059:3:70",
                                        "nodeType": "YulIdentifier",
                                        "src": "9059:3:70"
                                      },
                                      "nativeSrc": "9059:19:70",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9059:19:70"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nativeSrc": "9050:3:70",
                                    "nodeType": "YulIdentifier",
                                    "src": "9050:3:70"
                                  },
                                  "nativeSrc": "9050:29:70",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9050:29:70"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "9043:3:70",
                                "nodeType": "YulIdentifier",
                                "src": "9043:3:70"
                              },
                              "nativeSrc": "9043:37:70",
                              "nodeType": "YulFunctionCall",
                              "src": "9043:37:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9026:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "9026:6:70"
                          },
                          "nativeSrc": "9026:55:70",
                          "nodeType": "YulFunctionCall",
                          "src": "9026:55:70"
                        },
                        "nativeSrc": "9026:55:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "9026:55:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9137:4:70",
                              "nodeType": "YulLiteral",
                              "src": "9137:4:70",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "ptr",
                              "nativeSrc": "9143:3:70",
                              "nodeType": "YulIdentifier",
                              "src": "9143:3:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9130:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "9130:6:70"
                          },
                          "nativeSrc": "9130:17:70",
                          "nodeType": "YulFunctionCall",
                          "src": "9130:17:70"
                        },
                        "nativeSrc": "9130:17:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "9130:17:70"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54239,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8325:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54239,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8376:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54239,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9033:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54239,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9063:8:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54235,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8614:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54235,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8907:5:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54241,
                  "nodeType": "InlineAssembly",
                  "src": "8250:907:70"
                }
              ]
            },
            "documentation": {
              "id": 54233,
              "nodeType": "StructuredDocumentation",
              "src": "7793:308:70",
              "text": "@dev Convenience function to return an array of `ordinals` from the `roles` bitmap.\n This is meant for frontends like Etherscan, and is therefore not fully optimized.\n Not recommended to be called on-chain.\n Made internal to conserve bytecode. Wrap it in a public function if needed."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ordinalsFromRoles",
            "nameLocation": "8115:18:70",
            "parameters": {
              "id": 54236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54235,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "8142:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54243,
                  "src": "8134:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8134:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8133:15:70"
            },
            "returnParameters": {
              "id": 54240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54239,
                  "mutability": "mutable",
                  "name": "ordinals",
                  "nameLocation": "8187:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54243,
                  "src": "8172:23:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 54237,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "8172:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 54238,
                    "nodeType": "ArrayTypeName",
                    "src": "8172:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8171:25:70"
            },
            "scope": 55650,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54259,
            "nodeType": "FunctionDefinition",
            "src": "9588:123:70",
            "nodes": [],
            "body": {
              "id": 54258,
              "nodeType": "Block",
              "src": "9670:41:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54254,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54246,
                        "src": "9692:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54255,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54248,
                        "src": "9698:5:70",
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
                      "id": 54253,
                      "name": "_grantRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54182,
                      "src": "9680:11:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 54256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9680:24:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54257,
                  "nodeType": "ExpressionStatement",
                  "src": "9680:24:70"
                }
              ]
            },
            "documentation": {
              "id": 54244,
              "nodeType": "StructuredDocumentation",
              "src": "9452:131:70",
              "text": "@dev Allows the owner to grant `user` `roles`.\n If the `user` already has a role, then it will be an no-op for the role."
            },
            "functionSelector": "1c10893f",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54251,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54250,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "9660:9:70"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "9660:9:70"
                },
                "nodeType": "ModifierInvocation",
                "src": "9660:9:70"
              }
            ],
            "name": "grantRoles",
            "nameLocation": "9597:10:70",
            "parameters": {
              "id": 54249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54246,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "9616:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54259,
                  "src": "9608:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9608:7:70",
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
                  "id": 54248,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "9630:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54259,
                  "src": "9622:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9622:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9607:29:70"
            },
            "returnParameters": {
              "id": 54252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9670:0:70"
            },
            "scope": 55650,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54275,
            "nodeType": "FunctionDefinition",
            "src": "9856:125:70",
            "nodes": [],
            "body": {
              "id": 54274,
              "nodeType": "Block",
              "src": "9939:42:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54270,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54262,
                        "src": "9962:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54271,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54264,
                        "src": "9968:5:70",
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
                      "id": 54269,
                      "name": "_removeRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54197,
                      "src": "9949:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 54272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9949:25:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54273,
                  "nodeType": "ExpressionStatement",
                  "src": "9949:25:70"
                }
              ]
            },
            "documentation": {
              "id": 54260,
              "nodeType": "StructuredDocumentation",
              "src": "9717:134:70",
              "text": "@dev Allows the owner to remove `user` `roles`.\n If the `user` does not have a role, then it will be an no-op for the role."
            },
            "functionSelector": "4a4ee7b1",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54267,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54266,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "9929:9:70"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "9929:9:70"
                },
                "nodeType": "ModifierInvocation",
                "src": "9929:9:70"
              }
            ],
            "name": "revokeRoles",
            "nameLocation": "9865:11:70",
            "parameters": {
              "id": 54265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54262,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "9885:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54275,
                  "src": "9877:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54261,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9877:7:70",
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
                  "id": 54264,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "9899:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54275,
                  "src": "9891:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54263,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9891:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9876:29:70"
            },
            "returnParameters": {
              "id": 54268,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9939:0:70"
            },
            "scope": 55650,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54288,
            "nodeType": "FunctionDefinition",
            "src": "10127:109:70",
            "nodes": [],
            "body": {
              "id": 54287,
              "nodeType": "Block",
              "src": "10188:48:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 54282,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "10211:3:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 54283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10215:6:70",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "10211:10:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54284,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54278,
                        "src": "10223:5:70",
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
                      "id": 54281,
                      "name": "_removeRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54197,
                      "src": "10198:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 54285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10198:31:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54286,
                  "nodeType": "ExpressionStatement",
                  "src": "10198:31:70"
                }
              ]
            },
            "documentation": {
              "id": 54276,
              "nodeType": "StructuredDocumentation",
              "src": "9987:135:70",
              "text": "@dev Allow the caller to remove their own roles.\n If the caller does not have a role, then it will be an no-op for the role."
            },
            "functionSelector": "183a4f6e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRoles",
            "nameLocation": "10136:13:70",
            "parameters": {
              "id": 54279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54278,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "10158:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54288,
                  "src": "10150:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54277,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10150:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10149:15:70"
            },
            "returnParameters": {
              "id": 54280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10188:0:70"
            },
            "scope": 55650,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54298,
            "nodeType": "FunctionDefinition",
            "src": "10567:353:70",
            "nodes": [],
            "body": {
              "id": 54297,
              "nodeType": "Block",
              "src": "10642:278:70",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "10704:210:70",
                    "nodeType": "YulBlock",
                    "src": "10704:210:70",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10763:4:70",
                              "nodeType": "YulLiteral",
                              "src": "10763:4:70",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ROLE_SLOT_SEED",
                              "nativeSrc": "10769:15:70",
                              "nodeType": "YulIdentifier",
                              "src": "10769:15:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10756:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "10756:6:70"
                          },
                          "nativeSrc": "10756:29:70",
                          "nodeType": "YulFunctionCall",
                          "src": "10756:29:70"
                        },
                        "nativeSrc": "10756:29:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "10756:29:70"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10805:4:70",
                              "nodeType": "YulLiteral",
                              "src": "10805:4:70",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "user",
                              "nativeSrc": "10811:4:70",
                              "nodeType": "YulIdentifier",
                              "src": "10811:4:70"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10798:6:70",
                            "nodeType": "YulIdentifier",
                            "src": "10798:6:70"
                          },
                          "nativeSrc": "10798:18:70",
                          "nodeType": "YulFunctionCall",
                          "src": "10798:18:70"
                        },
                        "nativeSrc": "10798:18:70",
                        "nodeType": "YulExpressionStatement",
                        "src": "10798:18:70"
                      },
                      {
                        "nativeSrc": "10867:37:70",
                        "nodeType": "YulAssignment",
                        "src": "10867:37:70",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "10892:4:70",
                                  "nodeType": "YulLiteral",
                                  "src": "10892:4:70",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10898:4:70",
                                  "nodeType": "YulLiteral",
                                  "src": "10898:4:70",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "10882:9:70",
                                "nodeType": "YulIdentifier",
                                "src": "10882:9:70"
                              },
                              "nativeSrc": "10882:21:70",
                              "nodeType": "YulFunctionCall",
                              "src": "10882:21:70"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "10876:5:70",
                            "nodeType": "YulIdentifier",
                            "src": "10876:5:70"
                          },
                          "nativeSrc": "10876:28:70",
                          "nodeType": "YulFunctionCall",
                          "src": "10876:28:70"
                        },
                        "variableNames": [
                          {
                            "name": "roles",
                            "nativeSrc": "10867:5:70",
                            "nodeType": "YulIdentifier",
                            "src": "10867:5:70"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54145,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10769:15:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54294,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10867:5:70",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54291,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10811:4:70",
                      "valueSize": 1
                    }
                  ],
                  "id": 54296,
                  "nodeType": "InlineAssembly",
                  "src": "10695:219:70"
                }
              ]
            },
            "documentation": {
              "id": 54289,
              "nodeType": "StructuredDocumentation",
              "src": "10525:37:70",
              "text": "@dev Returns the roles of `user`."
            },
            "functionSelector": "2de94807",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "rolesOf",
            "nameLocation": "10576:7:70",
            "parameters": {
              "id": 54292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54291,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "10592:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54298,
                  "src": "10584:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10584:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10583:14:70"
            },
            "returnParameters": {
              "id": 54295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54294,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "10635:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54298,
                  "src": "10627:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10627:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10626:15:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54317,
            "nodeType": "FunctionDefinition",
            "src": "10982:134:70",
            "nodes": [],
            "body": {
              "id": 54316,
              "nodeType": "Block",
              "src": "11066:50:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 54314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 54312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 54309,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54301,
                            "src": "11091:4:70",
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
                          "id": 54308,
                          "name": "rolesOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54298,
                          "src": "11083:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view returns (uint256)"
                          }
                        },
                        "id": 54310,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11083:13:70",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "id": 54311,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54303,
                        "src": "11099:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "11083:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 54313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11108:1:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11083:26:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 54307,
                  "id": 54315,
                  "nodeType": "Return",
                  "src": "11076:33:70"
                }
              ]
            },
            "documentation": {
              "id": 54299,
              "nodeType": "StructuredDocumentation",
              "src": "10926:51:70",
              "text": "@dev Returns whether `user` has any of `roles`."
            },
            "functionSelector": "514e62fc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAnyRole",
            "nameLocation": "10991:10:70",
            "parameters": {
              "id": 54304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54301,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "11010:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54317,
                  "src": "11002:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11002:7:70",
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
                  "id": 54303,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "11024:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54317,
                  "src": "11016:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11016:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11001:29:70"
            },
            "returnParameters": {
              "id": 54307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54306,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54317,
                  "src": "11060:4:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 54305,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11060:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11059:6:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54336,
            "nodeType": "FunctionDefinition",
            "src": "11178:139:70",
            "nodes": [],
            "body": {
              "id": 54335,
              "nodeType": "Block",
              "src": "11263:54:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 54333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 54331,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 54328,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54320,
                            "src": "11288:4:70",
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
                          "id": 54327,
                          "name": "rolesOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54298,
                          "src": "11280:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view returns (uint256)"
                          }
                        },
                        "id": 54329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11280:13:70",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "id": 54330,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54322,
                        "src": "11296:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "11280:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 54332,
                      "name": "roles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54322,
                      "src": "11305:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11280:30:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 54326,
                  "id": 54334,
                  "nodeType": "Return",
                  "src": "11273:37:70"
                }
              ]
            },
            "documentation": {
              "id": 54318,
              "nodeType": "StructuredDocumentation",
              "src": "11122:51:70",
              "text": "@dev Returns whether `user` has all of `roles`."
            },
            "functionSelector": "1cd64df4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAllRoles",
            "nameLocation": "11187:11:70",
            "parameters": {
              "id": 54323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54320,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "11207:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54336,
                  "src": "11199:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11199:7:70",
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
                  "id": 54322,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "11221:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54336,
                  "src": "11213:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11213:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11198:29:70"
            },
            "returnParameters": {
              "id": 54326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54325,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54336,
                  "src": "11257:4:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 54324,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11257:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11256:6:70"
            },
            "scope": 55650,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54347,
            "nodeType": "ModifierDefinition",
            "src": "11681:88:70",
            "nodes": [],
            "body": {
              "id": 54346,
              "nodeType": "Block",
              "src": "11723:46:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54342,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54339,
                        "src": "11745:5:70",
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
                      "id": 54341,
                      "name": "_checkRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54205,
                      "src": "11733:11:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) view"
                      }
                    },
                    "id": 54343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11733:18:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54344,
                  "nodeType": "ExpressionStatement",
                  "src": "11733:18:70"
                },
                {
                  "id": 54345,
                  "nodeType": "PlaceholderStatement",
                  "src": "11761:1:70"
                }
              ]
            },
            "documentation": {
              "id": 54337,
              "nodeType": "StructuredDocumentation",
              "src": "11606:70:70",
              "text": "@dev Marks a function as only callable by an account with `roles`."
            },
            "name": "onlyRoles",
            "nameLocation": "11690:9:70",
            "parameters": {
              "id": 54340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54339,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "11708:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54347,
                  "src": "11700:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11700:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11699:15:70"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54358,
            "nodeType": "ModifierDefinition",
            "src": "11932:102:70",
            "nodes": [],
            "body": {
              "id": 54357,
              "nodeType": "Block",
              "src": "11981:53:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54353,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54350,
                        "src": "12010:5:70",
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
                      "id": 54352,
                      "name": "_checkOwnerOrRoles",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54213,
                      "src": "11991:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) view"
                      }
                    },
                    "id": 54354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11991:25:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54355,
                  "nodeType": "ExpressionStatement",
                  "src": "11991:25:70"
                },
                {
                  "id": 54356,
                  "nodeType": "PlaceholderStatement",
                  "src": "12026:1:70"
                }
              ]
            },
            "documentation": {
              "id": 54348,
              "nodeType": "StructuredDocumentation",
              "src": "11775:152:70",
              "text": "@dev Marks a function as only callable by the owner or by an account\n with `roles`. Checks for ownership first, then lazily checks for roles."
            },
            "name": "onlyOwnerOrRoles",
            "nameLocation": "11941:16:70",
            "parameters": {
              "id": 54351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54350,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "11966:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54358,
                  "src": "11958:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54349,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11958:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11957:15:70"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54369,
            "nodeType": "ModifierDefinition",
            "src": "12194:102:70",
            "nodes": [],
            "body": {
              "id": 54368,
              "nodeType": "Block",
              "src": "12243:53:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54364,
                        "name": "roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54361,
                        "src": "12272:5:70",
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
                      "id": 54363,
                      "name": "_checkRolesOrOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54221,
                      "src": "12253:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) view"
                      }
                    },
                    "id": 54365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12253:25:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54366,
                  "nodeType": "ExpressionStatement",
                  "src": "12253:25:70"
                },
                {
                  "id": 54367,
                  "nodeType": "PlaceholderStatement",
                  "src": "12288:1:70"
                }
              ]
            },
            "documentation": {
              "id": 54359,
              "nodeType": "StructuredDocumentation",
              "src": "12040:149:70",
              "text": "@dev Marks a function as only callable by an account with `roles`\n or the owner. Checks for roles first, then lazily checks for ownership."
            },
            "name": "onlyRolesOrOwner",
            "nameLocation": "12203:16:70",
            "parameters": {
              "id": 54362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54361,
                  "mutability": "mutable",
                  "name": "roles",
                  "nameLocation": "12228:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 54369,
                  "src": "12220:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54360,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12220:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12219:15:70"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54374,
            "nodeType": "VariableDeclaration",
            "src": "12599:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_0",
            "nameLocation": "12625:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54370,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12599:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "id": 54373,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54371,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12635:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "30",
                "id": 54372,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12640:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "src": "12635:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54379,
            "nodeType": "VariableDeclaration",
            "src": "12647:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_1",
            "nameLocation": "12673:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54375,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12647:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "id": 54378,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54376,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12683:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "31",
                "id": 54377,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12688:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "12683:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54384,
            "nodeType": "VariableDeclaration",
            "src": "12695:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_2",
            "nameLocation": "12721:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54380,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12695:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4_by_1",
                "typeString": "int_const 4"
              },
              "id": 54383,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54381,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12731:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "32",
                "id": 54382,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12736:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_2_by_1",
                  "typeString": "int_const 2"
                },
                "value": "2"
              },
              "src": "12731:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4_by_1",
                "typeString": "int_const 4"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54389,
            "nodeType": "VariableDeclaration",
            "src": "12743:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_3",
            "nameLocation": "12769:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54385,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12743:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              },
              "id": 54388,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54386,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12779:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "33",
                "id": 54387,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12784:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3_by_1",
                  "typeString": "int_const 3"
                },
                "value": "3"
              },
              "src": "12779:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54394,
            "nodeType": "VariableDeclaration",
            "src": "12791:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_4",
            "nameLocation": "12817:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54390,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12791:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_16_by_1",
                "typeString": "int_const 16"
              },
              "id": 54393,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54391,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12827:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "34",
                "id": 54392,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12832:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_4_by_1",
                  "typeString": "int_const 4"
                },
                "value": "4"
              },
              "src": "12827:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_16_by_1",
                "typeString": "int_const 16"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54399,
            "nodeType": "VariableDeclaration",
            "src": "12839:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_5",
            "nameLocation": "12865:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54395,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12839:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_32_by_1",
                "typeString": "int_const 32"
              },
              "id": 54398,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54396,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12875:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "35",
                "id": 54397,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12880:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_5_by_1",
                  "typeString": "int_const 5"
                },
                "value": "5"
              },
              "src": "12875:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_32_by_1",
                "typeString": "int_const 32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54404,
            "nodeType": "VariableDeclaration",
            "src": "12887:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_6",
            "nameLocation": "12913:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54400,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12887:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_64_by_1",
                "typeString": "int_const 64"
              },
              "id": 54403,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54401,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12923:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "36",
                "id": 54402,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12928:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_6_by_1",
                  "typeString": "int_const 6"
                },
                "value": "6"
              },
              "src": "12923:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_64_by_1",
                "typeString": "int_const 64"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54409,
            "nodeType": "VariableDeclaration",
            "src": "12935:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_7",
            "nameLocation": "12961:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54405,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12935:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_128_by_1",
                "typeString": "int_const 128"
              },
              "id": 54408,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54406,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12971:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "37",
                "id": 54407,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "12976:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_7_by_1",
                  "typeString": "int_const 7"
                },
                "value": "7"
              },
              "src": "12971:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_128_by_1",
                "typeString": "int_const 128"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54414,
            "nodeType": "VariableDeclaration",
            "src": "12983:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_8",
            "nameLocation": "13009:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54410,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12983:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_256_by_1",
                "typeString": "int_const 256"
              },
              "id": 54413,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54411,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13019:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "38",
                "id": 54412,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13024:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_8_by_1",
                  "typeString": "int_const 8"
                },
                "value": "8"
              },
              "src": "13019:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_256_by_1",
                "typeString": "int_const 256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54419,
            "nodeType": "VariableDeclaration",
            "src": "13031:42:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_9",
            "nameLocation": "13057:7:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54415,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13031:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_512_by_1",
                "typeString": "int_const 512"
              },
              "id": 54418,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54416,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13067:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "39",
                "id": 54417,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13072:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_9_by_1",
                  "typeString": "int_const 9"
                },
                "value": "9"
              },
              "src": "13067:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_512_by_1",
                "typeString": "int_const 512"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54424,
            "nodeType": "VariableDeclaration",
            "src": "13079:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_10",
            "nameLocation": "13105:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54420,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1024_by_1",
                "typeString": "int_const 1024"
              },
              "id": 54423,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54421,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13116:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3130",
                "id": 54422,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13121:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "src": "13116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1024_by_1",
                "typeString": "int_const 1024"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54429,
            "nodeType": "VariableDeclaration",
            "src": "13129:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_11",
            "nameLocation": "13155:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54425,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13129:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2048_by_1",
                "typeString": "int_const 2048"
              },
              "id": 54428,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54426,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13166:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3131",
                "id": 54427,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13171:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_11_by_1",
                  "typeString": "int_const 11"
                },
                "value": "11"
              },
              "src": "13166:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2048_by_1",
                "typeString": "int_const 2048"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54434,
            "nodeType": "VariableDeclaration",
            "src": "13179:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_12",
            "nameLocation": "13205:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54430,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4096_by_1",
                "typeString": "int_const 4096"
              },
              "id": 54433,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54431,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13216:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3132",
                "id": 54432,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13221:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_12_by_1",
                  "typeString": "int_const 12"
                },
                "value": "12"
              },
              "src": "13216:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4096_by_1",
                "typeString": "int_const 4096"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54439,
            "nodeType": "VariableDeclaration",
            "src": "13229:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_13",
            "nameLocation": "13255:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54435,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13229:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_8192_by_1",
                "typeString": "int_const 8192"
              },
              "id": 54438,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54436,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13266:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3133",
                "id": 54437,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13271:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_13_by_1",
                  "typeString": "int_const 13"
                },
                "value": "13"
              },
              "src": "13266:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8192_by_1",
                "typeString": "int_const 8192"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54444,
            "nodeType": "VariableDeclaration",
            "src": "13279:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_14",
            "nameLocation": "13305:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54440,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13279:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_16384_by_1",
                "typeString": "int_const 16384"
              },
              "id": 54443,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54441,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13316:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3134",
                "id": 54442,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13321:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_14_by_1",
                  "typeString": "int_const 14"
                },
                "value": "14"
              },
              "src": "13316:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_16384_by_1",
                "typeString": "int_const 16384"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54449,
            "nodeType": "VariableDeclaration",
            "src": "13329:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_15",
            "nameLocation": "13355:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54445,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13329:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_32768_by_1",
                "typeString": "int_const 32768"
              },
              "id": 54448,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54446,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13366:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3135",
                "id": 54447,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13371:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_15_by_1",
                  "typeString": "int_const 15"
                },
                "value": "15"
              },
              "src": "13366:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_32768_by_1",
                "typeString": "int_const 32768"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54454,
            "nodeType": "VariableDeclaration",
            "src": "13379:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_16",
            "nameLocation": "13405:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54450,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_65536_by_1",
                "typeString": "int_const 65536"
              },
              "id": 54453,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54451,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13416:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3136",
                "id": 54452,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13421:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "13416:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_65536_by_1",
                "typeString": "int_const 65536"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54459,
            "nodeType": "VariableDeclaration",
            "src": "13429:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_17",
            "nameLocation": "13455:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54455,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13429:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_131072_by_1",
                "typeString": "int_const 131072"
              },
              "id": 54458,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54456,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13466:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3137",
                "id": 54457,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13471:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_17_by_1",
                  "typeString": "int_const 17"
                },
                "value": "17"
              },
              "src": "13466:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_131072_by_1",
                "typeString": "int_const 131072"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54464,
            "nodeType": "VariableDeclaration",
            "src": "13479:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_18",
            "nameLocation": "13505:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54460,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_262144_by_1",
                "typeString": "int_const 262144"
              },
              "id": 54463,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54461,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13516:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3138",
                "id": 54462,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13521:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "13516:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_262144_by_1",
                "typeString": "int_const 262144"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54469,
            "nodeType": "VariableDeclaration",
            "src": "13529:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_19",
            "nameLocation": "13555:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54465,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13529:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_524288_by_1",
                "typeString": "int_const 524288"
              },
              "id": 54468,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54466,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13566:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3139",
                "id": 54467,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13571:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_19_by_1",
                  "typeString": "int_const 19"
                },
                "value": "19"
              },
              "src": "13566:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_524288_by_1",
                "typeString": "int_const 524288"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54474,
            "nodeType": "VariableDeclaration",
            "src": "13579:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_20",
            "nameLocation": "13605:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54470,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13579:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1048576_by_1",
                "typeString": "int_const 1048576"
              },
              "id": 54473,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54471,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13616:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3230",
                "id": 54472,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13621:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_20_by_1",
                  "typeString": "int_const 20"
                },
                "value": "20"
              },
              "src": "13616:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1048576_by_1",
                "typeString": "int_const 1048576"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54479,
            "nodeType": "VariableDeclaration",
            "src": "13629:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_21",
            "nameLocation": "13655:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54475,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13629:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2097152_by_1",
                "typeString": "int_const 2097152"
              },
              "id": 54478,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54476,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13666:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3231",
                "id": 54477,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13671:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_21_by_1",
                  "typeString": "int_const 21"
                },
                "value": "21"
              },
              "src": "13666:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2097152_by_1",
                "typeString": "int_const 2097152"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54484,
            "nodeType": "VariableDeclaration",
            "src": "13679:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_22",
            "nameLocation": "13705:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54480,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13679:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4194304_by_1",
                "typeString": "int_const 4194304"
              },
              "id": 54483,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54481,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13716:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3232",
                "id": 54482,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13721:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_22_by_1",
                  "typeString": "int_const 22"
                },
                "value": "22"
              },
              "src": "13716:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4194304_by_1",
                "typeString": "int_const 4194304"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54489,
            "nodeType": "VariableDeclaration",
            "src": "13729:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_23",
            "nameLocation": "13755:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54485,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13729:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_8388608_by_1",
                "typeString": "int_const 8388608"
              },
              "id": 54488,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54486,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13766:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3233",
                "id": 54487,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13771:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_23_by_1",
                  "typeString": "int_const 23"
                },
                "value": "23"
              },
              "src": "13766:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8388608_by_1",
                "typeString": "int_const 8388608"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54494,
            "nodeType": "VariableDeclaration",
            "src": "13779:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_24",
            "nameLocation": "13805:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54490,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13779:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_16777216_by_1",
                "typeString": "int_const 16777216"
              },
              "id": 54493,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54491,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13816:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3234",
                "id": 54492,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13821:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_24_by_1",
                  "typeString": "int_const 24"
                },
                "value": "24"
              },
              "src": "13816:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_16777216_by_1",
                "typeString": "int_const 16777216"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54499,
            "nodeType": "VariableDeclaration",
            "src": "13829:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_25",
            "nameLocation": "13855:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54495,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13829:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_33554432_by_1",
                "typeString": "int_const 33554432"
              },
              "id": 54498,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54496,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13866:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3235",
                "id": 54497,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13871:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_25_by_1",
                  "typeString": "int_const 25"
                },
                "value": "25"
              },
              "src": "13866:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33554432_by_1",
                "typeString": "int_const 33554432"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54504,
            "nodeType": "VariableDeclaration",
            "src": "13879:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_26",
            "nameLocation": "13905:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54500,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13879:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_67108864_by_1",
                "typeString": "int_const 67108864"
              },
              "id": 54503,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54501,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13916:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3236",
                "id": 54502,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13921:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_26_by_1",
                  "typeString": "int_const 26"
                },
                "value": "26"
              },
              "src": "13916:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_67108864_by_1",
                "typeString": "int_const 67108864"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54509,
            "nodeType": "VariableDeclaration",
            "src": "13929:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_27",
            "nameLocation": "13955:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54505,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13929:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_134217728_by_1",
                "typeString": "int_const 134217728"
              },
              "id": 54508,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54506,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13966:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3237",
                "id": 54507,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "13971:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_27_by_1",
                  "typeString": "int_const 27"
                },
                "value": "27"
              },
              "src": "13966:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_134217728_by_1",
                "typeString": "int_const 134217728"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54514,
            "nodeType": "VariableDeclaration",
            "src": "13979:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_28",
            "nameLocation": "14005:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54510,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13979:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_268435456_by_1",
                "typeString": "int_const 268435456"
              },
              "id": 54513,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54511,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14016:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3238",
                "id": 54512,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14021:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_28_by_1",
                  "typeString": "int_const 28"
                },
                "value": "28"
              },
              "src": "14016:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_268435456_by_1",
                "typeString": "int_const 268435456"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54519,
            "nodeType": "VariableDeclaration",
            "src": "14029:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_29",
            "nameLocation": "14055:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54515,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14029:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_536870912_by_1",
                "typeString": "int_const 536870912"
              },
              "id": 54518,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54516,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14066:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3239",
                "id": 54517,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14071:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_29_by_1",
                  "typeString": "int_const 29"
                },
                "value": "29"
              },
              "src": "14066:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_536870912_by_1",
                "typeString": "int_const 536870912"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54524,
            "nodeType": "VariableDeclaration",
            "src": "14079:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_30",
            "nameLocation": "14105:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54520,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1073741824_by_1",
                "typeString": "int_const 1073741824"
              },
              "id": 54523,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54521,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14116:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3330",
                "id": 54522,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14121:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_30_by_1",
                  "typeString": "int_const 30"
                },
                "value": "30"
              },
              "src": "14116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1073741824_by_1",
                "typeString": "int_const 1073741824"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54529,
            "nodeType": "VariableDeclaration",
            "src": "14129:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_31",
            "nameLocation": "14155:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54525,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14129:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2147483648_by_1",
                "typeString": "int_const 2147483648"
              },
              "id": 54528,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54526,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14166:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3331",
                "id": 54527,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14171:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_31_by_1",
                  "typeString": "int_const 31"
                },
                "value": "31"
              },
              "src": "14166:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2147483648_by_1",
                "typeString": "int_const 2147483648"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54534,
            "nodeType": "VariableDeclaration",
            "src": "14179:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_32",
            "nameLocation": "14205:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54530,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4294967296_by_1",
                "typeString": "int_const 4294967296"
              },
              "id": 54533,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54531,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14216:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3332",
                "id": 54532,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14221:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_32_by_1",
                  "typeString": "int_const 32"
                },
                "value": "32"
              },
              "src": "14216:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4294967296_by_1",
                "typeString": "int_const 4294967296"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54539,
            "nodeType": "VariableDeclaration",
            "src": "14229:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_33",
            "nameLocation": "14255:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54535,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14229:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_8589934592_by_1",
                "typeString": "int_const 8589934592"
              },
              "id": 54538,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54536,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14266:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3333",
                "id": 54537,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14271:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_33_by_1",
                  "typeString": "int_const 33"
                },
                "value": "33"
              },
              "src": "14266:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8589934592_by_1",
                "typeString": "int_const 8589934592"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54544,
            "nodeType": "VariableDeclaration",
            "src": "14279:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_34",
            "nameLocation": "14305:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54540,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14279:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_17179869184_by_1",
                "typeString": "int_const 17179869184"
              },
              "id": 54543,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54541,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14316:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3334",
                "id": 54542,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14321:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_34_by_1",
                  "typeString": "int_const 34"
                },
                "value": "34"
              },
              "src": "14316:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_17179869184_by_1",
                "typeString": "int_const 17179869184"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54549,
            "nodeType": "VariableDeclaration",
            "src": "14329:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_35",
            "nameLocation": "14355:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54545,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14329:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_34359738368_by_1",
                "typeString": "int_const 34359738368"
              },
              "id": 54548,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54546,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14366:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3335",
                "id": 54547,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14371:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_35_by_1",
                  "typeString": "int_const 35"
                },
                "value": "35"
              },
              "src": "14366:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_34359738368_by_1",
                "typeString": "int_const 34359738368"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54554,
            "nodeType": "VariableDeclaration",
            "src": "14379:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_36",
            "nameLocation": "14405:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54550,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_68719476736_by_1",
                "typeString": "int_const 68719476736"
              },
              "id": 54553,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54551,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14416:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3336",
                "id": 54552,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14421:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_36_by_1",
                  "typeString": "int_const 36"
                },
                "value": "36"
              },
              "src": "14416:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_68719476736_by_1",
                "typeString": "int_const 68719476736"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54559,
            "nodeType": "VariableDeclaration",
            "src": "14429:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_37",
            "nameLocation": "14455:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54555,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14429:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_137438953472_by_1",
                "typeString": "int_const 137438953472"
              },
              "id": 54558,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54556,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14466:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3337",
                "id": 54557,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14471:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_37_by_1",
                  "typeString": "int_const 37"
                },
                "value": "37"
              },
              "src": "14466:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_137438953472_by_1",
                "typeString": "int_const 137438953472"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54564,
            "nodeType": "VariableDeclaration",
            "src": "14479:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_38",
            "nameLocation": "14505:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_274877906944_by_1",
                "typeString": "int_const 274877906944"
              },
              "id": 54563,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54561,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14516:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3338",
                "id": 54562,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14521:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_38_by_1",
                  "typeString": "int_const 38"
                },
                "value": "38"
              },
              "src": "14516:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_274877906944_by_1",
                "typeString": "int_const 274877906944"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54569,
            "nodeType": "VariableDeclaration",
            "src": "14529:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_39",
            "nameLocation": "14555:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54565,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14529:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_549755813888_by_1",
                "typeString": "int_const 549755813888"
              },
              "id": 54568,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54566,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14566:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3339",
                "id": 54567,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14571:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_39_by_1",
                  "typeString": "int_const 39"
                },
                "value": "39"
              },
              "src": "14566:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_549755813888_by_1",
                "typeString": "int_const 549755813888"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54574,
            "nodeType": "VariableDeclaration",
            "src": "14579:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_40",
            "nameLocation": "14605:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54570,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14579:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1099511627776_by_1",
                "typeString": "int_const 1099511627776"
              },
              "id": 54573,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54571,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14616:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3430",
                "id": 54572,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14621:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_40_by_1",
                  "typeString": "int_const 40"
                },
                "value": "40"
              },
              "src": "14616:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1099511627776_by_1",
                "typeString": "int_const 1099511627776"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54579,
            "nodeType": "VariableDeclaration",
            "src": "14629:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_41",
            "nameLocation": "14655:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54575,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14629:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2199023255552_by_1",
                "typeString": "int_const 2199023255552"
              },
              "id": 54578,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54576,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14666:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3431",
                "id": 54577,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14671:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_41_by_1",
                  "typeString": "int_const 41"
                },
                "value": "41"
              },
              "src": "14666:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2199023255552_by_1",
                "typeString": "int_const 2199023255552"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54584,
            "nodeType": "VariableDeclaration",
            "src": "14679:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_42",
            "nameLocation": "14705:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54580,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14679:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4398046511104_by_1",
                "typeString": "int_const 4398046511104"
              },
              "id": 54583,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54581,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14716:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3432",
                "id": 54582,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14721:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_42_by_1",
                  "typeString": "int_const 42"
                },
                "value": "42"
              },
              "src": "14716:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4398046511104_by_1",
                "typeString": "int_const 4398046511104"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54589,
            "nodeType": "VariableDeclaration",
            "src": "14729:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_43",
            "nameLocation": "14755:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54585,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14729:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_8796093022208_by_1",
                "typeString": "int_const 8796093022208"
              },
              "id": 54588,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54586,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14766:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3433",
                "id": 54587,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14771:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_43_by_1",
                  "typeString": "int_const 43"
                },
                "value": "43"
              },
              "src": "14766:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8796093022208_by_1",
                "typeString": "int_const 8796093022208"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54594,
            "nodeType": "VariableDeclaration",
            "src": "14779:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_44",
            "nameLocation": "14805:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54590,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14779:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_17592186044416_by_1",
                "typeString": "int_const 17592186044416"
              },
              "id": 54593,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54591,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14816:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3434",
                "id": 54592,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14821:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_44_by_1",
                  "typeString": "int_const 44"
                },
                "value": "44"
              },
              "src": "14816:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_17592186044416_by_1",
                "typeString": "int_const 17592186044416"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54599,
            "nodeType": "VariableDeclaration",
            "src": "14829:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_45",
            "nameLocation": "14855:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54595,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14829:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_35184372088832_by_1",
                "typeString": "int_const 35184372088832"
              },
              "id": 54598,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54596,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14866:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3435",
                "id": 54597,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14871:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_45_by_1",
                  "typeString": "int_const 45"
                },
                "value": "45"
              },
              "src": "14866:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_35184372088832_by_1",
                "typeString": "int_const 35184372088832"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54604,
            "nodeType": "VariableDeclaration",
            "src": "14879:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_46",
            "nameLocation": "14905:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54600,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14879:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_70368744177664_by_1",
                "typeString": "int_const 70368744177664"
              },
              "id": 54603,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54601,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14916:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3436",
                "id": 54602,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14921:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_46_by_1",
                  "typeString": "int_const 46"
                },
                "value": "46"
              },
              "src": "14916:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_70368744177664_by_1",
                "typeString": "int_const 70368744177664"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54609,
            "nodeType": "VariableDeclaration",
            "src": "14929:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_47",
            "nameLocation": "14955:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54605,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14929:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_140737488355328_by_1",
                "typeString": "int_const 140737488355328"
              },
              "id": 54608,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54606,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14966:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3437",
                "id": 54607,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "14971:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_47_by_1",
                  "typeString": "int_const 47"
                },
                "value": "47"
              },
              "src": "14966:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_140737488355328_by_1",
                "typeString": "int_const 140737488355328"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54614,
            "nodeType": "VariableDeclaration",
            "src": "14979:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_48",
            "nameLocation": "15005:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54610,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14979:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_281474976710656_by_1",
                "typeString": "int_const 281474976710656"
              },
              "id": 54613,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54611,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15016:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3438",
                "id": 54612,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15021:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_48_by_1",
                  "typeString": "int_const 48"
                },
                "value": "48"
              },
              "src": "15016:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_281474976710656_by_1",
                "typeString": "int_const 281474976710656"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54619,
            "nodeType": "VariableDeclaration",
            "src": "15029:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_49",
            "nameLocation": "15055:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54615,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15029:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_562949953421312_by_1",
                "typeString": "int_const 562949953421312"
              },
              "id": 54618,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54616,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15066:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3439",
                "id": 54617,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15071:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_49_by_1",
                  "typeString": "int_const 49"
                },
                "value": "49"
              },
              "src": "15066:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_562949953421312_by_1",
                "typeString": "int_const 562949953421312"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54624,
            "nodeType": "VariableDeclaration",
            "src": "15079:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_50",
            "nameLocation": "15105:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54620,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1125899906842624_by_1",
                "typeString": "int_const 1125899906842624"
              },
              "id": 54623,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54621,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15116:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3530",
                "id": 54622,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15121:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_50_by_1",
                  "typeString": "int_const 50"
                },
                "value": "50"
              },
              "src": "15116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1125899906842624_by_1",
                "typeString": "int_const 1125899906842624"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54629,
            "nodeType": "VariableDeclaration",
            "src": "15129:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_51",
            "nameLocation": "15155:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54625,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15129:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2251799813685248_by_1",
                "typeString": "int_const 2251799813685248"
              },
              "id": 54628,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54626,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15166:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3531",
                "id": 54627,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15171:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_51_by_1",
                  "typeString": "int_const 51"
                },
                "value": "51"
              },
              "src": "15166:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2251799813685248_by_1",
                "typeString": "int_const 2251799813685248"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54634,
            "nodeType": "VariableDeclaration",
            "src": "15179:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_52",
            "nameLocation": "15205:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54630,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4503599627370496_by_1",
                "typeString": "int_const 4503599627370496"
              },
              "id": 54633,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54631,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15216:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3532",
                "id": 54632,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15221:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_52_by_1",
                  "typeString": "int_const 52"
                },
                "value": "52"
              },
              "src": "15216:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4503599627370496_by_1",
                "typeString": "int_const 4503599627370496"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54639,
            "nodeType": "VariableDeclaration",
            "src": "15229:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_53",
            "nameLocation": "15255:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54635,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15229:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_9007199254740992_by_1",
                "typeString": "int_const 9007199254740992"
              },
              "id": 54638,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54636,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15266:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3533",
                "id": 54637,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15271:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_53_by_1",
                  "typeString": "int_const 53"
                },
                "value": "53"
              },
              "src": "15266:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9007199254740992_by_1",
                "typeString": "int_const 9007199254740992"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54644,
            "nodeType": "VariableDeclaration",
            "src": "15279:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_54",
            "nameLocation": "15305:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54640,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15279:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_18014398509481984_by_1",
                "typeString": "int_const 18014398509481984"
              },
              "id": 54643,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54641,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15316:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3534",
                "id": 54642,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15321:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_54_by_1",
                  "typeString": "int_const 54"
                },
                "value": "54"
              },
              "src": "15316:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18014398509481984_by_1",
                "typeString": "int_const 18014398509481984"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54649,
            "nodeType": "VariableDeclaration",
            "src": "15329:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_55",
            "nameLocation": "15355:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54645,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15329:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_36028797018963968_by_1",
                "typeString": "int_const 36028797018963968"
              },
              "id": 54648,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54646,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15366:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3535",
                "id": 54647,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15371:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_55_by_1",
                  "typeString": "int_const 55"
                },
                "value": "55"
              },
              "src": "15366:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_36028797018963968_by_1",
                "typeString": "int_const 36028797018963968"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54654,
            "nodeType": "VariableDeclaration",
            "src": "15379:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_56",
            "nameLocation": "15405:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54650,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_72057594037927936_by_1",
                "typeString": "int_const 72057594037927936"
              },
              "id": 54653,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54651,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15416:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3536",
                "id": 54652,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15421:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_56_by_1",
                  "typeString": "int_const 56"
                },
                "value": "56"
              },
              "src": "15416:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_72057594037927936_by_1",
                "typeString": "int_const 72057594037927936"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54659,
            "nodeType": "VariableDeclaration",
            "src": "15429:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_57",
            "nameLocation": "15455:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54655,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15429:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_144115188075855872_by_1",
                "typeString": "int_const 144115188075855872"
              },
              "id": 54658,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54656,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15466:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3537",
                "id": 54657,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15471:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_57_by_1",
                  "typeString": "int_const 57"
                },
                "value": "57"
              },
              "src": "15466:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_144115188075855872_by_1",
                "typeString": "int_const 144115188075855872"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54664,
            "nodeType": "VariableDeclaration",
            "src": "15479:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_58",
            "nameLocation": "15505:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54660,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_288230376151711744_by_1",
                "typeString": "int_const 288230376151711744"
              },
              "id": 54663,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54661,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15516:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3538",
                "id": 54662,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15521:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_58_by_1",
                  "typeString": "int_const 58"
                },
                "value": "58"
              },
              "src": "15516:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_288230376151711744_by_1",
                "typeString": "int_const 288230376151711744"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54669,
            "nodeType": "VariableDeclaration",
            "src": "15529:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_59",
            "nameLocation": "15555:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54665,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15529:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_576460752303423488_by_1",
                "typeString": "int_const 576460752303423488"
              },
              "id": 54668,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54666,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15566:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3539",
                "id": 54667,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15571:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_59_by_1",
                  "typeString": "int_const 59"
                },
                "value": "59"
              },
              "src": "15566:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_576460752303423488_by_1",
                "typeString": "int_const 576460752303423488"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54674,
            "nodeType": "VariableDeclaration",
            "src": "15579:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_60",
            "nameLocation": "15605:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54670,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15579:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1152921504606846976_by_1",
                "typeString": "int_const 1152921504606846976"
              },
              "id": 54673,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54671,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15616:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3630",
                "id": 54672,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15621:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_60_by_1",
                  "typeString": "int_const 60"
                },
                "value": "60"
              },
              "src": "15616:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1152921504606846976_by_1",
                "typeString": "int_const 1152921504606846976"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54679,
            "nodeType": "VariableDeclaration",
            "src": "15629:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_61",
            "nameLocation": "15655:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54675,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15629:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2305843009213693952_by_1",
                "typeString": "int_const 2305843009213693952"
              },
              "id": 54678,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54676,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15666:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3631",
                "id": 54677,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15671:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_61_by_1",
                  "typeString": "int_const 61"
                },
                "value": "61"
              },
              "src": "15666:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2305843009213693952_by_1",
                "typeString": "int_const 2305843009213693952"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54684,
            "nodeType": "VariableDeclaration",
            "src": "15679:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_62",
            "nameLocation": "15705:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54680,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15679:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4611686018427387904_by_1",
                "typeString": "int_const 4611686018427387904"
              },
              "id": 54683,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54681,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15716:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3632",
                "id": 54682,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15721:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_62_by_1",
                  "typeString": "int_const 62"
                },
                "value": "62"
              },
              "src": "15716:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4611686018427387904_by_1",
                "typeString": "int_const 4611686018427387904"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54689,
            "nodeType": "VariableDeclaration",
            "src": "15729:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_63",
            "nameLocation": "15755:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54685,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15729:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_9223372036854775808_by_1",
                "typeString": "int_const 9223372036854775808"
              },
              "id": 54688,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54686,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15766:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3633",
                "id": 54687,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15771:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_63_by_1",
                  "typeString": "int_const 63"
                },
                "value": "63"
              },
              "src": "15766:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9223372036854775808_by_1",
                "typeString": "int_const 9223372036854775808"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54694,
            "nodeType": "VariableDeclaration",
            "src": "15779:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_64",
            "nameLocation": "15805:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54690,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15779:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              },
              "id": 54693,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54691,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15816:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3634",
                "id": 54692,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15821:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_64_by_1",
                  "typeString": "int_const 64"
                },
                "value": "64"
              },
              "src": "15816:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54699,
            "nodeType": "VariableDeclaration",
            "src": "15829:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_65",
            "nameLocation": "15855:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54695,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15829:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_36893488147419103232_by_1",
                "typeString": "int_const 36893488147419103232"
              },
              "id": 54698,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54696,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15866:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3635",
                "id": 54697,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15871:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_65_by_1",
                  "typeString": "int_const 65"
                },
                "value": "65"
              },
              "src": "15866:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_36893488147419103232_by_1",
                "typeString": "int_const 36893488147419103232"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54704,
            "nodeType": "VariableDeclaration",
            "src": "15879:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_66",
            "nameLocation": "15905:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54700,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15879:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_73786976294838206464_by_1",
                "typeString": "int_const 73786976294838206464"
              },
              "id": 54703,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54701,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15916:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3636",
                "id": 54702,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15921:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_66_by_1",
                  "typeString": "int_const 66"
                },
                "value": "66"
              },
              "src": "15916:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_73786976294838206464_by_1",
                "typeString": "int_const 73786976294838206464"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54709,
            "nodeType": "VariableDeclaration",
            "src": "15929:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_67",
            "nameLocation": "15955:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54705,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15929:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_147573952589676412928_by_1",
                "typeString": "int_const 147573952589676412928"
              },
              "id": 54708,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54706,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15966:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3637",
                "id": 54707,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "15971:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_67_by_1",
                  "typeString": "int_const 67"
                },
                "value": "67"
              },
              "src": "15966:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_147573952589676412928_by_1",
                "typeString": "int_const 147573952589676412928"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54714,
            "nodeType": "VariableDeclaration",
            "src": "15979:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_68",
            "nameLocation": "16005:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54710,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15979:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_295147905179352825856_by_1",
                "typeString": "int_const 295147905179352825856"
              },
              "id": 54713,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54711,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16016:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3638",
                "id": 54712,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16021:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_68_by_1",
                  "typeString": "int_const 68"
                },
                "value": "68"
              },
              "src": "16016:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_295147905179352825856_by_1",
                "typeString": "int_const 295147905179352825856"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54719,
            "nodeType": "VariableDeclaration",
            "src": "16029:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_69",
            "nameLocation": "16055:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54715,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16029:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_590295810358705651712_by_1",
                "typeString": "int_const 590295810358705651712"
              },
              "id": 54718,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54716,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16066:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3639",
                "id": 54717,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16071:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_69_by_1",
                  "typeString": "int_const 69"
                },
                "value": "69"
              },
              "src": "16066:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_590295810358705651712_by_1",
                "typeString": "int_const 590295810358705651712"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54724,
            "nodeType": "VariableDeclaration",
            "src": "16079:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_70",
            "nameLocation": "16105:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54720,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1180591620717411303424_by_1",
                "typeString": "int_const 1180591620717411303424"
              },
              "id": 54723,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54721,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16116:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3730",
                "id": 54722,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16121:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_70_by_1",
                  "typeString": "int_const 70"
                },
                "value": "70"
              },
              "src": "16116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1180591620717411303424_by_1",
                "typeString": "int_const 1180591620717411303424"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54729,
            "nodeType": "VariableDeclaration",
            "src": "16129:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_71",
            "nameLocation": "16155:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54725,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16129:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2361183241434822606848_by_1",
                "typeString": "int_const 2361183241434822606848"
              },
              "id": 54728,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54726,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16166:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3731",
                "id": 54727,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16171:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_71_by_1",
                  "typeString": "int_const 71"
                },
                "value": "71"
              },
              "src": "16166:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2361183241434822606848_by_1",
                "typeString": "int_const 2361183241434822606848"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54734,
            "nodeType": "VariableDeclaration",
            "src": "16179:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_72",
            "nameLocation": "16205:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54730,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4722366482869645213696_by_1",
                "typeString": "int_const 4722366482869645213696"
              },
              "id": 54733,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54731,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16216:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3732",
                "id": 54732,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16221:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_72_by_1",
                  "typeString": "int_const 72"
                },
                "value": "72"
              },
              "src": "16216:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4722366482869645213696_by_1",
                "typeString": "int_const 4722366482869645213696"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54739,
            "nodeType": "VariableDeclaration",
            "src": "16229:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_73",
            "nameLocation": "16255:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54735,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16229:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_9444732965739290427392_by_1",
                "typeString": "int_const 9444732965739290427392"
              },
              "id": 54738,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54736,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16266:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3733",
                "id": 54737,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16271:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_73_by_1",
                  "typeString": "int_const 73"
                },
                "value": "73"
              },
              "src": "16266:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9444732965739290427392_by_1",
                "typeString": "int_const 9444732965739290427392"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54744,
            "nodeType": "VariableDeclaration",
            "src": "16279:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_74",
            "nameLocation": "16305:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54740,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16279:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_18889465931478580854784_by_1",
                "typeString": "int_const 18889465931478580854784"
              },
              "id": 54743,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54741,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16316:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3734",
                "id": 54742,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16321:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_74_by_1",
                  "typeString": "int_const 74"
                },
                "value": "74"
              },
              "src": "16316:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18889465931478580854784_by_1",
                "typeString": "int_const 18889465931478580854784"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54749,
            "nodeType": "VariableDeclaration",
            "src": "16329:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_75",
            "nameLocation": "16355:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54745,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16329:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_37778931862957161709568_by_1",
                "typeString": "int_const 37778931862957161709568"
              },
              "id": 54748,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54746,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16366:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3735",
                "id": 54747,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16371:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_75_by_1",
                  "typeString": "int_const 75"
                },
                "value": "75"
              },
              "src": "16366:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_37778931862957161709568_by_1",
                "typeString": "int_const 37778931862957161709568"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54754,
            "nodeType": "VariableDeclaration",
            "src": "16379:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_76",
            "nameLocation": "16405:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54750,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_75557863725914323419136_by_1",
                "typeString": "int_const 75557863725914323419136"
              },
              "id": 54753,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54751,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16416:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3736",
                "id": 54752,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16421:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_76_by_1",
                  "typeString": "int_const 76"
                },
                "value": "76"
              },
              "src": "16416:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_75557863725914323419136_by_1",
                "typeString": "int_const 75557863725914323419136"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54759,
            "nodeType": "VariableDeclaration",
            "src": "16429:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_77",
            "nameLocation": "16455:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54755,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16429:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_151115727451828646838272_by_1",
                "typeString": "int_const 151115727451828646838272"
              },
              "id": 54758,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54756,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16466:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3737",
                "id": 54757,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16471:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_77_by_1",
                  "typeString": "int_const 77"
                },
                "value": "77"
              },
              "src": "16466:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_151115727451828646838272_by_1",
                "typeString": "int_const 151115727451828646838272"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54764,
            "nodeType": "VariableDeclaration",
            "src": "16479:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_78",
            "nameLocation": "16505:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54760,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_302231454903657293676544_by_1",
                "typeString": "int_const 302231454903657293676544"
              },
              "id": 54763,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54761,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16516:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3738",
                "id": 54762,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16521:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_78_by_1",
                  "typeString": "int_const 78"
                },
                "value": "78"
              },
              "src": "16516:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_302231454903657293676544_by_1",
                "typeString": "int_const 302231454903657293676544"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54769,
            "nodeType": "VariableDeclaration",
            "src": "16529:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_79",
            "nameLocation": "16555:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54765,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16529:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_604462909807314587353088_by_1",
                "typeString": "int_const 604462909807314587353088"
              },
              "id": 54768,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54766,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16566:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3739",
                "id": 54767,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16571:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_79_by_1",
                  "typeString": "int_const 79"
                },
                "value": "79"
              },
              "src": "16566:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_604462909807314587353088_by_1",
                "typeString": "int_const 604462909807314587353088"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54774,
            "nodeType": "VariableDeclaration",
            "src": "16579:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_80",
            "nameLocation": "16605:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54770,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16579:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1208925819614629174706176_by_1",
                "typeString": "int_const 1208925819614629174706176"
              },
              "id": 54773,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54771,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16616:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3830",
                "id": 54772,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16621:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_80_by_1",
                  "typeString": "int_const 80"
                },
                "value": "80"
              },
              "src": "16616:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1208925819614629174706176_by_1",
                "typeString": "int_const 1208925819614629174706176"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54779,
            "nodeType": "VariableDeclaration",
            "src": "16629:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_81",
            "nameLocation": "16655:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54775,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16629:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2417851639229258349412352_by_1",
                "typeString": "int_const 2417851639229258349412352"
              },
              "id": 54778,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54776,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16666:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3831",
                "id": 54777,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16671:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_81_by_1",
                  "typeString": "int_const 81"
                },
                "value": "81"
              },
              "src": "16666:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2417851639229258349412352_by_1",
                "typeString": "int_const 2417851639229258349412352"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54784,
            "nodeType": "VariableDeclaration",
            "src": "16679:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_82",
            "nameLocation": "16705:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54780,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16679:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4835703278458516698824704_by_1",
                "typeString": "int_const 4835703278458516698824704"
              },
              "id": 54783,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54781,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16716:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3832",
                "id": 54782,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16721:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_82_by_1",
                  "typeString": "int_const 82"
                },
                "value": "82"
              },
              "src": "16716:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4835703278458516698824704_by_1",
                "typeString": "int_const 4835703278458516698824704"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54789,
            "nodeType": "VariableDeclaration",
            "src": "16729:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_83",
            "nameLocation": "16755:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54785,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16729:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_9671406556917033397649408_by_1",
                "typeString": "int_const 9671406556917033397649408"
              },
              "id": 54788,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54786,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16766:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3833",
                "id": 54787,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16771:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_83_by_1",
                  "typeString": "int_const 83"
                },
                "value": "83"
              },
              "src": "16766:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9671406556917033397649408_by_1",
                "typeString": "int_const 9671406556917033397649408"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54794,
            "nodeType": "VariableDeclaration",
            "src": "16779:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_84",
            "nameLocation": "16805:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54790,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16779:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_19342813113834066795298816_by_1",
                "typeString": "int_const 19342813113834066795298816"
              },
              "id": 54793,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54791,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16816:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3834",
                "id": 54792,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16821:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_84_by_1",
                  "typeString": "int_const 84"
                },
                "value": "84"
              },
              "src": "16816:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_19342813113834066795298816_by_1",
                "typeString": "int_const 19342813113834066795298816"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54799,
            "nodeType": "VariableDeclaration",
            "src": "16829:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_85",
            "nameLocation": "16855:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54795,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16829:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_38685626227668133590597632_by_1",
                "typeString": "int_const 38685626227668133590597632"
              },
              "id": 54798,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54796,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16866:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3835",
                "id": 54797,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16871:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_85_by_1",
                  "typeString": "int_const 85"
                },
                "value": "85"
              },
              "src": "16866:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_38685626227668133590597632_by_1",
                "typeString": "int_const 38685626227668133590597632"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54804,
            "nodeType": "VariableDeclaration",
            "src": "16879:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_86",
            "nameLocation": "16905:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54800,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16879:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_77371252455336267181195264_by_1",
                "typeString": "int_const 77371252455336267181195264"
              },
              "id": 54803,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54801,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16916:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3836",
                "id": 54802,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16921:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_86_by_1",
                  "typeString": "int_const 86"
                },
                "value": "86"
              },
              "src": "16916:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_77371252455336267181195264_by_1",
                "typeString": "int_const 77371252455336267181195264"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54809,
            "nodeType": "VariableDeclaration",
            "src": "16929:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_87",
            "nameLocation": "16955:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54805,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16929:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_154742504910672534362390528_by_1",
                "typeString": "int_const 154742504910672534362390528"
              },
              "id": 54808,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54806,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16966:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3837",
                "id": 54807,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "16971:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_87_by_1",
                  "typeString": "int_const 87"
                },
                "value": "87"
              },
              "src": "16966:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_154742504910672534362390528_by_1",
                "typeString": "int_const 154742504910672534362390528"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54814,
            "nodeType": "VariableDeclaration",
            "src": "16979:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_88",
            "nameLocation": "17005:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54810,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "16979:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_309485009821345068724781056_by_1",
                "typeString": "int_const 309485009821345068724781056"
              },
              "id": 54813,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54811,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17016:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3838",
                "id": 54812,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17021:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_88_by_1",
                  "typeString": "int_const 88"
                },
                "value": "88"
              },
              "src": "17016:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_309485009821345068724781056_by_1",
                "typeString": "int_const 309485009821345068724781056"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54819,
            "nodeType": "VariableDeclaration",
            "src": "17029:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_89",
            "nameLocation": "17055:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54815,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17029:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_618970019642690137449562112_by_1",
                "typeString": "int_const 618970019642690137449562112"
              },
              "id": 54818,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54816,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17066:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3839",
                "id": 54817,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17071:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_89_by_1",
                  "typeString": "int_const 89"
                },
                "value": "89"
              },
              "src": "17066:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_618970019642690137449562112_by_1",
                "typeString": "int_const 618970019642690137449562112"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54824,
            "nodeType": "VariableDeclaration",
            "src": "17079:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_90",
            "nameLocation": "17105:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54820,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1237940039285380274899124224_by_1",
                "typeString": "int_const 1237940039285380274899124224"
              },
              "id": 54823,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54821,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17116:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3930",
                "id": 54822,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17121:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_90_by_1",
                  "typeString": "int_const 90"
                },
                "value": "90"
              },
              "src": "17116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1237940039285380274899124224_by_1",
                "typeString": "int_const 1237940039285380274899124224"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54829,
            "nodeType": "VariableDeclaration",
            "src": "17129:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_91",
            "nameLocation": "17155:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54825,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17129:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2475880078570760549798248448_by_1",
                "typeString": "int_const 2475880078570760549798248448"
              },
              "id": 54828,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54826,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17166:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3931",
                "id": 54827,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17171:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_91_by_1",
                  "typeString": "int_const 91"
                },
                "value": "91"
              },
              "src": "17166:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2475880078570760549798248448_by_1",
                "typeString": "int_const 2475880078570760549798248448"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54834,
            "nodeType": "VariableDeclaration",
            "src": "17179:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_92",
            "nameLocation": "17205:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54830,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_4951760157141521099596496896_by_1",
                "typeString": "int_const 4951760157141521099596496896"
              },
              "id": 54833,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54831,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17216:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3932",
                "id": 54832,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17221:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_92_by_1",
                  "typeString": "int_const 92"
                },
                "value": "92"
              },
              "src": "17216:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4951760157141521099596496896_by_1",
                "typeString": "int_const 4951760157141521099596496896"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54839,
            "nodeType": "VariableDeclaration",
            "src": "17229:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_93",
            "nameLocation": "17255:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54835,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17229:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_9903520314283042199192993792_by_1",
                "typeString": "int_const 9903520314283042199192993792"
              },
              "id": 54838,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54836,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17266:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3933",
                "id": 54837,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17271:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_93_by_1",
                  "typeString": "int_const 93"
                },
                "value": "93"
              },
              "src": "17266:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9903520314283042199192993792_by_1",
                "typeString": "int_const 9903520314283042199192993792"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54844,
            "nodeType": "VariableDeclaration",
            "src": "17279:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_94",
            "nameLocation": "17305:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54840,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17279:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_19807040628566084398385987584_by_1",
                "typeString": "int_const 19807040628566084398385987584"
              },
              "id": 54843,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54841,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17316:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3934",
                "id": 54842,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17321:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_94_by_1",
                  "typeString": "int_const 94"
                },
                "value": "94"
              },
              "src": "17316:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_19807040628566084398385987584_by_1",
                "typeString": "int_const 19807040628566084398385987584"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54849,
            "nodeType": "VariableDeclaration",
            "src": "17329:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_95",
            "nameLocation": "17355:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54845,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17329:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                "typeString": "int_const 39614081257132168796771975168"
              },
              "id": 54848,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54846,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17366:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3935",
                "id": 54847,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17371:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_95_by_1",
                  "typeString": "int_const 95"
                },
                "value": "95"
              },
              "src": "17366:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                "typeString": "int_const 39614081257132168796771975168"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54854,
            "nodeType": "VariableDeclaration",
            "src": "17379:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_96",
            "nameLocation": "17405:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54850,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_79228162514264337593543950336_by_1",
                "typeString": "int_const 79228162514264337593543950336"
              },
              "id": 54853,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54851,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17416:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3936",
                "id": 54852,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17421:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_96_by_1",
                  "typeString": "int_const 96"
                },
                "value": "96"
              },
              "src": "17416:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_79228162514264337593543950336_by_1",
                "typeString": "int_const 79228162514264337593543950336"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54859,
            "nodeType": "VariableDeclaration",
            "src": "17429:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_97",
            "nameLocation": "17455:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54855,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17429:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_158456325028528675187087900672_by_1",
                "typeString": "int_const 158456325028528675187087900672"
              },
              "id": 54858,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54856,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17466:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3937",
                "id": 54857,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17471:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_97_by_1",
                  "typeString": "int_const 97"
                },
                "value": "97"
              },
              "src": "17466:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_158456325028528675187087900672_by_1",
                "typeString": "int_const 158456325028528675187087900672"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54864,
            "nodeType": "VariableDeclaration",
            "src": "17479:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_98",
            "nameLocation": "17505:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54860,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_316912650057057350374175801344_by_1",
                "typeString": "int_const 316912650057057350374175801344"
              },
              "id": 54863,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54861,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17516:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3938",
                "id": 54862,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17521:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_98_by_1",
                  "typeString": "int_const 98"
                },
                "value": "98"
              },
              "src": "17516:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_316912650057057350374175801344_by_1",
                "typeString": "int_const 316912650057057350374175801344"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54869,
            "nodeType": "VariableDeclaration",
            "src": "17529:44:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_99",
            "nameLocation": "17555:8:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54865,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17529:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_633825300114114700748351602688_by_1",
                "typeString": "int_const 633825300114114700748351602688"
              },
              "id": 54868,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54866,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17566:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "3939",
                "id": 54867,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17571:2:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_99_by_1",
                  "typeString": "int_const 99"
                },
                "value": "99"
              },
              "src": "17566:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_633825300114114700748351602688_by_1",
                "typeString": "int_const 633825300114114700748351602688"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54874,
            "nodeType": "VariableDeclaration",
            "src": "17579:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_100",
            "nameLocation": "17605:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54870,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17579:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1267650600228229401496703205376_by_1",
                "typeString": "int_const 1267650600228229401496703205376"
              },
              "id": 54873,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54871,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17617:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313030",
                "id": 54872,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17622:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100_by_1",
                  "typeString": "int_const 100"
                },
                "value": "100"
              },
              "src": "17617:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1267650600228229401496703205376_by_1",
                "typeString": "int_const 1267650600228229401496703205376"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54879,
            "nodeType": "VariableDeclaration",
            "src": "17631:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_101",
            "nameLocation": "17657:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54875,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17631:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2535301200456458802993406410752_by_1",
                "typeString": "int_const 2535301200456458802993406410752"
              },
              "id": 54878,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54876,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17669:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313031",
                "id": 54877,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17674:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_101_by_1",
                  "typeString": "int_const 101"
                },
                "value": "101"
              },
              "src": "17669:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2535301200456458802993406410752_by_1",
                "typeString": "int_const 2535301200456458802993406410752"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54884,
            "nodeType": "VariableDeclaration",
            "src": "17683:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_102",
            "nameLocation": "17709:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54880,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17683:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5070602400912917605986812821504_by_1",
                "typeString": "int_const 5070602400912917605986812821504"
              },
              "id": 54883,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54881,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17721:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313032",
                "id": 54882,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17726:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_102_by_1",
                  "typeString": "int_const 102"
                },
                "value": "102"
              },
              "src": "17721:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5070602400912917605986812821504_by_1",
                "typeString": "int_const 5070602400912917605986812821504"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54889,
            "nodeType": "VariableDeclaration",
            "src": "17735:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_103",
            "nameLocation": "17761:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54885,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17735:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_10141204801825835211973625643008_by_1",
                "typeString": "int_const 10141204801825835211973625643008"
              },
              "id": 54888,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54886,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17773:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313033",
                "id": 54887,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17778:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_103_by_1",
                  "typeString": "int_const 103"
                },
                "value": "103"
              },
              "src": "17773:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10141204801825835211973625643008_by_1",
                "typeString": "int_const 10141204801825835211973625643008"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54894,
            "nodeType": "VariableDeclaration",
            "src": "17787:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_104",
            "nameLocation": "17813:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54890,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17787:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_20282409603651670423947251286016_by_1",
                "typeString": "int_const 20282409603651670423947251286016"
              },
              "id": 54893,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54891,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17825:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313034",
                "id": 54892,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17830:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_104_by_1",
                  "typeString": "int_const 104"
                },
                "value": "104"
              },
              "src": "17825:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_20282409603651670423947251286016_by_1",
                "typeString": "int_const 20282409603651670423947251286016"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54899,
            "nodeType": "VariableDeclaration",
            "src": "17839:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_105",
            "nameLocation": "17865:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54895,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17839:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_40564819207303340847894502572032_by_1",
                "typeString": "int_const 40564819207303340847894502572032"
              },
              "id": 54898,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54896,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17877:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313035",
                "id": 54897,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17882:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_105_by_1",
                  "typeString": "int_const 105"
                },
                "value": "105"
              },
              "src": "17877:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_40564819207303340847894502572032_by_1",
                "typeString": "int_const 40564819207303340847894502572032"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54904,
            "nodeType": "VariableDeclaration",
            "src": "17891:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_106",
            "nameLocation": "17917:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54900,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17891:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_81129638414606681695789005144064_by_1",
                "typeString": "int_const 81129638414606681695789005144064"
              },
              "id": 54903,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54901,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17929:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313036",
                "id": 54902,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17934:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_106_by_1",
                  "typeString": "int_const 106"
                },
                "value": "106"
              },
              "src": "17929:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_81129638414606681695789005144064_by_1",
                "typeString": "int_const 81129638414606681695789005144064"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54909,
            "nodeType": "VariableDeclaration",
            "src": "17943:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_107",
            "nameLocation": "17969:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54905,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17943:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_162259276829213363391578010288128_by_1",
                "typeString": "int_const 1622...(25 digits omitted)...8128"
              },
              "id": 54908,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54906,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17981:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313037",
                "id": 54907,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "17986:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_107_by_1",
                  "typeString": "int_const 107"
                },
                "value": "107"
              },
              "src": "17981:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_162259276829213363391578010288128_by_1",
                "typeString": "int_const 1622...(25 digits omitted)...8128"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54914,
            "nodeType": "VariableDeclaration",
            "src": "17995:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_108",
            "nameLocation": "18021:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54910,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "17995:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_324518553658426726783156020576256_by_1",
                "typeString": "int_const 3245...(25 digits omitted)...6256"
              },
              "id": 54913,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54911,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18033:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313038",
                "id": 54912,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18038:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_108_by_1",
                  "typeString": "int_const 108"
                },
                "value": "108"
              },
              "src": "18033:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_324518553658426726783156020576256_by_1",
                "typeString": "int_const 3245...(25 digits omitted)...6256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54919,
            "nodeType": "VariableDeclaration",
            "src": "18047:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_109",
            "nameLocation": "18073:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54915,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18047:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_649037107316853453566312041152512_by_1",
                "typeString": "int_const 6490...(25 digits omitted)...2512"
              },
              "id": 54918,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54916,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18085:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313039",
                "id": 54917,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18090:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_109_by_1",
                  "typeString": "int_const 109"
                },
                "value": "109"
              },
              "src": "18085:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_649037107316853453566312041152512_by_1",
                "typeString": "int_const 6490...(25 digits omitted)...2512"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54924,
            "nodeType": "VariableDeclaration",
            "src": "18099:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_110",
            "nameLocation": "18125:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54920,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18099:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1298074214633706907132624082305024_by_1",
                "typeString": "int_const 1298...(26 digits omitted)...5024"
              },
              "id": 54923,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54921,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18137:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313130",
                "id": 54922,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18142:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_110_by_1",
                  "typeString": "int_const 110"
                },
                "value": "110"
              },
              "src": "18137:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1298074214633706907132624082305024_by_1",
                "typeString": "int_const 1298...(26 digits omitted)...5024"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54929,
            "nodeType": "VariableDeclaration",
            "src": "18151:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_111",
            "nameLocation": "18177:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54925,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18151:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2596148429267413814265248164610048_by_1",
                "typeString": "int_const 2596...(26 digits omitted)...0048"
              },
              "id": 54928,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54926,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18189:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313131",
                "id": 54927,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18194:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_111_by_1",
                  "typeString": "int_const 111"
                },
                "value": "111"
              },
              "src": "18189:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2596148429267413814265248164610048_by_1",
                "typeString": "int_const 2596...(26 digits omitted)...0048"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54934,
            "nodeType": "VariableDeclaration",
            "src": "18203:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_112",
            "nameLocation": "18229:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54930,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18203:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                "typeString": "int_const 5192...(26 digits omitted)...0096"
              },
              "id": 54933,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54931,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18241:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313132",
                "id": 54932,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18246:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_112_by_1",
                  "typeString": "int_const 112"
                },
                "value": "112"
              },
              "src": "18241:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                "typeString": "int_const 5192...(26 digits omitted)...0096"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54939,
            "nodeType": "VariableDeclaration",
            "src": "18255:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_113",
            "nameLocation": "18281:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54935,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18255:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_10384593717069655257060992658440192_by_1",
                "typeString": "int_const 1038...(27 digits omitted)...0192"
              },
              "id": 54938,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54936,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18293:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313133",
                "id": 54937,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18298:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_113_by_1",
                  "typeString": "int_const 113"
                },
                "value": "113"
              },
              "src": "18293:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10384593717069655257060992658440192_by_1",
                "typeString": "int_const 1038...(27 digits omitted)...0192"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54944,
            "nodeType": "VariableDeclaration",
            "src": "18307:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_114",
            "nameLocation": "18333:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18307:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_20769187434139310514121985316880384_by_1",
                "typeString": "int_const 2076...(27 digits omitted)...0384"
              },
              "id": 54943,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54941,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18345:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313134",
                "id": 54942,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18350:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_114_by_1",
                  "typeString": "int_const 114"
                },
                "value": "114"
              },
              "src": "18345:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_20769187434139310514121985316880384_by_1",
                "typeString": "int_const 2076...(27 digits omitted)...0384"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54949,
            "nodeType": "VariableDeclaration",
            "src": "18359:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_115",
            "nameLocation": "18385:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54945,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18359:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_41538374868278621028243970633760768_by_1",
                "typeString": "int_const 4153...(27 digits omitted)...0768"
              },
              "id": 54948,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54946,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18397:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313135",
                "id": 54947,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18402:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115_by_1",
                  "typeString": "int_const 115"
                },
                "value": "115"
              },
              "src": "18397:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_41538374868278621028243970633760768_by_1",
                "typeString": "int_const 4153...(27 digits omitted)...0768"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54954,
            "nodeType": "VariableDeclaration",
            "src": "18411:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_116",
            "nameLocation": "18437:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54950,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18411:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_83076749736557242056487941267521536_by_1",
                "typeString": "int_const 8307...(27 digits omitted)...1536"
              },
              "id": 54953,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54951,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18449:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313136",
                "id": 54952,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18454:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_116_by_1",
                  "typeString": "int_const 116"
                },
                "value": "116"
              },
              "src": "18449:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_83076749736557242056487941267521536_by_1",
                "typeString": "int_const 8307...(27 digits omitted)...1536"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54959,
            "nodeType": "VariableDeclaration",
            "src": "18463:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_117",
            "nameLocation": "18489:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54955,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18463:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_166153499473114484112975882535043072_by_1",
                "typeString": "int_const 1661...(28 digits omitted)...3072"
              },
              "id": 54958,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54956,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18501:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313137",
                "id": 54957,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18506:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_117_by_1",
                  "typeString": "int_const 117"
                },
                "value": "117"
              },
              "src": "18501:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_166153499473114484112975882535043072_by_1",
                "typeString": "int_const 1661...(28 digits omitted)...3072"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54964,
            "nodeType": "VariableDeclaration",
            "src": "18515:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_118",
            "nameLocation": "18541:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54960,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18515:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_332306998946228968225951765070086144_by_1",
                "typeString": "int_const 3323...(28 digits omitted)...6144"
              },
              "id": 54963,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54961,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18553:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313138",
                "id": 54962,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18558:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_118_by_1",
                  "typeString": "int_const 118"
                },
                "value": "118"
              },
              "src": "18553:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_332306998946228968225951765070086144_by_1",
                "typeString": "int_const 3323...(28 digits omitted)...6144"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54969,
            "nodeType": "VariableDeclaration",
            "src": "18567:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_119",
            "nameLocation": "18593:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54965,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18567:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_664613997892457936451903530140172288_by_1",
                "typeString": "int_const 6646...(28 digits omitted)...2288"
              },
              "id": 54968,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54966,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18605:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313139",
                "id": 54967,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18610:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_119_by_1",
                  "typeString": "int_const 119"
                },
                "value": "119"
              },
              "src": "18605:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_664613997892457936451903530140172288_by_1",
                "typeString": "int_const 6646...(28 digits omitted)...2288"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54974,
            "nodeType": "VariableDeclaration",
            "src": "18619:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_120",
            "nameLocation": "18645:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54970,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18619:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1329227995784915872903807060280344576_by_1",
                "typeString": "int_const 1329...(29 digits omitted)...4576"
              },
              "id": 54973,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54971,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18657:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313230",
                "id": 54972,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18662:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_120_by_1",
                  "typeString": "int_const 120"
                },
                "value": "120"
              },
              "src": "18657:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1329227995784915872903807060280344576_by_1",
                "typeString": "int_const 1329...(29 digits omitted)...4576"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54979,
            "nodeType": "VariableDeclaration",
            "src": "18671:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_121",
            "nameLocation": "18697:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54975,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18671:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2658455991569831745807614120560689152_by_1",
                "typeString": "int_const 2658...(29 digits omitted)...9152"
              },
              "id": 54978,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54976,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18709:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313231",
                "id": 54977,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18714:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_121_by_1",
                  "typeString": "int_const 121"
                },
                "value": "121"
              },
              "src": "18709:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2658455991569831745807614120560689152_by_1",
                "typeString": "int_const 2658...(29 digits omitted)...9152"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54984,
            "nodeType": "VariableDeclaration",
            "src": "18723:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_122",
            "nameLocation": "18749:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54980,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18723:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5316911983139663491615228241121378304_by_1",
                "typeString": "int_const 5316...(29 digits omitted)...8304"
              },
              "id": 54983,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54981,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18761:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313232",
                "id": 54982,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18766:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_122_by_1",
                  "typeString": "int_const 122"
                },
                "value": "122"
              },
              "src": "18761:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5316911983139663491615228241121378304_by_1",
                "typeString": "int_const 5316...(29 digits omitted)...8304"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54989,
            "nodeType": "VariableDeclaration",
            "src": "18775:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_123",
            "nameLocation": "18801:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54985,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18775:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_10633823966279326983230456482242756608_by_1",
                "typeString": "int_const 1063...(30 digits omitted)...6608"
              },
              "id": 54988,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54986,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18813:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313233",
                "id": 54987,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18818:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_123_by_1",
                  "typeString": "int_const 123"
                },
                "value": "123"
              },
              "src": "18813:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10633823966279326983230456482242756608_by_1",
                "typeString": "int_const 1063...(30 digits omitted)...6608"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54994,
            "nodeType": "VariableDeclaration",
            "src": "18827:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_124",
            "nameLocation": "18853:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54990,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18827:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_21267647932558653966460912964485513216_by_1",
                "typeString": "int_const 2126...(30 digits omitted)...3216"
              },
              "id": 54993,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54991,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18865:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313234",
                "id": 54992,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18870:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_124_by_1",
                  "typeString": "int_const 124"
                },
                "value": "124"
              },
              "src": "18865:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_21267647932558653966460912964485513216_by_1",
                "typeString": "int_const 2126...(30 digits omitted)...3216"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 54999,
            "nodeType": "VariableDeclaration",
            "src": "18879:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_125",
            "nameLocation": "18905:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54995,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18879:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_42535295865117307932921825928971026432_by_1",
                "typeString": "int_const 4253...(30 digits omitted)...6432"
              },
              "id": 54998,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 54996,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18917:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313235",
                "id": 54997,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18922:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_125_by_1",
                  "typeString": "int_const 125"
                },
                "value": "125"
              },
              "src": "18917:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_42535295865117307932921825928971026432_by_1",
                "typeString": "int_const 4253...(30 digits omitted)...6432"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55004,
            "nodeType": "VariableDeclaration",
            "src": "18931:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_126",
            "nameLocation": "18957:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55000,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18931:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_85070591730234615865843651857942052864_by_1",
                "typeString": "int_const 8507...(30 digits omitted)...2864"
              },
              "id": 55003,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55001,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18969:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313236",
                "id": 55002,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "18974:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_126_by_1",
                  "typeString": "int_const 126"
                },
                "value": "126"
              },
              "src": "18969:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_85070591730234615865843651857942052864_by_1",
                "typeString": "int_const 8507...(30 digits omitted)...2864"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55009,
            "nodeType": "VariableDeclaration",
            "src": "18983:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_127",
            "nameLocation": "19009:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55005,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "18983:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_170141183460469231731687303715884105728_by_1",
                "typeString": "int_const 1701...(31 digits omitted)...5728"
              },
              "id": 55008,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55006,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19021:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313237",
                "id": 55007,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19026:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_127_by_1",
                  "typeString": "int_const 127"
                },
                "value": "127"
              },
              "src": "19021:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_170141183460469231731687303715884105728_by_1",
                "typeString": "int_const 1701...(31 digits omitted)...5728"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55014,
            "nodeType": "VariableDeclaration",
            "src": "19035:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_128",
            "nameLocation": "19061:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55010,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19035:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                "typeString": "int_const 3402...(31 digits omitted)...1456"
              },
              "id": 55013,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55011,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19073:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313238",
                "id": 55012,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19078:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_128_by_1",
                  "typeString": "int_const 128"
                },
                "value": "128"
              },
              "src": "19073:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                "typeString": "int_const 3402...(31 digits omitted)...1456"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55019,
            "nodeType": "VariableDeclaration",
            "src": "19087:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_129",
            "nameLocation": "19113:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55015,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19087:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_680564733841876926926749214863536422912_by_1",
                "typeString": "int_const 6805...(31 digits omitted)...2912"
              },
              "id": 55018,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55016,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19125:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313239",
                "id": 55017,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19130:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_129_by_1",
                  "typeString": "int_const 129"
                },
                "value": "129"
              },
              "src": "19125:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_680564733841876926926749214863536422912_by_1",
                "typeString": "int_const 6805...(31 digits omitted)...2912"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55024,
            "nodeType": "VariableDeclaration",
            "src": "19139:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_130",
            "nameLocation": "19165:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55020,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19139:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1361129467683753853853498429727072845824_by_1",
                "typeString": "int_const 1361...(32 digits omitted)...5824"
              },
              "id": 55023,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55021,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19177:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313330",
                "id": 55022,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19182:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_130_by_1",
                  "typeString": "int_const 130"
                },
                "value": "130"
              },
              "src": "19177:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1361129467683753853853498429727072845824_by_1",
                "typeString": "int_const 1361...(32 digits omitted)...5824"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55029,
            "nodeType": "VariableDeclaration",
            "src": "19191:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_131",
            "nameLocation": "19217:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55025,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19191:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2722258935367507707706996859454145691648_by_1",
                "typeString": "int_const 2722...(32 digits omitted)...1648"
              },
              "id": 55028,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55026,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19229:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313331",
                "id": 55027,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19234:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_131_by_1",
                  "typeString": "int_const 131"
                },
                "value": "131"
              },
              "src": "19229:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2722258935367507707706996859454145691648_by_1",
                "typeString": "int_const 2722...(32 digits omitted)...1648"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55034,
            "nodeType": "VariableDeclaration",
            "src": "19243:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_132",
            "nameLocation": "19269:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55030,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19243:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5444517870735015415413993718908291383296_by_1",
                "typeString": "int_const 5444...(32 digits omitted)...3296"
              },
              "id": 55033,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55031,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19281:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313332",
                "id": 55032,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19286:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_132_by_1",
                  "typeString": "int_const 132"
                },
                "value": "132"
              },
              "src": "19281:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5444517870735015415413993718908291383296_by_1",
                "typeString": "int_const 5444...(32 digits omitted)...3296"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55039,
            "nodeType": "VariableDeclaration",
            "src": "19295:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_133",
            "nameLocation": "19321:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55035,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19295:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_10889035741470030830827987437816582766592_by_1",
                "typeString": "int_const 1088...(33 digits omitted)...6592"
              },
              "id": 55038,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55036,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19333:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313333",
                "id": 55037,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19338:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_133_by_1",
                  "typeString": "int_const 133"
                },
                "value": "133"
              },
              "src": "19333:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10889035741470030830827987437816582766592_by_1",
                "typeString": "int_const 1088...(33 digits omitted)...6592"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55044,
            "nodeType": "VariableDeclaration",
            "src": "19347:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_134",
            "nameLocation": "19373:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55040,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19347:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_21778071482940061661655974875633165533184_by_1",
                "typeString": "int_const 2177...(33 digits omitted)...3184"
              },
              "id": 55043,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55041,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19385:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313334",
                "id": 55042,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19390:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_134_by_1",
                  "typeString": "int_const 134"
                },
                "value": "134"
              },
              "src": "19385:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_21778071482940061661655974875633165533184_by_1",
                "typeString": "int_const 2177...(33 digits omitted)...3184"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55049,
            "nodeType": "VariableDeclaration",
            "src": "19399:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_135",
            "nameLocation": "19425:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55045,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19399:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_43556142965880123323311949751266331066368_by_1",
                "typeString": "int_const 4355...(33 digits omitted)...6368"
              },
              "id": 55048,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55046,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19437:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313335",
                "id": 55047,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19442:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_135_by_1",
                  "typeString": "int_const 135"
                },
                "value": "135"
              },
              "src": "19437:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_43556142965880123323311949751266331066368_by_1",
                "typeString": "int_const 4355...(33 digits omitted)...6368"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55054,
            "nodeType": "VariableDeclaration",
            "src": "19451:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_136",
            "nameLocation": "19477:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55050,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19451:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_87112285931760246646623899502532662132736_by_1",
                "typeString": "int_const 8711...(33 digits omitted)...2736"
              },
              "id": 55053,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55051,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19489:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313336",
                "id": 55052,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19494:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_136_by_1",
                  "typeString": "int_const 136"
                },
                "value": "136"
              },
              "src": "19489:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_87112285931760246646623899502532662132736_by_1",
                "typeString": "int_const 8711...(33 digits omitted)...2736"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55059,
            "nodeType": "VariableDeclaration",
            "src": "19503:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_137",
            "nameLocation": "19529:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55055,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19503:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_174224571863520493293247799005065324265472_by_1",
                "typeString": "int_const 1742...(34 digits omitted)...5472"
              },
              "id": 55058,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55056,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19541:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313337",
                "id": 55057,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19546:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_137_by_1",
                  "typeString": "int_const 137"
                },
                "value": "137"
              },
              "src": "19541:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_174224571863520493293247799005065324265472_by_1",
                "typeString": "int_const 1742...(34 digits omitted)...5472"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55064,
            "nodeType": "VariableDeclaration",
            "src": "19555:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_138",
            "nameLocation": "19581:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55060,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19555:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_348449143727040986586495598010130648530944_by_1",
                "typeString": "int_const 3484...(34 digits omitted)...0944"
              },
              "id": 55063,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55061,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19593:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313338",
                "id": 55062,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19598:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_138_by_1",
                  "typeString": "int_const 138"
                },
                "value": "138"
              },
              "src": "19593:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_348449143727040986586495598010130648530944_by_1",
                "typeString": "int_const 3484...(34 digits omitted)...0944"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55069,
            "nodeType": "VariableDeclaration",
            "src": "19607:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_139",
            "nameLocation": "19633:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55065,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19607:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_696898287454081973172991196020261297061888_by_1",
                "typeString": "int_const 6968...(34 digits omitted)...1888"
              },
              "id": 55068,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55066,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19645:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313339",
                "id": 55067,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19650:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_139_by_1",
                  "typeString": "int_const 139"
                },
                "value": "139"
              },
              "src": "19645:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_696898287454081973172991196020261297061888_by_1",
                "typeString": "int_const 6968...(34 digits omitted)...1888"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55074,
            "nodeType": "VariableDeclaration",
            "src": "19659:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_140",
            "nameLocation": "19685:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55070,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19659:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1393796574908163946345982392040522594123776_by_1",
                "typeString": "int_const 1393...(35 digits omitted)...3776"
              },
              "id": 55073,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55071,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19697:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313430",
                "id": 55072,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19702:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_140_by_1",
                  "typeString": "int_const 140"
                },
                "value": "140"
              },
              "src": "19697:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1393796574908163946345982392040522594123776_by_1",
                "typeString": "int_const 1393...(35 digits omitted)...3776"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55079,
            "nodeType": "VariableDeclaration",
            "src": "19711:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_141",
            "nameLocation": "19737:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55075,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19711:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2787593149816327892691964784081045188247552_by_1",
                "typeString": "int_const 2787...(35 digits omitted)...7552"
              },
              "id": 55078,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55076,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19749:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313431",
                "id": 55077,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19754:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_141_by_1",
                  "typeString": "int_const 141"
                },
                "value": "141"
              },
              "src": "19749:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2787593149816327892691964784081045188247552_by_1",
                "typeString": "int_const 2787...(35 digits omitted)...7552"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55084,
            "nodeType": "VariableDeclaration",
            "src": "19763:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_142",
            "nameLocation": "19789:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55080,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19763:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5575186299632655785383929568162090376495104_by_1",
                "typeString": "int_const 5575...(35 digits omitted)...5104"
              },
              "id": 55083,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55081,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19801:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313432",
                "id": 55082,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19806:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_142_by_1",
                  "typeString": "int_const 142"
                },
                "value": "142"
              },
              "src": "19801:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5575186299632655785383929568162090376495104_by_1",
                "typeString": "int_const 5575...(35 digits omitted)...5104"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55089,
            "nodeType": "VariableDeclaration",
            "src": "19815:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_143",
            "nameLocation": "19841:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55085,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19815:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_11150372599265311570767859136324180752990208_by_1",
                "typeString": "int_const 1115...(36 digits omitted)...0208"
              },
              "id": 55088,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55086,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19853:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313433",
                "id": 55087,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19858:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_143_by_1",
                  "typeString": "int_const 143"
                },
                "value": "143"
              },
              "src": "19853:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_11150372599265311570767859136324180752990208_by_1",
                "typeString": "int_const 1115...(36 digits omitted)...0208"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55094,
            "nodeType": "VariableDeclaration",
            "src": "19867:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_144",
            "nameLocation": "19893:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55090,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19867:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_22300745198530623141535718272648361505980416_by_1",
                "typeString": "int_const 2230...(36 digits omitted)...0416"
              },
              "id": 55093,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55091,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19905:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313434",
                "id": 55092,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19910:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_144_by_1",
                  "typeString": "int_const 144"
                },
                "value": "144"
              },
              "src": "19905:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_22300745198530623141535718272648361505980416_by_1",
                "typeString": "int_const 2230...(36 digits omitted)...0416"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55099,
            "nodeType": "VariableDeclaration",
            "src": "19919:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_145",
            "nameLocation": "19945:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55095,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19919:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_44601490397061246283071436545296723011960832_by_1",
                "typeString": "int_const 4460...(36 digits omitted)...0832"
              },
              "id": 55098,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55096,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19957:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313435",
                "id": 55097,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "19962:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_145_by_1",
                  "typeString": "int_const 145"
                },
                "value": "145"
              },
              "src": "19957:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_44601490397061246283071436545296723011960832_by_1",
                "typeString": "int_const 4460...(36 digits omitted)...0832"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55104,
            "nodeType": "VariableDeclaration",
            "src": "19971:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_146",
            "nameLocation": "19997:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55100,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "19971:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_89202980794122492566142873090593446023921664_by_1",
                "typeString": "int_const 8920...(36 digits omitted)...1664"
              },
              "id": 55103,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55101,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20009:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313436",
                "id": 55102,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20014:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_146_by_1",
                  "typeString": "int_const 146"
                },
                "value": "146"
              },
              "src": "20009:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_89202980794122492566142873090593446023921664_by_1",
                "typeString": "int_const 8920...(36 digits omitted)...1664"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55109,
            "nodeType": "VariableDeclaration",
            "src": "20023:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_147",
            "nameLocation": "20049:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55105,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20023:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_178405961588244985132285746181186892047843328_by_1",
                "typeString": "int_const 1784...(37 digits omitted)...3328"
              },
              "id": 55108,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55106,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20061:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313437",
                "id": 55107,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20066:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_147_by_1",
                  "typeString": "int_const 147"
                },
                "value": "147"
              },
              "src": "20061:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_178405961588244985132285746181186892047843328_by_1",
                "typeString": "int_const 1784...(37 digits omitted)...3328"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55114,
            "nodeType": "VariableDeclaration",
            "src": "20075:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_148",
            "nameLocation": "20101:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55110,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20075:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_356811923176489970264571492362373784095686656_by_1",
                "typeString": "int_const 3568...(37 digits omitted)...6656"
              },
              "id": 55113,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55111,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20113:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313438",
                "id": 55112,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20118:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_148_by_1",
                  "typeString": "int_const 148"
                },
                "value": "148"
              },
              "src": "20113:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_356811923176489970264571492362373784095686656_by_1",
                "typeString": "int_const 3568...(37 digits omitted)...6656"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55119,
            "nodeType": "VariableDeclaration",
            "src": "20127:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_149",
            "nameLocation": "20153:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55115,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20127:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_713623846352979940529142984724747568191373312_by_1",
                "typeString": "int_const 7136...(37 digits omitted)...3312"
              },
              "id": 55118,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55116,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20165:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313439",
                "id": 55117,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20170:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_149_by_1",
                  "typeString": "int_const 149"
                },
                "value": "149"
              },
              "src": "20165:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_713623846352979940529142984724747568191373312_by_1",
                "typeString": "int_const 7136...(37 digits omitted)...3312"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55124,
            "nodeType": "VariableDeclaration",
            "src": "20179:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_150",
            "nameLocation": "20205:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20179:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1427247692705959881058285969449495136382746624_by_1",
                "typeString": "int_const 1427...(38 digits omitted)...6624"
              },
              "id": 55123,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55121,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20217:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313530",
                "id": 55122,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20222:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_150_by_1",
                  "typeString": "int_const 150"
                },
                "value": "150"
              },
              "src": "20217:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1427247692705959881058285969449495136382746624_by_1",
                "typeString": "int_const 1427...(38 digits omitted)...6624"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55129,
            "nodeType": "VariableDeclaration",
            "src": "20231:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_151",
            "nameLocation": "20257:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55125,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20231:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2854495385411919762116571938898990272765493248_by_1",
                "typeString": "int_const 2854...(38 digits omitted)...3248"
              },
              "id": 55128,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55126,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20269:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313531",
                "id": 55127,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20274:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_151_by_1",
                  "typeString": "int_const 151"
                },
                "value": "151"
              },
              "src": "20269:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2854495385411919762116571938898990272765493248_by_1",
                "typeString": "int_const 2854...(38 digits omitted)...3248"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55134,
            "nodeType": "VariableDeclaration",
            "src": "20283:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_152",
            "nameLocation": "20309:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55130,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20283:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5708990770823839524233143877797980545530986496_by_1",
                "typeString": "int_const 5708...(38 digits omitted)...6496"
              },
              "id": 55133,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55131,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20321:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313532",
                "id": 55132,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20326:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_152_by_1",
                  "typeString": "int_const 152"
                },
                "value": "152"
              },
              "src": "20321:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5708990770823839524233143877797980545530986496_by_1",
                "typeString": "int_const 5708...(38 digits omitted)...6496"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55139,
            "nodeType": "VariableDeclaration",
            "src": "20335:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_153",
            "nameLocation": "20361:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55135,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20335:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_11417981541647679048466287755595961091061972992_by_1",
                "typeString": "int_const 1141...(39 digits omitted)...2992"
              },
              "id": 55138,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55136,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20373:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313533",
                "id": 55137,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20378:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_153_by_1",
                  "typeString": "int_const 153"
                },
                "value": "153"
              },
              "src": "20373:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_11417981541647679048466287755595961091061972992_by_1",
                "typeString": "int_const 1141...(39 digits omitted)...2992"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55144,
            "nodeType": "VariableDeclaration",
            "src": "20387:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_154",
            "nameLocation": "20413:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55140,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20387:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_22835963083295358096932575511191922182123945984_by_1",
                "typeString": "int_const 2283...(39 digits omitted)...5984"
              },
              "id": 55143,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55141,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20425:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313534",
                "id": 55142,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20430:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_154_by_1",
                  "typeString": "int_const 154"
                },
                "value": "154"
              },
              "src": "20425:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_22835963083295358096932575511191922182123945984_by_1",
                "typeString": "int_const 2283...(39 digits omitted)...5984"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55149,
            "nodeType": "VariableDeclaration",
            "src": "20439:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_155",
            "nameLocation": "20465:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55145,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20439:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_45671926166590716193865151022383844364247891968_by_1",
                "typeString": "int_const 4567...(39 digits omitted)...1968"
              },
              "id": 55148,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55146,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20477:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313535",
                "id": 55147,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20482:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_155_by_1",
                  "typeString": "int_const 155"
                },
                "value": "155"
              },
              "src": "20477:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_45671926166590716193865151022383844364247891968_by_1",
                "typeString": "int_const 4567...(39 digits omitted)...1968"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55154,
            "nodeType": "VariableDeclaration",
            "src": "20491:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_156",
            "nameLocation": "20517:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55150,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20491:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_91343852333181432387730302044767688728495783936_by_1",
                "typeString": "int_const 9134...(39 digits omitted)...3936"
              },
              "id": 55153,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55151,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20529:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313536",
                "id": 55152,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20534:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_156_by_1",
                  "typeString": "int_const 156"
                },
                "value": "156"
              },
              "src": "20529:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_91343852333181432387730302044767688728495783936_by_1",
                "typeString": "int_const 9134...(39 digits omitted)...3936"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55159,
            "nodeType": "VariableDeclaration",
            "src": "20543:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_157",
            "nameLocation": "20569:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55155,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20543:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_182687704666362864775460604089535377456991567872_by_1",
                "typeString": "int_const 1826...(40 digits omitted)...7872"
              },
              "id": 55158,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55156,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20581:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313537",
                "id": 55157,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20586:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_157_by_1",
                  "typeString": "int_const 157"
                },
                "value": "157"
              },
              "src": "20581:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_182687704666362864775460604089535377456991567872_by_1",
                "typeString": "int_const 1826...(40 digits omitted)...7872"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55164,
            "nodeType": "VariableDeclaration",
            "src": "20595:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_158",
            "nameLocation": "20621:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55160,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20595:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_365375409332725729550921208179070754913983135744_by_1",
                "typeString": "int_const 3653...(40 digits omitted)...5744"
              },
              "id": 55163,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55161,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20633:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313538",
                "id": 55162,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20638:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_158_by_1",
                  "typeString": "int_const 158"
                },
                "value": "158"
              },
              "src": "20633:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_365375409332725729550921208179070754913983135744_by_1",
                "typeString": "int_const 3653...(40 digits omitted)...5744"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55169,
            "nodeType": "VariableDeclaration",
            "src": "20647:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_159",
            "nameLocation": "20673:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55165,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20647:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_730750818665451459101842416358141509827966271488_by_1",
                "typeString": "int_const 7307...(40 digits omitted)...1488"
              },
              "id": 55168,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55166,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20685:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313539",
                "id": 55167,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20690:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_159_by_1",
                  "typeString": "int_const 159"
                },
                "value": "159"
              },
              "src": "20685:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_730750818665451459101842416358141509827966271488_by_1",
                "typeString": "int_const 7307...(40 digits omitted)...1488"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55174,
            "nodeType": "VariableDeclaration",
            "src": "20699:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_160",
            "nameLocation": "20725:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55170,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20699:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1461501637330902918203684832716283019655932542976_by_1",
                "typeString": "int_const 1461...(41 digits omitted)...2976"
              },
              "id": 55173,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55171,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20737:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313630",
                "id": 55172,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20742:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_160_by_1",
                  "typeString": "int_const 160"
                },
                "value": "160"
              },
              "src": "20737:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1461501637330902918203684832716283019655932542976_by_1",
                "typeString": "int_const 1461...(41 digits omitted)...2976"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55179,
            "nodeType": "VariableDeclaration",
            "src": "20751:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_161",
            "nameLocation": "20777:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55175,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20751:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2923003274661805836407369665432566039311865085952_by_1",
                "typeString": "int_const 2923...(41 digits omitted)...5952"
              },
              "id": 55178,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55176,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20789:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313631",
                "id": 55177,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20794:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_161_by_1",
                  "typeString": "int_const 161"
                },
                "value": "161"
              },
              "src": "20789:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2923003274661805836407369665432566039311865085952_by_1",
                "typeString": "int_const 2923...(41 digits omitted)...5952"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55184,
            "nodeType": "VariableDeclaration",
            "src": "20803:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_162",
            "nameLocation": "20829:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55180,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20803:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5846006549323611672814739330865132078623730171904_by_1",
                "typeString": "int_const 5846...(41 digits omitted)...1904"
              },
              "id": 55183,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55181,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20841:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313632",
                "id": 55182,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20846:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_162_by_1",
                  "typeString": "int_const 162"
                },
                "value": "162"
              },
              "src": "20841:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5846006549323611672814739330865132078623730171904_by_1",
                "typeString": "int_const 5846...(41 digits omitted)...1904"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55189,
            "nodeType": "VariableDeclaration",
            "src": "20855:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_163",
            "nameLocation": "20881:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55185,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20855:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_11692013098647223345629478661730264157247460343808_by_1",
                "typeString": "int_const 1169...(42 digits omitted)...3808"
              },
              "id": 55188,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55186,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20893:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313633",
                "id": 55187,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20898:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_163_by_1",
                  "typeString": "int_const 163"
                },
                "value": "163"
              },
              "src": "20893:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_11692013098647223345629478661730264157247460343808_by_1",
                "typeString": "int_const 1169...(42 digits omitted)...3808"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55194,
            "nodeType": "VariableDeclaration",
            "src": "20907:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_164",
            "nameLocation": "20933:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55190,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20907:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_23384026197294446691258957323460528314494920687616_by_1",
                "typeString": "int_const 2338...(42 digits omitted)...7616"
              },
              "id": 55193,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55191,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20945:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313634",
                "id": 55192,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20950:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_164_by_1",
                  "typeString": "int_const 164"
                },
                "value": "164"
              },
              "src": "20945:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_23384026197294446691258957323460528314494920687616_by_1",
                "typeString": "int_const 2338...(42 digits omitted)...7616"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55199,
            "nodeType": "VariableDeclaration",
            "src": "20959:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_165",
            "nameLocation": "20985:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55195,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "20959:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_46768052394588893382517914646921056628989841375232_by_1",
                "typeString": "int_const 4676...(42 digits omitted)...5232"
              },
              "id": 55198,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55196,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "20997:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313635",
                "id": 55197,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21002:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_165_by_1",
                  "typeString": "int_const 165"
                },
                "value": "165"
              },
              "src": "20997:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_46768052394588893382517914646921056628989841375232_by_1",
                "typeString": "int_const 4676...(42 digits omitted)...5232"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55204,
            "nodeType": "VariableDeclaration",
            "src": "21011:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_166",
            "nameLocation": "21037:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55200,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21011:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_93536104789177786765035829293842113257979682750464_by_1",
                "typeString": "int_const 9353...(42 digits omitted)...0464"
              },
              "id": 55203,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55201,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21049:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313636",
                "id": 55202,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21054:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_166_by_1",
                  "typeString": "int_const 166"
                },
                "value": "166"
              },
              "src": "21049:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_93536104789177786765035829293842113257979682750464_by_1",
                "typeString": "int_const 9353...(42 digits omitted)...0464"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55209,
            "nodeType": "VariableDeclaration",
            "src": "21063:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_167",
            "nameLocation": "21089:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55205,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21063:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_187072209578355573530071658587684226515959365500928_by_1",
                "typeString": "int_const 1870...(43 digits omitted)...0928"
              },
              "id": 55208,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55206,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21101:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313637",
                "id": 55207,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21106:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_167_by_1",
                  "typeString": "int_const 167"
                },
                "value": "167"
              },
              "src": "21101:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_187072209578355573530071658587684226515959365500928_by_1",
                "typeString": "int_const 1870...(43 digits omitted)...0928"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55214,
            "nodeType": "VariableDeclaration",
            "src": "21115:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_168",
            "nameLocation": "21141:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55210,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21115:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_374144419156711147060143317175368453031918731001856_by_1",
                "typeString": "int_const 3741...(43 digits omitted)...1856"
              },
              "id": 55213,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55211,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21153:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313638",
                "id": 55212,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21158:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_168_by_1",
                  "typeString": "int_const 168"
                },
                "value": "168"
              },
              "src": "21153:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_374144419156711147060143317175368453031918731001856_by_1",
                "typeString": "int_const 3741...(43 digits omitted)...1856"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55219,
            "nodeType": "VariableDeclaration",
            "src": "21167:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_169",
            "nameLocation": "21193:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55215,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21167:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_748288838313422294120286634350736906063837462003712_by_1",
                "typeString": "int_const 7482...(43 digits omitted)...3712"
              },
              "id": 55218,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55216,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21205:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313639",
                "id": 55217,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21210:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_169_by_1",
                  "typeString": "int_const 169"
                },
                "value": "169"
              },
              "src": "21205:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_748288838313422294120286634350736906063837462003712_by_1",
                "typeString": "int_const 7482...(43 digits omitted)...3712"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55224,
            "nodeType": "VariableDeclaration",
            "src": "21219:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_170",
            "nameLocation": "21245:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55220,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21219:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1496577676626844588240573268701473812127674924007424_by_1",
                "typeString": "int_const 1496...(44 digits omitted)...7424"
              },
              "id": 55223,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55221,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21257:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313730",
                "id": 55222,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21262:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_170_by_1",
                  "typeString": "int_const 170"
                },
                "value": "170"
              },
              "src": "21257:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1496577676626844588240573268701473812127674924007424_by_1",
                "typeString": "int_const 1496...(44 digits omitted)...7424"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55229,
            "nodeType": "VariableDeclaration",
            "src": "21271:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_171",
            "nameLocation": "21297:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55225,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21271:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_2993155353253689176481146537402947624255349848014848_by_1",
                "typeString": "int_const 2993...(44 digits omitted)...4848"
              },
              "id": 55228,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55226,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21309:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313731",
                "id": 55227,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21314:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_171_by_1",
                  "typeString": "int_const 171"
                },
                "value": "171"
              },
              "src": "21309:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2993155353253689176481146537402947624255349848014848_by_1",
                "typeString": "int_const 2993...(44 digits omitted)...4848"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55234,
            "nodeType": "VariableDeclaration",
            "src": "21323:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_172",
            "nameLocation": "21349:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55230,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21323:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_5986310706507378352962293074805895248510699696029696_by_1",
                "typeString": "int_const 5986...(44 digits omitted)...9696"
              },
              "id": 55233,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55231,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21361:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313732",
                "id": 55232,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21366:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_172_by_1",
                  "typeString": "int_const 172"
                },
                "value": "172"
              },
              "src": "21361:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5986310706507378352962293074805895248510699696029696_by_1",
                "typeString": "int_const 5986...(44 digits omitted)...9696"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55239,
            "nodeType": "VariableDeclaration",
            "src": "21375:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_173",
            "nameLocation": "21401:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55235,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21375:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_11972621413014756705924586149611790497021399392059392_by_1",
                "typeString": "int_const 1197...(45 digits omitted)...9392"
              },
              "id": 55238,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55236,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21413:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313733",
                "id": 55237,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21418:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_173_by_1",
                  "typeString": "int_const 173"
                },
                "value": "173"
              },
              "src": "21413:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_11972621413014756705924586149611790497021399392059392_by_1",
                "typeString": "int_const 1197...(45 digits omitted)...9392"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55244,
            "nodeType": "VariableDeclaration",
            "src": "21427:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_174",
            "nameLocation": "21453:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55240,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21427:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_23945242826029513411849172299223580994042798784118784_by_1",
                "typeString": "int_const 2394...(45 digits omitted)...8784"
              },
              "id": 55243,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55241,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21465:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313734",
                "id": 55242,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21470:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_174_by_1",
                  "typeString": "int_const 174"
                },
                "value": "174"
              },
              "src": "21465:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_23945242826029513411849172299223580994042798784118784_by_1",
                "typeString": "int_const 2394...(45 digits omitted)...8784"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55249,
            "nodeType": "VariableDeclaration",
            "src": "21479:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_175",
            "nameLocation": "21505:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55245,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21479:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_47890485652059026823698344598447161988085597568237568_by_1",
                "typeString": "int_const 4789...(45 digits omitted)...7568"
              },
              "id": 55248,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55246,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21517:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313735",
                "id": 55247,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21522:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_175_by_1",
                  "typeString": "int_const 175"
                },
                "value": "175"
              },
              "src": "21517:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_47890485652059026823698344598447161988085597568237568_by_1",
                "typeString": "int_const 4789...(45 digits omitted)...7568"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55254,
            "nodeType": "VariableDeclaration",
            "src": "21531:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_176",
            "nameLocation": "21557:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55250,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21531:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_95780971304118053647396689196894323976171195136475136_by_1",
                "typeString": "int_const 9578...(45 digits omitted)...5136"
              },
              "id": 55253,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55251,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21569:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313736",
                "id": 55252,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21574:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_176_by_1",
                  "typeString": "int_const 176"
                },
                "value": "176"
              },
              "src": "21569:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_95780971304118053647396689196894323976171195136475136_by_1",
                "typeString": "int_const 9578...(45 digits omitted)...5136"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55259,
            "nodeType": "VariableDeclaration",
            "src": "21583:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_177",
            "nameLocation": "21609:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55255,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21583:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_191561942608236107294793378393788647952342390272950272_by_1",
                "typeString": "int_const 1915...(46 digits omitted)...0272"
              },
              "id": 55258,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55256,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21621:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313737",
                "id": 55257,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21626:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_177_by_1",
                  "typeString": "int_const 177"
                },
                "value": "177"
              },
              "src": "21621:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_191561942608236107294793378393788647952342390272950272_by_1",
                "typeString": "int_const 1915...(46 digits omitted)...0272"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55264,
            "nodeType": "VariableDeclaration",
            "src": "21635:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_178",
            "nameLocation": "21661:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55260,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21635:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_383123885216472214589586756787577295904684780545900544_by_1",
                "typeString": "int_const 3831...(46 digits omitted)...0544"
              },
              "id": 55263,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55261,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21673:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313738",
                "id": 55262,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21678:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_178_by_1",
                  "typeString": "int_const 178"
                },
                "value": "178"
              },
              "src": "21673:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_383123885216472214589586756787577295904684780545900544_by_1",
                "typeString": "int_const 3831...(46 digits omitted)...0544"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55269,
            "nodeType": "VariableDeclaration",
            "src": "21687:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_179",
            "nameLocation": "21713:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55265,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21687:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_766247770432944429179173513575154591809369561091801088_by_1",
                "typeString": "int_const 7662...(46 digits omitted)...1088"
              },
              "id": 55268,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55266,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21725:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313739",
                "id": 55267,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21730:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_179_by_1",
                  "typeString": "int_const 179"
                },
                "value": "179"
              },
              "src": "21725:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_766247770432944429179173513575154591809369561091801088_by_1",
                "typeString": "int_const 7662...(46 digits omitted)...1088"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55274,
            "nodeType": "VariableDeclaration",
            "src": "21739:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_180",
            "nameLocation": "21765:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55270,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21739:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1532495540865888858358347027150309183618739122183602176_by_1",
                "typeString": "int_const 1532...(47 digits omitted)...2176"
              },
              "id": 55273,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55271,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21777:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313830",
                "id": 55272,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21782:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_180_by_1",
                  "typeString": "int_const 180"
                },
                "value": "180"
              },
              "src": "21777:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1532495540865888858358347027150309183618739122183602176_by_1",
                "typeString": "int_const 1532...(47 digits omitted)...2176"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55279,
            "nodeType": "VariableDeclaration",
            "src": "21791:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_181",
            "nameLocation": "21817:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55275,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21791:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3064991081731777716716694054300618367237478244367204352_by_1",
                "typeString": "int_const 3064...(47 digits omitted)...4352"
              },
              "id": 55278,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55276,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21829:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313831",
                "id": 55277,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21834:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_181_by_1",
                  "typeString": "int_const 181"
                },
                "value": "181"
              },
              "src": "21829:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3064991081731777716716694054300618367237478244367204352_by_1",
                "typeString": "int_const 3064...(47 digits omitted)...4352"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55284,
            "nodeType": "VariableDeclaration",
            "src": "21843:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_182",
            "nameLocation": "21869:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55280,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21843:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6129982163463555433433388108601236734474956488734408704_by_1",
                "typeString": "int_const 6129...(47 digits omitted)...8704"
              },
              "id": 55283,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55281,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21881:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313832",
                "id": 55282,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21886:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_182_by_1",
                  "typeString": "int_const 182"
                },
                "value": "182"
              },
              "src": "21881:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6129982163463555433433388108601236734474956488734408704_by_1",
                "typeString": "int_const 6129...(47 digits omitted)...8704"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55289,
            "nodeType": "VariableDeclaration",
            "src": "21895:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_183",
            "nameLocation": "21921:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55285,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21895:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_12259964326927110866866776217202473468949912977468817408_by_1",
                "typeString": "int_const 1225...(48 digits omitted)...7408"
              },
              "id": 55288,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55286,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21933:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313833",
                "id": 55287,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21938:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_183_by_1",
                  "typeString": "int_const 183"
                },
                "value": "183"
              },
              "src": "21933:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_12259964326927110866866776217202473468949912977468817408_by_1",
                "typeString": "int_const 1225...(48 digits omitted)...7408"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55294,
            "nodeType": "VariableDeclaration",
            "src": "21947:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_184",
            "nameLocation": "21973:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55290,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21947:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_24519928653854221733733552434404946937899825954937634816_by_1",
                "typeString": "int_const 2451...(48 digits omitted)...4816"
              },
              "id": 55293,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55291,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21985:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313834",
                "id": 55292,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "21990:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_184_by_1",
                  "typeString": "int_const 184"
                },
                "value": "184"
              },
              "src": "21985:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_24519928653854221733733552434404946937899825954937634816_by_1",
                "typeString": "int_const 2451...(48 digits omitted)...4816"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55299,
            "nodeType": "VariableDeclaration",
            "src": "21999:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_185",
            "nameLocation": "22025:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55295,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "21999:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_49039857307708443467467104868809893875799651909875269632_by_1",
                "typeString": "int_const 4903...(48 digits omitted)...9632"
              },
              "id": 55298,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55296,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22037:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313835",
                "id": 55297,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22042:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_185_by_1",
                  "typeString": "int_const 185"
                },
                "value": "185"
              },
              "src": "22037:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_49039857307708443467467104868809893875799651909875269632_by_1",
                "typeString": "int_const 4903...(48 digits omitted)...9632"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55304,
            "nodeType": "VariableDeclaration",
            "src": "22051:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_186",
            "nameLocation": "22077:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55300,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22051:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_98079714615416886934934209737619787751599303819750539264_by_1",
                "typeString": "int_const 9807...(48 digits omitted)...9264"
              },
              "id": 55303,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55301,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22089:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313836",
                "id": 55302,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22094:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_186_by_1",
                  "typeString": "int_const 186"
                },
                "value": "186"
              },
              "src": "22089:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_98079714615416886934934209737619787751599303819750539264_by_1",
                "typeString": "int_const 9807...(48 digits omitted)...9264"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55309,
            "nodeType": "VariableDeclaration",
            "src": "22103:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_187",
            "nameLocation": "22129:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55305,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22103:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_196159429230833773869868419475239575503198607639501078528_by_1",
                "typeString": "int_const 1961...(49 digits omitted)...8528"
              },
              "id": 55308,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55306,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22141:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313837",
                "id": 55307,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22146:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_187_by_1",
                  "typeString": "int_const 187"
                },
                "value": "187"
              },
              "src": "22141:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_196159429230833773869868419475239575503198607639501078528_by_1",
                "typeString": "int_const 1961...(49 digits omitted)...8528"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55314,
            "nodeType": "VariableDeclaration",
            "src": "22155:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_188",
            "nameLocation": "22181:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55310,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22155:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_392318858461667547739736838950479151006397215279002157056_by_1",
                "typeString": "int_const 3923...(49 digits omitted)...7056"
              },
              "id": 55313,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55311,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22193:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313838",
                "id": 55312,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22198:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_188_by_1",
                  "typeString": "int_const 188"
                },
                "value": "188"
              },
              "src": "22193:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_392318858461667547739736838950479151006397215279002157056_by_1",
                "typeString": "int_const 3923...(49 digits omitted)...7056"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55319,
            "nodeType": "VariableDeclaration",
            "src": "22207:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_189",
            "nameLocation": "22233:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55315,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22207:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_784637716923335095479473677900958302012794430558004314112_by_1",
                "typeString": "int_const 7846...(49 digits omitted)...4112"
              },
              "id": 55318,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55316,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22245:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313839",
                "id": 55317,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22250:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_189_by_1",
                  "typeString": "int_const 189"
                },
                "value": "189"
              },
              "src": "22245:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_784637716923335095479473677900958302012794430558004314112_by_1",
                "typeString": "int_const 7846...(49 digits omitted)...4112"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55324,
            "nodeType": "VariableDeclaration",
            "src": "22259:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_190",
            "nameLocation": "22285:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55320,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22259:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1569275433846670190958947355801916604025588861116008628224_by_1",
                "typeString": "int_const 1569...(50 digits omitted)...8224"
              },
              "id": 55323,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55321,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22297:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313930",
                "id": 55322,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22302:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_190_by_1",
                  "typeString": "int_const 190"
                },
                "value": "190"
              },
              "src": "22297:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1569275433846670190958947355801916604025588861116008628224_by_1",
                "typeString": "int_const 1569...(50 digits omitted)...8224"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55329,
            "nodeType": "VariableDeclaration",
            "src": "22311:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_191",
            "nameLocation": "22337:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55325,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22311:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3138550867693340381917894711603833208051177722232017256448_by_1",
                "typeString": "int_const 3138...(50 digits omitted)...6448"
              },
              "id": 55328,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55326,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22349:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313931",
                "id": 55327,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22354:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_191_by_1",
                  "typeString": "int_const 191"
                },
                "value": "191"
              },
              "src": "22349:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3138550867693340381917894711603833208051177722232017256448_by_1",
                "typeString": "int_const 3138...(50 digits omitted)...6448"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55334,
            "nodeType": "VariableDeclaration",
            "src": "22363:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_192",
            "nameLocation": "22389:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55330,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22363:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6277101735386680763835789423207666416102355444464034512896_by_1",
                "typeString": "int_const 6277...(50 digits omitted)...2896"
              },
              "id": 55333,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55331,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22401:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313932",
                "id": 55332,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22406:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_192_by_1",
                  "typeString": "int_const 192"
                },
                "value": "192"
              },
              "src": "22401:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6277101735386680763835789423207666416102355444464034512896_by_1",
                "typeString": "int_const 6277...(50 digits omitted)...2896"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55339,
            "nodeType": "VariableDeclaration",
            "src": "22415:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_193",
            "nameLocation": "22441:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55335,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22415:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_12554203470773361527671578846415332832204710888928069025792_by_1",
                "typeString": "int_const 1255...(51 digits omitted)...5792"
              },
              "id": 55338,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55336,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22453:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313933",
                "id": 55337,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22458:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_193_by_1",
                  "typeString": "int_const 193"
                },
                "value": "193"
              },
              "src": "22453:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_12554203470773361527671578846415332832204710888928069025792_by_1",
                "typeString": "int_const 1255...(51 digits omitted)...5792"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55344,
            "nodeType": "VariableDeclaration",
            "src": "22467:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_194",
            "nameLocation": "22493:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55340,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22467:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_25108406941546723055343157692830665664409421777856138051584_by_1",
                "typeString": "int_const 2510...(51 digits omitted)...1584"
              },
              "id": 55343,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55341,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22505:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313934",
                "id": 55342,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22510:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_194_by_1",
                  "typeString": "int_const 194"
                },
                "value": "194"
              },
              "src": "22505:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_25108406941546723055343157692830665664409421777856138051584_by_1",
                "typeString": "int_const 2510...(51 digits omitted)...1584"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55349,
            "nodeType": "VariableDeclaration",
            "src": "22519:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_195",
            "nameLocation": "22545:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55345,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22519:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_50216813883093446110686315385661331328818843555712276103168_by_1",
                "typeString": "int_const 5021...(51 digits omitted)...3168"
              },
              "id": 55348,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55346,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22557:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313935",
                "id": 55347,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22562:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_195_by_1",
                  "typeString": "int_const 195"
                },
                "value": "195"
              },
              "src": "22557:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_50216813883093446110686315385661331328818843555712276103168_by_1",
                "typeString": "int_const 5021...(51 digits omitted)...3168"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55354,
            "nodeType": "VariableDeclaration",
            "src": "22571:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_196",
            "nameLocation": "22597:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55350,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22571:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_100433627766186892221372630771322662657637687111424552206336_by_1",
                "typeString": "int_const 1004...(52 digits omitted)...6336"
              },
              "id": 55353,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55351,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22609:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313936",
                "id": 55352,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22614:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_196_by_1",
                  "typeString": "int_const 196"
                },
                "value": "196"
              },
              "src": "22609:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100433627766186892221372630771322662657637687111424552206336_by_1",
                "typeString": "int_const 1004...(52 digits omitted)...6336"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55359,
            "nodeType": "VariableDeclaration",
            "src": "22623:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_197",
            "nameLocation": "22649:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55355,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22623:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_200867255532373784442745261542645325315275374222849104412672_by_1",
                "typeString": "int_const 2008...(52 digits omitted)...2672"
              },
              "id": 55358,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55356,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22661:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313937",
                "id": 55357,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22666:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_197_by_1",
                  "typeString": "int_const 197"
                },
                "value": "197"
              },
              "src": "22661:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200867255532373784442745261542645325315275374222849104412672_by_1",
                "typeString": "int_const 2008...(52 digits omitted)...2672"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55364,
            "nodeType": "VariableDeclaration",
            "src": "22675:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_198",
            "nameLocation": "22701:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55360,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22675:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_401734511064747568885490523085290650630550748445698208825344_by_1",
                "typeString": "int_const 4017...(52 digits omitted)...5344"
              },
              "id": 55363,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55361,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22713:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313938",
                "id": 55362,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22718:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_198_by_1",
                  "typeString": "int_const 198"
                },
                "value": "198"
              },
              "src": "22713:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_401734511064747568885490523085290650630550748445698208825344_by_1",
                "typeString": "int_const 4017...(52 digits omitted)...5344"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55369,
            "nodeType": "VariableDeclaration",
            "src": "22727:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_199",
            "nameLocation": "22753:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55365,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22727:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_803469022129495137770981046170581301261101496891396417650688_by_1",
                "typeString": "int_const 8034...(52 digits omitted)...0688"
              },
              "id": 55368,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55366,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22765:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "313939",
                "id": 55367,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22770:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_199_by_1",
                  "typeString": "int_const 199"
                },
                "value": "199"
              },
              "src": "22765:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_803469022129495137770981046170581301261101496891396417650688_by_1",
                "typeString": "int_const 8034...(52 digits omitted)...0688"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55374,
            "nodeType": "VariableDeclaration",
            "src": "22779:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_200",
            "nameLocation": "22805:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55370,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22779:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1606938044258990275541962092341162602522202993782792835301376_by_1",
                "typeString": "int_const 1606...(53 digits omitted)...1376"
              },
              "id": 55373,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55371,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22817:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323030",
                "id": 55372,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22822:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_200_by_1",
                  "typeString": "int_const 200"
                },
                "value": "200"
              },
              "src": "22817:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1606938044258990275541962092341162602522202993782792835301376_by_1",
                "typeString": "int_const 1606...(53 digits omitted)...1376"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55379,
            "nodeType": "VariableDeclaration",
            "src": "22831:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_201",
            "nameLocation": "22857:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55375,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22831:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3213876088517980551083924184682325205044405987565585670602752_by_1",
                "typeString": "int_const 3213...(53 digits omitted)...2752"
              },
              "id": 55378,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55376,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22869:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323031",
                "id": 55377,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22874:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_201_by_1",
                  "typeString": "int_const 201"
                },
                "value": "201"
              },
              "src": "22869:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3213876088517980551083924184682325205044405987565585670602752_by_1",
                "typeString": "int_const 3213...(53 digits omitted)...2752"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55384,
            "nodeType": "VariableDeclaration",
            "src": "22883:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_202",
            "nameLocation": "22909:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55380,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22883:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6427752177035961102167848369364650410088811975131171341205504_by_1",
                "typeString": "int_const 6427...(53 digits omitted)...5504"
              },
              "id": 55383,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55381,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22921:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323032",
                "id": 55382,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22926:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_202_by_1",
                  "typeString": "int_const 202"
                },
                "value": "202"
              },
              "src": "22921:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6427752177035961102167848369364650410088811975131171341205504_by_1",
                "typeString": "int_const 6427...(53 digits omitted)...5504"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55389,
            "nodeType": "VariableDeclaration",
            "src": "22935:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_203",
            "nameLocation": "22961:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55385,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22935:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_12855504354071922204335696738729300820177623950262342682411008_by_1",
                "typeString": "int_const 1285...(54 digits omitted)...1008"
              },
              "id": 55388,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55386,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22973:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323033",
                "id": 55387,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "22978:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_203_by_1",
                  "typeString": "int_const 203"
                },
                "value": "203"
              },
              "src": "22973:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_12855504354071922204335696738729300820177623950262342682411008_by_1",
                "typeString": "int_const 1285...(54 digits omitted)...1008"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55394,
            "nodeType": "VariableDeclaration",
            "src": "22987:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_204",
            "nameLocation": "23013:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55390,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "22987:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_25711008708143844408671393477458601640355247900524685364822016_by_1",
                "typeString": "int_const 2571...(54 digits omitted)...2016"
              },
              "id": 55393,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55391,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23025:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323034",
                "id": 55392,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23030:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_204_by_1",
                  "typeString": "int_const 204"
                },
                "value": "204"
              },
              "src": "23025:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_25711008708143844408671393477458601640355247900524685364822016_by_1",
                "typeString": "int_const 2571...(54 digits omitted)...2016"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55399,
            "nodeType": "VariableDeclaration",
            "src": "23039:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_205",
            "nameLocation": "23065:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55395,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23039:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_51422017416287688817342786954917203280710495801049370729644032_by_1",
                "typeString": "int_const 5142...(54 digits omitted)...4032"
              },
              "id": 55398,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55396,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23077:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323035",
                "id": 55397,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23082:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_205_by_1",
                  "typeString": "int_const 205"
                },
                "value": "205"
              },
              "src": "23077:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_51422017416287688817342786954917203280710495801049370729644032_by_1",
                "typeString": "int_const 5142...(54 digits omitted)...4032"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55404,
            "nodeType": "VariableDeclaration",
            "src": "23091:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_206",
            "nameLocation": "23117:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55400,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23091:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_102844034832575377634685573909834406561420991602098741459288064_by_1",
                "typeString": "int_const 1028...(55 digits omitted)...8064"
              },
              "id": 55403,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55401,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23129:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323036",
                "id": 55402,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23134:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_206_by_1",
                  "typeString": "int_const 206"
                },
                "value": "206"
              },
              "src": "23129:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_102844034832575377634685573909834406561420991602098741459288064_by_1",
                "typeString": "int_const 1028...(55 digits omitted)...8064"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55409,
            "nodeType": "VariableDeclaration",
            "src": "23143:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_207",
            "nameLocation": "23169:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55405,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23143:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_205688069665150755269371147819668813122841983204197482918576128_by_1",
                "typeString": "int_const 2056...(55 digits omitted)...6128"
              },
              "id": 55408,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55406,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23181:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323037",
                "id": 55407,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23186:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_207_by_1",
                  "typeString": "int_const 207"
                },
                "value": "207"
              },
              "src": "23181:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_205688069665150755269371147819668813122841983204197482918576128_by_1",
                "typeString": "int_const 2056...(55 digits omitted)...6128"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55414,
            "nodeType": "VariableDeclaration",
            "src": "23195:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_208",
            "nameLocation": "23221:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55410,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23195:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_411376139330301510538742295639337626245683966408394965837152256_by_1",
                "typeString": "int_const 4113...(55 digits omitted)...2256"
              },
              "id": 55413,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55411,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23233:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323038",
                "id": 55412,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23238:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_208_by_1",
                  "typeString": "int_const 208"
                },
                "value": "208"
              },
              "src": "23233:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_411376139330301510538742295639337626245683966408394965837152256_by_1",
                "typeString": "int_const 4113...(55 digits omitted)...2256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55419,
            "nodeType": "VariableDeclaration",
            "src": "23247:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_209",
            "nameLocation": "23273:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55415,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23247:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_822752278660603021077484591278675252491367932816789931674304512_by_1",
                "typeString": "int_const 8227...(55 digits omitted)...4512"
              },
              "id": 55418,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55416,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23285:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323039",
                "id": 55417,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23290:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_209_by_1",
                  "typeString": "int_const 209"
                },
                "value": "209"
              },
              "src": "23285:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_822752278660603021077484591278675252491367932816789931674304512_by_1",
                "typeString": "int_const 8227...(55 digits omitted)...4512"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55424,
            "nodeType": "VariableDeclaration",
            "src": "23299:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_210",
            "nameLocation": "23325:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55420,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23299:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1645504557321206042154969182557350504982735865633579863348609024_by_1",
                "typeString": "int_const 1645...(56 digits omitted)...9024"
              },
              "id": 55423,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55421,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23337:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323130",
                "id": 55422,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23342:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_210_by_1",
                  "typeString": "int_const 210"
                },
                "value": "210"
              },
              "src": "23337:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1645504557321206042154969182557350504982735865633579863348609024_by_1",
                "typeString": "int_const 1645...(56 digits omitted)...9024"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55429,
            "nodeType": "VariableDeclaration",
            "src": "23351:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_211",
            "nameLocation": "23377:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55425,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23351:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3291009114642412084309938365114701009965471731267159726697218048_by_1",
                "typeString": "int_const 3291...(56 digits omitted)...8048"
              },
              "id": 55428,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55426,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23389:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323131",
                "id": 55427,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23394:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_211_by_1",
                  "typeString": "int_const 211"
                },
                "value": "211"
              },
              "src": "23389:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3291009114642412084309938365114701009965471731267159726697218048_by_1",
                "typeString": "int_const 3291...(56 digits omitted)...8048"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55434,
            "nodeType": "VariableDeclaration",
            "src": "23403:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_212",
            "nameLocation": "23429:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55430,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23403:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6582018229284824168619876730229402019930943462534319453394436096_by_1",
                "typeString": "int_const 6582...(56 digits omitted)...6096"
              },
              "id": 55433,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55431,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23441:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323132",
                "id": 55432,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23446:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_212_by_1",
                  "typeString": "int_const 212"
                },
                "value": "212"
              },
              "src": "23441:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6582018229284824168619876730229402019930943462534319453394436096_by_1",
                "typeString": "int_const 6582...(56 digits omitted)...6096"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55439,
            "nodeType": "VariableDeclaration",
            "src": "23455:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_213",
            "nameLocation": "23481:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55435,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23455:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_13164036458569648337239753460458804039861886925068638906788872192_by_1",
                "typeString": "int_const 1316...(57 digits omitted)...2192"
              },
              "id": 55438,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55436,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23493:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323133",
                "id": 55437,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23498:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_213_by_1",
                  "typeString": "int_const 213"
                },
                "value": "213"
              },
              "src": "23493:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_13164036458569648337239753460458804039861886925068638906788872192_by_1",
                "typeString": "int_const 1316...(57 digits omitted)...2192"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55444,
            "nodeType": "VariableDeclaration",
            "src": "23507:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_214",
            "nameLocation": "23533:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55440,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23507:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_26328072917139296674479506920917608079723773850137277813577744384_by_1",
                "typeString": "int_const 2632...(57 digits omitted)...4384"
              },
              "id": 55443,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55441,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23545:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323134",
                "id": 55442,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23550:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_214_by_1",
                  "typeString": "int_const 214"
                },
                "value": "214"
              },
              "src": "23545:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_26328072917139296674479506920917608079723773850137277813577744384_by_1",
                "typeString": "int_const 2632...(57 digits omitted)...4384"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55449,
            "nodeType": "VariableDeclaration",
            "src": "23559:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_215",
            "nameLocation": "23585:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55445,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23559:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_52656145834278593348959013841835216159447547700274555627155488768_by_1",
                "typeString": "int_const 5265...(57 digits omitted)...8768"
              },
              "id": 55448,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55446,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23597:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323135",
                "id": 55447,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23602:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_215_by_1",
                  "typeString": "int_const 215"
                },
                "value": "215"
              },
              "src": "23597:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_52656145834278593348959013841835216159447547700274555627155488768_by_1",
                "typeString": "int_const 5265...(57 digits omitted)...8768"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55454,
            "nodeType": "VariableDeclaration",
            "src": "23611:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_216",
            "nameLocation": "23637:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55450,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23611:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_105312291668557186697918027683670432318895095400549111254310977536_by_1",
                "typeString": "int_const 1053...(58 digits omitted)...7536"
              },
              "id": 55453,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55451,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23649:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323136",
                "id": 55452,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23654:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_216_by_1",
                  "typeString": "int_const 216"
                },
                "value": "216"
              },
              "src": "23649:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_105312291668557186697918027683670432318895095400549111254310977536_by_1",
                "typeString": "int_const 1053...(58 digits omitted)...7536"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55459,
            "nodeType": "VariableDeclaration",
            "src": "23663:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_217",
            "nameLocation": "23689:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55455,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23663:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_210624583337114373395836055367340864637790190801098222508621955072_by_1",
                "typeString": "int_const 2106...(58 digits omitted)...5072"
              },
              "id": 55458,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55456,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23701:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323137",
                "id": 55457,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23706:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_217_by_1",
                  "typeString": "int_const 217"
                },
                "value": "217"
              },
              "src": "23701:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_210624583337114373395836055367340864637790190801098222508621955072_by_1",
                "typeString": "int_const 2106...(58 digits omitted)...5072"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55464,
            "nodeType": "VariableDeclaration",
            "src": "23715:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_218",
            "nameLocation": "23741:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55460,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23715:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_421249166674228746791672110734681729275580381602196445017243910144_by_1",
                "typeString": "int_const 4212...(58 digits omitted)...0144"
              },
              "id": 55463,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55461,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23753:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323138",
                "id": 55462,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23758:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_218_by_1",
                  "typeString": "int_const 218"
                },
                "value": "218"
              },
              "src": "23753:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_421249166674228746791672110734681729275580381602196445017243910144_by_1",
                "typeString": "int_const 4212...(58 digits omitted)...0144"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55469,
            "nodeType": "VariableDeclaration",
            "src": "23767:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_219",
            "nameLocation": "23793:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55465,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23767:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_842498333348457493583344221469363458551160763204392890034487820288_by_1",
                "typeString": "int_const 8424...(58 digits omitted)...0288"
              },
              "id": 55468,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55466,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23805:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323139",
                "id": 55467,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23810:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_219_by_1",
                  "typeString": "int_const 219"
                },
                "value": "219"
              },
              "src": "23805:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_842498333348457493583344221469363458551160763204392890034487820288_by_1",
                "typeString": "int_const 8424...(58 digits omitted)...0288"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55474,
            "nodeType": "VariableDeclaration",
            "src": "23819:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_220",
            "nameLocation": "23845:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55470,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23819:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1684996666696914987166688442938726917102321526408785780068975640576_by_1",
                "typeString": "int_const 1684...(59 digits omitted)...0576"
              },
              "id": 55473,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55471,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23857:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323230",
                "id": 55472,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23862:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_220_by_1",
                  "typeString": "int_const 220"
                },
                "value": "220"
              },
              "src": "23857:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1684996666696914987166688442938726917102321526408785780068975640576_by_1",
                "typeString": "int_const 1684...(59 digits omitted)...0576"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55479,
            "nodeType": "VariableDeclaration",
            "src": "23871:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_221",
            "nameLocation": "23897:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55475,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23871:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3369993333393829974333376885877453834204643052817571560137951281152_by_1",
                "typeString": "int_const 3369...(59 digits omitted)...1152"
              },
              "id": 55478,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55476,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23909:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323231",
                "id": 55477,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23914:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_221_by_1",
                  "typeString": "int_const 221"
                },
                "value": "221"
              },
              "src": "23909:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3369993333393829974333376885877453834204643052817571560137951281152_by_1",
                "typeString": "int_const 3369...(59 digits omitted)...1152"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55484,
            "nodeType": "VariableDeclaration",
            "src": "23923:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_222",
            "nameLocation": "23949:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55480,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23923:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6739986666787659948666753771754907668409286105635143120275902562304_by_1",
                "typeString": "int_const 6739...(59 digits omitted)...2304"
              },
              "id": 55483,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55481,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23961:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323232",
                "id": 55482,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "23966:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_222_by_1",
                  "typeString": "int_const 222"
                },
                "value": "222"
              },
              "src": "23961:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6739986666787659948666753771754907668409286105635143120275902562304_by_1",
                "typeString": "int_const 6739...(59 digits omitted)...2304"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55489,
            "nodeType": "VariableDeclaration",
            "src": "23975:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_223",
            "nameLocation": "24001:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55485,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "23975:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_13479973333575319897333507543509815336818572211270286240551805124608_by_1",
                "typeString": "int_const 1347...(60 digits omitted)...4608"
              },
              "id": 55488,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55486,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24013:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323233",
                "id": 55487,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24018:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_223_by_1",
                  "typeString": "int_const 223"
                },
                "value": "223"
              },
              "src": "24013:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_13479973333575319897333507543509815336818572211270286240551805124608_by_1",
                "typeString": "int_const 1347...(60 digits omitted)...4608"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55494,
            "nodeType": "VariableDeclaration",
            "src": "24027:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_224",
            "nameLocation": "24053:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55490,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24027:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_26959946667150639794667015087019630673637144422540572481103610249216_by_1",
                "typeString": "int_const 2695...(60 digits omitted)...9216"
              },
              "id": 55493,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55491,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24065:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323234",
                "id": 55492,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24070:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_224_by_1",
                  "typeString": "int_const 224"
                },
                "value": "224"
              },
              "src": "24065:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_26959946667150639794667015087019630673637144422540572481103610249216_by_1",
                "typeString": "int_const 2695...(60 digits omitted)...9216"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55499,
            "nodeType": "VariableDeclaration",
            "src": "24079:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_225",
            "nameLocation": "24105:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55495,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24079:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_53919893334301279589334030174039261347274288845081144962207220498432_by_1",
                "typeString": "int_const 5391...(60 digits omitted)...8432"
              },
              "id": 55498,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55496,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24117:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323235",
                "id": 55497,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24122:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_225_by_1",
                  "typeString": "int_const 225"
                },
                "value": "225"
              },
              "src": "24117:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_53919893334301279589334030174039261347274288845081144962207220498432_by_1",
                "typeString": "int_const 5391...(60 digits omitted)...8432"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55504,
            "nodeType": "VariableDeclaration",
            "src": "24131:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_226",
            "nameLocation": "24157:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55500,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24131:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_107839786668602559178668060348078522694548577690162289924414440996864_by_1",
                "typeString": "int_const 1078...(61 digits omitted)...6864"
              },
              "id": 55503,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55501,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24169:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323236",
                "id": 55502,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24174:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_226_by_1",
                  "typeString": "int_const 226"
                },
                "value": "226"
              },
              "src": "24169:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_107839786668602559178668060348078522694548577690162289924414440996864_by_1",
                "typeString": "int_const 1078...(61 digits omitted)...6864"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55509,
            "nodeType": "VariableDeclaration",
            "src": "24183:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_227",
            "nameLocation": "24209:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55505,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24183:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_215679573337205118357336120696157045389097155380324579848828881993728_by_1",
                "typeString": "int_const 2156...(61 digits omitted)...3728"
              },
              "id": 55508,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55506,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24221:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323237",
                "id": 55507,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24226:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_227_by_1",
                  "typeString": "int_const 227"
                },
                "value": "227"
              },
              "src": "24221:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_215679573337205118357336120696157045389097155380324579848828881993728_by_1",
                "typeString": "int_const 2156...(61 digits omitted)...3728"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55514,
            "nodeType": "VariableDeclaration",
            "src": "24235:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_228",
            "nameLocation": "24261:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55510,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24235:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_431359146674410236714672241392314090778194310760649159697657763987456_by_1",
                "typeString": "int_const 4313...(61 digits omitted)...7456"
              },
              "id": 55513,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55511,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24273:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323238",
                "id": 55512,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24278:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_228_by_1",
                  "typeString": "int_const 228"
                },
                "value": "228"
              },
              "src": "24273:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_431359146674410236714672241392314090778194310760649159697657763987456_by_1",
                "typeString": "int_const 4313...(61 digits omitted)...7456"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55519,
            "nodeType": "VariableDeclaration",
            "src": "24287:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_229",
            "nameLocation": "24313:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55515,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24287:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_862718293348820473429344482784628181556388621521298319395315527974912_by_1",
                "typeString": "int_const 8627...(61 digits omitted)...4912"
              },
              "id": 55518,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55516,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24325:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323239",
                "id": 55517,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24330:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_229_by_1",
                  "typeString": "int_const 229"
                },
                "value": "229"
              },
              "src": "24325:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_862718293348820473429344482784628181556388621521298319395315527974912_by_1",
                "typeString": "int_const 8627...(61 digits omitted)...4912"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55524,
            "nodeType": "VariableDeclaration",
            "src": "24339:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_230",
            "nameLocation": "24365:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55520,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24339:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1725436586697640946858688965569256363112777243042596638790631055949824_by_1",
                "typeString": "int_const 1725...(62 digits omitted)...9824"
              },
              "id": 55523,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55521,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24377:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323330",
                "id": 55522,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24382:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_230_by_1",
                  "typeString": "int_const 230"
                },
                "value": "230"
              },
              "src": "24377:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1725436586697640946858688965569256363112777243042596638790631055949824_by_1",
                "typeString": "int_const 1725...(62 digits omitted)...9824"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55529,
            "nodeType": "VariableDeclaration",
            "src": "24391:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_231",
            "nameLocation": "24417:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55525,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24391:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3450873173395281893717377931138512726225554486085193277581262111899648_by_1",
                "typeString": "int_const 3450...(62 digits omitted)...9648"
              },
              "id": 55528,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55526,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24429:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323331",
                "id": 55527,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24434:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_231_by_1",
                  "typeString": "int_const 231"
                },
                "value": "231"
              },
              "src": "24429:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3450873173395281893717377931138512726225554486085193277581262111899648_by_1",
                "typeString": "int_const 3450...(62 digits omitted)...9648"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55534,
            "nodeType": "VariableDeclaration",
            "src": "24443:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_232",
            "nameLocation": "24469:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55530,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24443:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_6901746346790563787434755862277025452451108972170386555162524223799296_by_1",
                "typeString": "int_const 6901...(62 digits omitted)...9296"
              },
              "id": 55533,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55531,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24481:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323332",
                "id": 55532,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24486:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_232_by_1",
                  "typeString": "int_const 232"
                },
                "value": "232"
              },
              "src": "24481:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6901746346790563787434755862277025452451108972170386555162524223799296_by_1",
                "typeString": "int_const 6901...(62 digits omitted)...9296"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55539,
            "nodeType": "VariableDeclaration",
            "src": "24495:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_233",
            "nameLocation": "24521:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55535,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24495:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_13803492693581127574869511724554050904902217944340773110325048447598592_by_1",
                "typeString": "int_const 1380...(63 digits omitted)...8592"
              },
              "id": 55538,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55536,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24533:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323333",
                "id": 55537,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24538:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_233_by_1",
                  "typeString": "int_const 233"
                },
                "value": "233"
              },
              "src": "24533:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_13803492693581127574869511724554050904902217944340773110325048447598592_by_1",
                "typeString": "int_const 1380...(63 digits omitted)...8592"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55544,
            "nodeType": "VariableDeclaration",
            "src": "24547:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_234",
            "nameLocation": "24573:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55540,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24547:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_27606985387162255149739023449108101809804435888681546220650096895197184_by_1",
                "typeString": "int_const 2760...(63 digits omitted)...7184"
              },
              "id": 55543,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55541,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24585:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323334",
                "id": 55542,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24590:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_234_by_1",
                  "typeString": "int_const 234"
                },
                "value": "234"
              },
              "src": "24585:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_27606985387162255149739023449108101809804435888681546220650096895197184_by_1",
                "typeString": "int_const 2760...(63 digits omitted)...7184"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55549,
            "nodeType": "VariableDeclaration",
            "src": "24599:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_235",
            "nameLocation": "24625:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55545,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24599:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_55213970774324510299478046898216203619608871777363092441300193790394368_by_1",
                "typeString": "int_const 5521...(63 digits omitted)...4368"
              },
              "id": 55548,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55546,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24637:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323335",
                "id": 55547,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24642:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_235_by_1",
                  "typeString": "int_const 235"
                },
                "value": "235"
              },
              "src": "24637:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_55213970774324510299478046898216203619608871777363092441300193790394368_by_1",
                "typeString": "int_const 5521...(63 digits omitted)...4368"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55554,
            "nodeType": "VariableDeclaration",
            "src": "24651:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_236",
            "nameLocation": "24677:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55550,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24651:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_110427941548649020598956093796432407239217743554726184882600387580788736_by_1",
                "typeString": "int_const 1104...(64 digits omitted)...8736"
              },
              "id": 55553,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55551,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24689:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323336",
                "id": 55552,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24694:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_236_by_1",
                  "typeString": "int_const 236"
                },
                "value": "236"
              },
              "src": "24689:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_110427941548649020598956093796432407239217743554726184882600387580788736_by_1",
                "typeString": "int_const 1104...(64 digits omitted)...8736"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55559,
            "nodeType": "VariableDeclaration",
            "src": "24703:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_237",
            "nameLocation": "24729:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55555,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24703:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_220855883097298041197912187592864814478435487109452369765200775161577472_by_1",
                "typeString": "int_const 2208...(64 digits omitted)...7472"
              },
              "id": 55558,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55556,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24741:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323337",
                "id": 55557,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24746:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_237_by_1",
                  "typeString": "int_const 237"
                },
                "value": "237"
              },
              "src": "24741:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_220855883097298041197912187592864814478435487109452369765200775161577472_by_1",
                "typeString": "int_const 2208...(64 digits omitted)...7472"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55564,
            "nodeType": "VariableDeclaration",
            "src": "24755:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_238",
            "nameLocation": "24781:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24755:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_441711766194596082395824375185729628956870974218904739530401550323154944_by_1",
                "typeString": "int_const 4417...(64 digits omitted)...4944"
              },
              "id": 55563,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55561,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24793:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323338",
                "id": 55562,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24798:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_238_by_1",
                  "typeString": "int_const 238"
                },
                "value": "238"
              },
              "src": "24793:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_441711766194596082395824375185729628956870974218904739530401550323154944_by_1",
                "typeString": "int_const 4417...(64 digits omitted)...4944"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55569,
            "nodeType": "VariableDeclaration",
            "src": "24807:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_239",
            "nameLocation": "24833:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55565,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24807:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_883423532389192164791648750371459257913741948437809479060803100646309888_by_1",
                "typeString": "int_const 8834...(64 digits omitted)...9888"
              },
              "id": 55568,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55566,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24845:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323339",
                "id": 55567,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24850:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_239_by_1",
                  "typeString": "int_const 239"
                },
                "value": "239"
              },
              "src": "24845:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_883423532389192164791648750371459257913741948437809479060803100646309888_by_1",
                "typeString": "int_const 8834...(64 digits omitted)...9888"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55574,
            "nodeType": "VariableDeclaration",
            "src": "24859:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_240",
            "nameLocation": "24885:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55570,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24859:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1766847064778384329583297500742918515827483896875618958121606201292619776_by_1",
                "typeString": "int_const 1766...(65 digits omitted)...9776"
              },
              "id": 55573,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55571,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24897:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323430",
                "id": 55572,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24902:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_240_by_1",
                  "typeString": "int_const 240"
                },
                "value": "240"
              },
              "src": "24897:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1766847064778384329583297500742918515827483896875618958121606201292619776_by_1",
                "typeString": "int_const 1766...(65 digits omitted)...9776"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55579,
            "nodeType": "VariableDeclaration",
            "src": "24911:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_241",
            "nameLocation": "24937:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55575,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24911:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3533694129556768659166595001485837031654967793751237916243212402585239552_by_1",
                "typeString": "int_const 3533...(65 digits omitted)...9552"
              },
              "id": 55578,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55576,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24949:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323431",
                "id": 55577,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "24954:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_241_by_1",
                  "typeString": "int_const 241"
                },
                "value": "241"
              },
              "src": "24949:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3533694129556768659166595001485837031654967793751237916243212402585239552_by_1",
                "typeString": "int_const 3533...(65 digits omitted)...9552"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55584,
            "nodeType": "VariableDeclaration",
            "src": "24963:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_242",
            "nameLocation": "24989:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55580,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "24963:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_7067388259113537318333190002971674063309935587502475832486424805170479104_by_1",
                "typeString": "int_const 7067...(65 digits omitted)...9104"
              },
              "id": 55583,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55581,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25001:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323432",
                "id": 55582,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25006:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_242_by_1",
                  "typeString": "int_const 242"
                },
                "value": "242"
              },
              "src": "25001:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7067388259113537318333190002971674063309935587502475832486424805170479104_by_1",
                "typeString": "int_const 7067...(65 digits omitted)...9104"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55589,
            "nodeType": "VariableDeclaration",
            "src": "25015:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_243",
            "nameLocation": "25041:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55585,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25015:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_14134776518227074636666380005943348126619871175004951664972849610340958208_by_1",
                "typeString": "int_const 1413...(66 digits omitted)...8208"
              },
              "id": 55588,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55586,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25053:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323433",
                "id": 55587,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25058:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_243_by_1",
                  "typeString": "int_const 243"
                },
                "value": "243"
              },
              "src": "25053:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_14134776518227074636666380005943348126619871175004951664972849610340958208_by_1",
                "typeString": "int_const 1413...(66 digits omitted)...8208"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55594,
            "nodeType": "VariableDeclaration",
            "src": "25067:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_244",
            "nameLocation": "25093:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55590,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25067:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_28269553036454149273332760011886696253239742350009903329945699220681916416_by_1",
                "typeString": "int_const 2826...(66 digits omitted)...6416"
              },
              "id": 55593,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55591,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25105:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323434",
                "id": 55592,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25110:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_244_by_1",
                  "typeString": "int_const 244"
                },
                "value": "244"
              },
              "src": "25105:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_28269553036454149273332760011886696253239742350009903329945699220681916416_by_1",
                "typeString": "int_const 2826...(66 digits omitted)...6416"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55599,
            "nodeType": "VariableDeclaration",
            "src": "25119:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_245",
            "nameLocation": "25145:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55595,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25119:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_56539106072908298546665520023773392506479484700019806659891398441363832832_by_1",
                "typeString": "int_const 5653...(66 digits omitted)...2832"
              },
              "id": 55598,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55596,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25157:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323435",
                "id": 55597,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25162:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_245_by_1",
                  "typeString": "int_const 245"
                },
                "value": "245"
              },
              "src": "25157:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_56539106072908298546665520023773392506479484700019806659891398441363832832_by_1",
                "typeString": "int_const 5653...(66 digits omitted)...2832"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55604,
            "nodeType": "VariableDeclaration",
            "src": "25171:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_246",
            "nameLocation": "25197:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55600,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25171:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_113078212145816597093331040047546785012958969400039613319782796882727665664_by_1",
                "typeString": "int_const 1130...(67 digits omitted)...5664"
              },
              "id": 55603,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55601,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25209:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323436",
                "id": 55602,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25214:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_246_by_1",
                  "typeString": "int_const 246"
                },
                "value": "246"
              },
              "src": "25209:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_113078212145816597093331040047546785012958969400039613319782796882727665664_by_1",
                "typeString": "int_const 1130...(67 digits omitted)...5664"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55609,
            "nodeType": "VariableDeclaration",
            "src": "25223:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_247",
            "nameLocation": "25249:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55605,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25223:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_226156424291633194186662080095093570025917938800079226639565593765455331328_by_1",
                "typeString": "int_const 2261...(67 digits omitted)...1328"
              },
              "id": 55608,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55606,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25261:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323437",
                "id": 55607,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25266:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_247_by_1",
                  "typeString": "int_const 247"
                },
                "value": "247"
              },
              "src": "25261:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_226156424291633194186662080095093570025917938800079226639565593765455331328_by_1",
                "typeString": "int_const 2261...(67 digits omitted)...1328"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55614,
            "nodeType": "VariableDeclaration",
            "src": "25275:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_248",
            "nameLocation": "25301:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55610,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25275:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_452312848583266388373324160190187140051835877600158453279131187530910662656_by_1",
                "typeString": "int_const 4523...(67 digits omitted)...2656"
              },
              "id": 55613,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55611,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25313:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323438",
                "id": 55612,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25318:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_248_by_1",
                  "typeString": "int_const 248"
                },
                "value": "248"
              },
              "src": "25313:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_452312848583266388373324160190187140051835877600158453279131187530910662656_by_1",
                "typeString": "int_const 4523...(67 digits omitted)...2656"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55619,
            "nodeType": "VariableDeclaration",
            "src": "25327:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_249",
            "nameLocation": "25353:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55615,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25327:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_904625697166532776746648320380374280103671755200316906558262375061821325312_by_1",
                "typeString": "int_const 9046...(67 digits omitted)...5312"
              },
              "id": 55618,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55616,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25365:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323439",
                "id": 55617,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25370:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_249_by_1",
                  "typeString": "int_const 249"
                },
                "value": "249"
              },
              "src": "25365:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_904625697166532776746648320380374280103671755200316906558262375061821325312_by_1",
                "typeString": "int_const 9046...(67 digits omitted)...5312"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55624,
            "nodeType": "VariableDeclaration",
            "src": "25379:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_250",
            "nameLocation": "25405:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55620,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25379:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1809251394333065553493296640760748560207343510400633813116524750123642650624_by_1",
                "typeString": "int_const 1809...(68 digits omitted)...0624"
              },
              "id": 55623,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55621,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25417:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323530",
                "id": 55622,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25422:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_250_by_1",
                  "typeString": "int_const 250"
                },
                "value": "250"
              },
              "src": "25417:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1809251394333065553493296640760748560207343510400633813116524750123642650624_by_1",
                "typeString": "int_const 1809...(68 digits omitted)...0624"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55629,
            "nodeType": "VariableDeclaration",
            "src": "25431:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_251",
            "nameLocation": "25457:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55625,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25431:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3618502788666131106986593281521497120414687020801267626233049500247285301248_by_1",
                "typeString": "int_const 3618...(68 digits omitted)...1248"
              },
              "id": 55628,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55626,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25469:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323531",
                "id": 55627,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25474:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_251_by_1",
                  "typeString": "int_const 251"
                },
                "value": "251"
              },
              "src": "25469:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3618502788666131106986593281521497120414687020801267626233049500247285301248_by_1",
                "typeString": "int_const 3618...(68 digits omitted)...1248"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55634,
            "nodeType": "VariableDeclaration",
            "src": "25483:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_252",
            "nameLocation": "25509:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55630,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25483:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_7237005577332262213973186563042994240829374041602535252466099000494570602496_by_1",
                "typeString": "int_const 7237...(68 digits omitted)...2496"
              },
              "id": 55633,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55631,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25521:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323532",
                "id": 55632,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25526:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_252_by_1",
                  "typeString": "int_const 252"
                },
                "value": "252"
              },
              "src": "25521:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7237005577332262213973186563042994240829374041602535252466099000494570602496_by_1",
                "typeString": "int_const 7237...(68 digits omitted)...2496"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55639,
            "nodeType": "VariableDeclaration",
            "src": "25535:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_253",
            "nameLocation": "25561:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55635,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25535:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_14474011154664524427946373126085988481658748083205070504932198000989141204992_by_1",
                "typeString": "int_const 1447...(69 digits omitted)...4992"
              },
              "id": 55638,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55636,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25573:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323533",
                "id": 55637,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25578:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_253_by_1",
                  "typeString": "int_const 253"
                },
                "value": "253"
              },
              "src": "25573:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_14474011154664524427946373126085988481658748083205070504932198000989141204992_by_1",
                "typeString": "int_const 1447...(69 digits omitted)...4992"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55644,
            "nodeType": "VariableDeclaration",
            "src": "25587:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_254",
            "nameLocation": "25613:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55640,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25587:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_28948022309329048855892746252171976963317496166410141009864396001978282409984_by_1",
                "typeString": "int_const 2894...(69 digits omitted)...9984"
              },
              "id": 55643,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55641,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25625:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323534",
                "id": 55642,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25630:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_254_by_1",
                  "typeString": "int_const 254"
                },
                "value": "254"
              },
              "src": "25625:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_28948022309329048855892746252171976963317496166410141009864396001978282409984_by_1",
                "typeString": "int_const 2894...(69 digits omitted)...9984"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55649,
            "nodeType": "VariableDeclaration",
            "src": "25639:46:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_ROLE_255",
            "nameLocation": "25665:9:70",
            "scope": 55650,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55645,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "25639:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const 5789...(69 digits omitted)...9968"
              },
              "id": 55648,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 55646,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25677:1:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "323535",
                "id": 55647,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "25682:3:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_255_by_1",
                  "typeString": "int_const 255"
                },
                "value": "255"
              },
              "src": "25677:8:70",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const 5789...(69 digits omitted)...9968"
              }
            },
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 54129,
              "name": "Ownable",
              "nameLocations": [
                "501:7:70"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54123,
              "src": "501:7:70"
            },
            "id": 54130,
            "nodeType": "InheritanceSpecifier",
            "src": "501:7:70"
          }
        ],
        "canonicalName": "OwnableRoles",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 54128,
          "nodeType": "StructuredDocumentation",
          "src": "97:370:70",
          "text": "@notice Simple single owner and multiroles authorization mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/auth/Ownable.sol)\n @dev While the ownable portion follows [EIP-173](https://eips.ethereum.org/EIPS/eip-173)\n for compatibility, the nomenclature for the 2-step ownership handover and roles\n may be unique to this codebase."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          55650,
          54123
        ],
        "name": "OwnableRoles",
        "nameLocation": "485:12:70",
        "scope": 55651,
        "usedErrors": [
          53935,
          53938,
          53941,
          53944
        ],
        "usedEvents": [
          53951,
          53956,
          53961,
          54137
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 70
} as const;