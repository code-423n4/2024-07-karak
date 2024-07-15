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
          "name": "amount",
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
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
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
          "name": "amount",
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
          "name": "amount",
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
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.This includes the optional name, symbol, and decimals metadata.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set, where `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`).\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Be aware of front-running risks: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Returns the remaining number of tokens that `spender` is allowed to spend on behalf of `owner`\"},\"approve(address,uint256)\":{\"notice\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.\"},\"balanceOf(address)\":{\"notice\":\"Returns the amount of tokens owned by `account`.\"},\"decimals()\":{\"notice\":\"Returns the decimals places of the token.\"},\"name()\":{\"notice\":\"Returns the name of the token.\"},\"symbol()\":{\"notice\":\"Returns the symbol of the token.\"},\"totalSupply()\":{\"notice\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"notice\":\"Moves `amount` tokens from the caller's account to `to`.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"lib/forge-std/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7\",\"dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9\"]}},\"version\":1}",
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
              "name": "amount",
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
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
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
              "name": "amount",
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
              "name": "amount",
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
          "approve(address,uint256)": {
            "details": "Be aware of front-running risks: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729"
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "allowance(address,address)": {
            "notice": "Returns the remaining number of tokens that `spender` is allowed to spend on behalf of `owner`"
          },
          "approve(address,uint256)": {
            "notice": "Sets `amount` as the allowance of `spender` over the caller's tokens."
          },
          "balanceOf(address)": {
            "notice": "Returns the amount of tokens owned by `account`."
          },
          "decimals()": {
            "notice": "Returns the decimals places of the token."
          },
          "name()": {
            "notice": "Returns the name of the token."
          },
          "symbol()": {
            "notice": "Returns the symbol of the token."
          },
          "totalSupply()": {
            "notice": "Returns the amount of tokens in existence."
          },
          "transfer(address,uint256)": {
            "notice": "Moves `amount` tokens from the caller's account to `to`."
          },
          "transferFrom(address,address,uint256)": {
            "notice": "Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance."
          }
        },
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
        "lib/forge-std/src/interfaces/IERC20.sol": "IERC20"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "lib/forge-std/src/interfaces/IERC20.sol": {
        "keccak256": "0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947",
        "urls": [
          "bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7",
          "dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/interfaces/IERC20.sol",
    "id": 32006,
    "exportedSymbols": {
      "IERC20": [
        32005
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2035:18",
    "nodes": [
      {
        "id": 31911,
        "nodeType": "PragmaDirective",
        "src": "32:24:18",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2"
        ]
      },
      {
        "id": 32005,
        "nodeType": "ContractDefinition",
        "src": "195:1871:18",
        "nodes": [
          {
            "id": 31921,
            "nodeType": "EventDefinition",
            "src": "314:72:18",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 31913,
              "nodeType": "StructuredDocumentation",
              "src": "218:91:18",
              "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to another (`to`)."
            },
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "320:8:18",
            "parameters": {
              "id": 31920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31915,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "345:4:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31921,
                  "src": "329:20:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:7:18",
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
                  "id": 31917,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "367:2:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31921,
                  "src": "351:18:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:7:18",
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
                  "id": 31919,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "379:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31921,
                  "src": "371:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31918,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "328:57:18"
            }
          },
          {
            "id": 31930,
            "nodeType": "EventDefinition",
            "src": "514:78:18",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 31922,
              "nodeType": "StructuredDocumentation",
              "src": "392:117:18",
              "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set, where `value`\n is the new allowance."
            },
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "520:8:18",
            "parameters": {
              "id": 31929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31924,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "545:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31930,
                  "src": "529:21:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31923,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "529:7:18",
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
                  "id": 31926,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "568:7:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31930,
                  "src": "552:23:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "552:7:18",
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
                  "id": 31928,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "585:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31930,
                  "src": "577:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "577:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "528:63:18"
            }
          },
          {
            "id": 31936,
            "nodeType": "FunctionDefinition",
            "src": "657:55:18",
            "nodes": [],
            "documentation": {
              "id": 31931,
              "nodeType": "StructuredDocumentation",
              "src": "598:54:18",
              "text": "@notice Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "666:11:18",
            "parameters": {
              "id": 31932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "677:2:18"
            },
            "returnParameters": {
              "id": 31935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31934,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31936,
                  "src": "703:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31933,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "702:9:18"
            },
            "scope": 32005,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31944,
            "nodeType": "FunctionDefinition",
            "src": "783:68:18",
            "nodes": [],
            "documentation": {
              "id": 31937,
              "nodeType": "StructuredDocumentation",
              "src": "718:60:18",
              "text": "@notice Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "792:9:18",
            "parameters": {
              "id": 31940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31939,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "810:7:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31944,
                  "src": "802:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "802:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "801:17:18"
            },
            "returnParameters": {
              "id": 31943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31942,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31944,
                  "src": "842:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "842:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "841:9:18"
            },
            "scope": 32005,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31954,
            "nodeType": "FunctionDefinition",
            "src": "930:70:18",
            "nodes": [],
            "documentation": {
              "id": 31945,
              "nodeType": "StructuredDocumentation",
              "src": "857:68:18",
              "text": "@notice Moves `amount` tokens from the caller's account to `to`."
            },
            "functionSelector": "a9059cbb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "939:8:18",
            "parameters": {
              "id": 31950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31947,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "956:2:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31954,
                  "src": "948:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "948:7:18",
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
                  "id": 31949,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "968:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31954,
                  "src": "960:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31948,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "960:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "947:28:18"
            },
            "returnParameters": {
              "id": 31953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31952,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31954,
                  "src": "994:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31951,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "994:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "993:6:18"
            },
            "scope": 32005,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31964,
            "nodeType": "FunctionDefinition",
            "src": "1125:83:18",
            "nodes": [],
            "documentation": {
              "id": 31955,
              "nodeType": "StructuredDocumentation",
              "src": "1006:114:18",
              "text": "@notice Returns the remaining number of tokens that `spender` is allowed\n to spend on behalf of `owner`"
            },
            "functionSelector": "dd62ed3e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1134:9:18",
            "parameters": {
              "id": 31960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31957,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1152:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31964,
                  "src": "1144:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1144:7:18",
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
                  "id": 31959,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1167:7:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31964,
                  "src": "1159:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31958,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1159:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1143:32:18"
            },
            "returnParameters": {
              "id": 31963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31962,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31964,
                  "src": "1199:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1199:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1198:9:18"
            },
            "scope": 32005,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31974,
            "nodeType": "FunctionDefinition",
            "src": "1412:74:18",
            "nodes": [],
            "documentation": {
              "id": 31965,
              "nodeType": "StructuredDocumentation",
              "src": "1214:193:18",
              "text": "@notice Sets `amount` as the allowance of `spender` over the caller's tokens.\n @dev Be aware of front-running risks: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729"
            },
            "functionSelector": "095ea7b3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "1421:7:18",
            "parameters": {
              "id": 31970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31967,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1437:7:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31974,
                  "src": "1429:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1429:7:18",
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
                  "id": 31969,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1454:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31974,
                  "src": "1446:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1428:33:18"
            },
            "returnParameters": {
              "id": 31973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31972,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31974,
                  "src": "1480:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31971,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1480:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1479:6:18"
            },
            "scope": 32005,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31986,
            "nodeType": "FunctionDefinition",
            "src": "1644:88:18",
            "nodes": [],
            "documentation": {
              "id": 31975,
              "nodeType": "StructuredDocumentation",
              "src": "1492:147:18",
              "text": "@notice Moves `amount` tokens from `from` to `to` using the allowance mechanism.\n `amount` is then deducted from the caller's allowance."
            },
            "functionSelector": "23b872dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "1653:12:18",
            "parameters": {
              "id": 31982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31977,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1674:4:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "1666:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1666:7:18",
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
                  "id": 31979,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1688:2:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "1680:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1680:7:18",
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
                  "id": 31981,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1700:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "1692:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1692:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1665:42:18"
            },
            "returnParameters": {
              "id": 31985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31984,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31986,
                  "src": "1726:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31983,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1726:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1725:6:18"
            },
            "scope": 32005,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31992,
            "nodeType": "FunctionDefinition",
            "src": "1785:54:18",
            "nodes": [],
            "documentation": {
              "id": 31987,
              "nodeType": "StructuredDocumentation",
              "src": "1738:42:18",
              "text": "@notice Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "1794:4:18",
            "parameters": {
              "id": 31988,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1798:2:18"
            },
            "returnParameters": {
              "id": 31991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31992,
                  "src": "1824:13:18",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31989,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1824:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1823:15:18"
            },
            "scope": 32005,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 31998,
            "nodeType": "FunctionDefinition",
            "src": "1894:56:18",
            "nodes": [],
            "documentation": {
              "id": 31993,
              "nodeType": "StructuredDocumentation",
              "src": "1845:44:18",
              "text": "@notice Returns the symbol of the token."
            },
            "functionSelector": "95d89b41",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "1903:6:18",
            "parameters": {
              "id": 31994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1909:2:18"
            },
            "returnParameters": {
              "id": 31997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31996,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31998,
                  "src": "1935:13:18",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31995,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1935:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1934:15:18"
            },
            "scope": 32005,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32004,
            "nodeType": "FunctionDefinition",
            "src": "2014:50:18",
            "nodes": [],
            "documentation": {
              "id": 31999,
              "nodeType": "StructuredDocumentation",
              "src": "1956:53:18",
              "text": "@notice Returns the decimals places of the token."
            },
            "functionSelector": "313ce567",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "2023:8:18",
            "parameters": {
              "id": 32000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2031:2:18"
            },
            "returnParameters": {
              "id": 32003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32002,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32004,
                  "src": "2057:5:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 32001,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2057:5:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2056:7:18"
            },
            "scope": 32005,
            "stateMutability": "view",
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
          "id": 31912,
          "nodeType": "StructuredDocumentation",
          "src": "58:137:18",
          "text": "@dev Interface of the ERC20 standard as defined in the EIP.\n @dev This includes the optional name, symbol, and decimals metadata."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          32005
        ],
        "name": "IERC20",
        "nameLocation": "205:6:18",
        "scope": 32006,
        "usedErrors": [],
        "usedEvents": [
          31921,
          31930
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 18
} as const;