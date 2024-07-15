export const IERC1155Receiver = {
  "abi": [
    {
      "type": "function",
      "name": "onERC1155BatchReceived",
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
          "name": "ids",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "internalType": "uint256[]"
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
    },
    {
      "type": "function",
      "name": "onERC1155Received",
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
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "value",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface that must be implemented by smart contracts in order to receive ERC-1155 token transfers.\",\"kind\":\"dev\",\"methods\":{\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` (i.e. 0xbc197c81, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"ids\":\"An array containing ids of each token being transferred (order and length must match values array)\",\"operator\":\"The address which initiated the batch transfer (i.e. msg.sender)\",\"values\":\"An array containing amounts of each token being transferred (order and length must match ids array)\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\"}},\"onERC1155Received(address,address,uint256,uint256,bytes)\":{\"details\":\"Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` (i.e. 0xf23a6e61, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"id\":\"The ID of the token being transferred\",\"operator\":\"The address which initiated the transfer (i.e. msg.sender)\",\"value\":\"The amount of tokens being transferred\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\"}},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":\"IERC1155Receiver\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xb69597a63b202e28401128bed6a6d259e8730191274471af7303eafb247881a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://25addbda49a578b3318130585601344c5149a5549d749adf88e9685349a46b23\",\"dweb:/ipfs/Qme2DuD8gpsve1ZvaSMQpBwMdpU7yAtekDwr7gUp8dX4zX\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
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
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
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
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
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
          "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": {
            "details": "Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` (i.e. 0xbc197c81, or its own function selector).",
            "params": {
              "data": "Additional data with no specified format",
              "from": "The address which previously owned the token",
              "ids": "An array containing ids of each token being transferred (order and length must match values array)",
              "operator": "The address which initiated the batch transfer (i.e. msg.sender)",
              "values": "An array containing amounts of each token being transferred (order and length must match ids array)"
            },
            "returns": {
              "_0": "`bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
            }
          },
          "onERC1155Received(address,address,uint256,uint256,bytes)": {
            "details": "Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` (i.e. 0xf23a6e61, or its own function selector).",
            "params": {
              "data": "Additional data with no specified format",
              "from": "The address which previously owned the token",
              "id": "The ID of the token being transferred",
              "operator": "The address which initiated the transfer (i.e. msg.sender)",
              "value": "The amount of tokens being transferred"
            },
            "returns": {
              "_0": "`bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
            }
          },
          "supportsInterface(bytes4)": {
            "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
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
        "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": "IERC1155Receiver"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
    "id": 50117,
    "exportedSymbols": {
      "IERC1155Receiver": [
        50116
      ],
      "IERC165": [
        52770
      ]
    },
    "nodeType": "SourceUnit",
    "src": "118:2479:46",
    "nodes": [
      {
        "id": 50076,
        "nodeType": "PragmaDirective",
        "src": "118:24:46",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50078,
        "nodeType": "ImportDirective",
        "src": "144:62:46",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50117,
        "sourceUnit": 52771,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50077,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52770,
              "src": "152:7:46",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50116,
        "nodeType": "ContractDefinition",
        "src": "327:2269:46",
        "nodes": [
          {
            "id": 50097,
            "nodeType": "FunctionDefinition",
            "src": "1202:179:46",
            "nodes": [],
            "documentation": {
              "id": 50082,
              "nodeType": "StructuredDocumentation",
              "src": "371:826:46",
              "text": " @dev Handles the receipt of a single ERC1155 token type. This function is\n called at the end of a `safeTransferFrom` after the balance has been updated.\n NOTE: To accept the transfer, this must return\n `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))`\n (i.e. 0xf23a6e61, or its own function selector).\n @param operator The address which initiated the transfer (i.e. msg.sender)\n @param from The address which previously owned the token\n @param id The ID of the token being transferred\n @param value The amount of tokens being transferred\n @param data Additional data with no specified format\n @return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
            },
            "functionSelector": "f23a6e61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "1211:17:46",
            "parameters": {
              "id": 50093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50084,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1246:8:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1238:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:46",
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
                  "id": 50086,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1272:4:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1264:12:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:46",
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
                  "id": 50088,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1294:2:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1286:10:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50090,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1314:5:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1306:13:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1306:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50092,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1329:19:46",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 50091,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1329:5:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1228:126:46"
            },
            "returnParameters": {
              "id": 50096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50095,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50097,
                  "src": "1373:6:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 50094,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1372:8:46"
            },
            "scope": 50116,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50115,
            "nodeType": "FunctionDefinition",
            "src": "2386:208:46",
            "nodes": [],
            "documentation": {
              "id": 50098,
              "nodeType": "StructuredDocumentation",
              "src": "1387:994:46",
              "text": " @dev Handles the receipt of a multiple ERC1155 token types. This function\n is called at the end of a `safeBatchTransferFrom` after the balances have\n been updated.\n NOTE: To accept the transfer(s), this must return\n `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))`\n (i.e. 0xbc197c81, or its own function selector).\n @param operator The address which initiated the batch transfer (i.e. msg.sender)\n @param from The address which previously owned the token\n @param ids An array containing ids of each token being transferred (order and length must match values array)\n @param values An array containing amounts of each token being transferred (order and length must match ids array)\n @param data Additional data with no specified format\n @return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
            },
            "functionSelector": "bc197c81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "2395:22:46",
            "parameters": {
              "id": 50111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50100,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2435:8:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2427:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2427:7:46",
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
                  "id": 50102,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2461:4:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2453:12:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2453:7:46",
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
                  "id": 50105,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "2494:3:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2475:22:46",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50103,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2475:7:46",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50104,
                    "nodeType": "ArrayTypeName",
                    "src": "2475:9:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50108,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "2526:6:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2507:25:46",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50106,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2507:7:46",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50107,
                    "nodeType": "ArrayTypeName",
                    "src": "2507:9:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50110,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "2557:4:46",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2542:19:46",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 50109,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2542:5:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2417:150:46"
            },
            "returnParameters": {
              "id": 50114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50113,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50115,
                  "src": "2586:6:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 50112,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2586:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2585:8:46"
            },
            "scope": 50116,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 50080,
              "name": "IERC165",
              "nameLocations": [
                "357:7:46"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 52770,
              "src": "357:7:46"
            },
            "id": 50081,
            "nodeType": "InheritanceSpecifier",
            "src": "357:7:46"
          }
        ],
        "canonicalName": "IERC1155Receiver",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 50079,
          "nodeType": "StructuredDocumentation",
          "src": "208:118:46",
          "text": " @dev Interface that must be implemented by smart contracts in order to receive\n ERC-1155 token transfers."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          50116,
          52770
        ],
        "name": "IERC1155Receiver",
        "nameLocation": "337:16:46",
        "scope": 50117,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 46
} as const;