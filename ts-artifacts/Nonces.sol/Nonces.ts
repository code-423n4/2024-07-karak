export const Nonces = {
  "abi": [
    {
      "type": "function",
      "name": "nonces",
      "inputs": [
        {
          "name": "owner",
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
      "type": "error",
      "name": "InvalidAccountNonce",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "currentNonce",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
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
    "nonces(address)": "7ecebe00"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentNonce\",\"type\":\"uint256\"}],\"name\":\"InvalidAccountNonce\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Provides tracking nonces for addresses. Nonces will only increment.\",\"errors\":{\"InvalidAccountNonce(address,uint256)\":[{\"details\":\"The nonce used for an `account` is not the expected current nonce.\"}]},\"kind\":\"dev\",\"methods\":{\"nonces(address)\":{\"details\":\"Returns the next unused nonce for an address.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Nonces.sol\":\"Nonces\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Nonces.sol\":{\"keccak256\":\"0x0082767004fca261c332e9ad100868327a863a88ef724e844857128845ab350f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://132dce9686a54e025eb5ba5d2e48208f847a1ec3e60a3e527766d7bf53fb7f9e\",\"dweb:/ipfs/QmXn1a2nUZMpu2z6S88UoTfMVtY2YNh86iGrzJDYmMkKeZ\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "currentNonce",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "InvalidAccountNonce"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
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
          "nonces(address)": {
            "details": "Returns the next unused nonce for an address."
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
        "node_modules/@openzeppelin/contracts/utils/Nonces.sol": "Nonces"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Nonces.sol": {
        "keccak256": "0x0082767004fca261c332e9ad100868327a863a88ef724e844857128845ab350f",
        "urls": [
          "bzz-raw://132dce9686a54e025eb5ba5d2e48208f847a1ec3e60a3e527766d7bf53fb7f9e",
          "dweb:/ipfs/QmXn1a2nUZMpu2z6S88UoTfMVtY2YNh86iGrzJDYmMkKeZ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Nonces.sol",
    "id": 51403,
    "exportedSymbols": {
      "Nonces": [
        51402
      ]
    },
    "nodeType": "SourceUnit",
    "src": "99:1391:57",
    "nodes": [
      {
        "id": 51336,
        "nodeType": "PragmaDirective",
        "src": "99:24:57",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51402,
        "nodeType": "ContractDefinition",
        "src": "209:1280:57",
        "nodes": [
          {
            "id": 51344,
            "nodeType": "ErrorDefinition",
            "src": "335:65:57",
            "nodes": [],
            "documentation": {
              "id": 51338,
              "nodeType": "StructuredDocumentation",
              "src": "240:90:57",
              "text": " @dev The nonce used for an `account` is not the expected current nonce."
            },
            "errorSelector": "752d88c0",
            "name": "InvalidAccountNonce",
            "nameLocation": "341:19:57",
            "parameters": {
              "id": 51343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51340,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "369:7:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51344,
                  "src": "361:15:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51339,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:57",
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
                  "id": 51342,
                  "mutability": "mutable",
                  "name": "currentNonce",
                  "nameLocation": "386:12:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51344,
                  "src": "378:20:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "360:39:57"
            }
          },
          {
            "id": 51348,
            "nodeType": "VariableDeclaration",
            "src": "406:51:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "450:7:57",
            "scope": 51402,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 51347,
              "keyName": "account",
              "keyNameLocation": "422:7:57",
              "keyType": {
                "id": 51345,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "414:7:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "406:35:57",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 51346,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "433:7:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 51361,
            "nodeType": "FunctionDefinition",
            "src": "538:107:57",
            "nodes": [],
            "body": {
              "id": 51360,
              "nodeType": "Block",
              "src": "607:38:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 51356,
                      "name": "_nonces",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51348,
                      "src": "624:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 51358,
                    "indexExpression": {
                      "id": 51357,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51351,
                      "src": "632:5:57",
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
                    "src": "624:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 51355,
                  "id": 51359,
                  "nodeType": "Return",
                  "src": "617:21:57"
                }
              ]
            },
            "documentation": {
              "id": 51349,
              "nodeType": "StructuredDocumentation",
              "src": "464:69:57",
              "text": " @dev Returns the next unused nonce for an address."
            },
            "functionSelector": "7ecebe00",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "547:6:57",
            "parameters": {
              "id": 51352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51351,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "562:5:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51361,
                  "src": "554:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51350,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "553:15:57"
            },
            "returnParameters": {
              "id": 51355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51354,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51361,
                  "src": "598:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:9:57"
            },
            "scope": 51402,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 51376,
            "nodeType": "FunctionDefinition",
            "src": "759:395:57",
            "nodes": [],
            "body": {
              "id": 51375,
              "nodeType": "Block",
              "src": "828:326:57",
              "nodes": [],
              "statements": [
                {
                  "id": 51374,
                  "nodeType": "UncheckedBlock",
                  "src": "1031:117:57",
                  "statements": [
                    {
                      "expression": {
                        "id": 51372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "1121:16:57",
                        "subExpression": {
                          "baseExpression": {
                            "id": 51369,
                            "name": "_nonces",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51348,
                            "src": "1121:7:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 51371,
                          "indexExpression": {
                            "id": 51370,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51364,
                            "src": "1129:5:57",
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
                          "src": "1121:14:57",
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
                      "functionReturnParameters": 51368,
                      "id": 51373,
                      "nodeType": "Return",
                      "src": "1114:23:57"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 51362,
              "nodeType": "StructuredDocumentation",
              "src": "651:103:57",
              "text": " @dev Consumes a nonce.\n Returns the current value and increments nonce."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_useNonce",
            "nameLocation": "768:9:57",
            "parameters": {
              "id": 51365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51364,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "786:5:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51376,
                  "src": "778:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "777:15:57"
            },
            "returnParameters": {
              "id": 51368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51367,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51376,
                  "src": "819:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51366,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "818:9:57"
            },
            "scope": 51402,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 51401,
            "nodeType": "FunctionDefinition",
            "src": "1265:222:57",
            "nodes": [],
            "body": {
              "id": 51400,
              "nodeType": "Block",
              "src": "1338:149:57",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51385
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51385,
                      "mutability": "mutable",
                      "name": "current",
                      "nameLocation": "1356:7:57",
                      "nodeType": "VariableDeclaration",
                      "scope": 51400,
                      "src": "1348:15:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 51384,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1348:7:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51389,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51387,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51379,
                        "src": "1376:5:57",
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
                      "id": 51386,
                      "name": "_useNonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51376,
                      "src": "1366:9:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 51388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1366:16:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1348:34:57"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 51390,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51381,
                      "src": "1396:5:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 51391,
                      "name": "current",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51385,
                      "src": "1405:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1396:16:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51399,
                  "nodeType": "IfStatement",
                  "src": "1392:89:57",
                  "trueBody": {
                    "id": 51398,
                    "nodeType": "Block",
                    "src": "1414:67:57",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 51394,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51379,
                              "src": "1455:5:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 51395,
                              "name": "current",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51385,
                              "src": "1462:7:57",
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
                            "id": 51393,
                            "name": "InvalidAccountNonce",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51344,
                            "src": "1435:19:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) pure"
                            }
                          },
                          "id": 51396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1435:35:57",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51397,
                        "nodeType": "RevertStatement",
                        "src": "1428:42:57"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51377,
              "nodeType": "StructuredDocumentation",
              "src": "1160:100:57",
              "text": " @dev Same as {_useNonce} but checking that `nonce` is the next valid for `owner`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_useCheckedNonce",
            "nameLocation": "1274:16:57",
            "parameters": {
              "id": 51382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51379,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1299:5:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51401,
                  "src": "1291:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51378,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1291:7:57",
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
                  "id": 51381,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1314:5:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 51401,
                  "src": "1306:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1306:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1290:30:57"
            },
            "returnParameters": {
              "id": 51383,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1338:0:57"
            },
            "scope": 51402,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Nonces",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 51337,
          "nodeType": "StructuredDocumentation",
          "src": "125:83:57",
          "text": " @dev Provides tracking nonces for addresses. Nonces will only increment."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51402
        ],
        "name": "Nonces",
        "nameLocation": "227:6:57",
        "scope": 51403,
        "usedErrors": [
          51344
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 57
} as const;