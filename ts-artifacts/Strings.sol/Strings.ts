export const Strings = {
  "abi": [
    {
      "type": "error",
      "name": "StringsInsufficientHexLength",
      "inputs": [
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "length",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220ae9acaf4f445c792ae44b6fb882f3e7f36bae983b39adfd7e646028f1ac6323a64736f6c63430008190033",
    "sourceMap": "251:2847:60:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220ae9acaf4f445c792ae44b6fb882f3e7f36bae983b39adfd7e646028f1ac6323a64736f6c63430008190033",
    "sourceMap": "251:2847:60:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"StringsInsufficientHexLength\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"String operations.\",\"errors\":{\"StringsInsufficientHexLength(uint256,uint256)\":[{\"details\":\"The `value` string doesn't fit in the specified `length`.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":\"Strings\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "StringsInsufficientHexLength"
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
        "node_modules/@openzeppelin/contracts/utils/Strings.sol": "Strings"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
        "urls": [
          "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
          "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
        "urls": [
          "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
          "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
        "urls": [
          "bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
          "dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Strings.sol",
    "id": 51985,
    "exportedSymbols": {
      "Math": [
        53824
      ],
      "SignedMath": [
        53929
      ],
      "Strings": [
        51984
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:2998:60",
    "nodes": [
      {
        "id": 51731,
        "nodeType": "PragmaDirective",
        "src": "101:24:60",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51733,
        "nodeType": "ImportDirective",
        "src": "127:37:60",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/Math.sol",
        "file": "./math/Math.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 51985,
        "sourceUnit": 53825,
        "symbolAliases": [
          {
            "foreign": {
              "id": 51732,
              "name": "Math",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53824,
              "src": "135:4:60",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 51735,
        "nodeType": "ImportDirective",
        "src": "165:49:60",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol",
        "file": "./math/SignedMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 51985,
        "sourceUnit": 53930,
        "symbolAliases": [
          {
            "foreign": {
              "id": 51734,
              "name": "SignedMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53929,
              "src": "173:10:60",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 51984,
        "nodeType": "ContractDefinition",
        "src": "251:2847:60",
        "nodes": [
          {
            "id": 51739,
            "nodeType": "VariableDeclaration",
            "src": "273:56:60",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "HEX_DIGITS",
            "nameLocation": "298:10:60",
            "scope": 51984,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes16",
              "typeString": "bytes16"
            },
            "typeName": {
              "id": 51737,
              "name": "bytes16",
              "nodeType": "ElementaryTypeName",
              "src": "273:7:60",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes16",
                "typeString": "bytes16"
              }
            },
            "value": {
              "hexValue": "30313233343536373839616263646566",
              "id": 51738,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "311:18:60",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_cb29997ed99ead0db59ce4d12b7d3723198c827273e5796737c926d78019c39f",
                "typeString": "literal_string \"0123456789abcdef\""
              },
              "value": "0123456789abcdef"
            },
            "visibility": "private"
          },
          {
            "id": 51742,
            "nodeType": "VariableDeclaration",
            "src": "335:42:60",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_LENGTH",
            "nameLocation": "358:14:60",
            "scope": 51984,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 51740,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "335:5:60",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3230",
              "id": 51741,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "375:2:60",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_20_by_1",
                "typeString": "int_const 20"
              },
              "value": "20"
            },
            "visibility": "private"
          },
          {
            "id": 51749,
            "nodeType": "ErrorDefinition",
            "src": "470:66:60",
            "nodes": [],
            "documentation": {
              "id": 51743,
              "nodeType": "StructuredDocumentation",
              "src": "384:81:60",
              "text": " @dev The `value` string doesn't fit in the specified `length`."
            },
            "errorSelector": "e22e27eb",
            "name": "StringsInsufficientHexLength",
            "nameLocation": "476:28:60",
            "parameters": {
              "id": 51748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51745,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "513:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51749,
                  "src": "505:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51747,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "528:6:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51749,
                  "src": "520:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51746,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "520:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:31:60"
            }
          },
          {
            "id": 51797,
            "nodeType": "FunctionDefinition",
            "src": "637:698:60",
            "nodes": [],
            "body": {
              "id": 51796,
              "nodeType": "Block",
              "src": "708:627:60",
              "nodes": [],
              "statements": [
                {
                  "id": 51795,
                  "nodeType": "UncheckedBlock",
                  "src": "718:611:60",
                  "statements": [
                    {
                      "assignments": [
                        51758
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 51758,
                          "mutability": "mutable",
                          "name": "length",
                          "nameLocation": "750:6:60",
                          "nodeType": "VariableDeclaration",
                          "scope": 51795,
                          "src": "742:14:60",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 51757,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "742:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 51765,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 51764,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 51761,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51752,
                              "src": "770:5:60",
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
                            "expression": {
                              "id": 51759,
                              "name": "Math",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 53824,
                              "src": "759:4:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Math_$53824_$",
                                "typeString": "type(library Math)"
                              }
                            },
                            "id": 51760,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "764:5:60",
                            "memberName": "log10",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 53644,
                            "src": "759:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint256)"
                            }
                          },
                          "id": 51762,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "759:17:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 51763,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "779:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "759:21:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "742:38:60"
                    },
                    {
                      "assignments": [
                        51767
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 51767,
                          "mutability": "mutable",
                          "name": "buffer",
                          "nameLocation": "808:6:60",
                          "nodeType": "VariableDeclaration",
                          "scope": 51795,
                          "src": "794:20:60",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                          },
                          "typeName": {
                            "id": 51766,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "794:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 51772,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 51770,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51758,
                            "src": "828:6:60",
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
                          "id": 51769,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "817:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          },
                          "typeName": {
                            "id": 51768,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "821:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          }
                        },
                        "id": 51771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "817:18:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "794:41:60"
                    },
                    {
                      "assignments": [
                        51774
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 51774,
                          "mutability": "mutable",
                          "name": "ptr",
                          "nameLocation": "857:3:60",
                          "nodeType": "VariableDeclaration",
                          "scope": 51795,
                          "src": "849:11:60",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 51773,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "849:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 51775,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "849:11:60"
                    },
                    {
                      "AST": {
                        "nativeSrc": "930:67:60",
                        "nodeType": "YulBlock",
                        "src": "930:67:60",
                        "statements": [
                          {
                            "nativeSrc": "948:35:60",
                            "nodeType": "YulAssignment",
                            "src": "948:35:60",
                            "value": {
                              "arguments": [
                                {
                                  "name": "buffer",
                                  "nativeSrc": "959:6:60",
                                  "nodeType": "YulIdentifier",
                                  "src": "959:6:60"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "971:2:60",
                                      "nodeType": "YulLiteral",
                                      "src": "971:2:60",
                                      "type": "",
                                      "value": "32"
                                    },
                                    {
                                      "name": "length",
                                      "nativeSrc": "975:6:60",
                                      "nodeType": "YulIdentifier",
                                      "src": "975:6:60"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "967:3:60",
                                    "nodeType": "YulIdentifier",
                                    "src": "967:3:60"
                                  },
                                  "nativeSrc": "967:15:60",
                                  "nodeType": "YulFunctionCall",
                                  "src": "967:15:60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "955:3:60",
                                "nodeType": "YulIdentifier",
                                "src": "955:3:60"
                              },
                              "nativeSrc": "955:28:60",
                              "nodeType": "YulFunctionCall",
                              "src": "955:28:60"
                            },
                            "variableNames": [
                              {
                                "name": "ptr",
                                "nativeSrc": "948:3:60",
                                "nodeType": "YulIdentifier",
                                "src": "948:3:60"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 51767,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "959:6:60",
                          "valueSize": 1
                        },
                        {
                          "declaration": 51758,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "975:6:60",
                          "valueSize": 1
                        },
                        {
                          "declaration": 51774,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "948:3:60",
                          "valueSize": 1
                        }
                      ],
                      "id": 51776,
                      "nodeType": "InlineAssembly",
                      "src": "921:76:60"
                    },
                    {
                      "body": {
                        "id": 51791,
                        "nodeType": "Block",
                        "src": "1023:269:60",
                        "statements": [
                          {
                            "expression": {
                              "id": 51779,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "--",
                              "prefix": false,
                              "src": "1041:5:60",
                              "subExpression": {
                                "id": 51778,
                                "name": "ptr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51774,
                                "src": "1041:3:60",
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
                            "id": 51780,
                            "nodeType": "ExpressionStatement",
                            "src": "1041:5:60"
                          },
                          {
                            "AST": {
                              "nativeSrc": "1124:86:60",
                              "nodeType": "YulBlock",
                              "src": "1124:86:60",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "ptr",
                                        "nativeSrc": "1154:3:60",
                                        "nodeType": "YulIdentifier",
                                        "src": "1154:3:60"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "value",
                                                "nativeSrc": "1168:5:60",
                                                "nodeType": "YulIdentifier",
                                                "src": "1168:5:60"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "1175:2:60",
                                                "nodeType": "YulLiteral",
                                                "src": "1175:2:60",
                                                "type": "",
                                                "value": "10"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mod",
                                              "nativeSrc": "1164:3:60",
                                              "nodeType": "YulIdentifier",
                                              "src": "1164:3:60"
                                            },
                                            "nativeSrc": "1164:14:60",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1164:14:60"
                                          },
                                          {
                                            "name": "HEX_DIGITS",
                                            "nativeSrc": "1180:10:60",
                                            "nodeType": "YulIdentifier",
                                            "src": "1180:10:60"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "byte",
                                          "nativeSrc": "1159:4:60",
                                          "nodeType": "YulIdentifier",
                                          "src": "1159:4:60"
                                        },
                                        "nativeSrc": "1159:32:60",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1159:32:60"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore8",
                                      "nativeSrc": "1146:7:60",
                                      "nodeType": "YulIdentifier",
                                      "src": "1146:7:60"
                                    },
                                    "nativeSrc": "1146:46:60",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1146:46:60"
                                  },
                                  "nativeSrc": "1146:46:60",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "1146:46:60"
                                }
                              ]
                            },
                            "documentation": "@solidity memory-safe-assembly",
                            "evmVersion": "paris",
                            "externalReferences": [
                              {
                                "declaration": 51739,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1180:10:60",
                                "valueSize": 1
                              },
                              {
                                "declaration": 51774,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1154:3:60",
                                "valueSize": 1
                              },
                              {
                                "declaration": 51752,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1168:5:60",
                                "valueSize": 1
                              }
                            ],
                            "id": 51781,
                            "nodeType": "InlineAssembly",
                            "src": "1115:95:60"
                          },
                          {
                            "expression": {
                              "id": 51784,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 51782,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51752,
                                "src": "1227:5:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "hexValue": "3130",
                                "id": 51783,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1236:2:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "src": "1227:11:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 51785,
                            "nodeType": "ExpressionStatement",
                            "src": "1227:11:60"
                          },
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 51788,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 51786,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51752,
                                "src": "1260:5:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 51787,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1269:1:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "1260:10:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 51790,
                            "nodeType": "IfStatement",
                            "src": "1256:21:60",
                            "trueBody": {
                              "id": 51789,
                              "nodeType": "Break",
                              "src": "1272:5:60"
                            }
                          }
                        ]
                      },
                      "condition": {
                        "hexValue": "74727565",
                        "id": 51777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1017:4:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "id": 51792,
                      "nodeType": "WhileStatement",
                      "src": "1010:282:60"
                    },
                    {
                      "expression": {
                        "id": 51793,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51767,
                        "src": "1312:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 51756,
                      "id": 51794,
                      "nodeType": "Return",
                      "src": "1305:13:60"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 51750,
              "nodeType": "StructuredDocumentation",
              "src": "542:90:60",
              "text": " @dev Converts a `uint256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "646:8:60",
            "parameters": {
              "id": 51753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51752,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "663:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51797,
                  "src": "655:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "655:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "654:15:60"
            },
            "returnParameters": {
              "id": 51756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51755,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51797,
                  "src": "693:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51754,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "692:15:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51823,
            "nodeType": "FunctionDefinition",
            "src": "1435:168:60",
            "nodes": [],
            "body": {
              "id": 51822,
              "nodeType": "Block",
              "src": "1511:92:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 51810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 51808,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51800,
                            "src": "1542:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 51809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1550:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1542:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "hexValue": "",
                          "id": 51812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1560:2:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        },
                        "id": 51813,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "1542:20:60",
                        "trueExpression": {
                          "hexValue": "2d",
                          "id": 51811,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1554:3:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                            "typeString": "literal_string \"-\""
                          },
                          "value": "-"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 51817,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51800,
                                "src": "1588:5:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              ],
                              "expression": {
                                "id": 51815,
                                "name": "SignedMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53929,
                                "src": "1573:10:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_SignedMath_$53929_$",
                                  "typeString": "type(library SignedMath)"
                                }
                              },
                              "id": 51816,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1584:3:60",
                              "memberName": "abs",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 53928,
                              "src": "1573:14:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                "typeString": "function (int256) pure returns (uint256)"
                              }
                            },
                            "id": 51818,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1573:21:60",
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
                          "id": 51814,
                          "name": "toString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51797,
                          "src": "1564:8:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          }
                        },
                        "id": 51819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1564:31:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 51806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1528:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                          "typeString": "type(string storage pointer)"
                        },
                        "typeName": {
                          "id": 51805,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1528:6:60",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 51807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1535:6:60",
                      "memberName": "concat",
                      "nodeType": "MemberAccess",
                      "src": "1528:13:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () pure returns (string memory)"
                      }
                    },
                    "id": 51820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1528:68:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 51804,
                  "id": 51821,
                  "nodeType": "Return",
                  "src": "1521:75:60"
                }
              ]
            },
            "documentation": {
              "id": 51798,
              "nodeType": "StructuredDocumentation",
              "src": "1341:89:60",
              "text": " @dev Converts a `int256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toStringSigned",
            "nameLocation": "1444:14:60",
            "parameters": {
              "id": 51801,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51800,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1466:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51823,
                  "src": "1459:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 51799,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1459:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1458:14:60"
            },
            "returnParameters": {
              "id": 51804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51803,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51823,
                  "src": "1496:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51802,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1496:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1495:15:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51843,
            "nodeType": "FunctionDefinition",
            "src": "1708:174:60",
            "nodes": [],
            "body": {
              "id": 51842,
              "nodeType": "Block",
              "src": "1782:100:60",
              "nodes": [],
              "statements": [
                {
                  "id": 51841,
                  "nodeType": "UncheckedBlock",
                  "src": "1792:84:60",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 51832,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51826,
                            "src": "1835:5:60",
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
                            "id": 51838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 51835,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 51826,
                                  "src": "1854:5:60",
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
                                "expression": {
                                  "id": 51833,
                                  "name": "Math",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 53824,
                                  "src": "1842:4:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Math_$53824_$",
                                    "typeString": "type(library Math)"
                                  }
                                },
                                "id": 51834,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1847:6:60",
                                "memberName": "log256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 53766,
                                "src": "1842:11:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 51836,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1842:18:60",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 51837,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1863:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1842:22:60",
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
                          "id": 51831,
                          "name": "toHexString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            51843,
                            51926,
                            51946
                          ],
                          "referencedDeclaration": 51926,
                          "src": "1823:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256,uint256) pure returns (string memory)"
                          }
                        },
                        "id": 51839,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1823:42:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 51830,
                      "id": 51840,
                      "nodeType": "Return",
                      "src": "1816:49:60"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 51824,
              "nodeType": "StructuredDocumentation",
              "src": "1609:94:60",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "1717:11:60",
            "parameters": {
              "id": 51827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51826,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1737:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51843,
                  "src": "1729:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1728:15:60"
            },
            "returnParameters": {
              "id": 51830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51829,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51843,
                  "src": "1767:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51828,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1767:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1766:15:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51926,
            "nodeType": "FunctionDefinition",
            "src": "2005:525:60",
            "nodes": [],
            "body": {
              "id": 51925,
              "nodeType": "Block",
              "src": "2095:435:60",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51854
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51854,
                      "mutability": "mutable",
                      "name": "localValue",
                      "nameLocation": "2113:10:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 51925,
                      "src": "2105:18:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 51853,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2105:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51856,
                  "initialValue": {
                    "id": 51855,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 51846,
                    "src": "2126:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2105:26:60"
                },
                {
                  "assignments": [
                    51858
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51858,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nameLocation": "2154:6:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 51925,
                      "src": "2141:19:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 51857,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2141:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51867,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 51865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 51863,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 51861,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2173:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 51862,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51848,
                            "src": "2177:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2173:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 51864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2186:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "2173:14:60",
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
                      "id": 51860,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2163:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 51859,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2167:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 51866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2163:25:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2141:47:60"
                },
                {
                  "expression": {
                    "id": 51872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 51868,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51858,
                        "src": "2198:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 51870,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 51869,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2205:1:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2198:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 51871,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2210:3:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                        "typeString": "literal_string \"0\""
                      },
                      "value": "0"
                    },
                    "src": "2198:15:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 51873,
                  "nodeType": "ExpressionStatement",
                  "src": "2198:15:60"
                },
                {
                  "expression": {
                    "id": 51878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 51874,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51858,
                        "src": "2223:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 51876,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 51875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2230:1:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2223:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "78",
                      "id": 51877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2235:3:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7521d1cadbcfa91eec65aa16715b94ffc1c9654ba57ea2ef1a2127bca1127a83",
                        "typeString": "literal_string \"x\""
                      },
                      "value": "x"
                    },
                    "src": "2223:15:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 51879,
                  "nodeType": "ExpressionStatement",
                  "src": "2223:15:60"
                },
                {
                  "body": {
                    "id": 51908,
                    "nodeType": "Block",
                    "src": "2293:95:60",
                    "statements": [
                      {
                        "expression": {
                          "id": 51902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 51894,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51858,
                              "src": "2307:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 51896,
                            "indexExpression": {
                              "id": 51895,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51881,
                              "src": "2314:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2307:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 51897,
                              "name": "HEX_DIGITS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51739,
                              "src": "2319:10:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes16",
                                "typeString": "bytes16"
                              }
                            },
                            "id": 51901,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 51900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 51898,
                                "name": "localValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51854,
                                "src": "2330:10:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 51899,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2343:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "2330:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2319:28:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "2307:40:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 51903,
                        "nodeType": "ExpressionStatement",
                        "src": "2307:40:60"
                      },
                      {
                        "expression": {
                          "id": 51906,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 51904,
                            "name": "localValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51854,
                            "src": "2361:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 51905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2376:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "2361:16:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 51907,
                        "nodeType": "ExpressionStatement",
                        "src": "2361:16:60"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 51888,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51881,
                      "src": "2281:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 51889,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2285:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2281:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51909,
                  "initializationExpression": {
                    "assignments": [
                      51881
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 51881,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2261:1:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 51909,
                        "src": "2253:9:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 51880,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2253:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 51887,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 51886,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 51884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 51882,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2265:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 51883,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51848,
                          "src": "2269:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2265:10:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 51885,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2278:1:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2265:14:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2253:26:60"
                  },
                  "isSimpleCounterLoop": false,
                  "loopExpression": {
                    "expression": {
                      "id": 51892,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "2288:3:60",
                      "subExpression": {
                        "id": 51891,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51881,
                        "src": "2290:1:60",
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
                    "id": 51893,
                    "nodeType": "ExpressionStatement",
                    "src": "2288:3:60"
                  },
                  "nodeType": "ForStatement",
                  "src": "2248:140:60"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 51910,
                      "name": "localValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51854,
                      "src": "2401:10:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 51911,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2415:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2401:15:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51919,
                  "nodeType": "IfStatement",
                  "src": "2397:96:60",
                  "trueBody": {
                    "id": 51918,
                    "nodeType": "Block",
                    "src": "2418:75:60",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 51914,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51846,
                              "src": "2468:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 51915,
                              "name": "length",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51848,
                              "src": "2475:6:60",
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
                            "id": 51913,
                            "name": "StringsInsufficientHexLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51749,
                            "src": "2439:28:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256) pure"
                            }
                          },
                          "id": 51916,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2439:43:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51917,
                        "nodeType": "RevertStatement",
                        "src": "2432:50:60"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 51922,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51858,
                        "src": "2516:6:60",
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
                      "id": 51921,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2509:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 51920,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2509:6:60",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 51923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2509:14:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 51852,
                  "id": 51924,
                  "nodeType": "Return",
                  "src": "2502:21:60"
                }
              ]
            },
            "documentation": {
              "id": 51844,
              "nodeType": "StructuredDocumentation",
              "src": "1888:112:60",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "2014:11:60",
            "parameters": {
              "id": 51849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51846,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2034:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51926,
                  "src": "2026:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2026:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51848,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "2049:6:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51926,
                  "src": "2041:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51847,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2041:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2025:31:60"
            },
            "returnParameters": {
              "id": 51852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51851,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51926,
                  "src": "2080:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51850,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2080:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2079:15:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51946,
            "nodeType": "FunctionDefinition",
            "src": "2689:148:60",
            "nodes": [],
            "body": {
              "id": 51945,
              "nodeType": "Block",
              "src": "2762:75:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 51939,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51929,
                                "src": "2807:4:60",
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
                              "id": 51938,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2799:7:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint160_$",
                                "typeString": "type(uint160)"
                              },
                              "typeName": {
                                "id": 51937,
                                "name": "uint160",
                                "nodeType": "ElementaryTypeName",
                                "src": "2799:7:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 51940,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2799:13:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint160",
                              "typeString": "uint160"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint160",
                              "typeString": "uint160"
                            }
                          ],
                          "id": 51936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2791:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 51935,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2791:7:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 51941,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2791:22:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 51942,
                        "name": "ADDRESS_LENGTH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51742,
                        "src": "2815:14:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 51934,
                      "name": "toHexString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        51843,
                        51926,
                        51946
                      ],
                      "referencedDeclaration": 51926,
                      "src": "2779:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (string memory)"
                      }
                    },
                    "id": 51943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2779:51:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 51933,
                  "id": 51944,
                  "nodeType": "Return",
                  "src": "2772:58:60"
                }
              ]
            },
            "documentation": {
              "id": 51927,
              "nodeType": "StructuredDocumentation",
              "src": "2536:148:60",
              "text": " @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal\n representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "2698:11:60",
            "parameters": {
              "id": 51930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51929,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2718:4:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51946,
                  "src": "2710:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51928,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2710:7:60",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2709:14:60"
            },
            "returnParameters": {
              "id": 51933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51932,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51946,
                  "src": "2747:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51931,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2747:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2746:15:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51983,
            "nodeType": "FunctionDefinition",
            "src": "2914:182:60",
            "nodes": [],
            "body": {
              "id": 51982,
              "nodeType": "Block",
              "src": "2992:104:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 51980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 51966,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51958,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51949,
                              "src": "3015:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 51957,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3009:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 51956,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3009:5:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 51959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3009:8:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 51960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3018:6:60",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3009:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51963,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51951,
                              "src": "3034:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 51962,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3028:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 51961,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3028:5:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 51964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3028:8:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 51965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3037:6:60",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3028:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3009:34:60",
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
                      "id": 51979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 51970,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51949,
                                "src": "3063:1:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 51969,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3057:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 51968,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3057:5:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 51971,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3057:8:60",
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
                          "id": 51967,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3047:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 51972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3047:19:60",
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
                            "arguments": [
                              {
                                "id": 51976,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51951,
                                "src": "3086:1:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 51975,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3080:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 51974,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3080:5:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 51977,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3080:8:60",
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
                          "id": 51973,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3070:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 51978,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3070:19:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "3047:42:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3009:80:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 51955,
                  "id": 51981,
                  "nodeType": "Return",
                  "src": "3002:87:60"
                }
              ]
            },
            "documentation": {
              "id": 51947,
              "nodeType": "StructuredDocumentation",
              "src": "2843:66:60",
              "text": " @dev Returns true if the two strings are equal."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "equal",
            "nameLocation": "2923:5:60",
            "parameters": {
              "id": 51952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51949,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2943:1:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51983,
                  "src": "2929:15:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51948,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2929:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51951,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2960:1:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 51983,
                  "src": "2946:15:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51950,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2946:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2928:34:60"
            },
            "returnParameters": {
              "id": 51955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51954,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51983,
                  "src": "2986:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 51953,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2986:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2985:6:60"
            },
            "scope": 51984,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Strings",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 51736,
          "nodeType": "StructuredDocumentation",
          "src": "216:34:60",
          "text": " @dev String operations."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51984
        ],
        "name": "Strings",
        "nameLocation": "259:7:60",
        "scope": 51985,
        "usedErrors": [
          51749
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 60
} as const;