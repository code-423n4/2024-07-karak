export const SignatureChecker = {
  "abi": [],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220a010e3b00873d2b48d09eafe8468804ae3d7695403615dc3c88ff369a113f69d64736f6c63430008190033",
    "sourceMap": "531:1742:64:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220a010e3b00873d2b48d09eafe8468804ae3d7695403615dc3c88ff369a113f69d64736f6c63430008190033",
    "sourceMap": "531:1742:64:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA signatures from externally owned accounts (EOAs) as well as ERC1271 signatures from smart contract wallets like Argent and Safe Wallet (previously Gnosis Safe).\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":\"SignatureChecker\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743\",\"dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x6b11eb41a228cca35d4b662b4df69fcd75192851365102690f57b2ac01e83fe6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ab006a2983ed350d2af21ddcdd835dcae3b8340086cc4d088460da5abd041f69\",\"dweb:/ipfs/QmbEacDhkJZiGrgzLjB4pNtE8Z1uudjDw1DvcDUTVQFsLG\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": "SignatureChecker"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": {
        "keccak256": "0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39",
        "urls": [
          "bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743",
          "dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf",
        "urls": [
          "bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c",
          "dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": {
        "keccak256": "0x6b11eb41a228cca35d4b662b4df69fcd75192851365102690f57b2ac01e83fe6",
        "urls": [
          "bzz-raw://ab006a2983ed350d2af21ddcdd835dcae3b8340086cc4d088460da5abd041f69",
          "dweb:/ipfs/QmbEacDhkJZiGrgzLjB4pNtE8Z1uudjDw1DvcDUTVQFsLG"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
    "id": 52735,
    "exportedSymbols": {
      "ECDSA": [
        52332
      ],
      "IERC1271": [
        49004
      ],
      "SignatureChecker": [
        52734
      ]
    },
    "nodeType": "SourceUnit",
    "src": "123:2151:64",
    "nodes": [
      {
        "id": 52635,
        "nodeType": "PragmaDirective",
        "src": "123:24:64",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52637,
        "nodeType": "ImportDirective",
        "src": "149:34:64",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol",
        "file": "./ECDSA.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52735,
        "sourceUnit": 52333,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52636,
              "name": "ECDSA",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52332,
              "src": "157:5:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52639,
        "nodeType": "ImportDirective",
        "src": "184:55:64",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol",
        "file": "../../interfaces/IERC1271.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52735,
        "sourceUnit": 49005,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52638,
              "name": "IERC1271",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49004,
              "src": "192:8:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52734,
        "nodeType": "ContractDefinition",
        "src": "531:1742:64",
        "nodes": [
          {
            "id": 52681,
            "nodeType": "FunctionDefinition",
            "src": "1039:368:64",
            "nodes": [],
            "body": {
              "id": 52680,
              "nodeType": "Block",
              "src": "1151:256:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52653,
                    52656,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52653,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "1170:9:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 52680,
                      "src": "1162:17:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 52652,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1162:7:64",
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
                      "id": 52656,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "1200:5:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 52680,
                      "src": "1181:24:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 52655,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 52654,
                          "name": "ECDSA.RecoverError",
                          "nameLocations": [
                            "1181:5:64",
                            "1187:12:64"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 51992,
                          "src": "1181:18:64"
                        },
                        "referencedDeclaration": 51992,
                        "src": "1181:18:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 52662,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 52659,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52645,
                        "src": "1228:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52660,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52647,
                        "src": "1234:9:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 52657,
                        "name": "ECDSA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52332,
                        "src": "1211:5:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ECDSA_$52332_$",
                          "typeString": "type(library ECDSA)"
                        }
                      },
                      "id": 52658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1217:10:64",
                      "memberName": "tryRecover",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52058,
                      "src": "1211:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 52661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1211:33:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1161:83:64"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 52678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 52671,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_enum$_RecoverError_$51992",
                              "typeString": "enum ECDSA.RecoverError"
                            },
                            "id": 52667,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52663,
                              "name": "error",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52656,
                              "src": "1274:5:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$51992",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 52664,
                                  "name": "ECDSA",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52332,
                                  "src": "1283:5:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ECDSA_$52332_$",
                                    "typeString": "type(library ECDSA)"
                                  }
                                },
                                "id": 52665,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1289:12:64",
                                "memberName": "RecoverError",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 51992,
                                "src": "1283:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 52666,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "1302:7:64",
                              "memberName": "NoError",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 51988,
                              "src": "1283:26:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$51992",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "src": "1274:35:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 52670,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 52668,
                              "name": "recovered",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52653,
                              "src": "1313:9:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 52669,
                              "name": "signer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52643,
                              "src": "1326:6:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1313:19:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1274:58:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 52672,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1273:60:64",
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
                          "id": 52674,
                          "name": "signer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52643,
                          "src": "1376:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 52675,
                          "name": "hash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52645,
                          "src": "1384:4:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 52676,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52647,
                          "src": "1390:9:64",
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 52673,
                        "name": "isValidERC1271SignatureNow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52733,
                        "src": "1349:26:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                        }
                      },
                      "id": 52677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1349:51:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1273:127:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52651,
                  "id": 52679,
                  "nodeType": "Return",
                  "src": "1254:146:64"
                }
              ]
            },
            "documentation": {
              "id": 52641,
              "nodeType": "StructuredDocumentation",
              "src": "562:472:64",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. If the signer is a smart contract, the\n signature is validated against that smart contract using ERC1271, otherwise it's validated using `ECDSA.recover`.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidSignatureNow",
            "nameLocation": "1048:19:64",
            "parameters": {
              "id": 52648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52643,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1076:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52681,
                  "src": "1068:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1068:7:64",
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
                  "id": 52645,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1092:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52681,
                  "src": "1084:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52644,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1084:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52647,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1111:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52681,
                  "src": "1098:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 52646,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1098:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1067:54:64"
            },
            "returnParameters": {
              "id": 52651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52650,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52681,
                  "src": "1145:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52649,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1145:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1144:6:64"
            },
            "scope": 52734,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52733,
            "nodeType": "FunctionDefinition",
            "src": "1813:458:64",
            "nodes": [],
            "body": {
              "id": 52732,
              "nodeType": "Block",
              "src": "1962:309:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52694,
                    52696
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52694,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1978:7:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 52732,
                      "src": "1973:12:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 52693,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1973:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 52696,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2000:6:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 52732,
                      "src": "1987:19:64",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 52695,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1987:5:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52708,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 52701,
                              "name": "IERC1271",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49004,
                              "src": "2056:8:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC1271_$49004_$",
                                "typeString": "type(contract IERC1271)"
                              }
                            },
                            "id": 52702,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2065:16:64",
                            "memberName": "isValidSignature",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 49003,
                            "src": "2056:25:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                              "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 52703,
                                "name": "hash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52686,
                                "src": "2084:4:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 52704,
                                "name": "signature",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52688,
                                "src": "2090:9:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "id": 52705,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2083:17:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bytes32,bytes memory)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                              "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bytes32,bytes memory)"
                            }
                          ],
                          "expression": {
                            "id": 52699,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2041:3:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 52700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2045:10:64",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2041:14:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 52706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2041:60:64",
                        "tryCall": false,
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
                        "id": 52697,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52684,
                        "src": "2010:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 52698,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2017:10:64",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "2010:17:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 52707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2010:101:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1972:139:64"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 52729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 52714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52709,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52694,
                            "src": "2129:7:64",
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
                            "id": 52713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 52710,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52696,
                                "src": "2152:6:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 52711,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2159:6:64",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2152:13:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "3332",
                              "id": 52712,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2169:2:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            "src": "2152:19:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2129:42:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 52728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 52717,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52696,
                                "src": "2198:6:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "components": [
                                  {
                                    "id": 52719,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2207:7:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes32_$",
                                      "typeString": "type(bytes32)"
                                    },
                                    "typeName": {
                                      "id": 52718,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2207:7:64",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "id": 52720,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2206:9:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                },
                                {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                }
                              ],
                              "expression": {
                                "id": 52715,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2187:3:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 52716,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2191:6:64",
                              "memberName": "decode",
                              "nodeType": "MemberAccess",
                              "src": "2187:10:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 52721,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2187:29:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 52724,
                                    "name": "IERC1271",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 49004,
                                    "src": "2228:8:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IERC1271_$49004_$",
                                      "typeString": "type(contract IERC1271)"
                                    }
                                  },
                                  "id": 52725,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "2237:16:64",
                                  "memberName": "isValidSignature",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 49003,
                                  "src": "2228:25:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                    "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                                  }
                                },
                                "id": 52726,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "2254:8:64",
                                "memberName": "selector",
                                "nodeType": "MemberAccess",
                                "src": "2228:34:64",
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
                              "id": 52723,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2220:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 52722,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2220:7:64",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52727,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2220:43:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2187:76:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2129:134:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 52730,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2128:136:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52692,
                  "id": 52731,
                  "nodeType": "Return",
                  "src": "2121:143:64"
                }
              ]
            },
            "documentation": {
              "id": 52682,
              "nodeType": "StructuredDocumentation",
              "src": "1413:395:64",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. The signature is validated\n against the signer smart contract using ERC1271.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidERC1271SignatureNow",
            "nameLocation": "1822:26:64",
            "parameters": {
              "id": 52689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52684,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1866:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52733,
                  "src": "1858:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1858:7:64",
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
                  "id": 52686,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1890:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52733,
                  "src": "1882:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52685,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1882:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52688,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1917:9:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 52733,
                  "src": "1904:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 52687,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1904:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1848:84:64"
            },
            "returnParameters": {
              "id": 52692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52691,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52733,
                  "src": "1956:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52690,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:6:64"
            },
            "scope": 52734,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SignatureChecker",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 52640,
          "nodeType": "StructuredDocumentation",
          "src": "241:289:64",
          "text": " @dev Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA\n signatures from externally owned accounts (EOAs) as well as ERC1271 signatures from smart contract wallets like\n Argent and Safe Wallet (previously Gnosis Safe)."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          52734
        ],
        "name": "SignatureChecker",
        "nameLocation": "539:16:64",
        "scope": 52735,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 64
} as const;