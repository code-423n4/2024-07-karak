export const Ownable = {
  "abi": [
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
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
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
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
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
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
    "owner()": "8da5cb5b",
    "renounceOwnership()": "715018a6",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions. The initial owner is set to the address provided by the deployer. This can later be changed with {transferOwnership}. This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be applied to your functions to restrict their use to the owner.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the contract setting the address provided by the deployer as the initial owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/access/Ownable.sol\":\"Ownable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
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
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
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
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
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
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "details": "Initializes the contract setting the address provided by the deployer as the initial owner."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
        "node_modules/@openzeppelin/contracts/access/Ownable.sol": "Ownable"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/access/Ownable.sol": {
        "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        "urls": [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/access/Ownable.sol",
    "id": 47971,
    "exportedSymbols": {
      "Context": [
        51334
      ],
      "Ownable": [
        47970
      ]
    },
    "nodeType": "SourceUnit",
    "src": "102:3000:30",
    "nodes": [
      {
        "id": 47824,
        "nodeType": "PragmaDirective",
        "src": "102:24:30",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 47826,
        "nodeType": "ImportDirective",
        "src": "128:45:30",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47971,
        "sourceUnit": 51335,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47825,
              "name": "Context",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51334,
              "src": "136:7:30",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47970,
        "nodeType": "ContractDefinition",
        "src": "663:2438:30",
        "nodes": [
          {
            "id": 47831,
            "nodeType": "VariableDeclaration",
            "src": "706:22:30",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_owner",
            "nameLocation": "722:6:30",
            "scope": 47970,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 47830,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "706:7:30",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "id": 47836,
            "nodeType": "ErrorDefinition",
            "src": "825:50:30",
            "nodes": [],
            "documentation": {
              "id": 47832,
              "nodeType": "StructuredDocumentation",
              "src": "735:85:30",
              "text": " @dev The caller account is not authorized to perform an operation."
            },
            "errorSelector": "118cdaa7",
            "name": "OwnableUnauthorizedAccount",
            "nameLocation": "831:26:30",
            "parameters": {
              "id": 47835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47834,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "866:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47836,
                  "src": "858:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47833,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "857:17:30"
            }
          },
          {
            "id": 47841,
            "nodeType": "ErrorDefinition",
            "src": "968:41:30",
            "nodes": [],
            "documentation": {
              "id": 47837,
              "nodeType": "StructuredDocumentation",
              "src": "881:82:30",
              "text": " @dev The owner is not a valid owner account. (eg. `address(0)`)"
            },
            "errorSelector": "1e4fbdf7",
            "name": "OwnableInvalidOwner",
            "nameLocation": "974:19:30",
            "parameters": {
              "id": 47840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47839,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1002:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47841,
                  "src": "994:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "994:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "993:15:30"
            }
          },
          {
            "id": 47847,
            "nodeType": "EventDefinition",
            "src": "1015:84:30",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "1021:20:30",
            "parameters": {
              "id": 47846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47843,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousOwner",
                  "nameLocation": "1058:13:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47847,
                  "src": "1042:29:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1042:7:30",
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
                  "id": 47845,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1089:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47847,
                  "src": "1073:24:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1073:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1041:57:30"
            }
          },
          {
            "id": 47873,
            "nodeType": "FunctionDefinition",
            "src": "1225:187:30",
            "nodes": [],
            "body": {
              "id": 47872,
              "nodeType": "Block",
              "src": "1259:153:30",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 47858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 47853,
                      "name": "initialOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47850,
                      "src": "1273:12:30",
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
                          "id": 47856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1297:1:30",
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
                        "id": 47855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1289:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 47854,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1289:7:30",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 47857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1289:10:30",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1273:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47867,
                  "nodeType": "IfStatement",
                  "src": "1269:95:30",
                  "trueBody": {
                    "id": 47866,
                    "nodeType": "Block",
                    "src": "1301:63:30",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 47862,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1350:1:30",
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
                                "id": 47861,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1342:7:30",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 47860,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1342:7:30",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 47863,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1342:10:30",
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
                            "id": 47859,
                            "name": "OwnableInvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47841,
                            "src": "1322:19:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 47864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1322:31:30",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47865,
                        "nodeType": "RevertStatement",
                        "src": "1315:38:30"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47869,
                        "name": "initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47850,
                        "src": "1392:12:30",
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
                      "id": 47868,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47969,
                      "src": "1373:18:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 47870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1373:32:30",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47871,
                  "nodeType": "ExpressionStatement",
                  "src": "1373:32:30"
                }
              ]
            },
            "documentation": {
              "id": 47848,
              "nodeType": "StructuredDocumentation",
              "src": "1105:115:30",
              "text": " @dev Initializes the contract setting the address provided by the deployer as the initial owner."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 47851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47850,
                  "mutability": "mutable",
                  "name": "initialOwner",
                  "nameLocation": "1245:12:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47873,
                  "src": "1237:20:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47849,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1236:22:30"
            },
            "returnParameters": {
              "id": 47852,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1259:0:30"
            },
            "scope": 47970,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47881,
            "nodeType": "ModifierDefinition",
            "src": "1500:62:30",
            "nodes": [],
            "body": {
              "id": 47880,
              "nodeType": "Block",
              "src": "1521:41:30",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47876,
                      "name": "_checkOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47907,
                      "src": "1531:11:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 47877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1531:13:30",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47878,
                  "nodeType": "ExpressionStatement",
                  "src": "1531:13:30"
                },
                {
                  "id": 47879,
                  "nodeType": "PlaceholderStatement",
                  "src": "1554:1:30"
                }
              ]
            },
            "documentation": {
              "id": 47874,
              "nodeType": "StructuredDocumentation",
              "src": "1418:77:30",
              "text": " @dev Throws if called by any account other than the owner."
            },
            "name": "onlyOwner",
            "nameLocation": "1509:9:30",
            "parameters": {
              "id": 47875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1518:2:30"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47890,
            "nodeType": "FunctionDefinition",
            "src": "1638:85:30",
            "nodes": [],
            "body": {
              "id": 47889,
              "nodeType": "Block",
              "src": "1693:30:30",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 47887,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47831,
                    "src": "1710:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 47886,
                  "id": 47888,
                  "nodeType": "Return",
                  "src": "1703:13:30"
                }
              ]
            },
            "documentation": {
              "id": 47882,
              "nodeType": "StructuredDocumentation",
              "src": "1568:65:30",
              "text": " @dev Returns the address of the current owner."
            },
            "functionSelector": "8da5cb5b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "1647:5:30",
            "parameters": {
              "id": 47883,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1652:2:30"
            },
            "returnParameters": {
              "id": 47886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47885,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47890,
                  "src": "1684:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47884,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1684:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1683:9:30"
            },
            "scope": 47970,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47907,
            "nodeType": "FunctionDefinition",
            "src": "1796:162:30",
            "nodes": [],
            "body": {
              "id": 47906,
              "nodeType": "Block",
              "src": "1841:117:30",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 47898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 47894,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47890,
                        "src": "1855:5:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                          "typeString": "function () view returns (address)"
                        }
                      },
                      "id": 47895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1855:7:30",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 47896,
                        "name": "_msgSender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51316,
                        "src": "1866:10:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                          "typeString": "function () view returns (address)"
                        }
                      },
                      "id": 47897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1866:12:30",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1855:23:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47905,
                  "nodeType": "IfStatement",
                  "src": "1851:101:30",
                  "trueBody": {
                    "id": 47904,
                    "nodeType": "Block",
                    "src": "1880:72:30",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 47900,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51316,
                                "src": "1928:10:30",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 47901,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1928:12:30",
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
                            "id": 47899,
                            "name": "OwnableUnauthorizedAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47836,
                            "src": "1901:26:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 47902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1901:40:30",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47903,
                        "nodeType": "RevertStatement",
                        "src": "1894:47:30"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47891,
              "nodeType": "StructuredDocumentation",
              "src": "1729:62:30",
              "text": " @dev Throws if the sender is not the owner."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkOwner",
            "nameLocation": "1805:11:30",
            "parameters": {
              "id": 47892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1816:2:30"
            },
            "returnParameters": {
              "id": 47893,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1841:0:30"
            },
            "scope": 47970,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47921,
            "nodeType": "FunctionDefinition",
            "src": "2293:101:30",
            "nodes": [],
            "body": {
              "id": 47920,
              "nodeType": "Block",
              "src": "2347:47:30",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 47916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2384:1:30",
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
                          "id": 47915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2376:7:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 47914,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2376:7:30",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 47917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2376:10:30",
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
                      "id": 47913,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47969,
                      "src": "2357:18:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 47918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2357:30:30",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47919,
                  "nodeType": "ExpressionStatement",
                  "src": "2357:30:30"
                }
              ]
            },
            "documentation": {
              "id": 47908,
              "nodeType": "StructuredDocumentation",
              "src": "1964:324:30",
              "text": " @dev Leaves the contract without owner. It will not be possible to call\n `onlyOwner` functions. Can only be called by the current owner.\n NOTE: Renouncing ownership will leave the contract without an owner,\n thereby disabling any functionality that is only available to the owner."
            },
            "functionSelector": "715018a6",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47911,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47910,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2337:9:30"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47881,
                  "src": "2337:9:30"
                },
                "nodeType": "ModifierInvocation",
                "src": "2337:9:30"
              }
            ],
            "name": "renounceOwnership",
            "nameLocation": "2302:17:30",
            "parameters": {
              "id": 47909,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2319:2:30"
            },
            "returnParameters": {
              "id": 47912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2347:0:30"
            },
            "scope": 47970,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47949,
            "nodeType": "FunctionDefinition",
            "src": "2543:215:30",
            "nodes": [],
            "body": {
              "id": 47948,
              "nodeType": "Block",
              "src": "2613:145:30",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 47934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 47929,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47924,
                      "src": "2627:8:30",
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
                          "id": 47932,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2647:1:30",
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
                        "id": 47931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2639:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 47930,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2639:7:30",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 47933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2639:10:30",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2627:22:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47943,
                  "nodeType": "IfStatement",
                  "src": "2623:91:30",
                  "trueBody": {
                    "id": 47942,
                    "nodeType": "Block",
                    "src": "2651:63:30",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 47938,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2700:1:30",
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
                                "id": 47937,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2692:7:30",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 47936,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2692:7:30",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 47939,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2692:10:30",
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
                            "id": 47935,
                            "name": "OwnableInvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47841,
                            "src": "2672:19:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 47940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2672:31:30",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47941,
                        "nodeType": "RevertStatement",
                        "src": "2665:38:30"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47945,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47924,
                        "src": "2742:8:30",
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
                      "id": 47944,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47969,
                      "src": "2723:18:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 47946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2723:28:30",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47947,
                  "nodeType": "ExpressionStatement",
                  "src": "2723:28:30"
                }
              ]
            },
            "documentation": {
              "id": 47922,
              "nodeType": "StructuredDocumentation",
              "src": "2400:138:30",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Can only be called by the current owner."
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47927,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47926,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2603:9:30"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47881,
                  "src": "2603:9:30"
                },
                "nodeType": "ModifierInvocation",
                "src": "2603:9:30"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "2552:17:30",
            "parameters": {
              "id": 47925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47924,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "2578:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47949,
                  "src": "2570:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47923,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2570:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2569:18:30"
            },
            "returnParameters": {
              "id": 47928,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2613:0:30"
            },
            "scope": 47970,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47969,
            "nodeType": "FunctionDefinition",
            "src": "2912:187:30",
            "nodes": [],
            "body": {
              "id": 47968,
              "nodeType": "Block",
              "src": "2975:124:30",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47956
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47956,
                      "mutability": "mutable",
                      "name": "oldOwner",
                      "nameLocation": "2993:8:30",
                      "nodeType": "VariableDeclaration",
                      "scope": 47968,
                      "src": "2985:16:30",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 47955,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2985:7:30",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47958,
                  "initialValue": {
                    "id": 47957,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47831,
                    "src": "3004:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2985:25:30"
                },
                {
                  "expression": {
                    "id": 47961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 47959,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47831,
                      "src": "3020:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 47960,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47952,
                      "src": "3029:8:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3020:17:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 47962,
                  "nodeType": "ExpressionStatement",
                  "src": "3020:17:30"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 47964,
                        "name": "oldOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47956,
                        "src": "3073:8:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 47965,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47952,
                        "src": "3083:8:30",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47963,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47847,
                      "src": "3052:20:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 47966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3052:40:30",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47967,
                  "nodeType": "EmitStatement",
                  "src": "3047:45:30"
                }
              ]
            },
            "documentation": {
              "id": 47950,
              "nodeType": "StructuredDocumentation",
              "src": "2764:143:30",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Internal function without access restriction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transferOwnership",
            "nameLocation": "2921:18:30",
            "parameters": {
              "id": 47953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47952,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "2948:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 47969,
                  "src": "2940:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2940:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2939:18:30"
            },
            "returnParameters": {
              "id": 47954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2975:0:30"
            },
            "scope": 47970,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 47828,
              "name": "Context",
              "nameLocations": [
                "692:7:30"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51334,
              "src": "692:7:30"
            },
            "id": 47829,
            "nodeType": "InheritanceSpecifier",
            "src": "692:7:30"
          }
        ],
        "canonicalName": "Ownable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 47827,
          "nodeType": "StructuredDocumentation",
          "src": "175:487:30",
          "text": " @dev Contract module which provides a basic access control mechanism, where\n there is an account (an owner) that can be granted exclusive access to\n specific functions.\n The initial owner is set to the address provided by the deployer. This can\n later be changed with {transferOwnership}.\n This module is used through inheritance. It will make available the modifier\n `onlyOwner`, which can be applied to your functions to restrict their use to\n the owner."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          47970,
          51334
        ],
        "name": "Ownable",
        "nameLocation": "681:7:30",
        "scope": 47971,
        "usedErrors": [
          47836,
          47841
        ],
        "usedEvents": [
          47847
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 30
} as const;