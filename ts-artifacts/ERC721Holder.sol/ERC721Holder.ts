export const ERC721Holder = {
  "abi": [
    {
      "type": "function",
      "name": "onERC721Received",
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
    "onERC721Received(address,address,uint256,bytes)": "150b7a02"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC721Receiver} interface. Accepts all token transfers. Make sure the contract is able to use its token with {IERC721-safeTransferFrom}, {IERC721-approve} or {IERC721-setApprovalForAll}.\",\"kind\":\"dev\",\"methods\":{\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol\":\"ERC721Holder\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22\",\"dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol\":{\"keccak256\":\"0xaad20f8713b5cd98114278482d5d91b9758f9727048527d582e8e88fd4901fd8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5396e8dbb000c2fada59b7d2093b9c7c870fd09413ab0fdaba45d882959c6244\",\"dweb:/ipfs/QmXQn5XckSiUsUBpMYuiFeqnojRX4rKa9jmgjCPeTuPmhh\"]}},\"version\":1}",
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
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "onERC721Received(address,address,uint256,bytes)": {
            "details": "See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`."
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
        "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol": "ERC721Holder"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49",
        "urls": [
          "bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22",
          "dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol": {
        "keccak256": "0xaad20f8713b5cd98114278482d5d91b9758f9727048527d582e8e88fd4901fd8",
        "urls": [
          "bzz-raw://5396e8dbb000c2fada59b7d2093b9c7c870fd09413ab0fdaba45d882959c6244",
          "dweb:/ipfs/QmXQn5XckSiUsUBpMYuiFeqnojRX4rKa9jmgjCPeTuPmhh"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol",
    "id": 51052,
    "exportedSymbols": {
      "ERC721Holder": [
        51051
      ],
      "IERC721Receiver": [
        51024
      ]
    },
    "nodeType": "SourceUnit",
    "src": "119:676:54",
    "nodes": [
      {
        "id": 51026,
        "nodeType": "PragmaDirective",
        "src": "119:24:54",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51028,
        "nodeType": "ImportDirective",
        "src": "145:55:54",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
        "file": "../IERC721Receiver.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 51052,
        "sourceUnit": 51025,
        "symbolAliases": [
          {
            "foreign": {
              "id": 51027,
              "name": "IERC721Receiver",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51024,
              "src": "153:15:54",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 51051,
        "nodeType": "ContractDefinition",
        "src": "441:353:54",
        "nodes": [
          {
            "id": 51050,
            "nodeType": "FunctionDefinition",
            "src": "639:153:54",
            "nodes": [],
            "body": {
              "id": 51049,
              "nodeType": "Block",
              "src": "738:54:54",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 51045,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -28,
                        "src": "755:4:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC721Holder_$51051",
                          "typeString": "contract ERC721Holder"
                        }
                      },
                      "id": 51046,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "760:16:54",
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51050,
                      "src": "755:21:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 51047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "777:8:54",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "755:30:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 51044,
                  "id": 51048,
                  "nodeType": "Return",
                  "src": "748:37:54"
                }
              ]
            },
            "baseFunctions": [
              51023
            ],
            "documentation": {
              "id": 51032,
              "nodeType": "StructuredDocumentation",
              "src": "497:137:54",
              "text": " @dev See {IERC721Receiver-onERC721Received}.\n Always returns `IERC721Receiver.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "648:16:54",
            "parameters": {
              "id": 51041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51034,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51050,
                  "src": "665:7:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51033,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:54",
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
                  "id": 51036,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51050,
                  "src": "674:7:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51035,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:54",
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
                  "id": 51038,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51050,
                  "src": "683:7:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51037,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51040,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51050,
                  "src": "692:12:54",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51039,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:5:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "664:41:54"
            },
            "returnParameters": {
              "id": 51044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51043,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51050,
                  "src": "730:6:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 51042,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "730:6:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "729:8:54"
            },
            "scope": 51051,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 51030,
              "name": "IERC721Receiver",
              "nameLocations": [
                "475:15:54"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51024,
              "src": "475:15:54"
            },
            "id": 51031,
            "nodeType": "InheritanceSpecifier",
            "src": "475:15:54"
          }
        ],
        "canonicalName": "ERC721Holder",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 51029,
          "nodeType": "StructuredDocumentation",
          "src": "202:238:54",
          "text": " @dev Implementation of the {IERC721Receiver} interface.\n Accepts all token transfers.\n Make sure the contract is able to use its token with {IERC721-safeTransferFrom}, {IERC721-approve} or\n {IERC721-setApprovalForAll}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          51051,
          51024
        ],
        "name": "ERC721Holder",
        "nameLocation": "459:12:54",
        "scope": 51052,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 54
} as const;