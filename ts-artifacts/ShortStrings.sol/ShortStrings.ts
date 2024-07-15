export const ShortStrings = {
  "abi": [
    {
      "type": "error",
      "name": "InvalidShortString",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StringTooLong",
      "inputs": [
        {
          "name": "str",
          "type": "string",
          "internalType": "string"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220061dc2324b445340cd4918eb9d317a97521b14ee2f9dfa5aaf29c642a4613efd64736f6c63430008190033",
    "sourceMap": "1255:3053:58:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220061dc2324b445340cd4918eb9d317a97521b14ee2f9dfa5aaf29c642a4613efd64736f6c63430008190033",
    "sourceMap": "1255:3053:58:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidShortString\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"str\",\"type\":\"string\"}],\"name\":\"StringTooLong\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"This library provides functions to convert short memory strings into a `ShortString` type that can be used as an immutable variable. Strings of arbitrary length can be optimized using this library if they are short enough (up to 31 bytes) by packing them with their length (1 byte) in a single EVM word (32 bytes). Additionally, a fallback mechanism can be used for every other case. Usage example: ```solidity contract Named {     using ShortStrings for *;     ShortString private immutable _name;     string private _nameFallback;     constructor(string memory contractName) {         _name = contractName.toShortStringWithFallback(_nameFallback);     }     function name() external view returns (string memory) {         return _name.toStringWithFallback(_nameFallback);     } } ```\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/ShortStrings.sol\":\"ShortStrings\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/ShortStrings.sol\":{\"keccak256\":\"0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c\",\"dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
          "name": "InvalidShortString"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "str",
              "type": "string"
            }
          ],
          "type": "error",
          "name": "StringTooLong"
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
        "node_modules/@openzeppelin/contracts/utils/ShortStrings.sol": "ShortStrings"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/ShortStrings.sol": {
        "keccak256": "0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6",
        "urls": [
          "bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c",
          "dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
        "urls": [
          "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
          "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/ShortStrings.sol",
    "id": 51620,
    "exportedSymbols": {
      "ShortString": [
        51408
      ],
      "ShortStrings": [
        51619
      ],
      "StorageSlot": [
        51729
      ]
    },
    "nodeType": "SourceUnit",
    "src": "106:4203:58",
    "nodes": [
      {
        "id": 51404,
        "nodeType": "PragmaDirective",
        "src": "106:24:58",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51406,
        "nodeType": "ImportDirective",
        "src": "132:46:58",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol",
        "file": "./StorageSlot.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 51620,
        "sourceUnit": 51730,
        "symbolAliases": [
          {
            "foreign": {
              "id": 51405,
              "name": "StorageSlot",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51729,
              "src": "140:11:58",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 51408,
        "nodeType": "UserDefinedValueTypeDefinition",
        "src": "348:28:58",
        "nodes": [],
        "canonicalName": "ShortString",
        "name": "ShortString",
        "nameLocation": "353:11:58",
        "underlyingType": {
          "id": 51407,
          "name": "bytes32",
          "nodeType": "ElementaryTypeName",
          "src": "368:7:58",
          "typeDescriptions": {
            "typeIdentifier": "t_bytes32",
            "typeString": "bytes32"
          }
        }
      },
      {
        "id": 51619,
        "nodeType": "ContractDefinition",
        "src": "1255:3053:58",
        "nodes": [
          {
            "id": 51412,
            "nodeType": "VariableDeclaration",
            "src": "1345:111:58",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FALLBACK_SENTINEL",
            "nameLocation": "1370:17:58",
            "scope": 51619,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 51410,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1345:7:58",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304646",
              "id": 51411,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1390:66:58",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_255_by_1",
                "typeString": "int_const 255"
              },
              "value": "0x00000000000000000000000000000000000000000000000000000000000000FF"
            },
            "visibility": "private"
          },
          {
            "id": 51416,
            "nodeType": "ErrorDefinition",
            "src": "1463:32:58",
            "nodes": [],
            "errorSelector": "305a27a9",
            "name": "StringTooLong",
            "nameLocation": "1469:13:58",
            "parameters": {
              "id": 51415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51414,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "1490:3:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51416,
                  "src": "1483:10:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51413,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1483:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1482:12:58"
            }
          },
          {
            "id": 51418,
            "nodeType": "ErrorDefinition",
            "src": "1500:27:58",
            "nodes": [],
            "errorSelector": "b3512b0c",
            "name": "InvalidShortString",
            "nameLocation": "1506:18:58",
            "parameters": {
              "id": 51417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1524:2:58"
            }
          },
          {
            "id": 51462,
            "nodeType": "FunctionDefinition",
            "src": "1708:286:58",
            "nodes": [],
            "body": {
              "id": 51461,
              "nodeType": "Block",
              "src": "1786:208:58",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51428
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51428,
                      "mutability": "mutable",
                      "name": "bstr",
                      "nameLocation": "1809:4:58",
                      "nodeType": "VariableDeclaration",
                      "scope": 51461,
                      "src": "1796:17:58",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 51427,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1796:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51433,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51431,
                        "name": "str",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51421,
                        "src": "1822:3:58",
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
                      "id": 51430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1816:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 51429,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1816:5:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 51432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1816:10:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1796:30:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 51434,
                        "name": "bstr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51428,
                        "src": "1840:4:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 51435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1845:6:58",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1840:11:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "3331",
                      "id": 51436,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1854:2:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_31_by_1",
                        "typeString": "int_const 31"
                      },
                      "value": "31"
                    },
                    "src": "1840:16:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51443,
                  "nodeType": "IfStatement",
                  "src": "1836:72:58",
                  "trueBody": {
                    "id": 51442,
                    "nodeType": "Block",
                    "src": "1858:50:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 51439,
                              "name": "str",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51421,
                              "src": "1893:3:58",
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
                            "id": 51438,
                            "name": "StringTooLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51416,
                            "src": "1879:13:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 51440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1879:18:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51441,
                        "nodeType": "RevertStatement",
                        "src": "1872:25:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 51457,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 51452,
                                      "name": "bstr",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 51428,
                                      "src": "1965:4:58",
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
                                    "id": 51451,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1957:7:58",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes32_$",
                                      "typeString": "type(bytes32)"
                                    },
                                    "typeName": {
                                      "id": 51450,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1957:7:58",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 51453,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1957:13:58",
                                  "tryCall": false,
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
                                "id": 51449,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1949:7:58",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 51448,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1949:7:58",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 51454,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1949:22:58",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "|",
                            "rightExpression": {
                              "expression": {
                                "id": 51455,
                                "name": "bstr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51428,
                                "src": "1974:4:58",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 51456,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1979:6:58",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "1974:11:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1949:36:58",
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
                          "id": 51447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1941:7:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 51446,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1941:7:58",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 51458,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1941:45:58",
                        "tryCall": false,
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
                      "expression": {
                        "id": 51444,
                        "name": "ShortString",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51408,
                        "src": "1924:11:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_userDefinedValueType$_ShortString_$51408_$",
                          "typeString": "type(ShortString)"
                        }
                      },
                      "id": 51445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1936:4:58",
                      "memberName": "wrap",
                      "nodeType": "MemberAccess",
                      "src": "1924:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_wrap_pure$_t_bytes32_$returns$_t_userDefinedValueType$_ShortString_$51408_$",
                        "typeString": "function (bytes32) pure returns (ShortString)"
                      }
                    },
                    "id": 51459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1924:63:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "functionReturnParameters": 51426,
                  "id": 51460,
                  "nodeType": "Return",
                  "src": "1917:70:58"
                }
              ]
            },
            "documentation": {
              "id": 51419,
              "nodeType": "StructuredDocumentation",
              "src": "1533:170:58",
              "text": " @dev Encode a string of at most 31 chars into a `ShortString`.\n This will trigger a `StringTooLong` error is the input string is too long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toShortString",
            "nameLocation": "1717:13:58",
            "parameters": {
              "id": 51422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51421,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "1745:3:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51462,
                  "src": "1731:17:58",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51420,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1730:19:58"
            },
            "returnParameters": {
              "id": 51426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51425,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51462,
                  "src": "1773:11:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51424,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51423,
                      "name": "ShortString",
                      "nameLocations": [
                        "1773:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "1773:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "1773:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1772:13:58"
            },
            "scope": 51619,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51488,
            "nodeType": "FunctionDefinition",
            "src": "2078:405:58",
            "nodes": [],
            "body": {
              "id": 51487,
              "nodeType": "Block",
              "src": "2152:331:58",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51472
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51472,
                      "mutability": "mutable",
                      "name": "len",
                      "nameLocation": "2170:3:58",
                      "nodeType": "VariableDeclaration",
                      "scope": 51487,
                      "src": "2162:11:58",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 51471,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2162:7:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51476,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 51474,
                        "name": "sstr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51466,
                        "src": "2187:4:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                          "typeString": "ShortString"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                          "typeString": "ShortString"
                        }
                      ],
                      "id": 51473,
                      "name": "byteLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51520,
                      "src": "2176:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_uint256_$",
                        "typeString": "function (ShortString) pure returns (uint256)"
                      }
                    },
                    "id": 51475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2176:16:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2162:30:58"
                },
                {
                  "assignments": [
                    51478
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51478,
                      "mutability": "mutable",
                      "name": "str",
                      "nameLocation": "2294:3:58",
                      "nodeType": "VariableDeclaration",
                      "scope": 51487,
                      "src": "2280:17:58",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 51477,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2280:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51483,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "3332",
                        "id": 51481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2311:2:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        }
                      ],
                      "id": 51480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2300:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      },
                      "typeName": {
                        "id": 51479,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2304:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      }
                    },
                    "id": 51482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2300:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2280:34:58"
                },
                {
                  "AST": {
                    "nativeSrc": "2376:81:58",
                    "nodeType": "YulBlock",
                    "src": "2376:81:58",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "str",
                              "nativeSrc": "2397:3:58",
                              "nodeType": "YulIdentifier",
                              "src": "2397:3:58"
                            },
                            {
                              "name": "len",
                              "nativeSrc": "2402:3:58",
                              "nodeType": "YulIdentifier",
                              "src": "2402:3:58"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2390:6:58",
                            "nodeType": "YulIdentifier",
                            "src": "2390:6:58"
                          },
                          "nativeSrc": "2390:16:58",
                          "nodeType": "YulFunctionCall",
                          "src": "2390:16:58"
                        },
                        "nativeSrc": "2390:16:58",
                        "nodeType": "YulExpressionStatement",
                        "src": "2390:16:58"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "str",
                                  "nativeSrc": "2430:3:58",
                                  "nodeType": "YulIdentifier",
                                  "src": "2430:3:58"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2435:4:58",
                                  "nodeType": "YulLiteral",
                                  "src": "2435:4:58",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2426:3:58",
                                "nodeType": "YulIdentifier",
                                "src": "2426:3:58"
                              },
                              "nativeSrc": "2426:14:58",
                              "nodeType": "YulFunctionCall",
                              "src": "2426:14:58"
                            },
                            {
                              "name": "sstr",
                              "nativeSrc": "2442:4:58",
                              "nodeType": "YulIdentifier",
                              "src": "2442:4:58"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2419:6:58",
                            "nodeType": "YulIdentifier",
                            "src": "2419:6:58"
                          },
                          "nativeSrc": "2419:28:58",
                          "nodeType": "YulFunctionCall",
                          "src": "2419:28:58"
                        },
                        "nativeSrc": "2419:28:58",
                        "nodeType": "YulExpressionStatement",
                        "src": "2419:28:58"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51472,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2402:3:58",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51466,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2442:4:58",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51478,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2397:3:58",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51478,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2430:3:58",
                      "valueSize": 1
                    }
                  ],
                  "id": 51484,
                  "nodeType": "InlineAssembly",
                  "src": "2367:90:58"
                },
                {
                  "expression": {
                    "id": 51485,
                    "name": "str",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 51478,
                    "src": "2473:3:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 51470,
                  "id": 51486,
                  "nodeType": "Return",
                  "src": "2466:10:58"
                }
              ]
            },
            "documentation": {
              "id": 51463,
              "nodeType": "StructuredDocumentation",
              "src": "2000:73:58",
              "text": " @dev Decode a `ShortString` back to a \"normal\" string."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "2087:8:58",
            "parameters": {
              "id": 51467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51466,
                  "mutability": "mutable",
                  "name": "sstr",
                  "nameLocation": "2108:4:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51488,
                  "src": "2096:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51465,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51464,
                      "name": "ShortString",
                      "nameLocations": [
                        "2096:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "2096:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "2096:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2095:18:58"
            },
            "returnParameters": {
              "id": 51470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51469,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51488,
                  "src": "2137:13:58",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51468,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2137:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2136:15:58"
            },
            "scope": 51619,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51520,
            "nodeType": "FunctionDefinition",
            "src": "2555:245:58",
            "nodes": [],
            "body": {
              "id": 51519,
              "nodeType": "Block",
              "src": "2625:175:58",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    51498
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51498,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2643:6:58",
                      "nodeType": "VariableDeclaration",
                      "scope": 51519,
                      "src": "2635:14:58",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 51497,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2635:7:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 51508,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 51503,
                              "name": "sstr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51492,
                              "src": "2679:4:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            ],
                            "expression": {
                              "id": 51501,
                              "name": "ShortString",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51408,
                              "src": "2660:11:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_userDefinedValueType$_ShortString_$51408_$",
                                "typeString": "type(ShortString)"
                              }
                            },
                            "id": 51502,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2672:6:58",
                            "memberName": "unwrap",
                            "nodeType": "MemberAccess",
                            "src": "2660:18:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_unwrap_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_bytes32_$",
                              "typeString": "function (ShortString) pure returns (bytes32)"
                            }
                          },
                          "id": 51504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2660:24:58",
                          "tryCall": false,
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
                        "id": 51500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2652:7:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 51499,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2652:7:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 51505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2652:33:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "hexValue": "30784646",
                      "id": 51506,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2688:4:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_255_by_1",
                        "typeString": "int_const 255"
                      },
                      "value": "0xFF"
                    },
                    "src": "2652:40:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2635:57:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 51509,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51498,
                      "src": "2706:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "3331",
                      "id": 51510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2715:2:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_31_by_1",
                        "typeString": "int_const 31"
                      },
                      "value": "31"
                    },
                    "src": "2706:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 51516,
                  "nodeType": "IfStatement",
                  "src": "2702:69:58",
                  "trueBody": {
                    "id": 51515,
                    "nodeType": "Block",
                    "src": "2719:52:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 51512,
                            "name": "InvalidShortString",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51418,
                            "src": "2740:18:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 51513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2740:20:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 51514,
                        "nodeType": "RevertStatement",
                        "src": "2733:27:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 51517,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 51498,
                    "src": "2787:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 51496,
                  "id": 51518,
                  "nodeType": "Return",
                  "src": "2780:13:58"
                }
              ]
            },
            "documentation": {
              "id": 51489,
              "nodeType": "StructuredDocumentation",
              "src": "2489:61:58",
              "text": " @dev Return the length of a `ShortString`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "byteLength",
            "nameLocation": "2564:10:58",
            "parameters": {
              "id": 51493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51492,
                  "mutability": "mutable",
                  "name": "sstr",
                  "nameLocation": "2587:4:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51520,
                  "src": "2575:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51491,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51490,
                      "name": "ShortString",
                      "nameLocations": [
                        "2575:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "2575:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "2575:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2574:18:58"
            },
            "returnParameters": {
              "id": 51496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51495,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51520,
                  "src": "2616:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2616:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2615:9:58"
            },
            "scope": 51619,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51560,
            "nodeType": "FunctionDefinition",
            "src": "2914:340:58",
            "nodes": [],
            "body": {
              "id": 51559,
              "nodeType": "Block",
              "src": "3023:231:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 51537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 51533,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51523,
                            "src": "3043:5:58",
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
                          "id": 51532,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3037:5:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 51531,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "3037:5:58",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 51534,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3037:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 51535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3050:6:58",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3037:19:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "3332",
                      "id": 51536,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3059:2:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_32_by_1",
                        "typeString": "int_const 32"
                      },
                      "value": "32"
                    },
                    "src": "3037:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 51557,
                    "nodeType": "Block",
                    "src": "3121:127:58",
                    "statements": [
                      {
                        "expression": {
                          "id": 51550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 51546,
                                  "name": "store",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 51525,
                                  "src": "3161:5:58",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string storage pointer"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string storage pointer"
                                  }
                                ],
                                "expression": {
                                  "id": 51543,
                                  "name": "StorageSlot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 51729,
                                  "src": "3135:11:58",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                                    "typeString": "type(library StorageSlot)"
                                  }
                                },
                                "id": 51545,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3147:13:58",
                                "memberName": "getStringSlot",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 51706,
                                "src": "3135:25:58",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_string_storage_ptr_$returns$_t_struct$_StringSlot_$51637_storage_ptr_$",
                                  "typeString": "function (string storage pointer) pure returns (struct StorageSlot.StringSlot storage pointer)"
                                }
                              },
                              "id": 51547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3135:32:58",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StringSlot_$51637_storage_ptr",
                                "typeString": "struct StorageSlot.StringSlot storage pointer"
                              }
                            },
                            "id": 51548,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "3168:5:58",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 51636,
                            "src": "3135:38:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 51549,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51523,
                            "src": "3176:5:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3135:46:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 51551,
                        "nodeType": "ExpressionStatement",
                        "src": "3135:46:58"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51554,
                              "name": "FALLBACK_SENTINEL",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51412,
                              "src": "3219:17:58",
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
                            "expression": {
                              "id": 51552,
                              "name": "ShortString",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51408,
                              "src": "3202:11:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_userDefinedValueType$_ShortString_$51408_$",
                                "typeString": "type(ShortString)"
                              }
                            },
                            "id": 51553,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3214:4:58",
                            "memberName": "wrap",
                            "nodeType": "MemberAccess",
                            "src": "3202:16:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_wrap_pure$_t_bytes32_$returns$_t_userDefinedValueType$_ShortString_$51408_$",
                              "typeString": "function (bytes32) pure returns (ShortString)"
                            }
                          },
                          "id": 51555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3202:35:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        },
                        "functionReturnParameters": 51530,
                        "id": 51556,
                        "nodeType": "Return",
                        "src": "3195:42:58"
                      }
                    ]
                  },
                  "id": 51558,
                  "nodeType": "IfStatement",
                  "src": "3033:215:58",
                  "trueBody": {
                    "id": 51542,
                    "nodeType": "Block",
                    "src": "3063:52:58",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51539,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51523,
                              "src": "3098:5:58",
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
                            "id": 51538,
                            "name": "toShortString",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51462,
                            "src": "3084:13:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_userDefinedValueType$_ShortString_$51408_$",
                              "typeString": "function (string memory) pure returns (ShortString)"
                            }
                          },
                          "id": 51540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3084:20:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        },
                        "functionReturnParameters": 51530,
                        "id": 51541,
                        "nodeType": "Return",
                        "src": "3077:27:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51521,
              "nodeType": "StructuredDocumentation",
              "src": "2806:103:58",
              "text": " @dev Encode a string into a `ShortString`, or write it to storage if it is too long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toShortStringWithFallback",
            "nameLocation": "2923:25:58",
            "parameters": {
              "id": 51526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51523,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2963:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51560,
                  "src": "2949:19:58",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51522,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2949:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51525,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "2985:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51560,
                  "src": "2970:20:58",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51524,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2970:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2948:43:58"
            },
            "returnParameters": {
              "id": 51530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51529,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51560,
                  "src": "3010:11:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51528,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51527,
                      "name": "ShortString",
                      "nameLocations": [
                        "3010:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "3010:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "3010:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3009:13:58"
            },
            "scope": 51619,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51587,
            "nodeType": "FunctionDefinition",
            "src": "3385:267:58",
            "nodes": [],
            "body": {
              "id": 51586,
              "nodeType": "Block",
              "src": "3494:158:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 51576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 51573,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51564,
                          "src": "3527:5:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        ],
                        "expression": {
                          "id": 51571,
                          "name": "ShortString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51408,
                          "src": "3508:11:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_userDefinedValueType$_ShortString_$51408_$",
                            "typeString": "type(ShortString)"
                          }
                        },
                        "id": 51572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "3520:6:58",
                        "memberName": "unwrap",
                        "nodeType": "MemberAccess",
                        "src": "3508:18:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_unwrap_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_bytes32_$",
                          "typeString": "function (ShortString) pure returns (bytes32)"
                        }
                      },
                      "id": 51574,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3508:25:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 51575,
                      "name": "FALLBACK_SENTINEL",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51412,
                      "src": "3537:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3508:46:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 51584,
                    "nodeType": "Block",
                    "src": "3609:37:58",
                    "statements": [
                      {
                        "expression": {
                          "id": 51582,
                          "name": "store",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51566,
                          "src": "3630:5:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "functionReturnParameters": 51570,
                        "id": 51583,
                        "nodeType": "Return",
                        "src": "3623:12:58"
                      }
                    ]
                  },
                  "id": 51585,
                  "nodeType": "IfStatement",
                  "src": "3504:142:58",
                  "trueBody": {
                    "id": 51581,
                    "nodeType": "Block",
                    "src": "3556:47:58",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51578,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51564,
                              "src": "3586:5:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            ],
                            "id": 51577,
                            "name": "toString",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51488,
                            "src": "3577:8:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (ShortString) pure returns (string memory)"
                            }
                          },
                          "id": 51579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3577:15:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 51570,
                        "id": 51580,
                        "nodeType": "Return",
                        "src": "3570:22:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51561,
              "nodeType": "StructuredDocumentation",
              "src": "3260:120:58",
              "text": " @dev Decode a string that was encoded to `ShortString` or written to storage using {setWithFallback}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toStringWithFallback",
            "nameLocation": "3394:20:58",
            "parameters": {
              "id": 51567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51564,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3427:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51587,
                  "src": "3415:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51563,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51562,
                      "name": "ShortString",
                      "nameLocations": [
                        "3415:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "3415:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "3415:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51566,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "3449:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51587,
                  "src": "3434:20:58",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3434:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3414:41:58"
            },
            "returnParameters": {
              "id": 51570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51569,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51587,
                  "src": "3479:13:58",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51568,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3479:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3478:15:58"
            },
            "scope": 51619,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51618,
            "nodeType": "FunctionDefinition",
            "src": "4027:279:58",
            "nodes": [],
            "body": {
              "id": 51617,
              "nodeType": "Block",
              "src": "4132:174:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 51603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 51600,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51591,
                          "src": "4165:5:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                            "typeString": "ShortString"
                          }
                        ],
                        "expression": {
                          "id": 51598,
                          "name": "ShortString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51408,
                          "src": "4146:11:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_userDefinedValueType$_ShortString_$51408_$",
                            "typeString": "type(ShortString)"
                          }
                        },
                        "id": 51599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "4158:6:58",
                        "memberName": "unwrap",
                        "nodeType": "MemberAccess",
                        "src": "4146:18:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_unwrap_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_bytes32_$",
                          "typeString": "function (ShortString) pure returns (bytes32)"
                        }
                      },
                      "id": 51601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4146:25:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 51602,
                      "name": "FALLBACK_SENTINEL",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51412,
                      "src": "4175:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "4146:46:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 51615,
                    "nodeType": "Block",
                    "src": "4249:51:58",
                    "statements": [
                      {
                        "expression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 51611,
                                "name": "store",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51593,
                                "src": "4276:5:58",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              ],
                              "id": 51610,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4270:5:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 51609,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4270:5:58",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 51612,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4270:12:58",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes storage pointer"
                            }
                          },
                          "id": 51613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4283:6:58",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4270:19:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 51597,
                        "id": 51614,
                        "nodeType": "Return",
                        "src": "4263:26:58"
                      }
                    ]
                  },
                  "id": 51616,
                  "nodeType": "IfStatement",
                  "src": "4142:158:58",
                  "trueBody": {
                    "id": 51608,
                    "nodeType": "Block",
                    "src": "4194:49:58",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 51605,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51591,
                              "src": "4226:5:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                                "typeString": "ShortString"
                              }
                            ],
                            "id": 51604,
                            "name": "byteLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51520,
                            "src": "4215:10:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_userDefinedValueType$_ShortString_$51408_$returns$_t_uint256_$",
                              "typeString": "function (ShortString) pure returns (uint256)"
                            }
                          },
                          "id": 51606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4215:17:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 51597,
                        "id": 51607,
                        "nodeType": "Return",
                        "src": "4208:24:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 51588,
              "nodeType": "StructuredDocumentation",
              "src": "3658:364:58",
              "text": " @dev Return the length of a string that was encoded to `ShortString` or written to storage using\n {setWithFallback}.\n WARNING: This will return the \"byte length\" of the string. This may not reflect the actual length in terms of\n actual characters as the UTF-8 encoding of a single character can span over multiple bytes."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "byteLengthWithFallback",
            "nameLocation": "4036:22:58",
            "parameters": {
              "id": 51594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51591,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4071:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51618,
                  "src": "4059:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                    "typeString": "ShortString"
                  },
                  "typeName": {
                    "id": 51590,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51589,
                      "name": "ShortString",
                      "nameLocations": [
                        "4059:11:58"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51408,
                      "src": "4059:11:58"
                    },
                    "referencedDeclaration": 51408,
                    "src": "4059:11:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51593,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "4093:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 51618,
                  "src": "4078:20:58",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51592,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4078:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4058:41:58"
            },
            "returnParameters": {
              "id": 51597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51596,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51618,
                  "src": "4123:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4123:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4122:9:58"
            },
            "scope": 51619,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ShortStrings",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 51409,
          "nodeType": "StructuredDocumentation",
          "src": "378:876:58",
          "text": " @dev This library provides functions to convert short memory strings\n into a `ShortString` type that can be used as an immutable variable.\n Strings of arbitrary length can be optimized using this library if\n they are short enough (up to 31 bytes) by packing them with their\n length (1 byte) in a single EVM word (32 bytes). Additionally, a\n fallback mechanism can be used for every other case.\n Usage example:\n ```solidity\n contract Named {\n     using ShortStrings for *;\n     ShortString private immutable _name;\n     string private _nameFallback;\n     constructor(string memory contractName) {\n         _name = contractName.toShortStringWithFallback(_nameFallback);\n     }\n     function name() external view returns (string memory) {\n         return _name.toStringWithFallback(_nameFallback);\n     }\n }\n ```"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51619
        ],
        "name": "ShortStrings",
        "nameLocation": "1263:12:58",
        "scope": 51620,
        "usedErrors": [
          51416,
          51418
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 58
} as const;