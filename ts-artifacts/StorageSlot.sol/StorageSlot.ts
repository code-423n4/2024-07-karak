export const StorageSlot = {
  "abi": [],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220e380256cf281be6256e2c038110b27f487ff5433c16d6b57686708f1793aa51164736f6c63430008190033",
    "sourceMap": "1245:2685:59:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220e380256cf281be6256e2c038110b27f487ff5433c16d6b57686708f1793aa51164736f6c63430008190033",
    "sourceMap": "1245:2685:59:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for reading and writing primitive types to specific storage slots. Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts. This library helps with reading and writing to such slots without the need for inline assembly. The functions in this library return Slot structs that contain a `value` member that can be used to read or write. Example usage to set ERC1967 implementation slot: ```solidity contract ERC1967 {     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;     function _getImplementation() internal view returns (address) {         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;     }     function _setImplementation(address newImplementation) internal {         require(newImplementation.code.length > 0);         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;     } } ```\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":\"StorageSlot\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": "StorageSlot"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
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
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol",
    "id": 51730,
    "exportedSymbols": {
      "StorageSlot": [
        51729
      ]
    },
    "nodeType": "SourceUnit",
    "src": "193:3738:59",
    "nodes": [
      {
        "id": 51621,
        "nodeType": "PragmaDirective",
        "src": "193:24:59",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51729,
        "nodeType": "ContractDefinition",
        "src": "1245:2685:59",
        "nodes": [
          {
            "id": 51625,
            "nodeType": "StructDefinition",
            "src": "1271:49:59",
            "nodes": [],
            "canonicalName": "StorageSlot.AddressSlot",
            "members": [
              {
                "constant": false,
                "id": 51624,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1308:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51625,
                "src": "1300:13:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 51623,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1300:7:59",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSlot",
            "nameLocation": "1278:11:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51628,
            "nodeType": "StructDefinition",
            "src": "1326:46:59",
            "nodes": [],
            "canonicalName": "StorageSlot.BooleanSlot",
            "members": [
              {
                "constant": false,
                "id": 51627,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1360:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51628,
                "src": "1355:10:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 51626,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1355:4:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BooleanSlot",
            "nameLocation": "1333:11:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51631,
            "nodeType": "StructDefinition",
            "src": "1378:49:59",
            "nodes": [],
            "canonicalName": "StorageSlot.Bytes32Slot",
            "members": [
              {
                "constant": false,
                "id": 51630,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1415:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51631,
                "src": "1407:13:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 51629,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1407:7:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Slot",
            "nameLocation": "1385:11:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51634,
            "nodeType": "StructDefinition",
            "src": "1433:49:59",
            "nodes": [],
            "canonicalName": "StorageSlot.Uint256Slot",
            "members": [
              {
                "constant": false,
                "id": 51633,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1470:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51634,
                "src": "1462:13:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 51632,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1462:7:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Uint256Slot",
            "nameLocation": "1440:11:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51637,
            "nodeType": "StructDefinition",
            "src": "1488:47:59",
            "nodes": [],
            "canonicalName": "StorageSlot.StringSlot",
            "members": [
              {
                "constant": false,
                "id": 51636,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1523:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51637,
                "src": "1516:12:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 51635,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1516:6:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "StringSlot",
            "nameLocation": "1495:10:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51640,
            "nodeType": "StructDefinition",
            "src": "1541:45:59",
            "nodes": [],
            "canonicalName": "StorageSlot.BytesSlot",
            "members": [
              {
                "constant": false,
                "id": 51639,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1574:5:59",
                "nodeType": "VariableDeclaration",
                "scope": 51640,
                "src": "1568:11:59",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 51638,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "1568:5:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BytesSlot",
            "nameLocation": "1548:9:59",
            "scope": 51729,
            "visibility": "public"
          },
          {
            "id": 51651,
            "nodeType": "FunctionDefinition",
            "src": "1684:190:59",
            "nodes": [],
            "body": {
              "id": 51650,
              "nodeType": "Block",
              "src": "1768:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1830:38:59",
                    "nodeType": "YulBlock",
                    "src": "1830:38:59",
                    "statements": [
                      {
                        "nativeSrc": "1844:14:59",
                        "nodeType": "YulAssignment",
                        "src": "1844:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "1854:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "1854:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "1844:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "1844:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51647,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "1844:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51643,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1854:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51649,
                  "nodeType": "InlineAssembly",
                  "src": "1821:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51641,
              "nodeType": "StructuredDocumentation",
              "src": "1592:87:59",
              "text": " @dev Returns an `AddressSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAddressSlot",
            "nameLocation": "1693:14:59",
            "parameters": {
              "id": 51644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51643,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1716:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51651,
                  "src": "1708:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51642,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1708:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1707:14:59"
            },
            "returnParameters": {
              "id": 51648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51647,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1765:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51651,
                  "src": "1745:21:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                    "typeString": "struct StorageSlot.AddressSlot"
                  },
                  "typeName": {
                    "id": 51646,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51645,
                      "name": "AddressSlot",
                      "nameLocations": [
                        "1745:11:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51625,
                      "src": "1745:11:59"
                    },
                    "referencedDeclaration": 51625,
                    "src": "1745:11:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                      "typeString": "struct StorageSlot.AddressSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1744:23:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51662,
            "nodeType": "FunctionDefinition",
            "src": "1972:190:59",
            "nodes": [],
            "body": {
              "id": 51661,
              "nodeType": "Block",
              "src": "2056:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2118:38:59",
                    "nodeType": "YulBlock",
                    "src": "2118:38:59",
                    "statements": [
                      {
                        "nativeSrc": "2132:14:59",
                        "nodeType": "YulAssignment",
                        "src": "2132:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2142:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "2142:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2132:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "2132:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51658,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2132:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51654,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2142:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51660,
                  "nodeType": "InlineAssembly",
                  "src": "2109:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51652,
              "nodeType": "StructuredDocumentation",
              "src": "1880:87:59",
              "text": " @dev Returns an `BooleanSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBooleanSlot",
            "nameLocation": "1981:14:59",
            "parameters": {
              "id": 51655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51654,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2004:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51662,
                  "src": "1996:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1996:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1995:14:59"
            },
            "returnParameters": {
              "id": 51659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51658,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2053:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51662,
                  "src": "2033:21:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BooleanSlot_$51628_storage_ptr",
                    "typeString": "struct StorageSlot.BooleanSlot"
                  },
                  "typeName": {
                    "id": 51657,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51656,
                      "name": "BooleanSlot",
                      "nameLocations": [
                        "2033:11:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51628,
                      "src": "2033:11:59"
                    },
                    "referencedDeclaration": 51628,
                    "src": "2033:11:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BooleanSlot_$51628_storage_ptr",
                      "typeString": "struct StorageSlot.BooleanSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2032:23:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51673,
            "nodeType": "FunctionDefinition",
            "src": "2260:190:59",
            "nodes": [],
            "body": {
              "id": 51672,
              "nodeType": "Block",
              "src": "2344:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2406:38:59",
                    "nodeType": "YulBlock",
                    "src": "2406:38:59",
                    "statements": [
                      {
                        "nativeSrc": "2420:14:59",
                        "nodeType": "YulAssignment",
                        "src": "2420:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2430:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "2430:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2420:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "2420:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51669,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2420:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51665,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2430:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51671,
                  "nodeType": "InlineAssembly",
                  "src": "2397:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51663,
              "nodeType": "StructuredDocumentation",
              "src": "2168:87:59",
              "text": " @dev Returns an `Bytes32Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytes32Slot",
            "nameLocation": "2269:14:59",
            "parameters": {
              "id": 51666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51665,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2292:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51673,
                  "src": "2284:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51664,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2284:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2283:14:59"
            },
            "returnParameters": {
              "id": 51670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51669,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2341:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51673,
                  "src": "2321:21:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Slot_$51631_storage_ptr",
                    "typeString": "struct StorageSlot.Bytes32Slot"
                  },
                  "typeName": {
                    "id": 51668,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51667,
                      "name": "Bytes32Slot",
                      "nameLocations": [
                        "2321:11:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51631,
                      "src": "2321:11:59"
                    },
                    "referencedDeclaration": 51631,
                    "src": "2321:11:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Slot_$51631_storage_ptr",
                      "typeString": "struct StorageSlot.Bytes32Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2320:23:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51684,
            "nodeType": "FunctionDefinition",
            "src": "2548:190:59",
            "nodes": [],
            "body": {
              "id": 51683,
              "nodeType": "Block",
              "src": "2632:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2694:38:59",
                    "nodeType": "YulBlock",
                    "src": "2694:38:59",
                    "statements": [
                      {
                        "nativeSrc": "2708:14:59",
                        "nodeType": "YulAssignment",
                        "src": "2708:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2718:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "2718:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2708:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "2708:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51680,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2708:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51676,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2718:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51682,
                  "nodeType": "InlineAssembly",
                  "src": "2685:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51674,
              "nodeType": "StructuredDocumentation",
              "src": "2456:87:59",
              "text": " @dev Returns an `Uint256Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUint256Slot",
            "nameLocation": "2557:14:59",
            "parameters": {
              "id": 51677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51676,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2580:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51684,
                  "src": "2572:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51675,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2572:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2571:14:59"
            },
            "returnParameters": {
              "id": 51681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51680,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2629:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51684,
                  "src": "2609:21:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Uint256Slot_$51634_storage_ptr",
                    "typeString": "struct StorageSlot.Uint256Slot"
                  },
                  "typeName": {
                    "id": 51679,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51678,
                      "name": "Uint256Slot",
                      "nameLocations": [
                        "2609:11:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51634,
                      "src": "2609:11:59"
                    },
                    "referencedDeclaration": 51634,
                    "src": "2609:11:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Uint256Slot_$51634_storage_ptr",
                      "typeString": "struct StorageSlot.Uint256Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2608:23:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51695,
            "nodeType": "FunctionDefinition",
            "src": "2835:188:59",
            "nodes": [],
            "body": {
              "id": 51694,
              "nodeType": "Block",
              "src": "2917:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2979:38:59",
                    "nodeType": "YulBlock",
                    "src": "2979:38:59",
                    "statements": [
                      {
                        "nativeSrc": "2993:14:59",
                        "nodeType": "YulAssignment",
                        "src": "2993:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3003:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "3003:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2993:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "2993:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51691,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2993:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51687,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3003:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51693,
                  "nodeType": "InlineAssembly",
                  "src": "2970:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51685,
              "nodeType": "StructuredDocumentation",
              "src": "2744:86:59",
              "text": " @dev Returns an `StringSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "2844:13:59",
            "parameters": {
              "id": 51688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51687,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2866:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51695,
                  "src": "2858:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51686,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2858:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2857:14:59"
            },
            "returnParameters": {
              "id": 51692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51691,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2914:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51695,
                  "src": "2895:20:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$51637_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 51690,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51689,
                      "name": "StringSlot",
                      "nameLocations": [
                        "2895:10:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51637,
                      "src": "2895:10:59"
                    },
                    "referencedDeclaration": 51637,
                    "src": "2895:10:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$51637_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2894:22:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51706,
            "nodeType": "FunctionDefinition",
            "src": "3135:202:59",
            "nodes": [],
            "body": {
              "id": 51705,
              "nodeType": "Block",
              "src": "3225:112:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3287:44:59",
                    "nodeType": "YulBlock",
                    "src": "3287:44:59",
                    "statements": [
                      {
                        "nativeSrc": "3301:20:59",
                        "nodeType": "YulAssignment",
                        "src": "3301:20:59",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "3311:10:59",
                          "nodeType": "YulIdentifier",
                          "src": "3311:10:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3301:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "3301:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51702,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3301:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51698,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3311:10:59",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "id": 51704,
                  "nodeType": "InlineAssembly",
                  "src": "3278:53:59"
                }
              ]
            },
            "documentation": {
              "id": 51696,
              "nodeType": "StructuredDocumentation",
              "src": "3029:101:59",
              "text": " @dev Returns an `StringSlot` representation of the string storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "3144:13:59",
            "parameters": {
              "id": 51699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51698,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "3173:5:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51706,
                  "src": "3158:20:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 51697,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3158:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3157:22:59"
            },
            "returnParameters": {
              "id": 51703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51702,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3222:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51706,
                  "src": "3203:20:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$51637_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 51701,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51700,
                      "name": "StringSlot",
                      "nameLocations": [
                        "3203:10:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51637,
                      "src": "3203:10:59"
                    },
                    "referencedDeclaration": 51637,
                    "src": "3203:10:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$51637_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3202:22:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51717,
            "nodeType": "FunctionDefinition",
            "src": "3433:186:59",
            "nodes": [],
            "body": {
              "id": 51716,
              "nodeType": "Block",
              "src": "3513:106:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3575:38:59",
                    "nodeType": "YulBlock",
                    "src": "3575:38:59",
                    "statements": [
                      {
                        "nativeSrc": "3589:14:59",
                        "nodeType": "YulAssignment",
                        "src": "3589:14:59",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3599:4:59",
                          "nodeType": "YulIdentifier",
                          "src": "3599:4:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3589:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "3589:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51713,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3589:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51709,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3599:4:59",
                      "valueSize": 1
                    }
                  ],
                  "id": 51715,
                  "nodeType": "InlineAssembly",
                  "src": "3566:47:59"
                }
              ]
            },
            "documentation": {
              "id": 51707,
              "nodeType": "StructuredDocumentation",
              "src": "3343:85:59",
              "text": " @dev Returns an `BytesSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "3442:12:59",
            "parameters": {
              "id": 51710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51709,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3463:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51717,
                  "src": "3455:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 51708,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3455:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3454:14:59"
            },
            "returnParameters": {
              "id": 51714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51713,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3510:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51717,
                  "src": "3492:19:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$51640_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 51712,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51711,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "3492:9:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51640,
                      "src": "3492:9:59"
                    },
                    "referencedDeclaration": 51640,
                    "src": "3492:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$51640_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3491:21:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 51728,
            "nodeType": "FunctionDefinition",
            "src": "3729:199:59",
            "nodes": [],
            "body": {
              "id": 51727,
              "nodeType": "Block",
              "src": "3816:112:59",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3878:44:59",
                    "nodeType": "YulBlock",
                    "src": "3878:44:59",
                    "statements": [
                      {
                        "nativeSrc": "3892:20:59",
                        "nodeType": "YulAssignment",
                        "src": "3892:20:59",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "3902:10:59",
                          "nodeType": "YulIdentifier",
                          "src": "3902:10:59"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3892:6:59",
                            "nodeType": "YulIdentifier",
                            "src": "3892:6:59"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 51724,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3892:6:59",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 51720,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3902:10:59",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "id": 51726,
                  "nodeType": "InlineAssembly",
                  "src": "3869:53:59"
                }
              ]
            },
            "documentation": {
              "id": 51718,
              "nodeType": "StructuredDocumentation",
              "src": "3625:99:59",
              "text": " @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "3738:12:59",
            "parameters": {
              "id": 51721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51720,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "3765:5:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51728,
                  "src": "3751:19:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51719,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3751:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3750:21:59"
            },
            "returnParameters": {
              "id": 51725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51724,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3813:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 51728,
                  "src": "3795:19:59",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$51640_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 51723,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 51722,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "3795:9:59"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 51640,
                      "src": "3795:9:59"
                    },
                    "referencedDeclaration": 51640,
                    "src": "3795:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$51640_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3794:21:59"
            },
            "scope": 51729,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "StorageSlot",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 51622,
          "nodeType": "StructuredDocumentation",
          "src": "219:1025:59",
          "text": " @dev Library for reading and writing primitive types to specific storage slots.\n Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\n This library helps with reading and writing to such slots without the need for inline assembly.\n The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\n Example usage to set ERC1967 implementation slot:\n ```solidity\n contract ERC1967 {\n     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\n     function _getImplementation() internal view returns (address) {\n         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\n     }\n     function _setImplementation(address newImplementation) internal {\n         require(newImplementation.code.length > 0);\n         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\n     }\n }\n ```"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51729
        ],
        "name": "StorageSlot",
        "nameLocation": "1253:11:59",
        "scope": 51730,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 59
} as const;