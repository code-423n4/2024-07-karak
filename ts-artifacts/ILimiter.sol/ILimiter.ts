export const ILimiter = {
  "abi": [
    {
      "type": "function",
      "name": "isLimitBreached",
      "inputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
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
      "name": "setGlobalUsdLimit",
      "inputs": [
        {
          "name": "_limit",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setUsdPerEth",
      "inputs": [
        {
          "name": "_usdPerEth",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
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
    "isLimitBreached(address[])": "60cfb204",
    "setGlobalUsdLimit(uint256)": "d0c59226",
    "setUsdPerEth(uint256)": "ca36695c"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"}],\"name\":\"isLimitBreached\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_limit\",\"type\":\"uint256\"}],\"name\":\"setGlobalUsdLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_usdPerEth\",\"type\":\"uint256\"}],\"name\":\"setUsdPerEth\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/ILimiter.sol\":\"ILimiter\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "isLimitBreached",
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
              "internalType": "uint256",
              "name": "_limit",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGlobalUsdLimit"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_usdPerEth",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUsdPerEth"
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
        "src/interfaces/ILimiter.sol": "ILimiter"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol": {
        "keccak256": "0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d",
        "urls": [
          "bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205",
          "dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc",
        "urls": [
          "bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892",
          "dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVault.sol": {
        "keccak256": "0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436",
        "urls": [
          "bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693",
          "dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVaultSupervisor.sol": {
        "keccak256": "0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a",
        "urls": [
          "bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4",
          "dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/interfaces/ILimiter.sol",
    "id": 63121,
    "exportedSymbols": {
      "ILimiter": [
        63120
      ],
      "IVault": [
        63271
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:266:93",
    "nodes": [
      {
        "id": 63099,
        "nodeType": "PragmaDirective",
        "src": "51:24:93",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63100,
        "nodeType": "ImportDirective",
        "src": "77:22:93",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63121,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63120,
        "nodeType": "ContractDefinition",
        "src": "101:215:93",
        "nodes": [
          {
            "id": 63109,
            "nodeType": "FunctionDefinition",
            "src": "126:75:93",
            "nodes": [],
            "functionSelector": "60cfb204",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isLimitBreached",
            "nameLocation": "135:15:93",
            "parameters": {
              "id": 63105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63104,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "169:6:93",
                  "nodeType": "VariableDeclaration",
                  "scope": 63109,
                  "src": "151:24:93",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63102,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63101,
                        "name": "IVault",
                        "nameLocations": [
                          "151:6:93"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "151:6:93"
                      },
                      "referencedDeclaration": 63271,
                      "src": "151:6:93",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 63103,
                    "nodeType": "ArrayTypeName",
                    "src": "151:8:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "150:26:93"
            },
            "returnParameters": {
              "id": 63108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63107,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63109,
                  "src": "195:4:93",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63106,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "195:4:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "194:6:93"
            },
            "scope": 63120,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63114,
            "nodeType": "FunctionDefinition",
            "src": "206:52:93",
            "nodes": [],
            "functionSelector": "d0c59226",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setGlobalUsdLimit",
            "nameLocation": "215:17:93",
            "parameters": {
              "id": 63112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63111,
                  "mutability": "mutable",
                  "name": "_limit",
                  "nameLocation": "241:6:93",
                  "nodeType": "VariableDeclaration",
                  "scope": 63114,
                  "src": "233:14:93",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63110,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "233:7:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "232:16:93"
            },
            "returnParameters": {
              "id": 63113,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "257:0:93"
            },
            "scope": 63120,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63119,
            "nodeType": "FunctionDefinition",
            "src": "263:51:93",
            "nodes": [],
            "functionSelector": "ca36695c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setUsdPerEth",
            "nameLocation": "272:12:93",
            "parameters": {
              "id": 63117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63116,
                  "mutability": "mutable",
                  "name": "_usdPerEth",
                  "nameLocation": "293:10:93",
                  "nodeType": "VariableDeclaration",
                  "scope": 63119,
                  "src": "285:18:93",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "285:7:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "284:20:93"
            },
            "returnParameters": {
              "id": 63118,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:0:93"
            },
            "scope": 63120,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ILimiter",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63120
        ],
        "name": "ILimiter",
        "nameLocation": "111:8:93",
        "scope": 63121,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 93
} as const;