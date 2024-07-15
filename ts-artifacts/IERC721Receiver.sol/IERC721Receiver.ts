export const IERC721Receiver = {
  "abi": [
    {
      "type": "function",
      "name": "onERC721Received",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support safeTransfers from ERC721 asset contracts.\",\"kind\":\"dev\",\"methods\":{\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\"}},\"title\":\"ERC721 token receiver interface\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":\"IERC721Receiver\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22\",\"dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i\"]}},\"version\":1}",
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
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
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
            "details": "Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`."
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
        "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": "IERC721Receiver"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
    "id": 51025,
    "exportedSymbols": {
      "IERC721Receiver": [
        51024
      ]
    },
    "nodeType": "SourceUnit",
    "src": "116:879:53",
    "nodes": [
      {
        "id": 51008,
        "nodeType": "PragmaDirective",
        "src": "116:24:53",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 51024,
        "nodeType": "ContractDefinition",
        "src": "295:699:53",
        "nodes": [
          {
            "id": 51023,
            "nodeType": "FunctionDefinition",
            "src": "832:160:53",
            "nodes": [],
            "documentation": {
              "id": 51010,
              "nodeType": "StructuredDocumentation",
              "src": "327:500:53",
              "text": " @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n by `operator` from `from`, this function is called.\n It must return its Solidity selector to confirm the token transfer.\n If any other value is returned or the interface is not implemented by the recipient, the transfer will be\n reverted.\n The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "841:16:53",
            "parameters": {
              "id": 51019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51012,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "875:8:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 51023,
                  "src": "867:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51011,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:7:53",
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
                  "id": 51014,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "901:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 51023,
                  "src": "893:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:53",
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
                  "id": 51016,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "923:7:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 51023,
                  "src": "915:15:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51015,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "915:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51018,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "955:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 51023,
                  "src": "940:19:53",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 51017,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "940:5:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "857:108:53"
            },
            "returnParameters": {
              "id": 51022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51021,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 51023,
                  "src": "984:6:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 51020,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "984:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "983:8:53"
            },
            "scope": 51024,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC721Receiver",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 51009,
          "nodeType": "StructuredDocumentation",
          "src": "142:152:53",
          "text": " @title ERC721 token receiver interface\n @dev Interface for any contract that wants to support safeTransfers\n from ERC721 asset contracts."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          51024
        ],
        "name": "IERC721Receiver",
        "nameLocation": "305:15:53",
        "scope": 51025,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 53
} as const;