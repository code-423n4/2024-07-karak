export const IERC20 = {
  "abi": [
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
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
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets a `value` amount of tokens as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the value of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the value of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]}},\"version\":1}",
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
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
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
          "allowance(address,address)": {
            "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
          },
          "approve(address,uint256)": {
            "details": "Sets a `value` amount of tokens as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
          },
          "balanceOf(address)": {
            "details": "Returns the value of tokens owned by `account`."
          },
          "totalSupply()": {
            "details": "Returns the value of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Moves a `value` amount of tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
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
        "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": "IERC20"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
    "id": 50791,
    "exportedSymbols": {
      "IERC20": [
        50790
      ]
    },
    "nodeType": "SourceUnit",
    "src": "106:2673:49",
    "nodes": [
      {
        "id": 50714,
        "nodeType": "PragmaDirective",
        "src": "106:24:49",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50790,
        "nodeType": "ContractDefinition",
        "src": "203:2575:49",
        "nodes": [
          {
            "id": 50724,
            "nodeType": "EventDefinition",
            "src": "389:72:49",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 50716,
              "nodeType": "StructuredDocumentation",
              "src": "226:158:49",
              "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
            },
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "395:8:49",
            "parameters": {
              "id": 50723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50718,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "420:4:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50724,
                  "src": "404:20:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:7:49",
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
                  "id": 50720,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "442:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50724,
                  "src": "426:18:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:49",
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
                  "id": 50722,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "454:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50724,
                  "src": "446:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "446:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "403:57:49"
            }
          },
          {
            "id": 50733,
            "nodeType": "EventDefinition",
            "src": "620:78:49",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 50725,
              "nodeType": "StructuredDocumentation",
              "src": "467:148:49",
              "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
            },
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "626:8:49",
            "parameters": {
              "id": 50732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50727,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "651:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50733,
                  "src": "635:21:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "635:7:49",
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
                  "id": 50729,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "674:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50733,
                  "src": "658:23:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:49",
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
                  "id": 50731,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "691:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50733,
                  "src": "683:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "634:63:49"
            }
          },
          {
            "id": 50739,
            "nodeType": "FunctionDefinition",
            "src": "774:55:49",
            "nodes": [],
            "documentation": {
              "id": 50734,
              "nodeType": "StructuredDocumentation",
              "src": "704:65:49",
              "text": " @dev Returns the value of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "783:11:49",
            "parameters": {
              "id": 50735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "794:2:49"
            },
            "returnParameters": {
              "id": 50738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50737,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50739,
                  "src": "820:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "819:9:49"
            },
            "scope": 50790,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50747,
            "nodeType": "FunctionDefinition",
            "src": "911:68:49",
            "nodes": [],
            "documentation": {
              "id": 50740,
              "nodeType": "StructuredDocumentation",
              "src": "835:71:49",
              "text": " @dev Returns the value of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "920:9:49",
            "parameters": {
              "id": 50743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50742,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "938:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50747,
                  "src": "930:15:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:17:49"
            },
            "returnParameters": {
              "id": 50746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50745,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50747,
                  "src": "970:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:9:49"
            },
            "scope": 50790,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50757,
            "nodeType": "FunctionDefinition",
            "src": "1203:69:49",
            "nodes": [],
            "documentation": {
              "id": 50748,
              "nodeType": "StructuredDocumentation",
              "src": "985:213:49",
              "text": " @dev Moves a `value` amount of tokens from the caller's account to `to`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "1212:8:49",
            "parameters": {
              "id": 50753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50750,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1229:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50757,
                  "src": "1221:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1221:7:49",
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
                  "id": 50752,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1241:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50757,
                  "src": "1233:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1233:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1220:27:49"
            },
            "returnParameters": {
              "id": 50756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50755,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50757,
                  "src": "1266:4:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50754,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1266:4:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1265:6:49"
            },
            "scope": 50790,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50767,
            "nodeType": "FunctionDefinition",
            "src": "1547:83:49",
            "nodes": [],
            "documentation": {
              "id": 50758,
              "nodeType": "StructuredDocumentation",
              "src": "1278:264:49",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1556:9:49",
            "parameters": {
              "id": 50763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50760,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1574:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50767,
                  "src": "1566:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:7:49",
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
                  "id": 50762,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1589:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50767,
                  "src": "1581:15:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1581:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1565:32:49"
            },
            "returnParameters": {
              "id": 50766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50765,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50767,
                  "src": "1621:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1621:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1620:9:49"
            },
            "scope": 50790,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50777,
            "nodeType": "FunctionDefinition",
            "src": "2308:73:49",
            "nodes": [],
            "documentation": {
              "id": 50768,
              "nodeType": "StructuredDocumentation",
              "src": "1636:667:49",
              "text": " @dev Sets a `value` amount of tokens as the allowance of `spender` over the\n caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "2317:7:49",
            "parameters": {
              "id": 50773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50770,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2333:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50777,
                  "src": "2325:15:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50769,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2325:7:49",
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
                  "id": 50772,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2350:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50777,
                  "src": "2342:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50771,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2324:32:49"
            },
            "returnParameters": {
              "id": 50776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50775,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50777,
                  "src": "2375:4:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50774,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2375:4:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2374:6:49"
            },
            "scope": 50790,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 50789,
            "nodeType": "FunctionDefinition",
            "src": "2689:87:49",
            "nodes": [],
            "documentation": {
              "id": 50778,
              "nodeType": "StructuredDocumentation",
              "src": "2387:297:49",
              "text": " @dev Moves a `value` amount of tokens from `from` to `to` using the\n allowance mechanism. `value` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2698:12:49",
            "parameters": {
              "id": 50785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50780,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2719:4:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50789,
                  "src": "2711:12:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50779,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2711:7:49",
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
                  "id": 50782,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2733:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50789,
                  "src": "2725:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2725:7:49",
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
                  "id": 50784,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2745:5:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 50789,
                  "src": "2737:13:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2710:41:49"
            },
            "returnParameters": {
              "id": 50788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50787,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50789,
                  "src": "2770:4:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50786,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2770:4:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2769:6:49"
            },
            "scope": 50790,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC20",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 50715,
          "nodeType": "StructuredDocumentation",
          "src": "132:70:49",
          "text": " @dev Interface of the ERC20 standard as defined in the EIP."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          50790
        ],
        "name": "IERC20",
        "nameLocation": "213:6:49",
        "scope": 50791,
        "usedErrors": [],
        "usedEvents": [
          50724,
          50733
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 49
} as const;