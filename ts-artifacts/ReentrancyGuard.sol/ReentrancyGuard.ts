export const ReentrancyGuard = {
  "abi": [
    {
      "type": "error",
      "name": "Reentrancy",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/ReentrancyGuard.sol)\",\"errors\":{\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"_REENTRANCY_GUARD_SLOT\":{\"details\":\"Equivalent to: `uint72(bytes9(keccak256(\\\"_REENTRANCY_GUARD_SLOT\\\")))`. 9 bytes is large enough to avoid collisions with lower slots, but not too large to result in excessive bytecode bloat.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Reentrancy guard mixin.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]}},\"version\":1}",
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
          "name": "Reentrancy"
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
        "node_modules/solady/src/utils/ReentrancyGuard.sol": "ReentrancyGuard"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8",
        "urls": [
          "bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98",
          "dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
    "id": 58543,
    "exportedSymbols": {
      "ReentrancyGuard": [
        58542
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2301:75",
    "nodes": [
      {
        "id": 58520,
        "nodeType": "PragmaDirective",
        "src": "32:23:75",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 58542,
        "nodeType": "ContractDefinition",
        "src": "191:2141:75",
        "nodes": [
          {
            "id": 58524,
            "nodeType": "ErrorDefinition",
            "src": "556:19:75",
            "nodes": [],
            "documentation": {
              "id": 58522,
              "nodeType": "StructuredDocumentation",
              "src": "514:37:75",
              "text": "@dev Unauthorized reentrant call."
            },
            "errorSelector": "ab143c06",
            "name": "Reentrancy",
            "nameLocation": "562:10:75",
            "parameters": {
              "id": 58523,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "572:2:75"
            }
          },
          {
            "id": 58528,
            "nodeType": "VariableDeclaration",
            "src": "1082:70:75",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58525,
              "nodeType": "StructuredDocumentation",
              "src": "864:213:75",
              "text": "@dev Equivalent to: `uint72(bytes9(keccak256(\"_REENTRANCY_GUARD_SLOT\")))`.\n 9 bytes is large enough to avoid collisions with lower slots,\n but not too large to result in excessive bytecode bloat."
            },
            "mutability": "constant",
            "name": "_REENTRANCY_GUARD_SLOT",
            "nameLocation": "1107:22:75",
            "scope": 58542,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58526,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1082:7:75",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3078393239656565313439623462643231323638",
              "id": 58527,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1132:20:75",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2704676748321268830824_by_1",
                "typeString": "int_const 2704676748321268830824"
              },
              "value": "0x929eee149b4bd21268"
            },
            "visibility": "private"
          },
          {
            "id": 58535,
            "nodeType": "ModifierDefinition",
            "src": "1490:474:75",
            "nodes": [],
            "body": {
              "id": 58534,
              "nodeType": "Block",
              "src": "1522:442:75",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1584:236:75",
                    "nodeType": "YulBlock",
                    "src": "1584:236:75",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "1646:110:75",
                          "nodeType": "YulBlock",
                          "src": "1646:110:75",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1671:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "1671:4:75",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1677:10:75",
                                    "nodeType": "YulLiteral",
                                    "src": "1677:10:75",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "1664:6:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "1664:6:75"
                                },
                                "nativeSrc": "1664:24:75",
                                "nodeType": "YulFunctionCall",
                                "src": "1664:24:75"
                              },
                              "nativeSrc": "1664:24:75",
                              "nodeType": "YulExpressionStatement",
                              "src": "1664:24:75"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1731:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "1731:4:75",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1737:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "1737:4:75",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "1724:6:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "1724:6:75"
                                },
                                "nativeSrc": "1724:18:75",
                                "nodeType": "YulFunctionCall",
                                "src": "1724:18:75"
                              },
                              "nativeSrc": "1724:18:75",
                              "nodeType": "YulExpressionStatement",
                              "src": "1724:18:75"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "1610:22:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "1610:22:75"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "1604:5:75",
                                "nodeType": "YulIdentifier",
                                "src": "1604:5:75"
                              },
                              "nativeSrc": "1604:29:75",
                              "nodeType": "YulFunctionCall",
                              "src": "1604:29:75"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1635:7:75",
                                "nodeType": "YulIdentifier",
                                "src": "1635:7:75"
                              },
                              "nativeSrc": "1635:9:75",
                              "nodeType": "YulFunctionCall",
                              "src": "1635:9:75"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "1601:2:75",
                            "nodeType": "YulIdentifier",
                            "src": "1601:2:75"
                          },
                          "nativeSrc": "1601:44:75",
                          "nodeType": "YulFunctionCall",
                          "src": "1601:44:75"
                        },
                        "nativeSrc": "1598:158:75",
                        "nodeType": "YulIf",
                        "src": "1598:158:75"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1776:22:75",
                              "nodeType": "YulIdentifier",
                              "src": "1776:22:75"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1800:7:75",
                                "nodeType": "YulIdentifier",
                                "src": "1800:7:75"
                              },
                              "nativeSrc": "1800:9:75",
                              "nodeType": "YulFunctionCall",
                              "src": "1800:9:75"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1769:6:75",
                            "nodeType": "YulIdentifier",
                            "src": "1769:6:75"
                          },
                          "nativeSrc": "1769:41:75",
                          "nodeType": "YulFunctionCall",
                          "src": "1769:41:75"
                        },
                        "nativeSrc": "1769:41:75",
                        "nodeType": "YulExpressionStatement",
                        "src": "1769:41:75"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1610:22:75",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1776:22:75",
                      "valueSize": 1
                    }
                  ],
                  "id": 58531,
                  "nodeType": "InlineAssembly",
                  "src": "1575:245:75"
                },
                {
                  "id": 58532,
                  "nodeType": "PlaceholderStatement",
                  "src": "1829:1:75"
                },
                {
                  "AST": {
                    "nativeSrc": "1892:66:75",
                    "nodeType": "YulBlock",
                    "src": "1892:66:75",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1913:22:75",
                              "nodeType": "YulIdentifier",
                              "src": "1913:22:75"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "1937:8:75",
                                "nodeType": "YulIdentifier",
                                "src": "1937:8:75"
                              },
                              "nativeSrc": "1937:10:75",
                              "nodeType": "YulFunctionCall",
                              "src": "1937:10:75"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1906:6:75",
                            "nodeType": "YulIdentifier",
                            "src": "1906:6:75"
                          },
                          "nativeSrc": "1906:42:75",
                          "nodeType": "YulFunctionCall",
                          "src": "1906:42:75"
                        },
                        "nativeSrc": "1906:42:75",
                        "nodeType": "YulExpressionStatement",
                        "src": "1906:42:75"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1913:22:75",
                      "valueSize": 1
                    }
                  ],
                  "id": 58533,
                  "nodeType": "InlineAssembly",
                  "src": "1883:75:75"
                }
              ]
            },
            "documentation": {
              "id": 58529,
              "nodeType": "StructuredDocumentation",
              "src": "1442:43:75",
              "text": "@dev Guards a function from reentrancy."
            },
            "name": "nonReentrant",
            "nameLocation": "1499:12:75",
            "parameters": {
              "id": 58530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1511:2:75"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58541,
            "nodeType": "ModifierDefinition",
            "src": "2033:297:75",
            "nodes": [],
            "body": {
              "id": 58540,
              "nodeType": "Block",
              "src": "2069:261:75",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2131:182:75",
                    "nodeType": "YulBlock",
                    "src": "2131:182:75",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2193:110:75",
                          "nodeType": "YulBlock",
                          "src": "2193:110:75",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2218:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "2218:4:75",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2224:10:75",
                                    "nodeType": "YulLiteral",
                                    "src": "2224:10:75",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "2211:6:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "2211:6:75"
                                },
                                "nativeSrc": "2211:24:75",
                                "nodeType": "YulFunctionCall",
                                "src": "2211:24:75"
                              },
                              "nativeSrc": "2211:24:75",
                              "nodeType": "YulExpressionStatement",
                              "src": "2211:24:75"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2278:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "2278:4:75",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2284:4:75",
                                    "nodeType": "YulLiteral",
                                    "src": "2284:4:75",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "2271:6:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "2271:6:75"
                                },
                                "nativeSrc": "2271:18:75",
                                "nodeType": "YulFunctionCall",
                                "src": "2271:18:75"
                              },
                              "nativeSrc": "2271:18:75",
                              "nodeType": "YulExpressionStatement",
                              "src": "2271:18:75"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "2157:22:75",
                                  "nodeType": "YulIdentifier",
                                  "src": "2157:22:75"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "2151:5:75",
                                "nodeType": "YulIdentifier",
                                "src": "2151:5:75"
                              },
                              "nativeSrc": "2151:29:75",
                              "nodeType": "YulFunctionCall",
                              "src": "2151:29:75"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "2182:7:75",
                                "nodeType": "YulIdentifier",
                                "src": "2182:7:75"
                              },
                              "nativeSrc": "2182:9:75",
                              "nodeType": "YulFunctionCall",
                              "src": "2182:9:75"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "2148:2:75",
                            "nodeType": "YulIdentifier",
                            "src": "2148:2:75"
                          },
                          "nativeSrc": "2148:44:75",
                          "nodeType": "YulFunctionCall",
                          "src": "2148:44:75"
                        },
                        "nativeSrc": "2145:158:75",
                        "nodeType": "YulIf",
                        "src": "2145:158:75"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2157:22:75",
                      "valueSize": 1
                    }
                  ],
                  "id": 58538,
                  "nodeType": "InlineAssembly",
                  "src": "2122:191:75"
                },
                {
                  "id": 58539,
                  "nodeType": "PlaceholderStatement",
                  "src": "2322:1:75"
                }
              ]
            },
            "documentation": {
              "id": 58536,
              "nodeType": "StructuredDocumentation",
              "src": "1970:58:75",
              "text": "@dev Guards a view function from read-only reentrancy."
            },
            "name": "nonReadReentrant",
            "nameLocation": "2042:16:75",
            "parameters": {
              "id": 58537,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2058:2:75"
            },
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ReentrancyGuard",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58521,
          "nodeType": "StructuredDocumentation",
          "src": "57:134:75",
          "text": "@notice Reentrancy guard mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/ReentrancyGuard.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          58542
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "209:15:75",
        "scope": 58543,
        "usedErrors": [
          58524
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 75
} as const;