export const ECDSA = {
  "abi": [
    {
      "type": "error",
      "name": "ECDSAInvalidSignature",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureLength",
      "inputs": [
        {
          "name": "length",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureS",
      "inputs": [
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220b0cfbf01ab9ad41f9e9247259ae53a2d2533ce88415247f06cd22bfd9352463764736f6c63430008190033",
    "sourceMap": "344:7386:61:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220b0cfbf01ab9ad41f9e9247259ae53a2d2533ce88415247f06cd22bfd9352463764736f6c63430008190033",
    "sourceMap": "344:7386:61:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ECDSAInvalidSignature\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"ECDSAInvalidSignatureLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"ECDSAInvalidSignatureS\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Elliptic Curve Digital Signature Algorithm (ECDSA) operations. These functions can be used to verify that a message was signed by the holder of the private keys of a given address.\",\"errors\":{\"ECDSAInvalidSignature()\":[{\"details\":\"The signature derives the `address(0)`.\"}],\"ECDSAInvalidSignatureLength(uint256)\":[{\"details\":\"The signature has an invalid length.\"}],\"ECDSAInvalidSignatureS(bytes32)\":[{\"details\":\"The signature has an S value that is in the upper half order.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":\"ECDSA\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]}},\"version\":1}",
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
          "name": "ECDSAInvalidSignature"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureLength"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureS"
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
        "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": "ECDSA"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf",
        "urls": [
          "bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c",
          "dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol",
    "id": 52333,
    "exportedSymbols": {
      "ECDSA": [
        52332
      ]
    },
    "nodeType": "SourceUnit",
    "src": "112:7619:61",
    "nodes": [
      {
        "id": 51986,
        "nodeType": "PragmaDirective",
        "src": "112:24:61",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52332,
        "nodeType": "ContractDefinition",
        "src": "344:7386:61",
        "nodes": [
          {
            "id": 51992,
            "nodeType": "EnumDefinition",
            "src": "364:126:61",
            "nodes": [],
            "canonicalName": "ECDSA.RecoverError",
            "members": [
              {
                "id": 51988,
                "name": "NoError",
                "nameLocation": "392:7:61",
                "nodeType": "EnumValue",
                "src": "392:7:61"
              },
              {
                "id": 51989,
                "name": "InvalidSignature",
                "nameLocation": "409:16:61",
                "nodeType": "EnumValue",
                "src": "409:16:61"
              },
              {
                "id": 51990,
                "name": "InvalidSignatureLength",
                "nameLocation": "435:22:61",
                "nodeType": "EnumValue",
                "src": "435:22:61"
              },
              {
                "id": 51991,
                "name": "InvalidSignatureS",
                "nameLocation": "467:17:61",
                "nodeType": "EnumValue",
                "src": "467:17:61"
              }
            ],
            "name": "RecoverError",
            "nameLocation": "369:12:61"
          },
          {
            "id": 51995,
            "nodeType": "ErrorDefinition",
            "src": "564:30:61",
            "nodes": [],
            "documentation": {
              "id": 51993,
              "nodeType": "StructuredDocumentation",
              "src": "496:63:61",
              "text": " @dev The signature derives the `address(0)`."
            },
            "errorSelector": "f645eedf",
            "name": "ECDSAInvalidSignature",
            "nameLocation": "570:21:61",
            "parameters": {
              "id": 51994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "591:2:61"
            }
          },
          {
            "id": 52000,
            "nodeType": "ErrorDefinition",
            "src": "665:50:61",
            "nodes": [],
            "documentation": {
              "id": 51996,
              "nodeType": "StructuredDocumentation",
              "src": "600:60:61",
              "text": " @dev The signature has an invalid length."
            },
            "errorSelector": "fce698f7",
            "name": "ECDSAInvalidSignatureLength",
            "nameLocation": "671:27:61",
            "parameters": {
              "id": 51999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51998,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "707:6:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52000,
                  "src": "699:14:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:16:61"
            }
          },
          {
            "id": 52005,
            "nodeType": "ErrorDefinition",
            "src": "811:40:61",
            "nodes": [],
            "documentation": {
              "id": 52001,
              "nodeType": "StructuredDocumentation",
              "src": "721:85:61",
              "text": " @dev The signature has an S value that is in the upper half order."
            },
            "errorSelector": "d78bce0c",
            "name": "ECDSAInvalidSignatureS",
            "nameLocation": "817:22:61",
            "parameters": {
              "id": 52004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52003,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "848:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52005,
                  "src": "840:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52002,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "840:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "839:11:61"
            }
          },
          {
            "id": 52058,
            "nodeType": "FunctionDefinition",
            "src": "2129:766:61",
            "nodes": [],
            "body": {
              "id": 52057,
              "nodeType": "Block",
              "src": "2242:653:61",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 52023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 52020,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52010,
                        "src": "2256:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 52021,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2266:6:61",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2256:16:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "3635",
                      "id": 52022,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2276:2:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_65_by_1",
                        "typeString": "int_const 65"
                      },
                      "value": "65"
                    },
                    "src": "2256:22:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 52055,
                    "nodeType": "Block",
                    "src": "2781:108:61",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 52044,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2811:1:61",
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
                                "id": 52043,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2803:7:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 52042,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2803:7:61",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 52045,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2803:10:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 52046,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51992,
                                "src": "2815:12:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 52047,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2828:22:61",
                              "memberName": "InvalidSignatureLength",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 51990,
                              "src": "2815:35:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$51992",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 52050,
                                    "name": "signature",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52010,
                                    "src": "2860:9:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 52051,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2870:6:61",
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "src": "2860:16:61",
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
                                "id": 52049,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2852:7:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 52048,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2852:7:61",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 52052,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2852:25:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 52053,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2802:76:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 52019,
                        "id": 52054,
                        "nodeType": "Return",
                        "src": "2795:83:61"
                      }
                    ]
                  },
                  "id": 52056,
                  "nodeType": "IfStatement",
                  "src": "2252:637:61",
                  "trueBody": {
                    "id": 52041,
                    "nodeType": "Block",
                    "src": "2280:495:61",
                    "statements": [
                      {
                        "assignments": [
                          52025
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 52025,
                            "mutability": "mutable",
                            "name": "r",
                            "nameLocation": "2302:1:61",
                            "nodeType": "VariableDeclaration",
                            "scope": 52041,
                            "src": "2294:9:61",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 52024,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2294:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 52026,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2294:9:61"
                      },
                      {
                        "assignments": [
                          52028
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 52028,
                            "mutability": "mutable",
                            "name": "s",
                            "nameLocation": "2325:1:61",
                            "nodeType": "VariableDeclaration",
                            "scope": 52041,
                            "src": "2317:9:61",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 52027,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2317:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 52029,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2317:9:61"
                      },
                      {
                        "assignments": [
                          52031
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 52031,
                            "mutability": "mutable",
                            "name": "v",
                            "nameLocation": "2346:1:61",
                            "nodeType": "VariableDeclaration",
                            "scope": 52041,
                            "src": "2340:7:61",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "typeName": {
                              "id": 52030,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2340:5:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 52032,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2340:7:61"
                      },
                      {
                        "AST": {
                          "nativeSrc": "2548:171:61",
                          "nodeType": "YulBlock",
                          "src": "2548:171:61",
                          "statements": [
                            {
                              "nativeSrc": "2566:32:61",
                              "nodeType": "YulAssignment",
                              "src": "2566:32:61",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2581:9:61",
                                        "nodeType": "YulIdentifier",
                                        "src": "2581:9:61"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2592:4:61",
                                        "nodeType": "YulLiteral",
                                        "src": "2592:4:61",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2577:3:61",
                                      "nodeType": "YulIdentifier",
                                      "src": "2577:3:61"
                                    },
                                    "nativeSrc": "2577:20:61",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2577:20:61"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2571:5:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2571:5:61"
                                },
                                "nativeSrc": "2571:27:61",
                                "nodeType": "YulFunctionCall",
                                "src": "2571:27:61"
                              },
                              "variableNames": [
                                {
                                  "name": "r",
                                  "nativeSrc": "2566:1:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2566:1:61"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2615:32:61",
                              "nodeType": "YulAssignment",
                              "src": "2615:32:61",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2630:9:61",
                                        "nodeType": "YulIdentifier",
                                        "src": "2630:9:61"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2641:4:61",
                                        "nodeType": "YulLiteral",
                                        "src": "2641:4:61",
                                        "type": "",
                                        "value": "0x40"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2626:3:61",
                                      "nodeType": "YulIdentifier",
                                      "src": "2626:3:61"
                                    },
                                    "nativeSrc": "2626:20:61",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2626:20:61"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2620:5:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2620:5:61"
                                },
                                "nativeSrc": "2620:27:61",
                                "nodeType": "YulFunctionCall",
                                "src": "2620:27:61"
                              },
                              "variableNames": [
                                {
                                  "name": "s",
                                  "nativeSrc": "2615:1:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2615:1:61"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2664:41:61",
                              "nodeType": "YulAssignment",
                              "src": "2664:41:61",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2674:1:61",
                                    "nodeType": "YulLiteral",
                                    "src": "2674:1:61",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "signature",
                                            "nativeSrc": "2687:9:61",
                                            "nodeType": "YulIdentifier",
                                            "src": "2687:9:61"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "2698:4:61",
                                            "nodeType": "YulLiteral",
                                            "src": "2698:4:61",
                                            "type": "",
                                            "value": "0x60"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "2683:3:61",
                                          "nodeType": "YulIdentifier",
                                          "src": "2683:3:61"
                                        },
                                        "nativeSrc": "2683:20:61",
                                        "nodeType": "YulFunctionCall",
                                        "src": "2683:20:61"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "2677:5:61",
                                      "nodeType": "YulIdentifier",
                                      "src": "2677:5:61"
                                    },
                                    "nativeSrc": "2677:27:61",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2677:27:61"
                                  }
                                ],
                                "functionName": {
                                  "name": "byte",
                                  "nativeSrc": "2669:4:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2669:4:61"
                                },
                                "nativeSrc": "2669:36:61",
                                "nodeType": "YulFunctionCall",
                                "src": "2669:36:61"
                              },
                              "variableNames": [
                                {
                                  "name": "v",
                                  "nativeSrc": "2664:1:61",
                                  "nodeType": "YulIdentifier",
                                  "src": "2664:1:61"
                                }
                              ]
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 52025,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2566:1:61",
                            "valueSize": 1
                          },
                          {
                            "declaration": 52028,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2615:1:61",
                            "valueSize": 1
                          },
                          {
                            "declaration": 52010,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2581:9:61",
                            "valueSize": 1
                          },
                          {
                            "declaration": 52010,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2630:9:61",
                            "valueSize": 1
                          },
                          {
                            "declaration": 52010,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2687:9:61",
                            "valueSize": 1
                          },
                          {
                            "declaration": 52031,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2664:1:61",
                            "valueSize": 1
                          }
                        ],
                        "id": 52033,
                        "nodeType": "InlineAssembly",
                        "src": "2539:180:61"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 52035,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52008,
                              "src": "2750:4:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 52036,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52031,
                              "src": "2756:1:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "id": 52037,
                              "name": "r",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52025,
                              "src": "2759:1:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 52038,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52028,
                              "src": "2762:1:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
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
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 52034,
                            "name": "tryRecover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              52058,
                              52138,
                              52246
                            ],
                            "referencedDeclaration": 52246,
                            "src": "2739:10:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                              "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                            }
                          },
                          "id": 52039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2739:25:61",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 52019,
                        "id": 52040,
                        "nodeType": "Return",
                        "src": "2732:32:61"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 52006,
              "nodeType": "StructuredDocumentation",
              "src": "857:1267:61",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with `signature` or an error. This will not\n return address(0) without also returning an error description. Errors are documented using an enum (error type)\n and a bytes32 providing additional information about the error.\n If no error is returned, then the address can be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it.\n Documentation for signature generation:\n - with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]\n - with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "2138:10:61",
            "parameters": {
              "id": 52011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52008,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "2157:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52058,
                  "src": "2149:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52007,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2149:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52010,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "2176:9:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52058,
                  "src": "2163:22:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 52009,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2163:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2148:38:61"
            },
            "returnParameters": {
              "id": 52019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52013,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52058,
                  "src": "2210:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52012,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:7:61",
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
                  "id": 52016,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52058,
                  "src": "2219:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$51992",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 52015,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52014,
                      "name": "RecoverError",
                      "nameLocations": [
                        "2219:12:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51992,
                      "src": "2219:12:61"
                    },
                    "referencedDeclaration": 51992,
                    "src": "2219:12:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$51992",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52018,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52058,
                  "src": "2233:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52017,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2233:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2209:32:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52088,
            "nodeType": "FunctionDefinition",
            "src": "3702:255:61",
            "nodes": [],
            "body": {
              "id": 52087,
              "nodeType": "Block",
              "src": "3789:168:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52069,
                    52072,
                    52074
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52069,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "3808:9:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52087,
                      "src": "3800:17:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 52068,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3800:7:61",
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
                      "id": 52072,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "3832:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52087,
                      "src": "3819:18:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 52071,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 52070,
                          "name": "RecoverError",
                          "nameLocations": [
                            "3819:12:61"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 51992,
                          "src": "3819:12:61"
                        },
                        "referencedDeclaration": 51992,
                        "src": "3819:12:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 52074,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "3847:8:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52087,
                      "src": "3839:16:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 52073,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3839:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52079,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 52076,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52061,
                        "src": "3870:4:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52077,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52063,
                        "src": "3876:9:61",
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
                      "id": 52075,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        52058,
                        52138,
                        52246
                      ],
                      "referencedDeclaration": 52058,
                      "src": "3859:10:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 52078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3859:27:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3799:87:61"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 52081,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52072,
                        "src": "3908:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 52082,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52074,
                        "src": "3915:8:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52080,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52331,
                      "src": "3896:11:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$51992_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 52083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3896:28:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52084,
                  "nodeType": "ExpressionStatement",
                  "src": "3896:28:61"
                },
                {
                  "expression": {
                    "id": 52085,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52069,
                    "src": "3941:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 52067,
                  "id": 52086,
                  "nodeType": "Return",
                  "src": "3934:16:61"
                }
              ]
            },
            "documentation": {
              "id": 52059,
              "nodeType": "StructuredDocumentation",
              "src": "2901:796:61",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with\n `signature`. This address can then be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "3711:7:61",
            "parameters": {
              "id": 52064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52061,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "3727:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52088,
                  "src": "3719:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52060,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3719:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52063,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "3746:9:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52088,
                  "src": "3733:22:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 52062,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3733:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3718:38:61"
            },
            "returnParameters": {
              "id": 52067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52066,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52088,
                  "src": "3780:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52065,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3780:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3779:9:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52138,
            "nodeType": "FunctionDefinition",
            "src": "4173:454:61",
            "nodes": [],
            "body": {
              "id": 52137,
              "nodeType": "Block",
              "src": "4285:342:61",
              "nodes": [],
              "statements": [
                {
                  "id": 52136,
                  "nodeType": "UncheckedBlock",
                  "src": "4295:326:61",
                  "statements": [
                    {
                      "assignments": [
                        52106
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 52106,
                          "mutability": "mutable",
                          "name": "s",
                          "nameLocation": "4327:1:61",
                          "nodeType": "VariableDeclaration",
                          "scope": 52136,
                          "src": "4319:9:61",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "typeName": {
                            "id": 52105,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "4319:7:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 52113,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 52112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52107,
                          "name": "vs",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52095,
                          "src": "4331:2:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "307837666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                              "id": 52110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4344:66:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819967_by_1",
                                "typeString": "int_const 5789...(69 digits omitted)...9967"
                              },
                              "value": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819967_by_1",
                                "typeString": "int_const 5789...(69 digits omitted)...9967"
                              }
                            ],
                            "id": 52109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4336:7:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 52108,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "4336:7:61",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 52111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4336:75:61",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "4331:80:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4319:92:61"
                    },
                    {
                      "assignments": [
                        52115
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 52115,
                          "mutability": "mutable",
                          "name": "v",
                          "nameLocation": "4528:1:61",
                          "nodeType": "VariableDeclaration",
                          "scope": 52136,
                          "src": "4522:7:61",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "typeName": {
                            "id": 52114,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4522:5:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 52128,
                      "initialValue": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 52126,
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
                                  "id": 52123,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "arguments": [
                                      {
                                        "id": 52120,
                                        "name": "vs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 52095,
                                        "src": "4547:2:61",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "id": 52119,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "4539:7:61",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 52118,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4539:7:61",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 52121,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4539:11:61",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": ">>",
                                  "rightExpression": {
                                    "hexValue": "323535",
                                    "id": 52122,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4554:3:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "255"
                                  },
                                  "src": "4539:18:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 52124,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "4538:20:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "3237",
                              "id": 52125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4561:2:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_27_by_1",
                                "typeString": "int_const 27"
                              },
                              "value": "27"
                            },
                            "src": "4538:25:61",
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
                          "id": 52117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4532:5:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint8_$",
                            "typeString": "type(uint8)"
                          },
                          "typeName": {
                            "id": 52116,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4532:5:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4532:32:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4522:42:61"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 52130,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52091,
                            "src": "4596:4:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 52131,
                            "name": "v",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52115,
                            "src": "4602:1:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "id": 52132,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52093,
                            "src": "4605:1:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 52133,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52106,
                            "src": "4608:1:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 52129,
                          "name": "tryRecover",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            52058,
                            52138,
                            52246
                          ],
                          "referencedDeclaration": 52246,
                          "src": "4585:10:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                            "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "id": 52134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4585:25:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                          "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                        }
                      },
                      "functionReturnParameters": 52104,
                      "id": 52135,
                      "nodeType": "Return",
                      "src": "4578:32:61"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 52089,
              "nodeType": "StructuredDocumentation",
              "src": "3963:205:61",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.\n See https://eips.ethereum.org/EIPS/eip-2098[EIP-2098 short signatures]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "4182:10:61",
            "parameters": {
              "id": 52096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52091,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4201:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4193:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52090,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4193:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52093,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4215:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4207:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52092,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4207:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52095,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4226:2:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4218:10:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52094,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4218:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4192:37:61"
            },
            "returnParameters": {
              "id": 52104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52098,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4253:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4253:7:61",
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
                  "id": 52101,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4262:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$51992",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 52100,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52099,
                      "name": "RecoverError",
                      "nameLocations": [
                        "4262:12:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51992,
                      "src": "4262:12:61"
                    },
                    "referencedDeclaration": 51992,
                    "src": "4262:12:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$51992",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52103,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52138,
                  "src": "4276:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52102,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4276:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4252:32:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52171,
            "nodeType": "FunctionDefinition",
            "src": "4754:250:61",
            "nodes": [],
            "body": {
              "id": 52170,
              "nodeType": "Block",
              "src": "4840:164:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52151,
                    52154,
                    52156
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52151,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "4859:9:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52170,
                      "src": "4851:17:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 52150,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4851:7:61",
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
                      "id": 52154,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "4883:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52170,
                      "src": "4870:18:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 52153,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 52152,
                          "name": "RecoverError",
                          "nameLocations": [
                            "4870:12:61"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 51992,
                          "src": "4870:12:61"
                        },
                        "referencedDeclaration": 51992,
                        "src": "4870:12:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 52156,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "4898:8:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52170,
                      "src": "4890:16:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 52155,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4890:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52162,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 52158,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52141,
                        "src": "4921:4:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52159,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52143,
                        "src": "4927:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52160,
                        "name": "vs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52145,
                        "src": "4930:2:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52157,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        52058,
                        52138,
                        52246
                      ],
                      "referencedDeclaration": 52138,
                      "src": "4910:10:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 52161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4910:23:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4850:83:61"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 52164,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52154,
                        "src": "4955:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 52165,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52156,
                        "src": "4962:8:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52163,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52331,
                      "src": "4943:11:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$51992_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 52166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4943:28:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52167,
                  "nodeType": "ExpressionStatement",
                  "src": "4943:28:61"
                },
                {
                  "expression": {
                    "id": 52168,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52151,
                    "src": "4988:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 52149,
                  "id": 52169,
                  "nodeType": "Return",
                  "src": "4981:16:61"
                }
              ]
            },
            "documentation": {
              "id": 52139,
              "nodeType": "StructuredDocumentation",
              "src": "4633:116:61",
              "text": " @dev Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "4763:7:61",
            "parameters": {
              "id": 52146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52141,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4779:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52171,
                  "src": "4771:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52140,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4771:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52143,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4793:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52171,
                  "src": "4785:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52142,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4785:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52145,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4804:2:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52171,
                  "src": "4796:10:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52144,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4796:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4770:37:61"
            },
            "returnParameters": {
              "id": 52149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52148,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52171,
                  "src": "4831:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4831:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4830:9:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52246,
            "nodeType": "FunctionDefinition",
            "src": "5140:1530:61",
            "nodes": [],
            "body": {
              "id": 52245,
              "nodeType": "Block",
              "src": "5298:1372:61",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 52195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 52192,
                          "name": "s",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52180,
                          "src": "6194:1:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 52191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6186:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 52190,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6186:7:61",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 52193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6186:10:61",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "307837464646464646464646464646464646464646464646464646464646464646463544353736453733353741343530314444464539324634363638314232304130",
                      "id": 52194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6199:66:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_57896044618658097711785492504343953926418782139537452191302581570759080747168_by_1",
                        "typeString": "int_const 5789...(69 digits omitted)...7168"
                      },
                      "value": "0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0"
                    },
                    "src": "6186:79:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 52206,
                  "nodeType": "IfStatement",
                  "src": "6182:164:61",
                  "trueBody": {
                    "id": 52205,
                    "nodeType": "Block",
                    "src": "6267:79:61",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 52198,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6297:1:61",
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
                                "id": 52197,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6289:7:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 52196,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6289:7:61",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 52199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6289:10:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 52200,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51992,
                                "src": "6301:12:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 52201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6314:17:61",
                              "memberName": "InvalidSignatureS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 51991,
                              "src": "6301:30:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$51992",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "id": 52202,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52180,
                              "src": "6333:1:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 52203,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6288:47:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 52189,
                        "id": 52204,
                        "nodeType": "Return",
                        "src": "6281:54:61"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    52208
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52208,
                      "mutability": "mutable",
                      "name": "signer",
                      "nameLocation": "6448:6:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52245,
                      "src": "6440:14:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 52207,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6440:7:61",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52215,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 52210,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52174,
                        "src": "6467:4:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52211,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52176,
                        "src": "6473:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 52212,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52178,
                        "src": "6476:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52213,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52180,
                        "src": "6479:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52209,
                      "name": "ecrecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -6,
                      "src": "6457:9:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                      }
                    },
                    "id": 52214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6457:24:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6440:41:61"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 52221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 52216,
                      "name": "signer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52208,
                      "src": "6495:6:61",
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
                          "id": 52219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6513:1:61",
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
                        "id": 52218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6505:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 52217,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6505:7:61",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 52220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6505:10:61",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6495:20:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 52235,
                  "nodeType": "IfStatement",
                  "src": "6491:113:61",
                  "trueBody": {
                    "id": 52234,
                    "nodeType": "Block",
                    "src": "6517:87:61",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 52224,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6547:1:61",
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
                                "id": 52223,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6539:7:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 52222,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6539:7:61",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 52225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6539:10:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 52226,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51992,
                                "src": "6551:12:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 52227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6564:16:61",
                              "memberName": "InvalidSignature",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 51989,
                              "src": "6551:29:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$51992",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 52230,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6590:1:61",
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
                                "id": 52229,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6582:7:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 52228,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6582:7:61",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 52231,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6582:10:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 52232,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6538:55:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 52189,
                        "id": 52233,
                        "nodeType": "Return",
                        "src": "6531:62:61"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 52236,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52208,
                        "src": "6622:6:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 52237,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51992,
                          "src": "6630:12:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 52238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6643:7:61",
                        "memberName": "NoError",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51988,
                        "src": "6630:20:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 52241,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6660:1:61",
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
                          "id": 52240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6652:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52239,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6652:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6652:10:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 52243,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6621:42:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "functionReturnParameters": 52189,
                  "id": 52244,
                  "nodeType": "Return",
                  "src": "6614:49:61"
                }
              ]
            },
            "documentation": {
              "id": 52172,
              "nodeType": "StructuredDocumentation",
              "src": "5010:125:61",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "5149:10:61",
            "parameters": {
              "id": 52181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52174,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "5177:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5169:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52173,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5169:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52176,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "5197:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5191:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 52175,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "5191:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52178,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5216:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5208:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52177,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5208:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52180,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "5235:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5227:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52179,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5227:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5159:83:61"
            },
            "returnParameters": {
              "id": 52189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52183,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5266:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5266:7:61",
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
                  "id": 52186,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5275:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$51992",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 52185,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52184,
                      "name": "RecoverError",
                      "nameLocations": [
                        "5275:12:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51992,
                      "src": "5275:12:61"
                    },
                    "referencedDeclaration": 51992,
                    "src": "5275:12:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$51992",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52188,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52246,
                  "src": "5289:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52187,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5289:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5265:32:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52282,
            "nodeType": "FunctionDefinition",
            "src": "6803:260:61",
            "nodes": [],
            "body": {
              "id": 52281,
              "nodeType": "Block",
              "src": "6897:166:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52261,
                    52264,
                    52266
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52261,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "6916:9:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52281,
                      "src": "6908:17:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 52260,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6908:7:61",
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
                      "id": 52264,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "6940:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52281,
                      "src": "6927:18:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 52263,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 52262,
                          "name": "RecoverError",
                          "nameLocations": [
                            "6927:12:61"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 51992,
                          "src": "6927:12:61"
                        },
                        "referencedDeclaration": 51992,
                        "src": "6927:12:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 52266,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "6955:8:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52281,
                      "src": "6947:16:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 52265,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6947:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52273,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 52268,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52249,
                        "src": "6978:4:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52269,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52251,
                        "src": "6984:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 52270,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52253,
                        "src": "6987:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52271,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52255,
                        "src": "6990:1:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52267,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        52058,
                        52138,
                        52246
                      ],
                      "referencedDeclaration": 52246,
                      "src": "6967:10:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 52272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6967:25:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$51992_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6907:85:61"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 52275,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52264,
                        "src": "7014:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 52276,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52266,
                        "src": "7021:8:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52274,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52331,
                      "src": "7002:11:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$51992_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 52277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7002:28:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52278,
                  "nodeType": "ExpressionStatement",
                  "src": "7002:28:61"
                },
                {
                  "expression": {
                    "id": 52279,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52261,
                    "src": "7047:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 52259,
                  "id": 52280,
                  "nodeType": "Return",
                  "src": "7040:16:61"
                }
              ]
            },
            "documentation": {
              "id": 52247,
              "nodeType": "StructuredDocumentation",
              "src": "6676:122:61",
              "text": " @dev Overload of {ECDSA-recover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "6812:7:61",
            "parameters": {
              "id": 52256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52249,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "6828:4:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52282,
                  "src": "6820:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52248,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6820:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52251,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "6840:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52282,
                  "src": "6834:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 52250,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "6834:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52253,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "6851:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52282,
                  "src": "6843:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52252,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6843:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52255,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "6862:1:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52282,
                  "src": "6854:9:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52254,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6854:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6819:45:61"
            },
            "returnParameters": {
              "id": 52259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52258,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52282,
                  "src": "6888:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6888:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6887:9:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52331,
            "nodeType": "FunctionDefinition",
            "src": "7196:532:61",
            "nodes": [],
            "body": {
              "id": 52330,
              "nodeType": "Block",
              "src": "7268:460:61",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_RecoverError_$51992",
                      "typeString": "enum ECDSA.RecoverError"
                    },
                    "id": 52294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 52291,
                      "name": "error",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52286,
                      "src": "7282:5:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 52292,
                        "name": "RecoverError",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51992,
                        "src": "7291:12:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                          "typeString": "type(enum ECDSA.RecoverError)"
                        }
                      },
                      "id": 52293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7304:7:61",
                      "memberName": "NoError",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51988,
                      "src": "7291:20:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "src": "7282:29:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_RecoverError_$51992",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "id": 52300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 52297,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52286,
                        "src": "7378:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 52298,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51992,
                          "src": "7387:12:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 52299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7400:16:61",
                        "memberName": "InvalidSignature",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51989,
                        "src": "7387:29:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "src": "7378:38:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_enum$_RecoverError_$51992",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        "id": 52308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 52305,
                          "name": "error",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52286,
                          "src": "7483:5:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$51992",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 52306,
                            "name": "RecoverError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51992,
                            "src": "7492:12:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                              "typeString": "type(enum ECDSA.RecoverError)"
                            }
                          },
                          "id": 52307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7505:22:61",
                          "memberName": "InvalidSignatureLength",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 51990,
                          "src": "7492:35:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$51992",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "src": "7483:44:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_enum$_RecoverError_$51992",
                            "typeString": "enum ECDSA.RecoverError"
                          },
                          "id": 52320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52317,
                            "name": "error",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52286,
                            "src": "7617:5:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$51992",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 52318,
                              "name": "RecoverError",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51992,
                              "src": "7626:12:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_RecoverError_$51992_$",
                                "typeString": "type(enum ECDSA.RecoverError)"
                              }
                            },
                            "id": 52319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7639:17:61",
                            "memberName": "InvalidSignatureS",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 51991,
                            "src": "7626:30:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$51992",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "src": "7617:39:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 52326,
                        "nodeType": "IfStatement",
                        "src": "7613:109:61",
                        "trueBody": {
                          "id": 52325,
                          "nodeType": "Block",
                          "src": "7658:64:61",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 52322,
                                    "name": "errorArg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52288,
                                    "src": "7702:8:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "id": 52321,
                                  "name": "ECDSAInvalidSignatureS",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52005,
                                  "src": "7679:22:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_bytes32_$returns$__$",
                                    "typeString": "function (bytes32) pure"
                                  }
                                },
                                "id": 52323,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7679:32:61",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 52324,
                              "nodeType": "RevertStatement",
                              "src": "7672:39:61"
                            }
                          ]
                        }
                      },
                      "id": 52327,
                      "nodeType": "IfStatement",
                      "src": "7479:243:61",
                      "trueBody": {
                        "id": 52316,
                        "nodeType": "Block",
                        "src": "7529:78:61",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 52312,
                                      "name": "errorArg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52288,
                                      "src": "7586:8:61",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "id": 52311,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7578:7:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 52310,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "7578:7:61",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 52313,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7578:17:61",
                                  "tryCall": false,
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
                                "id": 52309,
                                "name": "ECDSAInvalidSignatureLength",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52000,
                                "src": "7550:27:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$__$",
                                  "typeString": "function (uint256) pure"
                                }
                              },
                              "id": 52314,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7550:46:61",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 52315,
                            "nodeType": "RevertStatement",
                            "src": "7543:53:61"
                          }
                        ]
                      }
                    },
                    "id": 52328,
                    "nodeType": "IfStatement",
                    "src": "7374:348:61",
                    "trueBody": {
                      "id": 52304,
                      "nodeType": "Block",
                      "src": "7418:55:61",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 52301,
                              "name": "ECDSAInvalidSignature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51995,
                              "src": "7439:21:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 52302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7439:23:61",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 52303,
                          "nodeType": "RevertStatement",
                          "src": "7432:30:61"
                        }
                      ]
                    }
                  },
                  "id": 52329,
                  "nodeType": "IfStatement",
                  "src": "7278:444:61",
                  "trueBody": {
                    "id": 52296,
                    "nodeType": "Block",
                    "src": "7313:55:61",
                    "statements": [
                      {
                        "functionReturnParameters": 52290,
                        "id": 52295,
                        "nodeType": "Return",
                        "src": "7327:7:61"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 52283,
              "nodeType": "StructuredDocumentation",
              "src": "7069:122:61",
              "text": " @dev Optionally reverts with the corresponding custom error according to the `error` argument provided."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_throwError",
            "nameLocation": "7205:11:61",
            "parameters": {
              "id": 52289,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52286,
                  "mutability": "mutable",
                  "name": "error",
                  "nameLocation": "7230:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52331,
                  "src": "7217:18:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$51992",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 52285,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52284,
                      "name": "RecoverError",
                      "nameLocations": [
                        "7217:12:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51992,
                      "src": "7217:12:61"
                    },
                    "referencedDeclaration": 51992,
                    "src": "7217:12:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$51992",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52288,
                  "mutability": "mutable",
                  "name": "errorArg",
                  "nameLocation": "7245:8:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52331,
                  "src": "7237:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52287,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7237:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7216:38:61"
            },
            "returnParameters": {
              "id": 52290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7268:0:61"
            },
            "scope": 52332,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ECDSA",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 51987,
          "nodeType": "StructuredDocumentation",
          "src": "138:205:61",
          "text": " @dev Elliptic Curve Digital Signature Algorithm (ECDSA) operations.\n These functions can be used to verify that a message was signed by the holder\n of the private keys of a given address."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          52332
        ],
        "name": "ECDSA",
        "nameLocation": "352:5:61",
        "scope": 52333,
        "usedErrors": [
          51995,
          52000,
          52005
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 61
} as const;