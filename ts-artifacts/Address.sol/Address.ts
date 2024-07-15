export const Address = {
  "abi": [
    {
      "type": "error",
      "name": "AddressEmptyCode",
      "inputs": [
        {
          "name": "target",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "AddressInsufficientBalance",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "FailedInnerCall",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212201e1dc4d1a1a19fcafa363da6c7afd3afdfdb0f9c1b2c54f913dbca76046420dc64736f6c63430008190033",
    "sourceMap": "195:6066:55:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea26469706673582212201e1dc4d1a1a19fcafa363da6c7afd3afdfdb0f9c1b2c54f913dbca76046420dc64736f6c63430008190033",
    "sourceMap": "195:6066:55:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
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
              "name": "target",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "AddressEmptyCode"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "AddressInsufficientBalance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FailedInnerCall"
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
        "node_modules/@openzeppelin/contracts/utils/Address.sol": "Address"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Address.sol",
    "id": 51305,
    "exportedSymbols": {
      "Address": [
        51304
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:6161:55",
    "nodes": [
      {
        "id": 51053,
        "nodeType": "PragmaDirective",
        "src": "101:24:55",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51304,
        "nodeType": "ContractDefinition",
        "src": "195:6066:55",
        "nodes": [
          {
            "id": 51059,
            "nodeType": "ErrorDefinition",
            "src": "316:50:55",
            "nodes": [],
            "documentation": {
              "id": 51055,
              "nodeType": "StructuredDocumentation",
              "src": "217:94:55",
              "text": " @dev The ETH balance of the account is not enough to perform the operation."
            },
            "errorSelector": "cd786059",
            "name": "AddressInsufficientBalance",
            "nameLocation": "322:26:55",
            "parameters": {
              "id": 51058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51057,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "357:7:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51059,
                  "src": "349:15:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51056,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:55",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "348:17:55"
            }
          },
          {
            "id": 51064,
            "nodeType": "ErrorDefinition",
            "src": "452:39:55",
            "nodes": [],
            "documentation": {
              "id": 51060,
              "nodeType": "StructuredDocumentation",
              "src": "372:75:55",
              "text": " @dev There's no code at `target` (it is not a contract)."
            },
            "errorSelector": "9996b315",
            "name": "AddressEmptyCode",
            "nameLocation": "458:16:55",
            "parameters": {
              "id": 51063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51062,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "483:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51064,
                  "src": "475:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:55",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "474:16:55"
            }
          },
          {
            "id": 51067,
            "nodeType": "ErrorDefinition",
            "src": "591:24:55",
            "nodes": [],
            "documentation": {
              "id": 51065,
              "nodeType": "StructuredDocumentation",
              "src": "497:89:55",
              "text": " @dev A call to an address target failed. The target may have reverted."
            },
            "errorSelector": "1425ea42",
            "name": "FailedInnerCall",
            "nameLocation": "597:15:55",
            "parameters": {
              "id": 51066,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:2:55"
            }
          },
          {
            "id": 51108,
            "nodeType": "FunctionDefinition",
            "src": "1531:331:55",
            "nodes": [],
            "body": {
              "id": 51107,
              "nodeType": "Block",
              "src": "1602:260:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 51077,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1624:4:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Address_$51304",
                              "typeString": "library Address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Address_$51304",
                              "typeString": "library Address"
                            }
                          ],
                          "id": 51076,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1616:7:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 51075,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1616:7:55",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 51078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1616:13:55",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 51079,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1630:7:55",
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "1616:21:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 51080,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51072,
                      "src": "1640:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1616:30:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51090,
                  "nodeType": "IfStatement",
                  "src": "1612:109:55",
                  "trueBody": {
                    "id": 51089,
                    "nodeType": "Block",
                    "src": "1648:73:55",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 51085,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1704:4:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Address_$51304",
                                    "typeString": "library Address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Address_$51304",
                                    "typeString": "library Address"
                                  }
                                ],
                                "id": 51084,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1696:7:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 51083,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1696:7:55",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 51086,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1696:13:55",
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
                            "id": 51082,
                            "name": "AddressInsufficientBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51059,
                            "src": "1669:26:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 51087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1669:41:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51088,
                        "nodeType": "RevertStatement",
                        "src": "1662:48:55"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    51092,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51092,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1737:7:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51107,
                      "src": "1732:12:55",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 51091,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1732:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 51099,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 51097,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1780:2:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 51093,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51070,
                          "src": "1750:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 51094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1760:4:55",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "1750:14:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 51096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 51095,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51072,
                          "src": "1772:6:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1750:29:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 51098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1750:33:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1731:52:55"
                },
                {
                  "condition": {
                    "id": 51101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1797:8:55",
                    "subExpression": {
                      "id": 51100,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51092,
                      "src": "1798:7:55",
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
                  "id": 51106,
                  "nodeType": "IfStatement",
                  "src": "1793:63:55",
                  "trueBody": {
                    "id": 51105,
                    "nodeType": "Block",
                    "src": "1807:49:55",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 51102,
                            "name": "FailedInnerCall",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51067,
                            "src": "1828:15:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 51103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1828:17:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51104,
                        "nodeType": "RevertStatement",
                        "src": "1821:24:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51068,
              "nodeType": "StructuredDocumentation",
              "src": "621:905:55",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nameLocation": "1540:9:55",
            "parameters": {
              "id": 51073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51070,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "1566:9:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51108,
                  "src": "1550:25:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 51069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1550:15:55",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51072,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1585:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51108,
                  "src": "1577:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1577:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1549:43:55"
            },
            "returnParameters": {
              "id": 51074,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1602:0:55"
            },
            "scope": 51304,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51125,
            "nodeType": "FunctionDefinition",
            "src": "2705:151:55",
            "nodes": [],
            "body": {
              "id": 51124,
              "nodeType": "Block",
              "src": "2794:62:55",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 51119,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51111,
                        "src": "2833:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 51120,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51113,
                        "src": "2841:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 51121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2847:1:55",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 51118,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51171,
                      "src": "2811:21:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                      }
                    },
                    "id": 51122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2811:38:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 51117,
                  "id": 51123,
                  "nodeType": "Return",
                  "src": "2804:45:55"
                }
              ]
            },
            "documentation": {
              "id": 51109,
              "nodeType": "StructuredDocumentation",
              "src": "1868:832:55",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "2714:12:55",
            "parameters": {
              "id": 51114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51111,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2735:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51125,
                  "src": "2727:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51110,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2727:7:55",
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
                  "id": 51113,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "2756:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51125,
                  "src": "2743:17:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51112,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2743:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2726:35:55"
            },
            "returnParameters": {
              "id": 51117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51116,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51125,
                  "src": "2780:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51115,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2779:14:55"
            },
            "scope": 51304,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51171,
            "nodeType": "FunctionDefinition",
            "src": "3180:392:55",
            "nodes": [],
            "body": {
              "id": 51170,
              "nodeType": "Block",
              "src": "3293:279:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 51139,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3315:4:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Address_$51304",
                              "typeString": "library Address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Address_$51304",
                              "typeString": "library Address"
                            }
                          ],
                          "id": 51138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3307:7:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 51137,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3307:7:55",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 51140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3307:13:55",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 51141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3321:7:55",
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "3307:21:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 51142,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51132,
                      "src": "3331:5:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3307:29:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51152,
                  "nodeType": "IfStatement",
                  "src": "3303:108:55",
                  "trueBody": {
                    "id": 51151,
                    "nodeType": "Block",
                    "src": "3338:73:55",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 51147,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3394:4:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Address_$51304",
                                    "typeString": "library Address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Address_$51304",
                                    "typeString": "library Address"
                                  }
                                ],
                                "id": 51146,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3386:7:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 51145,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3386:7:55",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 51148,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3386:13:55",
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
                            "id": 51144,
                            "name": "AddressInsufficientBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51059,
                            "src": "3359:26:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 51149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3359:41:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51150,
                        "nodeType": "RevertStatement",
                        "src": "3352:48:55"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    51154,
                    51156
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51154,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "3426:7:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51170,
                      "src": "3421:12:55",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 51153,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3421:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 51156,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "3448:10:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51170,
                      "src": "3435:23:55",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 51155,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3435:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51163,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51161,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51130,
                        "src": "3488:4:55",
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
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 51157,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51128,
                          "src": "3462:6:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 51158,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3469:4:55",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "3462:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 51160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 51159,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51132,
                          "src": "3481:5:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "3462:25:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 51162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3462:31:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3420:73:55"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 51165,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51128,
                        "src": "3537:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 51166,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51154,
                        "src": "3545:7:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 51167,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51156,
                        "src": "3554:10:55",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 51164,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51263,
                      "src": "3510:26:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                      }
                    },
                    "id": 51168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3510:55:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 51136,
                  "id": 51169,
                  "nodeType": "Return",
                  "src": "3503:62:55"
                }
              ]
            },
            "documentation": {
              "id": 51126,
              "nodeType": "StructuredDocumentation",
              "src": "2862:313:55",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "3189:21:55",
            "parameters": {
              "id": 51133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51128,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3219:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51171,
                  "src": "3211:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51127,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3211:7:55",
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
                  "id": 51130,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "3240:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51171,
                  "src": "3227:17:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51129,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3227:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51132,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3254:5:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51171,
                  "src": "3246:13:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3246:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3210:50:55"
            },
            "returnParameters": {
              "id": 51136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51171,
                  "src": "3279:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51134,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3278:14:55"
            },
            "scope": 51304,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51197,
            "nodeType": "FunctionDefinition",
            "src": "3711:254:55",
            "nodes": [],
            "body": {
              "id": 51196,
              "nodeType": "Block",
              "src": "3811:154:55",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51182,
                    51184
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51182,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "3827:7:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51196,
                      "src": "3822:12:55",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 51181,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3822:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 51184,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "3849:10:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51196,
                      "src": "3836:23:55",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 51183,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3836:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51189,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51187,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51176,
                        "src": "3881:4:55",
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
                      "expression": {
                        "id": 51185,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51174,
                        "src": "3863:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 51186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3870:10:55",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "3863:17:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 51188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3863:23:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3821:65:55"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 51191,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51174,
                        "src": "3930:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 51192,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51182,
                        "src": "3938:7:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 51193,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51184,
                        "src": "3947:10:55",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 51190,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51263,
                      "src": "3903:26:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                      }
                    },
                    "id": 51194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3903:55:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 51180,
                  "id": 51195,
                  "nodeType": "Return",
                  "src": "3896:62:55"
                }
              ]
            },
            "documentation": {
              "id": 51172,
              "nodeType": "StructuredDocumentation",
              "src": "3578:128:55",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "3720:18:55",
            "parameters": {
              "id": 51177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51174,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3747:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51197,
                  "src": "3739:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3739:7:55",
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
                  "id": 51176,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "3768:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51197,
                  "src": "3755:17:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51175,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3755:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3738:35:55"
            },
            "returnParameters": {
              "id": 51180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51179,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51197,
                  "src": "3797:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51178,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3797:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3796:14:55"
            },
            "scope": 51304,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51223,
            "nodeType": "FunctionDefinition",
            "src": "4106:253:55",
            "nodes": [],
            "body": {
              "id": 51222,
              "nodeType": "Block",
              "src": "4203:156:55",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51208,
                    51210
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51208,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "4219:7:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51222,
                      "src": "4214:12:55",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 51207,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4214:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 51210,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "4241:10:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 51222,
                      "src": "4228:23:55",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 51209,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4228:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51215,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51213,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51202,
                        "src": "4275:4:55",
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
                      "expression": {
                        "id": 51211,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51200,
                        "src": "4255:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 51212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4262:12:55",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "4255:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 51214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4255:25:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4213:67:55"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 51217,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51200,
                        "src": "4324:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 51218,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51208,
                        "src": "4332:7:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 51219,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51210,
                        "src": "4341:10:55",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 51216,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51263,
                      "src": "4297:26:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                      }
                    },
                    "id": 51220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4297:55:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 51206,
                  "id": 51221,
                  "nodeType": "Return",
                  "src": "4290:62:55"
                }
              ]
            },
            "documentation": {
              "id": 51198,
              "nodeType": "StructuredDocumentation",
              "src": "3971:130:55",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "4115:20:55",
            "parameters": {
              "id": 51203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51200,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "4144:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51223,
                  "src": "4136:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4136:7:55",
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
                  "id": 51202,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4165:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51223,
                  "src": "4152:17:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51201,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4152:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4135:35:55"
            },
            "returnParameters": {
              "id": 51206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51205,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51223,
                  "src": "4189:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51204,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:14:55"
            },
            "scope": 51304,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51263,
            "nodeType": "FunctionDefinition",
            "src": "4625:582:55",
            "nodes": [],
            "body": {
              "id": 51262,
              "nodeType": "Block",
              "src": "4783:424:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 51236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4797:8:55",
                    "subExpression": {
                      "id": 51235,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51228,
                      "src": "4798:7:55",
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
                  "falseBody": {
                    "id": 51260,
                    "nodeType": "Block",
                    "src": "4857:344:55",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 51251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 51245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 51242,
                                "name": "returndata",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51230,
                                "src": "5045:10:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 51243,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5056:6:55",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "5045:17:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 51244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5066:1:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5045:22:55",
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
                            "id": 51250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "expression": {
                                  "id": 51246,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 51226,
                                  "src": "5071:6:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 51247,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5078:4:55",
                                "memberName": "code",
                                "nodeType": "MemberAccess",
                                "src": "5071:11:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 51248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5083:6:55",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "5071:18:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 51249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5093:1:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5071:23:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5045:49:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 51257,
                        "nodeType": "IfStatement",
                        "src": "5041:119:55",
                        "trueBody": {
                          "id": 51256,
                          "nodeType": "Block",
                          "src": "5096:64:55",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 51253,
                                    "name": "target",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 51226,
                                    "src": "5138:6:55",
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
                                  "id": 51252,
                                  "name": "AddressEmptyCode",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 51064,
                                  "src": "5121:16:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                    "typeString": "function (address) pure"
                                  }
                                },
                                "id": 51254,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5121:24:55",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 51255,
                              "nodeType": "RevertStatement",
                              "src": "5114:31:55"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 51258,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51230,
                          "src": "5180:10:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 51234,
                        "id": 51259,
                        "nodeType": "Return",
                        "src": "5173:17:55"
                      }
                    ]
                  },
                  "id": 51261,
                  "nodeType": "IfStatement",
                  "src": "4793:408:55",
                  "trueBody": {
                    "id": 51241,
                    "nodeType": "Block",
                    "src": "4807:44:55",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51238,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51230,
                              "src": "4829:10:55",
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
                            "id": 51237,
                            "name": "_revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51303,
                            "src": "4821:7:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory) pure"
                            }
                          },
                          "id": 51239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4821:19:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51240,
                        "nodeType": "ExpressionStatement",
                        "src": "4821:19:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51224,
              "nodeType": "StructuredDocumentation",
              "src": "4365:255:55",
              "text": " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResultFromTarget",
            "nameLocation": "4634:26:55",
            "parameters": {
              "id": 51231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51226,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "4678:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51263,
                  "src": "4670:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51225,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4670:7:55",
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
                  "id": 51228,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "4699:7:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51263,
                  "src": "4694:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 51227,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4694:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51230,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "4729:10:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51263,
                  "src": "4716:23:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51229,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4716:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4660:85:55"
            },
            "returnParameters": {
              "id": 51234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51233,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51263,
                  "src": "4769:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51232,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4769:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4768:14:55"
            },
            "scope": 51304,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51285,
            "nodeType": "FunctionDefinition",
            "src": "5407:224:55",
            "nodes": [],
            "body": {
              "id": 51284,
              "nodeType": "Block",
              "src": "5509:122:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 51274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5523:8:55",
                    "subExpression": {
                      "id": 51273,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51266,
                      "src": "5524:7:55",
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
                  "falseBody": {
                    "id": 51282,
                    "nodeType": "Block",
                    "src": "5583:42:55",
                    "statements": [
                      {
                        "expression": {
                          "id": 51280,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51268,
                          "src": "5604:10:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 51272,
                        "id": 51281,
                        "nodeType": "Return",
                        "src": "5597:17:55"
                      }
                    ]
                  },
                  "id": 51283,
                  "nodeType": "IfStatement",
                  "src": "5519:106:55",
                  "trueBody": {
                    "id": 51279,
                    "nodeType": "Block",
                    "src": "5533:44:55",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51276,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51268,
                              "src": "5555:10:55",
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
                            "id": 51275,
                            "name": "_revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51303,
                            "src": "5547:7:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory) pure"
                            }
                          },
                          "id": 51277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5547:19:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51278,
                        "nodeType": "ExpressionStatement",
                        "src": "5547:19:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51264,
              "nodeType": "StructuredDocumentation",
              "src": "5213:189:55",
              "text": " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResult",
            "nameLocation": "5416:16:55",
            "parameters": {
              "id": 51269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51266,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "5438:7:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51285,
                  "src": "5433:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 51265,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5433:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51268,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "5460:10:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51285,
                  "src": "5447:23:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51267,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5447:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5432:39:55"
            },
            "returnParameters": {
              "id": 51272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51271,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51285,
                  "src": "5495:12:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51270,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5495:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5494:14:55"
            },
            "scope": 51304,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51303,
            "nodeType": "FunctionDefinition",
            "src": "5743:516:55",
            "nodes": [],
            "body": {
              "id": 51302,
              "nodeType": "Block",
              "src": "5798:461:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 51291,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51288,
                        "src": "5874:10:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 51292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5885:6:55",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5874:17:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 51293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5894:1:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5874:21:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 51300,
                    "nodeType": "Block",
                    "src": "6204:49:55",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 51297,
                            "name": "FailedInnerCall",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51067,
                            "src": "6225:15:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 51298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6225:17:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51299,
                        "nodeType": "RevertStatement",
                        "src": "6218:24:55"
                      }
                    ]
                  },
                  "id": 51301,
                  "nodeType": "IfStatement",
                  "src": "5870:383:55",
                  "trueBody": {
                    "id": 51296,
                    "nodeType": "Block",
                    "src": "5897:301:55",
                    "statements": [
                      {
                        "AST": {
                          "nativeSrc": "6055:133:55",
                          "nodeType": "YulBlock",
                          "src": "6055:133:55",
                          "statements": [
                            {
                              "nativeSrc": "6073:40:55",
                              "nodeType": "YulVariableDeclaration",
                              "src": "6073:40:55",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "returndata",
                                    "nativeSrc": "6102:10:55",
                                    "nodeType": "YulIdentifier",
                                    "src": "6102:10:55"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "6096:5:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "6096:5:55"
                                },
                                "nativeSrc": "6096:17:55",
                                "nodeType": "YulFunctionCall",
                                "src": "6096:17:55"
                              },
                              "variables": [
                                {
                                  "name": "returndata_size",
                                  "nativeSrc": "6077:15:55",
                                  "nodeType": "YulTypedName",
                                  "src": "6077:15:55",
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
                                        "kind": "number",
                                        "nativeSrc": "6141:2:55",
                                        "nodeType": "YulLiteral",
                                        "src": "6141:2:55",
                                        "type": "",
                                        "value": "32"
                                      },
                                      {
                                        "name": "returndata",
                                        "nativeSrc": "6145:10:55",
                                        "nodeType": "YulIdentifier",
                                        "src": "6145:10:55"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "6137:3:55",
                                      "nodeType": "YulIdentifier",
                                      "src": "6137:3:55"
                                    },
                                    "nativeSrc": "6137:19:55",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6137:19:55"
                                  },
                                  {
                                    "name": "returndata_size",
                                    "nativeSrc": "6158:15:55",
                                    "nodeType": "YulIdentifier",
                                    "src": "6158:15:55"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6130:6:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "6130:6:55"
                                },
                                "nativeSrc": "6130:44:55",
                                "nodeType": "YulFunctionCall",
                                "src": "6130:44:55"
                              },
                              "nativeSrc": "6130:44:55",
                              "nodeType": "YulExpressionStatement",
                              "src": "6130:44:55"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 51288,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6102:10:55",
                            "valueSize": 1
                          },
                          {
                            "declaration": 51288,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6145:10:55",
                            "valueSize": 1
                          }
                        ],
                        "id": 51295,
                        "nodeType": "InlineAssembly",
                        "src": "6046:142:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51286,
              "nodeType": "StructuredDocumentation",
              "src": "5637:101:55",
              "text": " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "5752:7:55",
            "parameters": {
              "id": 51289,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51288,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "5773:10:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 51303,
                  "src": "5760:23:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51287,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5760:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5759:25:55"
            },
            "returnParameters": {
              "id": 51290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5798:0:55"
            },
            "scope": 51304,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Address",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 51054,
          "nodeType": "StructuredDocumentation",
          "src": "127:67:55",
          "text": " @dev Collection of functions related to the address type"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51304
        ],
        "name": "Address",
        "nameLocation": "203:7:55",
        "scope": 51305,
        "usedErrors": [
          51059,
          51064,
          51067
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 55
} as const;