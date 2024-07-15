export const IQuerier = {
  "abi": [
    {
      "type": "function",
      "name": "getDeposits",
      "inputs": [
        {
          "name": "stakers",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct IQuerier.DepositResult[]",
          "components": [
            {
              "name": "user",
              "type": "address",
              "internalType": "address"
            },
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
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getWithdraws",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "allWithdrawals",
          "type": "tuple[]",
          "internalType": "struct Withdraw.QueuedWithdrawal[]",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
        },
        {
          "name": "isWithdrawPending",
          "type": "bool[]",
          "internalType": "bool[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setDelegationSupervisor",
      "inputs": [
        {
          "name": "_delegationSupervisor",
          "type": "address",
          "internalType": "contract IDelegationSupervisor"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setVaultSupervisor",
      "inputs": [
        {
          "name": "_vaultSupervisor",
          "type": "address",
          "internalType": "contract IVaultSupervisor"
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
    "getDeposits(address[])": "e85062b9",
    "getWithdraws(address)": "b9c7f52e",
    "setDelegationSupervisor(address)": "73628517",
    "setVaultSupervisor(address)": "fabeab93"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"stakers\",\"type\":\"address[]\"}],\"name\":\"getDeposits\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IERC20[]\",\"name\":\"tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"assets\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"}],\"internalType\":\"struct IQuerier.DepositResult[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"getWithdraws\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"allWithdrawals\",\"type\":\"tuple[]\"},{\"internalType\":\"bool[]\",\"name\":\"isWithdrawPending\",\"type\":\"bool[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IDelegationSupervisor\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"}],\"name\":\"setDelegationSupervisor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVaultSupervisor\",\"name\":\"_vaultSupervisor\",\"type\":\"address\"}],\"name\":\"setVaultSupervisor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/IQuerier.sol\":\"IQuerier\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IQuerier.sol\":{\"keccak256\":\"0x9c704385e92c18132bb6e027d6673c893f61464b735c5f4109a2e104186fa026\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://90a589bc01a5f55f2fc11e6014e8cf38a4d5c98165d8a9e9cfb7ead3d79df8c1\",\"dweb:/ipfs/Qmd8LVzd6o7rHZf4cqfKmYQWScxDfgWvvhxscfg6oSg8vZ\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
              "internalType": "address[]",
              "name": "stakers",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeposits",
          "outputs": [
            {
              "internalType": "struct IQuerier.DepositResult[]",
              "name": "",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
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
          "name": "getWithdraws",
          "outputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "allWithdrawals",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
            },
            {
              "internalType": "bool[]",
              "name": "isWithdrawPending",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IDelegationSupervisor",
              "name": "_delegationSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setDelegationSupervisor"
        },
        {
          "inputs": [
            {
              "internalType": "contract IVaultSupervisor",
              "name": "_vaultSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setVaultSupervisor"
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
        "src/interfaces/IQuerier.sol": "IQuerier"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
        ],
        "license": "MIT"
      },
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
      "node_modules/solady/src/auth/Ownable.sol": {
        "keccak256": "0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3",
        "urls": [
          "bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3",
          "dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/auth/OwnableRoles.sol": {
        "keccak256": "0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3",
        "urls": [
          "bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c",
          "dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L"
        ],
        "license": "MIT"
      },
      "src/entities/DelegationSupervisorLib.sol": {
        "keccak256": "0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc",
        "urls": [
          "bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1",
          "dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Staker.sol": {
        "keccak256": "0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33",
        "urls": [
          "bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f",
          "dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Withdraw.sol": {
        "keccak256": "0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc",
        "urls": [
          "bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653",
          "dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Constants.sol": {
        "keccak256": "0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86",
        "urls": [
          "bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c",
          "dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Errors.sol": {
        "keccak256": "0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27",
        "urls": [
          "bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915",
          "dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Events.sol": {
        "keccak256": "0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178",
        "urls": [
          "bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21",
          "dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IDelegationSupervisor.sol": {
        "keccak256": "0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a",
        "urls": [
          "bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79",
          "dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc",
        "urls": [
          "bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892",
          "dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IQuerier.sol": {
        "keccak256": "0x9c704385e92c18132bb6e027d6673c893f61464b735c5f4109a2e104186fa026",
        "urls": [
          "bzz-raw://90a589bc01a5f55f2fc11e6014e8cf38a4d5c98165d8a9e9cfb7ead3d79df8c1",
          "dweb:/ipfs/Qmd8LVzd6o7rHZf4cqfKmYQWScxDfgWvvhxscfg6oSg8vZ"
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
    "absolutePath": "src/interfaces/IQuerier.sol",
    "id": 63181,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "Constants": [
        62945
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "DelegationSupervisorLib": [
        62416
      ],
      "ExpiredSign": [
        62997
      ],
      "FinishedWithdrawal": [
        63031
      ],
      "IDelegationSupervisor": [
        63097
      ],
      "IERC20": [
        50790
      ],
      "IERC4626": [
        49199
      ],
      "ILimiter": [
        63120
      ],
      "IQuerier": [
        63180
      ],
      "IVault": [
        63271
      ],
      "IVaultSupervisor": [
        63404
      ],
      "InvalidInput": [
        62949
      ],
      "InvalidSignature": [
        62999
      ],
      "InvalidVaultAdminFunction": [
        62979
      ],
      "InvalidWithdrawalDelay": [
        62951
      ],
      "MaxStakerVault": [
        62967
      ],
      "MinWithdrawDelayNotPassed": [
        62961
      ],
      "NewVault": [
        63035
      ],
      "NoElementsInArray": [
        62989
      ],
      "NotDelegationSupervisor": [
        62971
      ],
      "NotEnoughShares": [
        62977
      ],
      "NotInitialized": [
        62981
      ],
      "NotPreviousNorCurrentDelegationSupervisor": [
        62973
      ],
      "NotStaker": [
        62957
      ],
      "NotSupervisor": [
        62985
      ],
      "NotVaultSupervisor": [
        62955
      ],
      "OwnableRoles": [
        55650
      ],
      "PermitFailed": [
        62995
      ],
      "RoleNotGranted": [
        62983
      ],
      "Staker": [
        62431
      ],
      "StartedWithdrawal": [
        63017
      ],
      "TokenNotEnabled": [
        62987
      ],
      "UnsupportedAsset": [
        63003
      ],
      "VaultNotAChildVault": [
        62969
      ],
      "VaultNotFound": [
        62975
      ],
      "Withdraw": [
        62913
      ],
      "WithdrawAlreadyCompleted": [
        62959
      ],
      "WithdrawerNotCaller": [
        62963
      ],
      "ZeroAddress": [
        62953
      ],
      "ZeroAmount": [
        62993
      ],
      "ZeroShares": [
        62965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:833:94",
    "nodes": [
      {
        "id": 63122,
        "nodeType": "PragmaDirective",
        "src": "51:24:94",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63124,
        "nodeType": "ImportDirective",
        "src": "77:69:94",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63181,
        "sourceUnit": 49030,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63123,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "85:6:94",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63126,
        "nodeType": "ImportDirective",
        "src": "147:50:94",
        "nodes": [],
        "absolutePath": "src/entities/Withdraw.sol",
        "file": "../entities/Withdraw.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63181,
        "sourceUnit": 62914,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63125,
              "name": "Withdraw",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62913,
              "src": "155:8:94",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63127,
        "nodeType": "ImportDirective",
        "src": "199:22:94",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63181,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63128,
        "nodeType": "ImportDirective",
        "src": "222:37:94",
        "nodes": [],
        "absolutePath": "src/interfaces/IDelegationSupervisor.sol",
        "file": "./IDelegationSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63181,
        "sourceUnit": 63098,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63180,
        "nodeType": "ContractDefinition",
        "src": "261:622:94",
        "nodes": [
          {
            "id": 63145,
            "nodeType": "StructDefinition",
            "src": "286:152:94",
            "nodes": [],
            "canonicalName": "IQuerier.DepositResult",
            "members": [
              {
                "constant": false,
                "id": 63130,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "325:4:94",
                "nodeType": "VariableDeclaration",
                "scope": 63145,
                "src": "317:12:94",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 63129,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "317:7:94",
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
                "id": 63134,
                "mutability": "mutable",
                "name": "vaults",
                "nameLocation": "348:6:94",
                "nodeType": "VariableDeclaration",
                "scope": 63145,
                "src": "339:15:94",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                  "typeString": "contract IVault[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 63132,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63131,
                      "name": "IVault",
                      "nameLocations": [
                        "339:6:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "339:6:94"
                    },
                    "referencedDeclaration": 63271,
                    "src": "339:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "id": 63133,
                  "nodeType": "ArrayTypeName",
                  "src": "339:8:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                    "typeString": "contract IVault[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 63138,
                "mutability": "mutable",
                "name": "tokens",
                "nameLocation": "373:6:94",
                "nodeType": "VariableDeclaration",
                "scope": 63145,
                "src": "364:15:94",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                  "typeString": "contract IERC20[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 63136,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63135,
                      "name": "IERC20",
                      "nameLocations": [
                        "364:6:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 50790,
                      "src": "364:6:94"
                    },
                    "referencedDeclaration": 50790,
                    "src": "364:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$50790",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 63137,
                  "nodeType": "ArrayTypeName",
                  "src": "364:8:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                    "typeString": "contract IERC20[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 63141,
                "mutability": "mutable",
                "name": "assets",
                "nameLocation": "399:6:94",
                "nodeType": "VariableDeclaration",
                "scope": 63145,
                "src": "389:16:94",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 63139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63140,
                  "nodeType": "ArrayTypeName",
                  "src": "389:9:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 63144,
                "mutability": "mutable",
                "name": "shares",
                "nameLocation": "425:6:94",
                "nodeType": "VariableDeclaration",
                "scope": 63145,
                "src": "415:16:94",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 63142,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63143,
                  "nodeType": "ArrayTypeName",
                  "src": "415:9:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DepositResult",
            "nameLocation": "293:13:94",
            "scope": 63180,
            "visibility": "public"
          },
          {
            "id": 63151,
            "nodeType": "FunctionDefinition",
            "src": "444:72:94",
            "nodes": [],
            "functionSelector": "fabeab93",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setVaultSupervisor",
            "nameLocation": "453:18:94",
            "parameters": {
              "id": 63149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63148,
                  "mutability": "mutable",
                  "name": "_vaultSupervisor",
                  "nameLocation": "489:16:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63151,
                  "src": "472:33:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                    "typeString": "contract IVaultSupervisor"
                  },
                  "typeName": {
                    "id": 63147,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63146,
                      "name": "IVaultSupervisor",
                      "nameLocations": [
                        "472:16:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63404,
                      "src": "472:16:94"
                    },
                    "referencedDeclaration": 63404,
                    "src": "472:16:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "471:35:94"
            },
            "returnParameters": {
              "id": 63150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "515:0:94"
            },
            "scope": 63180,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63157,
            "nodeType": "FunctionDefinition",
            "src": "521:87:94",
            "nodes": [],
            "functionSelector": "73628517",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setDelegationSupervisor",
            "nameLocation": "530:23:94",
            "parameters": {
              "id": 63155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63154,
                  "mutability": "mutable",
                  "name": "_delegationSupervisor",
                  "nameLocation": "576:21:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63157,
                  "src": "554:43:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                    "typeString": "contract IDelegationSupervisor"
                  },
                  "typeName": {
                    "id": 63153,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63152,
                      "name": "IDelegationSupervisor",
                      "nameLocations": [
                        "554:21:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63097,
                      "src": "554:21:94"
                    },
                    "referencedDeclaration": 63097,
                    "src": "554:21:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "553:45:94"
            },
            "returnParameters": {
              "id": 63156,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "607:0:94"
            },
            "scope": 63180,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63167,
            "nodeType": "FunctionDefinition",
            "src": "613:94:94",
            "nodes": [],
            "functionSelector": "e85062b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeposits",
            "nameLocation": "622:11:94",
            "parameters": {
              "id": 63161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63160,
                  "mutability": "mutable",
                  "name": "stakers",
                  "nameLocation": "651:7:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63167,
                  "src": "634:24:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63158,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "634:7:94",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 63159,
                    "nodeType": "ArrayTypeName",
                    "src": "634:9:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "633:26:94"
            },
            "returnParameters": {
              "id": 63166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63165,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63167,
                  "src": "683:22:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IQuerier.DepositResult[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63163,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63162,
                        "name": "DepositResult",
                        "nameLocations": [
                          "683:13:94"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63145,
                        "src": "683:13:94"
                      },
                      "referencedDeclaration": 63145,
                      "src": "683:13:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DepositResult_$63145_storage_ptr",
                        "typeString": "struct IQuerier.DepositResult"
                      }
                    },
                    "id": 63164,
                    "nodeType": "ArrayTypeName",
                    "src": "683:15:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_storage_$dyn_storage_ptr",
                      "typeString": "struct IQuerier.DepositResult[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "682:24:94"
            },
            "scope": 63180,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63179,
            "nodeType": "FunctionDefinition",
            "src": "712:169:94",
            "nodes": [],
            "functionSelector": "b9c7f52e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdraws",
            "nameLocation": "721:12:94",
            "parameters": {
              "id": 63170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63169,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "742:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63179,
                  "src": "734:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63168,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "734:7:94",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "733:16:94"
            },
            "returnParameters": {
              "id": 63178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63174,
                  "mutability": "mutable",
                  "name": "allWithdrawals",
                  "nameLocation": "832:14:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63179,
                  "src": "797:49:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63172,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63171,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "797:8:94",
                          "806:16:94"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "797:25:94"
                      },
                      "referencedDeclaration": 62732,
                      "src": "797:25:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 63173,
                    "nodeType": "ArrayTypeName",
                    "src": "797:27:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63177,
                  "mutability": "mutable",
                  "name": "isWithdrawPending",
                  "nameLocation": "862:17:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63179,
                  "src": "848:31:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63175,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "848:4:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 63176,
                    "nodeType": "ArrayTypeName",
                    "src": "848:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "796:84:94"
            },
            "scope": 63180,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IQuerier",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63180
        ],
        "name": "IQuerier",
        "nameLocation": "271:8:94",
        "scope": 63181,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 94
} as const;