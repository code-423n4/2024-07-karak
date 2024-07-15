export const Context = {
  "abi": [],
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/Context.sol": "Context"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
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
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
    "id": 51335,
    "exportedSymbols": {
      "Context": [
        51334
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:862:56",
    "nodes": [
      {
        "id": 51306,
        "nodeType": "PragmaDirective",
        "src": "101:24:56",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51334,
        "nodeType": "ContractDefinition",
        "src": "624:338:56",
        "nodes": [
          {
            "id": 51316,
            "nodeType": "FunctionDefinition",
            "src": "656:96:56",
            "nodes": [],
            "body": {
              "id": 51315,
              "nodeType": "Block",
              "src": "718:34:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 51312,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "735:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 51313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "739:6:56",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "735:10:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 51311,
                  "id": 51314,
                  "nodeType": "Return",
                  "src": "728:17:56"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "665:10:56",
            "parameters": {
              "id": 51308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "675:2:56"
            },
            "returnParameters": {
              "id": 51311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51310,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51316,
                  "src": "709:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51309,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "708:9:56"
            },
            "scope": 51334,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 51325,
            "nodeType": "FunctionDefinition",
            "src": "758:99:56",
            "nodes": [],
            "body": {
              "id": 51324,
              "nodeType": "Block",
              "src": "825:32:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 51321,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "842:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 51322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "846:4:56",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "842:8:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 51320,
                  "id": 51323,
                  "nodeType": "Return",
                  "src": "835:15:56"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "767:8:56",
            "parameters": {
              "id": 51317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "775:2:56"
            },
            "returnParameters": {
              "id": 51320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51319,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51325,
                  "src": "809:14:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51318,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "808:16:56"
            },
            "scope": 51334,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 51333,
            "nodeType": "FunctionDefinition",
            "src": "863:97:56",
            "nodes": [],
            "body": {
              "id": 51332,
              "nodeType": "Block",
              "src": "935:25:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 51330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "952:1:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 51329,
                  "id": 51331,
                  "nodeType": "Return",
                  "src": "945:8:56"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contextSuffixLength",
            "nameLocation": "872:20:56",
            "parameters": {
              "id": 51326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:2:56"
            },
            "returnParameters": {
              "id": 51329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51328,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51333,
                  "src": "926:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51327,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "925:9:56"
            },
            "scope": 51334,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Context",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 51307,
          "nodeType": "StructuredDocumentation",
          "src": "127:496:56",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51334
        ],
        "name": "Context",
        "nameLocation": "642:7:56",
        "scope": 51335,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 56
} as const;