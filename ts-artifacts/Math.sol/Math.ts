export const Math = {
  "abi": [
    {
      "type": "error",
      "name": "MathOverflowedMulDiv",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212200da2c0671087df65a53cb04944468613108addeb91b9db43bb78b08a3e44bc1b64736f6c63430008190033",
    "sourceMap": "203:14914:67:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea26469706673582212200da2c0671087df65a53cb04944468613108addeb91b9db43bb78b08a3e44bc1b64736f6c63430008190033",
    "sourceMap": "203:14914:67:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"MathOverflowedMulDiv\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Standard math utilities missing in the Solidity language.\",\"errors\":{\"MathOverflowedMulDiv()\":[{\"details\":\"Muldiv operation overflow.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":\"Math\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]}},\"version\":1}",
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
          "name": "MathOverflowedMulDiv"
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
        "node_modules/@openzeppelin/contracts/utils/math/Math.sol": "Math"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
        "urls": [
          "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
          "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/Math.sol",
    "id": 53825,
    "exportedSymbols": {
      "Math": [
        53824
      ]
    },
    "nodeType": "SourceUnit",
    "src": "103:15015:67",
    "nodes": [
      {
        "id": 52772,
        "nodeType": "PragmaDirective",
        "src": "103:24:67",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 53824,
        "nodeType": "ContractDefinition",
        "src": "203:14914:67",
        "nodes": [
          {
            "id": 52776,
            "nodeType": "ErrorDefinition",
            "src": "277:29:67",
            "nodes": [],
            "documentation": {
              "id": 52774,
              "nodeType": "StructuredDocumentation",
              "src": "222:50:67",
              "text": " @dev Muldiv operation overflow."
            },
            "errorSelector": "227bc153",
            "name": "MathOverflowedMulDiv",
            "nameLocation": "283:20:67",
            "parameters": {
              "id": 52775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "303:2:67"
            }
          },
          {
            "id": 52781,
            "nodeType": "EnumDefinition",
            "src": "312:169:67",
            "nodes": [],
            "canonicalName": "Math.Rounding",
            "members": [
              {
                "id": 52777,
                "name": "Floor",
                "nameLocation": "336:5:67",
                "nodeType": "EnumValue",
                "src": "336:5:67"
              },
              {
                "id": 52778,
                "name": "Ceil",
                "nameLocation": "379:4:67",
                "nodeType": "EnumValue",
                "src": "379:4:67"
              },
              {
                "id": 52779,
                "name": "Trunc",
                "nameLocation": "421:5:67",
                "nodeType": "EnumValue",
                "src": "421:5:67"
              },
              {
                "id": 52780,
                "name": "Expand",
                "nameLocation": "451:6:67",
                "nodeType": "EnumValue",
                "src": "451:6:67"
              }
            ],
            "name": "Rounding",
            "nameLocation": "317:8:67"
          },
          {
            "id": 52813,
            "nodeType": "FunctionDefinition",
            "src": "585:216:67",
            "nodes": [],
            "body": {
              "id": 52812,
              "nodeType": "Block",
              "src": "661:140:67",
              "nodes": [],
              "statements": [
                {
                  "id": 52811,
                  "nodeType": "UncheckedBlock",
                  "src": "671:124:67",
                  "statements": [
                    {
                      "assignments": [
                        52794
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 52794,
                          "mutability": "mutable",
                          "name": "c",
                          "nameLocation": "703:1:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 52811,
                          "src": "695:9:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 52793,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "695:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 52798,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52795,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52784,
                          "src": "707:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 52796,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52786,
                          "src": "711:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "707:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "695:17:67"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52799,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52794,
                          "src": "730:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 52800,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52784,
                          "src": "734:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "730:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52806,
                      "nodeType": "IfStatement",
                      "src": "726:28:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 52802,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "745:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "30",
                              "id": 52803,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "752:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52804,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "744:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52792,
                        "id": 52805,
                        "nodeType": "Return",
                        "src": "737:17:67"
                      }
                    },
                    {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 52807,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "776:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "id": 52808,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52794,
                            "src": "782:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52809,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "775:9:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                          "typeString": "tuple(bool,uint256)"
                        }
                      },
                      "functionReturnParameters": 52792,
                      "id": 52810,
                      "nodeType": "Return",
                      "src": "768:16:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52782,
              "nodeType": "StructuredDocumentation",
              "src": "487:93:67",
              "text": " @dev Returns the addition of two unsigned integers, with an overflow flag."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryAdd",
            "nameLocation": "594:6:67",
            "parameters": {
              "id": 52787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52784,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "609:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52813,
                  "src": "601:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "601:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52786,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "620:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52813,
                  "src": "612:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "612:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "600:22:67"
            },
            "returnParameters": {
              "id": 52792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52789,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52813,
                  "src": "646:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52788,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52791,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52813,
                  "src": "652:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "645:15:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52841,
            "nodeType": "FunctionDefinition",
            "src": "908:189:67",
            "nodes": [],
            "body": {
              "id": 52840,
              "nodeType": "Block",
              "src": "984:113:67",
              "nodes": [],
              "statements": [
                {
                  "id": 52839,
                  "nodeType": "UncheckedBlock",
                  "src": "994:97:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52825,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52818,
                          "src": "1022:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 52826,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52816,
                          "src": "1026:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1022:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52832,
                      "nodeType": "IfStatement",
                      "src": "1018:28:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 52828,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1037:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "30",
                              "id": 52829,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1044:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52830,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1036:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52824,
                        "id": 52831,
                        "nodeType": "Return",
                        "src": "1029:17:67"
                      }
                    },
                    {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 52833,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1068:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 52836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52834,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52816,
                              "src": "1074:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 52835,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52818,
                              "src": "1078:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1074:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52837,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1067:13:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                          "typeString": "tuple(bool,uint256)"
                        }
                      },
                      "functionReturnParameters": 52824,
                      "id": 52838,
                      "nodeType": "Return",
                      "src": "1060:20:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52814,
              "nodeType": "StructuredDocumentation",
              "src": "807:96:67",
              "text": " @dev Returns the subtraction of two unsigned integers, with an overflow flag."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySub",
            "nameLocation": "917:6:67",
            "parameters": {
              "id": 52819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52816,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "932:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52841,
                  "src": "924:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "924:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52818,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "943:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52841,
                  "src": "935:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52817,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "923:22:67"
            },
            "returnParameters": {
              "id": 52824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52841,
                  "src": "969:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52820,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52823,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52841,
                  "src": "975:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "975:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "968:15:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52883,
            "nodeType": "FunctionDefinition",
            "src": "1207:493:67",
            "nodes": [],
            "body": {
              "id": 52882,
              "nodeType": "Block",
              "src": "1283:417:67",
              "nodes": [],
              "statements": [
                {
                  "id": 52881,
                  "nodeType": "UncheckedBlock",
                  "src": "1293:401:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52853,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52844,
                          "src": "1551:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 52854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1556:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1551:6:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52860,
                      "nodeType": "IfStatement",
                      "src": "1547:28:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "74727565",
                              "id": 52856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1567:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            {
                              "hexValue": "30",
                              "id": 52857,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1573:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52858,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1566:9:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52852,
                        "id": 52859,
                        "nodeType": "Return",
                        "src": "1559:16:67"
                      }
                    },
                    {
                      "assignments": [
                        52862
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 52862,
                          "mutability": "mutable",
                          "name": "c",
                          "nameLocation": "1597:1:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 52881,
                          "src": "1589:9:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 52861,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1589:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 52866,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52863,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52844,
                          "src": "1601:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 52864,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52846,
                          "src": "1605:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1601:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1589:17:67"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 52869,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52867,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52862,
                            "src": "1624:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 52868,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52844,
                            "src": "1628:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1624:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 52870,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52846,
                          "src": "1633:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1624:10:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52876,
                      "nodeType": "IfStatement",
                      "src": "1620:33:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 52872,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1644:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "30",
                              "id": 52873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1651:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52874,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1643:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52852,
                        "id": 52875,
                        "nodeType": "Return",
                        "src": "1636:17:67"
                      }
                    },
                    {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 52877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1675:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "id": 52878,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52862,
                            "src": "1681:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52879,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1674:9:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                          "typeString": "tuple(bool,uint256)"
                        }
                      },
                      "functionReturnParameters": 52852,
                      "id": 52880,
                      "nodeType": "Return",
                      "src": "1667:16:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52842,
              "nodeType": "StructuredDocumentation",
              "src": "1103:99:67",
              "text": " @dev Returns the multiplication of two unsigned integers, with an overflow flag."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryMul",
            "nameLocation": "1216:6:67",
            "parameters": {
              "id": 52847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52844,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1231:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52883,
                  "src": "1223:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1223:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52846,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1242:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52883,
                  "src": "1234:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1234:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1222:22:67"
            },
            "returnParameters": {
              "id": 52852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52883,
                  "src": "1268:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52848,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1268:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52851,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52883,
                  "src": "1274:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1274:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1267:15:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52911,
            "nodeType": "FunctionDefinition",
            "src": "1811:190:67",
            "nodes": [],
            "body": {
              "id": 52910,
              "nodeType": "Block",
              "src": "1887:114:67",
              "nodes": [],
              "statements": [
                {
                  "id": 52909,
                  "nodeType": "UncheckedBlock",
                  "src": "1897:98:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52895,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52888,
                          "src": "1925:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 52896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1930:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1925:6:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52902,
                      "nodeType": "IfStatement",
                      "src": "1921:29:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 52898,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1941:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "30",
                              "id": 52899,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1948:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52900,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1940:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52894,
                        "id": 52901,
                        "nodeType": "Return",
                        "src": "1933:17:67"
                      }
                    },
                    {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 52903,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1972:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 52906,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52904,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52886,
                              "src": "1978:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 52905,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52888,
                              "src": "1982:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1978:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52907,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1971:13:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                          "typeString": "tuple(bool,uint256)"
                        }
                      },
                      "functionReturnParameters": 52894,
                      "id": 52908,
                      "nodeType": "Return",
                      "src": "1964:20:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52884,
              "nodeType": "StructuredDocumentation",
              "src": "1706:100:67",
              "text": " @dev Returns the division of two unsigned integers, with a division by zero flag."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryDiv",
            "nameLocation": "1820:6:67",
            "parameters": {
              "id": 52889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52886,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1835:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52911,
                  "src": "1827:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1827:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52888,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1846:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52911,
                  "src": "1838:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1838:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1826:22:67"
            },
            "returnParameters": {
              "id": 52894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52891,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52911,
                  "src": "1872:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52890,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1872:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52893,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52911,
                  "src": "1878:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52892,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1878:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1871:15:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52939,
            "nodeType": "FunctionDefinition",
            "src": "2122:190:67",
            "nodes": [],
            "body": {
              "id": 52938,
              "nodeType": "Block",
              "src": "2198:114:67",
              "nodes": [],
              "statements": [
                {
                  "id": 52937,
                  "nodeType": "UncheckedBlock",
                  "src": "2208:98:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 52925,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52923,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52916,
                          "src": "2236:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 52924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2241:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2236:6:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 52930,
                      "nodeType": "IfStatement",
                      "src": "2232:29:67",
                      "trueBody": {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 52926,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2252:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "30",
                              "id": 52927,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2259:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 52928,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2251:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                            "typeString": "tuple(bool,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 52922,
                        "id": 52929,
                        "nodeType": "Return",
                        "src": "2244:17:67"
                      }
                    },
                    {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 52931,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2283:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 52934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52932,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52914,
                              "src": "2289:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "%",
                            "rightExpression": {
                              "id": 52933,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52916,
                              "src": "2293:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2289:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52935,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2282:13:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                          "typeString": "tuple(bool,uint256)"
                        }
                      },
                      "functionReturnParameters": 52922,
                      "id": 52936,
                      "nodeType": "Return",
                      "src": "2275:20:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52912,
              "nodeType": "StructuredDocumentation",
              "src": "2007:110:67",
              "text": " @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryMod",
            "nameLocation": "2131:6:67",
            "parameters": {
              "id": 52917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52914,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2146:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52939,
                  "src": "2138:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2138:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52916,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2157:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52939,
                  "src": "2149:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2149:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2137:22:67"
            },
            "returnParameters": {
              "id": 52922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52919,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52939,
                  "src": "2183:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52918,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52921,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52939,
                  "src": "2189:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2189:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:15:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52957,
            "nodeType": "FunctionDefinition",
            "src": "2382:104:67",
            "nodes": [],
            "body": {
              "id": 52956,
              "nodeType": "Block",
              "src": "2449:37:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 52951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 52949,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52942,
                        "src": "2466:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 52950,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52944,
                        "src": "2470:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2466:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 52953,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52944,
                      "src": "2478:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 52954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "2466:13:67",
                    "trueExpression": {
                      "id": 52952,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52942,
                      "src": "2474:1:67",
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
                  "functionReturnParameters": 52948,
                  "id": 52955,
                  "nodeType": "Return",
                  "src": "2459:20:67"
                }
              ]
            },
            "documentation": {
              "id": 52940,
              "nodeType": "StructuredDocumentation",
              "src": "2318:59:67",
              "text": " @dev Returns the largest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "2391:3:67",
            "parameters": {
              "id": 52945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52942,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2403:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52957,
                  "src": "2395:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2395:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52944,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2414:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52957,
                  "src": "2406:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2406:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2394:22:67"
            },
            "returnParameters": {
              "id": 52948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52947,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52957,
                  "src": "2440:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2440:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2439:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52975,
            "nodeType": "FunctionDefinition",
            "src": "2557:104:67",
            "nodes": [],
            "body": {
              "id": 52974,
              "nodeType": "Block",
              "src": "2624:37:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 52969,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 52967,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52960,
                        "src": "2641:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 52968,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52962,
                        "src": "2645:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2641:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 52971,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52962,
                      "src": "2653:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 52972,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "2641:13:67",
                    "trueExpression": {
                      "id": 52970,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52960,
                      "src": "2649:1:67",
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
                  "functionReturnParameters": 52966,
                  "id": 52973,
                  "nodeType": "Return",
                  "src": "2634:20:67"
                }
              ]
            },
            "documentation": {
              "id": 52958,
              "nodeType": "StructuredDocumentation",
              "src": "2492:60:67",
              "text": " @dev Returns the smallest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "2566:3:67",
            "parameters": {
              "id": 52963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52960,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2578:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52975,
                  "src": "2570:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52959,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2570:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52962,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2589:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52975,
                  "src": "2581:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2569:22:67"
            },
            "returnParameters": {
              "id": 52966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52965,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52975,
                  "src": "2615:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52964,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2615:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2614:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52998,
            "nodeType": "FunctionDefinition",
            "src": "2774:153:67",
            "nodes": [],
            "body": {
              "id": 52997,
              "nodeType": "Block",
              "src": "2845:82:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 52995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 52987,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52985,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52978,
                            "src": "2900:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 52986,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52980,
                            "src": "2904:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2900:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 52988,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2899:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 52994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 52991,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52989,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52978,
                              "src": "2910:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "^",
                            "rightExpression": {
                              "id": 52990,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52980,
                              "src": "2914:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2910:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 52992,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2909:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 52993,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2919:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "2909:11:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2899:21:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52984,
                  "id": 52996,
                  "nodeType": "Return",
                  "src": "2892:28:67"
                }
              ]
            },
            "documentation": {
              "id": 52976,
              "nodeType": "StructuredDocumentation",
              "src": "2667:102:67",
              "text": " @dev Returns the average of two numbers. The result is rounded towards\n zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "2783:7:67",
            "parameters": {
              "id": 52981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52978,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2799:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52998,
                  "src": "2791:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2791:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52980,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2810:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 52998,
                  "src": "2802:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52979,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2802:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2790:22:67"
            },
            "returnParameters": {
              "id": 52984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52983,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52998,
                  "src": "2836:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52982,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2836:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2835:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53032,
            "nodeType": "FunctionDefinition",
            "src": "3148:331:67",
            "nodes": [],
            "body": {
              "id": 53031,
              "nodeType": "Block",
              "src": "3219:260:67",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 53010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 53008,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53003,
                      "src": "3233:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 53009,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3238:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3233:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 53016,
                  "nodeType": "IfStatement",
                  "src": "3229:127:67",
                  "trueBody": {
                    "id": 53015,
                    "nodeType": "Block",
                    "src": "3241:115:67",
                    "statements": [
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53013,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53011,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53001,
                            "src": "3340:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 53012,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53003,
                            "src": "3344:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3340:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 53007,
                        "id": 53014,
                        "nodeType": "Return",
                        "src": "3333:12:67"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 53019,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 53017,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53001,
                        "src": "3444:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 53018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3449:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3444:6:67",
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
                      "id": 53028,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 53023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 53021,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53001,
                                "src": "3458:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 53022,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3462:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3458:5:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 53024,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3457:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 53025,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53003,
                          "src": "3467:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3457:11:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 53027,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3471:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "3457:15:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 53029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "3444:28:67",
                    "trueExpression": {
                      "hexValue": "30",
                      "id": 53020,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3453:1:67",
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
                  "functionReturnParameters": 53007,
                  "id": 53030,
                  "nodeType": "Return",
                  "src": "3437:35:67"
                }
              ]
            },
            "documentation": {
              "id": 52999,
              "nodeType": "StructuredDocumentation",
              "src": "2933:210:67",
              "text": " @dev Returns the ceiling of the division of two numbers.\n This differs from standard division with `/` in that it rounds towards infinity instead\n of rounding towards zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ceilDiv",
            "nameLocation": "3157:7:67",
            "parameters": {
              "id": 53004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53001,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3173:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53032,
                  "src": "3165:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3165:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53003,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3184:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53032,
                  "src": "3176:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3176:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3164:22:67"
            },
            "returnParameters": {
              "id": 53007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53006,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53032,
                  "src": "3210:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3210:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3209:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53158,
            "nodeType": "FunctionDefinition",
            "src": "3803:4116:67",
            "nodes": [],
            "body": {
              "id": 53157,
              "nodeType": "Block",
              "src": "3901:4018:67",
              "nodes": [],
              "statements": [
                {
                  "id": 53156,
                  "nodeType": "UncheckedBlock",
                  "src": "3911:4002:67",
                  "statements": [
                    {
                      "assignments": [
                        53045
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53045,
                          "mutability": "mutable",
                          "name": "prod0",
                          "nameLocation": "4240:5:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53156,
                          "src": "4232:13:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53044,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4232:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53049,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53048,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53046,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53035,
                          "src": "4248:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 53047,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53037,
                          "src": "4252:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4248:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4232:21:67"
                    },
                    {
                      "assignments": [
                        53051
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53051,
                          "mutability": "mutable",
                          "name": "prod1",
                          "nameLocation": "4320:5:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53156,
                          "src": "4312:13:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53050,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4312:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53052,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4312:13:67"
                    },
                    {
                      "AST": {
                        "nativeSrc": "4392:122:67",
                        "nodeType": "YulBlock",
                        "src": "4392:122:67",
                        "statements": [
                          {
                            "nativeSrc": "4410:30:67",
                            "nodeType": "YulVariableDeclaration",
                            "src": "4410:30:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nativeSrc": "4427:1:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "4427:1:67"
                                },
                                {
                                  "name": "y",
                                  "nativeSrc": "4430:1:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "4430:1:67"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "4437:1:67",
                                      "nodeType": "YulLiteral",
                                      "src": "4437:1:67",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nativeSrc": "4433:3:67",
                                    "nodeType": "YulIdentifier",
                                    "src": "4433:3:67"
                                  },
                                  "nativeSrc": "4433:6:67",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4433:6:67"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nativeSrc": "4420:6:67",
                                "nodeType": "YulIdentifier",
                                "src": "4420:6:67"
                              },
                              "nativeSrc": "4420:20:67",
                              "nodeType": "YulFunctionCall",
                              "src": "4420:20:67"
                            },
                            "variables": [
                              {
                                "name": "mm",
                                "nativeSrc": "4414:2:67",
                                "nodeType": "YulTypedName",
                                "src": "4414:2:67",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "4457:43:67",
                            "nodeType": "YulAssignment",
                            "src": "4457:43:67",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nativeSrc": "4474:2:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "4474:2:67"
                                    },
                                    {
                                      "name": "prod0",
                                      "nativeSrc": "4478:5:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "4478:5:67"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nativeSrc": "4470:3:67",
                                    "nodeType": "YulIdentifier",
                                    "src": "4470:3:67"
                                  },
                                  "nativeSrc": "4470:14:67",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4470:14:67"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nativeSrc": "4489:2:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "4489:2:67"
                                    },
                                    {
                                      "name": "prod0",
                                      "nativeSrc": "4493:5:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "4493:5:67"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "4486:2:67",
                                    "nodeType": "YulIdentifier",
                                    "src": "4486:2:67"
                                  },
                                  "nativeSrc": "4486:13:67",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4486:13:67"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "4466:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "4466:3:67"
                              },
                              "nativeSrc": "4466:34:67",
                              "nodeType": "YulFunctionCall",
                              "src": "4466:34:67"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nativeSrc": "4457:5:67",
                                "nodeType": "YulIdentifier",
                                "src": "4457:5:67"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4478:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4493:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53051,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4457:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53035,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4427:1:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53037,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4430:1:67",
                          "valueSize": 1
                        }
                      ],
                      "id": 53053,
                      "nodeType": "InlineAssembly",
                      "src": "4383:131:67"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53054,
                          "name": "prod1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53051,
                          "src": "4595:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4604:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4595:10:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53062,
                      "nodeType": "IfStatement",
                      "src": "4591:368:67",
                      "trueBody": {
                        "id": 53061,
                        "nodeType": "Block",
                        "src": "4607:352:67",
                        "statements": [
                          {
                            "expression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 53059,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 53057,
                                "name": "prod0",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53045,
                                "src": "4925:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "id": 53058,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53039,
                                "src": "4933:11:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4925:19:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 53043,
                            "id": 53060,
                            "nodeType": "Return",
                            "src": "4918:26:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53063,
                          "name": "denominator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53039,
                          "src": "5065:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 53064,
                          "name": "prod1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53051,
                          "src": "5080:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5065:20:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53070,
                      "nodeType": "IfStatement",
                      "src": "5061:88:67",
                      "trueBody": {
                        "id": 53069,
                        "nodeType": "Block",
                        "src": "5087:62:67",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 53066,
                                "name": "MathOverflowedMulDiv",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52776,
                                "src": "5112:20:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 53067,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5112:22:67",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 53068,
                            "nodeType": "RevertStatement",
                            "src": "5105:29:67"
                          }
                        ]
                      }
                    },
                    {
                      "assignments": [
                        53072
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53072,
                          "mutability": "mutable",
                          "name": "remainder",
                          "nameLocation": "5412:9:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53156,
                          "src": "5404:17:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53071,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5404:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53073,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "5404:17:67"
                    },
                    {
                      "AST": {
                        "nativeSrc": "5444:291:67",
                        "nodeType": "YulBlock",
                        "src": "5444:291:67",
                        "statements": [
                          {
                            "nativeSrc": "5513:38:67",
                            "nodeType": "YulAssignment",
                            "src": "5513:38:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nativeSrc": "5533:1:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5533:1:67"
                                },
                                {
                                  "name": "y",
                                  "nativeSrc": "5536:1:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5536:1:67"
                                },
                                {
                                  "name": "denominator",
                                  "nativeSrc": "5539:11:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5539:11:67"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nativeSrc": "5526:6:67",
                                "nodeType": "YulIdentifier",
                                "src": "5526:6:67"
                              },
                              "nativeSrc": "5526:25:67",
                              "nodeType": "YulFunctionCall",
                              "src": "5526:25:67"
                            },
                            "variableNames": [
                              {
                                "name": "remainder",
                                "nativeSrc": "5513:9:67",
                                "nodeType": "YulIdentifier",
                                "src": "5513:9:67"
                              }
                            ]
                          },
                          {
                            "nativeSrc": "5633:41:67",
                            "nodeType": "YulAssignment",
                            "src": "5633:41:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod1",
                                  "nativeSrc": "5646:5:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5646:5:67"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "remainder",
                                      "nativeSrc": "5656:9:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "5656:9:67"
                                    },
                                    {
                                      "name": "prod0",
                                      "nativeSrc": "5667:5:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "5667:5:67"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "5653:2:67",
                                    "nodeType": "YulIdentifier",
                                    "src": "5653:2:67"
                                  },
                                  "nativeSrc": "5653:20:67",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5653:20:67"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "5642:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "5642:3:67"
                              },
                              "nativeSrc": "5642:32:67",
                              "nodeType": "YulFunctionCall",
                              "src": "5642:32:67"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nativeSrc": "5633:5:67",
                                "nodeType": "YulIdentifier",
                                "src": "5633:5:67"
                              }
                            ]
                          },
                          {
                            "nativeSrc": "5691:30:67",
                            "nodeType": "YulAssignment",
                            "src": "5691:30:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nativeSrc": "5704:5:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5704:5:67"
                                },
                                {
                                  "name": "remainder",
                                  "nativeSrc": "5711:9:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "5711:9:67"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "5700:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "5700:3:67"
                              },
                              "nativeSrc": "5700:21:67",
                              "nodeType": "YulFunctionCall",
                              "src": "5700:21:67"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nativeSrc": "5691:5:67",
                                "nodeType": "YulIdentifier",
                                "src": "5691:5:67"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 53039,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5539:11:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5667:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5691:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5704:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53051,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5633:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53051,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5646:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53072,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5513:9:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53072,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5656:9:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53072,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5711:9:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53035,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5533:1:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53037,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "5536:1:67",
                          "valueSize": 1
                        }
                      ],
                      "id": 53074,
                      "nodeType": "InlineAssembly",
                      "src": "5435:300:67"
                    },
                    {
                      "assignments": [
                        53076
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53076,
                          "mutability": "mutable",
                          "name": "twos",
                          "nameLocation": "5947:4:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53156,
                          "src": "5939:12:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53075,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5939:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53083,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53077,
                          "name": "denominator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53039,
                          "src": "5954:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 53080,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "30",
                                "id": 53078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5969:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 53079,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53039,
                                "src": "5973:11:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "5969:15:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 53081,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5968:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5954:31:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "5939:46:67"
                    },
                    {
                      "AST": {
                        "nativeSrc": "6008:362:67",
                        "nodeType": "YulBlock",
                        "src": "6008:362:67",
                        "statements": [
                          {
                            "nativeSrc": "6073:37:67",
                            "nodeType": "YulAssignment",
                            "src": "6073:37:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nativeSrc": "6092:11:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "6092:11:67"
                                },
                                {
                                  "name": "twos",
                                  "nativeSrc": "6105:4:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "6105:4:67"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nativeSrc": "6088:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "6088:3:67"
                              },
                              "nativeSrc": "6088:22:67",
                              "nodeType": "YulFunctionCall",
                              "src": "6088:22:67"
                            },
                            "variableNames": [
                              {
                                "name": "denominator",
                                "nativeSrc": "6073:11:67",
                                "nodeType": "YulIdentifier",
                                "src": "6073:11:67"
                              }
                            ]
                          },
                          {
                            "nativeSrc": "6177:25:67",
                            "nodeType": "YulAssignment",
                            "src": "6177:25:67",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nativeSrc": "6190:5:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "6190:5:67"
                                },
                                {
                                  "name": "twos",
                                  "nativeSrc": "6197:4:67",
                                  "nodeType": "YulIdentifier",
                                  "src": "6197:4:67"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nativeSrc": "6186:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "6186:3:67"
                              },
                              "nativeSrc": "6186:16:67",
                              "nodeType": "YulFunctionCall",
                              "src": "6186:16:67"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nativeSrc": "6177:5:67",
                                "nodeType": "YulIdentifier",
                                "src": "6177:5:67"
                              }
                            ]
                          },
                          {
                            "nativeSrc": "6317:39:67",
                            "nodeType": "YulAssignment",
                            "src": "6317:39:67",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6337:1:67",
                                          "nodeType": "YulLiteral",
                                          "src": "6337:1:67",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "name": "twos",
                                          "nativeSrc": "6340:4:67",
                                          "nodeType": "YulIdentifier",
                                          "src": "6340:4:67"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nativeSrc": "6333:3:67",
                                        "nodeType": "YulIdentifier",
                                        "src": "6333:3:67"
                                      },
                                      "nativeSrc": "6333:12:67",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6333:12:67"
                                    },
                                    {
                                      "name": "twos",
                                      "nativeSrc": "6347:4:67",
                                      "nodeType": "YulIdentifier",
                                      "src": "6347:4:67"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nativeSrc": "6329:3:67",
                                    "nodeType": "YulIdentifier",
                                    "src": "6329:3:67"
                                  },
                                  "nativeSrc": "6329:23:67",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6329:23:67"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6354:1:67",
                                  "nodeType": "YulLiteral",
                                  "src": "6354:1:67",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "6325:3:67",
                                "nodeType": "YulIdentifier",
                                "src": "6325:3:67"
                              },
                              "nativeSrc": "6325:31:67",
                              "nodeType": "YulFunctionCall",
                              "src": "6325:31:67"
                            },
                            "variableNames": [
                              {
                                "name": "twos",
                                "nativeSrc": "6317:4:67",
                                "nodeType": "YulIdentifier",
                                "src": "6317:4:67"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 53039,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6073:11:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53039,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6092:11:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6177:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53045,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6190:5:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53076,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6105:4:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53076,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6197:4:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53076,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6317:4:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53076,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6340:4:67",
                          "valueSize": 1
                        },
                        {
                          "declaration": 53076,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "6347:4:67",
                          "valueSize": 1
                        }
                      ],
                      "id": 53084,
                      "nodeType": "InlineAssembly",
                      "src": "5999:371:67"
                    },
                    {
                      "expression": {
                        "id": 53089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53085,
                          "name": "prod0",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53045,
                          "src": "6436:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "|=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53088,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53086,
                            "name": "prod1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53051,
                            "src": "6445:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 53087,
                            "name": "twos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53076,
                            "src": "6453:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6445:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6436:21:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53090,
                      "nodeType": "ExpressionStatement",
                      "src": "6436:21:67"
                    },
                    {
                      "assignments": [
                        53092
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53092,
                          "mutability": "mutable",
                          "name": "inverse",
                          "nameLocation": "6783:7:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53156,
                          "src": "6775:15:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53091,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6775:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53099,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53098,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 53095,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "33",
                                "id": 53093,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6794:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 53094,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53039,
                                "src": "6798:11:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6794:15:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 53096,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6793:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "^",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 53097,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6813:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "6793:21:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6775:39:67"
                    },
                    {
                      "expression": {
                        "id": 53106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53100,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7031:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53101,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7042:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53102,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7046:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53103,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7060:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7046:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7042:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7031:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53107,
                      "nodeType": "ExpressionStatement",
                      "src": "7031:36:67"
                    },
                    {
                      "expression": {
                        "id": 53114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53108,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7100:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7111:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53110,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7115:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53111,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7129:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7115:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7111:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7100:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53115,
                      "nodeType": "ExpressionStatement",
                      "src": "7100:36:67"
                    },
                    {
                      "expression": {
                        "id": 53122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53116,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7170:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7181:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53118,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7185:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53119,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7199:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7185:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7181:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7170:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53123,
                      "nodeType": "ExpressionStatement",
                      "src": "7170:36:67"
                    },
                    {
                      "expression": {
                        "id": 53130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53124,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7240:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7251:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53126,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7255:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53127,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7269:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7255:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7251:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7240:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53131,
                      "nodeType": "ExpressionStatement",
                      "src": "7240:36:67"
                    },
                    {
                      "expression": {
                        "id": 53138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53132,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7310:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53133,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7321:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53134,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7325:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53135,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7339:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7325:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7321:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7310:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53139,
                      "nodeType": "ExpressionStatement",
                      "src": "7310:36:67"
                    },
                    {
                      "expression": {
                        "id": 53146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53140,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53092,
                          "src": "7381:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 53141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7392:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53142,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53039,
                              "src": "7396:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 53143,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53092,
                              "src": "7410:7:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7396:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7392:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7381:36:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53147,
                      "nodeType": "ExpressionStatement",
                      "src": "7381:36:67"
                    },
                    {
                      "expression": {
                        "id": 53152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53148,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53042,
                          "src": "7851:6:67",
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
                          "id": 53151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53149,
                            "name": "prod0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53045,
                            "src": "7860:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 53150,
                            "name": "inverse",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53092,
                            "src": "7868:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7860:15:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7851:24:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53153,
                      "nodeType": "ExpressionStatement",
                      "src": "7851:24:67"
                    },
                    {
                      "expression": {
                        "id": 53154,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53042,
                        "src": "7896:6:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53043,
                      "id": 53155,
                      "nodeType": "Return",
                      "src": "7889:13:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53033,
              "nodeType": "StructuredDocumentation",
              "src": "3485:313:67",
              "text": " @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or\n denominator == 0.\n @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv) with further edits by\n Uniswap Labs also under MIT license."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "3812:6:67",
            "parameters": {
              "id": 53040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53035,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "3827:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53158,
                  "src": "3819:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53034,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3819:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53037,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "3838:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53158,
                  "src": "3830:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53036,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3830:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53039,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "3849:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53158,
                  "src": "3841:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53038,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3841:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3818:43:67"
            },
            "returnParameters": {
              "id": 53043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53042,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3893:6:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53158,
                  "src": "3885:14:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3885:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3884:16:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53201,
            "nodeType": "FunctionDefinition",
            "src": "8051:302:67",
            "nodes": [],
            "body": {
              "id": 53200,
              "nodeType": "Block",
              "src": "8161:192:67",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    53174
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 53174,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "8179:6:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 53200,
                      "src": "8171:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 53173,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8171:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 53180,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 53176,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53161,
                        "src": "8195:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 53177,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53163,
                        "src": "8198:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 53178,
                        "name": "denominator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53165,
                        "src": "8201:11:67",
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
                      "id": 53175,
                      "name": "mulDiv",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        53158,
                        53201
                      ],
                      "referencedDeclaration": 53158,
                      "src": "8188:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 53179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8188:25:67",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8171:42:67"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 53191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 53182,
                          "name": "rounding",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53168,
                          "src": "8244:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_Rounding_$52781",
                            "typeString": "enum Math.Rounding"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_Rounding_$52781",
                            "typeString": "enum Math.Rounding"
                          }
                        ],
                        "id": 53181,
                        "name": "unsignedRoundsUp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53823,
                        "src": "8227:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_enum$_Rounding_$52781_$returns$_t_bool_$",
                          "typeString": "function (enum Math.Rounding) pure returns (bool)"
                        }
                      },
                      "id": 53183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8227:26:67",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 53190,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 53185,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53161,
                            "src": "8264:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 53186,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53163,
                            "src": "8267:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 53187,
                            "name": "denominator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53165,
                            "src": "8270:11:67",
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
                          "id": 53184,
                          "name": "mulmod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -16,
                          "src": "8257:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_mulmod_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8257:25:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 53189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8285:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "8257:29:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8227:59:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 53197,
                  "nodeType": "IfStatement",
                  "src": "8223:101:67",
                  "trueBody": {
                    "id": 53196,
                    "nodeType": "Block",
                    "src": "8288:36:67",
                    "statements": [
                      {
                        "expression": {
                          "id": 53194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 53192,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53174,
                            "src": "8302:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 53193,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8312:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8302:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 53195,
                        "nodeType": "ExpressionStatement",
                        "src": "8302:11:67"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 53198,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53174,
                    "src": "8340:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53172,
                  "id": 53199,
                  "nodeType": "Return",
                  "src": "8333:13:67"
                }
              ]
            },
            "documentation": {
              "id": 53159,
              "nodeType": "StructuredDocumentation",
              "src": "7925:121:67",
              "text": " @notice Calculates x * y / denominator with full precision, following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "8060:6:67",
            "parameters": {
              "id": 53169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53161,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "8075:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53201,
                  "src": "8067:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53160,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8067:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53163,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "8086:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53201,
                  "src": "8078:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53162,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8078:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53165,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "8097:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53201,
                  "src": "8089:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8089:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53168,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "8119:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53201,
                  "src": "8110:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53167,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53166,
                      "name": "Rounding",
                      "nameLocations": [
                        "8110:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "8110:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "8110:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8066:62:67"
            },
            "returnParameters": {
              "id": 53172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53201,
                  "src": "8152:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53170,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8152:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8151:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53313,
            "nodeType": "FunctionDefinition",
            "src": "8587:1642:67",
            "nodes": [],
            "body": {
              "id": 53312,
              "nodeType": "Block",
              "src": "8644:1585:67",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 53211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 53209,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53204,
                      "src": "8658:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 53210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8663:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8658:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 53215,
                  "nodeType": "IfStatement",
                  "src": "8654:45:67",
                  "trueBody": {
                    "id": 53214,
                    "nodeType": "Block",
                    "src": "8666:33:67",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 53212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8687:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 53208,
                        "id": 53213,
                        "nodeType": "Return",
                        "src": "8680:8:67"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    53217
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 53217,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "9386:6:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 53312,
                      "src": "9378:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 53216,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9378:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 53226,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 53225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "31",
                      "id": 53218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9395:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<<",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 53220,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53204,
                                "src": "9406:1:67",
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
                              "id": 53219,
                              "name": "log2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                53480,
                                53515
                              ],
                              "referencedDeclaration": 53480,
                              "src": "9401:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint256)"
                              }
                            },
                            "id": 53221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9401:7:67",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53222,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9412:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9401:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 53224,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "9400:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9395:19:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9378:36:67"
                },
                {
                  "id": 53311,
                  "nodeType": "UncheckedBlock",
                  "src": "9815:408:67",
                  "statements": [
                    {
                      "expression": {
                        "id": 53236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53227,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "9839:6:67",
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
                          "id": 53235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53232,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53228,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "9849:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53231,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53229,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "9858:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53230,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "9862:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "9858:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "9849:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53233,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "9848:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9873:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9848:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9839:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53237,
                      "nodeType": "ExpressionStatement",
                      "src": "9839:35:67"
                    },
                    {
                      "expression": {
                        "id": 53247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53238,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "9888:6:67",
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
                          "id": 53246,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53243,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53239,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "9898:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53242,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53240,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "9907:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53241,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "9911:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "9907:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "9898:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53244,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "9897:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9922:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9897:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9888:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53248,
                      "nodeType": "ExpressionStatement",
                      "src": "9888:35:67"
                    },
                    {
                      "expression": {
                        "id": 53258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53249,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "9937:6:67",
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
                          "id": 53257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53254,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53250,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "9947:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53253,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53251,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "9956:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53252,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "9960:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "9956:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "9947:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53255,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "9946:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53256,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9971:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9946:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9937:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53259,
                      "nodeType": "ExpressionStatement",
                      "src": "9937:35:67"
                    },
                    {
                      "expression": {
                        "id": 53269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53260,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "9986:6:67",
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
                          "id": 53268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53265,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53261,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "9996:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53264,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53262,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "10005:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53263,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "10009:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10005:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "9996:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53266,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "9995:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10020:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9995:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9986:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53270,
                      "nodeType": "ExpressionStatement",
                      "src": "9986:35:67"
                    },
                    {
                      "expression": {
                        "id": 53280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53271,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "10035:6:67",
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
                          "id": 53279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53272,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "10045:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53275,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53273,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "10054:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53274,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "10058:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10054:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10045:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53277,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "10044:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10069:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "10044:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10035:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53281,
                      "nodeType": "ExpressionStatement",
                      "src": "10035:35:67"
                    },
                    {
                      "expression": {
                        "id": 53291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53282,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "10084:6:67",
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
                          "id": 53290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53283,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "10094:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53286,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53284,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "10103:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53285,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "10107:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10103:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10094:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53288,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "10093:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53289,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10118:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "10093:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10084:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53292,
                      "nodeType": "ExpressionStatement",
                      "src": "10084:35:67"
                    },
                    {
                      "expression": {
                        "id": 53302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 53293,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53217,
                          "src": "10133:6:67",
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
                          "id": 53301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 53298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 53294,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53217,
                                  "src": "10143:6:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53297,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 53295,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53204,
                                    "src": "10152:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 53296,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53217,
                                    "src": "10156:6:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10152:10:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10143:19:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 53299,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "10142:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53300,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10167:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "10142:26:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10133:35:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 53303,
                      "nodeType": "ExpressionStatement",
                      "src": "10133:35:67"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 53305,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53217,
                            "src": "10193:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 53308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 53306,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53204,
                              "src": "10201:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 53307,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53217,
                              "src": "10205:6:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "10201:10:67",
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 53304,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52975,
                          "src": "10189:3:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53309,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10189:23:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53208,
                      "id": 53310,
                      "nodeType": "Return",
                      "src": "10182:30:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53202,
              "nodeType": "StructuredDocumentation",
              "src": "8359:223:67",
              "text": " @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded\n towards zero.\n Inspired by Henry S. Warren, Jr.'s \"Hacker's Delight\" (Chapter 11)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "8596:4:67",
            "parameters": {
              "id": 53205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53204,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8609:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53313,
                  "src": "8601:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8601:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8600:11:67"
            },
            "returnParameters": {
              "id": 53208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53207,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53313,
                  "src": "8635:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8635:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8634:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53348,
            "nodeType": "FunctionDefinition",
            "src": "10329:240:67",
            "nodes": [],
            "body": {
              "id": 53347,
              "nodeType": "Block",
              "src": "10405:164:67",
              "nodes": [],
              "statements": [
                {
                  "id": 53346,
                  "nodeType": "UncheckedBlock",
                  "src": "10415:148:67",
                  "statements": [
                    {
                      "assignments": [
                        53325
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53325,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "10447:6:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53346,
                          "src": "10439:14:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53324,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10439:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53329,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 53327,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53316,
                            "src": "10461:1:67",
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
                          "id": 53326,
                          "name": "sqrt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            53313,
                            53348
                          ],
                          "referencedDeclaration": 53313,
                          "src": "10456:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53328,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10456:7:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10439:24:67"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53330,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53325,
                          "src": "10484:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 53339,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 53332,
                                      "name": "rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53319,
                                      "src": "10511:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    ],
                                    "id": 53331,
                                    "name": "unsignedRoundsUp",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53823,
                                    "src": "10494:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_enum$_Rounding_$52781_$returns$_t_bool_$",
                                      "typeString": "function (enum Math.Rounding) pure returns (bool)"
                                    }
                                  },
                                  "id": 53333,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "10494:26:67",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53338,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 53336,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 53334,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53325,
                                      "src": "10524:6:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 53335,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53325,
                                      "src": "10533:6:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "10524:15:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 53337,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53316,
                                    "src": "10542:1:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10524:19:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "10494:49:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 53341,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10550:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 53342,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "10494:57:67",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 53340,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10546:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 53343,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10493:59:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "10484:68:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53323,
                      "id": 53345,
                      "nodeType": "Return",
                      "src": "10477:75:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53314,
              "nodeType": "StructuredDocumentation",
              "src": "10235:89:67",
              "text": " @notice Calculates sqrt(a), following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "10338:4:67",
            "parameters": {
              "id": 53320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53316,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10351:1:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53348,
                  "src": "10343:9:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10343:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53319,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "10363:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53348,
                  "src": "10354:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53318,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53317,
                      "name": "Rounding",
                      "nameLocations": [
                        "10354:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "10354:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "10354:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10342:30:67"
            },
            "returnParameters": {
              "id": 53323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53322,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53348,
                  "src": "10396:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10396:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10395:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53480,
            "nodeType": "FunctionDefinition",
            "src": "10699:983:67",
            "nodes": [],
            "body": {
              "id": 53479,
              "nodeType": "Block",
              "src": "10760:922:67",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    53357
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 53357,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10778:6:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 53479,
                      "src": "10770:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 53356,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10770:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 53359,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 53358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10787:1:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10770:18:67"
                },
                {
                  "id": 53476,
                  "nodeType": "UncheckedBlock",
                  "src": "10798:855:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53360,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "10826:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 53361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10835:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "10826:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10841:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "10826:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53374,
                      "nodeType": "IfStatement",
                      "src": "10822:99:67",
                      "trueBody": {
                        "id": 53373,
                        "nodeType": "Block",
                        "src": "10844:77:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53365,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "10862:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 53366,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10872:3:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "10862:13:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53368,
                            "nodeType": "ExpressionStatement",
                            "src": "10862:13:67"
                          },
                          {
                            "expression": {
                              "id": 53371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53369,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "10893:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 53370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10903:3:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "10893:13:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53372,
                            "nodeType": "ExpressionStatement",
                            "src": "10893:13:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53375,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "10938:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 53376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10947:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "10938:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10952:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "10938:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53389,
                      "nodeType": "IfStatement",
                      "src": "10934:96:67",
                      "trueBody": {
                        "id": 53388,
                        "nodeType": "Block",
                        "src": "10955:75:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53382,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53380,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "10973:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 53381,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10983:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "10973:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53383,
                            "nodeType": "ExpressionStatement",
                            "src": "10973:12:67"
                          },
                          {
                            "expression": {
                              "id": 53386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53384,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11003:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 53385,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11013:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "11003:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53387,
                            "nodeType": "ExpressionStatement",
                            "src": "11003:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53390,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11047:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 53391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11056:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "11047:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11061:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11047:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53404,
                      "nodeType": "IfStatement",
                      "src": "11043:96:67",
                      "trueBody": {
                        "id": 53403,
                        "nodeType": "Block",
                        "src": "11064:75:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53397,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53395,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "11082:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 53396,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11092:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "11082:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53398,
                            "nodeType": "ExpressionStatement",
                            "src": "11082:12:67"
                          },
                          {
                            "expression": {
                              "id": 53401,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53399,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11112:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 53400,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11122:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "11112:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53402,
                            "nodeType": "ExpressionStatement",
                            "src": "11112:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53409,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53405,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11156:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 53406,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11165:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "11156:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11170:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11156:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53419,
                      "nodeType": "IfStatement",
                      "src": "11152:96:67",
                      "trueBody": {
                        "id": 53418,
                        "nodeType": "Block",
                        "src": "11173:75:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53412,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53410,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "11191:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 53411,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11201:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "11191:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53413,
                            "nodeType": "ExpressionStatement",
                            "src": "11191:12:67"
                          },
                          {
                            "expression": {
                              "id": 53416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53414,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11221:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 53415,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11231:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "11221:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53417,
                            "nodeType": "ExpressionStatement",
                            "src": "11221:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53424,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53422,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53420,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11265:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 53421,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11274:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "11265:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11278:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11265:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53434,
                      "nodeType": "IfStatement",
                      "src": "11261:93:67",
                      "trueBody": {
                        "id": 53433,
                        "nodeType": "Block",
                        "src": "11281:73:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53427,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53425,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "11299:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 53426,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11309:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "11299:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53428,
                            "nodeType": "ExpressionStatement",
                            "src": "11299:11:67"
                          },
                          {
                            "expression": {
                              "id": 53431,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53429,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11328:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 53430,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11338:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "11328:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53432,
                            "nodeType": "ExpressionStatement",
                            "src": "11328:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53437,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53435,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11371:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 53436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11380:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "11371:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11384:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11371:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53449,
                      "nodeType": "IfStatement",
                      "src": "11367:93:67",
                      "trueBody": {
                        "id": 53448,
                        "nodeType": "Block",
                        "src": "11387:73:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53442,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53440,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "11405:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 53441,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11415:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "11405:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53443,
                            "nodeType": "ExpressionStatement",
                            "src": "11405:11:67"
                          },
                          {
                            "expression": {
                              "id": 53446,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53444,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11434:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 53445,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11444:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "11434:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53447,
                            "nodeType": "ExpressionStatement",
                            "src": "11434:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53450,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11477:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 53451,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11486:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "11477:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11490:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11477:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53464,
                      "nodeType": "IfStatement",
                      "src": "11473:93:67",
                      "trueBody": {
                        "id": 53463,
                        "nodeType": "Block",
                        "src": "11493:73:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53457,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53455,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53351,
                                "src": "11511:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 53456,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11521:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "11511:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53458,
                            "nodeType": "ExpressionStatement",
                            "src": "11511:11:67"
                          },
                          {
                            "expression": {
                              "id": 53461,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53459,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11540:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 53460,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11550:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "11540:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53462,
                            "nodeType": "ExpressionStatement",
                            "src": "11540:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53465,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53351,
                            "src": "11583:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53466,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11592:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "11583:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11596:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11583:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53475,
                      "nodeType": "IfStatement",
                      "src": "11579:64:67",
                      "trueBody": {
                        "id": 53474,
                        "nodeType": "Block",
                        "src": "11599:44:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53472,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53470,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53357,
                                "src": "11617:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 53471,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11627:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "11617:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53473,
                            "nodeType": "ExpressionStatement",
                            "src": "11617:11:67"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 53477,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53357,
                    "src": "11669:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53355,
                  "id": 53478,
                  "nodeType": "Return",
                  "src": "11662:13:67"
                }
              ]
            },
            "documentation": {
              "id": 53349,
              "nodeType": "StructuredDocumentation",
              "src": "10575:119:67",
              "text": " @dev Return the log in base 2 of a positive value rounded towards zero.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "10708:4:67",
            "parameters": {
              "id": 53352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53351,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10721:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53480,
                  "src": "10713:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10713:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10712:15:67"
            },
            "returnParameters": {
              "id": 53355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53354,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53480,
                  "src": "10751:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10751:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10750:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53515,
            "nodeType": "FunctionDefinition",
            "src": "11835:248:67",
            "nodes": [],
            "body": {
              "id": 53514,
              "nodeType": "Block",
              "src": "11915:168:67",
              "nodes": [],
              "statements": [
                {
                  "id": 53513,
                  "nodeType": "UncheckedBlock",
                  "src": "11925:152:67",
                  "statements": [
                    {
                      "assignments": [
                        53492
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53492,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "11957:6:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53513,
                          "src": "11949:14:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53491,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11949:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53496,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 53494,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53483,
                            "src": "11971:5:67",
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
                          "id": 53493,
                          "name": "log2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            53480,
                            53515
                          ],
                          "referencedDeclaration": 53480,
                          "src": "11966:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53495,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11966:11:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11949:28:67"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53497,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53492,
                          "src": "11998:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 53506,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 53499,
                                      "name": "rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53486,
                                      "src": "12025:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    ],
                                    "id": 53498,
                                    "name": "unsignedRoundsUp",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53823,
                                    "src": "12008:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_enum$_Rounding_$52781_$returns$_t_bool_$",
                                      "typeString": "function (enum Math.Rounding) pure returns (bool)"
                                    }
                                  },
                                  "id": 53500,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12008:26:67",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53505,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 53503,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 53501,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "12038:1:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "id": 53502,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53492,
                                      "src": "12043:6:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "12038:11:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 53504,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53483,
                                    "src": "12052:5:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "12038:19:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "12008:49:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 53508,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12064:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 53509,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "12008:57:67",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 53507,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12060:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 53510,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "12007:59:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "11998:68:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53490,
                      "id": 53512,
                      "nodeType": "Return",
                      "src": "11991:75:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53481,
              "nodeType": "StructuredDocumentation",
              "src": "11688:142:67",
              "text": " @dev Return the log in base 2, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "11844:4:67",
            "parameters": {
              "id": 53487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53483,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11857:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53515,
                  "src": "11849:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11849:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53486,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "11873:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53515,
                  "src": "11864:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53485,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53484,
                      "name": "Rounding",
                      "nameLocations": [
                        "11864:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "11864:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "11864:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11848:34:67"
            },
            "returnParameters": {
              "id": 53490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53489,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53515,
                  "src": "11906:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53488,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11906:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11905:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53644,
            "nodeType": "FunctionDefinition",
            "src": "12214:916:67",
            "nodes": [],
            "body": {
              "id": 53643,
              "nodeType": "Block",
              "src": "12276:854:67",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    53524
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 53524,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "12294:6:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 53643,
                      "src": "12286:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 53523,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12286:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 53526,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 53525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "12303:1:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12286:18:67"
                },
                {
                  "id": 53640,
                  "nodeType": "UncheckedBlock",
                  "src": "12314:787:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53531,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53527,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12342:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(57 digits omitted)...0000"
                          },
                          "id": 53530,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53528,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12351:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 53529,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12357:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "12351:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(57 digits omitted)...0000"
                          }
                        },
                        "src": "12342:17:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53543,
                      "nodeType": "IfStatement",
                      "src": "12338:103:67",
                      "trueBody": {
                        "id": 53542,
                        "nodeType": "Block",
                        "src": "12361:80:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53536,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53532,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12379:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(57 digits omitted)...0000"
                                },
                                "id": 53535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53533,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12388:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3634",
                                  "id": 53534,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12394:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_64_by_1",
                                    "typeString": "int_const 64"
                                  },
                                  "value": "64"
                                },
                                "src": "12388:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(57 digits omitted)...0000"
                                }
                              },
                              "src": "12379:17:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53537,
                            "nodeType": "ExpressionStatement",
                            "src": "12379:17:67"
                          },
                          {
                            "expression": {
                              "id": 53540,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53538,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12414:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 53539,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12424:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "12414:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53541,
                            "nodeType": "ExpressionStatement",
                            "src": "12414:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53544,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12458:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(25 digits omitted)...0000"
                          },
                          "id": 53547,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12467:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 53546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12473:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "12467:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(25 digits omitted)...0000"
                          }
                        },
                        "src": "12458:17:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53560,
                      "nodeType": "IfStatement",
                      "src": "12454:103:67",
                      "trueBody": {
                        "id": 53559,
                        "nodeType": "Block",
                        "src": "12477:80:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53549,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12495:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(25 digits omitted)...0000"
                                },
                                "id": 53552,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53550,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12504:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3332",
                                  "id": 53551,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12510:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "32"
                                },
                                "src": "12504:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(25 digits omitted)...0000"
                                }
                              },
                              "src": "12495:17:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53554,
                            "nodeType": "ExpressionStatement",
                            "src": "12495:17:67"
                          },
                          {
                            "expression": {
                              "id": 53557,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53555,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12530:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 53556,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12540:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "12530:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53558,
                            "nodeType": "ExpressionStatement",
                            "src": "12530:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53565,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53561,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12574:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          },
                          "id": 53564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53562,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12583:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 53563,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12589:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "12583:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          }
                        },
                        "src": "12574:17:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53577,
                      "nodeType": "IfStatement",
                      "src": "12570:103:67",
                      "trueBody": {
                        "id": 53576,
                        "nodeType": "Block",
                        "src": "12593:80:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53570,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53566,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12611:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000000000000000_by_1",
                                  "typeString": "int_const 10000000000000000"
                                },
                                "id": 53569,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53567,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12620:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3136",
                                  "id": 53568,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12626:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "12620:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000_by_1",
                                  "typeString": "int_const 10000000000000000"
                                }
                              },
                              "src": "12611:17:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53571,
                            "nodeType": "ExpressionStatement",
                            "src": "12611:17:67"
                          },
                          {
                            "expression": {
                              "id": 53574,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53572,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12646:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 53573,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12656:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "12646:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53575,
                            "nodeType": "ExpressionStatement",
                            "src": "12646:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53582,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53578,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12690:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000_by_1",
                            "typeString": "int_const 100000000"
                          },
                          "id": 53581,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53579,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12699:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 53580,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12705:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "12699:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000_by_1",
                            "typeString": "int_const 100000000"
                          }
                        },
                        "src": "12690:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53594,
                      "nodeType": "IfStatement",
                      "src": "12686:100:67",
                      "trueBody": {
                        "id": 53593,
                        "nodeType": "Block",
                        "src": "12708:78:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53587,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53583,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12726:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100000000_by_1",
                                  "typeString": "int_const 100000000"
                                },
                                "id": 53586,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53584,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12735:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "38",
                                  "id": 53585,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12741:1:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "12735:7:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000_by_1",
                                  "typeString": "int_const 100000000"
                                }
                              },
                              "src": "12726:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53588,
                            "nodeType": "ExpressionStatement",
                            "src": "12726:16:67"
                          },
                          {
                            "expression": {
                              "id": 53591,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53589,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12760:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 53590,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12770:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "12760:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53592,
                            "nodeType": "ExpressionStatement",
                            "src": "12760:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53595,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12803:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          },
                          "id": 53598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12812:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 53597,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12818:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "12812:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          }
                        },
                        "src": "12803:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53611,
                      "nodeType": "IfStatement",
                      "src": "12799:100:67",
                      "trueBody": {
                        "id": 53610,
                        "nodeType": "Block",
                        "src": "12821:78:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53604,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53600,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12839:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000_by_1",
                                  "typeString": "int_const 10000"
                                },
                                "id": 53603,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53601,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12848:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "34",
                                  "id": 53602,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12854:1:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4_by_1",
                                    "typeString": "int_const 4"
                                  },
                                  "value": "4"
                                },
                                "src": "12848:7:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000_by_1",
                                  "typeString": "int_const 10000"
                                }
                              },
                              "src": "12839:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53605,
                            "nodeType": "ExpressionStatement",
                            "src": "12839:16:67"
                          },
                          {
                            "expression": {
                              "id": 53608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53606,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12873:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 53607,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12883:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "12873:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53609,
                            "nodeType": "ExpressionStatement",
                            "src": "12873:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53616,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53612,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "12916:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "id": 53615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53613,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12925:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 53614,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12931:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "12925:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          }
                        },
                        "src": "12916:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53628,
                      "nodeType": "IfStatement",
                      "src": "12912:100:67",
                      "trueBody": {
                        "id": 53627,
                        "nodeType": "Block",
                        "src": "12934:78:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53621,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53617,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53518,
                                "src": "12952:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "id": 53620,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 53618,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12961:2:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "32",
                                  "id": 53619,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12967:1:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_2_by_1",
                                    "typeString": "int_const 2"
                                  },
                                  "value": "2"
                                },
                                "src": "12961:7:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                }
                              },
                              "src": "12952:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53622,
                            "nodeType": "ExpressionStatement",
                            "src": "12952:16:67"
                          },
                          {
                            "expression": {
                              "id": 53625,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53623,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "12986:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 53624,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12996:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "12986:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53626,
                            "nodeType": "ExpressionStatement",
                            "src": "12986:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53629,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53518,
                          "src": "13029:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "id": 53632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 53630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13038:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 53631,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13044:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "13038:7:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          }
                        },
                        "src": "13029:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53639,
                      "nodeType": "IfStatement",
                      "src": "13025:66:67",
                      "trueBody": {
                        "id": 53638,
                        "nodeType": "Block",
                        "src": "13047:44:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53636,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53634,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53524,
                                "src": "13065:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 53635,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13075:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "13065:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53637,
                            "nodeType": "ExpressionStatement",
                            "src": "13065:11:67"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 53641,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53524,
                    "src": "13117:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53522,
                  "id": 53642,
                  "nodeType": "Return",
                  "src": "13110:13:67"
                }
              ]
            },
            "documentation": {
              "id": 53516,
              "nodeType": "StructuredDocumentation",
              "src": "12089:120:67",
              "text": " @dev Return the log in base 10 of a positive value rounded towards zero.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "12223:5:67",
            "parameters": {
              "id": 53519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53518,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12237:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53644,
                  "src": "12229:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53517,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12229:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12228:15:67"
            },
            "returnParameters": {
              "id": 53522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53521,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53644,
                  "src": "12267:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12267:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12266:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53679,
            "nodeType": "FunctionDefinition",
            "src": "13284:251:67",
            "nodes": [],
            "body": {
              "id": 53678,
              "nodeType": "Block",
              "src": "13365:170:67",
              "nodes": [],
              "statements": [
                {
                  "id": 53677,
                  "nodeType": "UncheckedBlock",
                  "src": "13375:154:67",
                  "statements": [
                    {
                      "assignments": [
                        53656
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53656,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "13407:6:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53677,
                          "src": "13399:14:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53655,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13399:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53660,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 53658,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53647,
                            "src": "13422:5:67",
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
                          "id": 53657,
                          "name": "log10",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            53644,
                            53679
                          ],
                          "referencedDeclaration": 53644,
                          "src": "13416:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13416:12:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "13399:29:67"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53661,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53656,
                          "src": "13449:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 53670,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 53663,
                                      "name": "rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53650,
                                      "src": "13476:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    ],
                                    "id": 53662,
                                    "name": "unsignedRoundsUp",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53823,
                                    "src": "13459:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_enum$_Rounding_$52781_$returns$_t_bool_$",
                                      "typeString": "function (enum Math.Rounding) pure returns (bool)"
                                    }
                                  },
                                  "id": 53664,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13459:26:67",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53669,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 53667,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3130",
                                      "id": 53665,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "13489:2:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "**",
                                    "rightExpression": {
                                      "id": 53666,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53656,
                                      "src": "13495:6:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "13489:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 53668,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53647,
                                    "src": "13504:5:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "13489:20:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "13459:50:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 53672,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13516:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 53673,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "13459:58:67",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 53671,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13512:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 53674,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "13458:60:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "13449:69:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53654,
                      "id": 53676,
                      "nodeType": "Return",
                      "src": "13442:76:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53645,
              "nodeType": "StructuredDocumentation",
              "src": "13136:143:67",
              "text": " @dev Return the log in base 10, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "13293:5:67",
            "parameters": {
              "id": 53651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53647,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13307:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53679,
                  "src": "13299:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53646,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13299:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53650,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "13323:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53679,
                  "src": "13314:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53649,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53648,
                      "name": "Rounding",
                      "nameLocations": [
                        "13314:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "13314:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "13314:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13298:34:67"
            },
            "returnParameters": {
              "id": 53654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53653,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53679,
                  "src": "13356:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53652,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13356:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13355:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53766,
            "nodeType": "FunctionDefinition",
            "src": "13792:663:67",
            "nodes": [],
            "body": {
              "id": 53765,
              "nodeType": "Block",
              "src": "13855:600:67",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    53688
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 53688,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "13873:6:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 53765,
                      "src": "13865:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 53687,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13865:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 53690,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 53689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "13882:1:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13865:18:67"
                },
                {
                  "id": 53762,
                  "nodeType": "UncheckedBlock",
                  "src": "13893:533:67",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53695,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53693,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53691,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53682,
                            "src": "13921:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 53692,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13930:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "13921:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13936:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "13921:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53705,
                      "nodeType": "IfStatement",
                      "src": "13917:98:67",
                      "trueBody": {
                        "id": 53704,
                        "nodeType": "Block",
                        "src": "13939:76:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53698,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53696,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53682,
                                "src": "13957:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 53697,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13967:3:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "13957:13:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53699,
                            "nodeType": "ExpressionStatement",
                            "src": "13957:13:67"
                          },
                          {
                            "expression": {
                              "id": 53702,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53700,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53688,
                                "src": "13988:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 53701,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "13998:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "13988:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53703,
                            "nodeType": "ExpressionStatement",
                            "src": "13988:12:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53710,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53708,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53706,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53682,
                            "src": "14032:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 53707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14041:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "14032:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53709,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14046:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14032:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53720,
                      "nodeType": "IfStatement",
                      "src": "14028:95:67",
                      "trueBody": {
                        "id": 53719,
                        "nodeType": "Block",
                        "src": "14049:74:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53713,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53711,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53682,
                                "src": "14067:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 53712,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14077:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "14067:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53714,
                            "nodeType": "ExpressionStatement",
                            "src": "14067:12:67"
                          },
                          {
                            "expression": {
                              "id": 53717,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53715,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53688,
                                "src": "14097:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 53716,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14107:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "14097:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53718,
                            "nodeType": "ExpressionStatement",
                            "src": "14097:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53725,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53721,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53682,
                            "src": "14140:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 53722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14149:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "14140:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53724,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14154:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14140:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53735,
                      "nodeType": "IfStatement",
                      "src": "14136:95:67",
                      "trueBody": {
                        "id": 53734,
                        "nodeType": "Block",
                        "src": "14157:74:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53728,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53726,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53682,
                                "src": "14175:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 53727,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14185:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "14175:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53729,
                            "nodeType": "ExpressionStatement",
                            "src": "14175:12:67"
                          },
                          {
                            "expression": {
                              "id": 53732,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53730,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53688,
                                "src": "14205:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 53731,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14215:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "14205:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53733,
                            "nodeType": "ExpressionStatement",
                            "src": "14205:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53738,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53736,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53682,
                            "src": "14248:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 53737,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14257:2:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "14248:11:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53739,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14262:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14248:15:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53750,
                      "nodeType": "IfStatement",
                      "src": "14244:95:67",
                      "trueBody": {
                        "id": 53749,
                        "nodeType": "Block",
                        "src": "14265:74:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53743,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53741,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53682,
                                "src": "14283:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 53742,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14293:2:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "14283:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53744,
                            "nodeType": "ExpressionStatement",
                            "src": "14283:12:67"
                          },
                          {
                            "expression": {
                              "id": 53747,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53745,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53688,
                                "src": "14313:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 53746,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14323:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "14313:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53748,
                            "nodeType": "ExpressionStatement",
                            "src": "14313:11:67"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 53753,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 53751,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53682,
                            "src": "14356:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 53752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14365:1:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "14356:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 53754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14369:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14356:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 53761,
                      "nodeType": "IfStatement",
                      "src": "14352:64:67",
                      "trueBody": {
                        "id": 53760,
                        "nodeType": "Block",
                        "src": "14372:44:67",
                        "statements": [
                          {
                            "expression": {
                              "id": 53758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 53756,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53688,
                                "src": "14390:6:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 53757,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14400:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "14390:11:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 53759,
                            "nodeType": "ExpressionStatement",
                            "src": "14390:11:67"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 53763,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53688,
                    "src": "14442:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53686,
                  "id": 53764,
                  "nodeType": "Return",
                  "src": "14435:13:67"
                }
              ]
            },
            "documentation": {
              "id": 53680,
              "nodeType": "StructuredDocumentation",
              "src": "13541:246:67",
              "text": " @dev Return the log in base 256 of a positive value rounded towards zero.\n Returns 0 if given 0.\n Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "13801:6:67",
            "parameters": {
              "id": 53683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53682,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13816:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53766,
                  "src": "13808:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13808:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13807:15:67"
            },
            "returnParameters": {
              "id": 53686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53685,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53766,
                  "src": "13846:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13846:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13845:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53804,
            "nodeType": "FunctionDefinition",
            "src": "14610:259:67",
            "nodes": [],
            "body": {
              "id": 53803,
              "nodeType": "Block",
              "src": "14692:177:67",
              "nodes": [],
              "statements": [
                {
                  "id": 53802,
                  "nodeType": "UncheckedBlock",
                  "src": "14702:161:67",
                  "statements": [
                    {
                      "assignments": [
                        53778
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 53778,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "14734:6:67",
                          "nodeType": "VariableDeclaration",
                          "scope": 53802,
                          "src": "14726:14:67",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 53777,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14726:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 53782,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 53780,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53769,
                            "src": "14750:5:67",
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
                          "id": 53779,
                          "name": "log256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            53766,
                            53804
                          ],
                          "referencedDeclaration": 53766,
                          "src": "14743:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 53781,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14743:13:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "14726:30:67"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 53800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 53783,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53778,
                          "src": "14777:6:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 53795,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 53785,
                                      "name": "rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 53772,
                                      "src": "14804:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_enum$_Rounding_$52781",
                                        "typeString": "enum Math.Rounding"
                                      }
                                    ],
                                    "id": 53784,
                                    "name": "unsignedRoundsUp",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53823,
                                    "src": "14787:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_enum$_Rounding_$52781_$returns$_t_bool_$",
                                      "typeString": "function (enum Math.Rounding) pure returns (bool)"
                                    }
                                  },
                                  "id": 53786,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "14787:26:67",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 53794,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 53792,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 53787,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "14817:1:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "components": [
                                        {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 53790,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 53788,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 53778,
                                            "src": "14823:6:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "<<",
                                          "rightExpression": {
                                            "hexValue": "33",
                                            "id": 53789,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "14833:1:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_3_by_1",
                                              "typeString": "int_const 3"
                                            },
                                            "value": "3"
                                          },
                                          "src": "14823:11:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 53791,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "14822:13:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "14817:18:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 53793,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 53769,
                                    "src": "14838:5:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "14817:26:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "14787:56:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 53797,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14850:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 53798,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "14787:64:67",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 53796,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "14846:1:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 53799,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "14786:66:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "14777:75:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 53776,
                      "id": 53801,
                      "nodeType": "Return",
                      "src": "14770:82:67"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 53767,
              "nodeType": "StructuredDocumentation",
              "src": "14461:144:67",
              "text": " @dev Return the log in base 256, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "14619:6:67",
            "parameters": {
              "id": 53773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53769,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14634:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53804,
                  "src": "14626:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14626:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53772,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "14650:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53804,
                  "src": "14641:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53771,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53770,
                      "name": "Rounding",
                      "nameLocations": [
                        "14641:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "14641:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "14641:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14625:34:67"
            },
            "returnParameters": {
              "id": 53776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53775,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53804,
                  "src": "14683:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53774,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14683:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14682:9:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 53823,
            "nodeType": "FunctionDefinition",
            "src": "14993:122:67",
            "nodes": [],
            "body": {
              "id": 53822,
              "nodeType": "Block",
              "src": "15067:48:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 53820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 53818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 53815,
                            "name": "rounding",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53808,
                            "src": "15090:8:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Rounding_$52781",
                              "typeString": "enum Math.Rounding"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_Rounding_$52781",
                              "typeString": "enum Math.Rounding"
                            }
                          ],
                          "id": 53814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "15084:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint8_$",
                            "typeString": "type(uint8)"
                          },
                          "typeName": {
                            "id": 53813,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "15084:5:67",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 53816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15084:15:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 53817,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15102:1:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "15084:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 53819,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "15107:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "15084:24:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 53812,
                  "id": 53821,
                  "nodeType": "Return",
                  "src": "15077:31:67"
                }
              ]
            },
            "documentation": {
              "id": 53805,
              "nodeType": "StructuredDocumentation",
              "src": "14875:113:67",
              "text": " @dev Returns whether a provided rounding mode is considered rounding up for unsigned integers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsignedRoundsUp",
            "nameLocation": "15002:16:67",
            "parameters": {
              "id": 53809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53808,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "15028:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 53823,
                  "src": "15019:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$52781",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 53807,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 53806,
                      "name": "Rounding",
                      "nameLocations": [
                        "15019:8:67"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52781,
                      "src": "15019:8:67"
                    },
                    "referencedDeclaration": 52781,
                    "src": "15019:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$52781",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15018:19:67"
            },
            "returnParameters": {
              "id": 53812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 53811,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 53823,
                  "src": "15061:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 53810,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15061:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15060:6:67"
            },
            "scope": 53824,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Math",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 52773,
          "nodeType": "StructuredDocumentation",
          "src": "129:73:67",
          "text": " @dev Standard math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          53824
        ],
        "name": "Math",
        "nameLocation": "211:4:67",
        "scope": 53825,
        "usedErrors": [
          52776
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 67
} as const;