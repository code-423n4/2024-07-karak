export const PausableUpgradeable = {
  "abi": [
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
      "name": "NotInitializing",
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
    "paused()": "5c975abb"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which allows children to implement an emergency stop mechanism that can be triggered by an authorized account. This module is used through inheritance. It will make available the modifiers `whenNotPaused` and `whenPaused`, which can be applied to the functions of your contract. Note that they will not be pausable by simply including this module, only once the modifiers are put in place.\",\"errors\":{\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":\"PausableUpgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x92915b7f7f642c6be3f65bfd1522feb5d5b6ef25f755f4dbb51df32c868f2f97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://85ad36d5cc7e190e1ee6c94b24659bc3a31396c4c36b6ffa6a509e10661f8007\",\"dweb:/ipfs/QmPFyc4zMh2zo6YWZt25gjm3YdR2hg6wGETaWw256fMmJJ\"]}},\"version\":1}",
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
          "name": "NotInitializing"
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "paused()": {
            "details": "Returns true if the contract is paused, and false otherwise."
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol": "PausableUpgradeable"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol",
    "id": 47100,
    "exportedSymbols": {
      "ContextUpgradeable": [
        46923
      ],
      "Initializable": [
        46877
      ],
      "PausableUpgradeable": [
        47099
      ]
    },
    "nodeType": "SourceUnit",
    "src": "102:3753:26",
    "nodes": [
      {
        "id": 46925,
        "nodeType": "PragmaDirective",
        "src": "102:24:26",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 46927,
        "nodeType": "ImportDirective",
        "src": "128:67:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47100,
        "sourceUnit": 46924,
        "symbolAliases": [
          {
            "foreign": {
              "id": 46926,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46923,
              "src": "136:18:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 46929,
        "nodeType": "ImportDirective",
        "src": "196:63:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47100,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 46928,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "204:13:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47099,
        "nodeType": "ContractDefinition",
        "src": "701:3153:26",
        "nodes": [
          {
            "id": 46938,
            "nodeType": "StructDefinition",
            "src": "853:52:26",
            "nodes": [],
            "canonicalName": "PausableUpgradeable.PausableStorage",
            "documentation": {
              "id": 46935,
              "nodeType": "StructuredDocumentation",
              "src": "782:66:26",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.Pausable"
            },
            "members": [
              {
                "constant": false,
                "id": 46937,
                "mutability": "mutable",
                "name": "_paused",
                "nameLocation": "891:7:26",
                "nodeType": "VariableDeclaration",
                "scope": 46938,
                "src": "886:12:26",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 46936,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "886:4:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PausableStorage",
            "nameLocation": "860:15:26",
            "scope": 47099,
            "visibility": "public"
          },
          {
            "id": 46941,
            "nodeType": "VariableDeclaration",
            "src": "1023:117:26",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PausableStorageLocation",
            "nameLocation": "1048:23:26",
            "scope": 47099,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 46939,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1023:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307863643565643135633665313837653737653961656538383138346332316634663231383261623538323763623362376530376662656463643633663033333030",
              "id": 46940,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1074:66:26",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_92891662540554778686986514950364265630913525426840345632122912437671245656832_by_1",
                "typeString": "int_const 9289...(69 digits omitted)...6832"
              },
              "value": "0xcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300"
            },
            "visibility": "private"
          },
          {
            "id": 46949,
            "nodeType": "FunctionDefinition",
            "src": "1147:162:26",
            "nodes": [],
            "body": {
              "id": 46948,
              "nodeType": "Block",
              "src": "1227:82:26",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1246:57:26",
                    "nodeType": "YulBlock",
                    "src": "1246:57:26",
                    "statements": [
                      {
                        "nativeSrc": "1260:33:26",
                        "nodeType": "YulAssignment",
                        "src": "1260:33:26",
                        "value": {
                          "name": "PausableStorageLocation",
                          "nativeSrc": "1270:23:26",
                          "nodeType": "YulIdentifier",
                          "src": "1270:23:26"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "1260:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "1260:6:26"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 46945,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "1260:6:26",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 46941,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1270:23:26",
                      "valueSize": 1
                    }
                  ],
                  "id": 46947,
                  "nodeType": "InlineAssembly",
                  "src": "1237:66:26"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getPausableStorage",
            "nameLocation": "1156:19:26",
            "parameters": {
              "id": 46942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1175:2:26"
            },
            "returnParameters": {
              "id": 46946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46945,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "1224:1:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 46949,
                  "src": "1200:25:26",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                    "typeString": "struct PausableUpgradeable.PausableStorage"
                  },
                  "typeName": {
                    "id": 46944,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46943,
                      "name": "PausableStorage",
                      "nameLocations": [
                        "1200:15:26"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46938,
                      "src": "1200:15:26"
                    },
                    "referencedDeclaration": 46938,
                    "src": "1200:15:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                      "typeString": "struct PausableUpgradeable.PausableStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1199:27:26"
            },
            "scope": 47099,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 46954,
            "nodeType": "EventDefinition",
            "src": "1393:30:26",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 46950,
              "nodeType": "StructuredDocumentation",
              "src": "1315:73:26",
              "text": " @dev Emitted when the pause is triggered by `account`."
            },
            "eventSelector": "62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
            "name": "Paused",
            "nameLocation": "1399:6:26",
            "parameters": {
              "id": 46953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46952,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1414:7:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 46954,
                  "src": "1406:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1406:7:26",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1405:17:26"
            }
          },
          {
            "id": 46959,
            "nodeType": "EventDefinition",
            "src": "1504:32:26",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 46955,
              "nodeType": "StructuredDocumentation",
              "src": "1429:70:26",
              "text": " @dev Emitted when the pause is lifted by `account`."
            },
            "eventSelector": "5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
            "name": "Unpaused",
            "nameLocation": "1510:8:26",
            "parameters": {
              "id": 46958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46957,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1527:7:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 46959,
                  "src": "1519:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1519:7:26",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1518:17:26"
            }
          },
          {
            "id": 46962,
            "nodeType": "ErrorDefinition",
            "src": "1623:22:26",
            "nodes": [],
            "documentation": {
              "id": 46960,
              "nodeType": "StructuredDocumentation",
              "src": "1542:76:26",
              "text": " @dev The operation failed because the contract is paused."
            },
            "errorSelector": "d93c0665",
            "name": "EnforcedPause",
            "nameLocation": "1629:13:26",
            "parameters": {
              "id": 46961,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1642:2:26"
            }
          },
          {
            "id": 46965,
            "nodeType": "ErrorDefinition",
            "src": "1736:22:26",
            "nodes": [],
            "documentation": {
              "id": 46963,
              "nodeType": "StructuredDocumentation",
              "src": "1651:80:26",
              "text": " @dev The operation failed because the contract is not paused."
            },
            "errorSelector": "8dfc202b",
            "name": "ExpectedPause",
            "nameLocation": "1742:13:26",
            "parameters": {
              "id": 46964,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1755:2:26"
            }
          },
          {
            "id": 46975,
            "nodeType": "FunctionDefinition",
            "src": "1836:97:26",
            "nodes": [],
            "body": {
              "id": 46974,
              "nodeType": "Block",
              "src": "1889:44:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46971,
                      "name": "__Pausable_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46993,
                      "src": "1899:25:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 46972,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1899:27:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46973,
                  "nodeType": "ExpressionStatement",
                  "src": "1899:27:26"
                }
              ]
            },
            "documentation": {
              "id": 46966,
              "nodeType": "StructuredDocumentation",
              "src": "1764:67:26",
              "text": " @dev Initializes the contract in unpaused state."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 46969,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 46968,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "1872:16:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "1872:16:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "1872:16:26"
              }
            ],
            "name": "__Pausable_init",
            "nameLocation": "1845:15:26",
            "parameters": {
              "id": 46967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1860:2:26"
            },
            "returnParameters": {
              "id": 46970,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1889:0:26"
            },
            "scope": 47099,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46993,
            "nodeType": "FunctionDefinition",
            "src": "1939:156:26",
            "nodes": [],
            "body": {
              "id": 46992,
              "nodeType": "Block",
              "src": "2002:93:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46982
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46982,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "2036:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 46992,
                      "src": "2012:25:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                        "typeString": "struct PausableUpgradeable.PausableStorage"
                      },
                      "typeName": {
                        "id": 46981,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46980,
                          "name": "PausableStorage",
                          "nameLocations": [
                            "2012:15:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46938,
                          "src": "2012:15:26"
                        },
                        "referencedDeclaration": 46938,
                        "src": "2012:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46985,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46983,
                      "name": "_getPausableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46949,
                      "src": "2040:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_PausableStorage_$46938_storage_ptr_$",
                        "typeString": "function () pure returns (struct PausableUpgradeable.PausableStorage storage pointer)"
                      }
                    },
                    "id": 46984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2040:21:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                      "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2012:49:26"
                },
                {
                  "expression": {
                    "id": 46990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 46986,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46982,
                        "src": "2071:1:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                        }
                      },
                      "id": 46988,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2073:7:26",
                      "memberName": "_paused",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46937,
                      "src": "2071:9:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 46989,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2083:5:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "2071:17:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46991,
                  "nodeType": "ExpressionStatement",
                  "src": "2071:17:26"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 46978,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 46977,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "1985:16:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "1985:16:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "1985:16:26"
              }
            ],
            "name": "__Pausable_init_unchained",
            "nameLocation": "1948:25:26",
            "parameters": {
              "id": 46976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1973:2:26"
            },
            "returnParameters": {
              "id": 46979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2002:0:26"
            },
            "scope": 47099,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47001,
            "nodeType": "ModifierDefinition",
            "src": "2281:72:26",
            "nodes": [],
            "body": {
              "id": 47000,
              "nodeType": "Block",
              "src": "2306:47:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46996,
                      "name": "_requireNotPaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47037,
                      "src": "2316:17:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 46997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2316:19:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46998,
                  "nodeType": "ExpressionStatement",
                  "src": "2316:19:26"
                },
                {
                  "id": 46999,
                  "nodeType": "PlaceholderStatement",
                  "src": "2345:1:26"
                }
              ]
            },
            "documentation": {
              "id": 46994,
              "nodeType": "StructuredDocumentation",
              "src": "2101:175:26",
              "text": " @dev Modifier to make a function callable only when the contract is not paused.\n Requirements:\n - The contract must not be paused."
            },
            "name": "whenNotPaused",
            "nameLocation": "2290:13:26",
            "parameters": {
              "id": 46995,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2303:2:26"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47009,
            "nodeType": "ModifierDefinition",
            "src": "2531:66:26",
            "nodes": [],
            "body": {
              "id": 47008,
              "nodeType": "Block",
              "src": "2553:44:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47004,
                      "name": "_requirePaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47050,
                      "src": "2563:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 47005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2563:16:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47006,
                  "nodeType": "ExpressionStatement",
                  "src": "2563:16:26"
                },
                {
                  "id": 47007,
                  "nodeType": "PlaceholderStatement",
                  "src": "2589:1:26"
                }
              ]
            },
            "documentation": {
              "id": 47002,
              "nodeType": "StructuredDocumentation",
              "src": "2359:167:26",
              "text": " @dev Modifier to make a function callable only when the contract is paused.\n Requirements:\n - The contract must be paused."
            },
            "name": "whenPaused",
            "nameLocation": "2540:10:26",
            "parameters": {
              "id": 47003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2550:2:26"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47025,
            "nodeType": "FunctionDefinition",
            "src": "2692:145:26",
            "nodes": [],
            "body": {
              "id": 47024,
              "nodeType": "Block",
              "src": "2745:92:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47017
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47017,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "2779:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 47024,
                      "src": "2755:25:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                        "typeString": "struct PausableUpgradeable.PausableStorage"
                      },
                      "typeName": {
                        "id": 47016,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47015,
                          "name": "PausableStorage",
                          "nameLocations": [
                            "2755:15:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46938,
                          "src": "2755:15:26"
                        },
                        "referencedDeclaration": 46938,
                        "src": "2755:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47020,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47018,
                      "name": "_getPausableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46949,
                      "src": "2783:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_PausableStorage_$46938_storage_ptr_$",
                        "typeString": "function () pure returns (struct PausableUpgradeable.PausableStorage storage pointer)"
                      }
                    },
                    "id": 47019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2783:21:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                      "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2755:49:26"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 47021,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47017,
                      "src": "2821:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                        "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                      }
                    },
                    "id": 47022,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2823:7:26",
                    "memberName": "_paused",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 46937,
                    "src": "2821:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47014,
                  "id": 47023,
                  "nodeType": "Return",
                  "src": "2814:16:26"
                }
              ]
            },
            "documentation": {
              "id": 47010,
              "nodeType": "StructuredDocumentation",
              "src": "2603:84:26",
              "text": " @dev Returns true if the contract is paused, and false otherwise."
            },
            "functionSelector": "5c975abb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "paused",
            "nameLocation": "2701:6:26",
            "parameters": {
              "id": 47011,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2707:2:26"
            },
            "returnParameters": {
              "id": 47014,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47013,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47025,
                  "src": "2739:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47012,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2739:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2738:6:26"
            },
            "scope": 47099,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47037,
            "nodeType": "FunctionDefinition",
            "src": "2905:128:26",
            "nodes": [],
            "body": {
              "id": 47036,
              "nodeType": "Block",
              "src": "2956:77:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47029,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47025,
                      "src": "2970:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                        "typeString": "function () view returns (bool)"
                      }
                    },
                    "id": 47030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2970:8:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47035,
                  "nodeType": "IfStatement",
                  "src": "2966:61:26",
                  "trueBody": {
                    "id": 47034,
                    "nodeType": "Block",
                    "src": "2980:47:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 47031,
                            "name": "EnforcedPause",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46962,
                            "src": "3001:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 47032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3001:15:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47033,
                        "nodeType": "RevertStatement",
                        "src": "2994:22:26"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47026,
              "nodeType": "StructuredDocumentation",
              "src": "2843:57:26",
              "text": " @dev Throws if the contract is paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requireNotPaused",
            "nameLocation": "2914:17:26",
            "parameters": {
              "id": 47027,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2931:2:26"
            },
            "returnParameters": {
              "id": 47028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2956:0:26"
            },
            "scope": 47099,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47050,
            "nodeType": "FunctionDefinition",
            "src": "3105:126:26",
            "nodes": [],
            "body": {
              "id": 47049,
              "nodeType": "Block",
              "src": "3153:78:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 47043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3167:9:26",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 47041,
                        "name": "paused",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47025,
                        "src": "3168:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 47042,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3168:8:26",
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
                  "id": 47048,
                  "nodeType": "IfStatement",
                  "src": "3163:62:26",
                  "trueBody": {
                    "id": 47047,
                    "nodeType": "Block",
                    "src": "3178:47:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 47044,
                            "name": "ExpectedPause",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46965,
                            "src": "3199:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 47045,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3199:15:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47046,
                        "nodeType": "RevertStatement",
                        "src": "3192:22:26"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47038,
              "nodeType": "StructuredDocumentation",
              "src": "3039:61:26",
              "text": " @dev Throws if the contract is not paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requirePaused",
            "nameLocation": "3114:14:26",
            "parameters": {
              "id": 47039,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3128:2:26"
            },
            "returnParameters": {
              "id": 47040,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3153:0:26"
            },
            "scope": 47099,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47074,
            "nodeType": "FunctionDefinition",
            "src": "3366:176:26",
            "nodes": [],
            "body": {
              "id": 47073,
              "nodeType": "Block",
              "src": "3415:127:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47058
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47058,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3449:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 47073,
                      "src": "3425:25:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                        "typeString": "struct PausableUpgradeable.PausableStorage"
                      },
                      "typeName": {
                        "id": 47057,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47056,
                          "name": "PausableStorage",
                          "nameLocations": [
                            "3425:15:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46938,
                          "src": "3425:15:26"
                        },
                        "referencedDeclaration": 46938,
                        "src": "3425:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47061,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47059,
                      "name": "_getPausableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46949,
                      "src": "3453:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_PausableStorage_$46938_storage_ptr_$",
                        "typeString": "function () pure returns (struct PausableUpgradeable.PausableStorage storage pointer)"
                      }
                    },
                    "id": 47060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3453:21:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                      "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3425:49:26"
                },
                {
                  "expression": {
                    "id": 47066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47062,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47058,
                        "src": "3484:1:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                        }
                      },
                      "id": 47064,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3486:7:26",
                      "memberName": "_paused",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46937,
                      "src": "3484:9:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 47065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3496:4:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "3484:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47067,
                  "nodeType": "ExpressionStatement",
                  "src": "3484:16:26"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47069,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46905,
                          "src": "3522:10:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 47070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3522:12:26",
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
                      "id": 47068,
                      "name": "Paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46954,
                      "src": "3515:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 47071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3515:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47072,
                  "nodeType": "EmitStatement",
                  "src": "3510:25:26"
                }
              ]
            },
            "documentation": {
              "id": 47051,
              "nodeType": "StructuredDocumentation",
              "src": "3237:124:26",
              "text": " @dev Triggers stopped state.\n Requirements:\n - The contract must not be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47054,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47053,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "3401:13:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47001,
                  "src": "3401:13:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "3401:13:26"
              }
            ],
            "name": "_pause",
            "nameLocation": "3375:6:26",
            "parameters": {
              "id": 47052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3381:2:26"
            },
            "returnParameters": {
              "id": 47055,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3415:0:26"
            },
            "scope": 47099,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47098,
            "nodeType": "FunctionDefinition",
            "src": "3674:178:26",
            "nodes": [],
            "body": {
              "id": 47097,
              "nodeType": "Block",
              "src": "3722:130:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47082
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47082,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3756:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 47097,
                      "src": "3732:25:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                        "typeString": "struct PausableUpgradeable.PausableStorage"
                      },
                      "typeName": {
                        "id": 47081,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47080,
                          "name": "PausableStorage",
                          "nameLocations": [
                            "3732:15:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46938,
                          "src": "3732:15:26"
                        },
                        "referencedDeclaration": 46938,
                        "src": "3732:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47085,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47083,
                      "name": "_getPausableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46949,
                      "src": "3760:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_PausableStorage_$46938_storage_ptr_$",
                        "typeString": "function () pure returns (struct PausableUpgradeable.PausableStorage storage pointer)"
                      }
                    },
                    "id": 47084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3760:21:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                      "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3732:49:26"
                },
                {
                  "expression": {
                    "id": 47090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47086,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47082,
                        "src": "3791:1:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PausableStorage_$46938_storage_ptr",
                          "typeString": "struct PausableUpgradeable.PausableStorage storage pointer"
                        }
                      },
                      "id": 47088,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3793:7:26",
                      "memberName": "_paused",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46937,
                      "src": "3791:9:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 47089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3803:5:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "3791:17:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47091,
                  "nodeType": "ExpressionStatement",
                  "src": "3791:17:26"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47093,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46905,
                          "src": "3832:10:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 47094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3832:12:26",
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
                      "id": 47092,
                      "name": "Unpaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46959,
                      "src": "3823:8:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 47095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3823:22:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47096,
                  "nodeType": "EmitStatement",
                  "src": "3818:27:26"
                }
              ]
            },
            "documentation": {
              "id": 47075,
              "nodeType": "StructuredDocumentation",
              "src": "3548:121:26",
              "text": " @dev Returns to normal state.\n Requirements:\n - The contract must be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47078,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47077,
                  "name": "whenPaused",
                  "nameLocations": [
                    "3711:10:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47009,
                  "src": "3711:10:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "3711:10:26"
              }
            ],
            "name": "_unpause",
            "nameLocation": "3683:8:26",
            "parameters": {
              "id": 47076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3691:2:26"
            },
            "returnParameters": {
              "id": 47079,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3722:0:26"
            },
            "scope": 47099,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 46931,
              "name": "Initializable",
              "nameLocations": [
                "742:13:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "742:13:26"
            },
            "id": 46932,
            "nodeType": "InheritanceSpecifier",
            "src": "742:13:26"
          },
          {
            "baseName": {
              "id": 46933,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "757:18:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46923,
              "src": "757:18:26"
            },
            "id": 46934,
            "nodeType": "InheritanceSpecifier",
            "src": "757:18:26"
          }
        ],
        "canonicalName": "PausableUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 46930,
          "nodeType": "StructuredDocumentation",
          "src": "261:439:26",
          "text": " @dev Contract module which allows children to implement an emergency stop\n mechanism that can be triggered by an authorized account.\n This module is used through inheritance. It will make available the\n modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n the functions of your contract. Note that they will not be pausable by\n simply including this module, only once the modifiers are put in place."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          47099,
          46923,
          46877
        ],
        "name": "PausableUpgradeable",
        "nameLocation": "719:19:26",
        "scope": 47100,
        "usedErrors": [
          46640,
          46643,
          46962,
          46965
        ],
        "usedEvents": [
          46648,
          46954,
          46959
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 26
} as const;