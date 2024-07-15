export const Clones = {
  "abi": [
    {
      "type": "error",
      "name": "ERC1167FailedCreateClone",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220ff592be5a6ab9f20ed246bac2007fb1b31b5b19157540f98071e4443845955bf64736f6c63430008190033",
    "sourceMap": "726:3433:38:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220ff592be5a6ab9f20ed246bac2007fb1b31b5b19157540f98071e4443845955bf64736f6c63430008190033",
    "sourceMap": "726:3433:38:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ERC1167FailedCreateClone\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"https://eips.ethereum.org/EIPS/eip-1167[EIP 1167] is a standard for deploying minimal proxy contracts, also known as \\\"clones\\\". > To simply and cheaply clone contract functionality in an immutable way, this standard specifies > a minimal bytecode implementation that delegates all calls to a known, fixed address. The library includes functions to deploy a proxy using either `create` (traditional deployment) or `create2` (salted deterministic deployment). It also includes functions to predict the addresses of clones deployed using the deterministic method.\",\"errors\":{\"ERC1167FailedCreateClone()\":[{\"details\":\"A clone instance deployment failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/Clones.sol\":\"Clones\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/Clones.sol\":{\"keccak256\":\"0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b\",\"dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX\"]}},\"version\":1}",
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
          "name": "ERC1167FailedCreateClone"
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
        "node_modules/@openzeppelin/contracts/proxy/Clones.sol": "Clones"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/proxy/Clones.sol": {
        "keccak256": "0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155",
        "urls": [
          "bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b",
          "dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/Clones.sol",
    "id": 49447,
    "exportedSymbols": {
      "Clones": [
        49446
      ]
    },
    "nodeType": "SourceUnit",
    "src": "100:4060:38",
    "nodes": [
      {
        "id": 49363,
        "nodeType": "PragmaDirective",
        "src": "100:24:38",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49446,
        "nodeType": "ContractDefinition",
        "src": "726:3433:38",
        "nodes": [
          {
            "id": 49367,
            "nodeType": "ErrorDefinition",
            "src": "811:33:38",
            "nodes": [],
            "documentation": {
              "id": 49365,
              "nodeType": "StructuredDocumentation",
              "src": "747:59:38",
              "text": " @dev A clone instance deployment failed."
            },
            "errorSelector": "c2f868f4",
            "name": "ERC1167FailedCreateClone",
            "nameLocation": "817:24:38",
            "parameters": {
              "id": 49366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:2:38"
            }
          },
          {
            "id": 49388,
            "nodeType": "FunctionDefinition",
            "src": "1047:787:38",
            "nodes": [],
            "body": {
              "id": 49387,
              "nodeType": "Block",
              "src": "1122:712:38",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1184:549:38",
                    "nodeType": "YulBlock",
                    "src": "1184:549:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1389:4:38",
                              "nodeType": "YulLiteral",
                              "src": "1389:4:38",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1402:4:38",
                                      "nodeType": "YulLiteral",
                                      "src": "1402:4:38",
                                      "type": "",
                                      "value": "0xe8"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "1412:4:38",
                                          "nodeType": "YulLiteral",
                                          "src": "1412:4:38",
                                          "type": "",
                                          "value": "0x60"
                                        },
                                        {
                                          "name": "implementation",
                                          "nativeSrc": "1418:14:38",
                                          "nodeType": "YulIdentifier",
                                          "src": "1418:14:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nativeSrc": "1408:3:38",
                                        "nodeType": "YulIdentifier",
                                        "src": "1408:3:38"
                                      },
                                      "nativeSrc": "1408:25:38",
                                      "nodeType": "YulFunctionCall",
                                      "src": "1408:25:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "1398:3:38",
                                    "nodeType": "YulIdentifier",
                                    "src": "1398:3:38"
                                  },
                                  "nativeSrc": "1398:36:38",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1398:36:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1436:48:38",
                                  "nodeType": "YulLiteral",
                                  "src": "1436:48:38",
                                  "type": "",
                                  "value": "0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "1395:2:38",
                                "nodeType": "YulIdentifier",
                                "src": "1395:2:38"
                              },
                              "nativeSrc": "1395:90:38",
                              "nodeType": "YulFunctionCall",
                              "src": "1395:90:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1382:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "1382:6:38"
                          },
                          "nativeSrc": "1382:104:38",
                          "nodeType": "YulFunctionCall",
                          "src": "1382:104:38"
                        },
                        "nativeSrc": "1382:104:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "1382:104:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1607:4:38",
                              "nodeType": "YulLiteral",
                              "src": "1607:4:38",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1620:4:38",
                                      "nodeType": "YulLiteral",
                                      "src": "1620:4:38",
                                      "type": "",
                                      "value": "0x78"
                                    },
                                    {
                                      "name": "implementation",
                                      "nativeSrc": "1626:14:38",
                                      "nodeType": "YulIdentifier",
                                      "src": "1626:14:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "1616:3:38",
                                    "nodeType": "YulIdentifier",
                                    "src": "1616:3:38"
                                  },
                                  "nativeSrc": "1616:25:38",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1616:25:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1643:32:38",
                                  "nodeType": "YulLiteral",
                                  "src": "1643:32:38",
                                  "type": "",
                                  "value": "0x5af43d82803e903d91602b57fd5bf3"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "1613:2:38",
                                "nodeType": "YulIdentifier",
                                "src": "1613:2:38"
                              },
                              "nativeSrc": "1613:63:38",
                              "nodeType": "YulFunctionCall",
                              "src": "1613:63:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1600:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "1600:6:38"
                          },
                          "nativeSrc": "1600:77:38",
                          "nodeType": "YulFunctionCall",
                          "src": "1600:77:38"
                        },
                        "nativeSrc": "1600:77:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "1600:77:38"
                      },
                      {
                        "nativeSrc": "1690:33:38",
                        "nodeType": "YulAssignment",
                        "src": "1690:33:38",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1709:1:38",
                              "nodeType": "YulLiteral",
                              "src": "1709:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1712:4:38",
                              "nodeType": "YulLiteral",
                              "src": "1712:4:38",
                              "type": "",
                              "value": "0x09"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1718:4:38",
                              "nodeType": "YulLiteral",
                              "src": "1718:4:38",
                              "type": "",
                              "value": "0x37"
                            }
                          ],
                          "functionName": {
                            "name": "create",
                            "nativeSrc": "1702:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "1702:6:38"
                          },
                          "nativeSrc": "1702:21:38",
                          "nodeType": "YulFunctionCall",
                          "src": "1702:21:38"
                        },
                        "variableNames": [
                          {
                            "name": "instance",
                            "nativeSrc": "1690:8:38",
                            "nodeType": "YulIdentifier",
                            "src": "1690:8:38"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 49370,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1418:14:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49370,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1626:14:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49373,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1690:8:38",
                      "valueSize": 1
                    }
                  ],
                  "id": 49375,
                  "nodeType": "InlineAssembly",
                  "src": "1175:558:38"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 49381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49376,
                      "name": "instance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49373,
                      "src": "1746:8:38",
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
                          "id": 49379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1766:1:38",
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
                        "id": 49378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1758:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 49377,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1758:7:38",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1758:10:38",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1746:22:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49386,
                  "nodeType": "IfStatement",
                  "src": "1742:86:38",
                  "trueBody": {
                    "id": 49385,
                    "nodeType": "Block",
                    "src": "1770:58:38",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 49382,
                            "name": "ERC1167FailedCreateClone",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49367,
                            "src": "1791:24:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 49383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1791:26:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49384,
                        "nodeType": "RevertStatement",
                        "src": "1784:33:38"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49368,
              "nodeType": "StructuredDocumentation",
              "src": "850:192:38",
              "text": " @dev Deploys and returns the address of a clone that mimics the behaviour of `implementation`.\n This function uses the create opcode, which should never revert."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "clone",
            "nameLocation": "1056:5:38",
            "parameters": {
              "id": 49371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49370,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "1070:14:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49388,
                  "src": "1062:22:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1061:24:38"
            },
            "returnParameters": {
              "id": 49374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49373,
                  "mutability": "mutable",
                  "name": "instance",
                  "nameLocation": "1112:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49388,
                  "src": "1104:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49372,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1104:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1103:18:38"
            },
            "scope": 49446,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49411,
            "nodeType": "FunctionDefinition",
            "src": "2209:821:38",
            "nodes": [],
            "body": {
              "id": 49410,
              "nodeType": "Block",
              "src": "2311:719:38",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2373:556:38",
                    "nodeType": "YulBlock",
                    "src": "2373:556:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2578:4:38",
                              "nodeType": "YulLiteral",
                              "src": "2578:4:38",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2591:4:38",
                                      "nodeType": "YulLiteral",
                                      "src": "2591:4:38",
                                      "type": "",
                                      "value": "0xe8"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "2601:4:38",
                                          "nodeType": "YulLiteral",
                                          "src": "2601:4:38",
                                          "type": "",
                                          "value": "0x60"
                                        },
                                        {
                                          "name": "implementation",
                                          "nativeSrc": "2607:14:38",
                                          "nodeType": "YulIdentifier",
                                          "src": "2607:14:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nativeSrc": "2597:3:38",
                                        "nodeType": "YulIdentifier",
                                        "src": "2597:3:38"
                                      },
                                      "nativeSrc": "2597:25:38",
                                      "nodeType": "YulFunctionCall",
                                      "src": "2597:25:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "2587:3:38",
                                    "nodeType": "YulIdentifier",
                                    "src": "2587:3:38"
                                  },
                                  "nativeSrc": "2587:36:38",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2587:36:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2625:48:38",
                                  "nodeType": "YulLiteral",
                                  "src": "2625:48:38",
                                  "type": "",
                                  "value": "0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "2584:2:38",
                                "nodeType": "YulIdentifier",
                                "src": "2584:2:38"
                              },
                              "nativeSrc": "2584:90:38",
                              "nodeType": "YulFunctionCall",
                              "src": "2584:90:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2571:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "2571:6:38"
                          },
                          "nativeSrc": "2571:104:38",
                          "nodeType": "YulFunctionCall",
                          "src": "2571:104:38"
                        },
                        "nativeSrc": "2571:104:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "2571:104:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2796:4:38",
                              "nodeType": "YulLiteral",
                              "src": "2796:4:38",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2809:4:38",
                                      "nodeType": "YulLiteral",
                                      "src": "2809:4:38",
                                      "type": "",
                                      "value": "0x78"
                                    },
                                    {
                                      "name": "implementation",
                                      "nativeSrc": "2815:14:38",
                                      "nodeType": "YulIdentifier",
                                      "src": "2815:14:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "2805:3:38",
                                    "nodeType": "YulIdentifier",
                                    "src": "2805:3:38"
                                  },
                                  "nativeSrc": "2805:25:38",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2805:25:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2832:32:38",
                                  "nodeType": "YulLiteral",
                                  "src": "2832:32:38",
                                  "type": "",
                                  "value": "0x5af43d82803e903d91602b57fd5bf3"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "2802:2:38",
                                "nodeType": "YulIdentifier",
                                "src": "2802:2:38"
                              },
                              "nativeSrc": "2802:63:38",
                              "nodeType": "YulFunctionCall",
                              "src": "2802:63:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2789:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "2789:6:38"
                          },
                          "nativeSrc": "2789:77:38",
                          "nodeType": "YulFunctionCall",
                          "src": "2789:77:38"
                        },
                        "nativeSrc": "2789:77:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "2789:77:38"
                      },
                      {
                        "nativeSrc": "2879:40:38",
                        "nodeType": "YulAssignment",
                        "src": "2879:40:38",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2899:1:38",
                              "nodeType": "YulLiteral",
                              "src": "2899:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2902:4:38",
                              "nodeType": "YulLiteral",
                              "src": "2902:4:38",
                              "type": "",
                              "value": "0x09"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2908:4:38",
                              "nodeType": "YulLiteral",
                              "src": "2908:4:38",
                              "type": "",
                              "value": "0x37"
                            },
                            {
                              "name": "salt",
                              "nativeSrc": "2914:4:38",
                              "nodeType": "YulIdentifier",
                              "src": "2914:4:38"
                            }
                          ],
                          "functionName": {
                            "name": "create2",
                            "nativeSrc": "2891:7:38",
                            "nodeType": "YulIdentifier",
                            "src": "2891:7:38"
                          },
                          "nativeSrc": "2891:28:38",
                          "nodeType": "YulFunctionCall",
                          "src": "2891:28:38"
                        },
                        "variableNames": [
                          {
                            "name": "instance",
                            "nativeSrc": "2879:8:38",
                            "nodeType": "YulIdentifier",
                            "src": "2879:8:38"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 49391,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2607:14:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49391,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2815:14:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2879:8:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49393,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2914:4:38",
                      "valueSize": 1
                    }
                  ],
                  "id": 49398,
                  "nodeType": "InlineAssembly",
                  "src": "2364:565:38"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 49404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49399,
                      "name": "instance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49396,
                      "src": "2942:8:38",
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
                          "id": 49402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2962:1:38",
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
                        "id": 49401,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2954:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 49400,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2954:7:38",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2954:10:38",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2942:22:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49409,
                  "nodeType": "IfStatement",
                  "src": "2938:86:38",
                  "trueBody": {
                    "id": 49408,
                    "nodeType": "Block",
                    "src": "2966:58:38",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 49405,
                            "name": "ERC1167FailedCreateClone",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49367,
                            "src": "2987:24:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 49406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2987:26:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49407,
                        "nodeType": "RevertStatement",
                        "src": "2980:33:38"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49389,
              "nodeType": "StructuredDocumentation",
              "src": "1840:364:38",
              "text": " @dev Deploys and returns the address of a clone that mimics the behaviour of `implementation`.\n This function uses the create2 opcode and a `salt` to deterministically deploy\n the clone. Using the same `implementation` and `salt` multiple time will revert, since\n the clones cannot be deployed twice at the same address."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cloneDeterministic",
            "nameLocation": "2218:18:38",
            "parameters": {
              "id": 49394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49391,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "2245:14:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49411,
                  "src": "2237:22:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2237:7:38",
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
                  "id": 49393,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "2269:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49411,
                  "src": "2261:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49392,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2261:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2236:38:38"
            },
            "returnParameters": {
              "id": 49397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49396,
                  "mutability": "mutable",
                  "name": "instance",
                  "nameLocation": "2301:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49411,
                  "src": "2293:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2293:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2292:18:38"
            },
            "scope": 49446,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49425,
            "nodeType": "FunctionDefinition",
            "src": "3140:680:38",
            "nodes": [],
            "body": {
              "id": 49424,
              "nodeType": "Block",
              "src": "3305:515:38",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3367:447:38",
                    "nodeType": "YulBlock",
                    "src": "3367:447:38",
                    "statements": [
                      {
                        "nativeSrc": "3381:22:38",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3381:22:38",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3398:4:38",
                              "nodeType": "YulLiteral",
                              "src": "3398:4:38",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "3392:5:38",
                            "nodeType": "YulIdentifier",
                            "src": "3392:5:38"
                          },
                          "nativeSrc": "3392:11:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3392:11:38"
                        },
                        "variables": [
                          {
                            "name": "ptr",
                            "nativeSrc": "3385:3:38",
                            "nodeType": "YulTypedName",
                            "src": "3385:3:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3427:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3427:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3432:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3432:4:38",
                                  "type": "",
                                  "value": "0x38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3423:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3423:3:38"
                              },
                              "nativeSrc": "3423:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3423:14:38"
                            },
                            {
                              "name": "deployer",
                              "nativeSrc": "3439:8:38",
                              "nodeType": "YulIdentifier",
                              "src": "3439:8:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3416:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3416:6:38"
                          },
                          "nativeSrc": "3416:32:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3416:32:38"
                        },
                        "nativeSrc": "3416:32:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3416:32:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3472:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3472:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3477:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3477:4:38",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3468:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3468:3:38"
                              },
                              "nativeSrc": "3468:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3468:14:38"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3484:34:38",
                              "nodeType": "YulLiteral",
                              "src": "3484:34:38",
                              "type": "",
                              "value": "0x5af43d82803e903d91602b57fd5bf3ff"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3461:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3461:6:38"
                          },
                          "nativeSrc": "3461:58:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3461:58:38"
                        },
                        "nativeSrc": "3461:58:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3461:58:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3543:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3543:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3548:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3548:4:38",
                                  "type": "",
                                  "value": "0x14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3539:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3539:3:38"
                              },
                              "nativeSrc": "3539:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3539:14:38"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "3555:14:38",
                              "nodeType": "YulIdentifier",
                              "src": "3555:14:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3532:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3532:6:38"
                          },
                          "nativeSrc": "3532:38:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3532:38:38"
                        },
                        "nativeSrc": "3532:38:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3532:38:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "ptr",
                              "nativeSrc": "3590:3:38",
                              "nodeType": "YulIdentifier",
                              "src": "3590:3:38"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3595:42:38",
                              "nodeType": "YulLiteral",
                              "src": "3595:42:38",
                              "type": "",
                              "value": "0x3d602d80600a3d3981f3363d3d373d3d3d363d73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3583:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3583:6:38"
                          },
                          "nativeSrc": "3583:55:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3583:55:38"
                        },
                        "nativeSrc": "3583:55:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3583:55:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3662:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3662:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3667:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3667:4:38",
                                  "type": "",
                                  "value": "0x58"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3658:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3658:3:38"
                              },
                              "nativeSrc": "3658:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3658:14:38"
                            },
                            {
                              "name": "salt",
                              "nativeSrc": "3674:4:38",
                              "nodeType": "YulIdentifier",
                              "src": "3674:4:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3651:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3651:6:38"
                          },
                          "nativeSrc": "3651:28:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3651:28:38"
                        },
                        "nativeSrc": "3651:28:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3651:28:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3703:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3703:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3708:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3708:4:38",
                                  "type": "",
                                  "value": "0x78"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3699:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3699:3:38"
                              },
                              "nativeSrc": "3699:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3699:14:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "ptr",
                                      "nativeSrc": "3729:3:38",
                                      "nodeType": "YulIdentifier",
                                      "src": "3729:3:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3734:4:38",
                                      "nodeType": "YulLiteral",
                                      "src": "3734:4:38",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3725:3:38",
                                    "nodeType": "YulIdentifier",
                                    "src": "3725:3:38"
                                  },
                                  "nativeSrc": "3725:14:38",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3725:14:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3741:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3741:4:38",
                                  "type": "",
                                  "value": "0x37"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "3715:9:38",
                                "nodeType": "YulIdentifier",
                                "src": "3715:9:38"
                              },
                              "nativeSrc": "3715:31:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3715:31:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3692:6:38",
                            "nodeType": "YulIdentifier",
                            "src": "3692:6:38"
                          },
                          "nativeSrc": "3692:55:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3692:55:38"
                        },
                        "nativeSrc": "3692:55:38",
                        "nodeType": "YulExpressionStatement",
                        "src": "3692:55:38"
                      },
                      {
                        "nativeSrc": "3760:44:38",
                        "nodeType": "YulAssignment",
                        "src": "3760:44:38",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "ptr",
                                  "nativeSrc": "3787:3:38",
                                  "nodeType": "YulIdentifier",
                                  "src": "3787:3:38"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3792:4:38",
                                  "nodeType": "YulLiteral",
                                  "src": "3792:4:38",
                                  "type": "",
                                  "value": "0x43"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3783:3:38",
                                "nodeType": "YulIdentifier",
                                "src": "3783:3:38"
                              },
                              "nativeSrc": "3783:14:38",
                              "nodeType": "YulFunctionCall",
                              "src": "3783:14:38"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3799:4:38",
                              "nodeType": "YulLiteral",
                              "src": "3799:4:38",
                              "type": "",
                              "value": "0x55"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3773:9:38",
                            "nodeType": "YulIdentifier",
                            "src": "3773:9:38"
                          },
                          "nativeSrc": "3773:31:38",
                          "nodeType": "YulFunctionCall",
                          "src": "3773:31:38"
                        },
                        "variableNames": [
                          {
                            "name": "predicted",
                            "nativeSrc": "3760:9:38",
                            "nodeType": "YulIdentifier",
                            "src": "3760:9:38"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 49418,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3439:8:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49414,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3555:14:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49421,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3760:9:38",
                      "valueSize": 1
                    },
                    {
                      "declaration": 49416,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3674:4:38",
                      "valueSize": 1
                    }
                  ],
                  "id": 49423,
                  "nodeType": "InlineAssembly",
                  "src": "3358:456:38"
                }
              ]
            },
            "documentation": {
              "id": 49412,
              "nodeType": "StructuredDocumentation",
              "src": "3036:99:38",
              "text": " @dev Computes the address of a clone deployed using {Clones-cloneDeterministic}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "predictDeterministicAddress",
            "nameLocation": "3149:27:38",
            "parameters": {
              "id": 49419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49414,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "3194:14:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49425,
                  "src": "3186:22:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49413,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3186:7:38",
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
                  "id": 49416,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "3226:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49425,
                  "src": "3218:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49415,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3218:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49418,
                  "mutability": "mutable",
                  "name": "deployer",
                  "nameLocation": "3248:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49425,
                  "src": "3240:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3240:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3176:86:38"
            },
            "returnParameters": {
              "id": 49422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49421,
                  "mutability": "mutable",
                  "name": "predicted",
                  "nameLocation": "3294:9:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49425,
                  "src": "3286:17:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49420,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3286:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3285:19:38"
            },
            "scope": 49446,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49445,
            "nodeType": "FunctionDefinition",
            "src": "3930:227:38",
            "nodes": [],
            "body": {
              "id": 49444,
              "nodeType": "Block",
              "src": "4069:88:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49436,
                        "name": "implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49428,
                        "src": "4114:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 49437,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49430,
                        "src": "4130:4:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 49440,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "4144:4:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Clones_$49446",
                              "typeString": "library Clones"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Clones_$49446",
                              "typeString": "library Clones"
                            }
                          ],
                          "id": 49439,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4136:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 49438,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4136:7:38",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 49441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4136:13:38",
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
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49435,
                      "name": "predictDeterministicAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        49425,
                        49445
                      ],
                      "referencedDeclaration": 49425,
                      "src": "4086:27:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$_t_bytes32_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,bytes32,address) pure returns (address)"
                      }
                    },
                    "id": 49442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4086:64:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49434,
                  "id": 49443,
                  "nodeType": "Return",
                  "src": "4079:71:38"
                }
              ]
            },
            "documentation": {
              "id": 49426,
              "nodeType": "StructuredDocumentation",
              "src": "3826:99:38",
              "text": " @dev Computes the address of a clone deployed using {Clones-cloneDeterministic}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "predictDeterministicAddress",
            "nameLocation": "3939:27:38",
            "parameters": {
              "id": 49431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49428,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "3984:14:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49445,
                  "src": "3976:22:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3976:7:38",
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
                  "id": 49430,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "4016:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49445,
                  "src": "4008:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49429,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4008:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3966:60:38"
            },
            "returnParameters": {
              "id": 49434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49433,
                  "mutability": "mutable",
                  "name": "predicted",
                  "nameLocation": "4058:9:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 49445,
                  "src": "4050:17:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49432,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4050:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4049:19:38"
            },
            "scope": 49446,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Clones",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 49364,
          "nodeType": "StructuredDocumentation",
          "src": "126:599:38",
          "text": " @dev https://eips.ethereum.org/EIPS/eip-1167[EIP 1167] is a standard for\n deploying minimal proxy contracts, also known as \"clones\".\n > To simply and cheaply clone contract functionality in an immutable way, this standard specifies\n > a minimal bytecode implementation that delegates all calls to a known, fixed address.\n The library includes functions to deploy a proxy using either `create` (traditional deployment) or `create2`\n (salted deterministic deployment). It also includes functions to predict the addresses of clones deployed using the\n deterministic method."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49446
        ],
        "name": "Clones",
        "nameLocation": "734:6:38",
        "scope": 49447,
        "usedErrors": [
          49367
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 38
} as const;