export const IDelegationSupervisor = {
  "abi": [
    {
      "type": "function",
      "name": "fetchQueuedWithdrawals",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "queuedWithdrawals",
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
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "finishWithdraw",
      "inputs": [
        {
          "name": "withdrawals",
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
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "name": "vaultSupervisor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "minWithdrawDelay",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "manager",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isWithdrawPending",
      "inputs": [
        {
          "name": "withdrawal",
          "type": "tuple",
          "internalType": "struct Withdraw.QueuedWithdrawal",
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
    },
    {
      "type": "function",
      "name": "pause",
      "inputs": [
        {
          "name": "toPause",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startWithdraw",
      "inputs": [
        {
          "name": "withdrawRequest",
          "type": "tuple[]",
          "internalType": "struct Withdraw.WithdrawRequest[]",
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
      ],
      "outputs": [
        {
          "name": "withdrawalRoots",
          "type": "bytes32[]",
          "internalType": "bytes32[]"
        },
        {
          "name": "",
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
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawalDelay",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
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
    "fetchQueuedWithdrawals(address)": "8c475559",
    "finishWithdraw((address,address,uint256,uint256,(address[],uint256[],address))[])": "86e9a1f7",
    "initialize(address,uint256,address)": "c350a1b5",
    "isWithdrawPending((address,address,uint256,uint256,(address[],uint256[],address)))": "4618c974",
    "pause(bool)": "02329a29",
    "startWithdraw((address[],uint256[],address)[])": "92dca407",
    "withdrawalDelay()": "a7ab6961"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"fetchQueuedWithdrawals\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"queuedWithdrawals\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"withdrawals\",\"type\":\"tuple[]\"}],\"name\":\"finishWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultSupervisor\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"minWithdrawDelay\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"manager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal\",\"name\":\"withdrawal\",\"type\":\"tuple\"}],\"name\":\"isWithdrawPending\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"toPause\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest[]\",\"name\":\"withdrawRequest\",\"type\":\"tuple[]\"}],\"name\":\"startWithdraw\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"withdrawalRoots\",\"type\":\"bytes32[]\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawalDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/IDelegationSupervisor.sol\":\"IDelegationSupervisor\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
              "name": "staker",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fetchQueuedWithdrawals",
          "outputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "queuedWithdrawals",
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
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "withdrawals",
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
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "finishWithdraw"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vaultSupervisor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "minWithdrawDelay",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "manager",
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
              "internalType": "struct Withdraw.QueuedWithdrawal",
              "name": "withdrawal",
              "type": "tuple",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isWithdrawPending",
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
              "internalType": "bool",
              "name": "toPause",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [
            {
              "internalType": "struct Withdraw.WithdrawRequest[]",
              "name": "withdrawRequest",
              "type": "tuple[]",
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
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startWithdraw",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "withdrawalRoots",
              "type": "bytes32[]"
            },
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "",
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
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "withdrawalDelay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
        "src/interfaces/IDelegationSupervisor.sol": "IDelegationSupervisor"
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
    "absolutePath": "src/interfaces/IDelegationSupervisor.sol",
    "id": 63098,
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
    "src": "51:871:92",
    "nodes": [
      {
        "id": 63037,
        "nodeType": "PragmaDirective",
        "src": "51:24:92",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63038,
        "nodeType": "ImportDirective",
        "src": "77:22:92",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63098,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63039,
        "nodeType": "ImportDirective",
        "src": "100:34:92",
        "nodes": [],
        "absolutePath": "src/entities/Withdraw.sol",
        "file": "../entities/Withdraw.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63098,
        "sourceUnit": 62914,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 63097,
        "nodeType": "ContractDefinition",
        "src": "136:785:92",
        "nodes": [
          {
            "id": 63044,
            "nodeType": "FunctionDefinition",
            "src": "174:59:92",
            "nodes": [],
            "functionSelector": "a7ab6961",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawalDelay",
            "nameLocation": "183:15:92",
            "parameters": {
              "id": 63040,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "198:2:92"
            },
            "returnParameters": {
              "id": 63043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63042,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63044,
                  "src": "224:7:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "224:7:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "223:9:92"
            },
            "scope": 63097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63053,
            "nodeType": "FunctionDefinition",
            "src": "239:97:92",
            "nodes": [],
            "functionSelector": "c350a1b5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "248:10:92",
            "parameters": {
              "id": 63051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63046,
                  "mutability": "mutable",
                  "name": "vaultSupervisor",
                  "nameLocation": "267:15:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63053,
                  "src": "259:23:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63045,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:92",
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
                  "id": 63048,
                  "mutability": "mutable",
                  "name": "minWithdrawDelay",
                  "nameLocation": "292:16:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63053,
                  "src": "284:24:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63050,
                  "mutability": "mutable",
                  "name": "manager",
                  "nameLocation": "318:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63053,
                  "src": "310:15:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63049,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:92",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "258:68:92"
            },
            "returnParameters": {
              "id": 63052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "335:0:92"
            },
            "scope": 63097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63067,
            "nodeType": "FunctionDefinition",
            "src": "342:180:92",
            "nodes": [],
            "functionSelector": "92dca407",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startWithdraw",
            "nameLocation": "351:13:92",
            "parameters": {
              "id": 63058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63057,
                  "mutability": "mutable",
                  "name": "withdrawRequest",
                  "nameLocation": "401:15:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63067,
                  "src": "365:51:92",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct Withdraw.WithdrawRequest[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63055,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63054,
                        "name": "Withdraw.WithdrawRequest",
                        "nameLocations": [
                          "365:8:92",
                          "374:15:92"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62742,
                        "src": "365:24:92"
                      },
                      "referencedDeclaration": 62742,
                      "src": "365:24:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                        "typeString": "struct Withdraw.WithdrawRequest"
                      }
                    },
                    "id": 63056,
                    "nodeType": "ArrayTypeName",
                    "src": "365:26:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_WithdrawRequest_$62742_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.WithdrawRequest[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "364:53:92"
            },
            "returnParameters": {
              "id": 63066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63061,
                  "mutability": "mutable",
                  "name": "withdrawalRoots",
                  "nameLocation": "469:15:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63067,
                  "src": "452:32:92",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63059,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "452:7:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 63060,
                    "nodeType": "ArrayTypeName",
                    "src": "452:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63065,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63067,
                  "src": "486:34:92",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63063,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63062,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "486:8:92",
                          "495:16:92"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "486:25:92"
                      },
                      "referencedDeclaration": 62732,
                      "src": "486:25:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 63064,
                    "nodeType": "ArrayTypeName",
                    "src": "486:27:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "451:70:92"
            },
            "scope": 63097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63074,
            "nodeType": "FunctionDefinition",
            "src": "528:83:92",
            "nodes": [],
            "functionSelector": "86e9a1f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "finishWithdraw",
            "nameLocation": "537:14:92",
            "parameters": {
              "id": 63072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63071,
                  "mutability": "mutable",
                  "name": "withdrawals",
                  "nameLocation": "589:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63074,
                  "src": "552:48:92",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63069,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63068,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "552:8:92",
                          "561:16:92"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "552:25:92"
                      },
                      "referencedDeclaration": 62732,
                      "src": "552:25:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 63070,
                    "nodeType": "ArrayTypeName",
                    "src": "552:27:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "551:50:92"
            },
            "returnParameters": {
              "id": 63073,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "610:0:92"
            },
            "scope": 63097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63079,
            "nodeType": "FunctionDefinition",
            "src": "617:38:92",
            "nodes": [],
            "functionSelector": "02329a29",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "626:5:92",
            "parameters": {
              "id": 63077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63076,
                  "mutability": "mutable",
                  "name": "toPause",
                  "nameLocation": "637:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63079,
                  "src": "632:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63075,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "632:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "631:14:92"
            },
            "returnParameters": {
              "id": 63078,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "654:0:92"
            },
            "scope": 63097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63088,
            "nodeType": "FunctionDefinition",
            "src": "661:149:92",
            "nodes": [],
            "functionSelector": "8c475559",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fetchQueuedWithdrawals",
            "nameLocation": "670:22:92",
            "parameters": {
              "id": 63082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63081,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "701:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63088,
                  "src": "693:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:7:92",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "692:16:92"
            },
            "returnParameters": {
              "id": 63087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63086,
                  "mutability": "mutable",
                  "name": "queuedWithdrawals",
                  "nameLocation": "791:17:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63088,
                  "src": "756:52:92",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 63084,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 63083,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "756:8:92",
                          "765:16:92"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "756:25:92"
                      },
                      "referencedDeclaration": 62732,
                      "src": "756:25:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 63085,
                    "nodeType": "ArrayTypeName",
                    "src": "756:27:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "755:54:92"
            },
            "scope": 63097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63096,
            "nodeType": "FunctionDefinition",
            "src": "816:103:92",
            "nodes": [],
            "functionSelector": "4618c974",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isWithdrawPending",
            "nameLocation": "825:17:92",
            "parameters": {
              "id": 63092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63091,
                  "mutability": "mutable",
                  "name": "withdrawal",
                  "nameLocation": "878:10:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 63096,
                  "src": "843:45:92",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal"
                  },
                  "typeName": {
                    "id": 63090,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63089,
                      "name": "Withdraw.QueuedWithdrawal",
                      "nameLocations": [
                        "843:8:92",
                        "852:16:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62732,
                      "src": "843:25:92"
                    },
                    "referencedDeclaration": 62732,
                    "src": "843:25:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "842:47:92"
            },
            "returnParameters": {
              "id": 63095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63094,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63096,
                  "src": "913:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63093,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "912:6:92"
            },
            "scope": 63097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IDelegationSupervisor",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63097
        ],
        "name": "IDelegationSupervisor",
        "nameLocation": "146:21:92",
        "scope": 63098,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 92
} as const;