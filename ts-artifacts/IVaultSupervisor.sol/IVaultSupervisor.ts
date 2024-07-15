export const IVaultSupervisor = {
  "abi": [
    {
      "type": "function",
      "name": "SIGNED_DEPOSIT_TYPEHASH",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deployVault",
      "inputs": [
        {
          "name": "depositToken",
          "type": "address",
          "internalType": "contract IERC20"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "symbol",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "assetType",
          "type": "uint8",
          "internalType": "enum IVault.AssetType"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IVault"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
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
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "depositWithSignature",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "permit",
          "type": "tuple",
          "internalType": "struct IVaultSupervisor.Signature",
          "components": [
            {
              "name": "v",
              "type": "uint8",
              "internalType": "uint8"
            },
            {
              "name": "r",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "s",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "name": "vaultAllowance",
          "type": "tuple",
          "internalType": "struct IVaultSupervisor.Signature",
          "components": [
            {
              "name": "v",
              "type": "uint8",
              "internalType": "uint8"
            },
            {
              "name": "r",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "s",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getDeposits",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
        },
        {
          "name": "tokens",
          "type": "address[]",
          "internalType": "contract IERC20[]"
        },
        {
          "name": "assets",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "shares",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserNonce",
      "inputs": [
        {
          "name": "user",
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
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "name": "_delegationSupervisor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_vaultImpl",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_limiter",
          "type": "address",
          "internalType": "contract ILimiter"
        },
        {
          "name": "_manager",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "redeemShares",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "removeShares",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "runAdminOperation",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "fn",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
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
    "SIGNED_DEPOSIT_TYPEHASH()": "e4af8b22",
    "deployVault(address,string,string,uint8)": "f0edf6aa",
    "deposit(address,uint256)": "47e7ef24",
    "depositWithSignature(address,address,uint256,uint256,(uint8,bytes32,bytes32),(uint8,bytes32,bytes32))": "6ff09141",
    "getDeposits(address)": "94f649dd",
    "getUserNonce(address)": "6834e3a8",
    "initialize(address,address,address,address)": "f8c8765e",
    "redeemShares(address,address,uint256)": "51ffb74a",
    "removeShares(address,address,uint256)": "8c80d4e5",
    "runAdminOperation(address,bytes)": "c1f09e30"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"SIGNED_DEPOSIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"depositToken\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"enum IVault.AssetType\",\"name\":\"assetType\",\"type\":\"uint8\"}],\"name\":\"deployVault\",\"outputs\":[{\"internalType\":\"contract IVault\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"permit\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct IVaultSupervisor.Signature\",\"name\":\"vaultAllowance\",\"type\":\"tuple\"}],\"name\":\"depositWithSignature\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"getDeposits\",\"outputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IERC20[]\",\"name\":\"tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"assets\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getUserNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_vaultImpl\",\"type\":\"address\"},{\"internalType\":\"contract ILimiter\",\"name\":\"_limiter\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_manager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"redeemShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"removeShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"fn\",\"type\":\"bytes\"}],\"name\":\"runAdminOperation\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/IVaultSupervisor.sol\":\"IVaultSupervisor\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "SIGNED_DEPOSIT_TYPEHASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "depositToken",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "enum IVault.AssetType",
              "name": "assetType",
              "type": "uint8"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deployVault",
          "outputs": [
            {
              "internalType": "contract IVault",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IVault",
              "name": "vault",
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
          "name": "deposit",
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
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "struct IVaultSupervisor.Signature",
              "name": "permit",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ]
            },
            {
              "internalType": "struct IVaultSupervisor.Signature",
              "name": "vaultAllowance",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "depositWithSignature",
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
              "name": "staker",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeposits",
          "outputs": [
            {
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            },
            {
              "internalType": "contract IERC20[]",
              "name": "tokens",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "assets",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "shares",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getUserNonce",
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
              "name": "_delegationSupervisor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_vaultImpl",
              "type": "address"
            },
            {
              "internalType": "contract ILimiter",
              "name": "_limiter",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_manager",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "staker",
              "type": "address"
            },
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemShares"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "staker",
              "type": "address"
            },
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeShares"
        },
        {
          "inputs": [
            {
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "fn",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "runAdminOperation",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ]
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
        "src/interfaces/IVaultSupervisor.sol": "IVaultSupervisor"
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
    "absolutePath": "src/interfaces/IVaultSupervisor.sol",
    "id": 63405,
    "exportedSymbols": {
      "IERC20": [
        50790
      ],
      "ILimiter": [
        63120
      ],
      "IVault": [
        63271
      ],
      "IVaultSupervisor": [
        63404
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:1453:96",
    "nodes": [
      {
        "id": 63273,
        "nodeType": "PragmaDirective",
        "src": "51:24:96",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63275,
        "nodeType": "ImportDirective",
        "src": "77:70:96",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63405,
        "sourceUnit": 50791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63274,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "85:6:96",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63276,
        "nodeType": "ImportDirective",
        "src": "149:22:96",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63405,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63277,
        "nodeType": "ImportDirective",
        "src": "172:24:96",
        "nodes": [],
        "absolutePath": "src/interfaces/ILimiter.sol",
        "file": "./ILimiter.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63405,
        "sourceUnit": 63121,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63404,
        "nodeType": "ContractDefinition",
        "src": "198:1305:96",
        "nodes": [
          {
            "id": 63284,
            "nodeType": "StructDefinition",
            "src": "231:79:96",
            "nodes": [],
            "canonicalName": "IVaultSupervisor.Signature",
            "members": [
              {
                "constant": false,
                "id": 63279,
                "mutability": "mutable",
                "name": "v",
                "nameLocation": "264:1:96",
                "nodeType": "VariableDeclaration",
                "scope": 63284,
                "src": "258:7:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 63278,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "258:5:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 63281,
                "mutability": "mutable",
                "name": "r",
                "nameLocation": "283:1:96",
                "nodeType": "VariableDeclaration",
                "scope": 63284,
                "src": "275:9:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 63280,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:7:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 63283,
                "mutability": "mutable",
                "name": "s",
                "nameLocation": "302:1:96",
                "nodeType": "VariableDeclaration",
                "scope": 63284,
                "src": "294:9:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 63282,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "294:7:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Signature",
            "nameLocation": "238:9:96",
            "scope": 63404,
            "visibility": "public"
          },
          {
            "id": 63303,
            "nodeType": "FunctionDefinition",
            "src": "316:182:96",
            "nodes": [],
            "functionSelector": "94f649dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeposits",
            "nameLocation": "325:11:96",
            "parameters": {
              "id": 63287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63286,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "345:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63303,
                  "src": "337:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63285,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "336:16:96"
            },
            "returnParameters": {
              "id": 63302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63291,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "416:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63303,
                  "src": "400:22:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63289,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63288,
                        "name": "IVault",
                        "nameLocations": [
                          "400:6:96"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "400:6:96"
                      },
                      "referencedDeclaration": 63271,
                      "src": "400:6:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 63290,
                    "nodeType": "ArrayTypeName",
                    "src": "400:8:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63295,
                  "mutability": "mutable",
                  "name": "tokens",
                  "nameLocation": "440:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63303,
                  "src": "424:22:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                    "typeString": "contract IERC20[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63293,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63292,
                        "name": "IERC20",
                        "nameLocations": [
                          "424:6:96"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 50790,
                        "src": "424:6:96"
                      },
                      "referencedDeclaration": 50790,
                      "src": "424:6:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$50790",
                        "typeString": "contract IERC20"
                      }
                    },
                    "id": 63294,
                    "nodeType": "ArrayTypeName",
                    "src": "424:8:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                      "typeString": "contract IERC20[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63298,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "465:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63303,
                  "src": "448:23:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63296,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "448:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63297,
                    "nodeType": "ArrayTypeName",
                    "src": "448:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63301,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "490:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63303,
                  "src": "473:23:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63299,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "473:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63300,
                    "nodeType": "ArrayTypeName",
                    "src": "473:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "399:98:96"
            },
            "scope": 63404,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63315,
            "nodeType": "FunctionDefinition",
            "src": "503:125:96",
            "nodes": [],
            "functionSelector": "f8c8765e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "512:10:96",
            "parameters": {
              "id": 63313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63305,
                  "mutability": "mutable",
                  "name": "_delegationSupervisor",
                  "nameLocation": "531:21:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63315,
                  "src": "523:29:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63304,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "523:7:96",
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
                  "id": 63307,
                  "mutability": "mutable",
                  "name": "_vaultImpl",
                  "nameLocation": "562:10:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63315,
                  "src": "554:18:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63306,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:7:96",
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
                  "id": 63310,
                  "mutability": "mutable",
                  "name": "_limiter",
                  "nameLocation": "583:8:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63315,
                  "src": "574:17:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ILimiter_$63120",
                    "typeString": "contract ILimiter"
                  },
                  "typeName": {
                    "id": 63309,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63308,
                      "name": "ILimiter",
                      "nameLocations": [
                        "574:8:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63120,
                      "src": "574:8:96"
                    },
                    "referencedDeclaration": 63120,
                    "src": "574:8:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ILimiter_$63120",
                      "typeString": "contract ILimiter"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63312,
                  "mutability": "mutable",
                  "name": "_manager",
                  "nameLocation": "601:8:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63315,
                  "src": "593:16:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "522:88:96"
            },
            "returnParameters": {
              "id": 63314,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "627:0:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63325,
            "nodeType": "FunctionDefinition",
            "src": "633:77:96",
            "nodes": [],
            "functionSelector": "51ffb74a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeemShares",
            "nameLocation": "642:12:96",
            "parameters": {
              "id": 63323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63317,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "663:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63325,
                  "src": "655:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "655:7:96",
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
                  "id": 63320,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "678:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63325,
                  "src": "671:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63319,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63318,
                      "name": "IVault",
                      "nameLocations": [
                        "671:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "671:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "671:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63322,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "693:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63325,
                  "src": "685:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "654:46:96"
            },
            "returnParameters": {
              "id": 63324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "709:0:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63335,
            "nodeType": "FunctionDefinition",
            "src": "715:77:96",
            "nodes": [],
            "functionSelector": "8c80d4e5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeShares",
            "nameLocation": "724:12:96",
            "parameters": {
              "id": 63333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63327,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "745:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63335,
                  "src": "737:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63326,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:96",
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
                  "id": 63330,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "760:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63335,
                  "src": "753:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63329,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63328,
                      "name": "IVault",
                      "nameLocations": [
                        "753:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "753:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "753:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63332,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "775:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63335,
                  "src": "767:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "736:46:96"
            },
            "returnParameters": {
              "id": 63334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "791:0:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63345,
            "nodeType": "FunctionDefinition",
            "src": "797:74:96",
            "nodes": [],
            "functionSelector": "47e7ef24",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "806:7:96",
            "parameters": {
              "id": 63341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63338,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "821:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63345,
                  "src": "814:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63337,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63336,
                      "name": "IVault",
                      "nameLocations": [
                        "814:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "814:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "814:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63340,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "836:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63345,
                  "src": "828:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63339,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "828:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "813:30:96"
            },
            "returnParameters": {
              "id": 63344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63343,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63345,
                  "src": "862:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "861:9:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63361,
            "nodeType": "FunctionDefinition",
            "src": "876:154:96",
            "nodes": [],
            "functionSelector": "f0edf6aa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deployVault",
            "nameLocation": "885:11:96",
            "parameters": {
              "id": 63356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63348,
                  "mutability": "mutable",
                  "name": "depositToken",
                  "nameLocation": "904:12:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63361,
                  "src": "897:19:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$50790",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 63347,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63346,
                      "name": "IERC20",
                      "nameLocations": [
                        "897:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 50790,
                      "src": "897:6:96"
                    },
                    "referencedDeclaration": 50790,
                    "src": "897:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63350,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "932:4:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63361,
                  "src": "918:18:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63349,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "918:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63352,
                  "mutability": "mutable",
                  "name": "symbol",
                  "nameLocation": "952:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63361,
                  "src": "938:20:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63351,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63355,
                  "mutability": "mutable",
                  "name": "assetType",
                  "nameLocation": "977:9:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63361,
                  "src": "960:26:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetType_$63196",
                    "typeString": "enum IVault.AssetType"
                  },
                  "typeName": {
                    "id": 63354,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63353,
                      "name": "IVault.AssetType",
                      "nameLocations": [
                        "960:6:96",
                        "967:9:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63196,
                      "src": "960:16:96"
                    },
                    "referencedDeclaration": 63196,
                    "src": "960:16:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:91:96"
            },
            "returnParameters": {
              "id": 63360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63359,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63361,
                  "src": "1022:6:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63358,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63357,
                      "name": "IVault",
                      "nameLocations": [
                        "1022:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "1022:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "1022:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1021:8:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63371,
            "nodeType": "FunctionDefinition",
            "src": "1035:92:96",
            "nodes": [],
            "functionSelector": "c1f09e30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "runAdminOperation",
            "nameLocation": "1044:17:96",
            "parameters": {
              "id": 63367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63364,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "1069:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63371,
                  "src": "1062:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63363,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63362,
                      "name": "IVault",
                      "nameLocations": [
                        "1062:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "1062:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "1062:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63366,
                  "mutability": "mutable",
                  "name": "fn",
                  "nameLocation": "1091:2:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63371,
                  "src": "1076:17:96",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 63365,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1076:5:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1061:33:96"
            },
            "returnParameters": {
              "id": 63370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63369,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63371,
                  "src": "1113:12:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 63368,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1113:5:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1112:14:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63391,
            "nodeType": "FunctionDefinition",
            "src": "1132:234:96",
            "nodes": [],
            "functionSelector": "6ff09141",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "depositWithSignature",
            "nameLocation": "1141:20:96",
            "parameters": {
              "id": 63387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63374,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "1178:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1171:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63373,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63372,
                      "name": "IVault",
                      "nameLocations": [
                        "1171:6:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "1171:6:96"
                    },
                    "referencedDeclaration": 63271,
                    "src": "1171:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63376,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1201:4:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1193:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63375,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1193:7:96",
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
                  "id": 63378,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1223:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1215:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1215:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63380,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1246:8:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1238:16:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63379,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63383,
                  "mutability": "mutable",
                  "name": "permit",
                  "nameLocation": "1283:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1264:25:96",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                    "typeString": "struct IVaultSupervisor.Signature"
                  },
                  "typeName": {
                    "id": 63382,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63381,
                      "name": "Signature",
                      "nameLocations": [
                        "1264:9:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63284,
                      "src": "1264:9:96"
                    },
                    "referencedDeclaration": 63284,
                    "src": "1264:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$63284_storage_ptr",
                      "typeString": "struct IVaultSupervisor.Signature"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63386,
                  "mutability": "mutable",
                  "name": "vaultAllowance",
                  "nameLocation": "1318:14:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1299:33:96",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Signature_$63284_calldata_ptr",
                    "typeString": "struct IVaultSupervisor.Signature"
                  },
                  "typeName": {
                    "id": 63385,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63384,
                      "name": "Signature",
                      "nameLocations": [
                        "1299:9:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63284,
                      "src": "1299:9:96"
                    },
                    "referencedDeclaration": 63284,
                    "src": "1299:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$63284_storage_ptr",
                      "typeString": "struct IVaultSupervisor.Signature"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1161:177:96"
            },
            "returnParameters": {
              "id": 63390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63389,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63391,
                  "src": "1357:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1357:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1356:9:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63396,
            "nodeType": "FunctionDefinition",
            "src": "1371:62:96",
            "nodes": [],
            "functionSelector": "e4af8b22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "SIGNED_DEPOSIT_TYPEHASH",
            "nameLocation": "1380:23:96",
            "parameters": {
              "id": 63392,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1403:2:96"
            },
            "returnParameters": {
              "id": 63395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63394,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63396,
                  "src": "1424:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63393,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1424:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1423:9:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63403,
            "nodeType": "FunctionDefinition",
            "src": "1438:63:96",
            "nodes": [],
            "functionSelector": "6834e3a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getUserNonce",
            "nameLocation": "1447:12:96",
            "parameters": {
              "id": 63399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63398,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1468:4:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63403,
                  "src": "1460:12:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63397,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1460:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1459:14:96"
            },
            "returnParameters": {
              "id": 63402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63401,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63403,
                  "src": "1492:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1492:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1491:9:96"
            },
            "scope": 63404,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IVaultSupervisor",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63404
        ],
        "name": "IVaultSupervisor",
        "nameLocation": "208:16:96",
        "scope": 63405,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 96
} as const;