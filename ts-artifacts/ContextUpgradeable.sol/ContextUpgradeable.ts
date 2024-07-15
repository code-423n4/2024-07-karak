export const ContextUpgradeable = {
  "abi": [
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":\"ContextUpgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]}},\"version\":1}",
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": "ContextUpgradeable"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
    "id": 46924,
    "exportedSymbols": {
      "ContextUpgradeable": [
        46923
      ],
      "Initializable": [
        46877
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:1093:25",
    "nodes": [
      {
        "id": 46879,
        "nodeType": "PragmaDirective",
        "src": "101:24:25",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 46881,
        "nodeType": "ImportDirective",
        "src": "126:63:25",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 46924,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 46880,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "134:13:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 46923,
        "nodeType": "ContractDefinition",
        "src": "688:505:25",
        "nodes": [
          {
            "id": 46890,
            "nodeType": "FunctionDefinition",
            "src": "748:59:25",
            "nodes": [],
            "body": {
              "id": 46889,
              "nodeType": "Block",
              "src": "800:7:25",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 46887,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 46886,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "783:16:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "783:16:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "783:16:25"
              }
            ],
            "name": "__Context_init",
            "nameLocation": "757:14:25",
            "parameters": {
              "id": 46885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "771:2:25"
            },
            "returnParameters": {
              "id": 46888,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "800:0:25"
            },
            "scope": 46923,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46896,
            "nodeType": "FunctionDefinition",
            "src": "813:69:25",
            "nodes": [],
            "body": {
              "id": 46895,
              "nodeType": "Block",
              "src": "875:7:25",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 46893,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 46892,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "858:16:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "858:16:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "858:16:25"
              }
            ],
            "name": "__Context_init_unchained",
            "nameLocation": "822:24:25",
            "parameters": {
              "id": 46891,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:2:25"
            },
            "returnParameters": {
              "id": 46894,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "875:0:25"
            },
            "scope": 46923,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46905,
            "nodeType": "FunctionDefinition",
            "src": "887:96:25",
            "nodes": [],
            "body": {
              "id": 46904,
              "nodeType": "Block",
              "src": "949:34:25",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 46901,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "966:3:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 46902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "970:6:25",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "966:10:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 46900,
                  "id": 46903,
                  "nodeType": "Return",
                  "src": "959:17:25"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "896:10:25",
            "parameters": {
              "id": 46897,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "906:2:25"
            },
            "returnParameters": {
              "id": 46900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46899,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46905,
                  "src": "940:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46898,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "940:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "939:9:25"
            },
            "scope": 46923,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 46914,
            "nodeType": "FunctionDefinition",
            "src": "989:99:25",
            "nodes": [],
            "body": {
              "id": 46913,
              "nodeType": "Block",
              "src": "1056:32:25",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 46910,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1073:3:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 46911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1077:4:25",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "1073:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 46909,
                  "id": 46912,
                  "nodeType": "Return",
                  "src": "1066:15:25"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "998:8:25",
            "parameters": {
              "id": 46906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:2:25"
            },
            "returnParameters": {
              "id": 46909,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46908,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46914,
                  "src": "1040:14:25",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46907,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1040:5:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1039:16:25"
            },
            "scope": 46923,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 46922,
            "nodeType": "FunctionDefinition",
            "src": "1094:97:25",
            "nodes": [],
            "body": {
              "id": 46921,
              "nodeType": "Block",
              "src": "1166:25:25",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 46919,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1183:1:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 46918,
                  "id": 46920,
                  "nodeType": "Return",
                  "src": "1176:8:25"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contextSuffixLength",
            "nameLocation": "1103:20:25",
            "parameters": {
              "id": 46915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1123:2:25"
            },
            "returnParameters": {
              "id": 46918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46917,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46922,
                  "src": "1157:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 46916,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1156:9:25"
            },
            "scope": 46923,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 46883,
              "name": "Initializable",
              "nameLocations": [
                "728:13:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "728:13:25"
            },
            "id": 46884,
            "nodeType": "InheritanceSpecifier",
            "src": "728:13:25"
          }
        ],
        "canonicalName": "ContextUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 46882,
          "nodeType": "StructuredDocumentation",
          "src": "191:496:25",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          46923,
          46877
        ],
        "name": "ContextUpgradeable",
        "nameLocation": "706:18:25",
        "scope": 46924,
        "usedErrors": [
          46640,
          46643
        ],
        "usedEvents": [
          46648
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 25
} as const;