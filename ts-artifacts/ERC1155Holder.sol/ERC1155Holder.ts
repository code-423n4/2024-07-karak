export const ERC1155Holder = {
  "abi": [
    {
      "type": "function",
      "name": "onERC1155BatchReceived",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC1155Received",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
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
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "bc197c81",
    "onERC1155Received(address,address,uint256,uint256,bytes)": "f23a6e61",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Simple implementation of `IERC1155Receiver` that will allow a contract to hold ERC1155 tokens. IMPORTANT: When inheriting this contract, you must include a way to use the received tokens, otherwise they will be stuck.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol\":\"ERC1155Holder\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xb69597a63b202e28401128bed6a6d259e8730191274471af7303eafb247881a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://25addbda49a578b3318130585601344c5149a5549d749adf88e9685349a46b23\",\"dweb:/ipfs/Qme2DuD8gpsve1ZvaSMQpBwMdpU7yAtekDwr7gUp8dX4zX\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol\":{\"keccak256\":\"0xc26cd2e2bcf59b87c986fc653545b35010db9c585a3f3312fe61d7b1b3805735\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46fe54b0ac3ee60bdff012fae7d13c1171dff433aa4fdd356fd06ce46fbe711b\",\"dweb:/ipfs/QmTTm6jBY6jQ6fx1cnCT4YepEV2aQvqLme5TSxuidfpf2q\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
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
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
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
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
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
        "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol": "ERC1155Holder"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": {
        "keccak256": "0xb69597a63b202e28401128bed6a6d259e8730191274471af7303eafb247881a3",
        "urls": [
          "bzz-raw://25addbda49a578b3318130585601344c5149a5549d749adf88e9685349a46b23",
          "dweb:/ipfs/Qme2DuD8gpsve1ZvaSMQpBwMdpU7yAtekDwr7gUp8dX4zX"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol": {
        "keccak256": "0xc26cd2e2bcf59b87c986fc653545b35010db9c585a3f3312fe61d7b1b3805735",
        "urls": [
          "bzz-raw://46fe54b0ac3ee60bdff012fae7d13c1171dff433aa4fdd356fd06ce46fbe711b",
          "dweb:/ipfs/QmTTm6jBY6jQ6fx1cnCT4YepEV2aQvqLme5TSxuidfpf2q"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol",
    "id": 50198,
    "exportedSymbols": {
      "ERC1155Holder": [
        50197
      ],
      "ERC165": [
        52758
      ],
      "IERC1155Receiver": [
        50116
      ],
      "IERC165": [
        52770
      ]
    },
    "nodeType": "SourceUnit",
    "src": "121:1230:47",
    "nodes": [
      {
        "id": 50118,
        "nodeType": "PragmaDirective",
        "src": "121:24:47",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50121,
        "nodeType": "ImportDirective",
        "src": "147:72:47",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol",
        "file": "../../../utils/introspection/ERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50198,
        "sourceUnit": 52759,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50119,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52770,
              "src": "155:7:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 50120,
              "name": "ERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52758,
              "src": "164:6:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50123,
        "nodeType": "ImportDirective",
        "src": "220:57:47",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "file": "../IERC1155Receiver.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50198,
        "sourceUnit": 50117,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50122,
              "name": "IERC1155Receiver",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50116,
              "src": "228:16:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50197,
        "nodeType": "ContractDefinition",
        "src": "522:828:47",
        "nodes": [
          {
            "id": 50152,
            "nodeType": "FunctionDefinition",
            "src": "649:221:47",
            "nodes": [],
            "body": {
              "id": 50151,
              "nodeType": "Block",
              "src": "757:113:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 50149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 50144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 50139,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50131,
                        "src": "774:11:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 50141,
                              "name": "IERC1155Receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50116,
                              "src": "794:16:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$50116_$",
                                "typeString": "type(contract IERC1155Receiver)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$50116_$",
                                "typeString": "type(contract IERC1155Receiver)"
                              }
                            ],
                            "id": 50140,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "789:4:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 50142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "789:22:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155Receiver_$50116",
                            "typeString": "type(contract IERC1155Receiver)"
                          }
                        },
                        "id": 50143,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "812:11:47",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "789:34:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "774:49:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 50147,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50131,
                          "src": "851:11:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 50145,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "827:5:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ERC1155Holder_$50197_$",
                            "typeString": "type(contract super ERC1155Holder)"
                          }
                        },
                        "id": 50146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "833:17:47",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52757,
                        "src": "827:23:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 50148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "827:36:47",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "774:89:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 50138,
                  "id": 50150,
                  "nodeType": "Return",
                  "src": "767:96:47"
                }
              ]
            },
            "baseFunctions": [
              52757,
              52769
            ],
            "documentation": {
              "id": 50129,
              "nodeType": "StructuredDocumentation",
              "src": "588:56:47",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "658:17:47",
            "overrides": {
              "id": 50135,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 50133,
                  "name": "ERC165",
                  "nameLocations": [
                    "725:6:47"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 52758,
                  "src": "725:6:47"
                },
                {
                  "id": 50134,
                  "name": "IERC165",
                  "nameLocations": [
                    "733:7:47"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 52770,
                  "src": "733:7:47"
                }
              ],
              "src": "716:25:47"
            },
            "parameters": {
              "id": 50132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50131,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "683:11:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 50152,
                  "src": "676:18:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 50130,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "676:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "675:20:47"
            },
            "returnParameters": {
              "id": 50138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50137,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50152,
                  "src": "751:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50136,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "751:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "750:6:47"
            },
            "scope": 50197,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50173,
            "nodeType": "FunctionDefinition",
            "src": "876:219:47",
            "nodes": [],
            "body": {
              "id": 50172,
              "nodeType": "Block",
              "src": "1040:55:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 50168,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -28,
                        "src": "1057:4:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC1155Holder_$50197",
                          "typeString": "contract ERC1155Holder"
                        }
                      },
                      "id": 50169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1062:17:47",
                      "memberName": "onERC1155Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50173,
                      "src": "1057:22:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 50170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "1080:8:47",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "1057:31:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 50167,
                  "id": 50171,
                  "nodeType": "Return",
                  "src": "1050:38:47"
                }
              ]
            },
            "baseFunctions": [
              50097
            ],
            "functionSelector": "f23a6e61",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "885:17:47",
            "overrides": {
              "id": 50164,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1014:8:47"
            },
            "parameters": {
              "id": 50163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50154,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "912:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50153,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "912:7:47",
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
                  "id": 50156,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "929:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50155,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "929:7:47",
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
                  "id": 50158,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "946:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "946:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50160,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "963:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "963:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50162,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "980:12:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 50161,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "902:96:47"
            },
            "returnParameters": {
              "id": 50167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50166,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50173,
                  "src": "1032:6:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 50165,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1031:8:47"
            },
            "scope": 50197,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50196,
            "nodeType": "FunctionDefinition",
            "src": "1101:247:47",
            "nodes": [],
            "body": {
              "id": 50195,
              "nodeType": "Block",
              "src": "1288:60:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 50191,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -28,
                        "src": "1305:4:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC1155Holder_$50197",
                          "typeString": "contract ERC1155Holder"
                        }
                      },
                      "id": 50192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1310:22:47",
                      "memberName": "onERC1155BatchReceived",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50196,
                      "src": "1305:27:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 50193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "1333:8:47",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "1305:36:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 50190,
                  "id": 50194,
                  "nodeType": "Return",
                  "src": "1298:43:47"
                }
              ]
            },
            "baseFunctions": [
              50115
            ],
            "functionSelector": "bc197c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "1110:22:47",
            "overrides": {
              "id": 50187,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1262:8:47"
            },
            "parameters": {
              "id": 50186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50175,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1142:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50174,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1142:7:47",
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
                  "id": 50177,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1159:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1159:7:47",
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
                  "id": 50180,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1176:16:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50178,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1176:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50179,
                    "nodeType": "ArrayTypeName",
                    "src": "1176:9:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50183,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1202:16:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50181,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1202:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50182,
                    "nodeType": "ArrayTypeName",
                    "src": "1202:9:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50185,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1228:12:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 50184,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1228:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1132:114:47"
            },
            "returnParameters": {
              "id": 50190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50189,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50196,
                  "src": "1280:6:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 50188,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1280:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1279:8:47"
            },
            "scope": 50197,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 50125,
              "name": "ERC165",
              "nameLocations": [
                "557:6:47"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 52758,
              "src": "557:6:47"
            },
            "id": 50126,
            "nodeType": "InheritanceSpecifier",
            "src": "557:6:47"
          },
          {
            "baseName": {
              "id": 50127,
              "name": "IERC1155Receiver",
              "nameLocations": [
                "565:16:47"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50116,
              "src": "565:16:47"
            },
            "id": 50128,
            "nodeType": "InheritanceSpecifier",
            "src": "565:16:47"
          }
        ],
        "canonicalName": "ERC1155Holder",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 50124,
          "nodeType": "StructuredDocumentation",
          "src": "279:242:47",
          "text": " @dev Simple implementation of `IERC1155Receiver` that will allow a contract to hold ERC1155 tokens.\n IMPORTANT: When inheriting this contract, you must include a way to use the received tokens, otherwise they will be\n stuck."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50197,
          50116,
          52758,
          52770
        ],
        "name": "ERC1155Holder",
        "nameLocation": "540:13:47",
        "scope": 50198,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 47
} as const;