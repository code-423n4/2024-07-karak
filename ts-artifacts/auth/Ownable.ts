export const Ownable = {
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
      "name": "requestOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
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
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "renounceOwnership()": "715018a6",
    "requestOwnershipHandover()": "25692962",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/auth/Ownable.sol)\",\"details\":\"Note: This implementation does NOT auto-initialize the owner to `msg.sender`. You MUST call the `_initializeOwner` in the constructor / initializer. While the ownable portion follows [EIP-173](https://eips.ethereum.org/EIPS/eip-173) for compatibility, the nomenclature for the 2-step ownership handover may be unique to this codebase.\",\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}]},\"events\":{\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"}},\"stateVariables\":{\"_OWNERSHIP_HANDOVER_CANCELED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"OwnershipHandoverCanceled(address)\\\"))`.\"},\"_OWNERSHIP_HANDOVER_REQUESTED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"OwnershipHandoverRequested(address)\\\"))`.\"},\"_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"OwnershipTransferred(address,address)\\\"))`.\"},\"_OWNER_SLOT\":{\"details\":\"The owner slot is given by: `bytes32(~uint256(uint32(bytes4(keccak256(\\\"_OWNER_SLOT_NOT\\\")))))`. It is intentionally chosen to be a high value to avoid collision with lower slots. The choice of manual storage layout is to enable compatibility with both regular and upgradeable contracts.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Simple single owner authorization mixin.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/auth/Ownable.sol\":\"Ownable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]}},\"version\":1}",
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
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "requestOwnershipHandover"
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
          "owner()": {
            "details": "Returns the owner of the contract."
          },
          "ownershipHandoverExpiresAt(address)": {
            "details": "Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
          },
          "renounceOwnership()": {
            "details": "Allows the owner to renounce their ownership."
          },
          "requestOwnershipHandover()": {
            "details": "Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default."
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
        "node_modules/solady/src/auth/Ownable.sol": "Ownable"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
    "id": 54124,
    "exportedSymbols": {
      "Ownable": [
        54123
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:12519:69",
    "nodes": [
      {
        "id": 53931,
        "nodeType": "PragmaDirective",
        "src": "32:23:69",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 54123,
        "nodeType": "ContractDefinition",
        "src": "571:11979:69",
        "nodes": [
          {
            "id": 53935,
            "nodeType": "ErrorDefinition",
            "src": "950:21:69",
            "nodes": [],
            "documentation": {
              "id": 53933,
              "nodeType": "StructuredDocumentation",
              "src": "886:59:69",
              "text": "@dev The caller is not authorized to call the function."
            },
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "956:12:69",
            "parameters": {
              "id": 53934,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "968:2:69"
            }
          },
          {
            "id": 53938,
            "nodeType": "ErrorDefinition",
            "src": "1033:30:69",
            "nodes": [],
            "documentation": {
              "id": 53936,
              "nodeType": "StructuredDocumentation",
              "src": "977:51:69",
              "text": "@dev The `newOwner` cannot be the zero address."
            },
            "errorSelector": "7448fbae",
            "name": "NewOwnerIsZeroAddress",
            "nameLocation": "1039:21:69",
            "parameters": {
              "id": 53937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1060:2:69"
            }
          },
          {
            "id": 53941,
            "nodeType": "ErrorDefinition",
            "src": "1141:26:69",
            "nodes": [],
            "documentation": {
              "id": 53939,
              "nodeType": "StructuredDocumentation",
              "src": "1069:67:69",
              "text": "@dev The `pendingOwner` does not have a valid handover request."
            },
            "errorSelector": "6f5e8818",
            "name": "NoHandoverRequest",
            "nameLocation": "1147:17:69",
            "parameters": {
              "id": 53940,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1164:2:69"
            }
          },
          {
            "id": 53944,
            "nodeType": "ErrorDefinition",
            "src": "1212:27:69",
            "nodes": [],
            "documentation": {
              "id": 53942,
              "nodeType": "StructuredDocumentation",
              "src": "1173:34:69",
              "text": "@dev Cannot double-initialize."
            },
            "errorSelector": "0dc149f0",
            "name": "AlreadyInitialized",
            "nameLocation": "1218:18:69",
            "parameters": {
              "id": 53943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1236:2:69"
            }
          },
          {
            "id": 53951,
            "nodeType": "EventDefinition",
            "src": "1843:79:69",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 53945,
              "nodeType": "StructuredDocumentation",
              "src": "1528:310:69",
              "text": "@dev The ownership is transferred from `oldOwner` to `newOwner`.\n This event is intentionally kept the same as OpenZeppelin's Ownable to be\n compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173),\n despite it not being as lightweight as a single argument event."
            },
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "1849:20:69",
            "parameters": {
              "id": 53950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53947,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "oldOwner",
                  "nameLocation": "1886:8:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 53951,
                  "src": "1870:24:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1870:7:69",
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
                  "id": 53949,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1912:8:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 53951,
                  "src": "1896:24:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1896:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1869:52:69"
            }
          },
          {
            "id": 53956,
            "nodeType": "EventDefinition",
            "src": "2001:63:69",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 53952,
              "nodeType": "StructuredDocumentation",
              "src": "1928:68:69",
              "text": "@dev An ownership handover to `pendingOwner` has been requested."
            },
            "eventSelector": "dbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d",
            "name": "OwnershipHandoverRequested",
            "nameLocation": "2007:26:69",
            "parameters": {
              "id": 53955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53954,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "pendingOwner",
                  "nameLocation": "2050:12:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 53956,
                  "src": "2034:28:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53953,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2033:30:69"
            }
          },
          {
            "id": 53961,
            "nodeType": "EventDefinition",
            "src": "2143:62:69",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 53957,
              "nodeType": "StructuredDocumentation",
              "src": "2070:68:69",
              "text": "@dev The ownership handover to `pendingOwner` has been canceled."
            },
            "eventSelector": "fa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92",
            "name": "OwnershipHandoverCanceled",
            "nameLocation": "2149:25:69",
            "parameters": {
              "id": 53960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53959,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "pendingOwner",
                  "nameLocation": "2191:12:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 53961,
                  "src": "2175:28:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53958,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2175:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2174:30:69"
            }
          },
          {
            "id": 53965,
            "nodeType": "VariableDeclaration",
            "src": "2285:140:69",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 53962,
              "nodeType": "StructuredDocumentation",
              "src": "2211:69:69",
              "text": "@dev `keccak256(bytes(\"OwnershipTransferred(address,address)\"))`."
            },
            "mutability": "constant",
            "name": "_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE",
            "nameLocation": "2310:38:69",
            "scope": 54123,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 53963,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2285:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307838626530303739633533313635393134313334346364316664306134663238343139343937663937323261336461616665336234313836663662363435376530",
              "id": 53964,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2359:66:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_63267312222310607310220992301550539520881909915348243260808268974908359596000_by_1",
                "typeString": "int_const 6326...(69 digits omitted)...6000"
              },
              "value": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
            },
            "visibility": "private"
          },
          {
            "id": 53969,
            "nodeType": "VariableDeclaration",
            "src": "2504:147:69",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 53966,
              "nodeType": "StructuredDocumentation",
              "src": "2432:67:69",
              "text": "@dev `keccak256(bytes(\"OwnershipHandoverRequested(address)\"))`."
            },
            "mutability": "constant",
            "name": "_OWNERSHIP_HANDOVER_REQUESTED_EVENT_SIGNATURE",
            "nameLocation": "2529:45:69",
            "scope": 54123,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 53967,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2504:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307864626633366131303764613139653439353237613731373661316261626639363362346230666638636465333565653335643663643866316639616337653164",
              "id": 53968,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2585:66:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_99486589706178915293482045537067896628184784474209892898124391061398315892253_by_1",
                "typeString": "int_const 9948...(69 digits omitted)...2253"
              },
              "value": "0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d"
            },
            "visibility": "private"
          },
          {
            "id": 53973,
            "nodeType": "VariableDeclaration",
            "src": "2729:146:69",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 53970,
              "nodeType": "StructuredDocumentation",
              "src": "2658:66:69",
              "text": "@dev `keccak256(bytes(\"OwnershipHandoverCanceled(address)\"))`."
            },
            "mutability": "constant",
            "name": "_OWNERSHIP_HANDOVER_CANCELED_EVENT_SIGNATURE",
            "nameLocation": "2754:44:69",
            "scope": 54123,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 53971,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2729:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307866613762386561623764613637663431326363393537356564343334363434363866396266626165383964313637353931373334366361366438666533633932",
              "id": 53972,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2809:66:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_113296519006148992096626879868577423813870114622160551413976512868841544367250_by_1",
                "typeString": "int_const 1132...(70 digits omitted)...7250"
              },
              "value": "0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92"
            },
            "visibility": "private"
          },
          {
            "id": 53977,
            "nodeType": "VariableDeclaration",
            "src": "3504:114:69",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 53974,
              "nodeType": "StructuredDocumentation",
              "src": "3165:334:69",
              "text": "@dev The owner slot is given by:\n `bytes32(~uint256(uint32(bytes4(keccak256(\"_OWNER_SLOT_NOT\")))))`.\n It is intentionally chosen to be a high value\n to avoid collision with lower slots.\n The choice of manual storage layout is to enable compatibility\n with both regular and upgradeable contracts."
            },
            "mutability": "constant",
            "name": "_OWNER_SLOT",
            "nameLocation": "3530:11:69",
            "scope": 54123,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 53975,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3504:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666663734383733393237",
              "id": 53976,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3552:66:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007910789691687_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...1687"
              },
              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927"
            },
            "visibility": "internal"
          },
          {
            "id": 53981,
            "nodeType": "VariableDeclaration",
            "src": "3906:57:69",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 53978,
              "nodeType": "StructuredDocumentation",
              "src": "3625:276:69",
              "text": "The ownership handover slot of `newOwner` is given by:\n ```\n     mstore(0x00, or(shl(96, user), _HANDOVER_SLOT_SEED))\n     let handoverSlot := keccak256(0x00, 0x20)\n ```\n It stores the expiry timestamp of the two-step ownership handover."
            },
            "mutability": "constant",
            "name": "_HANDOVER_SLOT_SEED",
            "nameLocation": "3931:19:69",
            "scope": 54123,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 53979,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3906:7:69",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783338396137356531",
              "id": 53980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3953:10:69",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_949646817_by_1",
                "typeString": "int_const 949646817"
              },
              "value": "0x389a75e1"
            },
            "visibility": "private"
          },
          {
            "id": 53988,
            "nodeType": "FunctionDefinition",
            "src": "4348:78:69",
            "nodes": [],
            "body": {
              "id": 53987,
              "nodeType": "Block",
              "src": "4424:2:69",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 53982,
              "nodeType": "StructuredDocumentation",
              "src": "4253:90:69",
              "text": "@dev Override to return true to make `_initializeOwner` prevent double-initialization."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_guardInitializeOwner",
            "nameLocation": "4357:21:69",
            "parameters": {
              "id": 53983,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4378:2:69"
            },
            "returnParameters": {
              "id": 53986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53985,
                  "mutability": "mutable",
                  "name": "guard",
                  "nameLocation": "4417:5:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 53988,
                  "src": "4412:10:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 53984,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:4:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4411:12:69"
            },
            "scope": 54123,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54002,
            "nodeType": "FunctionDefinition",
            "src": "4883:1190:69",
            "nodes": [],
            "body": {
              "id": 54001,
              "nodeType": "Block",
              "src": "4944:1129:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 53994,
                      "name": "_guardInitializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53988,
                      "src": "4958:21:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                        "typeString": "function () pure returns (bool)"
                      }
                    },
                    "id": 53995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4958:23:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 53999,
                    "nodeType": "Block",
                    "src": "5649:418:69",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "5719:338:69",
                          "nodeType": "YulBlock",
                          "src": "5719:338:69",
                          "statements": [
                            {
                              "nativeSrc": "5781:38:69",
                              "nodeType": "YulAssignment",
                              "src": "5781:38:69",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5797:2:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5797:2:69",
                                    "type": "",
                                    "value": "96"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5805:2:69",
                                        "nodeType": "YulLiteral",
                                        "src": "5805:2:69",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "5809:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "5809:8:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "5801:3:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "5801:3:69"
                                    },
                                    "nativeSrc": "5801:17:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5801:17:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nativeSrc": "5793:3:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5793:3:69"
                                },
                                "nativeSrc": "5793:26:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5793:26:69"
                              },
                              "variableNames": [
                                {
                                  "name": "newOwner",
                                  "nativeSrc": "5781:8:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5781:8:69"
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "_OWNER_SLOT",
                                    "nativeSrc": "5883:11:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5883:11:69"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "5896:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5896:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "5876:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5876:6:69"
                                },
                                "nativeSrc": "5876:29:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5876:29:69"
                              },
                              "nativeSrc": "5876:29:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "5876:29:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5985:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5985:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5988:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5988:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE",
                                    "nativeSrc": "5991:38:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5991:38:69"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6031:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "6031:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "6034:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "6034:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "log3",
                                  "nativeSrc": "5980:4:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5980:4:69"
                                },
                                "nativeSrc": "5980:63:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5980:63:69"
                              },
                              "nativeSrc": "5980:63:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "5980:63:69"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 53965,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5991:38:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53977,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5883:11:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5781:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5809:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5896:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6034:8:69",
                            "valueSize": 1
                          }
                        ],
                        "id": 53998,
                        "nodeType": "InlineAssembly",
                        "src": "5710:347:69"
                      }
                    ]
                  },
                  "id": 54000,
                  "nodeType": "IfStatement",
                  "src": "4954:1113:69",
                  "trueBody": {
                    "id": 53997,
                    "nodeType": "Block",
                    "src": "4983:660:69",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "5053:580:69",
                          "nodeType": "YulBlock",
                          "src": "5053:580:69",
                          "statements": [
                            {
                              "nativeSrc": "5071:28:69",
                              "nodeType": "YulVariableDeclaration",
                              "src": "5071:28:69",
                              "value": {
                                "name": "_OWNER_SLOT",
                                "nativeSrc": "5088:11:69",
                                "nodeType": "YulIdentifier",
                                "src": "5088:11:69"
                              },
                              "variables": [
                                {
                                  "name": "ownerSlot",
                                  "nativeSrc": "5075:9:69",
                                  "nodeType": "YulTypedName",
                                  "src": "5075:9:69",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nativeSrc": "5136:130:69",
                                "nodeType": "YulBlock",
                                "src": "5136:130:69",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5165:4:69",
                                          "nodeType": "YulLiteral",
                                          "src": "5165:4:69",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5171:10:69",
                                          "nodeType": "YulLiteral",
                                          "src": "5171:10:69",
                                          "type": "",
                                          "value": "0x0dc149f0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "5158:6:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "5158:6:69"
                                      },
                                      "nativeSrc": "5158:24:69",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5158:24:69"
                                    },
                                    "nativeSrc": "5158:24:69",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5158:24:69"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5237:4:69",
                                          "nodeType": "YulLiteral",
                                          "src": "5237:4:69",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5243:4:69",
                                          "nodeType": "YulLiteral",
                                          "src": "5243:4:69",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "5230:6:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "5230:6:69"
                                      },
                                      "nativeSrc": "5230:18:69",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5230:18:69"
                                    },
                                    "nativeSrc": "5230:18:69",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5230:18:69"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "ownerSlot",
                                    "nativeSrc": "5125:9:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5125:9:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "sload",
                                  "nativeSrc": "5119:5:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5119:5:69"
                                },
                                "nativeSrc": "5119:16:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5119:16:69"
                              },
                              "nativeSrc": "5116:150:69",
                              "nodeType": "YulIf",
                              "src": "5116:150:69"
                            },
                            {
                              "nativeSrc": "5327:38:69",
                              "nodeType": "YulAssignment",
                              "src": "5327:38:69",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5343:2:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5343:2:69",
                                    "type": "",
                                    "value": "96"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5351:2:69",
                                        "nodeType": "YulLiteral",
                                        "src": "5351:2:69",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "5355:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "5355:8:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "5347:3:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "5347:3:69"
                                    },
                                    "nativeSrc": "5347:17:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5347:17:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nativeSrc": "5339:3:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5339:3:69"
                                },
                                "nativeSrc": "5339:26:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5339:26:69"
                              },
                              "variableNames": [
                                {
                                  "name": "newOwner",
                                  "nativeSrc": "5327:8:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5327:8:69"
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "ownerSlot",
                                    "nativeSrc": "5429:9:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5429:9:69"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "5443:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "5443:8:69"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "5457:3:69",
                                            "nodeType": "YulLiteral",
                                            "src": "5457:3:69",
                                            "type": "",
                                            "value": "255"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newOwner",
                                                "nativeSrc": "5469:8:69",
                                                "nodeType": "YulIdentifier",
                                                "src": "5469:8:69"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "5462:6:69",
                                              "nodeType": "YulIdentifier",
                                              "src": "5462:6:69"
                                            },
                                            "nativeSrc": "5462:16:69",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5462:16:69"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "5453:3:69",
                                          "nodeType": "YulIdentifier",
                                          "src": "5453:3:69"
                                        },
                                        "nativeSrc": "5453:26:69",
                                        "nodeType": "YulFunctionCall",
                                        "src": "5453:26:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "or",
                                      "nativeSrc": "5440:2:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "5440:2:69"
                                    },
                                    "nativeSrc": "5440:40:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5440:40:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "5422:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5422:6:69"
                                },
                                "nativeSrc": "5422:59:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5422:59:69"
                              },
                              "nativeSrc": "5422:59:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "5422:59:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5561:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5561:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5564:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5564:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE",
                                    "nativeSrc": "5567:38:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5567:38:69"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5607:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "5607:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "5610:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "5610:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "log3",
                                  "nativeSrc": "5556:4:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "5556:4:69"
                                },
                                "nativeSrc": "5556:63:69",
                                "nodeType": "YulFunctionCall",
                                "src": "5556:63:69"
                              },
                              "nativeSrc": "5556:63:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "5556:63:69"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 53965,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5567:38:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53977,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5088:11:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5327:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5355:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5443:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5469:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53991,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "5610:8:69",
                            "valueSize": 1
                          }
                        ],
                        "id": 53996,
                        "nodeType": "InlineAssembly",
                        "src": "5044:589:69"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 53989,
              "nodeType": "StructuredDocumentation",
              "src": "4432:446:69",
              "text": "@dev Initializes the owner directly without authorization guard.\n This function must be called upon initialization,\n regardless of whether the contract is upgradeable or not.\n This is to enable generalization to both regular and upgradeable contracts,\n and to save gas in case the initial owner is not the caller.\n For performance reasons, this function will not check if there\n is an existing owner."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_initializeOwner",
            "nameLocation": "4892:16:69",
            "parameters": {
              "id": 53992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53991,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "4917:8:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54002,
                  "src": "4909:16:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53990,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4909:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4908:18:69"
            },
            "returnParameters": {
              "id": 53993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4944:0:69"
            },
            "scope": 54123,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54016,
            "nodeType": "FunctionDefinition",
            "src": "6145:1089:69",
            "nodes": [],
            "body": {
              "id": 54015,
              "nodeType": "Block",
              "src": "6199:1035:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 54008,
                      "name": "_guardInitializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53988,
                      "src": "6213:21:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                        "typeString": "function () pure returns (bool)"
                      }
                    },
                    "id": 54009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6213:23:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 54013,
                    "nodeType": "Block",
                    "src": "6752:476:69",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "6822:396:69",
                          "nodeType": "YulBlock",
                          "src": "6822:396:69",
                          "statements": [
                            {
                              "nativeSrc": "6840:28:69",
                              "nodeType": "YulVariableDeclaration",
                              "src": "6840:28:69",
                              "value": {
                                "name": "_OWNER_SLOT",
                                "nativeSrc": "6857:11:69",
                                "nodeType": "YulIdentifier",
                                "src": "6857:11:69"
                              },
                              "variables": [
                                {
                                  "name": "ownerSlot",
                                  "nativeSrc": "6844:9:69",
                                  "nodeType": "YulTypedName",
                                  "src": "6844:9:69",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nativeSrc": "6929:38:69",
                              "nodeType": "YulAssignment",
                              "src": "6929:38:69",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6945:2:69",
                                    "nodeType": "YulLiteral",
                                    "src": "6945:2:69",
                                    "type": "",
                                    "value": "96"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6953:2:69",
                                        "nodeType": "YulLiteral",
                                        "src": "6953:2:69",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "6957:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "6957:8:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "6949:3:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "6949:3:69"
                                    },
                                    "nativeSrc": "6949:17:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6949:17:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nativeSrc": "6941:3:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6941:3:69"
                                },
                                "nativeSrc": "6941:26:69",
                                "nodeType": "YulFunctionCall",
                                "src": "6941:26:69"
                              },
                              "variableNames": [
                                {
                                  "name": "newOwner",
                                  "nativeSrc": "6929:8:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6929:8:69"
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7047:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7047:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7050:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7050:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE",
                                    "nativeSrc": "7053:38:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7053:38:69"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "ownerSlot",
                                        "nativeSrc": "7099:9:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "7099:9:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sload",
                                      "nativeSrc": "7093:5:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "7093:5:69"
                                    },
                                    "nativeSrc": "7093:16:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7093:16:69"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "7111:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7111:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "log3",
                                  "nativeSrc": "7042:4:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "7042:4:69"
                                },
                                "nativeSrc": "7042:78:69",
                                "nodeType": "YulFunctionCall",
                                "src": "7042:78:69"
                              },
                              "nativeSrc": "7042:78:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "7042:78:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "ownerSlot",
                                    "nativeSrc": "7184:9:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7184:9:69"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "7195:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7195:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "7177:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "7177:6:69"
                                },
                                "nativeSrc": "7177:27:69",
                                "nodeType": "YulFunctionCall",
                                "src": "7177:27:69"
                              },
                              "nativeSrc": "7177:27:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "7177:27:69"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 53965,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7053:38:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53977,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6857:11:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6929:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6957:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7111:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7195:8:69",
                            "valueSize": 1
                          }
                        ],
                        "id": 54012,
                        "nodeType": "InlineAssembly",
                        "src": "6813:405:69"
                      }
                    ]
                  },
                  "id": 54014,
                  "nodeType": "IfStatement",
                  "src": "6209:1019:69",
                  "trueBody": {
                    "id": 54011,
                    "nodeType": "Block",
                    "src": "6238:508:69",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "6308:428:69",
                          "nodeType": "YulBlock",
                          "src": "6308:428:69",
                          "statements": [
                            {
                              "nativeSrc": "6326:28:69",
                              "nodeType": "YulVariableDeclaration",
                              "src": "6326:28:69",
                              "value": {
                                "name": "_OWNER_SLOT",
                                "nativeSrc": "6343:11:69",
                                "nodeType": "YulIdentifier",
                                "src": "6343:11:69"
                              },
                              "variables": [
                                {
                                  "name": "ownerSlot",
                                  "nativeSrc": "6330:9:69",
                                  "nodeType": "YulTypedName",
                                  "src": "6330:9:69",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nativeSrc": "6415:38:69",
                              "nodeType": "YulAssignment",
                              "src": "6415:38:69",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6431:2:69",
                                    "nodeType": "YulLiteral",
                                    "src": "6431:2:69",
                                    "type": "",
                                    "value": "96"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6439:2:69",
                                        "nodeType": "YulLiteral",
                                        "src": "6439:2:69",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "6443:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "6443:8:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "6435:3:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "6435:3:69"
                                    },
                                    "nativeSrc": "6435:17:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6435:17:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nativeSrc": "6427:3:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6427:3:69"
                                },
                                "nativeSrc": "6427:26:69",
                                "nodeType": "YulFunctionCall",
                                "src": "6427:26:69"
                              },
                              "variableNames": [
                                {
                                  "name": "newOwner",
                                  "nativeSrc": "6415:8:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6415:8:69"
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6533:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "6533:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6536:1:69",
                                    "nodeType": "YulLiteral",
                                    "src": "6536:1:69",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "name": "_OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE",
                                    "nativeSrc": "6539:38:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "6539:38:69"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "ownerSlot",
                                        "nativeSrc": "6585:9:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "6585:9:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sload",
                                      "nativeSrc": "6579:5:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "6579:5:69"
                                    },
                                    "nativeSrc": "6579:16:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6579:16:69"
                                  },
                                  {
                                    "name": "newOwner",
                                    "nativeSrc": "6597:8:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "6597:8:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "log3",
                                  "nativeSrc": "6528:4:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6528:4:69"
                                },
                                "nativeSrc": "6528:78:69",
                                "nodeType": "YulFunctionCall",
                                "src": "6528:78:69"
                              },
                              "nativeSrc": "6528:78:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "6528:78:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "ownerSlot",
                                    "nativeSrc": "6670:9:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "6670:9:69"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "newOwner",
                                        "nativeSrc": "6684:8:69",
                                        "nodeType": "YulIdentifier",
                                        "src": "6684:8:69"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "6698:3:69",
                                            "nodeType": "YulLiteral",
                                            "src": "6698:3:69",
                                            "type": "",
                                            "value": "255"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newOwner",
                                                "nativeSrc": "6710:8:69",
                                                "nodeType": "YulIdentifier",
                                                "src": "6710:8:69"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "6703:6:69",
                                              "nodeType": "YulIdentifier",
                                              "src": "6703:6:69"
                                            },
                                            "nativeSrc": "6703:16:69",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6703:16:69"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "6694:3:69",
                                          "nodeType": "YulIdentifier",
                                          "src": "6694:3:69"
                                        },
                                        "nativeSrc": "6694:26:69",
                                        "nodeType": "YulFunctionCall",
                                        "src": "6694:26:69"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "or",
                                      "nativeSrc": "6681:2:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "6681:2:69"
                                    },
                                    "nativeSrc": "6681:40:69",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6681:40:69"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "6663:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "6663:6:69"
                                },
                                "nativeSrc": "6663:59:69",
                                "nodeType": "YulFunctionCall",
                                "src": "6663:59:69"
                              },
                              "nativeSrc": "6663:59:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "6663:59:69"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 53965,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6539:38:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 53977,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6343:11:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6415:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6443:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6597:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6684:8:69",
                            "valueSize": 1
                          },
                          {
                            "declaration": 54005,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6710:8:69",
                            "valueSize": 1
                          }
                        ],
                        "id": 54010,
                        "nodeType": "InlineAssembly",
                        "src": "6299:437:69"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 54003,
              "nodeType": "StructuredDocumentation",
              "src": "6079:61:69",
              "text": "@dev Sets the owner directly without authorization guard."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setOwner",
            "nameLocation": "6154:9:69",
            "parameters": {
              "id": 54006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54005,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "6172:8:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54016,
                  "src": "6164:16:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54004,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6164:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6163:18:69"
            },
            "returnParameters": {
              "id": 54007,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6199:0:69"
            },
            "scope": 54123,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54022,
            "nodeType": "FunctionDefinition",
            "src": "7292:355:69",
            "nodes": [],
            "body": {
              "id": 54021,
              "nodeType": "Block",
              "src": "7337:310:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7399:242:69",
                    "nodeType": "YulBlock",
                    "src": "7399:242:69",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "7519:112:69",
                          "nodeType": "YulBlock",
                          "src": "7519:112:69",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7544:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7544:4:69",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7550:10:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7550:10:69",
                                    "type": "",
                                    "value": "0x82b42900"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "7537:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "7537:6:69"
                                },
                                "nativeSrc": "7537:24:69",
                                "nodeType": "YulFunctionCall",
                                "src": "7537:24:69"
                              },
                              "nativeSrc": "7537:24:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "7537:24:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7606:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7606:4:69",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7612:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "7612:4:69",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "7599:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "7599:6:69"
                                },
                                "nativeSrc": "7599:18:69",
                                "nodeType": "YulFunctionCall",
                                "src": "7599:18:69"
                              },
                              "nativeSrc": "7599:18:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "7599:18:69"
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
                                    "nativeSrc": "7488:6:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7488:6:69"
                                  },
                                  "nativeSrc": "7488:8:69",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7488:8:69"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "_OWNER_SLOT",
                                      "nativeSrc": "7504:11:69",
                                      "nodeType": "YulIdentifier",
                                      "src": "7504:11:69"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "7498:5:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "7498:5:69"
                                  },
                                  "nativeSrc": "7498:18:69",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7498:18:69"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "7485:2:69",
                                "nodeType": "YulIdentifier",
                                "src": "7485:2:69"
                              },
                              "nativeSrc": "7485:32:69",
                              "nodeType": "YulFunctionCall",
                              "src": "7485:32:69"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "7478:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "7478:6:69"
                          },
                          "nativeSrc": "7478:40:69",
                          "nodeType": "YulFunctionCall",
                          "src": "7478:40:69"
                        },
                        "nativeSrc": "7475:156:69",
                        "nodeType": "YulIf",
                        "src": "7475:156:69"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 53977,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7504:11:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54020,
                  "nodeType": "InlineAssembly",
                  "src": "7390:251:69"
                }
              ]
            },
            "documentation": {
              "id": 54017,
              "nodeType": "StructuredDocumentation",
              "src": "7240:47:69",
              "text": "@dev Throws if the sender is not the owner."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkOwner",
            "nameLocation": "7301:11:69",
            "parameters": {
              "id": 54018,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7312:2:69"
            },
            "returnParameters": {
              "id": 54019,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7337:0:69"
            },
            "scope": 54123,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54033,
            "nodeType": "FunctionDefinition",
            "src": "7878:110:69",
            "nodes": [],
            "body": {
              "id": 54032,
              "nodeType": "Block",
              "src": "7955:33:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_rational_172800_by_1",
                      "typeString": "int_const 172800"
                    },
                    "id": 54030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "3438",
                      "id": 54028,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7972:2:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_48_by_1",
                        "typeString": "int_const 48"
                      },
                      "value": "48"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "hexValue": "33363030",
                      "id": 54029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7977:4:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_3600_by_1",
                        "typeString": "int_const 3600"
                      },
                      "value": "3600"
                    },
                    "src": "7972:9:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_172800_by_1",
                      "typeString": "int_const 172800"
                    }
                  },
                  "functionReturnParameters": 54027,
                  "id": 54031,
                  "nodeType": "Return",
                  "src": "7965:16:69"
                }
              ]
            },
            "documentation": {
              "id": 54023,
              "nodeType": "StructuredDocumentation",
              "src": "7653:220:69",
              "text": "@dev Returns how long a two-step ownership handover is valid for in seconds.\n Override to return a different value if needed.\n Made internal to conserve bytecode. Wrap it in a public function if needed."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ownershipHandoverValidFor",
            "nameLocation": "7887:26:69",
            "parameters": {
              "id": 54024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7913:2:69"
            },
            "returnParameters": {
              "id": 54027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54026,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54033,
                  "src": "7947:6:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 54025,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "7947:6:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7946:8:69"
            },
            "scope": 54123,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54047,
            "nodeType": "FunctionDefinition",
            "src": "8348:349:69",
            "nodes": [],
            "body": {
              "id": 54046,
              "nodeType": "Block",
              "src": "8426:271:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8488:174:69",
                    "nodeType": "YulBlock",
                    "src": "8488:174:69",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "8531:121:69",
                          "nodeType": "YulBlock",
                          "src": "8531:121:69",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8556:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "8556:4:69",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8562:10:69",
                                    "nodeType": "YulLiteral",
                                    "src": "8562:10:69",
                                    "type": "",
                                    "value": "0x7448fbae"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "8549:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "8549:6:69"
                                },
                                "nativeSrc": "8549:24:69",
                                "nodeType": "YulFunctionCall",
                                "src": "8549:24:69"
                              },
                              "nativeSrc": "8549:24:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "8549:24:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8627:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "8627:4:69",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8633:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "8633:4:69",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "8620:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "8620:6:69"
                                },
                                "nativeSrc": "8620:18:69",
                                "nodeType": "YulFunctionCall",
                                "src": "8620:18:69"
                              },
                              "nativeSrc": "8620:18:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "8620:18:69"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "8516:2:69",
                                  "nodeType": "YulLiteral",
                                  "src": "8516:2:69",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "newOwner",
                                  "nativeSrc": "8520:8:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "8520:8:69"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "8512:3:69",
                                "nodeType": "YulIdentifier",
                                "src": "8512:3:69"
                              },
                              "nativeSrc": "8512:17:69",
                              "nodeType": "YulFunctionCall",
                              "src": "8512:17:69"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "8505:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "8505:6:69"
                          },
                          "nativeSrc": "8505:25:69",
                          "nodeType": "YulFunctionCall",
                          "src": "8505:25:69"
                        },
                        "nativeSrc": "8502:150:69",
                        "nodeType": "YulIf",
                        "src": "8502:150:69"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54036,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8520:8:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54041,
                  "nodeType": "InlineAssembly",
                  "src": "8479:183:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54043,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54036,
                        "src": "8681:8:69",
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
                      "id": 54042,
                      "name": "_setOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54016,
                      "src": "8671:9:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 54044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8671:19:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54045,
                  "nodeType": "ExpressionStatement",
                  "src": "8671:19:69"
                }
              ]
            },
            "documentation": {
              "id": 54034,
              "nodeType": "StructuredDocumentation",
              "src": "8277:66:69",
              "text": "@dev Allows the owner to transfer the ownership to `newOwner`."
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54039,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54038,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "8416:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "8416:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "8416:9:69"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "8357:17:69",
            "parameters": {
              "id": 54037,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54036,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "8383:8:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54047,
                  "src": "8375:16:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54035,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8375:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8374:18:69"
            },
            "returnParameters": {
              "id": 54040,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8426:0:69"
            },
            "scope": 54123,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54061,
            "nodeType": "FunctionDefinition",
            "src": "8762:100:69",
            "nodes": [],
            "body": {
              "id": 54060,
              "nodeType": "Block",
              "src": "8824:38:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 54056,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8852:1:69",
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
                          "id": 54055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8844:7:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 54054,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8844:7:69",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 54057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8844:10:69",
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
                      "id": 54053,
                      "name": "_setOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54016,
                      "src": "8834:9:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 54058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8834:21:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54059,
                  "nodeType": "ExpressionStatement",
                  "src": "8834:21:69"
                }
              ]
            },
            "documentation": {
              "id": 54048,
              "nodeType": "StructuredDocumentation",
              "src": "8703:54:69",
              "text": "@dev Allows the owner to renounce their ownership."
            },
            "functionSelector": "715018a6",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54051,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54050,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "8814:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "8814:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "8814:9:69"
              }
            ],
            "name": "renounceOwnership",
            "nameLocation": "8771:17:69",
            "parameters": {
              "id": 54049,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8788:2:69"
            },
            "returnParameters": {
              "id": 54052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8824:0:69"
            },
            "scope": 54123,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54076,
            "nodeType": "FunctionDefinition",
            "src": "9021:617:69",
            "nodes": [],
            "body": {
              "id": 54075,
              "nodeType": "Block",
              "src": "9080:558:69",
              "nodes": [],
              "statements": [
                {
                  "id": 54074,
                  "nodeType": "UncheckedBlock",
                  "src": "9090:542:69",
                  "statements": [
                    {
                      "assignments": [
                        54066
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 54066,
                          "mutability": "mutable",
                          "name": "expires",
                          "nameLocation": "9122:7:69",
                          "nodeType": "VariableDeclaration",
                          "scope": 54074,
                          "src": "9114:15:69",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 54065,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9114:7:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 54072,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 54071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 54067,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "9132:5:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 54068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9138:9:69",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "9132:15:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 54069,
                            "name": "_ownershipHandoverValidFor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54033,
                            "src": "9150:26:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint64_$",
                              "typeString": "function () view returns (uint64)"
                            }
                          },
                          "id": 54070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9150:28:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "9132:46:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9114:64:69"
                    },
                    {
                      "AST": {
                        "nativeSrc": "9248:374:69",
                        "nodeType": "YulBlock",
                        "src": "9248:374:69",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9340:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "9340:4:69",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "name": "_HANDOVER_SLOT_SEED",
                                  "nativeSrc": "9346:19:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "9346:19:69"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "9333:6:69",
                                "nodeType": "YulIdentifier",
                                "src": "9333:6:69"
                              },
                              "nativeSrc": "9333:33:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9333:33:69"
                            },
                            "nativeSrc": "9333:33:69",
                            "nodeType": "YulExpressionStatement",
                            "src": "9333:33:69"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9390:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "9390:4:69",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "caller",
                                    "nativeSrc": "9396:6:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "9396:6:69"
                                  },
                                  "nativeSrc": "9396:8:69",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9396:8:69"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "9383:6:69",
                                "nodeType": "YulIdentifier",
                                "src": "9383:6:69"
                              },
                              "nativeSrc": "9383:22:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9383:22:69"
                            },
                            "nativeSrc": "9383:22:69",
                            "nodeType": "YulExpressionStatement",
                            "src": "9383:22:69"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9439:4:69",
                                      "nodeType": "YulLiteral",
                                      "src": "9439:4:69",
                                      "type": "",
                                      "value": "0x0c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9445:4:69",
                                      "nodeType": "YulLiteral",
                                      "src": "9445:4:69",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "keccak256",
                                    "nativeSrc": "9429:9:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "9429:9:69"
                                  },
                                  "nativeSrc": "9429:21:69",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9429:21:69"
                                },
                                {
                                  "name": "expires",
                                  "nativeSrc": "9452:7:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "9452:7:69"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nativeSrc": "9422:6:69",
                                "nodeType": "YulIdentifier",
                                "src": "9422:6:69"
                              },
                              "nativeSrc": "9422:38:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9422:38:69"
                            },
                            "nativeSrc": "9422:38:69",
                            "nodeType": "YulExpressionStatement",
                            "src": "9422:38:69"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9546:1:69",
                                  "nodeType": "YulLiteral",
                                  "src": "9546:1:69",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "9549:1:69",
                                  "nodeType": "YulLiteral",
                                  "src": "9549:1:69",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "_OWNERSHIP_HANDOVER_REQUESTED_EVENT_SIGNATURE",
                                  "nativeSrc": "9552:45:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "9552:45:69"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "caller",
                                    "nativeSrc": "9599:6:69",
                                    "nodeType": "YulIdentifier",
                                    "src": "9599:6:69"
                                  },
                                  "nativeSrc": "9599:8:69",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9599:8:69"
                                }
                              ],
                              "functionName": {
                                "name": "log2",
                                "nativeSrc": "9541:4:69",
                                "nodeType": "YulIdentifier",
                                "src": "9541:4:69"
                              },
                              "nativeSrc": "9541:67:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9541:67:69"
                            },
                            "nativeSrc": "9541:67:69",
                            "nodeType": "YulExpressionStatement",
                            "src": "9541:67:69"
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 53981,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "9346:19:69",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53969,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "9552:45:69",
                          "valueSize": 1
                        },
                        {
                          "declaration": 54066,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "9452:7:69",
                          "valueSize": 1
                        }
                      ],
                      "id": 54073,
                      "nodeType": "InlineAssembly",
                      "src": "9239:383:69"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 54062,
              "nodeType": "StructuredDocumentation",
              "src": "8868:148:69",
              "text": "@dev Request a two-step ownership handover to the caller.\n The request will automatically expire in 48 hours (172800 seconds) by default."
            },
            "functionSelector": "25692962",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestOwnershipHandover",
            "nameLocation": "9030:24:69",
            "parameters": {
              "id": 54063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9054:2:69"
            },
            "returnParameters": {
              "id": 54064,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9080:0:69"
            },
            "scope": 54123,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54082,
            "nodeType": "FunctionDefinition",
            "src": "9720:456:69",
            "nodes": [],
            "body": {
              "id": 54081,
              "nodeType": "Block",
              "src": "9778:398:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "9840:330:69",
                    "nodeType": "YulBlock",
                    "src": "9840:330:69",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9916:4:69",
                              "nodeType": "YulLiteral",
                              "src": "9916:4:69",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_HANDOVER_SLOT_SEED",
                              "nativeSrc": "9922:19:69",
                              "nodeType": "YulIdentifier",
                              "src": "9922:19:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9909:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "9909:6:69"
                          },
                          "nativeSrc": "9909:33:69",
                          "nodeType": "YulFunctionCall",
                          "src": "9909:33:69"
                        },
                        "nativeSrc": "9909:33:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "9909:33:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9962:4:69",
                              "nodeType": "YulLiteral",
                              "src": "9962:4:69",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "9968:6:69",
                                "nodeType": "YulIdentifier",
                                "src": "9968:6:69"
                              },
                              "nativeSrc": "9968:8:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9968:8:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9955:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "9955:6:69"
                          },
                          "nativeSrc": "9955:22:69",
                          "nodeType": "YulFunctionCall",
                          "src": "9955:22:69"
                        },
                        "nativeSrc": "9955:22:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "9955:22:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "10007:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "10007:4:69",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10013:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "10013:4:69",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "9997:9:69",
                                "nodeType": "YulIdentifier",
                                "src": "9997:9:69"
                              },
                              "nativeSrc": "9997:21:69",
                              "nodeType": "YulFunctionCall",
                              "src": "9997:21:69"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10020:1:69",
                              "nodeType": "YulLiteral",
                              "src": "10020:1:69",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "9990:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "9990:6:69"
                          },
                          "nativeSrc": "9990:32:69",
                          "nodeType": "YulFunctionCall",
                          "src": "9990:32:69"
                        },
                        "nativeSrc": "9990:32:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "9990:32:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10099:1:69",
                              "nodeType": "YulLiteral",
                              "src": "10099:1:69",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10102:1:69",
                              "nodeType": "YulLiteral",
                              "src": "10102:1:69",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_OWNERSHIP_HANDOVER_CANCELED_EVENT_SIGNATURE",
                              "nativeSrc": "10105:44:69",
                              "nodeType": "YulIdentifier",
                              "src": "10105:44:69"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "10151:6:69",
                                "nodeType": "YulIdentifier",
                                "src": "10151:6:69"
                              },
                              "nativeSrc": "10151:8:69",
                              "nodeType": "YulFunctionCall",
                              "src": "10151:8:69"
                            }
                          ],
                          "functionName": {
                            "name": "log2",
                            "nativeSrc": "10094:4:69",
                            "nodeType": "YulIdentifier",
                            "src": "10094:4:69"
                          },
                          "nativeSrc": "10094:66:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10094:66:69"
                        },
                        "nativeSrc": "10094:66:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "10094:66:69"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 53981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9922:19:69",
                      "valueSize": 1
                    },
                    {
                      "declaration": 53973,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10105:44:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54080,
                  "nodeType": "InlineAssembly",
                  "src": "9831:339:69"
                }
              ]
            },
            "documentation": {
              "id": 54077,
              "nodeType": "StructuredDocumentation",
              "src": "9644:71:69",
              "text": "@dev Cancels the two-step ownership handover to the caller, if any."
            },
            "functionSelector": "54d1f13d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancelOwnershipHandover",
            "nameLocation": "9729:23:69",
            "parameters": {
              "id": 54078,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9752:2:69"
            },
            "returnParameters": {
              "id": 54079,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9778:0:69"
            },
            "scope": 54123,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54096,
            "nodeType": "FunctionDefinition",
            "src": "10363:708:69",
            "nodes": [],
            "body": {
              "id": 54095,
              "nodeType": "Block",
              "src": "10453:618:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "10515:517:69",
                    "nodeType": "YulBlock",
                    "src": "10515:517:69",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10591:4:69",
                              "nodeType": "YulLiteral",
                              "src": "10591:4:69",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_HANDOVER_SLOT_SEED",
                              "nativeSrc": "10597:19:69",
                              "nodeType": "YulIdentifier",
                              "src": "10597:19:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10584:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "10584:6:69"
                          },
                          "nativeSrc": "10584:33:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10584:33:69"
                        },
                        "nativeSrc": "10584:33:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "10584:33:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10637:4:69",
                              "nodeType": "YulLiteral",
                              "src": "10637:4:69",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "pendingOwner",
                              "nativeSrc": "10643:12:69",
                              "nodeType": "YulIdentifier",
                              "src": "10643:12:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10630:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "10630:6:69"
                          },
                          "nativeSrc": "10630:26:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10630:26:69"
                        },
                        "nativeSrc": "10630:26:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "10630:26:69"
                      },
                      {
                        "nativeSrc": "10669:41:69",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10669:41:69",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10699:4:69",
                              "nodeType": "YulLiteral",
                              "src": "10699:4:69",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10705:4:69",
                              "nodeType": "YulLiteral",
                              "src": "10705:4:69",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "10689:9:69",
                            "nodeType": "YulIdentifier",
                            "src": "10689:9:69"
                          },
                          "nativeSrc": "10689:21:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10689:21:69"
                        },
                        "variables": [
                          {
                            "name": "handoverSlot",
                            "nativeSrc": "10673:12:69",
                            "nodeType": "YulTypedName",
                            "src": "10673:12:69",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "10826:117:69",
                          "nodeType": "YulBlock",
                          "src": "10826:117:69",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10851:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "10851:4:69",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10857:10:69",
                                    "nodeType": "YulLiteral",
                                    "src": "10857:10:69",
                                    "type": "",
                                    "value": "0x6f5e8818"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "10844:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "10844:6:69"
                                },
                                "nativeSrc": "10844:24:69",
                                "nodeType": "YulFunctionCall",
                                "src": "10844:24:69"
                              },
                              "nativeSrc": "10844:24:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "10844:24:69"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10918:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "10918:4:69",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10924:4:69",
                                    "nodeType": "YulLiteral",
                                    "src": "10924:4:69",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "10911:6:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "10911:6:69"
                                },
                                "nativeSrc": "10911:18:69",
                                "nodeType": "YulFunctionCall",
                                "src": "10911:18:69"
                              },
                              "nativeSrc": "10911:18:69",
                              "nodeType": "YulExpressionStatement",
                              "src": "10911:18:69"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "timestamp",
                                "nativeSrc": "10792:9:69",
                                "nodeType": "YulIdentifier",
                                "src": "10792:9:69"
                              },
                              "nativeSrc": "10792:11:69",
                              "nodeType": "YulFunctionCall",
                              "src": "10792:11:69"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "handoverSlot",
                                  "nativeSrc": "10811:12:69",
                                  "nodeType": "YulIdentifier",
                                  "src": "10811:12:69"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "10805:5:69",
                                "nodeType": "YulIdentifier",
                                "src": "10805:5:69"
                              },
                              "nativeSrc": "10805:19:69",
                              "nodeType": "YulFunctionCall",
                              "src": "10805:19:69"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "10789:2:69",
                            "nodeType": "YulIdentifier",
                            "src": "10789:2:69"
                          },
                          "nativeSrc": "10789:36:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10789:36:69"
                        },
                        "nativeSrc": "10786:157:69",
                        "nodeType": "YulIf",
                        "src": "10786:157:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "handoverSlot",
                              "nativeSrc": "11006:12:69",
                              "nodeType": "YulIdentifier",
                              "src": "11006:12:69"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11020:1:69",
                              "nodeType": "YulLiteral",
                              "src": "11020:1:69",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "10999:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "10999:6:69"
                          },
                          "nativeSrc": "10999:23:69",
                          "nodeType": "YulFunctionCall",
                          "src": "10999:23:69"
                        },
                        "nativeSrc": "10999:23:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "10999:23:69"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 53981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10597:19:69",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54085,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10643:12:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54090,
                  "nodeType": "InlineAssembly",
                  "src": "10506:526:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54092,
                        "name": "pendingOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54085,
                        "src": "11051:12:69",
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
                      "id": 54091,
                      "name": "_setOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54016,
                      "src": "11041:9:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 54093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11041:23:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54094,
                  "nodeType": "ExpressionStatement",
                  "src": "11041:23:69"
                }
              ]
            },
            "documentation": {
              "id": 54083,
              "nodeType": "StructuredDocumentation",
              "src": "10182:176:69",
              "text": "@dev Allows the owner to complete the two-step ownership handover to `pendingOwner`.\n Reverts if there is no existing ownership handover requested by `pendingOwner`."
            },
            "functionSelector": "f04e283e",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54088,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54087,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "10443:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "10443:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "10443:9:69"
              }
            ],
            "name": "completeOwnershipHandover",
            "nameLocation": "10372:25:69",
            "parameters": {
              "id": 54086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54085,
                  "mutability": "mutable",
                  "name": "pendingOwner",
                  "nameLocation": "10406:12:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54096,
                  "src": "10398:20:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54084,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10398:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10397:22:69"
            },
            "returnParameters": {
              "id": 54089,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10453:0:69"
            },
            "scope": 54123,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54104,
            "nodeType": "FunctionDefinition",
            "src": "11408:182:69",
            "nodes": [],
            "body": {
              "id": 54103,
              "nodeType": "Block",
              "src": "11470:120:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "11532:52:69",
                    "nodeType": "YulBlock",
                    "src": "11532:52:69",
                    "statements": [
                      {
                        "nativeSrc": "11546:28:69",
                        "nodeType": "YulAssignment",
                        "src": "11546:28:69",
                        "value": {
                          "arguments": [
                            {
                              "name": "_OWNER_SLOT",
                              "nativeSrc": "11562:11:69",
                              "nodeType": "YulIdentifier",
                              "src": "11562:11:69"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "11556:5:69",
                            "nodeType": "YulIdentifier",
                            "src": "11556:5:69"
                          },
                          "nativeSrc": "11556:18:69",
                          "nodeType": "YulFunctionCall",
                          "src": "11556:18:69"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "11546:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "11546:6:69"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 53977,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11562:11:69",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11546:6:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54102,
                  "nodeType": "InlineAssembly",
                  "src": "11523:61:69"
                }
              ]
            },
            "documentation": {
              "id": 54097,
              "nodeType": "StructuredDocumentation",
              "src": "11360:43:69",
              "text": "@dev Returns the owner of the contract."
            },
            "functionSelector": "8da5cb5b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "11417:5:69",
            "parameters": {
              "id": 54098,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11422:2:69"
            },
            "returnParameters": {
              "id": 54101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54100,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "11462:6:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54104,
                  "src": "11454:14:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11454:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11453:16:69"
            },
            "scope": 54123,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54114,
            "nodeType": "FunctionDefinition",
            "src": "11693:435:69",
            "nodes": [],
            "body": {
              "id": 54113,
              "nodeType": "Block",
              "src": "11832:296:69",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "11894:228:69",
                    "nodeType": "YulBlock",
                    "src": "11894:228:69",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11957:4:69",
                              "nodeType": "YulLiteral",
                              "src": "11957:4:69",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_HANDOVER_SLOT_SEED",
                              "nativeSrc": "11963:19:69",
                              "nodeType": "YulIdentifier",
                              "src": "11963:19:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11950:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "11950:6:69"
                          },
                          "nativeSrc": "11950:33:69",
                          "nodeType": "YulFunctionCall",
                          "src": "11950:33:69"
                        },
                        "nativeSrc": "11950:33:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "11950:33:69"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12003:4:69",
                              "nodeType": "YulLiteral",
                              "src": "12003:4:69",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "pendingOwner",
                              "nativeSrc": "12009:12:69",
                              "nodeType": "YulIdentifier",
                              "src": "12009:12:69"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11996:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "11996:6:69"
                          },
                          "nativeSrc": "11996:26:69",
                          "nodeType": "YulFunctionCall",
                          "src": "11996:26:69"
                        },
                        "nativeSrc": "11996:26:69",
                        "nodeType": "YulExpressionStatement",
                        "src": "11996:26:69"
                      },
                      {
                        "nativeSrc": "12074:38:69",
                        "nodeType": "YulAssignment",
                        "src": "12074:38:69",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "12100:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "12100:4:69",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "12106:4:69",
                                  "nodeType": "YulLiteral",
                                  "src": "12106:4:69",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "12090:9:69",
                                "nodeType": "YulIdentifier",
                                "src": "12090:9:69"
                              },
                              "nativeSrc": "12090:21:69",
                              "nodeType": "YulFunctionCall",
                              "src": "12090:21:69"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "12084:5:69",
                            "nodeType": "YulIdentifier",
                            "src": "12084:5:69"
                          },
                          "nativeSrc": "12084:28:69",
                          "nodeType": "YulFunctionCall",
                          "src": "12084:28:69"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "12074:6:69",
                            "nodeType": "YulIdentifier",
                            "src": "12074:6:69"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 53981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11963:19:69",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12009:12:69",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54110,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12074:6:69",
                      "valueSize": 1
                    }
                  ],
                  "id": 54112,
                  "nodeType": "InlineAssembly",
                  "src": "11885:237:69"
                }
              ]
            },
            "documentation": {
              "id": 54105,
              "nodeType": "StructuredDocumentation",
              "src": "11596:92:69",
              "text": "@dev Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
            },
            "functionSelector": "fee81cf4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ownershipHandoverExpiresAt",
            "nameLocation": "11702:26:69",
            "parameters": {
              "id": 54108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54107,
                  "mutability": "mutable",
                  "name": "pendingOwner",
                  "nameLocation": "11737:12:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54114,
                  "src": "11729:20:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11729:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11728:22:69"
            },
            "returnParameters": {
              "id": 54111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54110,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "11820:6:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54114,
                  "src": "11812:14:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11812:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11811:16:69"
            },
            "scope": 54123,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 54122,
            "nodeType": "ModifierDefinition",
            "src": "12478:70:69",
            "nodes": [],
            "body": {
              "id": 54121,
              "nodeType": "Block",
              "src": "12507:41:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 54117,
                      "name": "_checkOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54022,
                      "src": "12517:11:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 54118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12517:13:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54119,
                  "nodeType": "ExpressionStatement",
                  "src": "12517:13:69"
                },
                {
                  "id": 54120,
                  "nodeType": "PlaceholderStatement",
                  "src": "12540:1:69"
                }
              ]
            },
            "documentation": {
              "id": 54115,
              "nodeType": "StructuredDocumentation",
              "src": "12417:56:69",
              "text": "@dev Marks a function as only callable by the owner."
            },
            "name": "onlyOwner",
            "nameLocation": "12487:9:69",
            "parameters": {
              "id": 54116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12496:2:69"
            },
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Ownable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 53932,
          "nodeType": "StructuredDocumentation",
          "src": "57:514:69",
          "text": "@notice Simple single owner authorization mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/auth/Ownable.sol)\n @dev Note:\n This implementation does NOT auto-initialize the owner to `msg.sender`.\n You MUST call the `_initializeOwner` in the constructor / initializer.\n While the ownable portion follows\n [EIP-173](https://eips.ethereum.org/EIPS/eip-173) for compatibility,\n the nomenclature for the 2-step ownership handover may be unique to this codebase."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          54123
        ],
        "name": "Ownable",
        "nameLocation": "589:7:69",
        "scope": 54124,
        "usedErrors": [
          53935,
          53938,
          53941,
          53944
        ],
        "usedEvents": [
          53951,
          53956,
          53961
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 69
} as const;